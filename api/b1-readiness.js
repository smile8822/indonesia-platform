const BASE = "https://evisa.imigrasi.go.id";
const UA =
  "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/152.0.0.0 Safari/537.36";

function cookiesFrom(headers) {
  const values =
    typeof headers.getSetCookie === "function"
      ? headers.getSetCookie()
      : headers.get("set-cookie")
        ? [headers.get("set-cookie")]
        : [];
  const jar = new Map();
  for (const raw of values) {
    const first = String(raw).split(";")[0];
    const eq = first.indexOf("=");
    if (eq > 0) jar.set(first.slice(0, eq).trim(), first.slice(eq + 1).trim());
  }
  return jar;
}

function absorb(jar, headers) {
  const values =
    typeof headers.getSetCookie === "function"
      ? headers.getSetCookie()
      : headers.get("set-cookie")
        ? [headers.get("set-cookie")]
        : [];
  for (const raw of values) {
    const first = String(raw).split(";")[0];
    const eq = first.indexOf("=");
    if (eq > 0) jar.set(first.slice(0, eq).trim(), first.slice(eq + 1).trim());
  }
}

function cookieHeader(jar) {
  return [...jar.entries()].map(([k, v]) => `${k}=${v}`).join("; ");
}

function normalize(value) {
  return String(value ?? "")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim()
    .toUpperCase();
}

function selectOptions(html, id) {
  const match = html.match(
    new RegExp(
      '<select\\b([^>]*\\bid=["\\\']' +
        id +
        '["\\\'][^>]*)>([\\s\\S]*?)<\\/select>',
      "i",
    ),
  );
  if (!match) return [];
  return [...match[2].matchAll(/<option\b([^>]*)>([\s\S]*?)<\/option>/gi)]
    .map((option) => ({
      id: option[1].match(/\bvalue=["']([^"']*)["']/i)?.[1] ?? "",
      name: option[2].replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim(),
    }))
    .filter((item) => item.id);
}

async function postSelection(jar, payload) {
  const response = await fetch(BASE + "/web/visa-selection/data", {
    method: "POST",
    redirect: "manual",
    headers: {
      "user-agent": UA,
      accept: "application/json,text/javascript,*/*;q=0.01",
      "x-requested-with": "XMLHttpRequest",
      referer: BASE + "/web/visa-selection",
      "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
      cookie: cookieHeader(jar),
    },
    body: new URLSearchParams(payload),
    signal: AbortSignal.timeout(8000),
  });
  absorb(jar, response.headers);
  const text = await response.text();
  let body = null;
  try {
    body = JSON.parse(text);
  } catch {
    body = null;
  }
  if (!response.ok || !body) {
    throw new Error(`selection step failed: HTTP ${response.status}`);
  }
  return body;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("allow", "POST");
    return res.status(405).json({ error: "METHOD_NOT_ALLOWED" });
  }
  const country = normalize(req.body?.country ?? "REPUBLIC OF KOREA");
  if (!country) return res.status(400).json({ error: "COUNTRY_REQUIRED" });

  try {
    const page = await fetch(BASE + "/web/visa-selection", {
      headers: { "user-agent": UA, accept: "text/html,*/*" },
      signal: AbortSignal.timeout(8000),
    });
    const html = await page.text();
    if (
      page.status !== 200 ||
      !/The Official eVisa website for Indonesia/i.test(html)
    ) {
      return res.status(502).json({
        error: "OFFICIAL_PORTAL_UNAVAILABLE",
        upstreamStatus: page.status,
      });
    }
    const jar = cookiesFrom(page.headers);
    const countries = selectOptions(html, "selectCountry");
    const parents = selectOptions(html, "selectParentActivity");
    const countryOption = countries.find(
      (item) => normalize(item.name) === country,
    );
    const parent = parents.find(
      (item) => normalize(item.name) === "GENERAL, FAMILY, OR SOCIAL",
    );
    if (!countryOption || !parent) {
      return res.status(409).json({
        error: "SEMANTIC_SELECTION_NOT_FOUND",
        countryFound: Boolean(countryOption),
        parentFound: Boolean(parent),
      });
    }

    const step0 = await postSelection(jar, {
      parent_id: parent.id,
      step: "0",
    });
    const activity = (step0.data ?? []).find(
      (item) =>
        normalize(item?.name) === "TOURISM, FAMILY VISIT, AND TRANSIT",
    );
    if (!activity?.id) {
      return res.status(409).json({ error: "TOURISM_ACTIVITY_NOT_FOUND" });
    }

    const step1 = await postSelection(jar, {
      activity_id: String(activity.id),
      country_id: countryOption.id,
      step: "1",
    });
    const visa = (step1.data ?? []).find((item) =>
      normalize(item?.name).startsWith("B1 - TOURIST"),
    );
    if (!visa?.id) {
      return res.status(409).json({ error: "B1_NOT_AVAILABLE" });
    }

    const step2 = await postSelection(jar, {
      visa_type_id: String(visa.id),
      step: "2",
    });
    const visaType = step2.data?.visaType?.[0] ?? null;
    const stay = (step2.data?.limitedStay ?? []).find(
      (item) => String(item?.value ?? "") === "30",
    );
    if (!visaType || !stay?.id || visaType.index_code !== "B1") {
      return res.status(409).json({ error: "B1_30_DAY_CONFIGURATION_CHANGED" });
    }

    const step1Path =
      "/web/application_add/visa/" +
      encodeURIComponent(visa.id) +
      "/" +
      encodeURIComponent(stay.id) +
      "/" +
      encodeURIComponent(activity.id) +
      "/step_1";

    const application = await fetch(BASE + step1Path, {
      redirect: "manual",
      headers: {
        "user-agent": UA,
        accept: "text/html,*/*",
        referer: BASE + "/web/visa-selection",
        cookie: cookieHeader(jar),
      },
      signal: AbortSignal.timeout(8000),
    });
    const applicationHtml = await application.text();
    const stepOneReady =
      application.status === 200 &&
      /name=["']passport-attachment["']/i.test(applicationHtml) &&
      /name=["']picture["']/i.test(applicationHtml) &&
      /name=["']csrf_token["']/i.test(applicationHtml);

    return res.status(stepOneReady ? 200 : 409).json({
      service: "miso-indonesia-immigration-bridge",
      mode: "READ_ONLY_PREPARE",
      mutationEnabled: false,
      country: countryOption.name,
      purpose: activity.name,
      visa: visa.name,
      visaIndex: visaType.index_code,
      durationDays: Number(visaType.duration),
      governmentFeeIdr: 500000,
      stepOneReady,
      protocol: {
        selectionSteps: ["0", "1", "2"],
        passportField: "passport-attachment",
        photoField: "picture",
        csrfField: "csrf_token",
        mrzPayloadField: "mrz_payload_data",
        uploadPath: "/web/upload-passport-add",
        step2Path: "/web/application_add/visa/step_2",
        step3Path: "/web/application_add/visa/step_3",
      },
      region: process.env.VERCEL_REGION ?? null,
    });
  } catch (error) {
    return res.status(502).json({
      error: "BRIDGE_PREPARE_FAILED",
      message: error instanceof Error ? error.message : String(error),
      mutationEnabled: false,
    });
  }
}

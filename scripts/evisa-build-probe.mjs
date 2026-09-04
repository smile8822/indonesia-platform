const base = "https://evisa.imigrasi.go.id";
const selectionUrl = base + "/web/visa-selection";
const dataUrl = base + "/web/visa-selection/data";
const ua = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/152.0.0.0 Safari/537.36";
const jar = new Map();

function absorb(headers) {
  const setCookies =
    typeof headers.getSetCookie === "function"
      ? headers.getSetCookie()
      : headers.get("set-cookie")
        ? [headers.get("set-cookie")]
        : [];
  for (const raw of setCookies) {
    const first = String(raw).split(";")[0];
    const eq = first.indexOf("=");
    if (eq > 0) jar.set(first.slice(0, eq).trim(), first.slice(eq + 1).trim());
  }
}
function cookie() {
  return [...jar.entries()].map(([k, v]) => k + "=" + v).join("; ");
}
const common = {
  "user-agent": ua,
  accept: "text/html,*/*",
};

const page = await fetch(selectionUrl, { headers: common });
absorb(page.headers);
const html = await page.text();
const countryOptions = [...html.matchAll(/<option\b([^>]*)>([\s\S]*?)<\/option>/gi)].map((m) => {
  const attrs = m[1];
  const text = m[2].replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  const value = attrs.match(/\bvalue=["']([^"']*)["']/i)?.[1] ?? "";
  return { value, text };
});
const korea = countryOptions.find((x) => x.text === "REPUBLIC OF KOREA");

async function post(data) {
  const r = await fetch(dataUrl, {
    method: "POST",
    headers: {
      "user-agent": ua,
      accept: "application/json,text/javascript,*/*;q=0.01",
      "x-requested-with": "XMLHttpRequest",
      referer: selectionUrl,
      "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
      cookie: cookie(),
    },
    body: new URLSearchParams(data),
  });
  absorb(r.headers);
  return r.json();
}
const step0 = await post({ parent_id: "d5bc2168-2f4a-4396-8eae-3d895a0508e9", step: "0" });
const activity = step0.data.find((x) => /Tourism, Family Visit, and Transit/i.test(String(x.name || "")));
const step1 = await post({ activity_id: activity.id, country_id: korea.value, step: "1" });
const b1 = step1.data.find((x) => /(^|\s)B1\b/i.test(String(x.name || "")));
const step2 = await post({ visa_type_id: b1.id, step: "2" });
const stay = step2.data.limitedStay.find((x) => String(x.value) === "30");

const step1Url = base + "/web/application_add/visa/" + b1.id + "/" + stay.id + "/" + activity.id + "/step_1";
const formResponse = await fetch(step1Url, {
  headers: {
    ...common,
    referer: selectionUrl,
    cookie: cookie(),
  },
  redirect: "follow",
});
absorb(formResponse.headers);
const formHtml = await formResponse.text();

const scripts = [...formHtml.matchAll(/<script(?![^>]+src=)[^>]*>([\s\S]*?)<\/script>/gi)]
  .map((m) => m[1])
  .join("\n")
  .replace(/\s+/g, " ");

for (const marker of [
  "passport-attachment",
  "path_attachment",
  "path_attachment_crop",
  "initial_file",
  "picture",
  "path_photo",
  "FormData",
  "step_2",
  "upload-passport",
  "csrf_token",
  "$('#form')",
  "$("#form")"
]) {
  const i = scripts.toLowerCase().indexOf(marker.toLowerCase());
  if (i >= 0) {
    console.log("MISO_EVISA_STEP1_CTX_" + marker.replace(/[^a-z0-9]+/gi, "_") + "=" +
      scripts.slice(Math.max(0, i - 2500), Math.min(scripts.length, i + 7000)));
  }
}

const buttons = [...formHtml.matchAll(/<(?:button|a)\b([^>]*)>([\s\S]*?)<\/(?:button|a)>/gi)]
  .map((m) => {
    const attrs = m[1];
    const text = m[2].replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
    const read = (name) => attrs.match(new RegExp("\\b" + name + "=[\\\"']([^\\\"']*)[\\\"']", "i"))?.[1] ?? null;
    return { id: read("id"), href: read("href"), type: read("type"), text };
  })
  .filter((x) => x.text || x.id);
console.log("MISO_EVISA_STEP1_BUTTONS=" + JSON.stringify(buttons));

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

const page = await fetch(selectionUrl, {
  headers: { "user-agent": ua, accept: "text/html,*/*" },
});
absorb(page.headers);
const html = await page.text();

const countryOptions = [...html.matchAll(/<option\b([^>]*)>([\s\S]*?)<\/option>/gi)]
  .map((match) => {
    const attrs = match[1];
    const text = match[2].replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
    const value = attrs.match(/\bvalue=["']([^"']*)["']/i)?.[1] ?? "";
    return { value, text };
  });
const korea = countryOptions.find((item) => item.text === "REPUBLIC OF KOREA");

async function post(data) {
  const response = await fetch(dataUrl, {
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
  absorb(response.headers);
  return response.json();
}

const parentId = "d5bc2168-2f4a-4396-8eae-3d895a0508e9";
const step0 = await post({ parent_id: parentId, step: "0" });
const activity = step0.data.find((item) =>
  /Tourism, Family Visit, and Transit/i.test(String(item.name || "")),
);
const step1 = await post({
  activity_id: activity.id,
  country_id: korea.value,
  step: "1",
});
const b1 = step1.data.find((item) => /(^|\s)B1\b/i.test(String(item.name || "")));
const step2 = await post({ visa_type_id: b1.id, step: "2" });
const stay = step2.data.limitedStay.find((item) => String(item.value) === "30");

const step1Url =
  base +
  "/web/application_add/visa/" +
  b1.id +
  "/" +
  stay.id +
  "/" +
  activity.id +
  "/step_1";
const formResponse = await fetch(step1Url, {
  headers: {
    "user-agent": ua,
    accept: "text/html,*/*",
    referer: selectionUrl,
    cookie: cookie(),
  },
  redirect: "follow",
});
absorb(formResponse.headers);
const formHtml = await formResponse.text();

const inputs = [...formHtml.matchAll(/<input\b([^>]*)>/gi)].map((match) => {
  const attrs = match[1];
  const read = (name) =>
    attrs.match(new RegExp("\\b" + name + "=[\\\"']([^\\\"']*)[\\\"']", "i"))?.[1] ?? null;
  return {
    type: read("type") ?? "text",
    name: read("name"),
    id: read("id"),
    accept: read("accept"),
    required: /\brequired\b/i.test(attrs),
  };
});
const forms = [...formHtml.matchAll(/<form\b([^>]*)>/gi)].map((match) => {
  const attrs = match[1];
  const read = (name) =>
    attrs.match(new RegExp("\\b" + name + "=[\\\"']([^\\\"']*)[\\\"']", "i"))?.[1] ?? null;
  return {
    action: read("action"),
    method: read("method"),
    enctype: read("enctype"),
    id: read("id"),
  };
});

console.log("MISO_EVISA_KOREA=" + JSON.stringify(korea));
console.log("MISO_EVISA_B1=" + JSON.stringify({ activity, b1, stay }));
console.log("MISO_EVISA_STEP1_STATUS=" + formResponse.status);
console.log("MISO_EVISA_STEP1_FINAL_URL=" + formResponse.url);
console.log("MISO_EVISA_STEP1_FORMS=" + JSON.stringify(forms));
console.log("MISO_EVISA_STEP1_INPUTS=" + JSON.stringify(inputs));

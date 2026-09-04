const base = "https://evisa.imigrasi.go.id";
const visaId = "4eb7326f-ddfb-4e61-a24a-fb02adceb67f";
const stayId = "3dc4013d-e9af-44bf-89c0-82cba92563c3";
const activityId = "f0c05fe2-f8d6-4bf1-904c-9fa5a694162f";
const url = base + "/web/application_add/visa/" + visaId + "/" + stayId + "/" + activityId + "/step_1";
const response = await fetch(url, {
  headers: {
    "user-agent":
      "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/152.0.0.0 Safari/537.36",
    accept: "text/html,*/*",
    referer: base + "/web/visa-selection",
  },
  redirect: "follow",
});
const html = await response.text();

const inputs = [...html.matchAll(/<input\b([^>]*)>/gi)].map((match) => {
  const attrs = match[1];
  const read = (name) => attrs.match(new RegExp("\\b" + name + "=[\\\"']([^\\\"']*)[\\\"']", "i"))?.[1] ?? null;
  return {
    type: read("type") ?? "text",
    name: read("name"),
    id: read("id"),
    accept: read("accept"),
    required: /\brequired\b/i.test(attrs),
  };
});
const forms = [...html.matchAll(/<form\b([^>]*)>/gi)].map((match) => {
  const attrs = match[1];
  const read = (name) => attrs.match(new RegExp("\\b" + name + "=[\\\"']([^\\\"']*)[\\\"']", "i"))?.[1] ?? null;
  return {
    action: read("action"),
    method: read("method"),
    enctype: read("enctype"),
    id: read("id"),
  };
});
const text = html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
console.log("MISO_EVISA_STEP1_STATUS=" + response.status);
console.log("MISO_EVISA_STEP1_URL=" + response.url);
console.log("MISO_EVISA_STEP1_FORMS=" + JSON.stringify(forms));
console.log("MISO_EVISA_STEP1_INPUTS=" + JSON.stringify(inputs));
console.log("MISO_EVISA_STEP1_TEXT=" + text.slice(0, 5000));

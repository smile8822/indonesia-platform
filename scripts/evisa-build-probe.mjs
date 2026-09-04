const base = "https://evisa.imigrasi.go.id";
const selectionUrl = base + "/web/visa-selection";
const generateUrl = base + "/web/generate";
const ua = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/152.0.0.0 Safari/537.36";
const jar = new Map();
function absorb(headers) {
  const setCookies = typeof headers.getSetCookie === "function"
    ? headers.getSetCookie()
    : headers.get("set-cookie") ? [headers.get("set-cookie")] : [];
  for (const raw of setCookies) {
    const first = String(raw).split(";")[0];
    const eq = first.indexOf("=");
    if (eq > 0) jar.set(first.slice(0, eq).trim(), first.slice(eq + 1).trim());
  }
}
function cookie() {
  return [...jar.entries()].map(([k,v]) => k + "=" + v).join("; ");
}
const page = await fetch(selectionUrl, {
  headers: { "user-agent": ua, accept: "text/html,*/*" }
});
absorb(page.headers);

async function generate(name) {
  const r = await fetch(generateUrl, {
    method: "POST",
    headers: {
      "user-agent": ua,
      accept: "application/json,text/javascript,*/*;q=0.01",
      "x-requested-with": "XMLHttpRequest",
      referer: selectionUrl,
      "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
      cookie: cookie()
    },
    body: new URLSearchParams({ name, param: "" })
  });
  absorb(r.headers);
  const text = await r.text();
  let body = text;
  try { body = JSON.parse(text); } catch {}
  return { status: r.status, body };
}
for (const name of ["upload_photo","web_upload_passport_add","web_application_add_step_2"]) {
  console.log("MISO_EVISA_ROUTE_" + name + "=" + JSON.stringify(await generate(name)));
}

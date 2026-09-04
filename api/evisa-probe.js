export default async function handler(_req, res) {
  const base = "https://evisa.imigrasi.go.id";
  const selectionUrl = base + "/web/visa-selection";
  const dataUrl = base + "/web/visa-selection/data";
  const ua = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/152.0.0.0 Safari/537.36";
  const page = await fetch(selectionUrl, {
    headers: { "user-agent": ua, accept: "text/html,*/*" },
  });
  const setCookies =
    typeof page.headers.getSetCookie === "function"
      ? page.headers.getSetCookie()
      : page.headers.get("set-cookie")
        ? [page.headers.get("set-cookie")]
        : [];
  const cookie = setCookies
    .map((raw) => String(raw).split(";")[0])
    .filter(Boolean)
    .join("; ");

  async function post(data) {
    const response = await fetch(dataUrl, {
      method: "POST",
      headers: {
        "user-agent": ua,
        accept: "application/json,text/javascript,*/*;q=0.01",
        "x-requested-with": "XMLHttpRequest",
        referer: selectionUrl,
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        cookie,
      },
      body: new URLSearchParams(data),
    });
    const text = await response.text();
    let body = text;
    try { body = JSON.parse(text); } catch {}
    return { status: response.status, body };
  }

  const parentId = "d5bc2168-2f4a-4396-8eae-3d895a0508e9";
  const step0 = await post({ parent_id: parentId, step: "0" });
  const activities = Array.isArray(step0.body?.data) ? step0.body.data : [];
  const activity = activities.find((item) =>
    /Tourism, Family Visit, and Transit/i.test(String(item?.name || "")),
  );

  let step1 = null;
  let b1 = null;
  let step2 = null;
  if (activity?.id) {
    step1 = await post({
      activity_id: activity.id,
      country_id: "0e63775f-7370-4203-9ff4-8a7ce1b83da5",
      step: "1",
    });
    const visas = Array.isArray(step1.body?.data) ? step1.body.data : [];
    b1 = visas.find((item) => /(^|\s)B1\b/i.test(String(item?.name || "")));
    if (b1?.id) {
      step2 = await post({ visa_type_id: b1.id, step: "2" });
    }
  }

  res.status(200).json({
    probe: "MISO_VERCEL_B1_SELECTION",
    pageStatus: page.status,
    activity,
    b1,
    step2,
    region: process.env.VERCEL_REGION ?? null,
  });
}

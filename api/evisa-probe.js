export default async function handler(_req, res) {
  const target = "https://evisa.imigrasi.go.id/web/visa-selection";
  const ua = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/152.0.0.0 Safari/537.36";
  const response = await fetch(target, {
    headers: { "user-agent": ua, accept: "text/html,*/*" },
  });
  const html = await response.text();
  const marker = "buttonApply";
  const index = html.indexOf(marker);
  res.status(200).json({
    probe: "MISO_VERCEL_B1_APPLY_CONTEXT",
    status: response.status,
    found: index >= 0,
    context:
      index >= 0
        ? html.slice(Math.max(0, index - 4000), Math.min(html.length, index + 12000))
        : null,
    region: process.env.VERCEL_REGION ?? null,
  });
}

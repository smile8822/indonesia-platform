export default async function handler(_req, res) {
  const target = "https://evisa.imigrasi.go.id/web/visa-selection";
  const response = await fetch(target, {
    headers: {
      "user-agent":
        "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/152.0.0.0 Safari/537.36",
      accept: "text/html,*/*",
    },
  });
  const html = await response.text();
  const needles = [
    "$('#buttonApply')",
    "$("#buttonApply")",
    "buttonApply).on",
    "buttonApply').on",
    "buttonApply\").on"
  ];
  const matches = [];
  for (const needle of needles) {
    let start = 0;
    while (true) {
      const index = html.indexOf(needle, start);
      if (index < 0) break;
      matches.push({
        needle,
        index,
        context: html.slice(Math.max(0, index - 1500), Math.min(html.length, index + 7000)),
      });
      start = index + needle.length;
    }
  }
  res.status(200).json({
    probe: "MISO_VERCEL_B1_APPLY_HANDLER",
    status: response.status,
    matches,
    region: process.env.VERCEL_REGION ?? null,
  });
}

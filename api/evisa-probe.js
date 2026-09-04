export default async function handler(_req, res) {
  const base = "https://evisa.imigrasi.go.id";
  const pageUrl = base + "/web/visa-selection";
  const ua =
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/152.0.0.0 Safari/537.36";
  try {
    const pageResponse = await fetch(pageUrl, {
      redirect: "follow",
      headers: { "user-agent": ua, accept: "text/html,*/*" },
    });
    const html = await pageResponse.text();
    const scriptSrcs = [...html.matchAll(/<script[^>]+src=["']([^"']+)["']/gi)]
      .map((m) => m[1])
      .filter((src) => src.startsWith("/") && /\.js(?:\?|$)/i.test(src))
      .slice(0, 20);

    const scripts = [];
    for (const src of scriptSrcs) {
      const url = new URL(src, base).toString();
      const r = await fetch(url, {
        headers: { "user-agent": ua, accept: "*/*", referer: pageUrl },
      });
      const text = await r.text();
      scripts.push({
        src,
        status: r.status,
        length: text.length,
        endpoints: [...new Set([
          ...[...text.matchAll(/["'`](\/[^"'\`\s]{2,200})["'`]/g)].map((m) => m[1]),
          ...[...text.matchAll(/https:\/\/evisa\.imigrasi\.go\.id\/[^"'\`\s]+/g)].map((m) => m[0]),
        ])]
          .filter((x) => /visa|country|passport|apply|application|api|ajax|web\//i.test(x))
          .slice(0, 120),
        csrfMentions: [...new Set(
          [...text.matchAll(/csrf|xsrf|token|authorization|bearer|session/gi)].map((m) => m[0].toLowerCase())
        )].slice(0, 20),
      });
    }

    res.status(200).json({
      probe: "MISO_VERCEL_EVISA_SCRIPT_DISCOVERY",
      pageStatus: pageResponse.status,
      pageUrl: pageResponse.url,
      scripts,
      vercelRegion: process.env.VERCEL_REGION ?? null,
    });
  } catch (error) {
    res.status(200).json({
      probe: "MISO_VERCEL_EVISA_SCRIPT_DISCOVERY",
      error: error instanceof Error ? error.message : String(error),
      vercelRegion: process.env.VERCEL_REGION ?? null,
    });
  }
}

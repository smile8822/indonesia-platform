export default async function handler(_req, res) {
  const target = "https://evisa.imigrasi.go.id/web/visa-selection";
  try {
    const response = await fetch(target, {
      redirect: "follow",
      headers: {
        "user-agent":
          "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/152.0.0.0 Safari/537.36",
        accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
      },
    });
    const text = await response.text();
    const scripts = [...text.matchAll(/<script[^>]+src=["']([^"']+)["']/gi)]
      .map((match) => match[1])
      .slice(0, 50);
    const links = [...text.matchAll(/<link[^>]+href=["']([^"']+)["']/gi)]
      .map((match) => match[1])
      .filter((href) => /\.js(?:\?|$)|\.css(?:\?|$)|manifest|api/i.test(href))
      .slice(0, 50);
    const forms = [...text.matchAll(/<form[^>]*action=["']([^"']*)["'][^>]*>/gi)]
      .map((match) => match[1])
      .slice(0, 20);
    res.status(200).json({
      probe: "MISO_VERCEL_EVISA_DISCOVERY",
      target,
      upstreamStatus: response.status,
      upstreamUrl: response.url,
      cloudfrontBlocked:
        response.status === 403 &&
        /cloudfront|request blocked|request could not be satisfied/i.test(text),
      title:
        text.match(/<title[^>]*>([^<]*)<\/title>/i)?.[1]?.trim() ?? null,
      scripts,
      links,
      forms,
      vercelRegion: process.env.VERCEL_REGION ?? null,
    });
  } catch (error) {
    res.status(200).json({
      probe: "MISO_VERCEL_EVISA_DISCOVERY",
      target,
      networkError: error instanceof Error ? error.message : String(error),
      vercelRegion: process.env.VERCEL_REGION ?? null,
    });
  }
}

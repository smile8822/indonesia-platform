export default async function handler(_req, res) {
  const base = "https://evisa.imigrasi.go.id";
  const pageUrl = base + "/web/visa-selection";
  const ua = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/152.0.0.0 Safari/537.36";
  const headers = { "user-agent": ua, accept: "text/html,*/*" };
  try {
    const pageResponse = await fetch(pageUrl, { redirect: "follow", headers });
    const html = await pageResponse.text();
    const appResponse = await fetch(base + "/assets/js/app.js?x=1", {
      headers: { ...headers, referer: pageUrl, accept: "*/*" },
    });
    const appJs = await appResponse.text();
    const marker = "/web/generate";
    const idx = appJs.indexOf(marker);
    const generateContext = idx >= 0
      ? appJs.slice(Math.max(0, idx - 2500), Math.min(appJs.length, idx + 3500))
      : null;

    const selects = [...html.matchAll(/<select\b([^>]*)>([\s\S]*?)<\/select>/gi)].map((m) => {
      const attrs = m[1];
      const body = m[2];
      const name = attrs.match(/\bname=["']([^"']+)["']/i)?.[1] ?? null;
      const id = attrs.match(/\bid=["']([^"']+)["']/i)?.[1] ?? null;
      const cls = attrs.match(/\bclass=["']([^"']+)["']/i)?.[1] ?? null;
      const options = [...body.matchAll(/<option\b([^>]*)>([\s\S]*?)<\/option>/gi)]
        .map((o) => ({
          value: o[1].match(/\bvalue=["']([^"']*)["']/i)?.[1] ?? "",
          text: o[2].replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim(),
        }))
        .slice(0, 80);
      return { name, id, className: cls, options };
    });

    const inputs = [...html.matchAll(/<input\b([^>]*)>/gi)].map((m) => {
      const attrs = m[1];
      return {
        type: attrs.match(/\btype=["']([^"']+)["']/i)?.[1] ?? "text",
        name: attrs.match(/\bname=["']([^"']+)["']/i)?.[1] ?? null,
        id: attrs.match(/\bid=["']([^"']+)["']/i)?.[1] ?? null,
        value: attrs.match(/\bvalue=["']([^"']*)["']/i)?.[1] ?? null,
      };
    }).slice(0, 100);

    const forms = [...html.matchAll(/<form\b([^>]*)>([\s\S]*?)<\/form>/gi)].map((m) => {
      const attrs = m[1];
      return {
        action: attrs.match(/\baction=["']([^"']*)["']/i)?.[1] ?? null,
        method: attrs.match(/\bmethod=["']([^"']*)["']/i)?.[1] ?? null,
        id: attrs.match(/\bid=["']([^"']+)["']/i)?.[1] ?? null,
        className: attrs.match(/\bclass=["']([^"']+)["']/i)?.[1] ?? null,
        text: m[2].replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim().slice(0, 1200),
      };
    });

    const inlineScripts = [...html.matchAll(/<script(?![^>]+src=)[^>]*>([\s\S]*?)<\/script>/gi)]
      .map((m) => m[1])
      .filter((s) => /generate|visa|country|passport|activity|length|payment/i.test(s))
      .map((s) => s.slice(0, 12000))
      .slice(0, 10);

    res.status(200).json({
      probe: "MISO_VERCEL_EVISA_SELECTION_DISCOVERY",
      pageStatus: pageResponse.status,
      appStatus: appResponse.status,
      generateContext,
      selects,
      inputs,
      forms,
      inlineScripts,
      vercelRegion: process.env.VERCEL_REGION ?? null,
    });
  } catch (error) {
    res.status(200).json({
      probe: "MISO_VERCEL_EVISA_SELECTION_DISCOVERY",
      error: error instanceof Error ? error.message : String(error),
      vercelRegion: process.env.VERCEL_REGION ?? null,
    });
  }
}

export default async function handler(_req, res) {
  const target = "https://evisa.imigrasi.go.id/web/visa-selection";
  const startedAt = Date.now();
  try {
    const response = await fetch(target, {
      redirect: "follow",
      headers: {
        "user-agent":
          "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/152.0.0.0 Safari/537.36",
        accept: "text/html,application/xhtml+xml,*/*",
      },
      signal: AbortSignal.timeout(8000),
    });
    const text = await response.text();
    const official =
      response.status === 200 &&
      /The Official eVisa website for Indonesia/i.test(text);
    res.status(official ? 200 : 502).json({
      service: "miso-indonesia-immigration-bridge",
      status: official ? "READY" : "UPSTREAM_UNAVAILABLE",
      upstreamStatus: response.status,
      officialPortal: official,
      region: process.env.VERCEL_REGION ?? null,
      latencyMs: Date.now() - startedAt,
      mutationEnabled: false,
    });
  } catch (error) {
    res.status(502).json({
      service: "miso-indonesia-immigration-bridge",
      status: "UPSTREAM_UNAVAILABLE",
      error: error instanceof Error ? error.message : String(error),
      region: process.env.VERCEL_REGION ?? null,
      mutationEnabled: false,
    });
  }
}

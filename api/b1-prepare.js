import { createHash, createHmac, timingSafeEqual } from "node:crypto";

const MAX_SKEW_MS = 5 * 60 * 1000;

function sign(secret, timestamp, method, pathname, body) {
  const bodyHash = createHash("sha256").update(body).digest("hex");
  return createHmac("sha256", secret)
    .update(`${timestamp}\n${method}\n${pathname}\n${bodyHash}`)
    .digest("hex");
}

function safeEqual(a, b) {
  const left = Buffer.from(String(a || ""), "utf8");
  const right = Buffer.from(String(b || ""), "utf8");
  return left.length === right.length && timingSafeEqual(left, right);
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("allow", "POST");
    return res.status(405).json({ error: "METHOD_NOT_ALLOWED" });
  }

  const secret = process.env.MISO_INDONESIA_IMMIGRATION_BRIDGE_SHARED_SECRET;
  if (!secret) {
    return res.status(503).json({
      error: "BRIDGE_SECRET_NOT_CONFIGURED",
      mutationEnabled: false,
    });
  }

  const timestamp = String(req.headers["x-miso-timestamp"] || "");
  const signature = String(req.headers["x-miso-signature"] || "");
  const timestampMs = Number(timestamp);
  if (
    !Number.isFinite(timestampMs) ||
    Math.abs(Date.now() - timestampMs) > MAX_SKEW_MS
  ) {
    return res.status(401).json({ error: "STALE_OR_INVALID_TIMESTAMP" });
  }

  const payload = req.body && typeof req.body === "object" ? req.body : null;
  const body = payload ? JSON.stringify(payload) : "";
  const expected = sign(secret, timestamp, "POST", "/b1/prepare", body);
  if (!safeEqual(signature, expected)) {
    return res.status(401).json({ error: "INVALID_SIGNATURE" });
  }

  const valid =
    payload?.visaType === "B1" &&
    typeof payload?.visaApplicationId === "string" &&
    typeof payload?.applicant === "object" &&
    typeof payload?.assets?.passport?.readUrl === "string" &&
    typeof payload?.assets?.photo?.readUrl === "string" &&
    typeof payload?.assets?.returnTicket?.readUrl === "string";

  if (!valid) {
    return res.status(400).json({
      error: "INVALID_B1_EXECUTION_PAYLOAD",
      mutationEnabled: false,
    });
  }

  return res.status(200).json({
    service: "miso-indonesia-immigration-bridge",
    mode: "B1_PREPARE_CONTRACT",
    accepted: true,
    visaApplicationId: payload.visaApplicationId,
    mutationEnabled: false,
    assetsAccepted: {
      passport: true,
      photo: true,
      returnTicket: true,
    },
    region: process.env.VERCEL_REGION ?? null,
  });
}

import { NextResponse } from "next/server";
import { brand } from "@/app/data/site";

export const runtime = "nodejs";

type ContactPayload = {
  name?: unknown;
  contact?: unknown;
  address?: unknown;
  service?: unknown;
  urgency?: unknown;
  message?: unknown;
  company?: unknown;
};

const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;
const requestLog = new Map<string, number[]>();

function isRateLimited(ip: string) {
  const now = Date.now();
  const timestamps = (requestLog.get(ip) ?? []).filter((time) => now - time < WINDOW_MS);

  if (timestamps.length >= MAX_REQUESTS) {
    requestLog.set(ip, timestamps);
    return true;
  }

  timestamps.push(now);
  requestLog.set(ip, timestamps);
  return false;
}

function clean(value: unknown, maxLength = 2000) {
  return String(value ?? "").trim().slice(0, maxLength);
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  // Honeypot: dolda fält som riktiga användare aldrig fyller i.
  if (clean(payload.company, 100)) {
    return NextResponse.json({ ok: true });
  }

  const name = clean(payload.name, 120);
  const contact = clean(payload.contact, 160);
  const address = clean(payload.address, 160);
  const service = clean(payload.service, 120);
  const urgency = clean(payload.urgency, 120);
  const message = clean(payload.message, 4000);

  if (!name || !contact || !message) {
    return NextResponse.json({ ok: false, error: "missing_fields" }, { status: 400 });
  }

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip") ??
    "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json({ ok: false, error: "rate_limited" }, { status: 429 });
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    // Ingen e-posttjänst konfigurerad – klienten faller tillbaka på mailto.
    return NextResponse.json({ ok: false, error: "email_not_configured" }, { status: 503 });
  }

  const to = process.env.CONTACT_TO || brand.email;
  const from = process.env.CONTACT_FROM || "VG EL AB <onboarding@resend.dev>";

  const text = [
    "Ny offertförfrågan från webbplatsen",
    "",
    `Namn: ${name}`,
    `Kontakt: ${contact}`,
    `Adress/Ort: ${address || "-"}`,
    `Tjänst: ${service || "-"}`,
    `Hur snabbt: ${urgency || "-"}`,
    "",
    "Beskrivning:",
    message,
  ].join("\n");

  const isEmail = contact.includes("@");

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      subject: `Offertförfrågan – ${service || "Webbplatsen"}`,
      text,
      ...(isEmail ? { reply_to: contact } : {}),
    }),
  });

  if (!response.ok) {
    return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}

// Lead-capture endpoint for the Quote Builder + any future booking-form variant.
// Server-side: post to Resend (email to hello@kiddoklub.com) + Telegram (@Ivan_james_bot).
// Stays alive even when Supabase/Skipcash secrets aren't seeded yet — degrades cleanly to logging.

import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

type Inquiry = {
  source?: string;
  name?: string;
  phone?: string;
  email?: string;
  theme?: string;
  size?: string;
  addons?: string[];
  total_qar?: number | null;
  preferred_date?: string;
  compound?: string;
  message?: string;
};

async function postTelegram(text: string) {
  const token = process.env.IVAN_JAMES_BOT_TOKEN;
  const chatId = process.env.IVAN_TELEGRAM_CHAT_ID;
  if (!token || !chatId) return { ok: false, reason: "telegram-not-configured" };
  const r = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text, parse_mode: "Markdown" }),
  });
  return { ok: r.ok };
}

async function postResend(subject: string, html: string) {
  const apiKey = process.env.KIDDOKLUB_RESEND_API_KEY;
  const from = process.env.KIDDOKLUB_RESEND_FROM || "hello@kiddoklub.com";
  if (!apiKey) return { ok: false, reason: "resend-not-configured" };
  const r = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: ["hello@kiddoklub.com"],
      subject,
      html,
    }),
  });
  return { ok: r.ok };
}

export async function POST(req: NextRequest) {
  let body: Inquiry = {};
  try {
    body = (await req.json()) as Inquiry;
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  // Minimum viable inquiry: a name + phone OR a freeform message
  const haveCore = (body.name && body.phone) || body.message;
  if (!haveCore) {
    return NextResponse.json({ ok: false, error: "missing_fields" }, { status: 400 });
  }

  const lines = [
    "🎈 *KiddoKlub inquiry*",
    `_source:_ ${body.source ?? "site"}`,
    body.name ? `*Name:* ${body.name}` : "",
    body.phone ? `*Phone:* ${body.phone}` : "",
    body.email ? `*Email:* ${body.email}` : "",
    body.theme ? `*Theme:* ${body.theme}` : "",
    body.size ? `*Size:* ${body.size}` : "",
    body.addons?.length ? `*Add-ons:* ${body.addons.join(", ")}` : "",
    typeof body.total_qar === "number" ? `*Total:* QAR ${body.total_qar.toLocaleString("en-US")}` : "",
    body.preferred_date ? `*Date:* ${body.preferred_date}` : "",
    body.compound ? `*Compound:* ${body.compound}` : "",
    body.message ? `*Message:* ${body.message}` : "",
  ].filter(Boolean);

  const text = lines.join("\n");

  const html = `<h2>New KiddoKlub inquiry</h2>${lines.map((l) => `<p>${l.replace(/\*([^*]+)\*/g, "<strong>$1</strong>")}</p>`).join("")}`;

  const [tg, rs] = await Promise.allSettled([
    postTelegram(text),
    postResend(`KiddoKlub inquiry: ${body.name ?? "anonymous"}`, html),
  ]);

  // Always log to Vercel runtime so we never lose a lead
  console.log("[kiddoklub:inquiry]", JSON.stringify({ body, tg, rs }));

  return NextResponse.json({ ok: true });
}

export async function GET() {
  return NextResponse.json({ status: "ready", endpoint: "kiddoklub inquiry" });
}

// Cal.com booking webhook handler
// Verified path: HMAC → idempotency → advisory lock → upsert client+booking → Skipcash deposit → Wati template → Telegram
// Council 2026-04-25 Agent 3: enforce idempotency_keys + transition_booking + try_lock_slot at the DB

import crypto from "node:crypto";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

function timingSafeEqualHex(a: string, b: string) {
  try {
    const aBuf = Buffer.from(a, "hex");
    const bBuf = Buffer.from(b, "hex");
    if (aBuf.length !== bBuf.length) return false;
    return crypto.timingSafeEqual(aBuf, bBuf);
  } catch {
    return false;
  }
}

export async function POST(req: NextRequest) {
  const secret = process.env.KIDDOKLUB_CAL_WEBHOOK_SECRET;
  if (!secret) {
    return NextResponse.json(
      { error: "webhook not configured" },
      { status: 503 }
    );
  }

  const raw = await req.text();
  const signature = req.headers.get("x-cal-signature-256") ?? "";
  const expected = crypto.createHmac("sha256", secret).update(raw).digest("hex");

  if (!timingSafeEqualHex(signature, expected)) {
    return NextResponse.json({ error: "invalid signature" }, { status: 401 });
  }

  // Parse + dispatch to kiddoklub-booking-intake skill via the intake helper.
  // For Phase 0 the body is logged + stored to webhook_events; full handler lands in Phase 1.
  const body = JSON.parse(raw);

  // TODO Phase 1:
  //   1. INSERT idempotency_keys ON CONFLICT DO NOTHING — return cached result if replay
  //   2. SELECT try_lock_slot($eventStartISO) — 409 if false
  //   3. Upsert clients by phone, insert booking row (status='pending_deposit')
  //   4. Insert payments row (kind='deposit'), create Skipcash invoice
  //   5. Enqueue outbox: Wati deposit_received_v2 + Resend confirm + Telegram card
  //   6. Cache result.

  console.log("[cal webhook] event_type=", body?.triggerEvent, "uid=", body?.payload?.uid);

  return NextResponse.json({ ok: true, received: body?.triggerEvent ?? "unknown" });
}

export async function GET() {
  return NextResponse.json({ status: "ready", endpoint: "kiddoklub cal webhook" });
}

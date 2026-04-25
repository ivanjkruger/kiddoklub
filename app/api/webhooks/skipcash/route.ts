// Skipcash payment webhook handler
// HMAC verification per Council 2026-04-25 Agent 3:
// canonical = `${PaymentId},${Amount},${Status},${TransactionId}` + SHA-256 + secret + timing-safe compare
// On Status=Paid → transition_booking('confirmed') if deposit, ('paid_in_full') if balance.
// Reconcile on gross_amount, not net (Skipcash FX/fee gotcha).

import crypto from "node:crypto";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

function timingSafeEqualB64(a: string, b: string) {
  try {
    const aBuf = Buffer.from(a, "base64");
    const bBuf = Buffer.from(b, "base64");
    if (aBuf.length !== bBuf.length) return false;
    return crypto.timingSafeEqual(aBuf, bBuf);
  } catch {
    return false;
  }
}

export async function POST(req: NextRequest) {
  const secret = process.env.KIDDOKLUB_SKIPCASH_WEBHOOK_SECRET;
  if (!secret) {
    return NextResponse.json(
      { error: "webhook not configured" },
      { status: 503 }
    );
  }

  const body = (await req.json()) as {
    PaymentId: string;
    Amount: string | number;
    Status: string;
    TransactionId: string;
  };

  const signature = req.headers.get("x-skipcash-signature") ?? "";
  const canonical = `${body.PaymentId},${body.Amount},${body.Status},${body.TransactionId}`;
  const expected = crypto.createHmac("sha256", secret).update(canonical).digest("base64");

  if (!timingSafeEqualB64(signature, expected)) {
    return NextResponse.json({ error: "invalid signature" }, { status: 401 });
  }

  // TODO Phase 1:
  //   1. INSERT idempotency_keys (key='skipcash:'+PaymentId) ON CONFLICT DO NOTHING
  //   2. UPDATE payments SET status='paid', paid_at=now() WHERE skipcash_payment_id = $1
  //   3. transition_booking(booking_id, 'confirmed' | 'paid_in_full')
  //   4. Enqueue outbox: Telegram alert + (if balance) Wati 'all set' confirmation
  //   5. Daily 23:00 reconciliation job verifies gross_amount matches

  console.log("[skipcash webhook] status=", body.Status, "amount=", body.Amount, "payment=", body.PaymentId);

  return NextResponse.json({ ok: true });
}

export async function GET() {
  return NextResponse.json({ status: "ready", endpoint: "kiddoklub skipcash webhook" });
}

// Wati WhatsApp inbound webhook
// Logs every customer reply to wa_inbound for the 24h conversation-window state machine.
// Per Council 2026-04-25 Agent 3: assume scheduled outbound is OUTSIDE the window and use templates.

import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  const body = await req.json();
  // TODO Phase 2.1:
  //   - Verify token from Wati webhook signature (X-Wati-Signature)
  //   - Insert webhook_events row
  //   - Match phone to clients table → if known, update last_contact + open 24h window
  //   - Trigger `wrap-untrusted-input` then route to James for free-form reply drafting

  console.log("[wati webhook] from=", body?.waId, "type=", body?.type);

  return NextResponse.json({ ok: true });
}

export async function GET() {
  return NextResponse.json({ status: "ready", endpoint: "kiddoklub wati webhook" });
}

#!/bin/zsh
# Friday 16:00 — per-event T-48h weekend prep checklist
# Invokes kiddoklub-weekend-prep skill

source "$(dirname "$0")/_lib.sh"
kk_log INFO "friday_weekend_prep start"

if ! kk_gate; then
  kk_telegram "🎈 KiddoKlub Friday weekend prep *gated*: provision secrets first."
  exit 0
fi

kk_claude "Invoke the kiddoklub-weekend-prep skill. For every event in the next 48h (status confirmed or higher): generate per-event Telegram card (inventory, deposit, sanitization, photographer, route) and aggregate weekend digest. Fire Wati party_reminder_v1 template for any booking still in 'confirmed' status (transition to 'reminded_t48' on send)."

kk_log INFO "friday_weekend_prep complete"

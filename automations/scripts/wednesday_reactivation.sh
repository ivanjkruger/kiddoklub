#!/bin/zsh
# Wednesday 11:00 — 90-day no-rebook reactivation
# Invokes kiddoklub-reactivation skill

source "$(dirname "$0")/_lib.sh"
kk_log INFO "wednesday_reactivation start"

if ! kk_gate; then
  kk_telegram "🔄 KiddoKlub Wednesday reactivation *gated*: provision secrets first."
  exit 0
fi

kk_claude "Invoke the kiddoklub-reactivation skill. Pull clients with no rebook in 90+ days. Draft Nadine-voice WA voice-note SCRIPTS (max 30s each, ≈75 words) referencing kid by name + last package. Run kiddoklub-voice-audit. Post up to 5 Tier B cards to @Ivan_james_bot for Nadine to approve, record, and send."

kk_log INFO "wednesday_reactivation complete"

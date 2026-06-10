#!/bin/zsh
# Monday 08:30 — Dream-100 batch (10 handles/week max)
# Invokes kiddoklub-outreach-draft skill

source "$(dirname "$0")/_lib.sh"
kk_log INFO "monday_dream100 start"

if ! kk_gate; then
  kk_telegram "📨 KiddoKlub Monday Dream-100 *gated*: provision secrets first."
  exit 0
fi

kk_claude "Invoke the kiddoklub-outreach-draft skill with batch_size=10. Pull from Supabase dream100 table (status='not_contacted' or 'following'), prioritize warmest 10 by signal strength, segment-rotated. Generate relationship-first openers per ~/ivan/companies/kiddoklub/brain/voice/voice.md first-touch rule. Run kiddoklub-voice-audit on every draft. Post 10 separate Tier B approval cards to @Ivan_james_bot."

kk_log INFO "monday_dream100 complete"

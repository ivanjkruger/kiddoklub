#!/bin/zsh
# Daily 06:00 — pipeline digest to Telegram + Ivan
# Surfaces today's events + deposits outstanding + MTD revenue vs target

source "$(dirname "$0")/_lib.sh"
kk_log INFO "daily_pipeline_digest start"

if ! kk_gate; then
  kk_telegram "🎈 KiddoKlub daily digest *gated*: secrets not yet provisioned. Run \`~/ivan-ops/kiddoklub/secrets-checklist.sh\` to seed Keychain."
  exit 0
fi

# (Implementation lands once Supabase + Wati + Skipcash are live.)
# Pull from Supabase: today's bookings, deposits outstanding, weekend utilization,
# MTD revenue, last 7-day IG reach, partner referrals MTD.

kk_claude "Run the daily KiddoKlub pipeline digest. Output a single Telegram-ready summary card to @Ivan_james_bot covering: today's events, deposits outstanding, weekend utilization (Fri+Sat × 4 slots), next 4 weekends booked %, MTD revenue vs QAR 50K target. Keep it visual-first per feedback_visual_trackers."

kk_log INFO "daily_pipeline_digest complete"

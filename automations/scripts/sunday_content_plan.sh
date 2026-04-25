#!/bin/zsh
# Sunday 09:00 — content plan for the week
# Invokes kiddoklub-content-engine skill

source "$(dirname "$0")/_lib.sh"
kk_log INFO "sunday_content_plan start"

if ! kk_gate; then
  kk_telegram "📅 KiddoKlub Sunday content plan *gated*: provision secrets first."
  exit 0
fi

kk_claude "Invoke the kiddoklub-content-engine skill. Generate the 7-day content brief for the upcoming week (5 reels + 2 carousels), posting times Doha-tz, EN+AR captions, Seedance prompts, CapCut shot lists. Save to ~/Projects/kiddoklub/content/weekly/$(date +%G-W%V).md and post a Tier B approval card to @Ivan_james_bot."

kk_log INFO "sunday_content_plan complete"

#!/bin/zsh
# Tuesday 10:00 — testimonial + Google review chase for prior weekend's events
# Invokes kiddoklub-postparty-followup skill

source "$(dirname "$0")/_lib.sh"
kk_log INFO "tuesday_postparty start"

if ! kk_gate; then
  kk_telegram "📸 KiddoKlub Tuesday postparty chase *gated*: provision secrets first."
  exit 0
fi

kk_claude "Invoke the kiddoklub-postparty-followup skill. For every booking with status='delivered' and event_date within last 7 days that has not yet had a review_request_v1 sent: verify edited photos delivered, generate Drive share link, fire Wati template (if API live; else queue Tier B for Nadine manual send). Update bookings to status='review_pending' on success."

kk_log INFO "tuesday_postparty complete"

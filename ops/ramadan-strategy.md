# KiddoKlub — Ramadan + Eid Strategy

Ramadan 2026: ~17 Feb to 18 Mar.
Eid Al Fitr 2026: ~19-25 Mar (5-7 day burst).

## Ramadan daytime — pivot, don't push

- Daytime parties die. Don't run paid ads on daytime party packages during Ramadan.
- Pivot inventory to evening setups (post-iftar): family majlis-style soft play + seating + tea cart. Position as "iftar entertainment for the kids while adults eat."
- Standard package translates fine: Klub Classic + balloon arch + soft-serve at iftar = QAR 2,800 average ticket.
- Ad spend: cut Meta to 30% of normal; double down on Doha Mums + WA broadcast to opted-in past clients.

## Eid Al Fitr burst — pre-sell hard

- Open Eid bookings 4 weeks ahead (mid-Feb)
- Create "Eid Family Klub" theme package: Arabic Heritage decor + Qatari sweets + branded gift bags + photographer. QAR 4,800-5,500 ticket. Cap at 8 events across Eid week (15 sets max physically possible across 6 days but realistic at 8).
- Pre-sell via WA broadcast to founding-family list + Doha Mums Wed thread + IG carousel
- Premium pricing accepted during Eid; do not weekday-discount.
- Hand-picked photographer + videographer for content stockpile (2 weeks of post-Eid reels from the burst)

## Eid Al Adha 2026

~26-30 May 2026. Lower volume than Fitr but still a peak. Same playbook.

## Where this lives in the system

- Cal.com event types: separate "Eid Family Klub" type with custom blackout (closes 1 week before each Eid)
- Supabase: `bookings.notes` field gets `eid_2026` tag for analytics
- James world file: trigger `eid_burst_pricing` flag rises 4 weeks before each Eid, reminds Ivan to launch pre-sell campaign

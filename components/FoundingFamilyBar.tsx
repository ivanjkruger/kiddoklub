// Founding-10-Families offer surface.
// Source: Drive/Business/KiddoKlub/Ops/Offers/Founding-10-Families Offer v1.md
// Active until 2026-06-30 OR 10 paid weekend bookings, whichever first.
const BOOKED_COUNT = 0; // bump as deposits land; will move to Supabase counter later
const SLOT_LIMIT = 10;
const REMAINING = Math.max(0, SLOT_LIMIT - BOOKED_COUNT);

export function FoundingFamilyBar() {
  if (REMAINING === 0) return null;
  return (
    <div className="bg-[var(--color-ink)] text-[var(--color-cream)] text-center text-sm py-2.5 px-4">
      <span className="opacity-90"> Founding 10 Families · </span>
      <span className="font-semibold">
        QAR 1,400 in extras free with Klub Classic
      </span>
      <span className="opacity-75 ms-2">
        ({REMAINING} of {SLOT_LIMIT} slots left · ends 30 Jun)
      </span>
    </div>
  );
}

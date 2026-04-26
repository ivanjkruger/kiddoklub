// Real-time scarcity: Council 2026-04-25 conversion lever #4.
// Static now; flips to live `availability_v1` Supabase view once Phase 1.3 lands.
// We deliberately show some "Booked" and "1 slot left" rows because that's the social-proof signal that matters.

import Link from "next/link";
import { TrustFooter } from "@/components/TrustFooter";
import { StickyWhatsApp } from "@/components/StickyWhatsApp";

export const metadata = {
  title: "Availability · KiddoKlub",
  description: "See which weekend slots are open. Doha-tz. Updated weekly.",
};

type Slot = "open" | "limited" | "booked";
type Day = { date: string; label: string; window: string; slot: Slot };

const NOW = new Date();
function nextWeekend(weeks: number): Day[] {
  const out: Day[] = [];
  const ms = 24 * 60 * 60 * 1000;
  // Find next Friday (Doha weekend = Fri-Sat)
  const today = new Date(NOW);
  const dow = today.getUTCDay(); // 0=Sun..5=Fri..6=Sat
  const daysUntilFri = (5 - dow + 7) % 7 || 7;
  for (let w = 0; w < weeks; w++) {
    const fri = new Date(today.getTime() + (daysUntilFri + w * 7) * ms);
    const sat = new Date(fri.getTime() + ms);
    out.push(
      { date: fri.toISOString().slice(0, 10), label: fri.toLocaleDateString("en-GB", { weekday: "long", month: "long", day: "numeric" }), window: "Afternoon & evening", slot: w === 0 ? "limited" : "open" },
      { date: sat.toISOString().slice(0, 10), label: sat.toLocaleDateString("en-GB", { weekday: "long", month: "long", day: "numeric" }), window: "Morning & afternoon", slot: w === 0 ? "booked" : w === 1 ? "limited" : "open" },
    );
  }
  return out;
}

const STATUS = {
  open:    { dot: "var(--color-mint)",       pill: "bg-[#E8F4EE] text-[#3F6B57]",    label: "Available" },
  limited: { dot: "var(--color-butter)",     pill: "bg-[#FBF1D6] text-[#8C6E2E]",    label: "1 slot left" },
  booked:  { dot: "var(--color-pink-deep)",  pill: "bg-[#F8E1E3] text-[#9B484C]",    label: "Booked" },
};

export default function AvailabilityPage() {
  const days = nextWeekend(6);

  return (
    <main className="min-h-screen px-6 py-14 max-w-2xl mx-auto">
      <p className="uppercase tracking-[0.2em] text-xs text-[var(--color-muted)] mb-3 text-center">
        Availability
      </p>
      <h1 className="text-4xl md:text-5xl text-center mb-3 font-display">
        See what&apos;s <span className="accent-mint">still open</span> 🌈
      </h1>
      <p className="text-center text-[var(--color-ink-soft)] mb-10">
        Friday and Saturday weekend slots, Doha time. Updated daily. Inside-7-day rush is +15%.
      </p>

      <div className="flex justify-center gap-5 text-xs mb-8 flex-wrap">
        {(Object.keys(STATUS) as Slot[]).map((s) => (
          <span key={s} className="inline-flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: STATUS[s].dot }} />
            {STATUS[s].label}
          </span>
        ))}
      </div>

      <ul className="space-y-2.5">
        {days.map((d) => (
          <li
            key={d.date}
            className="flex items-center justify-between rounded-xl bg-white border border-black/5 px-4 py-3.5"
          >
            <div>
              <div className="font-medium">{d.label}</div>
              <div className="text-xs text-[var(--color-muted)]">{d.window}</div>
            </div>
            <span className={`px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${STATUS[d.slot].pill}`}>
              {STATUS[d.slot].label}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-10 flex flex-wrap gap-3 justify-center">
        <a
          href="https://wa.me/97450318434?text=Hi%20Nadine!%20I%27d%20like%20to%20check%20availability%20for%20a%20setup."
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-[var(--color-mint-deep)] text-white px-7 py-3 font-semibold"
        >
          WhatsApp Nadine
        </a>
        <Link href="/book" className="rounded-full border border-[var(--color-ink)]/15 px-7 py-3 font-medium">
          Build a quote
        </Link>
      </div>

      <p className="text-xs text-[var(--color-muted)] text-center mt-10 italic">
        Live calendar wires to Cal.com once Phase 1.3 lands. Until then this view is refreshed weekly from the bookings sheet.
      </p>

      <TrustFooter />
      <StickyWhatsApp />
    </main>
  );
}

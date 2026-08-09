// Honest availability surface (rewritten 2026-08-07). The old version FABRICATED
// "Booked" / "1 slot left" statuses on generated dates; that class of invented
// scarcity is banned sitewide. This page shows real upcoming weekend dates with
// no claimed status; the only capacity claim is the true monthly cap from the
// pricing SSOT. A real calendar ships only when wired to live bookings data.

import Link from "next/link";
import { TrustFooter } from "@/components/TrustFooter";
import { StickyWhatsApp } from "@/components/StickyWhatsApp";
import { PRICING } from "@/content/packages.gen";

export const metadata = {
  title: "Availability · KiddoKlub",
  description:
    "Friday and Saturday party slots in Doha. Message Nadine with your date and get an answer within 30 minutes during the day.",
};

type Day = { date: string; label: string; window: string };

function nextWeekends(weeks: number): Day[] {
  const out: Day[] = [];
  const ms = 24 * 60 * 60 * 1000;
  const today = new Date();
  const dow = today.getUTCDay(); // 0=Sun..5=Fri..6=Sat
  const daysUntilFri = (5 - dow + 7) % 7 || 7;
  for (let w = 0; w < weeks; w++) {
    const fri = new Date(today.getTime() + (daysUntilFri + w * 7) * ms);
    const sat = new Date(fri.getTime() + ms);
    for (const [d, window] of [
      [fri, "Afternoon & evening"],
      [sat, "Morning & afternoon"],
    ] as const) {
      out.push({
        date: d.toISOString().slice(0, 10),
        label: d.toLocaleDateString("en-GB", { weekday: "long", month: "long", day: "numeric" }),
        window,
      });
    }
  }
  return out;
}

const rushPct = Math.round((PRICING.rushPremium.multiplier - 1) * 100);

export default function AvailabilityPage() {
  const days = nextWeekends(6);

  return (
    <main className="min-h-screen px-6 py-14 max-w-2xl mx-auto">
      <p className="uppercase tracking-[0.2em] text-xs text-[var(--color-muted)] mb-3 text-center">
        Availability
      </p>
      <h1 className="text-4xl md:text-5xl text-center mb-3 font-display">
        Pick your <span className="accent-mint">party date</span>
      </h1>
      <p className="text-center text-[var(--color-ink-soft)] mb-10">
        We take just {PRICING.capacity.partiesPerMonth} parties a month, so weekend dates go early.
        Tap a date and Nadine confirms it on WhatsApp within 30 minutes during the day.
        Inside-{PRICING.rushPremium.thresholdDays}-days rush is +{rushPct}%.
      </p>

      <ul className="space-y-2.5">
        {days.map((d) => (
          <li key={d.date}>
            <a
              href={`https://wa.me/97450318434?text=${encodeURIComponent(`Hi Nadine! Is ${d.label} still free for a party?`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-xl bg-white border border-black/5 px-4 py-3.5 hover:border-[var(--color-mint-deep)]/60 transition-colors"
            >
              <div>
                <div className="font-medium">{d.label}</div>
                <div className="text-xs text-[var(--color-muted)]">{d.window}</div>
              </div>
              <span className="px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#E8F4EE] text-[#3F6B57]">
                Check this date
              </span>
            </a>
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

      <p className="text-xs text-[var(--color-muted)] text-center mt-10">
        Weekday parties (Sun to Thu) are {Math.round((1 - PRICING.weekdayDiscount.multiplier) * 100)}% off.
      </p>

      <TrustFooter />
      <StickyWhatsApp />
    </main>
  );
}

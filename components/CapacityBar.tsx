import { PRICING } from "@/content/packages.gen";

// Replaces the expired Founding-10-Families bar (archived 2026-08-07).
// The monthly cap is the only scarcity claim allowed on the site; it is a real
// operating policy sourced from packages.yaml, never a countdown or a slot count.
export function CapacityBar() {
  return (
    <div className="bg-[var(--color-ink)] text-[var(--color-cream)] text-center text-sm py-2.5 px-4">
      <span className="font-semibold">
        We take just {PRICING.capacity.partiesPerMonth} parties a month
      </span>
      <span className="opacity-90"> so every setup gets our full care. </span>
      <a
        href="https://wa.me/97450318434?text=Hi%20Nadine!%20Is%20my%20party%20date%20still%20free%3F"
        target="_blank"
        rel="noopener noreferrer"
        className="underline underline-offset-4 decoration-[var(--color-mint)] font-semibold hover:text-[var(--color-mint)] transition-colors"
      >
        Check your date
      </a>
    </div>
  );
}

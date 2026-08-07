import Link from "next/link";
import { PRICING } from "@/content/packages.gen";

function fmt(n: number) {
  return n.toLocaleString("en-US");
}

export function Packages() {
  return (
    <section id="packages" className="px-6 py-20 md:py-28 max-w-6xl mx-auto">
      <p className="uppercase tracking-[0.2em] text-xs text-[var(--color-muted)] mb-3 text-center font-semibold">
        Pick your day
      </p>
      <h2 className="text-3xl md:text-5xl text-center mb-12 font-display">
        Three setups, <span className="accent-mint">one perfect day</span>
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {PRICING.packages.map((p) => {
          const highlight = p.id === "klub_classic";
          return (
            <article
              key={p.id}
              className={
                "rounded-2xl p-7 border transition-shadow " +
                (highlight
                  ? "bg-[var(--color-ink)] text-[var(--color-bone)] border-[var(--color-ink)] shadow-lg"
                  : "bg-white border-black/5")
              }
            >
              {highlight && (
                <span className="inline-block text-xs uppercase tracking-widest mb-3 text-[var(--color-mint)] font-semibold">
                  Most booked
                </span>
              )}
              <h3
                className={
                  "text-2xl mb-1 " +
                  (highlight ? "text-[var(--color-bone)]" : "text-[var(--color-ink)]")
                }
              >
                {p.name}
              </h3>
              <p
                className={
                  "text-sm mb-4 " +
                  (highlight ? "text-[var(--color-bone)]/70" : "text-[var(--color-muted)]")
                }
              >
                {p.capacityLabel} · {p.footprint} · {p.durationHours} hours
              </p>
              <div className="mb-5">
                {p.showPrice && p.publicPrice ? (
                  <span className="text-3xl font-serif font-semibold">
                    <bdi>QAR {fmt(p.publicPrice)}</bdi>
                  </span>
                ) : (
                  <span className="text-xl italic-display">{p.priceLabel}</span>
                )}
              </div>
              <ul className="space-y-2 text-sm mb-6">
                {p.inclusions.map((inc, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-[var(--color-mint-deep)] flex-none font-bold">✓</span>
                    <span className={highlight ? "" : "text-[var(--color-muted)]"}>{inc}</span>
                  </li>
                ))}
              </ul>
              {p.id === "klub_signature" ? (
                <a
                  href="https://wa.me/97450318434?text=Hi%20Nadine%2C%20I%27d%20love%20to%20chat%20about%20Klub%20Signature."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center rounded-full bg-[var(--color-mint-deep)] text-white px-6 py-3 font-semibold hover:scale-[1.02] transition-transform"
                >
                  WhatsApp Nadine
                </a>
              ) : (
                <Link
                  href={`/book?package=${p.shortId}` as never}
                  className={
                    "block text-center rounded-full px-6 py-3 font-semibold transition-transform hover:scale-[1.02] " +
                    (highlight
                      ? "bg-[var(--color-mint)] text-[var(--color-ink)]"
                      : "bg-[var(--color-mint-deep)] text-white")
                  }
                >
                  Pick a date
                </Link>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}

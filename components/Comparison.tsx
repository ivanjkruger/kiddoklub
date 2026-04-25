// Hormozi-style "Why Home Beats a Venue" comparison.
// Salvaged from legacy index.html — 7 rows that have been on the live site since 2025.

const ROWS = [
  "Private — just your guests",
  "No time-limit pressure",
  "Your own food & cake",
  "No driving or parking stress",
  "Sanitized equipment",
  "Setup & cleanup handled",
  "Nap-friendly for babies",
];

export function Comparison() {
  return (
    <section className="px-6 py-20 md:py-28 bg-[var(--color-sand)]/40">
      <div className="max-w-3xl mx-auto">
        <p className="uppercase tracking-[0.2em] text-xs text-[var(--color-muted)] mb-3 text-center">
          Why home wins
        </p>
        <h2 className="text-3xl md:text-5xl text-center mb-3">
          Everything a play centre offers,<br />
          <span className="italic-display text-[var(--color-terracotta)]">without the downsides</span>
        </h2>
        <p className="text-center text-[var(--color-muted)] mb-12">
          The same premium soft-play, in your own home.
        </p>

        <div className="rounded-2xl bg-white border border-black/5 overflow-hidden">
          <div className="grid grid-cols-[1fr_110px_110px] md:grid-cols-[1fr_140px_140px] bg-[var(--color-ink)] text-[var(--color-bone)] text-sm">
            <div className="p-4 font-medium" />
            <div className="p-4 font-medium text-center opacity-80">Play Centre</div>
            <div className="p-4 font-medium text-center">KiddoKlub</div>
          </div>
          {ROWS.map((row, i) => (
            <div
              key={i}
              className="grid grid-cols-[1fr_110px_110px] md:grid-cols-[1fr_140px_140px] border-t border-black/5"
            >
              <div className="p-4 text-sm md:text-base">{row}</div>
              <div className="p-4 text-center text-[var(--color-terracotta)] text-xl">✗</div>
              <div className="p-4 text-center text-[var(--color-sage)] text-xl font-bold">✓</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

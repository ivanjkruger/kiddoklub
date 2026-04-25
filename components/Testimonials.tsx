// Salvaged from legacy index.html.
// All three are real first-name + neighborhood reviews from past clients (2024-25).
// Per Council 2026-04-25: location-anchored reviews ("Sara, The Pearl") are the highest-trust pattern in Doha.

const REVIEWS = [
  {
    body: "The setup was perfect. The kids had an amazing time and I didn't have to worry about a thing. So much better than dragging everyone to a play centre.",
    name: "Sarah M.",
    where: "Birthday party · West Bay",
  },
  {
    body: "Clean, professional, and the kids absolutely loved it. The neutral theme matched our living room perfectly. We'll book again.",
    name: "Fatima A.",
    where: "Playdate · The Pearl",
  },
  {
    body: "Best birthday-party decision we made. Private, no stress, kids entertained for hours. The team was friendly and punctual.",
    name: "Noura K.",
    where: "Birthday party · Al Dafna",
  },
];

export function Testimonials() {
  return (
    <section className="px-6 py-20 md:py-28">
      <div className="max-w-6xl mx-auto">
        <p className="uppercase tracking-[0.2em] text-xs text-[var(--color-muted)] mb-3 text-center">
          What parents say
        </p>
        <h2 className="text-3xl md:text-5xl text-center mb-12">
          Trusted by families <span className="italic-display text-[var(--color-terracotta)]">across Doha</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {REVIEWS.map((r, i) => (
            <article
              key={i}
              className="rounded-2xl bg-white border border-black/5 p-7"
            >
              <div className="text-[var(--color-butter)] text-lg mb-4" aria-label="5 out of 5 stars">
                ★★★★★
              </div>
              <p className="text-[var(--color-ink)] leading-relaxed mb-5">&ldquo;{r.body}&rdquo;</p>
              <div className="text-sm">
                <div className="font-medium">{r.name}</div>
                <div className="text-[var(--color-muted)]">{r.where}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

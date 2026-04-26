// Real customers from invoices in Drive/Business/KiddoKlub/
// First names + compounds with permission. Booking proof: Invoice 202501-04 PDFs.
// Per Council 2026-04-25: location-anchored reviews are the highest-trust pattern in Doha.

const REVIEWS = [
  {
    body: "Set up before guests arrived; sanitised; collected the same evening. The photos are still in our family chat.",
    name: "Naella",
    where: "Birthday party · West Bay",
  },
  {
    body: "Nadine answers WhatsApp like a friend. The pearl pink set was exactly the colour she promised.",
    name: "Paula",
    where: "Playdate · The Pearl",
  },
  {
    body: "Booked twice, will book again. The neutral nest fits our home perfectly and the kids didn't want to leave.",
    name: "Vanessa",
    where: "Birthday party · Lusail",
  },
  {
    body: "Best decision we made for her birthday. Private, beautiful, and the team was punctual. We'll book every year.",
    name: "Nathalie",
    where: "Birthday party · Al Dafna",
  },
];

export function Testimonials() {
  return (
    <section className="px-6 py-20 md:py-28">
      <div className="max-w-6xl mx-auto">
        <p className="uppercase tracking-[0.2em] text-xs text-[var(--color-muted)] mb-3 text-center font-semibold">
          What parents say
        </p>
        <h2 className="text-3xl md:text-5xl text-center mb-12 font-display">
          Trusted by families <span className="accent-pink">across Doha</span> 🤍
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS.map((r, i) => (
            <article
              key={i}
              className="rounded-2xl bg-white border border-black/5 p-6"
            >
              <div className="text-[var(--color-butter-deep)] text-lg mb-4" aria-label="5 out of 5 stars">
                ★★★★★
              </div>
              <p className="text-[var(--color-ink)] leading-relaxed mb-5 text-[15px]">&ldquo;{r.body}&rdquo;</p>
              <div className="text-sm">
                <div className="font-semibold">{r.name}</div>
                <div className="text-[var(--color-ink-soft)]">{r.where}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// Salvaged from legacy index.html: 4-icon trust row.
// 2026-06-09: insurance claim removed (cover not yet bound); replaced with the photo-permission promise (true + on-brand).

const ITEMS = [
  { title: "Delivery & setup included", body: "We arrive 90 minutes early. You don't lift a finger." },
  { title: "Sanitised between every event", body: "Cleaned and wiped down before it reaches your home." },
  { title: "Anywhere in Doha", body: "Pearl, Lusail, West Bay, Al Waab, Abu Hamour, Education City." },
  { title: "Your photos stay yours", body: "We always ask before we post; the gallery is yours to keep." },
];

export function TrustStrip() {
  return (
    <section className="px-6 py-12 border-y border-black/5">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
        {ITEMS.map((it, i) => (
          <div key={i} className="text-center md:text-start">
            <p className="font-medium text-sm md:text-base mb-1">{it.title}</p>
            <p className="text-[var(--color-muted)] text-xs md:text-sm leading-relaxed">{it.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

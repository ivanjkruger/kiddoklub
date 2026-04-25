// Salvaged from legacy index.html: 4-icon trust row.
// Updated for 2026 brand: "5-star rated" → "QAR 1M public liability" (Council 2026-04-25 trust signal).

const ITEMS = [
  { title: "Delivery & setup included", body: "We arrive 90 minutes early. You don't lift a finger." },
  { title: "Sanitized between every event", body: "Hospital-grade disinfectant. Photo evidence on request." },
  { title: "Anywhere in Doha", body: "Pearl, Lusail, West Bay, Al Waab, Abu Hamour, Education City." },
  { title: "QAR 1M public liability", body: "Compound COI sent to your gate before we arrive." },
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

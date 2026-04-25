import { Packages } from "@/components/Packages";
import { TrustFooter } from "@/components/TrustFooter";
import { StickyWhatsApp } from "@/components/StickyWhatsApp";

export const metadata = {
  title: "Packages — KiddoKlub",
  description:
    "Three KiddoKlub packages for kids 1-5 in Doha. Mini, Classic, Signature. Add bouncy castle, balloon arch, photographer, soft-serve cart.",
};

export default function PackagesPage() {
  return (
    <main className="min-h-screen">
      <div className="px-6 pt-16 pb-4 max-w-3xl mx-auto text-center">
        <p className="uppercase tracking-[0.2em] text-xs text-[var(--color-muted)] mb-3">
          Packages
        </p>
        <h1 className="text-4xl md:text-5xl">
          Three setups, <span className="italic-display text-[var(--color-terracotta)]">one perfect day</span>
        </h1>
      </div>
      <Packages />

      {/* Theme catalogue placeholder — Council 2026-04-25 priority */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <p className="uppercase tracking-[0.2em] text-xs text-[var(--color-muted)] mb-3 text-center">
          Themes
        </p>
        <h2 className="text-3xl md:text-4xl text-center mb-10">Pick the look</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {["Boho", "Jungle", "Princess", "Pastel Rainbow", "Arabic Heritage", "Eid Family"].map((t) => (
            <article
              key={t}
              className="aspect-[4/5] rounded-xl bg-[var(--color-sand)]/60 border border-black/5 flex items-end p-5"
            >
              <div>
                <h3 className="text-xl mb-1">{t}</h3>
                <p className="text-sm text-[var(--color-muted)]">View setups →</p>
              </div>
            </article>
          ))}
        </div>
        <p className="text-sm text-[var(--color-muted)] text-center mt-6 italic">
          (each theme gets its own /packages/[slug] page with full gallery — Phase 3)
        </p>
      </section>
      <TrustFooter />
      <StickyWhatsApp />
    </main>
  );
}

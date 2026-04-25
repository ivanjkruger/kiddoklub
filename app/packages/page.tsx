import Image from "next/image";
import Link from "next/link";
import { Packages } from "@/components/Packages";
import { Comparison } from "@/components/Comparison";
import { TrustStrip } from "@/components/TrustStrip";
import { Testimonials } from "@/components/Testimonials";
import { TrustFooter } from "@/components/TrustFooter";
import { StickyWhatsApp } from "@/components/StickyWhatsApp";
import { THEMES } from "@/content/themes";

export const metadata = {
  title: "Packages and themes — KiddoKlub",
  description:
    "Three sizes (Mini, Classic, Signature). Six themes (Neutral Nest, White Wonderland, Color Pop, Boho, Arabic Heritage, Eid Family). Quote in 90 seconds.",
};

export default function PackagesPage() {
  return (
    <main className="min-h-screen">
      <section className="px-6 pt-16 pb-4 max-w-3xl mx-auto text-center">
        <p className="uppercase tracking-[0.2em] text-xs text-[var(--color-muted)] mb-3">
          Packages and themes
        </p>
        <h1 className="text-4xl md:text-5xl">
          Three sizes, <span className="italic-display text-[var(--color-terracotta)]">six themes</span>, one perfect day
        </h1>
      </section>

      <Packages />
      <TrustStrip />

      {/* Theme catalog — Council 2026-04-25 priority */}
      <section className="px-6 py-20 md:py-28 max-w-6xl mx-auto">
        <p className="uppercase tracking-[0.2em] text-xs text-[var(--color-muted)] mb-3 text-center">
          Themes
        </p>
        <h2 className="text-3xl md:text-4xl text-center mb-3">Pick the look</h2>
        <p className="text-center text-[var(--color-muted)] mb-12 max-w-2xl mx-auto">
          Each theme works across Mini, Classic, and Signature. Tap any theme to see the full setup.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {THEMES.map((t) => (
            <Link
              key={t.slug}
              href={`/packages/${t.slug}` as never}
              className="group relative aspect-[4/5] rounded-2xl overflow-hidden border border-black/5"
            >
              <Image
                src={t.imageHero}
                alt={t.name}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                <div className="text-xs uppercase tracking-widest opacity-80 mb-1">{t.palette}</div>
                <h3 className="text-2xl font-serif font-semibold mb-1">{t.name}</h3>
                <p className="text-sm opacity-90">{t.tagline}</p>
                <p className="text-xs opacity-80 mt-2">
                  Starting from <bdi>QAR {t.startingFromQar.toLocaleString("en-US")}</bdi>
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Comparison />
      <Testimonials />

      <TrustFooter />
      <StickyWhatsApp />
    </main>
  );
}

import Image from "next/image";
import Link from "next/link";
import { THEMES } from "@/content/themes";

export const metadata = {
  title: "الباقات والثيمات — كيدو كلب",
  description: "ثلاث باقات (ميني، كلاسيك، سيجنتشر) وست ثيمات. اختاري الباقة المناسبة وواتساب نادين.",
};

export default function ArPackages() {
  return (
    <main className="min-h-screen bg-[var(--color-bone)] text-[var(--color-ink)]">
      <header className="sticky top-0 z-40 backdrop-blur-md bg-[var(--color-bone)]/85 border-b border-black/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/ar" className="font-serif italic-display text-2xl">كيدو كلب</Link>
          <div className="flex items-center gap-4">
            <Link href="/packages" className="text-sm text-[var(--color-muted)]">EN</Link>
            <a href="https://wa.me/97450318434" target="_blank" rel="noopener noreferrer" className="rounded-full bg-[var(--color-terracotta)] text-white px-5 py-2 text-sm font-medium">
              واتساب
            </a>
          </div>
        </div>
      </header>

      <section className="px-6 pt-14 pb-8 max-w-3xl mx-auto text-center">
        <p className="uppercase tracking-[0.2em] text-xs text-[var(--color-muted)] mb-3">الباقات والثيمات</p>
        <h1 className="text-4xl md:text-5xl">
          ثلاث باقات، <span className="italic-display text-[var(--color-terracotta)]">ست ثيمات</span>
        </h1>
      </section>

      <section className="px-6 py-12 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            { name: "كلب ميني",  cap: "حتى ٦ أطفال",   size: "٣ × ٣م", price: "١,٤٠٠" },
            { name: "كلب كلاسيك", cap: "حتى ١٠ أطفال", size: "٤ × ٥م", price: "٢,٢٠٠", featured: true },
            { name: "كلب سيجنتشر", cap: "أكثر من ١٥ طفل", size: "٥ × ٦م", price: "ابتداء من ٣,٨٠٠" },
          ].map((p, i) => (
            <article
              key={i}
              className={
                "rounded-2xl p-7 border " +
                (p.featured
                  ? "bg-[var(--color-ink)] text-[var(--color-bone)] border-[var(--color-ink)]"
                  : "bg-white border-black/5")
              }
            >
              {p.featured && <span className="inline-block text-xs uppercase tracking-widest mb-3 text-[var(--color-butter)]">الأكثر حجزاً</span>}
              <h3 className="text-2xl mb-1">{p.name}</h3>
              <p className={"text-sm mb-4 " + (p.featured ? "text-[var(--color-bone)]/70" : "text-[var(--color-muted)]")}>
                {p.cap} · {p.size}
              </p>
              <div className="font-serif text-3xl mb-6"><bdi>{p.price} ر.ق</bdi></div>
              <a href="https://wa.me/97450318434" target="_blank" rel="noopener noreferrer" className={"block text-center rounded-full px-6 py-3 font-medium " + (p.featured ? "bg-[var(--color-butter)] text-[var(--color-ink)]" : "bg-[var(--color-ink)] text-[var(--color-bone)]")}>
                واتساب نادين
              </a>
            </article>
          ))}
        </div>

        <h2 className="text-3xl md:text-4xl text-center mb-8">اختاري الثيم</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {THEMES.map((t) => (
            <Link
              key={t.slug}
              href={`/packages/${t.slug}` as never}
              className="aspect-[4/5] rounded-2xl overflow-hidden border border-black/5 relative group"
            >
              <Image src={t.imageHero} alt={t.nameAr} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                <h3 className="text-2xl font-serif font-semibold mb-1">{t.nameAr}</h3>
                <p className="text-sm opacity-90">{t.taglineAr}</p>
                <p className="text-xs opacity-80 mt-2">ابتداء من <bdi>{t.startingFromQar.toLocaleString("ar-EG")} ر.ق</bdi></p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <footer className="bg-[var(--color-ink)] text-[var(--color-bone)] py-10 px-6 text-center text-sm opacity-80 border-t border-white/10">
        <p>© {new Date().getFullYear()} كيدو كلب · الدوحة، قطر · واتساب +٩٧٤ ٥٠٣١ ٨٤٣٤</p>
      </footer>
    </main>
  );
}

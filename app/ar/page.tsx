import Image from "next/image";

export const metadata = {
  alternates: {
    canonical: "/ar",
    languages: { en: "/", ar: "/ar" },
  },
};
import Link from "next/link";

const TILES = [
  { src: "/photos/setups/setup-02.jpeg", label: "كلب كلاسيك · بوهو" },
  { src: "/photos/setups/setup-04.jpeg", label: "كلب كلاسيك · تراث عربي" },
  { src: "/photos/setups/setup-09.jpeg", label: "كلب سيجنتشر · العيد العائلي" },
  { src: "/photos/setups/setup-07.jpeg", label: "كلب ميني · ألوان قوس قزح" },
  { src: "/photos/setups/setup-05.jpeg", label: "كلب سيجنتشر · جانغل" },
  { src: "/photos/setups/setup-06.jpeg", label: "كلب كلاسيك · وايت وندرلاند" },
];

const FAQS = [
  { q: "ما الأعمار المناسبة؟", a: "من سنة لخمس سنوات. كل القطع مبطنة وآمنة للأطفال الصغار، والإخوة الأكبر مرحب بهم كذلك." },
  { q: "كم مساحة أحتاج؟", a: "كلب ميني يحتاج ٣×٣م. كلاسيك ٤×٥م. سيجنتشر ٥×٦م. نقيس مساحتك أولاً ونختار الحجم المناسب." },
  { q: "وين توصلون؟", a: "اللؤلؤة، لوسيل، الخليج الغربي، الوعب، أبو هامور، المدينة التعليمية، الغرافة. مناطق ثانية حسب الطلب." },
  { q: "كيف يتم التعقيم؟", a: "كل قطعة تُمسح بمعقم طبي وتُعالج بالأشعة فوق البنفسجية بعد كل حفلة. صور للتأكيد عند الطلب." },
  { q: "هل عندكم تأمين؟", a: "نعم. تأمين مسؤولية عامة بقيمة مليون ريال قطري. نرسل الشهادة لإدارة المجمع قبل وصولنا." },
  { q: "السعر الكامل لكلب سيجنتشر؟", a: "يبدأ من ٣,٨٠٠ ريال قطري. السعر النهائي يعتمد على الثيم وعدد الضيوف والإضافات. واتسبي نادين ونعطيك عرض كامل." },
];

export default function ArHome() {
  return (
    <main className="min-h-screen bg-[var(--color-bone)] text-[var(--color-ink)]">
      {/* Header (AR-aware, sticky) */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-[var(--color-bone)]/85 border-b border-black/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/ar" className="inline-flex items-center" aria-label="كيدو كلب الرئيسية">
            <Image src="/brand/logo.svg" alt="كيدو كلب" width={150} height={56} className="h-10 w-auto" priority />
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/" className="text-sm text-[var(--color-muted)] hover:text-[var(--color-ink)]">EN</Link>
            <a
              href="https://wa.me/97450318434?text=%D8%A3%D9%87%D9%84%D8%A7%D9%8B%20%D9%86%D8%A7%D8%AF%D9%8A%D9%86!%20%D8%A3%D8%A8%D9%8A%20%D8%AD%D8%AC%D8%B2%20%D8%B3%D9%88%D9%81%D8%AA%20%D8%A8%D9%84%D8%A7%D9%8A."
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[var(--color-terracotta)] text-white px-5 py-2 text-sm font-medium"
            >
              واتساب
            </a>
          </div>
        </div>
      </header>

      {/* Capacity bar (true monthly cap; AR copy staged for Nadine's native review) */}
      <div className="bg-[var(--color-ink)] text-[var(--color-bone)] text-center text-sm py-2.5 px-4">
        <span className="font-medium">نستقبل 10 حفلات فقط كل شهر، حتى نعتني بكل تفصيلة. </span>
        <a
          href="https://wa.me/97450318434?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20%D9%86%D8%A7%D8%AF%D9%8A%D9%86!%20%D9%87%D9%84%20%D8%AA%D8%A7%D8%B1%D9%8A%D8%AE%20%D8%AD%D9%81%D9%84%D8%AA%D9%86%D8%A7%20%D9%85%D8%AA%D8%A7%D8%AD%D8%9F"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4 font-semibold"
        >
          تأكدي من تاريخك
        </a>
      </div>

      {/* Hero */}
      <section className="px-6 pt-14 pb-16 max-w-6xl mx-auto md:grid md:grid-cols-12 md:gap-10 md:items-center">
        <div className="md:col-span-7">
          <p className="uppercase tracking-[0.2em] text-xs text-[var(--color-muted)] mb-3">
            أجمل ألعاب الأطفال في الدوحة
          </p>
          <h1 className="text-4xl md:text-6xl leading-[1.1] mb-5 font-display">
            نرسم <span className="accent-mint">ابتسامة</span> لطفلك،
            <br />
            <span className="accent-pink">وزاوية</span> يلتقطها كل ضيف.
          </h1>
          <p className="text-lg text-[var(--color-muted)] mb-7 max-w-xl">
            سوفت بلاي مخصّص، حفر كرات، وتنسيق للحفلة. نوصّل، نركّب، نعقّم، ونرفع كل شيء. أنتي ضيوفك بس.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://wa.me/97450318434"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[var(--color-terracotta)] text-white px-6 py-3 font-medium"
            >
              واتسبي نادين
            </a>
            <Link href="/packages" className="rounded-full border border-[var(--color-ink)]/15 px-6 py-3 font-medium">
              شوفي الباقات
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm text-[var(--color-muted)]">
            <span>عوائل دوحاوية تثق فينا</span>
            <span aria-hidden>·</span>
            <span>تأمين مليون ريال قطري</span>
            <span aria-hidden>·</span>
            <span>تركيب في نفس اليوم</span>
          </div>
        </div>
        <div className="md:col-span-5 mt-8 md:mt-0">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-black/5 relative">
            <Image
              src="/photos/setups/setup-04.jpeg"
              alt="ترتيب كيدو كلب جاهز للحفلة"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Trust strip AR */}
      <section className="px-6 py-12 border-y border-black/5">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
          {[
            { t: "توصيل وتركيب", b: "نوصل قبل الحفلة بـ ٩٠ دقيقة" },
            { t: "تعقيم بعد كل حفلة", b: "بمعقم طبي، صور عند الطلب" },
            { t: "كل الدوحة", b: "اللؤلؤة · لوسيل · الخليج · الوعب · أبو هامور" },
            { t: "تأمين مليون ريال", b: "نرسل الشهادة لإدارة المجمع" },
          ].map((it, i) => (
            <div key={i} className="text-center md:text-start">
              <p className="font-medium mb-1">{it.t}</p>
              <p className="text-[var(--color-muted)] text-xs leading-relaxed">{it.b}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Packages snapshot */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <p className="uppercase tracking-[0.2em] text-xs text-[var(--color-muted)] mb-3 text-center">
          الباقات
        </p>
        <h2 className="text-3xl md:text-5xl text-center mb-12">
          ثلاث باقات، <span className="italic-display text-[var(--color-terracotta)]">يوم مثالي</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "كلب ميني", cap: "حتى ٦ أطفال", size: "٣ × ٣م", price: "١,٤٠٠" },
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
              {p.featured && (
                <span className="inline-block text-xs uppercase tracking-widest mb-3 text-[var(--color-butter)]">
                  الأكثر حجزاً
                </span>
              )}
              <h3 className="text-2xl mb-1">{p.name}</h3>
              <p className={"text-sm mb-4 " + (p.featured ? "text-[var(--color-bone)]/70" : "text-[var(--color-muted)]")}>
                {p.cap} · {p.size}
              </p>
              <div className="font-serif text-3xl mb-6">
                <bdi>{p.price} ر.ق</bdi>
              </div>
              <a
                href="https://wa.me/97450318434"
                target="_blank"
                rel="noopener noreferrer"
                className={
                  "block text-center rounded-full px-6 py-3 font-medium " +
                  (p.featured
                    ? "bg-[var(--color-butter)] text-[var(--color-ink)]"
                    : "bg-[var(--color-ink)] text-[var(--color-bone)]")
                }
              >
                واتساب نادين
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* Recently */}
      <section className="px-6 py-16 bg-[var(--color-sand)]/40">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-8">حفلات الشهر الماضي</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {TILES.map((t, i) => (
              <article
                key={i}
                className="aspect-[4/5] rounded-xl overflow-hidden relative border border-black/5"
              >
                <Image src={t.src} alt={t.label} fill sizes="(max-width: 768px) 50vw, 33vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent flex items-end p-4 text-white text-sm font-medium">
                  {t.label}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ AR */}
      <section className="px-6 py-20 max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl mb-8 text-center">أسئلة شائعة</h2>
        <div className="space-y-3">
          {FAQS.map((f, i) => (
            <details key={i} className="rounded-xl bg-white border border-black/5 p-5 group open:shadow-sm">
              <summary className="cursor-pointer font-medium list-none flex justify-between items-center gap-4">
                <span>{f.q}</span>
                <span className="text-[var(--color-terracotta)] flex-none transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-[var(--color-muted)] leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Final CTA AR */}
      <section className="px-6 py-20 bg-[var(--color-ink)] text-[var(--color-bone)] text-center">
        <h2 className="text-3xl md:text-4xl mb-4">
          جاهزة لحفلة <span className="italic-display text-[var(--color-butter)]">ما يتذكّرها أحد إلا للأبد</span>؟
        </h2>
        <p className="opacity-80 mb-8">واتسبي نادين، نختار سوياً الباقة المناسبة. نرد خلال ٣٠ دقيقة.</p>
        <a
          href="https://wa.me/97450318434"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-full bg-[var(--color-terracotta)] text-white px-9 py-4 text-lg font-medium"
        >
          واتساب نادين
        </a>
      </section>

      {/* Footer minimal AR */}
      <footer className="bg-[var(--color-ink)] text-[var(--color-bone)] py-10 px-6 text-center text-sm opacity-80 border-t border-white/10">
        <p>© {new Date().getFullYear()} كيدو كلب · الدوحة، قطر · واتساب +٩٧٤ ٥٠٣١ ٨٤٣٤</p>
        <p className="mt-2 opacity-70">
          نسأل قبل ما ننشر أي صورة. تغطية تأمين مسؤولية ١ مليون ريال قطري.
        </p>
      </footer>

      <a
        href="https://wa.me/97450318434"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="واتساب نادين"
        className="fixed start-5 bottom-5 z-50 safe-bottom md:start-8 md:bottom-8 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.413c-.003 6.557-5.337 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24z" />
        </svg>
      </a>
    </main>
  );
}

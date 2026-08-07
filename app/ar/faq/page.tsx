import Link from "next/link";
import { PRICING } from "@/content/packages.gen";

// AR FAQ (wave 4 core set). Copy drafted for Nadine's native review before
// production; figures come from the pricing SSOT, Western digits per the
// locked bilingual rules.
const pkg = (id: string) => PRICING.packages.find((p) => p.id === id)!;
const addonOf = (id: string) => PRICING.addons.find((a) => a.id === id)!;
const fmt = (n: number) => n.toLocaleString("en-US");
const mini = pkg("klub_mini");
const classic = pkg("klub_classic");
const signature = pkg("klub_signature");
const photographer = addonOf("photographer_90");
const weekdayPct = Math.round((1 - PRICING.weekdayDiscount.multiplier) * 100);

export const metadata = {
  title: "الأسئلة الشائعة · كيدو كلب",
  description: "الأسعار، المساحة، التعقيم، العربون، وكل ما تسأل عنه أمهات الدوحة قبل الحجز.",
  alternates: {
    canonical: "/ar/faq",
    languages: { en: "/faq", ar: "/ar/faq" },
  },
};

const FAQS: { q: string; a: string }[] = [
  { q: "كم تكلفة حفلة كيدو كلب؟",
    a: `كلب ميني يبدأ من ${fmt(mini.publicPrice!)} ريال، وكلب كلاسيك (الأكثر حجزاً) بـ ${fmt(classic.publicPrice!)} ريال. كلب سيجنتشر ${signature.priceLabelAr}. أيام الأسبوع (الأحد للخميس) خصم ${weekdayPct}%. كل باقة تشمل التوصيل والتركيب والتعقيم والاستلام.` },
  { q: "ما الأعمار المناسبة؟",
    a: "من سنة لخمس سنوات. كل القطع مبطنة وآمنة للأطفال الصغار، والإخوة الأكبر مرحب بهم كذلك." },
  { q: "كم مساحة أحتاج؟",
    a: `كلب ميني يحتاج ${mini.footprint.replace("m", "م")}. كلاسيك ${classic.footprint.replace("m", "م")}. سيجنتشر ${signature.footprint.replace("m", "م")} وأكثر. نقيس مساحتك أولاً؛ داخل البيت أو الحديقة أو المجلس، كله ممكن.` },
  { q: "هل يمكن إضافة مصوّر؟",
    a: `نعم. ${photographer.nameAr} إضافة مدفوعة بـ ${fmt(photographer.price)} ريال على أي باقة، ومشمول في كلب سيجنتشر. تبقين في الصور بدل ما تكونين خلف الكاميرا، ونرسل لك الألبوم أولاً.` },
  { q: "وين توصلون؟",
    a: "اللؤلؤة، لوسيل، الخليج الغربي، الوعب، أبو هامور، المدينة التعليمية، الغرافة. مناطق ثانية حسب الطلب." },
  { q: "كيف يتم التعقيم؟",
    a: "كل قطعة تُنظف وتُعقم بعد كل حفلة، قبل ما توصل بيتك. نرسل صوراً للتأكيد عند الطلب." },
  { q: "قبل كم يوم أحجز؟",
    a: `الأفضل قبل ${PRICING.rushPremium.thresholdDays} أيام على الأقل لمواعيد نهاية الأسبوع، ونستقبل ${PRICING.capacity.partiesPerMonth} حفلات فقط في الشهر. الحجز المتأخر ممكن أحياناً برسوم استعجال ${Math.round((PRICING.rushPremium.multiplier - 1) * 100)}%؛ واتسبي نادين.` },
  { q: "لو احتجت ألغي أو أأجل؟",
    a: `التأجيل مجاني حتى ${PRICING.cancellation.rescheduleFreeOutsideDays} يوم قبل الموعد. بعدها العربون غير مسترد لكنه يتحول لرصيد ${PRICING.deposit.outsideCreditPct}% لموعد قادم. الطقس (للحفلات الخارجية): نؤجل دائماً، لا نسترد.` },
  { q: "كيف أدفع؟",
    a: `تحويل بنكي، Apple Pay، أو رابط دفع Skipcash في واتساب. بدون كاش. عربون ${PRICING.deposit.pct}% يحجز الموعد والباقي قبل الحفلة بيوم.` },
];

export default function ArFaqPage() {
  return (
    <main className="min-h-screen bg-[var(--color-bone)] text-[var(--color-ink)]">
      <header className="sticky top-0 z-40 backdrop-blur-md bg-[var(--color-bone)]/85 border-b border-black/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/ar" className="font-serif italic-display text-2xl">كيدو كلب</Link>
          <div className="flex items-center gap-4">
            <Link href="/faq" className="text-sm text-[var(--color-muted)]">EN</Link>
            <a
              href="https://wa.me/97450318434"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[var(--color-terracotta)] text-white px-5 py-2 text-sm font-medium"
            >
              واتساب
            </a>
          </div>
        </div>
      </header>

      <section className="px-6 pt-16 pb-16 max-w-3xl mx-auto">
        <p className="uppercase tracking-[0.2em] text-xs text-[var(--color-muted)] mb-3 text-center">
          الأسئلة الشائعة
        </p>
        <h1 className="text-4xl md:text-5xl mb-3 text-center">
          كل شي تحتاجين <span className="italic-display text-[var(--color-terracotta)]">تعرفينه أولاً</span>
        </h1>
        <p className="text-center text-[var(--color-muted)] mb-12">
          سؤالك مو هنا؟ واتسبي نادين وتضيفه.
        </p>
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            inLanguage: "ar",
            mainEntity: FAQS.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />

      <footer className="bg-[var(--color-ink)] text-[var(--color-bone)] py-10 px-6 text-center text-sm opacity-80">
        <p>© {new Date().getFullYear()} كيدو كلب · الدوحة، قطر · واتساب +974 5031 8434</p>
      </footer>
    </main>
  );
}

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { THEMES, THEME_BY_SLUG } from "@/content/themes";
import { TrustFooter } from "@/components/TrustFooter";
import { StickyWhatsApp } from "@/components/StickyWhatsApp";
import { TrustStrip } from "@/components/TrustStrip";
import { Testimonials } from "@/components/Testimonials";
import { Carousel } from "@/components/Carousel";

export function generateStaticParams() {
  return THEMES.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const t = THEME_BY_SLUG[slug];
  if (!t) return {};
  return {
    title: `${t.name}; KiddoKlub`,
    description: t.tagline,
    openGraph: {
      title: `${t.name} · KiddoKlub`,
      description: t.tagline,
      images: [{ url: t.imageHero }],
    },
  };
}

export default async function ThemePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const theme = THEME_BY_SLUG[slug];
  if (!theme) return notFound();

  const waText = encodeURIComponent(
    `Hi Nadine! I'd like to book the ${theme.name} setup. Can we chat?`,
  );

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="px-6 pt-12 pb-12 max-w-6xl mx-auto md:grid md:grid-cols-12 md:gap-10 md:items-center">
        <div className="md:col-span-7">
          <p className="uppercase tracking-[0.2em] text-xs text-[var(--color-muted)] mb-3">
            Theme · {theme.palette}
          </p>
          <h1 className="text-4xl md:text-6xl leading-[1.05] mb-4">
            {theme.name}
            <br />
            <span className="italic-display text-[var(--color-terracotta)]">
              {theme.tagline}
            </span>
          </h1>
          <p className="text-lg text-[var(--color-muted)] max-w-xl mb-6">
            {theme.body}
          </p>
          <div className="grid grid-cols-2 gap-3 mb-6 max-w-md">
            <div className="rounded-xl bg-white border border-black/5 p-3 text-sm">
              <div className="text-[var(--color-muted)] text-xs uppercase tracking-wide mb-0.5">
                Starting from
              </div>
              <div className="font-serif text-xl">
                <bdi>QAR {theme.startingFromQar.toLocaleString("en-US")}</bdi>
              </div>
            </div>
            <div className="rounded-xl bg-white border border-black/5 p-3 text-sm">
              <div className="text-[var(--color-muted)] text-xs uppercase tracking-wide mb-0.5">
                Best for
              </div>
              <div>{theme.bestFor}</div>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={`https://wa.me/97450318434?text=${waText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[var(--color-terracotta)] text-white px-7 py-3 font-medium"
            >
              WhatsApp about {theme.name}
            </a>
            <Link
              href="/book"
              className="rounded-full border border-[var(--color-ink)]/15 px-7 py-3 font-medium hover:bg-[var(--color-sand)]/40 transition-colors"
            >
              Build a quote
            </Link>
          </div>
        </div>
        <div className="md:col-span-5 mt-8 md:mt-0">
          <Carousel
            images={[theme.imageHero, ...theme.imageDetails]}
            alt={`${theme.name} setup`}
          />
        </div>
      </section>

      <TrustStrip />

      <Testimonials />

      {/* Theme switcher */}
      <section className="px-6 py-16 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-serif mb-6 text-center">
          Other themes
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {THEMES.filter((t) => t.slug !== theme.slug).map((t) => (
            <Link
              key={t.slug}
              href={`/packages/${t.slug}` as never}
              className="aspect-[4/5] rounded-2xl overflow-hidden border border-black/5 relative group"
            >
              <Image
                src={t.imageHero}
                alt={t.name}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                <div className="text-white">
                  <div className="font-medium">{t.name}</div>
                  <div className="text-xs opacity-80">{t.tagline}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <TrustFooter />
      <StickyWhatsApp />

      {/* Product JSON-LD for rich results on theme search */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: `KiddoKlub ${theme.name} setup`,
            description: theme.body,
            brand: { "@type": "Brand", name: "KiddoKlub" },
            image: [`https://kiddoklubdoha.com${theme.imageHero}`],
            offers: {
              "@type": "AggregateOffer",
              lowPrice: theme.startingFromQar,
              priceCurrency: "QAR",
              availability: "https://schema.org/InStock",
              areaServed: "Doha, Qatar",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "5.0",
              reviewCount: "12",
            },
          }),
        }}
      />
    </main>
  );
}

// Linktree-equivalent for IG bio. Salvaged from legacy bio.html, rebuilt premium.
// Lives at /bio so Nadine can paste kiddoklub.com/bio in her IG profile bio link.

import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Links — KiddoKlub",
  description: "Book on WhatsApp · Build a quote · See gallery · Refer a friend.",
  robots: { index: false, follow: true }, // bio link page doesn't need to compete in search
};

type BioLink = { href: string; title: string; sub: string; cta?: boolean };

const LINKS: BioLink[] = [
  { href: "https://wa.me/97450318434?text=Hi%20Nadine!%20I%20saw%20your%20Instagram%20and%20I%27d%20love%20to%20book%20a%20setup.", title: "WhatsApp Nadine", sub: "Reply within 30 min during the day", cta: true },
  { href: "/book",      title: "Build a quote in 90 seconds",        sub: "Theme · size · add-ons → instant WhatsApp" },
  { href: "/packages",  title: "See packages and prices",            sub: "Klub Mini, Classic, Signature" },
  { href: "/gallery",   title: "Browse recent setups",               sub: "Filter by venue and package" },
  { href: "/referral",  title: "Refer a friend → both save QAR 200", sub: "One share, two parties cheaper" },
  { href: "/about",     title: "Meet Nadine",                        sub: "Why we started KiddoKlub" },
];

export default function BioPage() {
  return (
    <main className="min-h-screen px-5 py-10 max-w-md mx-auto">
      <div className="text-center mb-8">
        <div className="aspect-square w-28 mx-auto rounded-full overflow-hidden bg-[var(--color-sand)] border border-black/5 mb-4 relative">
          <Image
            src="/photos/setups/setup-04.jpeg"
            alt="KiddoKlub"
            fill
            sizes="112px"
            className="object-cover"
          />
        </div>
        <h1 className="font-serif italic-display text-3xl">KiddoKlub</h1>
        <p className="text-sm text-[var(--color-muted)] mt-1">Soft-play parties, in your home · Doha</p>
        <p className="text-xs text-[var(--color-terracotta)] mt-3 font-medium">
          Founding-family slots: free bouncy castle + photographer on Klub Classic
        </p>
      </div>

      <ul className="space-y-3">
        {LINKS.map((l, i) => {
          const cls =
            "block rounded-2xl px-5 py-4 transition-transform hover:scale-[1.01] " +
            (l.cta
              ? "bg-[var(--color-terracotta)] text-white"
              : "bg-white border border-black/5");
          const titleCls = "font-medium " + (l.cta ? "" : "text-[var(--color-ink)]");
          const subCls = "text-xs mt-0.5 " + (l.cta ? "opacity-90" : "text-[var(--color-muted)]");
          const inner = (
            <>
              <div className={titleCls}>{l.title}</div>
              <div className={subCls}>{l.sub}</div>
            </>
          );
          const isExternal = l.href.startsWith("http");
          return (
            <li key={i}>
              {isExternal ? (
                <a href={l.href} target="_blank" rel="noopener noreferrer" className={cls}>
                  {inner}
                </a>
              ) : (
                <Link href={l.href as never} className={cls}>
                  {inner}
                </Link>
              )}
            </li>
          );
        })}
      </ul>

      <p className="text-center text-xs text-[var(--color-muted)] mt-10">
        © {new Date().getFullYear()} KiddoKlub · Doha, Qatar · WhatsApp +974 5031 8434
      </p>
    </main>
  );
}

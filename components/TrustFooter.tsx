import Link from "next/link";

export function TrustFooter() {
  return (
    <footer className="bg-[var(--color-ink)] text-[var(--color-cream)] mt-12">
      <div className="max-w-6xl mx-auto px-6 py-14 grid md:grid-cols-4 gap-10">
        <div>
          <p className="font-display text-2xl font-bold mb-3">KiddoKlub 🌈</p>
          <p className="text-sm opacity-85">
            Creating smiles with play and party magic. Doha&apos;s friendliest soft-play parties for kids 1 to 5.
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest opacity-70 mb-3">
            We come to
          </p>
          <ul className="space-y-1 text-sm opacity-90">
            <li>The Pearl</li>
            <li>Lusail Marina</li>
            <li>West Bay</li>
            <li>Al Waab · Abu Hamour</li>
            <li>Education City</li>
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest opacity-70 mb-3">Trust</p>
          <ul className="space-y-1 text-sm opacity-90">
            <li>QAR 1M public liability</li>
            <li>EN71 / BPA-free certified</li>
            <li>Sanitised after every event</li>
            <li>Same-day setup, 90 min before guests</li>
            <li><a href="/brand/index.html" className="opacity-90 hover:opacity-100 underline-offset-4 hover:underline">Brand guidelines</a></li>
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest opacity-70 mb-3">Talk</p>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                className="opacity-90 hover:opacity-100 underline-offset-4 hover:underline"
                href="https://wa.me/97450318434"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp +974 5031 8434
              </a>
            </li>
            <li>
              <a
                className="opacity-90 hover:opacity-100 underline-offset-4 hover:underline"
                href="mailto:hello@kiddoklub.com"
              >
                hello@kiddoklub.com
              </a>
            </li>
            <li>
              <Link
                href="/about"
                className="opacity-90 hover:opacity-100 underline-offset-4 hover:underline"
              >
                Meet Nadine
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Payment provider row; Qatar trust ritual per Council 2026-04-25 */}
      <div className="border-t border-white/10 px-6 py-5">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4 text-xs opacity-70">
          <p>© {new Date().getFullYear()} KiddoKlub · Trades in Nadine Kruger&apos;s name · Doha, Qatar 🌈</p>
          <p className="flex items-center gap-3 flex-wrap">
            <span>Skipcash</span>
            <span aria-hidden>·</span>
            <span>Apple Pay</span>
            <span aria-hidden>·</span>
            <span>Google Pay</span>
            <span aria-hidden>·</span>
            <span>Visa</span>
            <span aria-hidden>·</span>
            <span>Mastercard</span>
            <span aria-hidden>·</span>
            <span>QNB · CBQ transfer</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

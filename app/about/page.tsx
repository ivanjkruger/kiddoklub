import Image from "next/image";
import Link from "next/link";
import { TrustFooter } from "@/components/TrustFooter";
import { StickyWhatsApp } from "@/components/StickyWhatsApp";

export const metadata = {
  title: "Meet Nadine · KiddoKlub",
  description:
    "Doha mom, founder of KiddoKlub. Started this when I couldn't find what I wanted for my own kids' parties.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <section className="px-6 pt-16 pb-20 max-w-3xl mx-auto">
        <p className="uppercase tracking-[0.2em] text-xs text-[var(--color-muted)] mb-3">
          Meet the founder
        </p>
        <h1 className="text-4xl md:text-6xl mb-8 leading-[1.05]">
          Hi, I&apos;m <span className="italic-display text-[var(--color-terracotta)]">Nadine</span>.
        </h1>

        {/* Setup hero in lieu of founder portrait until Nadine picks one */}
        <div className="aspect-[4/5] rounded-2xl border border-black/5 mb-10 relative overflow-hidden">
          <Image
            src="/photos/setups/setup-08.jpeg"
            alt="A KiddoKlub setup, before guests arrive"
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
          />
        </div>

        <div className="space-y-5 text-lg leading-relaxed">
          <p>
            I started KiddoKlub when I couldn&apos;t find what I wanted for my own kids&apos; parties in Doha.
          </p>
          <p>
            Bouncy castles felt cheap. Indoor venues meant strict time slots and rented birthdays.
            What I wanted was the party AT my home, set up beautifully, sanitized, and packed away
            before bedtime.
          </p>
          <p>
            So we built it. Premium soft-play sets, ball pits, themed styling; delivered to your
            villa, your majlis, your garden. We arrive 90 minutes early, set everything up while
            your kids nap or get ready, and leave once the last guest goes home.
          </p>
          <p>
            We ask before we post any photos. We carry QAR 1M public liability cover. And every set
            is wiped + UV-treated between events.
          </p>
          <p className="italic-display text-2xl text-[var(--color-terracotta)] pt-4">
            We bring the play. You take the photos.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          <a
            href="https://wa.me/97450318434"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[var(--color-terracotta)] text-white px-7 py-3 font-medium"
          >
            WhatsApp Nadine
          </a>
          <Link
            href="/packages"
            className="rounded-full border border-[var(--color-ink)]/15 px-7 py-3 font-medium hover:bg-[var(--color-sand)]/40 transition-colors"
          >
            See packages
          </Link>
        </div>
      </section>

      {/* Process section */}
      <section className="px-6 py-20 bg-[var(--color-sand)]/40">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-10 text-center">How it works</h2>
          <ol className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Pick your setup", body: "Mini, Classic, or Signature. Add a bouncy castle, balloon arch, or photographer." },
              { step: "02", title: "Lock the date", body: "30% deposit holds your slot. Balance is due the day before." },
              { step: "03", title: "We arrive 90 min early", body: "Setup, sanitization, photo of the empty hero shot. You barely see us." },
              { step: "04", title: "We pack down at the end", body: "Edited photos to your inbox within 48 hours. We ask before we post." },
            ].map((s) => (
              <li key={s.step} className="bg-white rounded-2xl p-6 border border-black/5">
                <p className="font-serif text-[var(--color-terracotta)] text-3xl mb-3">{s.step}</p>
                <h3 className="text-xl mb-2">{s.title}</h3>
                <p className="text-sm text-[var(--color-muted)]">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <TrustFooter />
      <StickyWhatsApp />
    </main>
  );
}

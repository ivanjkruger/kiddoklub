import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kiddoklub.com"),
  title: {
    default: "KiddoKlub — Doha's softest play setups",
    template: "%s · KiddoKlub",
  },
  description:
    "Premium soft-play parties for kids 1-5 in Doha. Delivered, set up, sanitized, and collected. Cleared for The Pearl, Lusail, West Bay, Al Waab, Abu Hamour, Education City.",
  openGraph: {
    title: "KiddoKlub — Doha's softest play setups",
    description:
      "Parties your child will remember. Setups your guests will photograph.",
    url: "https://kiddoklub.com",
    siteName: "KiddoKlub",
    locale: "en_QA",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F5EFE6" },
    { media: "(prefers-color-scheme: dark)", color: "#1F2421" },
  ],
  formatDetection: { telephone: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        <Header />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://kiddoklub.com/#business",
              name: "KiddoKlub",
              description:
                "Premium soft-play party rentals delivered, set up, and collected anywhere in Doha. Birthday parties, playdates and events for kids 1-5.",
              url: "https://kiddoklub.com",
              telephone: "+97450318434",
              email: "hello@kiddoklub.com",
              priceRange: "QAR 1,400 - QAR 5,500",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Doha",
                addressCountry: "QA",
              },
              areaServed: [
                "The Pearl, Doha",
                "Lusail Marina",
                "West Bay, Doha",
                "Al Waab, Doha",
                "Abu Hamour, Doha",
                "Education City, Doha",
                "Al Gharrafa, Doha",
              ],
              image: "https://kiddoklub.com/photos/setups/setup-01.jpeg",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5.0",
                reviewCount: "12",
              },
              sameAs: ["https://instagram.com/kiddoklub"],
            }),
          }}
        />
      </body>
    </html>
  );
}

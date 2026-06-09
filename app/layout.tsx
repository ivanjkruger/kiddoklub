import type { Metadata } from "next";
import { Quicksand, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kiddoklubdoha.com"),
  title: {
    default: "KiddoKlub · Doha's softest play setups",
    template: "%s · KiddoKlub",
  },
  description:
    "Creating smiles with play and party magic Premium soft-play parties for kids 1-5 in Doha; delivered, set up, sanitised, and collected. Cleared for The Pearl, Lusail, West Bay, Al Waab, Abu Hamour, Education City.",
  openGraph: {
    title: "KiddoKlub · Doha's friendliest soft-play parties",
    description:
      "Creating smiles with play and party magic Premium soft-play, ball pits, and themed setups for Doha kids 1-5.",
    url: "https://kiddoklubdoha.com",
    siteName: "KiddoKlub",
    locale: "en_QA",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFF9F0" },
    { media: "(prefers-color-scheme: dark)", color: "#2A2520" },
  ],
  formatDetection: { telephone: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${quicksand.variable} ${inter.variable}`}>
      <body>
        <Header />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://kiddoklubdoha.com/#business",
              name: "KiddoKlub",
              description:
                "Premium soft-play party rentals delivered, set up, and collected anywhere in Doha. Birthday parties, playdates and events for kids 1-5.",
              url: "https://kiddoklubdoha.com",
              telephone: "+97450318434",
              email: "hello@kiddoklubdoha.com",
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
              image: "https://kiddoklubdoha.com/photos/setups/setup-01.jpeg",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5.0",
                reviewCount: "12",
              },
              sameAs: ["https://www.instagram.com/kiddoklub/"],
            }),
          }}
        />
      </body>
    </html>
  );
}

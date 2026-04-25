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
      </body>
    </html>
  );
}

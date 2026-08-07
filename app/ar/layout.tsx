import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import "../globals.css";

// Arabic body font actually loaded (the old layout named IBM Plex in CSS but
// never loaded it, so AR rendered in system fallback). 29LT Bukra is the brand
// first choice but is not on Google Fonts; IBM Plex Sans Arabic is the
// sanctioned alternative per the locked bilingual rules. Never Tajawal.
const plexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "700"],
  variable: "--font-arabic",
  display: "swap",
});

export const metadata: Metadata = {
  title: "كيدو كلب · حفلات سوفت بلاي في الدوحة",
  description:
    "حفلات سوفت بلاي ممتازة للأطفال من سنة لخمس سنوات في الدوحة. نوصّل، نركّب، نعقّم، ونرفع. واتساب نادين خلال 30 دقيقة.",
};

export default function ArLayout({ children }: { children: React.ReactNode }) {
  // Per Council 2026-04-25: dir="rtl" applied via the Arabic locale wrapper, not class-toggle.
  return (
    <div
      dir="rtl"
      lang="ar"
      className={plexArabic.variable}
      style={{ fontFamily: "var(--font-arabic), system-ui" }}
    >
      {children}
    </div>
  );
}

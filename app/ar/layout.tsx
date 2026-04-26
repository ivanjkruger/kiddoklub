import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "كيدو كلب · حفلات سوفت بلاي في الدوحة",
  description:
    "حفلات سوفت بلاي ممتازة للأطفال من سنة لخمس سنوات في الدوحة. نوصّل، نركّب، نعقّم، ونرفع. واتساب نادين خلال ٣٠ دقيقة.",
  alternates: { canonical: "https://kiddoklub.com/ar" },
};

export default function ArLayout({ children }: { children: React.ReactNode }) {
  // Per Council 2026-04-25: dir="rtl" applied via the Arabic locale wrapper, not class-toggle.
  return (
    <div dir="rtl" lang="ar" style={{ fontFamily: "'IBM Plex Sans Arabic', 'Tajawal', system-ui" }}>
      {children}
    </div>
  );
}

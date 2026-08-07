"use client";
// Sitewide WhatsApp-click meter. One document-level listener catches every
// wa.me anchor (server and client components alike) so no CTA needs wiring.
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { track } from "@vercel/analytics";

export function WaClickTracker() {
  const pathname = usePathname();

  useEffect(() => {
    function onClick(e: MouseEvent) {
      const a = (e.target as HTMLElement | null)?.closest?.("a[href*='wa.me']");
      if (!a) return;
      const section = a.closest("section[id], div[id]")?.id || "";
      track("whatsapp_click", { path: pathname, section });
    }
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, [pathname]);

  return null;
}

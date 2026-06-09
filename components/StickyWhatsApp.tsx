"use client";
import { motion } from "framer-motion";

export function StickyWhatsApp() {
  return (
    <a
      href="https://wa.me/97450318434?text=Hi%20Nadine!%20I%27d%20love%20to%20chat%20about%20a%20KiddoKlub%20party%20for%20my%20little%20one."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp Nadine"
      className="fixed end-5 bottom-5 z-50 safe-bottom md:end-8 md:bottom-8"
    >
      <motion.span
        animate={{ scale: [1, 1.06, 1] }}
        transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
        className="flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.413c-.003 6.557-5.337 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886a9.86 9.86 0 0 0 1.51 5.26l.66 1.052-.967 3.503 3.286-.916z"/>
        </svg>
      </motion.span>
    </a>
  );
}

"use client";

import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { createWhatsAppUrl, defaultWhatsAppMessage } from "@/lib/whatsapp";

export function WhatsAppButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 260);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={createWhatsAppUrl(defaultWhatsAppMessage)}
      target="_blank"
      rel="noreferrer"
      aria-label="Cotiza tu página por WhatsApp"
      className={`group fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-emerald-300 to-cyan-400 text-[#03101A] shadow-2xl shadow-cyan-500/25 transition ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <MessageCircle size={26} />
      <span className="pointer-events-none absolute bottom-full right-0 mb-3 whitespace-nowrap rounded-lg border border-white/10 bg-[#07131F] px-3 py-2 text-sm font-bold text-white opacity-0 shadow-xl transition group-hover:opacity-100 group-focus-visible:opacity-100">
        Cotiza tu página
      </span>
    </a>
  );
}

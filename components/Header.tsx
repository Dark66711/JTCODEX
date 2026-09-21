"use client";

import { Menu, MessageCircle, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navItems } from "@/lib/constants";
import { createWhatsAppUrl, defaultWhatsAppMessage } from "@/lib/whatsapp";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || isOpen ? "border-b border-white/10 bg-[#06111B]/94 shadow-xl shadow-black/20 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container-page flex h-20 items-center justify-between">
        <a href="#inicio" className="focus-ring flex items-center gap-2 rounded-lg" aria-label="Ir al inicio">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-cyan-300/25 bg-cyan-300/10 font-[var(--font-space)] text-lg font-black text-cyan-200">
            JT
          </span>
          <span className="font-[var(--font-space)] text-xl font-black tracking-wide">
            JT<span className="text-cyan-300">Codex</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegación principal">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="focus-ring rounded-md text-sm font-semibold text-slate-300 transition hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={createWhatsAppUrl(defaultWhatsAppMessage)}
          target="_blank"
          rel="noreferrer"
          className="header-desktop-cta btn-primary focus-ring hidden lg:inline-flex"
        >
          <MessageCircle size={18} />
          Cotizar proyecto
        </a>

        <button
          type="button"
          className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/12 bg-white/6 lg:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`lg:hidden ${isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"} transition-opacity`}
      >
        <div className="container-page pb-6">
          <nav className="glass-panel grid gap-2 rounded-2xl p-3" aria-label="Navegación móvil">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="focus-ring rounded-xl px-4 py-3 font-semibold text-slate-200 hover:bg-white/8"
              >
                {item.label}
              </a>
            ))}
            <a
              href={createWhatsAppUrl(defaultWhatsAppMessage)}
              target="_blank"
              rel="noreferrer"
              onClick={() => setIsOpen(false)}
              className="btn-primary focus-ring mt-2"
            >
              <MessageCircle size={18} />
              Cotizar proyecto
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

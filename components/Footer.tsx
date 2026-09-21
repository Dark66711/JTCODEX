import { Mail, MessageCircle } from "lucide-react";
import { navItems } from "@/lib/constants";
import { createWhatsAppUrl, WHATSAPP_DISPLAY } from "@/lib/whatsapp";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#040B12] py-10">
      <div className="container-page grid gap-8 md:grid-cols-[1.2fr_0.8fr_1fr]">
        <div>
          <a href="#inicio" className="focus-ring inline-flex rounded-lg font-[var(--font-space)] text-2xl font-black">
            JT<span className="text-cyan-300">Codex</span>
          </a>
          <p className="mt-3 max-w-sm leading-7 text-slate-400">Diseño y desarrollo web para llevar tu negocio al siguiente nivel.</p>
        </div>
        <nav aria-label="Enlaces de pie de página" className="grid gap-2">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="focus-ring w-fit rounded-md text-sm font-semibold text-slate-300 hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="space-y-3">
          <a href={createWhatsAppUrl("Hola JTCodex, quiero información sobre sus servicios web.")} target="_blank" rel="noreferrer" className="focus-ring flex w-fit items-center gap-2 rounded-md text-sm text-slate-300 hover:text-white">
            <MessageCircle size={18} className="text-emerald-300" />
            {WHATSAPP_DISPLAY}
          </a>
          <a href="mailto:danieljaviertorresgarcia@gmail.com" className="focus-ring flex w-fit items-center gap-2 rounded-md text-sm text-slate-300 hover:text-white">
            <Mail size={18} className="text-cyan-300" />
            danieljaviertorresgarcia@gmail.com
          </a>
        </div>
      </div>
      <div className="container-page mt-8 border-t border-white/10 pt-6 text-sm text-slate-500">
        © {year} JTCodex. Todos los derechos reservados.
      </div>
    </footer>
  );
}

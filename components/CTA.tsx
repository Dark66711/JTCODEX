import { ArrowRight, MessageCircle } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { createWhatsAppUrl, defaultWhatsAppMessage } from "@/lib/whatsapp";

export function CTA() {
  return (
    <AnimatedSection className="section-pad">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-[1.75rem] border border-cyan-300/25 bg-[#07131F] p-7 md:p-10">
          <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-cyan-300/20 blur-3xl" />
          <div className="absolute -bottom-20 left-12 h-52 w-52 rounded-full bg-purple-300/14 blur-3xl" />
          <div className="relative max-w-3xl">
            <h2 className="font-[var(--font-space)] text-3xl font-black leading-tight md:text-5xl">¿Listo para llevar tu negocio a Internet?</h2>
            <p className="mt-4 text-lg leading-8 text-slate-300">Cuéntanos tu idea y descubre qué podemos crear para tu negocio.</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a href={createWhatsAppUrl(defaultWhatsAppMessage)} target="_blank" rel="noreferrer" className="btn-primary focus-ring">
                <MessageCircle size={18} />
                Cotizar mi página
              </a>
              <a href="#planes" className="btn-secondary focus-ring">
                Ver planes <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

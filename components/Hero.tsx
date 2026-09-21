import { ArrowRight, CheckCircle2, Code2, LayoutDashboard, MessageCircle, Sparkles } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { createWhatsAppUrl, defaultWhatsAppMessage } from "@/lib/whatsapp";

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-24 lg:min-h-screen lg:pt-28">
      <div className="absolute left-1/2 top-20 -z-10 hidden h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/16 blur-3xl sm:block" />
      <div className="container-page grid gap-8 pb-10 md:pb-12 lg:min-h-[calc(100vh-7rem)] lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-12 lg:pb-16">
        <AnimatedSection className="max-w-3xl">
          <span className="eyebrow">
            <Sparkles size={15} />
            Diseño web en México
          </span>
          <h1 className="mt-6 font-[var(--font-space)] text-[clamp(2.5rem,8vw,5.8rem)] font-black leading-[0.96]">
            Tu negocio merece una <span className="text-gradient">web que destaque.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Diseñamos páginas web modernas, rápidas y funcionales para emprendedores, negocios y profesionales que quieren llevar su presencia digital al siguiente nivel.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#planes" className="btn-primary focus-ring">
              Ver planes <ArrowRight size={18} />
            </a>
            <a href={createWhatsAppUrl(defaultWhatsAppMessage)} target="_blank" rel="noreferrer" className="btn-secondary focus-ring">
              <MessageCircle size={18} />
              Cotizar por WhatsApp
            </a>
          </div>
          <div className="mt-8 grid gap-3 text-sm text-slate-300 sm:grid-cols-3">
            {["Diseño responsive", "WhatsApp integrado", "SEO básico"].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <CheckCircle2 className="text-cyan-300" size={18} />
                {item}
              </span>
            ))}
          </div>
        </AnimatedSection>

        <div className="relative hidden md:block">
          <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-cyan-400/18 via-purple-400/12 to-emerald-400/12 blur-2xl" />
          <div className="glass-panel relative overflow-hidden rounded-[1.8rem] p-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
                <span className="h-3 w-3 rounded-full bg-[#28c840]" />
              </div>
              <span className="rounded-full bg-cyan-300/10 px-3 py-1 text-xs font-bold text-cyan-200">jtcodex.mx</span>
            </div>
            <div className="grid gap-4 pt-5 sm:grid-cols-[1fr_0.72fr]">
              <div className="rounded-2xl border border-cyan-300/18 bg-[#081827] p-5">
                <div className="mb-5 flex items-center gap-3">
                  <LayoutDashboard className="text-cyan-300" />
                  <div>
                    <p className="text-xs font-bold uppercase text-cyan-200">Landing activa</p>
                    <p className="text-sm text-slate-400">Lista para captar clientes</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="h-3 w-3/4 rounded-full bg-white/18" />
                  <div className="h-3 w-1/2 rounded-full bg-white/12" />
                  <div className="mt-5 grid grid-cols-3 gap-2">
                    <span className="h-16 rounded-xl bg-cyan-300/14" />
                    <span className="h-16 rounded-xl bg-emerald-300/14" />
                    <span className="h-16 rounded-xl bg-purple-300/14" />
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="rounded-2xl border border-emerald-300/18 bg-emerald-300/8 p-4">
                  <p className="text-xs font-bold uppercase text-emerald-200">Conversión</p>
                  <p className="mt-2 text-2xl font-black">WhatsApp</p>
                  <div className="mt-4 h-2 rounded-full bg-emerald-300/70" />
                </div>
                <div className="rounded-2xl border border-purple-300/18 bg-purple-300/8 p-4">
                  <Code2 className="text-purple-200" size={20} />
                  <div className="mt-3 space-y-2 font-mono text-xs text-slate-300">
                    <p>&lt;section&gt;</p>
                    <p className="pl-4 text-cyan-200">cta: crecer</p>
                    <p>&lt;/section&gt;</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

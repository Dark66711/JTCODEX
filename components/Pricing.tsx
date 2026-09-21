"use client";

import { BarChart3, MessageCircle } from "lucide-react";
import { useState } from "react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { PricingCard } from "@/components/PricingCard";
import { PricingComparison } from "@/components/PricingComparison";
import { pricingPlans } from "@/lib/constants";
import { createWhatsAppUrl } from "@/lib/whatsapp";

const adviceMessage =
  "Hola JTCodex, quiero crear una página web pero no estoy seguro de qué plan necesito. ¿Me pueden orientar?";

export function Pricing() {
  const [comparisonOpen, setComparisonOpen] = useState(false);

  return (
    <AnimatedSection id="planes" className="section-pad">
      <div className="container-page">
        <span className="eyebrow">Planes</span>
        <div className="mt-5 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div>
            <h2 className="section-title">Planes para llevar tu negocio a Internet</h2>
            <p className="section-copy mt-4">Elige la opción que mejor se adapte a tu negocio.</p>
          </div>
          <button type="button" onClick={() => setComparisonOpen(true)} className="btn-secondary focus-ring w-fit">
            <BarChart3 size={18} />
            Comparar planes
          </button>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.name} {...plan} />
          ))}
        </div>

        <div className="glass-panel mt-10 flex flex-col items-start justify-between gap-5 rounded-2xl p-6 md:flex-row md:items-center">
          <div>
            <h3 className="font-[var(--font-space)] text-2xl font-black">¿No sabes cuál elegir?</h3>
            <p className="mt-2 max-w-2xl text-slate-300">
              Cuéntanos sobre tu negocio y te ayudamos a encontrar el paquete que mejor se adapte a tus necesidades.
            </p>
          </div>
          <a href={createWhatsAppUrl(adviceMessage)} target="_blank" rel="noreferrer" className="btn-primary focus-ring shrink-0">
            <MessageCircle size={18} />
            Quiero asesoría
          </a>
        </div>
      </div>
      <PricingComparison open={comparisonOpen} onClose={() => setComparisonOpen(false)} />
    </AnimatedSection>
  );
}

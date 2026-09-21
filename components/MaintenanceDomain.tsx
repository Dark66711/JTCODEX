import { Globe2, Wrench } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

export function MaintenanceDomain() {
  return (
    <AnimatedSection className="section-pad bg-white/[0.025]">
      <div className="container-page grid gap-5 md:grid-cols-2">
        <article className="glass-panel rounded-2xl p-7">
          <Globe2 className="text-cyan-300" size={34} />
          <h2 className="mt-5 font-[var(--font-space)] text-2xl font-black">Dominio incluido</h2>
          <p className="mt-3 leading-7 text-slate-300">
            El dominio está incluido durante el primer año en los paquetes indicados. Después puede aplicar un costo de renovación anual.
          </p>
        </article>
        <article className="glass-panel rounded-2xl p-7">
          <Wrench className="text-emerald-300" size={34} />
          <h2 className="mt-5 font-[var(--font-space)] text-2xl font-black">Mantenimiento opcional</h2>
          <p className="mt-3 leading-7 text-slate-300">Mantén tu sitio actualizado y funcionando correctamente.</p>
          <p className="mt-5 w-fit rounded-full border border-emerald-300/40 px-4 py-2 font-black text-emerald-200">$300 - $600 MXN / mes</p>
          <p className="mt-3 text-sm text-slate-400">El costo puede variar según las necesidades del sitio.</p>
        </article>
      </div>
    </AnimatedSection>
  );
}

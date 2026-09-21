import { AnimatedSection } from "@/components/AnimatedSection";
import { solutionCards } from "@/lib/constants";

export function Solutions() {
  return (
    <AnimatedSection className="section-pad">
      <div className="container-page">
        <span className="eyebrow">Soluciones</span>
        <h2 className="section-title mt-5">¿Qué podemos crear para ti?</h2>
        <p className="section-copy mt-4">
          Ejemplos de soluciones que podemos adaptar a tu negocio. No son proyectos reales realizados por JTCodex.
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {solutionCards.map(({ title, icon: Icon, type }, index) => (
            <article key={title} className="group rounded-2xl border border-white/10 bg-[#0B1724]/80 p-5 transition hover:-translate-y-1 hover:border-cyan-300/40">
              <div className="mb-5 flex items-center justify-between">
                <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-bold text-slate-300">Ejemplo de solución</span>
                <Icon className="text-cyan-300" size={24} />
              </div>
              <div className="rounded-xl border border-white/10 bg-[#050D15] p-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="font-[var(--font-space)] font-black">{title}</span>
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
                </div>
                <div className="mt-4 space-y-3">
                  <div className="h-3 w-3/4 rounded-full bg-white/14" />
                  <div className="h-3 w-1/2 rounded-full bg-white/10" />
                  <div className={`grid gap-2 ${index % 2 === 0 ? "grid-cols-3" : "grid-cols-2"}`}>
                    <span className="h-14 rounded-lg bg-cyan-300/12" />
                    <span className="h-14 rounded-lg bg-purple-300/12" />
                    {index % 2 === 0 ? <span className="h-14 rounded-lg bg-emerald-300/12" /> : null}
                  </div>
                </div>
              </div>
              <h3 className="mt-5 text-xl font-bold">{title}</h3>
              <p className="mt-2 text-sm text-slate-400">{type} diseñado con estructura clara, contacto visible y experiencia responsive.</p>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

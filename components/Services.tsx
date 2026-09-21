import { AnimatedSection } from "@/components/AnimatedSection";
import { services } from "@/lib/constants";

export function Services() {
  return (
    <AnimatedSection id="servicios" className="section-pad">
      <div className="container-page">
        <span className="eyebrow">Servicios</span>
        <div className="mt-5 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="section-title">Todo lo que tu negocio necesita para estar en Internet</h2>
          <p className="section-copy">Creamos soluciones digitales adaptadas a las necesidades de cada negocio.</p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {services.map(({ title, icon: Icon, items }) => (
            <article key={title} className="glass-panel group rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:shadow-cyan-500/10">
              <Icon className="text-cyan-300 transition group-hover:scale-110" size={30} />
              <h3 className="mt-5 font-[var(--font-space)] text-xl font-bold">{title}</h3>
              <ul className="mt-5 space-y-3 text-sm text-slate-300">
                {items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

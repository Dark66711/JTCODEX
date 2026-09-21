import { AnimatedSection } from "@/components/AnimatedSection";
import { benefits } from "@/lib/constants";

export function Benefits() {
  return (
    <AnimatedSection className="section-pad bg-white/[0.025]">
      <div className="container-page">
        <span className="eyebrow">Por qué elegir JTCodex</span>
        <h2 className="section-title mt-5">Una página pensada para tu negocio</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map(({ title, icon: Icon, copy }) => (
            <article key={title} className="rounded-2xl border border-white/10 bg-[#0B1724]/70 p-5 transition hover:border-emerald-300/35">
              <Icon className="text-emerald-300" size={26} />
              <h3 className="mt-4 text-lg font-bold">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

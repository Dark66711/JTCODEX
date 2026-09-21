import { AnimatedSection } from "@/components/AnimatedSection";
import { steps } from "@/lib/constants";

export function Process() {
  return (
    <AnimatedSection id="proceso" className="section-pad">
      <div className="container-page">
        <span className="eyebrow">Proceso</span>
        <h2 className="section-title mt-5">De tu idea a una página en línea</h2>
        <div className="relative mt-12 grid gap-5 md:grid-cols-4">
          <div className="absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-cyan-300/0 via-cyan-300/40 to-cyan-300/0 md:block" />
          {steps.map(([number, title, copy]) => (
            <article key={number} className="relative rounded-2xl border border-white/10 bg-[#0B1724]/80 p-5">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-300/30 bg-cyan-300/10 font-[var(--font-space)] text-lg font-black text-cyan-200">
                {number}
              </span>
              <h3 className="mt-5 text-lg font-bold">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

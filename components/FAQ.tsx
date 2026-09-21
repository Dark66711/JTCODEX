"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { faqs } from "@/lib/constants";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <AnimatedSection id="faq" className="section-pad bg-white/[0.025]">
      <div className="container-page">
        <span className="eyebrow">FAQ</span>
        <h2 className="section-title mt-5">Preguntas frecuentes</h2>
        <div className="mt-10 grid gap-3">
          {faqs.map(([question, answer], index) => {
            const active = open === index;
            return (
              <article key={question} className="rounded-2xl border border-white/10 bg-[#0B1724]/80">
                <button
                  type="button"
                  onClick={() => setOpen(active ? null : index)}
                  className="focus-ring flex w-full items-center justify-between gap-4 rounded-2xl p-5 text-left"
                  aria-expanded={active}
                >
                  <span className="font-bold">{question}</span>
                  <ChevronDown className={`shrink-0 text-cyan-300 transition ${active ? "rotate-180" : ""}`} />
                </button>
                <div className={`grid transition-all duration-300 ${active ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 leading-7 text-slate-300">{answer}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}

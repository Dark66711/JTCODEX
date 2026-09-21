"use client";

import { Check, X } from "lucide-react";
import { useEffect, useRef } from "react";
import { comparisons } from "@/lib/constants";

type Props = {
  open: boolean;
  onClose: () => void;
};

function Cell({ value }: { value: boolean | string }) {
  if (value === true) {
    return <Check aria-label="Incluido" className="mx-auto text-emerald-300" size={20} />;
  }
  if (value === false) {
    return <span className="text-slate-500" aria-label="No incluido">—</span>;
  }
  return <span className="text-sm text-slate-200">{value}</span>;
}

export function PricingComparison({ open, onClose }: Props) {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    dialogRef.current?.focus();
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/72 p-4 backdrop-blur-sm" onMouseDown={onClose}>
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="comparison-title"
        tabIndex={-1}
        className="glass-panel max-h-[88vh] w-full max-w-4xl overflow-hidden rounded-2xl"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-white/10 p-5">
          <div>
            <h3 id="comparison-title" className="font-[var(--font-space)] text-2xl font-black">
              Comparar planes
            </h3>
            <p className="mt-1 text-sm text-slate-400">Revisa las diferencias principales entre Start, Pro y Premium.</p>
          </div>
          <button type="button" onClick={onClose} className="focus-ring rounded-lg p-2 text-slate-300 hover:bg-white/10" aria-label="Cerrar comparador">
            <X />
          </button>
        </div>
        <div className="overflow-x-auto p-5">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr className="border-b border-white/10 text-sm text-slate-300">
                <th className="py-3 pr-4">Característica</th>
                <th className="px-4 py-3 text-center text-cyan-200">Start</th>
                <th className="px-4 py-3 text-center text-emerald-200">Pro</th>
                <th className="px-4 py-3 text-center text-purple-200">Premium</th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map(([feature, start, pro, premium]) => (
                <tr key={feature} className="border-b border-white/8">
                  <th className="py-3 pr-4 text-sm font-semibold text-slate-200">{feature}</th>
                  <td className="px-4 py-3 text-center"><Cell value={start} /></td>
                  <td className="px-4 py-3 text-center"><Cell value={pro} /></td>
                  <td className="px-4 py-3 text-center"><Cell value={premium} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

import { Check, type LucideIcon } from "lucide-react";
import { createWhatsAppUrl } from "@/lib/whatsapp";
import type { Accent } from "@/lib/constants";

const accents: Record<Accent, { text: string; border: string; bg: string; shadow: string; button: string }> = {
  cyan: {
    text: "text-cyan-300",
    border: "border-cyan-300/60 hover:border-cyan-200",
    bg: "bg-cyan-300/10",
    shadow: "hover:shadow-cyan-500/20",
    button: "from-cyan-300 to-sky-500"
  },
  green: {
    text: "text-emerald-300",
    border: "border-emerald-300/60 hover:border-emerald-200",
    bg: "bg-emerald-300/10",
    shadow: "hover:shadow-emerald-500/20",
    button: "from-emerald-300 to-green-500"
  },
  purple: {
    text: "text-purple-300",
    border: "border-purple-300/70 hover:border-purple-200",
    bg: "bg-purple-300/10",
    shadow: "shadow-purple-500/10 hover:shadow-purple-500/25",
    button: "from-purple-300 to-fuchsia-500"
  },
  amber: {
    text: "text-amber-300",
    border: "border-amber-300/70 hover:border-amber-200",
    bg: "bg-amber-300/10",
    shadow: "hover:shadow-amber-500/20",
    button: "from-amber-300 to-orange-500"
  }
};

type Props = {
  name: string;
  icon: LucideIcon;
  accent: Accent;
  description: string;
  price: string;
  prefix?: string;
  label: string;
  badge?: string;
  features: string[];
  cta: string;
  whatsappMessage: string;
};

export function PricingCard({ name, icon: Icon, accent, description, price, prefix, label, badge, features, cta, whatsappMessage }: Props) {
  const color = accents[accent];

  return (
    <article
      className={`group relative flex h-full flex-col rounded-2xl border bg-[#07131F]/92 p-5 shadow-2xl transition duration-300 hover:-translate-y-2 ${color.border} ${color.shadow} ${
        badge ? "lg:-mt-4" : ""
      }`}
    >
      {badge ? (
        <span className={`absolute right-5 top-4 rounded-full ${color.bg} px-3 py-1 text-xs font-black ${color.text}`}>
          {badge}
        </span>
      ) : null}
      <Icon className={`${color.text} transition duration-300 group-hover:-translate-y-1 group-hover:scale-110`} size={38} />
      <h3 className="mt-5 font-[var(--font-space)] text-2xl font-black">{name}</h3>
      <p className="mt-3 min-h-18 text-sm leading-6 text-slate-300">{description}</p>
      <div className="mt-5">
        {prefix ? <p className="text-xs font-black text-slate-400">{prefix}</p> : null}
        <p className="font-[var(--font-space)] text-4xl font-black tracking-normal">{price}</p>
      </div>
      <span className={`mt-4 rounded-full bg-gradient-to-r ${color.button} px-4 py-2 text-center text-sm font-black text-[#06111B]`}>
        {label}
      </span>
      <ul className="mt-6 flex-1 space-y-3 text-sm text-slate-200">
        {features.map((feature) => (
          <li key={feature} className="flex gap-3">
            <Check className={`${color.text} mt-0.5 shrink-0`} size={18} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <a
        href={createWhatsAppUrl(whatsappMessage)}
        target="_blank"
        rel="noreferrer"
        className={`focus-ring mt-7 inline-flex min-h-12 items-center justify-center rounded-full border px-4 text-center font-black transition hover:bg-white/8 ${color.border} ${color.text}`}
      >
        {cta}
      </a>
    </article>
  );
}

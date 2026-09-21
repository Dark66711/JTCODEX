"use client";

import { Mail, MessageCircle, Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { createWhatsAppUrl, WHATSAPP_DISPLAY } from "@/lib/whatsapp";

const pageTypes = ["Landing page", "Página para negocio", "Página con varias secciones", "Sistema de citas", "Catálogo / menú", "Web personalizada", "No estoy seguro"];
const budgets = ["Menos de $1,500 MXN", "$1,500 - $2,500 MXN", "$2,500 - $4,500 MXN", "Más de $4,500 MXN", "Quiero asesoría"];

type FormState = {
  name: string;
  business: string;
  pageType: string;
  budget: string;
  message: string;
};

const initialForm: FormState = {
  name: "",
  business: "",
  pageType: "",
  budget: "",
  message: ""
};

export function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});

  function updateField(field: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) nextErrors.name = "Escribe tu nombre.";
    if (!form.pageType) nextErrors.pageType = "Selecciona el tipo de página.";
    if (!form.budget) nextErrors.budget = "Selecciona un presupuesto aproximado.";
    if (!form.message.trim()) nextErrors.message = "Cuéntanos brevemente qué necesitas.";

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    const message = `Hola JTCodex, quiero solicitar información para una página web.

Nombre: ${form.name}
Negocio: ${form.business || "No especificado"}
Tipo de página: ${form.pageType}
Presupuesto: ${form.budget}
Mensaje: ${form.message}`;

    window.open(createWhatsAppUrl(message), "_blank", "noopener,noreferrer");
  }

  return (
    <AnimatedSection id="contacto" className="section-pad">
      <div className="container-page grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <span className="eyebrow">Contacto</span>
          <h2 className="section-title mt-5">Hablemos de tu próximo proyecto</h2>
          <p className="section-copy mt-4">Cuéntame qué tipo de página necesitas y te ayudaré a encontrar una solución adecuada para tu negocio.</p>
          <div className="mt-8 space-y-4">
            <a href={createWhatsAppUrl("Hola JTCodex, quiero información para crear mi página web.")} target="_blank" rel="noreferrer" className="focus-ring flex w-fit items-center gap-3 rounded-xl text-slate-200 hover:text-white">
              <MessageCircle className="text-emerald-300" />
              {WHATSAPP_DISPLAY}
            </a>
            <a href="mailto:danieljaviertorresgarcia@gmail.com" className="focus-ring flex w-fit items-center gap-3 rounded-xl text-slate-200 hover:text-white">
              <Mail className="text-cyan-300" />
              danieljaviertorresgarcia@gmail.com
            </a>
          </div>
        </div>

        <form onSubmit={submit} className="glass-panel rounded-2xl p-5 md:p-7" noValidate>
          <div className="grid gap-4 md:grid-cols-2">
            <Field label="Nombre" error={errors.name}>
              <input value={form.name} onChange={(event) => updateField("name", event.target.value)} className="input-field" autoComplete="name" />
            </Field>
            <Field label="Nombre del negocio">
              <input value={form.business} onChange={(event) => updateField("business", event.target.value)} className="input-field" autoComplete="organization" />
            </Field>
            <Field label="Tipo de página" error={errors.pageType}>
              <select value={form.pageType} onChange={(event) => updateField("pageType", event.target.value)} className="input-field">
                <option value="">Selecciona una opción</option>
                {pageTypes.map((type) => <option key={type}>{type}</option>)}
              </select>
            </Field>
            <Field label="Presupuesto aproximado" error={errors.budget}>
              <select value={form.budget} onChange={(event) => updateField("budget", event.target.value)} className="input-field">
                <option value="">Selecciona una opción</option>
                {budgets.map((budget) => <option key={budget}>{budget}</option>)}
              </select>
            </Field>
          </div>
          <Field label="Mensaje" error={errors.message} className="mt-4">
            <textarea value={form.message} onChange={(event) => updateField("message", event.target.value)} className="input-field min-h-32 resize-y" />
          </Field>
          <button type="submit" className="btn-primary focus-ring mt-5 w-full sm:w-auto">
            <Send size={18} />
            Enviar por WhatsApp
          </button>
        </form>
      </div>
    </AnimatedSection>
  );
}

function Field({ label, error, className = "", children }: { label: string; error?: string; className?: string; children: React.ReactNode }) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-2 block text-sm font-bold text-slate-200">{label}</span>
      {children}
      {error ? <span className="mt-2 block text-sm font-semibold text-rose-300">{error}</span> : null}
    </label>
  );
}

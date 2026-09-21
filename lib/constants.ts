import {
  CalendarDays,
  Crown,
  FileText,
  GalleryHorizontalEnd,
  Globe2,
  LayoutTemplate,
  MapPin,
  MessageCircle,
  MonitorSmartphone,
  Rocket,
  Search,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Star,
  Target,
  type LucideIcon
} from "lucide-react";

export type Accent = "cyan" | "green" | "purple" | "amber";

export type PricingPlan = {
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

export const navItems = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#proceso", label: "Proceso" },
  { href: "#planes", label: "Planes" },
  { href: "#faq", label: "FAQ" },
  { href: "#contacto", label: "Contacto" }
];

export const services = [
  {
    title: "Presencia web",
    icon: LayoutTemplate,
    items: ["Diseño de páginas web", "Landing pages", "Sitios para negocios", "Diseño personalizado"]
  },
  {
    title: "Contacto y conversión",
    icon: MessageCircle,
    items: ["WhatsApp", "Formularios de contacto", "Google Maps", "Integraciones"]
  },
  {
    title: "Contenido digital",
    icon: GalleryHorizontalEnd,
    items: ["Galerías", "Catálogos digitales", "Menús digitales", "Sistemas de citas"]
  },
  {
    title: "Base técnica",
    icon: Globe2,
    items: ["Diseño responsive", "SEO básico", "Dominio y hosting", "Mantenimiento"]
  }
];

export const benefits = [
  { title: "Diseño responsive", icon: MonitorSmartphone, copy: "Tu sitio se adapta a celulares, tablets y escritorio." },
  { title: "Páginas rápidas", icon: Rocket, copy: "Estructuras ligeras pensadas para cargar con fluidez." },
  { title: "Seguridad SSL", icon: ShieldCheck, copy: "Preparado para funcionar con navegación segura." },
  { title: "SEO básico", icon: Search, copy: "Buenas bases para que tu negocio se entienda mejor en buscadores." },
  { title: "Diseño moderno", icon: Sparkles, copy: "Una presencia visual cuidada, profesional y memorable." },
  { title: "WhatsApp integrado", icon: MessageCircle, copy: "CTA directos para facilitar conversaciones con clientes." }
];

export const steps = [
  ["01", "Cuéntanos tu idea", "Conocemos tu negocio, tus objetivos y lo que necesitas."],
  ["02", "Planeamos tu página", "Definimos estructura, contenido, funciones y estilo."],
  ["03", "Diseñamos y desarrollamos", "Construimos una experiencia moderna y adaptable."],
  ["04", "Publicamos tu sitio", "Preparamos tu página para que pueda estar disponible en Internet."]
];

export const pricingPlans: PricingPlan[] = [
  {
    name: "WEB START",
    icon: Rocket,
    accent: "cyan",
    description: "Ideal para negocios pequeños que quieren dar el primer paso en Internet.",
    price: "$1,500 MXN",
    label: "PAGO ÚNICO",
    features: [
      "Landing page de 1 página",
      "Diseño adaptado a celular",
      "Información del negocio",
      "Servicios",
      "Botón de WhatsApp",
      "Google Maps",
      "Redes sociales",
      "Dominio incluido por 1 año",
      "Configuración básica de publicación"
    ],
    cta: "Elegir Web Start",
    whatsappMessage:
      "Hola, me interesa contratar el paquete Web Start de JTCodex por $1,500 MXN. Quiero recibir más información."
  },
  {
    name: "WEB PRO",
    icon: Star,
    accent: "green",
    description: "Para negocios que buscan una presencia más completa y profesional.",
    price: "$2,500 MXN",
    label: "PAGO ÚNICO",
    features: [
      "Todo lo del paquete Start",
      "Hasta 4-5 secciones/páginas",
      "Galería de fotos",
      "Animaciones",
      "Formulario de contacto",
      "SEO básico",
      "Mejor personalización visual",
      "Dominio incluido por 1 año",
      "Publicación en línea"
    ],
    cta: "Elegir Web Pro",
    whatsappMessage:
      "Hola, me interesa contratar el paquete Web Pro de JTCodex por $2,500 MXN. Quiero recibir más información."
  },
  {
    name: "WEB PREMIUM",
    icon: Crown,
    accent: "purple",
    description: "La opción más completa para hacer crecer tu negocio y destacar de la competencia.",
    price: "$4,500 MXN",
    label: "PAGO ÚNICO",
    badge: "MÁS COMPLETO",
    features: [
      "Todo lo del paquete Pro",
      "Sistema de citas / reservaciones",
      "Catálogo o menú según el negocio",
      "Panel de administración básico",
      "SEO más completo",
      "Integraciones con redes y WhatsApp",
      "Diseño totalmente personalizado",
      "Dominio incluido por 1 año",
      "Publicación en línea"
    ],
    cta: "Elegir Web Premium",
    whatsappMessage:
      "Hola, me interesa contratar el paquete Web Premium de JTCodex por $4,500 MXN. Quiero recibir más información."
  },
  {
    name: "WEB A TU PRESUPUESTO",
    icon: Target,
    accent: "amber",
    description: "Tú decides cuánto invertir y nosotros te proponemos una solución según tus necesidades.",
    prefix: "DESDE",
    price: "$1,500 MXN",
    label: "PRECIO PERSONALIZADO",
    features: [
      "Analizamos tu presupuesto",
      "Te proponemos un plan a la medida",
      "Incluye las funcionalidades que realmente necesitas",
      "Puedes elegir funciones adicionales",
      "Diseño profesional adaptable a tu negocio"
    ],
    cta: "Solicitar cotización",
    whatsappMessage:
      "Hola, quiero una página web con JTCodex y me interesa la opción Web a tu Presupuesto. Mi presupuesto aproximado es:"
  }
];

export const comparisons = [
  ["Landing page", true, true, true],
  ["Diseño responsive", true, true, true],
  ["WhatsApp", true, true, true],
  ["Google Maps", true, true, true],
  ["Galería", false, true, true],
  ["Animaciones", false, true, true],
  ["Formulario", false, true, true],
  ["SEO", "Básico", "Básico", "Más completo"],
  ["Sistema de citas", false, false, true],
  ["Catálogo / menú", false, false, true],
  ["Panel de administración", false, false, true],
  ["Diseño personalizado", false, "Mejorado", true]
] as const;

export const solutionCards = [
  { title: "Barberías", icon: CalendarDays, type: "Reservar cita" },
  { title: "Restaurantes", icon: FileText, type: "Menú digital" },
  { title: "Tiendas", icon: ShoppingBag, type: "Catálogo" },
  { title: "Profesionales", icon: MonitorSmartphone, type: "Contacto" },
  { title: "Negocios locales", icon: MapPin, type: "Ubicación" },
  { title: "Sistemas de citas", icon: CalendarDays, type: "Agenda" }
];

export const faqs = [
  ["¿Cuánto tarda en estar lista una página web?", "El tiempo puede variar según las necesidades del proyecto, la cantidad de contenido y las funciones solicitadas."],
  ["¿Necesito tener dominio?", "No necesariamente. En los paquetes indicados, el dominio está incluido durante el primer año."],
  ["¿Mi página funcionará en celular?", "Sí. El diseño se prepara para verse correctamente en celulares, tablets y computadoras."],
  ["¿Pueden ayudarme a elegir un plan?", "Sí. Puedes contarme sobre tu negocio y te ayudamos a identificar la opción más adecuada."],
  ["¿El dominio está incluido?", "Sí, durante el primer año en los paquetes indicados. Después puede aplicar un costo de renovación anual."],
  ["¿Qué pasa después del primer año?", "Puede aplicar la renovación del dominio y, si lo necesitas, mantenimiento opcional para conservar el sitio actualizado."],
  ["¿Ofrecen mantenimiento?", "Sí. El mantenimiento es opcional y el costo puede variar según las necesidades del sitio."],
  ["¿Puedo pedir modificaciones?", "Sí. Las modificaciones se revisan según el alcance del proyecto y lo que necesite cambiarse."],
  ["¿Puedo integrar WhatsApp?", "Sí. Podemos agregar botones y llamadas a la acción para que tus clientes te contacten por WhatsApp."],
  ["¿Puedo contratar algo que no esté incluido en los paquetes?", "Sí. Se puede revisar una propuesta personalizada según las funciones que necesites."]
];

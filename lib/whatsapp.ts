export const WHATSAPP_NUMBER = "526182749907";
export const WHATSAPP_DISPLAY = "+52 618 274 9907";

export function createWhatsAppUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const defaultWhatsAppMessage =
  "Hola, vi la página de JTCodex y me gustaría recibir información para crear mi página web.";

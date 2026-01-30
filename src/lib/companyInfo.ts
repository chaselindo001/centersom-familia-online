export const COMPANY = {
  name: "Center Som Júnior",
  foundationYear: 1989,
  foundationDateLabel: "18/04/1989",
  phones: {
    landlineLabel: "(16) 3382-3251",
    landlineTel: "+551633823251",
    whatsappLabel: "(16) 99109-3580",
    whatsappTel: "+5516991093580",
    whatsappWaMe: "5516991093580",
  },
  address: {
    street: "Rua Sinharinha Frota, 2115",
    districtCityState: "Bairro Buscardi, Matão - SP",
  },
} as const;

export const DEFAULT_WHATSAPP_MESSAGE =
  "Olá! Vim pelo site da Center Som Júnior e gostaria de um orçamento.";

// Link universal solicitado (mantido como texto “humano”; o browser fará a codificação necessária).
export const WHATSAPP_URL =
  "https://wa.me/5516991093580?text=Olá! Vim pelo site da Center Som Júnior e gostaria de um orçamento.";

export function buildWhatsAppUrl(message?: string) {
  const base = `https://wa.me/${COMPANY.phones.whatsappWaMe}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

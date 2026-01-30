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
    districtCityState: "Jardim Buscardi, Matão - SP",
  },
} as const;

export function buildWhatsAppUrl(message?: string) {
  const base = `https://wa.me/${COMPANY.phones.whatsappWaMe}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { COMPANY, WHATSAPP_URL } from "@/lib/companyInfo";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Endereço",
      primary: COMPANY.address.street,
      secondary: COMPANY.address.districtCityState,
    },
    {
      icon: Phone,
      title: "Telefone Fixo",
      primary: COMPANY.phones.landlineLabel,
      secondary: "Atendimento em horário comercial",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      primary: COMPANY.phones.whatsappLabel,
      secondary: "Orçamentos e dúvidas rápidas",
    },
    {
      icon: Clock,
      title: "Horário de Funcionamento",
      primary: "Segunda a Sexta: 8h às 18h",
      secondary: "Sábado: 8h às 12h",
    },
  ];

  return (
    <section id="contato" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-secondary uppercase tracking-wider mb-3">
            Contato
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Visita e contato
          </h2>
          <p className="text-lg text-muted-foreground">
            A Center Som Júnior está localizada no Bairro Buscardi, em Matão-SP.
            O contato pode ser feito pelo WhatsApp ou telefone fixo.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Map */}
          <div className="order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden shadow-card h-[400px] lg:h-full min-h-[400px]">
              <iframe
                src="https://www.google.com/maps?q=Rua%20Sinharinha%20Frota%2C%202115%2C%20Bairro%20Buscardi%2C%20Mat%C3%A3o%20-%20SP&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Center Som Jr"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>

          {/* Contact Info */}
          <div className="order-1 lg:order-2 space-y-8">
            {/* Contact Cards */}
            {contactInfo.map((item, index) => (
              <div 
                key={item.title}
                className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="text-foreground font-medium">{item.primary}</p>
                  <p className="text-sm text-muted-foreground">{item.secondary}</p>
                </div>
              </div>
            ))}

            {/* CTA Buttons */}
            <div className="space-y-4 pt-4">
              <a 
                href={WHATSAPP_URL}
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <Button 
                  size="lg" 
                  className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground gap-3 text-base py-6"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chamar no WhatsApp
                </Button>
              </a>
              
              <a 
                href={`tel:${COMPANY.phones.landlineTel}`}
                className="block"
              >
                <Button 
                  size="lg" 
                  variant="outline"
                  className="w-full gap-3 text-base py-6"
                >
                  <Phone className="w-5 h-5" />
                    Ligar no Fixo
                </Button>
              </a>
            </div>

            {/* Additional Info */}
            <div className="p-6 rounded-2xl bg-secondary/10 border border-secondary/20">
              <p className="text-sm text-foreground">
                <strong>Dica:</strong> O envio de uma foto do problema/aparelho pelo WhatsApp
                ajuda a equipe a orientar melhor antes da visita.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

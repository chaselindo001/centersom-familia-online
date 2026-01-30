import { MapPin, Phone, Clock, MessageCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Endereço",
      primary: "Rua Sinharinha Frota, 2115",
      secondary: "Jardim Buscardi, Matão - SP",
    },
    {
      icon: Phone,
      title: "Telefone",
      primary: "(16) 9999-9999",
      secondary: "Ligue ou mande mensagem",
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
            Venha nos visitar
          </h2>
          <p className="text-lg text-muted-foreground">
            Estamos localizados no Jardim Buscardi, em Matão-SP. 
            Venha conhecer nossa loja ou entre em contato pelo WhatsApp.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Map */}
          <div className="order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden shadow-card h-[400px] lg:h-full min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.8!2d-48.36!3d-21.60!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDM2JzAwLjAiUyA0OMKwMjEnMzYuMCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
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
                href="https://wa.me/5516999999999?text=Olá! Gostaria de saber mais sobre os serviços da Center Som Jr." 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <Button 
                  size="lg" 
                  className="w-full bg-[#25D366] hover:bg-[#25D366]/90 text-white gap-3 text-base py-6"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chamar no WhatsApp
                </Button>
              </a>
              
              <a 
                href="tel:+5516999999999"
                className="block"
              >
                <Button 
                  size="lg" 
                  variant="outline"
                  className="w-full gap-3 text-base py-6"
                >
                  <Phone className="w-5 h-5" />
                  Ligar Agora
                </Button>
              </a>
            </div>

            {/* Additional Info */}
            <div className="p-6 rounded-2xl bg-secondary/10 border border-secondary/20">
              <p className="text-sm text-foreground">
                <strong>💡 Dica:</strong> Tire uma foto do problema ou do aparelho e 
                envie pelo WhatsApp. Assim podemos fazer uma avaliação prévia mais rápida!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

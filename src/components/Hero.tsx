import { Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-storefront.jpg";
import { COMPANY, WHATSAPP_URL } from "@/lib/companyInfo";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Fachada da Center Som Júnior" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm border border-secondary/30 rounded-full px-4 py-2 mb-6 animate-fade-in">
            <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
            <span className="text-sm text-primary-foreground/90">Empresa familiar desde {COMPANY.foundationYear}</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Mais de 35 anos
            <span className="block text-secondary">consertando com confiança</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
            A {COMPANY.name} é referência em assistência técnica e manutenção de eletrônicos,
            com foco em <strong>televisores</strong>, <strong>som automotivo</strong> e aparelhos de <strong>áudio e vídeo</strong>.
            Atendimento claro, profissional e acolhedor.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="w-full sm:w-auto bg-secondary hover:bg-secondary/90 text-secondary-foreground gap-2 text-base px-8">
                <Phone className="w-5 h-5" />
                Chamar no WhatsApp
              </Button>
            </a>
            <a href="#servicos">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-base px-8">
                Ver Serviços
              </Button>
            </a>
          </div>

          {/* Quick Info */}
          <div className="grid sm:grid-cols-3 gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center gap-3 text-primary-foreground/80">
              <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <p className="text-sm font-medium text-primary-foreground">Matão - SP</p>
                <p className="text-xs text-primary-foreground/60">Bairro Buscardi</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-primary-foreground/80">
              <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
                <Clock className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <p className="text-sm font-medium text-primary-foreground">Seg - Sáb</p>
                <p className="text-xs text-primary-foreground/60">8h às 18h</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-primary-foreground/80">
              <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
                <Phone className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <p className="text-sm font-medium text-primary-foreground">WhatsApp</p>
                <p className="text-xs text-primary-foreground/60">{COMPANY.phones.whatsappLabel}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-secondary rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

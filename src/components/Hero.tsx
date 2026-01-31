import { Phone, MapPin, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-storefront.jpg";
import { COMPANY, WHATSAPP_URL } from "@/lib/companyInfo";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img src={heroImage} alt={`Fachada da ${COMPANY.name} em Matão`} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/90 to-primary/75" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-3xl">
          {/* Badge de Confiança */}
          <div className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm border border-secondary/30 rounded-full px-4 py-2 mb-6 animate-fade-in">
            <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
            <span className="text-sm font-medium text-primary-foreground/90">
              Referência em Matão desde {COMPANY.foundationYear}
            </span>
          </div>

          {/* Título Principal Otimizado para SEO e Conversão */}
          <h1
            className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            Conserto de TV e Som em Matão com
            <span className="block text-secondary">35 anos de tradição</span>
          </h1>

          {/* Descrição Focada em Resolver a Dor do Cliente */}
          <p
            className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Não deixe seu lazer parado. Na <strong>{COMPANY.name}</strong>, recuperamos seu televisor e sistema de som
            com peças de qualidade e a garantia de quem é especialista no que faz.
          </p>

          {/* Botões de Ação */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-secondary hover:bg-secondary/90 text-secondary-foreground gap-2 text-lg px-10 py-7 shadow-xl hover:scale-105 transition-all"
              >
                <Phone className="w-5 h-5" />
                Orçamento via WhatsApp
              </Button>
            </a>
            <a href="#servicos" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8 py-7"
              >
                Ver Especialidades
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
          </div>

          {/* Quick Info - Horários Corrigidos */}
          <div
            className="grid sm:grid-cols-3 gap-6 animate-fade-in border-t border-primary-foreground/10 pt-8"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <p className="text-sm font-bold text-primary-foreground">Onde estamos</p>
                <p className="text-xs text-primary-foreground/70 uppercase tracking-wider">Bairro Buscardi, Matão</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center">
                <Clock className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <p className="text-sm font-bold text-primary-foreground">Horário</p>
                <div className="text-[10px] md:text-xs text-primary-foreground/70 uppercase tracking-wider leading-tight">
                  <p>Seg a Sex: 8h às 18h</p>
                  <p>Sábado: 8h às 12h</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center">
                <Phone className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <p className="text-sm font-bold text-primary-foreground">Telefone</p>
                <p className="text-xs text-primary-foreground/70 uppercase tracking-wider">
                  {COMPANY.phones.whatsappLabel}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Indicador de Rolagem */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-secondary rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

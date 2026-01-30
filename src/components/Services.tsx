import { 
  Tv, 
  Microwave, 
  Gamepad2, 
  Speaker, 
  Radio, 
  Smartphone,
  Car,
  Shield,
  CircuitBoard,
  Volume2
} from "lucide-react";
import { WHATSAPP_URL } from "@/lib/companyInfo";

const Services = () => {
  const electronicsServices = [
    { icon: Tv, name: "TVs", description: "Manutenção em LED/LCD e Smart TVs com diagnóstico preciso" },
    { icon: Microwave, name: "Micro-ondas", description: "Reparo completo de fornos micro-ondas" },
    { icon: Gamepad2, name: "Videogames", description: "Manutenção de consoles e controles" },
    { icon: Speaker, name: "Aparelhos de Som", description: "Conserto de caixas de som e sistemas de áudio" },
    { icon: Radio, name: "Rádios Automotivos e Multimídias", description: "Reparo de sistemas originais de fábrica" },
    { icon: Smartphone, name: "Smartphones", description: "Reparos avançados em Android e iOS, telas e placas" },
  ];

  const automotiveServices = [
    { icon: Shield, name: "Alarmes", description: "Instalação e conserto de sistemas de alarme" },
    { icon: Car, name: "Vidros Elétricos", description: "Instalação e reparo de vidros elétricos" },
    { icon: CircuitBoard, name: "Controles Originais", description: "Programação de controles de alarme originais" },
    { icon: Volume2, name: "Som e Auto", description: "Instalação de som automotivo, alarmes e controles de carro" },
  ];

  return (
    <section id="servicos" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-secondary uppercase tracking-wider mb-3">
            Serviços
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Soluções completas para clientes
          </h2>
          <p className="text-lg text-muted-foreground">
            A Center Som Júnior atende uma ampla variedade de equipamentos eletrônicos e serviços automotivos,
            com qualidade e garantia.
          </p>
        </div>

        {/* Electronics Section */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
              <Tv className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-display text-2xl font-bold text-foreground">Eletrodomésticos e Eletrônicos</h3>
              <p className="text-muted-foreground">Consertos especializados para sua casa</p>
            </div>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {electronicsServices.map((service, index) => (
              <div 
                key={service.name}
                className="group p-6 rounded-2xl bg-card border border-border shadow-soft hover:border-primary/30 hover:shadow-card transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-semibold text-foreground mb-1">
                      {service.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Automotive Section */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
              <Car className="w-6 h-6 text-secondary-foreground" />
            </div>
            <div>
              <h3 className="font-display text-2xl font-bold text-foreground">Serviços Automotivos</h3>
              <p className="text-muted-foreground">Soluções completas para seu veículo</p>
            </div>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {automotiveServices.map((service, index) => (
              <div 
                key={service.name}
                className="group p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-border shadow-soft hover:border-secondary/30 hover:shadow-card transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-secondary" />
                </div>
                <h4 className="font-display text-lg font-semibold text-foreground mb-2">
                  {service.name}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-16 p-8 md:p-12 rounded-3xl gradient-hero text-center">
          <h3 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Não encontrou o que procura?
          </h3>
          <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
            O atendimento pelo WhatsApp facilita o orçamento e a avaliação do aparelho.
          </p>
          <a 
            href={WHATSAPP_URL}
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold rounded-lg transition-colors"
          >
            Consultar pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;

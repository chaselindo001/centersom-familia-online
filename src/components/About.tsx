import { Heart, Users, Award, Handshake } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Paixão pelo Ofício",
      description: "Cada reparo é realizado com dedicação e cuidado, com foco em qualidade e segurança.",
    },
    {
      icon: Users,
      title: "Estrutura Familiar",
      description: "Empresa familiar sólida, com continuidade entre gerações e apoio de profissionais contratados.",
    },
    {
      icon: Award,
      title: "35+ Anos de Experiência",
      description: "Desde 1989 atendendo Matão e região com qualidade e compromisso.",
    },
    {
      icon: Handshake,
      title: "Confiança",
      description: "Atendimento honesto e transparente. A reputação é construída por indicações e retorno de clientes.",
    },
  ];

  return (
    <section id="sobre" className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-secondary uppercase tracking-wider mb-3">
            Sobre a empresa
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Uma história de família e dedicação
          </h2>
          <p className="text-lg text-muted-foreground">
            Fundada em 18 de abril de 1989, a Center Som Jr nasceu do sonho de uma família 
            em oferecer serviços de qualidade para a comunidade de Matão-SP.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image/Visual Element */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto rounded-full bg-primary flex items-center justify-center mb-6 shadow-elevated">
                  <span className="font-display text-5xl font-bold text-primary-foreground">35+</span>
                </div>
                <p className="font-display text-2xl font-semibold text-foreground">Anos de História</p>
                <p className="text-muted-foreground mt-2">Servindo Matão e região</p>
              </div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl bg-secondary/20 -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 rounded-xl bg-primary/10 -z-10" />
          </div>

          {/* Story Text */}
          <div className="space-y-6">
            <p className="text-lg text-foreground leading-relaxed">
              A <strong className="text-primary">Center Som Jr</strong> é uma empresa familiar com tradição e foco em assistência técnica.
              Fundada com valores tradicionais, mantém um padrão de atendimento técnico e honesto construído ao longo de décadas.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              A propriedade permanece com a fundadora original (matriarca), e a continuidade do trabalho é garantida por uma equipe
              que une gerações: dois irmãos experientes na área técnica e dois netos que trazem dinamismo à operação.
              Complementando esse núcleo, a empresa conta com colaboradores contratados e qualificados.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              O compromisso é oferecer serviço de qualidade, com preços justos e diagnóstico claro antes de qualquer reparo.
              Cada aparelho é tratado com atenção e responsabilidade, do recebimento à entrega.
            </p>
            <div className="pt-4">
              <div className="flex items-center gap-4 text-sm">
                <span className="px-4 py-2 bg-secondary/10 text-secondary-foreground rounded-full font-medium">
                  📍 Rua Sinharinha Frota, 2115
                </span>
                <span className="px-4 py-2 bg-primary/10 text-foreground rounded-full font-medium">
                  📅 Desde 1989
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div 
              key={value.title}
              className="group p-6 rounded-2xl bg-card border border-border hover:shadow-card transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                <value.icon className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {value.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

import { ShieldCheck, Cpu, BadgeCheck } from "lucide-react";

const Differentials = () => {
  const differentials = [
    {
      icon: ShieldCheck,
      title: "Tradição e Honestidade",
      description:
        "Com mais de 35 anos de história em Matão, a Center Som Júnior preza pela transparência total, com diagnósticos claros e orçamentos justos antes de qualquer reparo.",
      highlight: true,
    },
    {
      icon: Cpu,
      title: "Especialização Técnica",
      description:
        "A equipe conta com técnicos experientes e em constante atualização, unindo décadas de prática às novas tecnologias de smartphones e eletrônicos.",
      highlight: false,
    },
    {
      icon: BadgeCheck,
      title: "Garantia e Agilidade",
      description:
        "A Center Som Júnior entende a importância do aparelho no dia a dia. Por isso, trabalha com peças de alta qualidade e oferece garantia real em todos os serviços realizados.",
      highlight: false,
    },
  ];

  return (
    <section id="diferenciais" className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-secondary uppercase tracking-wider mb-3">
            Por que escolher
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Diferenciais
          </h2>
          <p className="text-lg text-muted-foreground">
            O que faz a Center Som Júnior ser a escolha de tantas famílias em Matão há mais de 35 anos.
          </p>
        </div>

        {/* Differentials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentials.map((item, index) => (
            <div
              key={item.title}
              className={`group relative p-8 rounded-2xl transition-all duration-300 ${
                item.highlight 
                  ? "bg-primary text-primary-foreground shadow-elevated" 
                  : "bg-card border border-border shadow-soft hover:shadow-card"
              }`}
            >
              {/* Icon */}
              <div 
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors ${
                  item.highlight 
                    ? "bg-primary-foreground/20" 
                    : "bg-secondary/10 group-hover:bg-secondary/20"
                }`}
              >
                <item.icon 
                  className={`w-7 h-7 ${
                    item.highlight ? "text-secondary" : "text-secondary"
                  }`} 
                />
              </div>

              {/* Content */}
              <h3 
                className={`font-display text-xl font-bold mb-3 ${
                  item.highlight ? "text-primary-foreground" : "text-foreground"
                }`}
              >
                {item.title}
              </h3>
              <p 
                className={`leading-relaxed ${
                  item.highlight ? "text-primary-foreground/80" : "text-muted-foreground"
                }`}
              >
                {item.description}
              </p>

              {/* Decorative element for highlighted cards */}
              {item.highlight && (
                <div className="absolute top-4 right-4">
                  <div className="w-3 h-3 rounded-full bg-secondary animate-pulse" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="mt-16 text-center">
          <div className="inline-block p-8 md:p-12 rounded-3xl bg-gradient-to-br from-primary/5 to-secondary/10 border border-border max-w-3xl">
            <blockquote className="font-display text-xl md:text-2xl text-foreground italic mb-4">
              "Cada atendimento é conduzido com respeito e transparência — um padrão mantido há mais de 35 anos."
            </blockquote>
            <p className="text-muted-foreground">— Center Som Júnior</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentials;

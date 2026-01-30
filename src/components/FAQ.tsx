import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const items = [
    {
      q: "Minha TV tem som, mas a imagem sumiu. Tem conserto?",
      a: "Sim. Este é um problema comum em muitos modelos. É realizada a substituição técnica de componentes e barramentos de LED, com peças de alta qualidade, para devolver a imagem original ao televisor.",
    },
    {
      q: "O controle do meu carro parou de funcionar ou o alarme está disparando. Vocês resolvem?",
      a: "Com certeza. A Center Som Júnior é especializada em reparos de controles de carro, alarmes e sistemas de travas elétricas. O serviço inclui desde a troca de carcaças e baterias até a configuração do sistema.",
    },
    {
      q: "Como funciona o orçamento para eletrônicos e som?",
      a: "O aparelho ou controle pode ser levado até a loja na Rua Sinharinha Frota. É realizada uma análise técnica detalhada e o valor é informado para aprovação antes de qualquer execução.",
    },
  ];

  return (
    <section id="faq" className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-sm font-semibold text-secondary uppercase tracking-wider mb-3">
            Perguntas frequentes
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5">
            Dúvidas comuns
          </h2>
          <p className="text-lg text-muted-foreground">
            Respostas diretas para as perguntas mais frequentes sobre prazos, orçamento e área de atendimento.
          </p>
        </div>

        <div className="mx-auto max-w-3xl rounded-3xl bg-card border border-border shadow-card p-6 md:p-8">
          <Accordion type="single" collapsible className="w-full">
            {items.map((item) => (
              <AccordionItem key={item.q} value={item.q} className="border-border">
                <AccordionTrigger className="text-left text-foreground">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

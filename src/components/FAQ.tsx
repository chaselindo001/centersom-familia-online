import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const items = [
    {
      q: "Quanto tempo demora o conserto de um celular?",
      a: "A maioria dos reparos de tela e bateria é realizada no mesmo dia. Para reparos complexos em placas, é informado um prazo detalhado após a análise técnica.",
    },
    {
      q: "Vocês dão orçamento sem compromisso?",
      a: "Sim. É realizada uma análise prévia do aparelho para identificação do defeito e o orçamento é apresentado para aprovação antes do início do serviço.",
    },
    {
      q: "Atendem apenas Matão?",
      a: "O atendimento abrange Matão e região, com suporte para eletrônicos residenciais e sistemas automotivos.",
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

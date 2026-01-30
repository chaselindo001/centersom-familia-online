import { Wrench, Image as ImageIcon } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type PlaceholderCase = {
  title: string;
  subtitle: string;
};

const cases: PlaceholderCase[] = [
  {
    title: "Televisor",
    subtitle: "Exemplo de reparo (substitua pelas suas fotos)",
  },
  {
    title: "Som automotivo",
    subtitle: "Exemplo de reparo (substitua pelas suas fotos)",
  },
  {
    title: "Aparelho de áudio/vídeo",
    subtitle: "Exemplo de reparo (substitua pelas suas fotos)",
  },
];

function PlaceholderFrame({ label }: { label: "Antes" | "Depois" }) {
  return (
    <div className="relative aspect-[4/3] w-full rounded-2xl border border-dashed border-border bg-muted/40 overflow-hidden">
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
        <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
          <ImageIcon className="w-6 h-6 text-secondary" />
        </div>
        <div>
          <p className="font-display font-semibold text-foreground">{label}</p>
          <p className="text-sm text-muted-foreground">Envie uma foto para substituir</p>
        </div>
      </div>
      <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-background/80 backdrop-blur px-3 py-1 border border-border">
        <Wrench className="w-4 h-4 text-primary" />
        <span className="text-xs font-medium text-foreground">{label}</span>
      </div>
    </div>
  );
}

const BeforeAfter = () => {
  return (
    <section id="antes-depois" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block text-sm font-semibold text-secondary uppercase tracking-wider mb-3">
            Qualidade na prática
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Antes e Depois
          </h2>
          <p className="text-lg text-muted-foreground">
            Uma prévia visual do nosso cuidado com os detalhes. Assim que você nos enviar fotos pareadas,
            trocamos esses exemplos pelos seus casos reais.
          </p>
        </div>

        <div className="mx-auto max-w-5xl">
          <Carousel opts={{ align: "start" }}>
            <CarouselContent>
              {cases.map((item) => (
                <CarouselItem key={item.title} className="md:basis-1/1 lg:basis-1/1">
                  <div className="rounded-3xl border border-border bg-card p-6 md:p-8 shadow-card">
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-6">
                      <div>
                        <h3 className="font-display text-2xl font-bold text-foreground">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Dica: use fotos na mesma posição para um antes/depois mais forte.
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <PlaceholderFrame label="Antes" />
                      <PlaceholderFrame label="Depois" />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:inline-flex" />
            <CarouselNext className="hidden md:inline-flex" />
          </Carousel>

          <div className="mt-6 flex items-center justify-center gap-3 md:hidden">
            <p className="text-sm text-muted-foreground">Deslize para ver mais</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;

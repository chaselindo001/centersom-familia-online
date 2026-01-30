import { Wrench } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import tvAntes from "@/assets/tv-antes-real.png";
import tvDepois from "@/assets/tv-depois-real.png";

import { BeforeAfterCompare } from "@/components/before-after/BeforeAfterCompare";
import { PlaceholderFrame } from "@/components/before-after/PlaceholderFrame";

type PlaceholderCase = {
  title: string;
  subtitle: string;
  beforeImage?: string;
  afterImage?: string;
  beforeAlt?: string;
  afterAlt?: string;
  beforeLabel?: string;
  afterLabel?: string;
};

const cases: PlaceholderCase[] = [
  {
    title: "Televisor",
    subtitle: "Comparação real: arraste para ver o antes e depois.",
    beforeImage: tvAntes,
    afterImage: tvDepois,
    beforeAlt: "Televisor com defeito (antes do conserto)",
    afterAlt: "Televisor consertado e funcionando (depois do conserto)",
    beforeLabel: "ANTES – TV com defeito",
    afterLabel: "DEPOIS – TV consertada",
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
            Uma prévia visual do cuidado com os detalhes. Assim que houver fotos pareadas de casos reais,
            estes exemplos serão substituídos.
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
                      {item.beforeImage && item.afterImage ? (
                        <div className="md:col-span-2">
                          <BeforeAfterCompare
                            beforeSrc={item.beforeImage}
                            afterSrc={item.afterImage}
                            beforeAlt={item.beforeAlt ?? `${item.title} antes do reparo`}
                            afterAlt={item.afterAlt ?? `${item.title} após o reparo`}
                            beforeLabel={item.beforeLabel}
                            afterLabel={item.afterLabel}
                          />
                        </div>
                      ) : (
                        <>
                          <PlaceholderFrame label="Antes" />
                          <PlaceholderFrame label="Depois" />
                        </>
                      )}
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

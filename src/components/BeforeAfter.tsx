import * as React from "react";
import { Wrench, Image as ImageIcon, ChevronsLeftRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import tvAntes from "@/assets/tv-antes.jpg";
import tvDepois from "@/assets/tv-depois.jpg";

type PlaceholderCase = {
  title: string;
  subtitle: string;
  beforeImage?: string;
  afterImage?: string;
  beforeAlt?: string;
  afterAlt?: string;
};

const cases: PlaceholderCase[] = [
  {
    title: "Televisor",
    subtitle: "Comparação real: arraste para ver o antes e depois.",
    beforeImage: tvAntes,
    afterImage: tvDepois,
    beforeAlt: "Televisor antes do reparo (sem imagem)",
    afterAlt: "Televisor após o reparo (imagem restaurada)",
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
          <p className="text-sm text-muted-foreground">Adicione uma foto para substituir</p>
        </div>
      </div>
      <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-background/80 backdrop-blur px-3 py-1 border border-border">
        <Wrench className="w-4 h-4 text-primary" />
        <span className="text-xs font-medium text-foreground">{label}</span>
      </div>
    </div>
  );
}

function BeforeAfterCompare({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
}: {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
}) {
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const [pos, setPos] = React.useState(50);
  const draggingRef = React.useRef(false);

  const setFromClientX = React.useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, next)));
  }, []);

  const onPointerDown = React.useCallback(
    (e: React.PointerEvent) => {
      draggingRef.current = true;
      (e.currentTarget as HTMLElement).setPointerCapture?.(e.pointerId);
      setFromClientX(e.clientX);
    },
    [setFromClientX],
  );

  const onPointerMove = React.useCallback(
    (e: React.PointerEvent) => {
      if (!draggingRef.current) return;
      setFromClientX(e.clientX);
    },
    [setFromClientX],
  );

  const onPointerUp = React.useCallback(() => {
    draggingRef.current = false;
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border bg-muted shadow-card"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      role="group"
      aria-label="Comparação antes e depois"
    >
      {/* After */}
      <img
        src={afterSrc}
        alt={afterAlt}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover select-none"
        draggable={false}
      />

      {/* Before (clipped) */}
      <img
        src={beforeSrc}
        alt={beforeAlt}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover select-none"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        draggable={false}
      />

      {/* Labels */}
      <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-background/80 backdrop-blur px-3 py-1 border border-border">
        <Wrench className="h-4 w-4 text-primary" />
        <span className="text-xs font-medium text-foreground">Antes</span>
      </div>
      <div className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-full bg-background/80 backdrop-blur px-3 py-1 border border-border">
        <Wrench className="h-4 w-4 text-primary" />
        <span className="text-xs font-medium text-foreground">Depois</span>
      </div>

      {/* Handle */}
      <div className="absolute inset-y-0" style={{ left: `${pos}%` }}>
        <div className="absolute inset-y-0 -translate-x-1/2 w-[2px] bg-primary/70" />
        <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="h-12 w-12 rounded-full border border-border bg-background/85 backdrop-blur shadow-elevated flex items-center justify-center">
            <ChevronsLeftRight className="h-5 w-5 text-foreground" />
          </div>
        </div>
      </div>

      {/* Accessible range control */}
      <input
        aria-label="Ajustar comparação antes e depois"
        type="range"
        min={0}
        max={100}
        value={Math.round(pos)}
        onChange={(e) => setPos(Number(e.target.value))}
        className="absolute inset-0 h-full w-full opacity-0 cursor-ew-resize"
      />

      {/* Hint */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
        <div className="inline-flex items-center gap-2 rounded-full bg-background/80 backdrop-blur px-3 py-1 border border-border">
          <ChevronsLeftRight className="h-4 w-4 text-secondary" />
          <span className="text-xs font-medium text-foreground">Arraste para comparar</span>
        </div>
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

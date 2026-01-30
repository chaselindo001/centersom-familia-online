import * as React from "react";
import { ChevronsLeftRight, Wrench } from "lucide-react";

type BeforeAfterCompareProps = {
  beforeSrc: string;
  afterSrc: string;
  beforeLabel?: string;
  afterLabel?: string;
  beforeAlt: string;
  afterAlt: string;
};

/**
 * UX: começa 100% em "ANTES" e revela "DEPOIS" ao arrastar para a direita.
 */
export function BeforeAfterCompare({
  beforeSrc,
  afterSrc,
  beforeLabel = "ANTES – TV com defeito",
  afterLabel = "DEPOIS – TV consertada",
  beforeAlt,
  afterAlt,
}: BeforeAfterCompareProps) {
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const [reveal, setReveal] = React.useState(0); // 0..100 = quanto do "DEPOIS" está visível
  const draggingRef = React.useRef(false);

  const setFromClientX = React.useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setReveal(Math.min(100, Math.max(0, next)));
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
      {/* Before (base) */}
      <img
        src={beforeSrc}
        alt={beforeAlt}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover select-none"
        draggable={false}
      />

      {/* After (revealed) */}
      <img
        src={afterSrc}
        alt={afterAlt}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover select-none"
        style={{ clipPath: `inset(0 ${100 - reveal}% 0 0)` }}
        draggable={false}
      />

      {/* Labels */}
      <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-background/80 backdrop-blur px-3 py-1 border border-border">
        <Wrench className="h-4 w-4 text-primary" />
        <span className="text-xs font-medium text-foreground">{beforeLabel}</span>
      </div>
      <div className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-full bg-background/80 backdrop-blur px-3 py-1 border border-border">
        <Wrench className="h-4 w-4 text-primary" />
        <span className="text-xs font-medium text-foreground">{afterLabel}</span>
      </div>

      {/* Handle */}
      <div className="absolute inset-y-0" style={{ left: `${reveal}%` }} aria-hidden>
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
        value={Math.round(reveal)}
        onChange={(e) => setReveal(Number(e.target.value))}
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

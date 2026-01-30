import { Image as ImageIcon, Wrench } from "lucide-react";

export function PlaceholderFrame({ label }: { label: "Antes" | "Depois" }) {
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

import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { buildWhatsAppUrl } from "@/lib/companyInfo";

const DEFAULT_MESSAGE =
  "Olá! Gostaria de um orçamento/avaliação para conserto (TV, som automotivo ou eletrônicos). Pode me ajudar?";

const WhatsAppFloatingButton = () => {
  return (
    <a
      href={buildWhatsAppUrl(DEFAULT_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50"
      aria-label="Chamar no WhatsApp"
    >
      <Button
        size="lg"
        className="shadow-elevated rounded-full px-5 gap-2 bg-secondary hover:bg-secondary/90 text-secondary-foreground"
      >
        <MessageCircle className="w-5 h-5" />
        <span className="hidden sm:inline">WhatsApp</span>
      </Button>
    </a>
  );
};

export default WhatsAppFloatingButton;

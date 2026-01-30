import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/lib/companyInfo";

const WhatsAppFloatingButton = () => {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 scale-125 origin-bottom-right"
      aria-label="Chamar no WhatsApp"
    >
      <Button
        size="lg"
        className="shadow-elevated rounded-full px-6 gap-3 bg-secondary hover:bg-secondary/90 text-secondary-foreground"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="hidden sm:inline">WhatsApp</span>
      </Button>
    </a>
  );
};

export default WhatsAppFloatingButton;

import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5551981821137"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-40 bg-[#25D366] text-white w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-[#20BA5A] transition-colors"
      aria-label="Conversar no WhatsApp"
    >
      <MessageCircle size={24} className="md:w-7 md:h-7" />
    </a>
  );
};

export default WhatsAppButton;

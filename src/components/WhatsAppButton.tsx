import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phone = "917013547471";
  const message = encodeURIComponent("Hi! I'm interested in learning more about Impexus programs.");

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-green-500 text-white shadow-lg flex items-center justify-center hover:scale-110 hover:bg-green-600 transition-all duration-300"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={26} />
    </a>
  );
};

export default WhatsAppButton;

import { WhatsAppIcon } from "./Header";

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/905414338872"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp ile iletişime geç"
      className="fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full bg-[#25D366] text-white shadow-lg shadow-emerald-500/30 flex items-center justify-center hover:scale-110 transition-transform float-slow"
    >
      <WhatsAppIcon className="h-7 w-7" />
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
    </a>
  );
}

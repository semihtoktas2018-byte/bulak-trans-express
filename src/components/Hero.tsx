import truck from "@/assets/hero-truck.jpg";
import { ArrowRight } from "lucide-react";
import { WhatsAppIcon } from "./Header";
export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <img
        src={truck}
        alt="Bulak Trans TIR aracı Avrupa otoyolunda"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/75 to-background/40 dark:from-background/95 dark:via-background/80 dark:to-background/30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_color-mix(in_oklab,var(--brand-blue)_25%,transparent),_transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 w-full">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-xs font-semibold uppercase tracking-wider text-primary mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Bursa merkezli · 12 ülke
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.05]">
            Sınırları Aşan{" "}
            <span className="gradient-text">Lojistik Gücü</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-xl">
            12 ülkeye güvenli ve hızlı teslimat. 15+ yıllık tecrübemizle, yükünüzü zamanında ve eksiksiz teslim ediyoruz.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            
              href="#quote"
              className="group inline-flex items-center gap-2 h-14 px-7 rounded-full gradient-brand text-white font-semibold shadow-[var(--shadow-glow)] hover:shadow-2xl transition-all hover:-translate-y-0.5"
            >
              Teklif Al
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
              href="https://wa.me/905414338872"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 h-14 px-7 rounded-full bg-[#25D366] text-white font-semibold shadow-lg hover:bg-[#1ebe5b] transition-colors"
            >
              <WhatsAppIcon className="h-5 w-5" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs uppercase tracking-widest text-muted-foreground hidden md:block">
        Aşağı kaydır ↓
      </div>
    </section>
  );
}

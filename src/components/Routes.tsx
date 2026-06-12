import { useReveal } from "@/hooks/use-reveal";
import { Clock } from "lucide-react";
const ROUTES = [
  { flag: "🇬🇷", name: "Yunanistan", days: "3-4 gün" },
  { flag: "🇧🇬", name: "Bulgaristan", days: "2-3 gün" },
  { flag: "🇷🇴", name: "Romanya", days: "3-4 gün" },
  { flag: "🇦🇹", name: "Avusturya", days: "4-5 gün" },
  { flag: "🇩🇪", name: "Almanya", days: "4-5 gün" },
  { flag: "🇷🇸", name: "Sırbistan", days: "2-3 gün" },
  { flag: "🇭🇷", name: "Hırvatistan", days: "3-4 gün" },
  { flag: "🇦🇿", name: "Azerbaycan", days: "4-5 gün" },
  { flag: "🇬🇪", name: "Gürcistan", days: "3-4 gün" },
  { flag: "🇮🇶", name: "Irak", days: "5-6 gün" },
  { flag: "🇸🇾", name: "Suriye", days: "5-6 gün" },
  { flag: "🇮🇷", name: "İran", days: "6-7 gün" },
];
export function Routes() {
  const ref = useReveal();
  return (
    <section id="routes" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-secondary/40">
      <div ref={ref} className="reveal max-w-7xl mx-auto">
        <div className="max-w-2xl">
          <div className="text-sm uppercase tracking-widest text-primary font-semibold">Güzergahlar</div>
          <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight">
            12 ülkeye <span className="gradient-text">düzenli sefer</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Türkiye'den Avrupa, Kafkasya ve Orta Doğu'ya kesintisiz taşımacılık.
          </p>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {ROUTES.map((r) => (
            <div
              key={r.name}
              className="group relative overflow-hidden glass-card rounded-2xl p-6 flex items-center gap-5 hover:-translate-y-1 hover:shadow-[var(--shadow-glow)] hover:border-primary/50 transition-all"
            >
              <div className="text-5xl drop-shadow group-hover:scale-110 transition-transform">{r.flag}</div>
              <div className="flex-1">
                <div className="text-lg font-bold">{r.name}</div>
                <div className="mt-1 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                  <Clock className="h-3.5 w-3.5" />
                  {r.days}
                </div>
              </div>
              <div className="absolute -right-8 -bottom-8 h-24 w-24 rounded-full bg-primary/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

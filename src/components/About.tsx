import { useReveal } from "@/hooks/use-reveal";
import { CheckCircle2, Truck, Users, Award, Quote } from "lucide-react";
import kenan from "@/assets/kenan-bulak.jpg.asset.json";

const REASONS = [
  { icon: Truck, title: "Modern Filo", desc: "Yeni nesil Euro 6 TIR araçlarımızla yakıt verimli ve çevre dostu taşımacılık." },
  { icon: Users, title: "Deneyimli Ekip", desc: "Alanında uzman, çok dilli operasyon ve sürüş kadrosu." },
  { icon: Award, title: "Güvenilir Marka", desc: "15+ yıllık deneyimle Bursa sanayisinin tercih ettiği lojistik partneri." },
];

export function About() {
  const ref = useReveal();
  return (
    <section id="about" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div ref={ref} className="reveal max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="text-sm uppercase tracking-widest text-primary font-semibold">Hakkımızda</div>
          <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight">
            Bursa'dan dünyaya, <span className="gradient-text">güvenle.</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
            Bulak Trans, 15 yılı aşkın süredir Bursa merkezli olarak uluslararası karayolu taşımacılığı alanında hizmet vermektedir.
            Modern filomuz, deneyimli kadromuz ve müşteri odaklı yaklaşımımızla; Türk sanayicisinin yükünü 9 ülkeye güvenle taşıyoruz.
          </p>

          <ul className="mt-8 space-y-3">
            {[
              "7/24 araç takip ve müşteri desteği",
              "Tüm yüklerde CMR sigortası",
              "Hızlı gümrük çözümleri",
              "Şeffaf ve rekabetçi fiyatlandırma",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <span className="text-foreground/90">{t}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {REASONS.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className={`glass-card rounded-2xl p-7 hover:-translate-y-1 transition-transform ${
                i === 0 ? "sm:translate-y-8" : ""
              }`}
            >
              <div className="h-11 w-11 rounded-xl gradient-brand text-white flex items-center justify-center">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-bold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
          <div className="sm:col-span-2 rounded-2xl gradient-brand p-7 text-white shadow-[var(--shadow-glow)]">
            <div className="text-4xl font-extrabold">15+</div>
            <div className="mt-1 text-white/85">yıllık sektör deneyimi</div>
          </div>
        </div>
      </div>
    </section>
  );
}

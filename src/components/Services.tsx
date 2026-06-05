import { Globe2, Truck, FileCheck2, Warehouse, Boxes, ShieldCheck } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const SERVICES = [
  { icon: Globe2, title: "Uluslararası Nakliye", desc: "9 ülkeye sınır geçişli, kapıdan kapıya komple ve parsiyel yük taşımacılığı." },
  { icon: Truck, title: "Karayolu Taşımacılığı", desc: "Modern TIR filomuzla yurt içi ve yurt dışı güvenli karayolu taşımacılığı." },
  { icon: FileCheck2, title: "Gümrükleme", desc: "Tüm ihracat ve ithalat işlemleriniz için uzman gümrük müşavirliği hizmeti." },
  { icon: Warehouse, title: "Depolama", desc: "Bursa lojistik üssümüzde güvenli, sigortalı kısa ve uzun süreli depolama." },
  { icon: Boxes, title: "Proje Taşımacılığı", desc: "Ağır tonajlı, gabari dışı ve özel donanım gerektiren proje yükleri." },
  { icon: ShieldCheck, title: "Sigortalı Taşıma", desc: "Tüm yükleriniz CMR ve nakliyat sigortası kapsamında güvence altında." },
];

export function Services() {
  const ref = useReveal();
  return (
    <section id="services" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div ref={ref} className="reveal max-w-7xl mx-auto">
        <div className="max-w-2xl">
          <div className="text-sm uppercase tracking-widest text-primary font-semibold">Hizmetlerimiz</div>
          <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight">
            Uçtan uca <span className="gradient-text">lojistik çözümler</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Yükünüzün her aşamasında yanınızdayız — planlamadan teslimata.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group glass-card rounded-2xl p-7 transition-all hover:-translate-y-2 hover:shadow-[var(--shadow-glow)] hover:border-primary/50"
            >
              <div className="h-12 w-12 rounded-xl gradient-brand text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-bold">{title}</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

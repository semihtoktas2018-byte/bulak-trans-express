import { useReveal } from "@/hooks/use-reveal";
import { Truck } from "lucide-react";
import f1 from "@/assets/fleet-1.jpg";
import f2 from "@/assets/fleet-2.jpg";
import f3 from "@/assets/fleet-3.jpg";
import f4 from "@/assets/fleet-4.jpg";
import f5 from "@/assets/fleet-5.jpg";
import f6 from "@/assets/fleet-6.jpg";
import f7 from "@/assets/fleet-7.jpg";
import f8 from "@/assets/fleet-8.jpg";
import f9 from "@/assets/fleet-9.jpg";
import f10 from "@/assets/fleet-10.jpg";

const FLEET = [
  { img: f1, name: "Mercedes-Benz Actros 1848", spec: "Tenteli Dorse · Euro 6" },
  { img: f2, name: "Mercedes-Benz Actros 1848", spec: "Tenteli Dorse · Otoyol Tipi" },
  { img: f3, name: "Mercedes-Benz Actros 1848", spec: "Tenteli Dorse · Komple Yük" },
  { img: f4, name: "Mercedes-Benz Actros 1848", spec: "Tenteli Dorse · 13.6m" },
  { img: f5, name: "Mercedes-Benz Actros 1848", spec: "Tenteli Dorse · Dağ Tipi" },
  { img: f6, name: "Mercedes-Benz Actros 1848", spec: "Tenteli Dorse · Liman Hattı" },
  { img: f7, name: "Mercedes-Benz Actros 1848", spec: "Tenteli Dorse · 7/24 Sefer" },
  { img: f8, name: "Mercedes-Benz Actros 1848", spec: "Tenteli Dorse · Bölgesel" },
  { img: f9, name: "Mercedes-Benz Actros 1848", spec: "Tenteli Dorse · Depo Çıkışı" },
  { img: f10, name: "Mercedes-Benz Actros 1848", spec: "Tenteli Dorse · Alpler Hattı" },
];

export function Fleet() {
  const ref = useReveal();
  return (
    <section id="fleet" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div ref={ref} className="reveal max-w-7xl mx-auto">
        <div className="max-w-2xl">
          <div className="text-sm uppercase tracking-widest text-primary font-semibold">Filomuz</div>
          <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight">
            Modern <span className="gradient-text">Mercedes-Benz Actros</span> filosu
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Euro 6 motorlu Actros 1848 çekicilerimiz ve tenteli dorselerimizle yükünüzü güvenle taşırız.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FLEET.map((v, i) => (
            <article
              key={i}
              className="group glass-card rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-[var(--shadow-glow)] transition-all"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
                <img
                  src={v.img}
                  alt={`${v.name} - ${v.spec}`}
                  width={1280}
                  height={832}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-background/85 backdrop-blur text-xs font-semibold">
                  <Truck className="h-3.5 w-3.5 text-primary" />
                  Actros 1848
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-base">{v.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{v.spec}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

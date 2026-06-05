import { useReveal } from "@/hooks/use-reveal";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    q: "Hangi ülkelere taşımacılık yapıyorsunuz?",
    a: "Yunanistan, Bulgaristan, Romanya, Avusturya, Azerbaycan, Gürcistan, Irak, Suriye ve İran olmak üzere 9 ülkeye düzenli sefer düzenliyoruz.",
  },
  {
    q: "Teklif almak için neler gerekli?",
    a: "Yük cinsi, ağırlık/hacim bilgisi, çıkış ve varış noktaları ile yaklaşık yükleme tarihini iletmeniz yeterli. En kısa sürede size özel teklifimizi sunuyoruz.",
  },
  {
    q: "Yükler sigortalı mı taşınıyor?",
    a: "Tüm yüklerimiz CMR sigortası kapsamında taşınmaktadır. Talep halinde ek nakliyat sigortası da düzenlenebilir.",
  },
  {
    q: "Gümrük işlemlerini siz mi takip ediyorsunuz?",
    a: "Evet. Uzman gümrük müşavirlerimiz ile ihracat ve ithalat işlemlerinizin tüm aşamalarını eksiksiz olarak yürütüyoruz.",
  },
];

export function FAQ() {
  const ref = useReveal();
  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div ref={ref} className="reveal max-w-3xl mx-auto">
        <div className="text-center">
          <div className="text-sm uppercase tracking-widest text-primary font-semibold">SSS</div>
          <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight">
            Sıkça sorulan <span className="gradient-text">sorular</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="mt-10 space-y-3">
          {FAQS.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="glass-card rounded-2xl border-0 px-6 data-[state=open]:border-primary/40"
            >
              <AccordionTrigger className="text-left text-base font-semibold hover:no-underline py-5">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

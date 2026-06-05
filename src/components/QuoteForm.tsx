import { useReveal } from "@/hooks/use-reveal";
import { useState } from "react";
import { Send } from "lucide-react";
import { WhatsAppIcon } from "./Header";

const COUNTRIES = ["Türkiye", "Yunanistan", "Bulgaristan", "Romanya", "Avusturya", "Azerbaycan", "Gürcistan", "Irak", "Suriye", "İran"];

export function QuoteForm() {
  const ref = useReveal();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "", phone: "", email: "", from: "Türkiye", to: "Yunanistan", details: "",
  });

  const set = <K extends keyof typeof form>(k: K, v: string) =>
    setForm((f) => ({ ...f, [k]: v }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const waMessage = encodeURIComponent(
    `Merhaba, teklif almak istiyorum.\nAd: ${form.name}\nTelefon: ${form.phone}\nGüzergah: ${form.from} → ${form.to}\nDetay: ${form.details}`,
  );

  return (
    <section id="quote" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-secondary/40">
      <div ref={ref} className="reveal max-w-4xl mx-auto">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-sm uppercase tracking-widest text-primary font-semibold">Teklif Al</div>
          <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight">
            Ücretsiz <span className="gradient-text">fiyat teklifi</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Formu doldurun, en kısa sürede size özel teklifimizle dönelim.
          </p>
        </div>

        <form onSubmit={onSubmit} className="mt-12 glass-card rounded-3xl p-6 sm:p-10 shadow-[var(--shadow-card)] grid sm:grid-cols-2 gap-5">
          <Field label="Ad Soyad" value={form.name} onChange={(v) => set("name", v)} required />
          <Field label="Telefon" type="tel" value={form.phone} onChange={(v) => set("phone", v)} required />
          <Field label="E-posta" type="email" value={form.email} onChange={(v) => set("email", v)} required className="sm:col-span-2" />

          <Select label="Nereden" value={form.from} onChange={(v) => set("from", v)} options={COUNTRIES} />
          <Select label="Nereye" value={form.to} onChange={(v) => set("to", v)} options={COUNTRIES} />

          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold mb-2">Yük Detayları</label>
            <textarea
              value={form.details}
              onChange={(e) => set("details", e.target.value)}
              rows={4}
              placeholder="Yük cinsi, ağırlık, hacim, özel talepler..."
              className="w-full rounded-xl bg-background border border-input px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-shadow resize-none"
            />
          </div>

          <div className="sm:col-span-2 flex flex-wrap gap-3 pt-2">
            <button
              type="submit"
              className="inline-flex items-center gap-2 h-12 px-6 rounded-full gradient-brand text-white font-semibold shadow-[var(--shadow-glow)] hover:-translate-y-0.5 transition-transform"
            >
              <Send className="h-4 w-4" />
              Teklif Gönder
            </button>
            <a
              href={`https://wa.me/905414338872?text=${waMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-[#25D366] text-white font-semibold hover:bg-[#1ebe5b] transition-colors"
            >
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp ile Gönder
            </a>
            {sent && (
              <span className="self-center text-sm text-primary font-semibold">
                ✓ Talebiniz alındı, en kısa sürede dönüş yapılacaktır.
              </span>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({
  label, value, onChange, type = "text", required, className = "",
}: {
  label: string; value: string; onChange: (v: string) => void;
  type?: string; required?: boolean; className?: string;
}) {
  return (
    <div className={className}>
      <label className="block text-sm font-semibold mb-2">{label}</label>
      <input
        type={type}
        value={value}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-12 rounded-xl bg-background border border-input px-4 text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
      />
    </div>
  );
}

function Select({
  label, value, onChange, options,
}: { label: string; value: string; onChange: (v: string) => void; options: string[] }) {
  return (
    <div>
      <label className="block text-sm font-semibold mb-2">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-12 rounded-xl bg-background border border-input px-4 text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
      >
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </div>
  );
}

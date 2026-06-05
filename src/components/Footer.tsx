import { MapPin, Phone, Mail } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-3 gap-12">
        <div>
          <Logo />
          <p className="mt-6 text-sm text-muted-foreground leading-relaxed max-w-sm">
            Bursa merkezli uluslararası lojistik ve taşımacılık firması.
            9 ülkeye güvenli ve hızlı teslimat.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider mb-5">İletişim</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="h-4 w-4 mt-1 text-primary shrink-0" />
              <span>Bursa, Türkiye</span>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="h-4 w-4 mt-1 text-primary shrink-0" />
              <a href="tel:+905386169569" className="hover:text-primary transition-colors">
                +90 538 616 95 69
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="h-4 w-4 mt-1 text-primary shrink-0" />
              <a href="mailto:info@bulaktrans.com" className="hover:text-primary transition-colors">
                info@bulaktrans.com
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider mb-5">Hızlı Linkler</h4>
          <ul className="space-y-3 text-sm">
            {[
              ["Ana Sayfa", "#home"],
              ["Hizmetler", "#services"],
              ["Güzergahlar", "#routes"],
              ["Hakkımızda", "#about"],
              ["Teklif Al", "#quote"],
            ].map(([label, href]) => (
              <li key={href}>
                <a href={href} className="text-muted-foreground hover:text-primary transition-colors">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Bulak Trans Lojistik & Taşımacılık. Tüm hakları saklıdır.</span>
          <span>Bursa · Türkiye</span>
        </div>
      </div>
    </footer>
  );
}

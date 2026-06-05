import { createFileRoute } from "@tanstack/react-router";
import { ThemeProvider } from "@/lib/theme";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Services } from "@/components/Services";
import { Routes as RoutesSection } from "@/components/Routes";
import { Fleet } from "@/components/Fleet";
import { About } from "@/components/About";
import { QuoteForm } from "@/components/QuoteForm";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bulak Trans · Bursa Uluslararası Lojistik & Taşımacılık" },
      { name: "description", content: "Bursa merkezli uluslararası karayolu taşımacılığı. 9 ülkeye güvenli, hızlı ve sigortalı teslimat. 15+ yıl deneyim." },
      { property: "og:title", content: "Bulak Trans · Uluslararası Lojistik" },
      { property: "og:description", content: "9 ülke, güvenli ve hızlı teslimat. Bursa'dan dünyaya." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main>
          <Hero />
          <Stats />
          <Services />
          <RoutesSection />
          <About />
          <QuoteForm />
          <FAQ />
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </ThemeProvider>
  );
}

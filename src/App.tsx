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

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main>
          <Hero />
          <Stats />
          <Services />
          <RoutesSection />
          <Fleet />
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

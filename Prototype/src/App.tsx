import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { SocialProofTicker } from "@/components/landing/SocialProofTicker";
import { CreditEconomy } from "@/components/landing/CreditEconomy";
import { DualMarket } from "@/components/landing/DualMarket";
import { Footer } from "@/components/landing/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <SocialProofTicker />
        <CreditEconomy />
        <DualMarket />
      </main>
      <Footer />
    </div>
  );
}

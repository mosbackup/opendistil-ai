import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import HowItWorks from "@/components/HowItWorks";
import EconomicsSection from "@/components/EconomicsSection";
import PricingSection from "@/components/PricingSection";
import MissionSection from "@/components/MissionSection";
import AboutSection from "@/components/AboutSection";
import BottomCTA from "@/components/BottomCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <HowItWorks />
      <EconomicsSection />
      <PricingSection />
      <MissionSection />
      <AboutSection />
      <BottomCTA />
      <Footer />
    </div>
  );
};

export default Index;

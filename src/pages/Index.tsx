import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import LegacySection from "@/components/LegacySection";
import ServicesSection from "@/components/ServicesSection";
import PropertiesSection from "@/components/PropertiesSection";
import ContactSection from "@/components/ContactSection";
import LocateUsSection from "@/components/LocateUsSection";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <LegacySection />
        <ServicesSection />
        <PropertiesSection />
        <LocateUsSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PainSection from "@/components/PainSection";
import SystemSection from "@/components/SystemSection";
import LifestyleSection from "@/components/LifestyleSection";
import AuditSection from "@/components/AuditSection";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>RoofScale | Stop Losing Jobs to Voicemail</title>
        <meta 
          name="description" 
          content="Turn missed calls and internet leads into booked roof inspections instantly. No extra staff required. The infrastructure for growing roofing companies." 
        />
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        <main>
          <HeroSection />
          <PainSection />
          <SystemSection />
          <LifestyleSection />
          <AuditSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;

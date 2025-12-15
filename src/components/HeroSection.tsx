import { Button } from "./ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import { Shield } from "lucide-react";

const HeroSection = () => {
  const scrollToForm = () => {
    document.getElementById("audit-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center pt-16 md:pt-20"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero-overlay absolute inset-0" />
      
      <div className="container relative z-10 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-primary-foreground mb-6 leading-tight animate-fade-up">
            STOP LOSING $20K JOBS<br />
            <span className="text-accent">TO VOICEMAIL.</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-primary-foreground/90 mb-10 max-w-3xl mx-auto animate-fade-up animation-delay-100 font-medium">
            We turn your missed calls and internet leads into booked inspections instantly—even while you're on a roof or sleeping. 
            <span className="font-bold"> No extra staff required.</span>
          </p>
          
          <div className="animate-fade-up animation-delay-200">
            <Button variant="hero" size="xl" onClick={scrollToForm}>
              Find My Missed Revenue
            </Button>
          </div>
          
          <div className="mt-8 flex items-center justify-center gap-2 text-primary-foreground/70 animate-fade-up animation-delay-300">
            <Shield className="w-5 h-5" />
            <span className="text-sm font-medium">
              Integrates seamlessly with your current phone line
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

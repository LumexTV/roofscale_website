import logoFull from "@/assets/logo-full.png";
import { Button } from "./ui/button";

const Header = () => {
  const scrollToForm = () => {
    document.getElementById("audit-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <img 
          src={logoFull} 
          alt="RoofScale" 
          className="h-8 md:h-10 w-auto"
        />
        <Button variant="cta" size="sm" onClick={scrollToForm}>
          Free Audit
        </Button>
      </div>
    </header>
  );
};

export default Header;

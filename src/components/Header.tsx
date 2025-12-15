import logo from "@/assets/logo.png";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <div className="flex items-center gap-3">
          <img 
            src={logo} 
            alt="RoofScale" 
            className="h-10 md:h-12 w-auto"
          />
          <span className="font-bold text-lg md:text-xl text-primary">
            ROOF<span className="text-accent">SCALE</span>
          </span>
        </div>
        <Button variant="cta" size="sm" asChild>
          <a href="https://cal.com/timeslot/intro-call" target="_blank" rel="noopener noreferrer">
            Book a Call
          </a>
        </Button>
      </div>
    </header>
  );
};

export default Header;

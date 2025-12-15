import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="py-12 bg-slate-dark">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <img src={logo} alt="RoofScale" className="h-10 w-auto" />
            <div>
              <p className="font-bold text-primary-foreground">
                ROOF<span className="text-accent">SCALE</span>
              </p>
              <p className="text-sm text-primary-foreground/70">
                The Growth Engine for Roofing Companies
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-6 text-sm text-primary-foreground/70">
            <a 
              href="https://cal.com/timeslot/intro-call" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              Book a Call
            </a>
            <a href="/privacy" className="hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-accent transition-colors">
              Terms
            </a>
            <span>© 2025 RoofScale</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

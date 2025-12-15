import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="py-12 bg-slate-dark">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <img src={logo} alt="RoofScale" className="h-10 w-auto" />
            <div>
              <p className="font-bold text-primary-foreground">RoofScale</p>
              <p className="text-sm text-primary-foreground/70">
                The Infrastructure for Growing Roofing Companies
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-6 text-sm text-primary-foreground/70">
            <a href="#" className="hover:text-accent transition-colors">
              Contact
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <span>© 2025 RoofScale</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

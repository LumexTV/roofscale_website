import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="py-12 md:py-16 bg-slate-dark">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 mb-10">
          {/* Brand Block */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4 hover:opacity-80 transition-opacity">
              <img src={logo} alt="RoofScale" className="h-10 w-auto" />
              <span className="font-bold text-lg text-primary-foreground">
                ROOF<span className="text-accent">SCALE</span>
              </span>
            </Link>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              The Growth Engine for Roofing Companies. We turn missed calls and leads into booked inspections.
            </p>
          </div>

          {/* Connect Block */}
          <div>
            <h4 className="font-bold text-primary-foreground mb-4">Connect</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>
                <a 
                  href="mailto:info@roof-scale.com" 
                  className="hover:text-accent transition-colors"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a 
                  href="https://cal.com/timeslot/intro-call" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  Strategy Call
                </a>
              </li>
            </ul>
          </div>

          {/* Services Block */}
          <div>
            <h4 className="font-bold text-primary-foreground mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>
                <a href="/#system" className="hover:text-accent transition-colors">
                  The Booking Engine
                </a>
              </li>
              <li>
                <a href="/#pain" className="hover:text-accent transition-colors">
                  The Problem
                </a>
              </li>
              <li>
                <a href="/#audit" className="hover:text-accent transition-colors">
                  Free Audit
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
          <span>© 2025 RoofScale. All Rights Reserved.</span>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-accent transition-colors">
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-accent transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

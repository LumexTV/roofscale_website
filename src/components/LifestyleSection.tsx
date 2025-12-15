import lifestyleBg from "@/assets/lifestyle-bg.jpg";
import { Check } from "lucide-react";

const benefits = [
  "No more playing phone tag.",
  "No more stress about missed opportunities.",
  "No expensive office manager salary.",
];

const LifestyleSection = () => {
  return (
    <section 
      className="relative py-20 md:py-28"
      style={{
        backgroundImage: `url(${lifestyleBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-primary/85" />
      
      <div className="container relative z-10">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-primary-foreground mb-6">
            GET OFF THE PHONE.<br />
            <span className="text-accent">GET ON THE ROOF.</span>
          </h2>
          
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-10 leading-relaxed">
            Your job is to build roofs and manage crews, not chase tire-kickers. 
            Let our system handle the follow-up, the scheduling, and the reviews.
          </p>
          
          <ul className="space-y-4">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-center gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                  <Check className="w-5 h-5 text-accent-foreground" />
                </div>
                <span className="text-lg md:text-xl font-semibold text-primary-foreground">
                  {benefit}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default LifestyleSection;

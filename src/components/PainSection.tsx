import { PhoneMissed, Clock, UserX } from "lucide-react";

const painPoints = [
  {
    icon: PhoneMissed,
    title: "The Missed Call",
    description: "You're on a job site. The phone rings. You don't answer. That homeowner just called your competitor. You lost $15k in 10 seconds.",
  },
  {
    icon: Clock,
    title: "The Slow Follow-Up",
    description: "Web leads sit in your inbox for hours. If you don't call in 5 minutes, the lead is dead.",
  },
  {
    icon: UserX,
    title: "The Admin Trap",
    description: "You try to fix it by hiring office staff, adding payroll and headaches you don't need.",
  },
];

const PainSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-primary mb-4">
            THE HIDDEN LEAK IN YOUR BUSINESS
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            You're great at roofing, but your phone process is costing you crews.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {painPoints.map((point, index) => (
            <div 
              key={point.title}
              className="text-center p-8 rounded-xl bg-secondary/50 border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-6 group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                <point.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-primary mb-4">
                {point.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainSection;

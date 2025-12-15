import { UserPlus, RefreshCw, PhoneMissed } from "lucide-react";

const painPoints = [
  {
    icon: UserPlus,
    title: "New Leads Dry Up",
    description: "You're relying on referrals and hoping the phone rings. Meanwhile, your competitors are actively generating fresh leads every day.",
  },
  {
    icon: RefreshCw,
    title: "Old Leads Go Cold",
    description: "You have hundreds of past leads sitting in a spreadsheet. They needed a roof but weren't ready. Now they're ready—and calling someone else.",
  },
  {
    icon: PhoneMissed,
    title: "Missed Calls = Lost Jobs",
    description: "You're on a job site. The phone rings. You can't answer. That homeowner just booked with your competitor. You lost $15k in 10 seconds.",
  },
];

const PainSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-primary mb-4">
            YOU'RE LEAVING MONEY ON THE TABLE
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Great roofers lose jobs not because of their work—but because leads slip through the cracks.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {painPoints.map((point) => (
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

import { UserPlus, RotateCcw, Bot, CalendarCheck, ArrowRight, Bell } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    step: "01",
    title: "New Lead Generation",
    description: "We actively find homeowners who need roofing services and deliver fresh, qualified leads to your pipeline.",
  },
  {
    icon: RotateCcw,
    step: "02",
    title: "Old Lead Reactivation",
    description: "We reach out to your past leads who weren't ready before. They're ready now—and we bring them back.",
  },
  {
    icon: Bot,
    step: "03",
    title: "Automatic Conversion",
    description: "Our system qualifies every lead and books inspections on your calendar—no chasing, no phone tag.",
  },
  {
    icon: CalendarCheck,
    step: "04",
    title: "Missed Call Recovery",
    description: "Every call you can't answer? We instantly engage and book them before they call your competitor.",
  },
];

const SystemSection = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-primary mb-4">
            THE ROOFSCALE GROWTH ENGINE
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            A complete lead generation and conversion system that fills your calendar 24/7.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              <div className="bg-background rounded-2xl p-6 md:p-8 h-full border-2 border-border hover:border-accent transition-all duration-300 hover:shadow-xl">
                <div className="flex items-center gap-3 mb-5">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary text-primary-foreground">
                    <step.icon className="w-6 h-6" />
                  </div>
                  <span className="text-3xl font-black text-accent/30">{step.step}</span>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-primary mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-6 h-6 text-accent" />
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-6 md:px-8 py-4 rounded-xl">
            <Bell className="w-6 h-6 text-accent" />
            <p className="text-base md:text-lg font-bold">
              You only get notified when a qualified inspection is booked.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemSection;

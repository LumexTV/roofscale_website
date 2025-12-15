import { Smartphone, MessageSquare, CalendarCheck, ArrowRight, Bell } from "lucide-react";

const steps = [
  {
    icon: Smartphone,
    step: "01",
    title: "The Capture",
    description: "System instantly detects a missed call or form fill.",
  },
  {
    icon: MessageSquare,
    step: "02",
    title: "The Engagement",
    description: 'System immediately texts the lead: "Sorry I missed you, are you looking for a roof estimate?"',
  },
  {
    icon: CalendarCheck,
    step: "03",
    title: "The Booking",
    description: "System qualifies the homeowner and puts an inspection directly on your calendar.",
  },
];

const SystemSection = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-primary mb-4">
            THE ROOFSCALE BOOKING ENGINE
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            A 24/7 system that works your leads so you don't have to.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 md:gap-4 relative">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              <div className="bg-background rounded-2xl p-8 h-full border-2 border-border hover:border-accent transition-all duration-300 hover:shadow-xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-primary text-primary-foreground">
                    <step.icon className="w-7 h-7" />
                  </div>
                  <span className="text-4xl font-black text-accent/30">{step.step}</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-primary mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden md:flex absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-8 h-8 text-accent" />
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-xl">
            <Bell className="w-6 h-6 text-accent" />
            <p className="text-lg font-bold">
              You only get a notification when a qualified inspection is booked.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemSection;

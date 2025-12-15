import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useToast } from "@/hooks/use-toast";

const WEBHOOK_URL = "https://n8n.marticsolutions.de/webhook/c65520a4-b606-4f6d-b7b3-070354d164c5";

const AuditSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    crews: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          crews: formData.crews,
          timestamp: new Date().toISOString(),
          source: "roofscale-website",
        }),
      });
      
      toast({
        title: "Request Received!",
        description: "We'll analyze your situation and get back to you within 24 hours.",
      });
      
      setFormData({ name: "", phone: "", crews: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again or book a call directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="audit-form" className="py-20 md:py-28 bg-primary">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-primary-foreground mb-4">
              ONE ROOF PAYS FOR IT <span className="text-accent">FOREVER.</span>
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Our system costs less than the profit from a single job. 
              We bring you multiple booked inspections every month—do the math.
            </p>
          </div>
          
          <div className="bg-background rounded-2xl p-8 md:p-12 shadow-2xl">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                GET YOUR FREE GROWTH AUDIT
              </h3>
              <p className="text-muted-foreground">
                We'll analyze your current lead flow and show you exactly how many jobs you're missing.
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Smith"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="h-14 text-lg"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(555) 123-4567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="h-14 text-lg"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="crews" className="block text-sm font-semibold text-foreground mb-2">
                  How many crews do you run?
                </label>
                <Input
                  id="crews"
                  type="text"
                  placeholder="e.g., 3-5 crews"
                  value={formData.crews}
                  onChange={(e) => setFormData({ ...formData, crews: e.target.value })}
                  required
                  className="h-14 text-lg"
                />
              </div>
              
              <Button 
                type="submit" 
                variant="cta" 
                size="xl" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Show Me My Growth Potential"}
              </Button>
              
              <p className="text-center text-sm text-muted-foreground">
                Or{" "}
                <a 
                  href="https://cal.com/timeslot/intro-call" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-accent font-semibold hover:underline"
                >
                  book a call directly →
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuditSection;

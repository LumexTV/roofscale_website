import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useToast } from "@/hooks/use-toast";

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
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Audit Request Received!",
      description: "We'll analyze your missed calls and get back to you within 24 hours.",
    });
    
    setFormData({ name: "", phone: "", crews: "" });
    setIsSubmitting(false);
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
              Our entire system costs less than the profit from a single small repair job. 
              If we save just one missed call a month, you're already profitable.
            </p>
          </div>
          
          <div className="bg-background rounded-2xl p-8 md:p-12 shadow-2xl">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                GET A FREE "MISSED CALL" AUDIT
              </h3>
              <p className="text-muted-foreground">
                We'll test your current phone lines and show you exactly how many leads you're losing right now.
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
                {isSubmitting ? "Submitting..." : "Show Me My Leaks"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuditSection;

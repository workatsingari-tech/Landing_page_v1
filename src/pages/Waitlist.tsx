import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Navigation from "@/components/Navigation";
import { CheckCircle2, TrendingUp, Brain, Shield, Award } from "lucide-react";
import { toast } from "sonner";
import heroBackground from "@/assets/hero-background.jpg";

const Waitlist = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Please enter a valid name and email address");
      return;
    }

    // Here you would typically send the data to your backend
    console.log("Form submitted:", { name, email });
    setIsSubmitted(true);
    toast.success("Successfully joined the waitlist!");
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-6 py-32 relative z-10">
          <div className="max-w-3xl mx-auto">
            {!isSubmitted ? (
              <div>
                <div className="mb-4">
                  <span className="inline-block px-4 py-1.5 text-sm font-medium text-primary bg-primary/5 rounded-full border border-primary/10">
                    Early Access Program
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground leading-tight">
                  Be Among the First to Access the <span className="text-primary">Singari Network.</span>
                </h1>
                <p className="text-base mb-12 text-muted-foreground leading-relaxed">
                  Gain early access to a new era of intelligent wealth management — where institutional systems meet adaptive AI.
                </p>

                {/* Form */}
                <div className="max-w-2xl mx-auto bg-white border border-border p-8">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                        <Input
                          type="text"
                          placeholder=""
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="h-12"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                        <Input
                          type="email"
                          placeholder=""
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="h-12"
                          required
                        />
                      </div>
                    </div>
                    <Button 
                      type="submit" 
                      variant="hero"
                      size="lg" 
                      className="w-full"
                    >
                      Secure Early Access
                    </Button>
                    <p className="text-xs text-center text-muted-foreground">
                      No spam. Unsubscribe anytime.
                    </p>
                  </form>
                </div>

                {/* Value bullets */}
                <div className="max-w-2xl mx-auto mt-12 grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Institutional Precision</p>
                      <p className="text-xs text-muted-foreground">Research-backed portfolio intelligence.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Adaptive Wealth Systems</p>
                      <p className="text-xs text-muted-foreground">Dynamic diversification built for markets that change.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Transparent Incentives</p>
                      <p className="text-xs text-muted-foreground">No hidden fees, no complexity.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Trusted Foundation</p>
                      <p className="text-xs text-muted-foreground">Secure, compliant, and auditable.</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center">
                <div className="p-8 border border-border bg-muted/20 max-w-2xl mx-auto">
                  <div className="mb-6">
                    <CheckCircle2 className="h-16 w-16 text-accent mx-auto" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                    Welcome to Singari
                  </h2>
                  <p className="text-lg text-muted-foreground mb-4">
                    You're now on the waitlist for early access.
                  </p>
                  <p className="text-base text-muted-foreground mb-8">
                    We'll reach out soon with exclusive updates and your invitation to the Singari Network.
                  </p>
                  <div className="p-6 bg-white border border-border text-left">
                    <p className="font-semibold text-lg text-foreground mb-4">What happens next?</p>
                    <ul className="text-muted-foreground space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        <span>Exclusive early access to the platform</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        <span>Private briefings on our investment framework</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        <span>First-mover benefits and special pricing</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-white border-t border-border">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              <span className="text-base font-semibold text-foreground">Singari & Co.</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 Singari & Co. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Waitlist;

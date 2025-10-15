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
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    // Here you would typically send the email to your backend
    console.log("Email submitted:", email);
    setIsSubmitted(true);
    toast.success("Successfully joined the waitlist!");
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(26, 47, 77, 0.95) 0%, rgba(26, 47, 77, 0.90) 100%), url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container mx-auto px-6 py-32 relative z-10">
          <div className="max-w-4xl mx-auto">
            {!isSubmitted ? (
              <div className="animate-fade-in">
                <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary-foreground text-center leading-tight">
                  Be Among the First to Access<br />the <span className="text-gold">Singari Network</span>.
                </h1>
                <p className="text-xl mb-12 text-primary-foreground/90 text-center max-w-3xl mx-auto">
                  Early access to the next generation of wealth intelligence — combining institutional systems, AI-driven strategy, and disciplined financial design.
                </p>

                {/* Value Points */}
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                  <Card className="p-6 bg-card/90 backdrop-blur-sm shadow-elegant">
                    <div className="flex items-start gap-4">
                      <Brain className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-lg mb-2 text-foreground">Institutional Precision</h3>
                        <p className="text-muted-foreground">Portfolio intelligence shaped by research and real-world data.</p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 bg-card/90 backdrop-blur-sm shadow-elegant">
                    <div className="flex items-start gap-4">
                      <TrendingUp className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-lg mb-2 text-foreground">Adaptive Wealth Systems</h3>
                        <p className="text-muted-foreground">Smart diversification that adjusts to evolving market conditions.</p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 bg-card/90 backdrop-blur-sm shadow-elegant">
                    <div className="flex items-start gap-4">
                      <Award className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-lg mb-2 text-foreground">Aligned Incentives</h3>
                        <p className="text-muted-foreground">Transparent pricing, no hidden layers.</p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 bg-card/90 backdrop-blur-sm shadow-elegant">
                    <div className="flex items-start gap-4">
                      <Shield className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-lg mb-2 text-foreground">Trusted Foundation</h3>
                        <p className="text-muted-foreground">Secure infrastructure modeled after the world's leading money centres.</p>
                      </div>
                    </div>
                  </Card>
                </div>

                {/* Form */}
                <Card className="p-8 bg-card shadow-gold max-w-2xl mx-auto">
                  <h2 className="text-2xl font-bold mb-6 text-center text-foreground">
                    Secure Your Early Access
                  </h2>
                  <p className="text-center text-muted-foreground mb-8">
                    Join the waitlist to unlock exclusive early access, private briefings, and first-mover benefits.
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Input
                        type="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="h-12 text-lg"
                        required
                      />
                    </div>
                    <Button 
                      type="submit" 
                      variant="hero" 
                      size="lg" 
                      className="w-full text-lg h-12"
                    >
                      Join the Waitlist
                    </Button>
                  </form>
                  <p className="text-sm text-muted-foreground text-center mt-6">
                    By joining, you'll be among the first to experience precision-driven wealth management.
                  </p>
                </Card>
              </div>
            ) : (
              <div className="text-center animate-scale-in">
                <Card className="p-12 bg-card shadow-gold max-w-2xl mx-auto">
                  <CheckCircle2 className="h-20 w-20 text-accent mx-auto mb-6" />
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                    Welcome to Singari
                  </h2>
                  <p className="text-xl text-muted-foreground mb-6">
                    You're now on the waitlist for early access.
                  </p>
                  <p className="text-muted-foreground mb-8">
                    We'll reach out soon with exclusive updates and your invitation to the Singari Network.
                  </p>
                  <div className="bg-muted/50 rounded-lg p-6">
                    <p className="font-semibold text-foreground mb-2">What happens next?</p>
                    <ul className="text-left text-muted-foreground space-y-2">
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
                </Card>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-background border-t border-border">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <TrendingUp className="h-6 w-6 text-accent" />
            <span className="text-xl font-bold text-foreground">Singari & Co.</span>
          </div>
          <p className="text-muted-foreground">
            © 2025 Singari & Co. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Waitlist;

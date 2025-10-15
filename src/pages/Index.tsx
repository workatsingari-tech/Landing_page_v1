import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { TrendingUp, Shield, Brain, Network, CheckCircle2, Lock, Award } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import { Hero3DBackground } from "@/components/Hero3DBackground";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(26, 47, 77, 0.97) 0%, rgba(26, 47, 77, 0.92) 100%), url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <Hero3DBackground />
        <div className="container mx-auto px-6 py-32 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 text-primary-foreground leading-tight">
              Where Precision<br />Becomes <span className="text-gold">Power.</span>
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-primary-foreground/90 leading-relaxed max-w-3xl mx-auto">
              Singari is redefining modern wealth intelligence — blending the discipline of institutional finance with the analytical clarity of machine-driven insight.
            </p>
            <p className="text-lg mb-10 text-primary-foreground/80 max-w-2xl mx-auto">
              A next-generation money centre built for investors who think in decades, not trends.
            </p>
            <Link to="/waitlist">
              <Button variant="hero" size="lg" className="text-lg px-10 py-6 h-auto">
                Join Early Access
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Origin & Vision */}
      <section className="py-24 gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-foreground">
              The Origin & Vision
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Born from quantitative research and the pursuit of precision, Singari was created to close the gap between institutional infrastructure and individual ambition.
              </p>
              <p className="text-center text-2xl font-semibold text-foreground my-8">
                In a world ruled by complexity, we stand for <span className="text-gold">clarity</span>.<br />
                In markets ruled by emotion, we stand for <span className="text-gold">discipline</span>.
              </p>
              <p>
                <strong className="text-foreground">Our mission:</strong> to empower every investor with the intelligence once reserved for institutions.
              </p>
              <p>
                <strong className="text-foreground">Our vision:</strong> to engineer consistent growth through data, discipline, and design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Defines Singari */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-foreground">
            What Defines Singari
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 glass-card group animate-scale-in">
              <div className="relative inline-block mb-4">
                <div className="absolute inset-0 bg-accent/20 blur-2xl rounded-full"></div>
                <Brain className="h-12 w-12 text-accent relative z-10 transition-smooth group-hover:scale-110 group-hover:rotate-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-accent transition-smooth">Quantitative Core</h3>
              <p className="text-muted-foreground leading-relaxed">
                Every portfolio decision is driven by measurable intelligence — built on dynamic models that interpret global data, macroeconomic trends, and behavioral signals in real time.
              </p>
            </Card>
            
            <Card className="p-8 glass-card group animate-scale-in">
              <div className="relative inline-block mb-4">
                <div className="absolute inset-0 bg-accent/20 blur-2xl rounded-full"></div>
                <TrendingUp className="h-12 w-12 text-accent relative z-10 transition-smooth group-hover:scale-110 group-hover:rotate-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-accent transition-smooth">AI with Strategic Oversight</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our systems adapt and learn; our advisors interpret and refine. The result — precision guided by principle.
              </p>
            </Card>
            
            <Card className="p-8 glass-card group animate-scale-in">
              <div className="relative inline-block mb-4">
                <div className="absolute inset-0 bg-accent/20 blur-2xl rounded-full"></div>
                <Network className="h-12 w-12 text-accent relative z-10 transition-smooth group-hover:scale-110 group-hover:rotate-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-accent transition-smooth">Institutional Infrastructure</h3>
              <p className="text-muted-foreground leading-relaxed">
                Modeled on the frameworks that drive global asset managers — resilient, transparent, and auditable at every layer.
              </p>
            </Card>
            
            <Card className="p-8 glass-card group animate-scale-in">
              <div className="relative inline-block mb-4">
                <div className="absolute inset-0 bg-accent/20 blur-2xl rounded-full"></div>
                <Award className="h-12 w-12 text-accent relative z-10 transition-smooth group-hover:scale-110 group-hover:rotate-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-accent transition-smooth">Tailored Intelligence</h3>
              <p className="text-muted-foreground leading-relaxed">
                Each client portfolio evolves with your objectives — balancing performance, liquidity, and risk through adaptive design.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Systems & Philosophy */}
      <section className="py-24 gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
              Systems & Philosophy
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Our investment framework is designed for resilience and long-term consistency.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              It blends adaptive intelligence with risk-aware construction — optimizing exposure, reducing volatility, and compounding disciplined returns.
            </p>
            <p className="text-xl font-semibold text-foreground mt-8">
              The outcome: steady growth through cycles, guided by systems that never sleep and principles that never waver.
            </p>
          </div>
        </div>
      </section>

      {/* Capabilities Snapshot */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-foreground">
            Capabilities Snapshot
          </h2>
          <div className="max-w-5xl mx-auto">
            <Card className="overflow-hidden shadow-elegant">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-primary text-primary-foreground">
                    <tr>
                      <th className="px-6 py-4 text-left text-lg font-semibold">Capability</th>
                      <th className="px-6 py-4 text-left text-lg font-semibold">Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr className="hover:bg-muted/50 transition-colors">
                      <td className="px-6 py-4 font-semibold text-foreground">Adaptive Allocation</td>
                      <td className="px-6 py-4 text-muted-foreground">Dynamic portfolio optimization informed by global data and evolving risk conditions.</td>
                    </tr>
                    <tr className="hover:bg-muted/50 transition-colors">
                      <td className="px-6 py-4 font-semibold text-foreground">Strategic Advisory</td>
                      <td className="px-6 py-4 text-muted-foreground">A seamless blend of algorithmic decision-making and expert oversight.</td>
                    </tr>
                    <tr className="hover:bg-muted/50 transition-colors">
                      <td className="px-6 py-4 font-semibold text-foreground">Wealth Architecture</td>
                      <td className="px-6 py-4 text-muted-foreground">Intelligent planning for taxation, liquidity, and estate efficiency.</td>
                    </tr>
                    <tr className="hover:bg-muted/50 transition-colors">
                      <td className="px-6 py-4 font-semibold text-foreground">Multi-Asset Precision</td>
                      <td className="px-6 py-4 text-muted-foreground">Unified exposure across equities, fixed income, digital assets, and alternatives.</td>
                    </tr>
                    <tr className="hover:bg-muted/50 transition-colors">
                      <td className="px-6 py-4 font-semibold text-foreground">Transparency & Control</td>
                      <td className="px-6 py-4 text-muted-foreground">Real-time insight through performance dashboards and scenario modeling.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Research, Heritage, and Design */}
      <section className="py-24 gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
              Research, Heritage, and Design
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Our approach draws inspiration from the discipline of Renaissance Technologies, the scale of BlackRock, and the legacy of J.P. Morgan — distilled into a single, intelligent ecosystem for modern investors.
            </p>
            <p className="text-2xl font-semibold text-foreground mt-8">
              Innovation isn't noise. It's <span className="text-gold">refinement</span>.
            </p>
            <p className="text-lg text-muted-foreground mt-4">
              That's why Singari builds technology not for speculation, but for sustained financial mastery.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing, Security & Compliance */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Pricing Snapshot
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                Transparent. Scalable. Aligned with your success.
              </p>
              <p className="text-lg text-foreground font-semibold">
                No hidden fees. No opacity.<br />
                Only performance-driven partnership.
              </p>
            </div>
            
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Security & Compliance
              </h2>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">Institutional standards of governance</p>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">Multi-layered custodial protection</p>
                </div>
                <div className="flex items-start gap-3">
                  <Lock className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">Full regulatory alignment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-32 gradient-hero text-primary-foreground relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            The world's leading investors don't predict —<br />they <span className="text-gold">prepare</span>.
          </h2>
          <p className="text-xl mb-12 text-primary-foreground/90 max-w-3xl mx-auto">
            Singari exists for those who demand more than returns — for those who demand precision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/waitlist">
              <Button variant="hero" size="lg" className="text-lg px-10 py-6 h-auto">
                Join Early Access
              </Button>
            </Link>
            <Button variant="hero-outline" size="lg" className="text-lg px-10 py-6 h-auto">
              Explore the Singari Network
            </Button>
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

export default Index;

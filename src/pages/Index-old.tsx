import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { TrendingUp, Shield, Brain, Network, CheckCircle2, Lock, Award } from "lucide-react";
import { Hero3DBackground } from "@/components/Hero3DBackground";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
        <Hero3DBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/50 to-transparent" />
        <div className="container mx-auto px-6 py-32 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-4">
              <span className="inline-block px-4 py-1.5 text-sm font-medium text-primary bg-primary/5 rounded-full border border-primary/10">
                Next-Generation Wealth Intelligence
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground leading-tight tracking-tight">
              Invest with Clarity. Grow<br />with Precision.
            </h1>
            <p className="text-lg md:text-xl mb-10 text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Singari merges institutional finance with AI-driven intelligence — helping investors build long-term, data-informed wealth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <Link to="/waitlist">
                <Button size="lg" className="text-base px-8 h-12 font-medium w-full sm:w-auto">
                  Join Early Access
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="text-base px-8 h-12 font-medium w-full sm:w-auto">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Origin & Vision */}
      <section id="origin" className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Origin & Vision
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-6">
                Born from quantitative research and precision, Singari bridges institutional infrastructure with individual ambition.
              </p>
              <ul className="space-y-3 text-base text-foreground">
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span><strong className="font-medium">Mission:</strong> <span className="text-muted-foreground">Empower investors with institutional-grade intelligence.</span></span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span><strong className="font-medium">Vision:</strong> <span className="text-muted-foreground">Build systems that create consistent, compounding growth.</span></span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 border border-border">
              <p className="text-lg text-muted-foreground leading-relaxed">
                From models to methods, we focus on clarity, discipline, and durability. We combine adaptive algorithms with expert oversight to turn complexity into confident action.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Defines Singari */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
            What Defines Singari
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="p-8 border border-border rounded-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="p-4 bg-primary/10 rounded-full inline-block mb-4">
                <Brain className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Quantitative Core</h3>
              <p className="text-muted-foreground leading-relaxed">
                Every portfolio decision is driven by measurable intelligence — built on dynamic models that interpret global data, macroeconomic trends, and behavioral signals in real time.
              </p>
            </div>
            
            <div className="p-8 border border-border rounded-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="p-4 bg-primary/10 rounded-full inline-block mb-4">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">AI with Strategic Oversight</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our systems adapt and learn; our advisors interpret and refine. The result — precision guided by principle.
              </p>
            </div>
            
            <div className="p-8 border border-border rounded-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="p-4 bg-primary/10 rounded-full inline-block mb-4">
                <Network className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Institutional Infrastructure</h3>
              <p className="text-muted-foreground leading-relaxed">
                Modeled on the frameworks that drive global asset managers — resilient, transparent, and auditable at every layer.
              </p>
            </div>
            
            <div className="p-8 border border-border rounded-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="p-4 bg-primary/10 rounded-full inline-block mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Tailored Intelligence</h3>
              <p className="text-muted-foreground leading-relaxed">
                Each client portfolio evolves with your objectives — balancing performance, liquidity, and risk through adaptive design.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-foreground">
              Our Approach
            </h2>
            <Tabs defaultValue="philosophy" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="philosophy">Systems & Philosophy</TabsTrigger>
                <TabsTrigger value="heritage">Research & Heritage</TabsTrigger>
              </TabsList>
              <TabsContent value="philosophy">
                <div className="p-6 border border-border rounded-lg bg-white mt-6">
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Our investment framework is designed for resilience and long-term consistency. It blends adaptive intelligence with risk-aware construction — optimizing exposure, reducing volatility, and compounding disciplined returns.
                  </p>
                  <div className="mt-8 p-6 bg-primary/5 border-l-4 border-primary">
                    <p className="text-lg font-medium text-foreground">
                      The outcome: steady growth through cycles, guided by systems that never sleep and principles that never waver.
                    </p>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="heritage">
                <div className="p-6 border border-border rounded-lg bg-white mt-6">
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Our approach draws inspiration from the discipline of Renaissance Technologies, the scale of BlackRock, and the legacy of J.P. Morgan — distilled into a single, intelligent ecosystem for modern investors.
                  </p>
                  <div className="mt-8 p-6 bg-primary/5 border-l-4 border-primary">
                    <p className="text-lg font-medium text-foreground mb-2">
                      Innovation isn't noise. It's <span className="text-primary">refinement</span>.
                    </p>
                    <p className="text-muted-foreground">
                      That's why Singari builds technology not for speculation, but for sustained financial mastery.
                    </p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Pricing, Security & Compliance */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-center">
            <div className="p-8 bg-muted/30 rounded-lg">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                Simple, Transparent Pricing
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Aligned with your success. No hidden fees, no surprises. Just a clear, performance-driven partnership.
              </p>
              <div className="p-6 bg-white rounded-lg border border-border">
                <p className="text-4xl font-bold text-foreground">Free</p>
                <p className="text-sm text-muted-foreground">During our early access program</p>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
                Security & Compliance
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Institutional-Grade Security</h4>
                    <p className="text-muted-foreground text-sm">Multi-layered custodial protection and encryption.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Regulatory Alignment</h4>
                    <p className="text-muted-foreground text-sm">Full compliance with financial regulations.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <Lock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Data Privacy</h4>
                    <p className="text-muted-foreground text-sm">Your data is yours. We are committed to privacy.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground leading-tight">
              The world's leading investors don't predict — they <span className="text-primary">prepare</span>.
            </h2>
            <p className="text-lg mb-10 text-muted-foreground max-w-2xl mx-auto">
              Singari exists for those who demand more than returns — for those who demand precision.
            </p>
            <Link to="/waitlist">
              <Button size="lg" className="text-base px-8 h-12 font-medium">
                Get started
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-6 w-6 text-primary" />
              <span className="text-lg font-semibold text-foreground">Singari & Co.</span>
            </div>
            <div className="flex gap-4">
              <Link to="#" className="text-muted-foreground hover:text-primary transition-colors"><span className="sr-only">Twitter</span><svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg></Link>
              <Link to="#" className="text-muted-foreground hover:text-primary transition-colors"><span className="sr-only">LinkedIn</span><svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg></Link>
              <Link to="#" className="text-muted-foreground hover:text-primary transition-colors"><span className="sr-only">GitHub</span><svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg></Link>
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

export default Index;

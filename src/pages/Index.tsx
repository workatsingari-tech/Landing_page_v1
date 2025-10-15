import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { TrendingUp, Shield, Brain, Network, CheckCircle2, Lock, Award } from "lucide-react";
import { Hero3DBackground } from "@/components/Hero3DBackground";

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
            <div className="mb-6 animate-fadeIn">
              <span className="inline-block px-4 py-1.5 text-sm font-medium text-foreground/70 border border-border rounded-full">
                Next-gen Investment Intelligence
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground leading-[1.1] tracking-tight animate-fadeIn" style={{animationDelay: '0.1s'}}>
              Invest with Clarity. Grow<br />with Precision.
            </h1>
            <p className="text-lg md:text-xl mb-10 text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fadeIn" style={{animationDelay: '0.2s'}}>
              Singari merges institutional finance with AI-driven intelligence — helping investors build long-term, data-informed wealth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center animate-slideUp">
              <Link to="/waitlist">
                <Button variant="hero" size="lg" className="w-full sm:w-auto">
                  Join Early Access
                </Button>
              </Link>
              <Button variant="hero-outline" size="lg" className="w-full sm:w-auto">
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

      {/* What defines Singari */}
      <section id="what-defines" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              What defines Singari
            </h2>
            <p className="text-muted-foreground">
              Calm, analytical, and transparent. Institutional-grade capabilities with intuitive control.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="p-6 border border-border hover:border-primary/30 transition-all animate-fadeIn" style={{animationDelay: '0s'}}>
              <div className="p-3 bg-primary/5 rounded-lg inline-block mb-4">
                <Brain className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Quantitative Core</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Portfolios powered by measurable, research-backed intelligence.
              </p>
            </div>
            
            <div className="p-6 border border-border hover:border-primary/30 transition-all animate-fadeIn" style={{animationDelay: '0.1s'}}>
              <div className="p-3 bg-primary/5 rounded-lg inline-block mb-4">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">AI + Oversight</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Adaptive algorithms refined by expert advisors and transparent review.
              </p>
            </div>
            
            <div className="p-6 border border-border hover:border-primary/30 transition-all animate-fadeIn" style={{animationDelay: '0.2s'}}>
              <div className="p-3 bg-primary/5 rounded-lg inline-block mb-4">
                <Network className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Institutional<br/>Infrastructure</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Transparent, auditable, and resilient systems from the ground up.
              </p>
            </div>
            
            <div className="p-6 border border-border hover:border-primary/30 transition-all animate-fadeIn" style={{animationDelay: '0.3s'}}>
              <div className="p-3 bg-primary/5 rounded-lg inline-block mb-4">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Tailored Intelligence</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Adaptive portfolios built for your evolving goals and risk profile.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Philosophy */}
      <section id="philosophy" className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Investment Philosophy
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto">
              Our systems combine adaptive intelligence with disciplined construction — optimizing exposure, minimizing volatility, and compounding returns.
            </p>
            <div className="inline-block p-6 bg-white border border-border">
              <p className="text-base font-medium text-foreground">
                Systems that never sleep. Principles that never waver.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Snapshot */}
      <section id="capabilities" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Capabilities Snapshot
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-6 border border-border">
              <h3 className="font-semibold text-lg mb-2 text-foreground">Adaptive Allocation</h3>
              <p className="text-sm text-muted-foreground">
                Dynamic portfolio optimization powered by global data.
              </p>
            </div>
            <div className="p-6 border border-border">
              <h3 className="font-semibold text-lg mb-2 text-foreground">Strategic Advisory</h3>
              <p className="text-sm text-muted-foreground">
                Blend of algorithmic decision-making and expert review.
              </p>
            </div>
            <div className="p-6 border border-border">
              <h3 className="font-semibold text-lg mb-2 text-foreground">Wealth Architecture</h3>
              <p className="text-sm text-muted-foreground">
                Tax-smart and liquidity-efficient planning.
              </p>
            </div>
            <div className="p-6 border border-border">
              <h3 className="font-semibold text-lg mb-2 text-foreground">Multi-Asset Precision</h3>
              <p className="text-sm text-muted-foreground">
                Unified exposure across equity, fixed income, and alternatives.
              </p>
            </div>
            <div className="p-6 border border-border md:col-span-2">
              <h3 className="font-semibold text-lg mb-2 text-foreground">Transparency & Control</h3>
              <p className="text-sm text-muted-foreground">
                Real-time dashboards and scenario insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Heritage & Design */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Heritage & Design
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Inspired by the rigor of Renaissance Technologies and the scale of BlackRock — distilled into one intelligent ecosystem.
            </p>
            <div className="inline-block p-6 bg-white border border-border">
              <p className="text-base font-medium text-foreground">
                Innovation isn't noise. It's refinement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Snapshot */}
      <section id="pricing" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Pricing Snapshot
            </h2>
            <p className="text-muted-foreground mb-12">
              Transparent. Scalable. Aligned with your success. No hidden fees. No commissions.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="p-8 border-2 border-foreground">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-xl font-semibold text-foreground">Early Access</h3>
                <span className="text-sm font-medium">Request</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-foreground mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Priority onboarding</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-foreground mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Product previews</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-foreground mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Advisor sessions</span>
                </li>
              </ul>
              <Link to="/waitlist" className="block">
                <Button className="w-full btn-glow">Join Early Access</Button>
              </Link>
            </div>

            <div className="p-8 border border-border">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-xl font-semibold text-foreground">Advisory</h3>
                <span className="text-sm font-medium">Performance-based</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-foreground mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">No hidden fees</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-foreground mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Aligned incentives</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-foreground mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Transparent reporting</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full btn-magnetic">Talk to Us</Button>
            </div>

            <div className="p-8 border border-border">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-xl font-semibold text-foreground">Institutional</h3>
                <span className="text-sm font-medium">Custom</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-foreground mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Custodial protection</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-foreground mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Audit-ready controls</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-foreground mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Dedicated support</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full btn-magnetic">Contact</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section id="security" className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Security & Compliance</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">Institutional standards of governance</p>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">Multi-layered custodial protection</p>
                </div>
                <div className="flex items-start gap-3">
                  <Lock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">Full regulatory alignment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center border border-border p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground leading-tight">
              The world's best investors don't predict — they prepare.
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Singari exists for those who demand precision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <Link to="/waitlist">
                <Button size="lg" className="w-full sm:w-auto">
                  Join Early Access
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Explore the Network
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-foreground" />
              <span className="text-base font-semibold text-foreground">Singari & Co.</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms</a>
              <a href="#" className="hover:text-foreground transition-colors">Careers</a>
              <a href="#" className="hover:text-foreground transition-colors">Contact</a>
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

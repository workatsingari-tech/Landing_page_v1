import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { TrendingUp } from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-morphism border-b border-white/10 shadow-elegant">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group transition-smooth hover:scale-105">
            <div className="relative">
              <div className="absolute inset-0 bg-accent/20 blur-xl rounded-full"></div>
              <TrendingUp className="h-8 w-8 text-accent relative z-10 transition-smooth group-hover:rotate-12" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
              Singari & Co.
            </span>
          </Link>
          
          <div className="flex items-center gap-4">
            {!isHome && (
              <Link to="/">
                <Button variant="ghost" className="glass-button">Home</Button>
              </Link>
            )}
            <Link to="/waitlist">
              <Button variant={isHome ? "hero" : "default"} className="glass-button-accent">
                Join Early Access
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

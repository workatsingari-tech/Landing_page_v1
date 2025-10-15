import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { TrendingUp } from "lucide-react";
import { useState, useEffect } from "react";

const Navigation = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-200 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group transition-all hover:opacity-80">
            <TrendingUp className="h-6 w-6 text-foreground" />
            <span className="text-lg font-semibold text-foreground">
              Singari & Co.
            </span>
          </Link>
          
          {isHome && (
            <div className="hidden md:flex items-center gap-6 text-sm">
              <button onClick={() => scrollToSection('origin')} className="text-muted-foreground hover:text-foreground transition-colors">
                Origin
              </button>
              <button onClick={() => scrollToSection('what-defines')} className="text-muted-foreground hover:text-foreground transition-colors">
                What Defines
              </button>
              <button onClick={() => scrollToSection('philosophy')} className="text-muted-foreground hover:text-foreground transition-colors">
                Philosophy
              </button>
              <button onClick={() => scrollToSection('capabilities')} className="text-muted-foreground hover:text-foreground transition-colors">
                Capabilities
              </button>
              <button onClick={() => scrollToSection('pricing')} className="text-muted-foreground hover:text-foreground transition-colors">
                Pricing
              </button>
              <button onClick={() => scrollToSection('security')} className="text-muted-foreground hover:text-foreground transition-colors">
                Security
              </button>
            </div>
          )}
          
          <div className="flex items-center gap-3">
            {!isHome && (
              <Link to="/">
                <Button variant="ghost" size="sm" className="font-medium">
                  Home
                </Button>
              </Link>
            )}
            <Button variant="ghost" size="sm" className="font-medium hidden md:inline-flex">
              Learn more
            </Button>
            <Link to="/waitlist">
              <Button size="sm" className="font-medium">
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

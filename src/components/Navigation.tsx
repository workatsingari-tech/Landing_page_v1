import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { TrendingUp } from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <TrendingUp className="h-8 w-8 text-accent" />
            <span className="text-2xl font-bold text-foreground">Singari & Co.</span>
          </Link>
          
          <div className="flex items-center gap-4">
            {!isHome && (
              <Link to="/">
                <Button variant="ghost">Home</Button>
              </Link>
            )}
            <Link to="/waitlist">
              <Button variant={isHome ? "hero" : "default"}>
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

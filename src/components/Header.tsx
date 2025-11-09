import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Brain } from "lucide-react";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-semibold">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <Brain className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">NeuroDetect AI</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground">
            Home
          </Link>
          <Link to="/dashboard" className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground">
            Dashboard
          </Link>
          <Link to="/analysis" className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground">
            Analysis
          </Link>
          <Link to="/about" className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground">
            About
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm">
            Sign In
          </Button>
          <Button size="sm">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

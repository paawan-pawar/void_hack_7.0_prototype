import { Brain } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <Brain className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-foreground">NeuroDetect AI</span>
            </div>
            <p className="text-sm text-muted-foreground">
              AI-powered early detection for Alzheimer's disease, making healthcare accessible worldwide.
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold text-foreground">Platform</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/dashboard" className="transition-colors hover:text-foreground">Dashboard</Link></li>
              <li><Link to="/analysis" className="transition-colors hover:text-foreground">Analysis</Link></li>
              <li><Link to="/about" className="transition-colors hover:text-foreground">About</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold text-foreground">Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="transition-colors hover:text-foreground">Documentation</a></li>
              <li><a href="#" className="transition-colors hover:text-foreground">Research</a></li>
              <li><a href="#" className="transition-colors hover:text-foreground">Support</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold text-foreground">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="transition-colors hover:text-foreground">Privacy Policy</a></li>
              <li><a href="#" className="transition-colors hover:text-foreground">Terms of Service</a></li>
              <li><a href="#" className="transition-colors hover:text-foreground">Compliance</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} NeuroDetect AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

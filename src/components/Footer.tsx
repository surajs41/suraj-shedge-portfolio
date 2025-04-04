
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card py-8 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <p className="text-muted-foreground text-sm">
              &copy; {currentYear} Suraj Shedge. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center">
            <a
              href="#"
              className="bg-primary/10 hover:bg-primary/20 p-3 rounded-full text-primary transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

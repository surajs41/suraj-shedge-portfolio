
import { ArrowUp, Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card py-8 border-t border-border relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="dotted-bg"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center text-xl font-bold mb-2">
              <span className="text-primary mr-1">Suraj</span>
              <span>Shedge</span>
            </div>
            <p className="text-muted-foreground text-sm">
              &copy; {currentYear} All rights reserved.
            </p>
          </div>
          
          <div className="flex flex-col items-center mb-6 md:mb-0">
            <div className="flex space-x-4 mb-4">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-muted p-2 rounded-full hover:bg-primary hover:text-white transition-colors transform hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-muted p-2 rounded-full hover:bg-primary hover:text-white transition-colors transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:contact@example.com"
                className="bg-muted p-2 rounded-full hover:bg-primary hover:text-white transition-colors transform hover:scale-110"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <p className="text-sm text-muted-foreground flex items-center">
              Made with <Heart className="h-3 w-3 mx-1 text-accent animate-pulse" /> by Suraj Shedge
            </p>
          </div>
          
          <div>
            <a
              href="#"
              className="bg-primary/10 hover:bg-primary/20 p-3 rounded-full text-primary transition-colors transform hover:scale-110 inline-flex"
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

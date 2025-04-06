
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { useState, useEffect } from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isVisible, setIsVisible] = useState(false);
  
  // Show scroll-to-top button only when scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gradient-to-r from-background to-muted/50 py-12 border-t border-border relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="text-center md:text-left animate-fade-in">
            <h3 className="text-xl font-bold mb-2 font-montserrat gradient-text">Suraj Shedge</h3>
            <p className="text-foreground/70 text-sm">
              &copy; {currentYear} All rights reserved.
            </p>
          </div>
          
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="flex items-center space-x-6">
              <a 
                href="https://github.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-all duration-300 hover:scale-125"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-all duration-300 hover:scale-125"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:surajshedage45@gmail.com" 
                className="text-foreground/70 hover:text-primary transition-all duration-300 hover:scale-125"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <div className="h-px w-24 bg-border rounded-full my-2"></div>
            <p className="text-foreground/50 text-xs">
              Designed with ❤️ by Suraj Shedge
            </p>
          </div>
          
          <div className="flex justify-center md:justify-end">
            <div 
              className={`fixed bottom-8 right-8 z-40 transition-all duration-500 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'
              }`}
            >
              <button
                onClick={scrollToTop}
                className="bg-primary/10 hover:bg-primary/20 p-3 rounded-full text-primary transition-all duration-500 hover:scale-110 shadow-md hover:shadow-lg glass"
                aria-label="Scroll to top"
              >
                <ArrowUp className="h-5 w-5" />
              </button>
            </div>
            
            <div className="hidden md:block">
              <div className="flex gap-2 text-sm text-foreground/70">
                <a href="#about" className="hover:text-primary transition-colors animated-border">About</a>
                <span>•</span>
                <a href="#skills" className="hover:text-primary transition-colors animated-border">Skills</a>
                <span>•</span>
                <a href="#projects" className="hover:text-primary transition-colors animated-border">Projects</a>
                <span>•</span>
                <a href="#resume" className="hover:text-primary transition-colors animated-border">Resume</a>
                <span>•</span>
                <a href="#contact" className="hover:text-primary transition-colors animated-border">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

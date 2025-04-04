
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 pb-8 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="blob-bg bg-primary/20 top-10 -left-20"></div>
        <div className="blob-bg bg-secondary/20 bottom-10 -right-20"></div>
        <div className="absolute inset-0 dotted-bg opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <p className="text-xl text-primary font-medium mb-2 animate-fade-in">
              Hello, I'm
            </p>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in gradient-text" style={{ animationDelay: "200ms" }}>
              Suraj Shedge
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6 animate-fade-in" style={{ animationDelay: "400ms" }}>
              Computer Engineering Student & Java Developer
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl animate-fade-in" style={{ animationDelay: "600ms" }}>
              Passionate about creating innovative solutions and building 
              efficient applications with clean code.
            </p>
            
            <div className="flex space-x-4 justify-center md:justify-start mb-8 animate-fade-in" style={{ animationDelay: "800ms" }}>
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" 
                 className="bg-card hover:bg-primary hover:text-white p-3 rounded-full transition-all duration-300 shadow-md transform hover:scale-110">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer"
                 className="bg-card hover:bg-primary hover:text-white p-3 rounded-full transition-all duration-300 shadow-md transform hover:scale-110">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="mailto:contact@example.com" 
                 className="bg-card hover:bg-primary hover:text-white p-3 rounded-full transition-all duration-300 shadow-md transform hover:scale-110">
                <Mail className="h-5 w-5" />
              </a>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in" style={{ animationDelay: "1000ms" }}>
              <Button asChild className="rounded-full bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 transform hover:translate-y-[-3px] transition-all">
                <a href="#contact">Contact Me</a>
              </Button>
              <Button asChild variant="outline" className="rounded-full border-primary/20 hover:border-primary/50 shadow-lg shadow-primary/10 transform hover:translate-y-[-3px] transition-all">
                <a href="#projects">View Projects</a>
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center animate-fade-in" style={{ animationDelay: "600ms" }}>
            <div className="relative floating-element">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-primary to-secondary animate-glow"></div>
              <img 
                src="/placeholder.svg" 
                alt="Suraj Shedge" 
                className="absolute inset-0 w-64 h-64 md:w-80 md:h-80 rounded-full object-cover"
              />
              
              {/* Decorative particles */}
              <div className="absolute -top-10 -left-10 w-20 h-20 bg-accent/20 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-5 -right-5 w-16 h-16 bg-primary/20 rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
              <div className="absolute top-1/2 -right-10 w-8 h-8 bg-secondary/30 rounded-full animate-ping"></div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors flex flex-col items-center">
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDown className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

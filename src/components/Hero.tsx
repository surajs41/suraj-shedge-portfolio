
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 pb-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <p className="text-xl text-primary font-medium mb-2 animate-fade-in">
              Hello, I'm
            </p>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in" style={{ animationDelay: "200ms" }}>
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
                 className="bg-card hover:bg-muted text-foreground p-3 rounded-full transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer"
                 className="bg-card hover:bg-muted text-foreground p-3 rounded-full transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="mailto:contact@example.com" 
                 className="bg-card hover:bg-muted text-foreground p-3 rounded-full transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in" style={{ animationDelay: "1000ms" }}>
              <Button asChild className="rounded-full bg-primary hover:bg-primary/90">
                <a href="#contact">Contact Me</a>
              </Button>
              <Button asChild variant="outline" className="rounded-full">
                <a href="#projects">View Projects</a>
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center animate-fade-in" style={{ animationDelay: "600ms" }}>
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-primary to-secondary animate-glow"></div>
              <img 
                src="/placeholder.svg" 
                alt="Suraj Shedge" 
                className="absolute inset-0 w-64 h-64 md:w-80 md:h-80 rounded-full object-cover"
              />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

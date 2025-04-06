
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useRef } from "react";

const Hero = () => {
  const heroCardRef = useRef<HTMLDivElement>(null);
  
  // 3D card tilt effect
  useEffect(() => {
    const heroCard = heroCardRef.current;
    if (!heroCard) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = heroCard.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      
      heroCard.style.transform = `
        perspective(1000px) 
        rotateY(${x * 8}deg) 
        rotateX(${-y * 8}deg)
        translateZ(20px)
      `;
    };
    
    const handleMouseLeave = () => {
      heroCard.style.transform = `
        perspective(1000px)
        rotateY(0deg)
        rotateX(0deg)
        translateZ(0px)
      `;
      heroCard.style.transition = "transform 0.5s ease";
    };
    
    heroCard.addEventListener("mousemove", handleMouseMove);
    heroCard.addEventListener("mouseleave", handleMouseLeave);
    
    return () => {
      heroCard.removeEventListener("mousemove", handleMouseMove);
      heroCard.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 pb-0 overflow-hidden bg-gradient-to-b from-background to-muted/30 relative">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <p className="text-xl text-primary font-medium mb-2 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              Hello, I'm
            </p>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 font-montserrat gradient-text animate-slide-up" style={{ animationDelay: "0.2s" }}>
              Suraj Shedge
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6 animate-slide-up" style={{ animationDelay: "0.3s" }}>
              Computer Engineering Student & Java Developer
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl animate-slide-up" style={{ animationDelay: "0.4s" }}>
              Passionate about creating innovative solutions and building 
              efficient applications with clean code.
            </p>
            
            <div className="flex space-x-4 justify-center md:justify-start mb-8 animate-slide-up" style={{ animationDelay: "0.5s" }}>
              <a 
                href="https://github.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-card hover:bg-muted text-foreground p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-md"
                aria-label="GitHub profile"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-card hover:bg-muted text-foreground p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-md"
                aria-label="LinkedIn profile"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:surajshedage3315@gmail.com" 
                className="bg-card hover:bg-muted text-foreground p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-md"
                aria-label="Send email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-slide-up" style={{ animationDelay: "0.6s" }}>
              <Button 
                asChild 
                className="rounded-full bg-primary hover:bg-primary/90 shadow-md hover:shadow-lg hover:translate-y-[-2px] transition-all duration-300"
              >
                <a href="#contact">Contact Me</a>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                className="rounded-full shadow-sm hover:shadow-md hover:translate-y-[-2px] transition-all duration-300"
              >
                <a href="#projects">View Projects</a>
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center animate-fade-in" style={{ animationDelay: "0.7s" }}>
            <div 
              ref={heroCardRef}
              className="relative transition-all duration-300 card-3d-inner"
            >
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-primary/20 via-primary/10 to-secondary/20 animate-pulse glassmorphism"></div>
              <img 
                src="/placeholder.svg" 
                alt="Suraj Shedge" 
                className="absolute inset-0 w-64 h-64 md:w-80 md:h-80 rounded-full object-cover"
              />
              
              {/* 3D floating decorative elements */}
              <div className="absolute -top-5 -right-5 w-10 h-10 bg-primary/20 rounded-full blur-sm animate-float" style={{ animationDelay: "0.2s" }}></div>
              <div className="absolute -bottom-3 -left-3 w-8 h-8 bg-secondary/20 rounded-full blur-sm animate-float" style={{ animationDelay: "0.5s" }}></div>
              <div className="absolute top-1/4 -right-8 w-6 h-6 bg-accent/20 rounded-full blur-sm animate-float" style={{ animationDelay: "0.8s" }}></div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a 
            href="#about" 
            className="text-muted-foreground hover:text-primary transition-colors p-2 bg-background/50 rounded-full backdrop-blur-sm shadow-sm hover:shadow-md"
            aria-label="Scroll down to About section"
          >
            <ArrowDown className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

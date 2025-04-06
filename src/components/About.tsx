
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import { useRef, useEffect } from "react";

const About = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Parallax effect for the card
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!cardRef.current) return;
      
      const { left, top, width, height } = cardRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      
      const cards = cardRef.current.querySelectorAll('.stat-card');
      cards.forEach((card, index) => {
        const factor = 1 + (index * 0.2);
        (card as HTMLElement).style.transform = `translateX(${x * 10 * factor}px) translateY(${y * 10 * factor}px)`;
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="about" className="gradient-bg py-16 md:py-24 relative overflow-hidden">
      {/* 3D geometric decorative shapes */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-secondary/5 rounded-full blur-3xl"></div>
      
      <div className="section-container relative z-10">
        <h2 className="section-title text-center mx-auto">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-12 items-center">
          <div 
            className="animate-slide-in-left shadow-xl rounded-2xl overflow-hidden glassmorphism" 
            style={{ animationDelay: "0.2s" }}
          >
            <img 
              src="/placeholder.svg" 
              alt="Suraj Shedge" 
              className="rounded-lg w-full max-w-md mx-auto object-cover transition-all duration-500 hover:scale-105"
            />
          </div>
          
          <div className="animate-slide-in-right" style={{ animationDelay: "0.4s" }}>
            <h3 className="text-2xl md:text-3xl font-bold mb-6 font-montserrat gradient-text">
              Computer Engineering Student &amp; Java Developer
            </h3>
            
            <p className="text-muted-foreground mb-6 text-lg">
              Hello! I'm Suraj Shedge, a passionate computer engineering student with a strong foundation 
              in Java development. I'm currently pursuing my degree in Computer Engineering and focused on 
              building efficient, scalable applications.
            </p>
            
            <p className="text-muted-foreground mb-8 text-lg">
              My journey in programming began during my early college years, and I've since developed a 
              keen interest in software development, particularly backend systems and database management. 
              I enjoy solving complex problems and creating technological solutions that make a difference.
            </p>
            
            <div ref={cardRef} className="flex flex-wrap gap-4 mb-8 perspective-500">
              <div className="stat-card bg-card/50 rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 backdrop-blur-sm border border-border/50 hover:border-primary/30 transform hover:translate-z-10 flex-1">
                <h4 className="font-semibold text-lg text-primary">Education</h4>
                <p className="text-muted-foreground">B.Tech in Computer Engineering</p>
              </div>
              
              <div className="stat-card bg-card/50 rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 backdrop-blur-sm border border-border/50 hover:border-primary/30 transform hover:translate-z-10 flex-1">
                <h4 className="font-semibold text-lg text-primary">Experience</h4>
                <p className="text-muted-foreground">2+ Years Coding</p>
              </div>
              
              <div className="stat-card bg-card/50 rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 backdrop-blur-sm border border-border/50 hover:border-primary/30 transform hover:translate-z-10 flex-1">
                <h4 className="font-semibold text-lg text-primary">Projects</h4>
                <p className="text-muted-foreground">5+ Completed</p>
              </div>
            </div>
            
            <Button 
              asChild 
              className="rounded-full shadow-md hover:shadow-lg hover:translate-y-[-2px] transition-all duration-300 btn-3d"
            >
              <a href="#resume">
                <FileText className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </div>
      <div className="section-divider mt-16"></div>
    </section>
  );
};

export default About;

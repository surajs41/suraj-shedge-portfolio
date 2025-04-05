
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="gradient-bg py-10 md:py-16 relative">
      <div className="section-container">
        <h2 className="section-title text-center mx-auto">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-8 items-center">
          <div className="animate-slide-in-left" style={{ animationDelay: "0.2s" }}>
            <img 
              src="/placeholder.svg" 
              alt="Suraj Shedge" 
              className="rounded-lg shadow-lg w-full max-w-md mx-auto object-cover"
            />
          </div>
          
          <div className="animate-slide-in-right" style={{ animationDelay: "0.4s" }}>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 font-montserrat">
              Computer Engineering Student &amp; Java Developer
            </h3>
            
            <p className="text-muted-foreground mb-4">
              Hello! I'm Suraj Shedge, a passionate computer engineering student with a strong foundation 
              in Java development. I'm currently pursuing my degree in Computer Engineering and focused on 
              building efficient, scalable applications.
            </p>
            
            <p className="text-muted-foreground mb-6">
              My journey in programming began during my early college years, and I've since developed a 
              keen interest in software development, particularly backend systems and database management. 
              I enjoy solving complex problems and creating technological solutions that make a difference.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="bg-card rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300">
                <h4 className="font-semibold text-lg">Education</h4>
                <p className="text-muted-foreground">B.Tech in Computer Engineering</p>
              </div>
              
              <div className="bg-card rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300">
                <h4 className="font-semibold text-lg">Experience</h4>
                <p className="text-muted-foreground">2+ Years Coding</p>
              </div>
              
              <div className="bg-card rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300">
                <h4 className="font-semibold text-lg">Projects</h4>
                <p className="text-muted-foreground">5+ Completed</p>
              </div>
            </div>
            
            <Button asChild className="rounded-full shadow-md">
              <a href="#resume">
                <FileText className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </div>
      <div className="section-divider mt-10"></div>
    </section>
  );
};

export default About;


import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="bg-muted/30 py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title text-center mx-auto">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 items-center">
          <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
            <img 
              src="/placeholder.svg" 
              alt="Suraj Shedge" 
              className="rounded-lg shadow-lg w-full max-w-md mx-auto"
            />
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: "400ms" }}>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
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
              <div className="bg-card rounded-lg p-4 shadow-sm">
                <h4 className="font-semibold text-lg">Education</h4>
                <p className="text-muted-foreground">B.Tech in Computer Engineering</p>
              </div>
              
              <div className="bg-card rounded-lg p-4 shadow-sm">
                <h4 className="font-semibold text-lg">Experience</h4>
                <p className="text-muted-foreground">2+ Years Coding</p>
              </div>
              
              <div className="bg-card rounded-lg p-4 shadow-sm">
                <h4 className="font-semibold text-lg">Projects</h4>
                <p className="text-muted-foreground">5+ Completed</p>
              </div>
            </div>
            
            <Button asChild className="rounded-full">
              <a href="#resume">
                <FileText className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

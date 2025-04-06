
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const projectCardsRef = useRef<HTMLDivElement>(null);
  
  // Intersection observer for fade-in animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.project-card-animate');
            cards.forEach((card, index) => {
              (card as HTMLElement).style.opacity = "1";
              (card as HTMLElement).style.transform = "translateY(0)";
              (card as HTMLElement).style.transitionDelay = `${index * 0.15}s`;
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (projectCardsRef.current) {
      observer.observe(projectCardsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "Hospital Management System",
      description:
        "A comprehensive Java-based system for managing hospital operations including patient records, doctor schedules, and appointment booking.",
      image: "/placeholder.svg",
      tags: ["Java", "MySQL", "Spring Boot", "Hibernate", "Bootstrap"],
      liveUrl: "#",
      repoUrl: "#",
    },
    {
      title: "Face Detection System",
      description:
        "An AI-powered application for facial recognition and detection using computer vision techniques and machine learning algorithms.",
      image: "/placeholder.svg",
      tags: ["Python", "OpenCV", "TensorFlow", "Machine Learning"],
      liveUrl: "#",
      repoUrl: "#",
    },
    {
      title: "Online Bike Rental System",
      description:
        "A web application that enables users to rent bikes online with features like booking, payment processing, and inventory management.",
      image: "/placeholder.svg",
      tags: ["Java", "JavaScript", "MySQL", "Spring MVC", "Bootstrap"],
      liveUrl: "#",
      repoUrl: "#",
    },
  ];

  return (
    <section id="projects" className="gradient-bg py-16 md:py-24 relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-background/50 to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background/50 to-transparent pointer-events-none"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
      
      <div className="section-container relative z-10">
        <h2 className="section-title text-center mx-auto">My Projects</h2>
        <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12 text-lg">
          Here are some of the projects I've worked on that showcase my skills and
          experience in software development.
        </p>

        <div 
          ref={projectCardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className={`project-card-animate opacity-0 transform translate-y-8 transition-all duration-700 card-3d overflow-hidden border border-border/50 hover:border-primary/30 hover:shadow-xl bg-card/50 backdrop-blur-sm ${
                activeIndex === index ? 'scale-[1.02] z-10' : ''
              }`}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <div className="aspect-video overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent z-10"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className={`object-cover w-full h-full transition-all duration-700 ${
                    activeIndex === index ? 'scale-110' : 'scale-100'
                  }`}
                />
              </div>
              <CardContent className="p-6 relative z-20">
                <h3 className="text-xl font-bold mb-2 font-montserrat">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="secondary" 
                      className="rounded-full bg-secondary/10 text-secondary-foreground hover:bg-secondary/20 transition-colors"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button 
                    asChild 
                    variant="outline" 
                    size="sm"
                    className="rounded-full hover:shadow-md transition-all duration-300"
                  >
                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button 
                    asChild 
                    size="sm"
                    className="rounded-full hover:shadow-md hover:translate-y-[-2px] transition-all duration-300"
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <div className="section-divider mt-16"></div>
    </section>
  );
};

export default Projects;

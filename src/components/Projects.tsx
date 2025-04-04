
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
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
    <section id="projects" className="bg-muted/30 py-16 md:py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="blob-bg bg-primary/10 -bottom-40 -right-40"></div>
        <div className="absolute inset-0 dotted-bg opacity-20"></div>
      </div>
      
      <div className="section-container relative z-10">
        <h2 className="section-title text-center mx-auto">My <span className="gradient-text">Projects</span></h2>
        <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12">
          Here are some of the projects I've worked on that showcase my skills and
          experience in software development.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <div 
              key={project.title} 
              className="project-card animate-fade-in card-shine shadow-lg"
              style={{ animationDelay: `${200 * index}ms` }}
            >
              <div className="aspect-video overflow-hidden relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="rounded-full hover:bg-primary/20 hover:text-foreground transition-colors">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button asChild variant="outline" size="sm" className="shadow-sm transform hover:translate-y-[-2px] transition-all">
                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button asChild size="sm" className="shadow-sm transform hover:translate-y-[-2px] transition-all">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

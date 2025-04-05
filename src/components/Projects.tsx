
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
    <section id="projects" className="gradient-bg py-10 md:py-16 relative">
      <div className="section-container">
        <h2 className="section-title text-center mx-auto">My Projects</h2>
        <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-10">
          Here are some of the projects I've worked on that showcase my skills and
          experience in software development.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className="overflow-hidden border border-border hover:shadow-lg transition-all duration-300 hover:border-primary animate-slide-up"
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 font-montserrat">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="rounded-full">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button asChild variant="outline" size="sm">
                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button asChild size="sm">
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
      <div className="section-divider mt-10"></div>
    </section>
  );
};

export default Projects;

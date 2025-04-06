
import { Code, Database, Layout, Server, Settings } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useRef, useEffect } from "react";

const Skills = () => {
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  // Parallax effect for cards
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.skill-card');
            cards.forEach((card, index) => {
              (card as HTMLElement).style.opacity = "1";
              (card as HTMLElement).style.transform = "translateY(0)";
              (card as HTMLElement).style.transitionDelay = `${index * 0.1}s`;
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardsContainerRef.current) {
      observer.observe(cardsContainerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="h-8 w-8 text-primary mb-4" />,
      skills: ["Java", "JavaScript", "HTML", "CSS", "SQL"],
    },
    {
      title: "Frameworks & Libraries",
      icon: <Layout className="h-8 w-8 text-primary mb-4" />,
      skills: ["Spring Boot", "Hibernate", "Bootstrap"],
    },
    {
      title: "Databases",
      icon: <Database className="h-8 w-8 text-primary mb-4" />,
      skills: ["MySQL"],
    },
    {
      title: "Backend Development",
      icon: <Server className="h-8 w-8 text-primary mb-4" />,
      skills: ["RESTful APIs", "Microservices", "JDBC", "JPA", "API Integration", "JSP"],
    },
    {
      title: "Tools & Technologies",
      icon: <Settings className="h-8 w-8 text-primary mb-4" />,
      skills: ["Git", "Maven", "Gradle", "Tomcat", "VSCode", "Spring Tool Suite", "Eclipse", "Postman"],
    },
  ];

  return (
    <section id="skills" className="py-16 md:py-24 bg-background relative">
      {/* Decorative geometric shapes */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-secondary/5 rounded-full blur-3xl"></div>
      
      <div className="section-container">
        <h2 className="section-title text-center mx-auto">My Skills</h2>
        <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12 text-lg">
          As a computer engineering student and Java developer, I've developed expertise
          in various technologies and tools throughout my academic and project work.
        </p>

        <div 
          ref={cardsContainerRef} 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category) => (
            <Card 
              key={category.title}
              className="skill-card opacity-0 transform translate-y-8 transition-all duration-700 border border-border/50 hover:border-primary/30 bg-card/50 backdrop-blur-sm hover:shadow-lg card-3d"
            >
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-2 transform transition-transform hover:scale-110 duration-300">
                  <div className="p-3 rounded-full bg-primary/10 backdrop-blur-sm">
                    {category.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-6 font-montserrat">{category.title}</h3>
                
                <div className="flex flex-wrap justify-center gap-2">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="bg-muted/70 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-foreground/80 border border-border/50 hover:bg-muted hover:text-foreground transition-all duration-300 hover:shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
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

export default Skills;

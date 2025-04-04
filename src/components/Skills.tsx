
import { Code, Database, Layout, Server, Settings } from "lucide-react";

const Skills = () => {
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
    <section id="skills" className="section-container relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="blob-bg bg-primary/10 -top-20 -right-20"></div>
        <div className="blob-bg bg-secondary/10 bottom-10 -left-20"></div>
      </div>

      <div className="relative z-10">
        <h2 className="section-title text-center mx-auto">My <span className="gradient-text">Skills</span></h2>
        <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12">
          As a computer engineering student and Java developer, I've developed expertise
          in various technologies and tools throughout my academic and project work.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="tech-card text-center animate-fade-in card-shine ripple-bg" 
              style={{ animationDelay: `${200 * index}ms` }}
            >
              <div className="relative">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                  {category.icon}
                </div>
                <div className="pt-10">
                  <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                  <div className="flex flex-wrap justify-center gap-2">
                    {category.skills.map((skill) => (
                      <span 
                        key={skill}
                        className="bg-muted px-3 py-1 rounded-full text-sm text-muted-foreground hover:bg-primary/20 hover:text-foreground transition-colors duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

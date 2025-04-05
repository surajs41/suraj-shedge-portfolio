
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
    <section id="skills" className="section-container">
      <h2 className="section-title text-center mx-auto">My Skills</h2>
      <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12">
        As a computer engineering student and Java developer, I've developed expertise
        in various technologies and tools throughout my academic and project work.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <div 
            key={category.title}
            className="tech-card text-center animate-fade-in" 
            style={{ animationDelay: `${200 * index}ms` }}
          >
            <div className="flex justify-center">{category.icon}</div>
            <h3 className="text-xl font-bold mb-4">{category.title}</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {category.skills.map((skill) => (
                <span 
                  key={skill}
                  className="bg-muted px-3 py-1 rounded-full text-sm text-muted-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

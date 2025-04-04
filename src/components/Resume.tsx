
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Resume = () => {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Engineering",
      institution: "University Institute of Technology",
      period: "2020 - 2024",
      description:
        "Pursuing a degree in Computer Engineering with a focus on software development and systems engineering.",
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Maharashtra State Board",
      period: "2018 - 2020",
      description:
        "Completed HSC with Science stream, focusing on Physics, Chemistry, and Mathematics.",
    },
  ];

  const certifications = [
    {
      title: "Java Programming: Advanced Concepts",
      issuer: "Coursera",
      date: "2023",
    },
    {
      title: "Database Management Systems",
      issuer: "Oracle Academy",
      date: "2022",
    },
    {
      title: "Web Development Fundamentals",
      issuer: "Udemy",
      date: "2021",
    },
  ];

  const achievements = [
    "3rd place in State-level Coding Competition (2022)",
    "Winner of College Project Exhibition (2021)",
    "Participated in National Hackathon (2023)",
  ];

  return (
    <section id="resume" className="section-container">
      <div className="flex flex-col md:flex-row justify-between items-center mb-12">
        <h2 className="section-title">Resume</h2>
        <Button asChild className="mt-6 md:mt-0 rounded-full">
          <a href="#" download>
            <Download className="mr-2 h-4 w-4" />
            Download CV
          </a>
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Education */}
        <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <span className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center mr-3 text-primary">
              1
            </span>
            Education
          </h3>
          <div className="space-y-8">
            {education.map((item, index) => (
              <div key={index} className="border-l-2 border-primary/30 pl-5 pb-1 relative">
                <div className="absolute w-3 h-3 bg-primary rounded-full -left-[6.5px] top-2"></div>
                <h4 className="text-xl font-semibold">{item.degree}</h4>
                <p className="text-primary text-sm font-medium my-1">{item.institution}</p>
                <p className="text-muted-foreground text-sm mb-2">{item.period}</p>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-12">
          {/* Certifications */}
          <div className="animate-fade-in" style={{ animationDelay: "400ms" }}>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <span className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center mr-3 text-primary">
                2
              </span>
              Certifications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-card p-4 rounded-lg border border-border shadow-sm"
                >
                  <h4 className="font-semibold">{cert.title}</h4>
                  <div className="text-sm text-muted-foreground mt-1">
                    <p>{cert.issuer}</p>
                    <p>{cert.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="animate-fade-in" style={{ animationDelay: "600ms" }}>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <span className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center mr-3 text-primary">
                3
              </span>
              Achievements
            </h3>
            <ul className="space-y-2">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex items-start">
                  <div className="min-w-[8px] h-2 bg-primary mt-2 mr-3 rounded-full"></div>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;

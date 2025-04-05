
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Resume = () => {
  const education = [
    {
      degree: "Bachelor of Engineering in Computer Engineering",
      institution: "Dr. D Y Patil School of Engineering and Technology, Pune",
      period: "August 2021 - Present",
      description: "SGPA: 7.81",
    },
    {
      degree: "12th HSC Science",
      institution: "Shri Bhairavnath Junior College, Pune",
      period: "July 2019 - June 2021",
      description: "Percentage: 78.33%",
    },
    {
      degree: "10th SSC",
      institution: "Priyadarshani English Medium School, Pune",
      period: "June 2007 - June 2019",
      description: "Percentage: 66.40%",
    },
  ];

  const experience = [
    {
      title: "Java Developer Intern",
      company: "Novillex Technologies Pvt Ltd, Pune",
      period: "Jan 2024 - Mar 2024",
      achievements: [
        "Developed and optimized database queries in Hospital and Library Management Systems, reducing data retrieval time by 35%.",
        "Designed scalable database structures to enhance system performance by 40%.",
        "Revamped UI/UX, improving user engagement by 25%.",
        "Collaborated with cross-functional teams to debug and refine functionalities, increasing system stability by 30%."
      ],
    }
  ];

  const projects = [
    {
      title: "Hospital Management System",
      period: "Aug 2024 - Dec 2024",
      description: [
        "Developed a web-based hospital management system to streamline patient registration, doctor appointments, and billing.",
        "Designed and implemented secure user authentication and role-based access control (Admin, Doctor, Patient).",
        "Integrated MySQL database for efficient data storage and retrieval."
      ]
    },
    {
      title: "Online Bike Rental System",
      period: "Mar 2023 - Nov 2023",
      description: [
        "Engineered a user-friendly rental system using HTML, CSS, MySQL, and Python, increasing user retention by 30%.",
        "Integrated a secure payment gateway facilitating 100+ transactions per day.",
        "Enhanced backend database operations, minimizing booking failures by 20%."
      ]
    }
  ];

  const volunteer = [
    {
      organization: "NSS Volunteer",
      period: "Aug 2021 - Present",
      activities: [
        "Led 10+ tree plantation drives, increasing campus greenery by 20%.",
        "Organized 5+ blood donation camps, collecting 300+ units of blood for healthcare initiatives."
      ]
    }
  ];

  const certifications = [
    {
      title: "Full-Stack Java Developer - (HTML, CSS, Java, MySQL, Hibernate, JDBC)",
      issuer: "",
      date: "Mar 2024 - Nov 2024",
    },
    {
      title: "TCS iON Career Edge - Communication, Presentation, and Soft Skills",
      issuer: "",
      date: "Feb 2023 - Apr 2023",
    },
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
          {/* Experience */}
          <div className="animate-fade-in" style={{ animationDelay: "400ms" }}>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <span className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center mr-3 text-primary">
                2
              </span>
              Work Experience
            </h3>
            {experience.map((exp, index) => (
              <div key={index} className="mb-6 border-l-2 border-primary/30 pl-5 relative">
                <div className="absolute w-3 h-3 bg-primary rounded-full -left-[6.5px] top-2"></div>
                <h4 className="text-xl font-semibold">{exp.title}</h4>
                <p className="text-primary text-sm font-medium my-1">{exp.company}</p>
                <p className="text-muted-foreground text-sm mb-2">{exp.period}</p>
                <ul className="list-disc pl-4 space-y-1 text-muted-foreground">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Projects */}
          <div className="animate-fade-in" style={{ animationDelay: "600ms" }}>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <span className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center mr-3 text-primary">
                3
              </span>
              Projects
            </h3>
            {projects.map((project, index) => (
              <div key={index} className="mb-6 border-l-2 border-primary/30 pl-5 relative">
                <div className="absolute w-3 h-3 bg-primary rounded-full -left-[6.5px] top-2"></div>
                <h4 className="text-xl font-semibold">{project.title}</h4>
                <p className="text-muted-foreground text-sm mb-2">{project.period}</p>
                <ul className="list-disc pl-4 space-y-1 text-muted-foreground">
                  {project.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
        {/* Volunteer Work */}
        <div className="animate-fade-in" style={{ animationDelay: "800ms" }}>
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <span className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center mr-3 text-primary">
              4
            </span>
            Volunteer Work
          </h3>
          {volunteer.map((vol, index) => (
            <div key={index} className="mb-6 border-l-2 border-primary/30 pl-5 relative">
              <div className="absolute w-3 h-3 bg-primary rounded-full -left-[6.5px] top-2"></div>
              <h4 className="text-xl font-semibold">{vol.organization}</h4>
              <p className="text-muted-foreground text-sm mb-2">{vol.period}</p>
              <ul className="list-disc pl-4 space-y-1 text-muted-foreground">
                {vol.activities.map((activity, i) => (
                  <li key={i}>{activity}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="animate-fade-in" style={{ animationDelay: "1000ms" }}>
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <span className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center mr-3 text-primary">
              5
            </span>
            Certifications
          </h3>
          <div className="space-y-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-card p-4 rounded-lg border border-border shadow-sm"
              >
                <h4 className="font-semibold">{cert.title}</h4>
                <p className="text-sm text-muted-foreground mt-1">{cert.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;

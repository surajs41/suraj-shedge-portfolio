
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { Sun, Moon, Github, Linkedin, Mail } from "lucide-react";

const Index = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Header with Theme Toggle */}
      <header className="container mx-auto p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Suraj Shedge</h1>
        <Button variant="ghost" size="icon" onClick={toggleTheme}>
          {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
        </Button>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Hello, I'm Suraj Shedge</h1>
          <p className="text-xl md:text-2xl mb-8">Full Stack Developer & UI/UX Enthusiast</p>
          <Button className="mr-4">View Projects</Button>
          <Button variant="outline">Contact Me</Button>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto py-16 px-4 bg-secondary/20 rounded-lg my-8">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg mb-6">
            I'm a passionate developer with experience in building web applications using modern technologies.
            My focus is on creating intuitive user experiences with clean and maintainable code.
          </p>
          <p className="text-lg">
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
            or enjoying outdoor activities.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-4">Frontend</h3>
              <ul className="space-y-2">
                <li>React & Next.js</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
                <li>HTML & CSS</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-4">Backend</h3>
              <ul className="space-y-2">
                <li>Node.js</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>PostgreSQL</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-4">Tools</h3>
              <ul className="space-y-2">
                <li>Git & GitHub</li>
                <li>Docker</li>
                <li>AWS</li>
                <li>CI/CD Pipelines</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Projects Section */}
      <section className="container mx-auto py-16 px-4 bg-secondary/20 rounded-lg my-8">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2, 3, 4].map((item) => (
            <Card key={item} className="overflow-hidden">
              <div className="bg-muted h-48 flex items-center justify-center">
                <p className="text-muted-foreground">Project Image {item}</p>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Project Title {item}</h3>
                <p className="mb-4">A brief description of the project and the technologies used.</p>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">Demo</Button>
                  <Button variant="outline" size="sm">Code</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
        <div className="max-w-md mx-auto flex flex-col items-center space-y-6">
          <Button variant="outline" className="w-full flex items-center justify-center space-x-2">
            <Mail className="h-5 w-5" />
            <span>shedge.suraj@example.com</span>
          </Button>
          <Button variant="outline" className="w-full flex items-center justify-center space-x-2">
            <Github className="h-5 w-5" />
            <span>github.com/suraj-shedge</span>
          </Button>
          <Button variant="outline" className="w-full flex items-center justify-center space-x-2">
            <Linkedin className="h-5 w-5" />
            <span>linkedin.com/in/suraj-shedge</span>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto py-8 px-4 border-t">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Suraj Shedge. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Index;

import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-2xl animate-bounce delay-500" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-balance text-foreground">
              Hi, I'm <span className="text-primary">Vincent Mutuku</span>
            </h1>

            <p className="text-xl sm:text-2xl text-muted-foreground text-balance animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
              Full Stack Developer & Problem Solver
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
              I craft modern web applications with clean code, intuitive design,
              and cutting-edge technologies. Passionate about creating digital
              experiences that make a difference.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-700">
            <Button
              size="lg"
              className="text-lg px-8 py-6 group relative overflow-hidden"
              asChild
            >
              <a href="#contact">
                <span className="relative z-10">Get In Touch</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 bg-transparent hover:bg-primary/5 group"
              asChild
            >
              <a href="#projects">
                <span>View My Work</span>
                <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform duration-300" />
              </a>
            </Button>
            <Button
              variant="secondary"
              size="lg"
              className="text-lg px-8 py-6 group"
              asChild
            >
              <a href="/resume.pdf" download>
                <Download className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                Resume
              </a>
            </Button>
          </div>

          <div className="flex justify-center space-x-6 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-1000">
            <Button
              variant="ghost"
              size="icon"
              className="h-12 w-12 group relative"
              asChild
            >
              <a
                href="https://github.com/vin-devs"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                <span className="sr-only">GitHub</span>
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-popover text-popover-foreground px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  GitHub
                </div>
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-12 w-12 group relative"
              asChild
            >
              <a
                href="https://linkedin.com/in/vincent-wambua"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                <span className="sr-only">LinkedIn</span>
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-popover text-popover-foreground px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  LinkedIn
                </div>
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-12 w-12 group relative"
              asChild
            >
              <a href="mailto:vmutuku706@gmail.com">
                <Mail className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                <span className="sr-only">Email</span>
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-popover text-popover-foreground px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Email
                </div>
              </a>
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="relative">
            <ArrowDown className="h-6 w-6 text-muted-foreground" />
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-md animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Code2, Layers } from "lucide-react";

// --- THE MISSING PIECE: YOUR DATA ---
const projects = [
  {
    title: "MarketBaseX Premium MERN E-Commerce Ecosystem",
    description:
      "A high-performance storefront featuring JWT-based security and a signature dark-mode UI. Engineered for scalability with RTK Query and integrated with Stripe for PCI-compliant financial transactions.",
    image: "/marketbasex-hero.png",
    tech: [
      "Express.js",
      "React",
      "Stripe",
      "MongoDB",
      "Node.js",
      "Redux Toolkit",
    ],
    github: "https://github.com/vin-devs/marketbasex",
    demo: "https://marketbasex.vercel.app",
    featured: true,
  },
  {
    title: "LearnHub Next.js 15 Digital Learning Platform",
    description:
      "A modern educational marketplace for digital courses and books. Features real-time Zod-validated search, persistent Zustand state management, and a multi-channel payment gateway supporting M-Pesa STK Push and PayPal.",
    image: "/learnhub-hero.png",
    tech: [
      "Next.js 15",
      "TypeScript",
      "Tailwind v4",
      "Zustand",
      "M-Pesa API",
      "PayPal",
    ],
    github: "https://github.com/vin-devs/learnsite",
    demo: "https://eccomerce-learnsite.netlify.app/",
    featured: true,
  },
  {
    title: "Weather Analytics Dashboard",
    description:
      "A data visualization dashboard that displays weather patterns and analytics with interactive charts.",
    image: "/weather-analytics-dashboard-with-graphs-and-data-v.jpg",
    tech: ["React", "D3.js", "Python", "FastAPI", "Chart.js"],
    github: "https://github.com/vincentmutuku/weather-dashboard",
    demo: "https://weather-analytics.vercel.app",
    featured: false,
  },
  {
    title: "Social Media API",
    description:
      "A RESTful API for a social media platform with authentication, posts, comments, and real-time notifications.",
    image: "/api-documentation-interface-with-code-examples-and.jpg",
    tech: ["Node.js", "Express", "JWT", "Redis", "PostgreSQL"],
    github: "https://github.com/vincentmutuku/social-api",
    demo: "https://social-api-docs.vercel.app",
    featured: false,
  },
  {
    title: "Portfolio Website",
    description:
      "A responsive portfolio website built with modern web technologies and optimized for performance.",
    image: "/modern-portfolio-website-with-dark-theme-and-profe.jpg",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
    github: "https://github.com/vincentmutuku/portfolio",
    demo: "https://vincentmutuku.dev",
    featured: false,
  },
];

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-24 bg-background/50 relative overflow-hidden"
    >
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-2 text-left">
            <Badge
              variant="outline"
              className="text-primary border-primary/20 bg-primary/5 px-4 py-1"
            >
              My Portfolio
            </Badge>
            <h2 className="text-4xl font-black tracking-tight text-foreground uppercase">
              Featured <span className="text-primary">Work</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md text-left md:text-right border-l-2 md:border-l-0 md:border-r-2 border-primary/20 pl-4 md:pl-0 md:pr-4">
            A selection of high-performance applications focused on user
            experience and scalable architecture.
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-10 mb-20 text-left">
          {projects
            .filter((p) => p.featured)
            .map((project, i) => (
              <Card
                key={i}
                className="group relative overflow-hidden border border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Theme-aware Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60 transition-opacity duration-500" />

                  {/* Action Buttons on Hover */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-[2px] bg-background/20">
                    <Button
                      size="sm"
                      variant="secondary"
                      className="rounded-full shadow-xl"
                      asChild
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4 mr-2" /> Code
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      className="rounded-full shadow-xl"
                      asChild
                    >
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" /> Demo
                      </a>
                    </Button>
                  </div>
                </div>

                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <Layers className="h-5 w-5 text-muted-foreground/30" />
                  </div>
                  <CardDescription className="text-muted-foreground text-base leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-bold uppercase tracking-widest text-primary/70 bg-primary/5 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>

        {/* Other Projects - Compact Bento Grid */}
        <div className="space-y-8 text-left">
          <div className="flex items-center gap-4">
            <h3 className="text-xl font-bold text-foreground shrink-0">
              Other Notable Projects
            </h3>
            <div className="h-[1px] w-full bg-border" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects
              .filter((p) => !p.featured)
              .map((project, i) => (
                <Card
                  key={i}
                  className="flex flex-col group border-border/40 bg-card hover:bg-accent/5 transition-all duration-300 hover:-translate-y-1"
                >
                  <CardHeader className="flex-1">
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary">
                        <Code2 className="h-5 w-5" />
                      </div>
                      <div className="flex gap-2">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Github className="h-5 w-5" />
                        </a>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          <ExternalLink className="h-5 w-5" />
                        </a>
                      </div>
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-sm line-clamp-2">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="text-[9px] text-muted-foreground border border-border px-1.5 py-0.5 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="text-[9px] text-muted-foreground px-1.5 py-0.5">
                          + {project.tech.length - 3} more
                        </span>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

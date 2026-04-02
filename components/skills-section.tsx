import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Layout, Server, Wrench, Award, CheckCircle2 } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Engineering",
    icon: Layout,
    description: "Building responsive, high-performance user interfaces.",
    skills: [
      { name: "React / Next.js 15", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Framer Motion", level: 85 },
    ],
  },
  {
    title: "Backend & Dev Ops",
    icon: Server,
    description: "Architecting scalable APIs and cloud infrastructure.",
    skills: [
      { name: "Node.js / Express", level: 90 },
      { name: "PostgreSQL / MongoDB", level: 88 },
      { name: "Docker & AWS", level: 75 },
      { name: "Payment Gateways (M-Pesa/Stripe)", level: 92 },
    ],
  },
];

const certifications = [
  "AWS Certified Developer",
  "React Professional",
  "Node.js Certified",
  "MongoDB Associate",
];

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-24 bg-background relative overflow-hidden"
    >
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-left mb-16 space-y-4">
          <Badge
            variant="outline"
            className="text-primary border-primary/20 bg-primary/5 px-4 py-1"
          >
            Expertise
          </Badge>
          <h2 className="text-4xl font-black tracking-tight uppercase">
            Technical <span className="text-primary">Arsenal</span>
          </h2>
          <p className="text-muted-foreground max-w-xl text-lg">
            I specialize in the TypeScript ecosystem, focusing on performance,
            security, and scalable architecture.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {/* Main Categories */}
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="lg:col-span-1 border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300"
            >
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-2xl bg-primary/10 text-primary">
                    <category.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>

                <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
                  {category.description}
                </p>

                <div className="space-y-6">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-3 group">
                      <div className="flex justify-between items-end">
                        <span className="text-sm font-bold tracking-tight group-hover:text-primary transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-[10px] font-mono text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary rounded-full transition-all duration-1000 ease-in-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Specialized Tools Card (Bento Style) */}
          <Card className="lg:col-span-1 border-border/50 bg-primary text-primary-foreground shadow-2xl shadow-primary/20">
            <CardContent className="p-8 flex flex-col h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-2xl bg-white/20">
                  <Wrench className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  Workflow & Tools
                </h3>
              </div>

              <div className="flex-1 space-y-4">
                {[
                  "Git & GitHub",
                  "Docker",
                  "Vercel / Netlify",
                  "Figma",
                  "Redux / Zustand",
                  "Postman",
                ].map((tool) => (
                  <div key={tool} className="flex items-center gap-3">
                    <CheckCircle2 className="h-4 w-4 text-white/60" />
                    <span className="text-sm font-medium">{tool}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-white/10">
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-white/80" />
                  <span className="text-xs font-bold uppercase tracking-wider">
                    Certifications
                  </span>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {certifications.slice(0, 2).map((cert) => (
                    <span
                      key={cert}
                      className="text-[9px] bg-white/10 px-2 py-1 rounded-md border border-white/10"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

import { Card, CardContent } from "@/components/ui/card";
import { Code, Rocket, ShieldCheck, Cpu } from "lucide-react";

export function AboutSection() {
  const techStack = [
    "React",
    "Next.js 15",
    "Node.js",
    "MongoDB",
    "TypeScript",
    "Tailwind",
  ];

  return (
    // Changed: Used bg-background instead of hardcoded hex
    <section
      id="about"
      className="py-24 bg-background transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {/* Changed: text-foreground ensures it turns black in light mode */}
          <h2 className="text-4xl font-black mb-4 tracking-tighter text-foreground uppercase">
            The Architect <span className="text-primary">Behind the Code</span>
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side with Adaptive Glow */}
          <div className="relative group">
            {/* The glow now uses primary/accent colors which usually adapt well */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative aspect-square w-full max-w-md mx-auto rounded-2xl overflow-hidden bg-muted border border-border">
              <img
                src="/vincent2.png"
                alt="Vincent Mutuku - Full Stack Engineer"
                // Kept the grayscale hover—it looks great in both modes!
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>

          {/* Text Side */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary">
                Software Engineer & Problem Solver
              </h3>
              {/* Changed: muted-foreground for better readability in light mode */}
              <p className="text-muted-foreground leading-relaxed text-lg">
                I am a{" "}
                <span className="text-foreground font-bold">
                  Full-Stack Software Engineer
                </span>{" "}
                dedicated to building high-performance web ecosystems. With over
                3 years of experience, I specialize in the{" "}
                <span className="text-foreground font-bold">MERN Stack</span>{" "}
                and{" "}
                <span className="text-foreground font-bold">Next.js 15</span>,
                transforming complex business requirements into seamless digital
                experiences.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                My focus lies at the intersection of{" "}
                <span className="italic">Security and Scalability</span>.
                Whether it's integrating encrypted payment gateways like
                **Stripe and M-Pesa** or architecting real-time state
                management, I build with a "production-first" mindset.
              </p>
            </div>

            {/* Core Values Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {/* Changed: Using bg-card and border-border for theme-awareness */}
              {[
                {
                  icon: Cpu,
                  title: "Performant Architecture",
                  desc: "Optimizing for speed, SEO, and core web vitals through efficient SSR and caching.",
                },
                {
                  icon: ShieldCheck,
                  title: "Secure Systems",
                  desc: "Implementing JWT, HTTP-only cookies, and encrypted payment flows (Stripe/M-Pesa).",
                },
              ].map((card, i) => (
                <div
                  key={i}
                  className="p-5 rounded-xl bg-card border border-border hover:border-primary/50 transition-all group/card shadow-sm"
                >
                  <card.icon className="h-6 w-6 mb-3 text-primary group-hover/card:scale-110 transition-transform" />
                  <h4 className="font-bold mb-1 text-card-foreground text-sm">
                    {card.title}
                  </h4>
                  <p className="text-[11px] leading-relaxed text-muted-foreground">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Tech Pills */}
            <div className="flex flex-wrap gap-2 pt-4">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-wider rounded-full hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

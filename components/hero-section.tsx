"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Download, Zap, Cpu } from "lucide-react";

export function HeroSection() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background pt-20"
    >
      {/* --- THE VIRTUAL ARCHITECTURE (Background) --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/20 rounded-full blur-[120px] opacity-70" />
        <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-accent/15 rounded-full blur-[100px] animate-pulse-slow" />
      </div>

      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center space-y-10">
          {/* 1. The Signature Label (The "Silent" Identity) */}
          <div className="animate-reveal">
            <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.6em] text-primary/60 mb-2">
              Vincent Mutuku — Full Stack Solutions Architect
            </p>
            <div className="h-[1px] w-12 bg-primary/30 mx-auto" />
          </div>

          {/* 2. Status & Expert Badges */}
          <div className="flex flex-wrap justify-center gap-3 animate-reveal [animation-delay:150ms]">
            <Badge
              variant="outline"
              className="bg-background/50 backdrop-blur-md border-primary/20 text-primary px-4 py-1.5 rounded-full flex gap-2 items-center"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Available for Q3 2026 Projects
            </Badge>
            <Badge
              variant="secondary"
              className="bg-muted/50 backdrop-blur-md px-4 py-1.5 rounded-full flex gap-2 items-center"
            >
              <Cpu className="h-3.5 w-3.5" />
              Next.js 15 Expert
            </Badge>
          </div>

          {/* 3. The Core Value Proposition */}
          <div className="space-y-6 max-w-4xl">
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] lg:leading-[0.85] animate-reveal [animation-delay:300ms]">
              BUILDING THE <br />
              <span className="text-gradient">FUTURE OF WEB</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground font-medium max-w-2xl mx-auto leading-relaxed italic animate-reveal [animation-delay:450ms]">
              "Turning complex architectural visions into high-performance,
              full-stack realities."
            </p>
          </div>

          {/* 4. The Tech Ribbon (3-Second Scan) */}
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground/60 border-y border-border/50 py-5 w-full max-w-3xl animate-reveal [animation-delay:600ms]">
            <span className="hover:text-primary transition-colors cursor-default">
              React 19
            </span>
            <span className="text-primary/20">•</span>
            <span className="hover:text-primary transition-colors cursor-default">
              TypeScript
            </span>
            <span className="text-primary/20">•</span>
            <span className="hover:text-primary transition-colors cursor-default">
              MERN Stack
            </span>
            <span className="text-primary/20">•</span>
            <span className="hover:text-primary transition-colors cursor-default">
              Stripe & M-Pesa
            </span>
            <span className="text-primary/20">•</span>
            <span className="hover:text-primary transition-colors cursor-default">
              AWS Cloud
            </span>
          </div>

          {/* 5. Direct Action Group */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-reveal [animation-delay:750ms]">
            <Button
              size="lg"
              className="h-14 px-10 rounded-2xl font-bold text-lg bg-primary shadow-2xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 transition-all group"
              asChild
            >
              <a href="#contact">
                Start a Project
                <Zap className="ml-2 h-5 w-5 fill-current transition-transform group-hover:scale-125" />
              </a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="h-14 px-10 rounded-2xl font-bold text-lg backdrop-blur-md border-border/50 hover:bg-muted/50 transition-all"
              asChild
            >
              <a href="#projects">Browse Gallery</a>
            </Button>
          </div>

          {/* 6. Social Footprint */}
          <div className="flex items-center gap-6 pt-4 animate-reveal [animation-delay:900ms]">
            {[
              {
                icon: Github,
                href: "https://github.com/vin-devs",
                label: "GitHub",
              },
              {
                icon: Linkedin,
                href: "https://linkedin.com/in/vincent-wambua",
                label: "LinkedIn",
              },
              {
                icon: Mail,
                href: "mailto:vmutuku706@gmail.com",
                label: "Email",
              },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all duration-300 transform hover:scale-125"
                aria-label={social.label}
              >
                <social.icon className="h-6 w-6" />
              </a>
            ))}
            <div className="h-[1px] w-12 bg-border/50 hidden sm:block" />
            <a
              href="/resume.pdf"
              className="text-xs font-black uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
            >
              <Download className="h-4 w-4 group-hover:animate-bounce" />
              Get CV
            </a>
          </div>
        </div>
      </div>

      {/* Modernized Scroll Indicator */}
      <div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity cursor-pointer group"
        onClick={scrollToAbout}
      >
        <span className="text-[10px] font-black uppercase tracking-[0.3em] rotate-180 [writing-mode:vertical-lr]">
          Scroll
        </span>
        <div className="w-[2px] h-12 bg-muted relative overflow-hidden rounded-full">
          <div className="absolute top-0 left-0 w-full h-1/3 bg-primary rounded-full animate-scroll-dot" />
        </div>
      </div>
    </section>
  );
}

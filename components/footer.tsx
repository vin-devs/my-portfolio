"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Heart, ArrowUp, Zap } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/vin-devs", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/vincent-wambua",
      label: "LinkedIn",
    },
    { icon: Mail, href: "mailto:vmutuku706@gmail.com", label: "Email" },
  ];

  return (
    <footer className="relative bg-background border-t border-border/40 py-20 overflow-hidden">
      {/* Background Decorative Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-6 text-left">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-black">
                V
              </div>
              <h3 className="text-2xl font-black tracking-tighter uppercase">
                Vincent <span className="text-primary">Mutuku</span>
              </h3>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-sm">
              Architecting scalable digital ecosystems and high-performance web
              applications.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, i) => (
                <Button
                  key={i}
                  variant="outline"
                  size="icon"
                  className="rounded-xl hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  asChild
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon className="h-4 w-4" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 text-left">
            <h4 className="font-bold uppercase tracking-widest text-xs text-primary mb-6">
              Navigation
            </h4>
            <ul className="space-y-4">
              {["About", "Projects", "Skills", "Testimonials", "Contact"].map(
                (label) => (
                  <li key={label}>
                    <a
                      href={`#${label.toLowerCase()}`}
                      className="text-muted-foreground hover:text-foreground transition-colors duration-300 font-medium relative group"
                    >
                      {label}
                      <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full" />
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Availability Column */}
          <div className="md:col-span-4 text-left">
            <h4 className="font-bold uppercase tracking-widest text-xs text-primary mb-6">
              Current Status
            </h4>
            <div className="p-6 rounded-2xl bg-card border border-border/50 space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                <span className="text-sm font-bold uppercase tracking-tight">
                  Available for hire
                </span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Open to Full-time roles, Freelance projects, and Technical
                Consulting.
              </p>
              <Button
                variant="link"
                className="p-0 h-auto text-primary text-xs"
                asChild
              >
                <a href="#contact">Hire the Architect →</a>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/40">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="space-y-1 text-center md:text-left">
              <p className="text-sm text-muted-foreground flex items-center gap-1.5">
                © {currentYear} • Handcrafted with{" "}
                <Heart className="h-3 w-3 text-primary fill-primary" /> in
                Nairobi, Kenya
              </p>
              <div className="flex items-center justify-center md:justify-start gap-2 text-[10px] uppercase tracking-tighter text-muted-foreground/60">
                <Zap className="h-3 w-3" />
                <span>Optimized for performance</span>
                <span className="opacity-30">|</span>
                <span>Next.js 15 + Tailwind</span>
              </div>
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={scrollToTop}
              className="rounded-full h-12 w-12 group hover:border-primary transition-colors"
            >
              <ArrowUp className="h-5 w-5 group-hover:-translate-y-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}

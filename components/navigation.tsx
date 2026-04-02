"use client";

import { useState, useEffect } from "react";
import { Home, User, Briefcase, Code, Mail, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      const sections = ["home", "about", "projects", "skills", "contact"];
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#home", label: "Home", icon: Home },
    { href: "#about", label: "About", icon: User },
    { href: "#projects", label: "Projects", icon: Briefcase },
    { href: "#skills", label: "Skills", icon: Code },
    { href: "#contact", label: "Contact", icon: Mail },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      window.scrollTo({
        top: elementRect - bodyRect - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-500",
          scrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border/40 py-3"
            : "bg-transparent py-6",
        )}
      >
        {/* Progress bar with Glow */}
        <div
          className="absolute top-0 left-0 h-[2px] bg-primary shadow-[0_0_10px_rgba(var(--primary),0.5)] transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />

        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-10">
            {/* Logo: The Architect Signature */}
            <div
              className="flex flex-col cursor-pointer group"
              onClick={() => handleNavClick("#home")}
            >
              <span className="text-sm font-black tracking-[0.4em] uppercase">
                V. Mutuku
              </span>
              <span className="text-[9px] font-bold tracking-[0.2em] text-primary/60 uppercase transition-opacity group-hover:text-primary">
                Solutions Architect
              </span>
            </div>

            {/* Desktop Navigation: Minimalist Pill */}
            <div className="hidden md:flex items-center gap-1 px-1.5 py-1 bg-muted/20 rounded-full border border-border/40 backdrop-blur-md">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.slice(1);
                return (
                  <button
                    key={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className={cn(
                      "px-5 py-2 rounded-full text-[11px] font-black uppercase tracking-widest transition-all duration-300",
                      isActive
                        ? "bg-primary text-primary-foreground shadow-lg"
                        : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>

            <div className="flex items-center gap-3">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden rounded-xl bg-muted/20"
              >
                {isOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={cn(
            "md:hidden absolute top-full left-0 w-full bg-background/98 backdrop-blur-2xl border-b border-border/50 transition-all duration-500 ease-in-out overflow-hidden",
            isOpen ? "max-h-screen opacity-100 py-8" : "max-h-0 opacity-0",
          )}
        >
          <div className="px-6 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.href}
                className={cn(
                  "w-full flex items-center justify-between p-4 text-xs font-black uppercase tracking-[0.3em] rounded-2xl transition-all",
                  activeSection === item.href.slice(1)
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted/30 text-muted-foreground",
                )}
                onClick={() => handleNavClick(item.href)}
              >
                {item.label}
                <item.icon className="h-4 w-4" />
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Side Dot Indicator: Vertical Architect Ruler */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center gap-6">
        <div className="w-[1px] h-20 bg-gradient-to-t from-primary/40 to-transparent" />
        {navItems.map((item) => {
          const isActive = activeSection === item.href.slice(1);
          return (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className="group relative flex items-center justify-center"
            >
              <span
                className={cn(
                  "absolute right-8 text-[9px] font-black uppercase tracking-[0.3em] transition-all duration-300 opacity-0 translate-x-4 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0",
                  isActive ? "text-primary" : "text-muted-foreground",
                )}
              >
                {item.label}
              </span>
              <div
                className={cn(
                  "transition-all duration-500 rounded-full",
                  isActive
                    ? "w-2.5 h-2.5 bg-primary ring-4 ring-primary/20"
                    : "w-1.5 h-1.5 bg-muted group-hover:bg-primary/50",
                )}
              />
            </button>
          );
        })}
        <div className="w-[1px] h-20 bg-gradient-to-b from-primary/40 to-transparent" />
      </div>
    </>
  );
}

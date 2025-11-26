"use client";

import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";

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

  const quickLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-muted/50 to-muted/30 py-16 overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(120,119,198,0.2),transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_70%,rgba(236,72,153,0.2),transparent_50%)]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-primary dark:text-accent">
              Vincent Mutuku
            </h3>
            <p className="text-muted-foreground mb-6 text-pretty max-w-md">
              Full Stack Developer passionate about creating exceptional digital
              experiences. Let's build something amazing together.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="icon"
                  className="group hover:scale-110 transition-all duration-300 bg-transparent"
                  asChild
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon className="h-4 w-4 group-hover:text-primary transition-colors duration-300" />
                    <span className="sr-only">{social.label}</span>
                  </a>
                </Button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Button
                    variant="ghost"
                    className="p-0 h-auto text-muted-foreground hover:text-primary transition-colors duration-300"
                    onClick={() => {
                      const element = document.querySelector(link.href);
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >
                    {link.label}
                  </Button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>vmutuku706@gmail.com</p>
              <p>+254 114 644 670</p>
              <p>Nairobi, Kenya</p>
              <div className="mt-4 flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-xs">Available for projects</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-muted-foreground flex items-center justify-center md:justify-start">
                © {currentYear} Vincent Mutuku. Made with{" "}
                <Heart className="h-4 w-4 mx-1 text-red-500 animate-pulse" />
                in Kenya
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Built with Next.js and Tailwind CSS
              </p>
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={scrollToTop}
              className="group hover:scale-110 transition-all duration-300 bg-transparent"
            >
              <ArrowUp className="h-4 w-4 group-hover:-translate-y-1 transition-transform duration-300" />
              <span className="sr-only">Scroll to top</span>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "TechCorp",
    image: "/professional-woman-headshot.png",
    content:
      "Vincent delivered an exceptional web application that exceeded our expectations. His attention to detail and technical expertise made the entire process smooth and efficient.",
    project: "E-commerce Platform",
    linkedin: "#", // Add real links if you have them
  },
  {
    name: "Michael Chen",
    role: "Startup Founder",
    company: "InnovateLab",
    image: "/professional-man-headshot.png",
    content:
      "Working with Vincent was a game-changer for our startup. He transformed our ideas into a beautiful, functional product that our users love.",
    project: "Task Management App",
    linkedin: "#",
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director",
    company: "GrowthCo",
    image: "/professional-woman-headshot.png",
    content:
      "Vincent's expertise in both frontend and backend development allowed us to launch our platform ahead of schedule. Highly recommended!",
    project: "Analytics Dashboard",
    linkedin: "#",
  },
];

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="py-24 bg-background relative overflow-hidden"
    >
      {/* Dynamic Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-6xl pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-left mb-16 space-y-4">
          <Badge
            variant="outline"
            className="text-primary border-primary/20 bg-primary/5 px-4 py-1"
          >
            Social Proof
          </Badge>
          <h2 className="text-4xl font-black tracking-tight uppercase">
            Client <span className="text-primary">Success Stories</span>
          </h2>
          <p className="text-muted-foreground max-w-xl text-lg">
            Real feedback from partners and clients I've collaborated with to
            build scalable digital solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="group relative border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-primary/10"
            >
              {/* Decorative Quote Icon */}
              <Quote className="absolute top-6 right-6 h-10 w-10 text-primary/10 group-hover:text-primary/20 transition-colors" />

              <CardContent className="p-8">
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-3.5 w-3.5 fill-primary text-primary"
                    />
                  ))}
                </div>

                <blockquote className="text-muted-foreground mb-8 italic leading-relaxed text-balance">
                  "{testimonial.content}"
                </blockquote>

                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 ring-2 ring-border group-hover:ring-primary/50"
                    />
                    <div className="absolute -bottom-1 -right-1 bg-background rounded-full p-0.5">
                      <CheckCircle2 className="h-4 w-4 text-primary fill-background" />
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-foreground text-sm">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.role} @ {testimonial.company}
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-border/50 flex justify-between items-center">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary/70 bg-primary/5 px-2 py-1 rounded">
                    {testimonial.project}
                  </span>
                  <a
                    href={testimonial.linkedin}
                    className="text-[10px] font-medium text-muted-foreground hover:text-primary transition-colors underline underline-offset-4"
                  >
                    LinkedIn Profile
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 p-12 rounded-3xl bg-primary text-primary-foreground relative overflow-hidden group shadow-2xl shadow-primary/20">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left space-y-2">
              <h3 className="text-3xl font-black uppercase tracking-tight">
                Have a vision in mind?
              </h3>
              <p className="text-primary-foreground/80 max-w-md">
                Let's discuss how we can build your next high-performance web
                application.
              </p>
            </div>

            <Button
              size="lg"
              variant="secondary"
              className="rounded-full h-14 px-10 text-lg font-bold shadow-xl hover:-translate-y-1 transition-all"
              asChild
            >
              <a href="#contact">Start a Conversation</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

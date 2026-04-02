"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  MapPin,
  Phone,
  Github,
  Linkedin,
  Twitter,
  Send,
  CheckCircle,
  Clock,
  Calendar,
  ShieldCheck,
} from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    _honeypot: "",
  });
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData._honeypot) return; // Silent fail for bots

    setStatus("submitting");

    try {
      // FULL-STACK TIP: Use a service like Web3Forms or Formspree
      // Or your own Next.js API route: await fetch('/api/contact', { ... })
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "YOUR_ACCESS_KEY_HERE", // Get one free at web3forms.com
          ...formData,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
          _honeypot: "",
        });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="py-24 bg-background relative overflow-hidden"
    >
      {/* Background Blobs - Unified with previous sections */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="space-y-2">
            <Badge
              variant="outline"
              className="text-primary border-primary/20 bg-primary/5 px-4 py-1"
            >
              Contact
            </Badge>
            <h2 className="text-4xl font-black tracking-tight text-foreground uppercase">
              Let's build <span className="text-primary">Together</span>
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-2 text-muted-foreground text-sm">
            <ShieldCheck className="h-4 w-4 text-primary" />
            Secure & Encrypted Communication
          </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Info Side (2 Columns) */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-6">
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: "vmutuku706@gmail.com",
                  href: "mailto:vmutuku706@gmail.com",
                },
                {
                  icon: Phone,
                  label: "Phone",
                  value: "+254 114 644 670",
                  href: "tel:+254114644670",
                },
                {
                  icon: MapPin,
                  label: "Location",
                  value: "Nairobi, Kenya",
                  href: "#",
                },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-all group"
                >
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-bold uppercase tracking-wider">
                      {item.label}
                    </p>
                    <p className="text-sm font-semibold">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <Card className="border-none bg-primary text-primary-foreground">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5" />
                  <h4 className="font-bold uppercase tracking-tighter">
                    Availability
                  </h4>
                </div>
                <p className="text-sm opacity-80 leading-relaxed">
                  I'm currently accepting new projects. Typical response time is
                  within <span className="font-bold underline">24 hours</span>.
                </p>
                <div className="flex items-center gap-2 text-xs font-mono bg-black/10 p-2 rounded">
                  <Calendar className="h-4 w-4" />
                  Mon — Fri, 09:00 — 18:00 EAT
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Form Side (3 Columns) */}
          <Card className="lg:col-span-3 border-border/50 bg-card/50 backdrop-blur-sm shadow-2xl">
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>
                Have a specific project in mind? Fill out the details below.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {status === "success" ? (
                <div className="text-center py-12 space-y-4 animate-in fade-in zoom-in duration-500">
                  <div className="w-20 h-20 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="h-10 w-10" />
                  </div>
                  <h3 className="text-2xl font-bold">Message Received!</h3>
                  <p className="text-muted-foreground">
                    Check your inbox for a confirmation shortly.
                  </p>
                  <Button variant="outline" onClick={() => setStatus("idle")}>
                    Send another
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Honeypot - Hidden from humans */}
                  <input
                    type="text"
                    name="_honeypot"
                    className="hidden"
                    onChange={(e) =>
                      setFormData({ ...formData, _honeypot: e.target.value })
                    }
                  />

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="bg-background/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="bg-background/50"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      placeholder="Project Inquiry"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="bg-background/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      required
                      placeholder="Tell me about your vision..."
                      rows={6}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="bg-background/50 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full h-12 text-lg font-bold"
                  >
                    {status === "submitting" ? "Sending..." : "Deploy Message"}
                    <Send className="ml-2 h-4 w-4" />
                  </Button>

                  {status === "error" && (
                    <p className="text-xs text-destructive text-center mt-2">
                      Something went wrong. Please try again or email me
                      directly.
                    </p>
                  )}
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

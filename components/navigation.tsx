"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Home, User, Briefcase, Code, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = ["home", "about", "projects", "skills", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "#home", label: "Home", icon: Home },
    { href: "#about", label: "About", icon: User },
    { href: "#projects", label: "Projects", icon: Briefcase },
    { href: "#skills", label: "Skills", icon: Code },
    { href: "#contact", label: "Contact", icon: Mail },
  ]

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link
              href="#home"
              className="text-xl font-bold text-primary dark:text-accent hover:scale-105 transition-transform duration-300"
              onClick={() => handleNavClick("#home")}
            >
              Vincent Mutuku
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <Button
                  key={item.href}
                  variant="ghost"
                  className={`relative px-4 py-2 transition-all duration-300 ${
                    activeSection === item.href.slice(1)
                      ? "text-primary-foreground bg-primary hover:bg-primary/90"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                  onClick={() => handleNavClick(item.href)}
                >
                  <item.icon className="h-4 w-4 mr-2" />
                  {item.label}
                  {activeSection === item.href.slice(1) && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary-foreground rounded-full" />
                  )}
                </Button>
              ))}
              <div className="ml-4">
                <ThemeToggle />
              </div>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden flex items-center space-x-2">
              <ThemeToggle />
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} className="relative">
                <div className="relative w-5 h-5">
                  <Menu
                    className={`h-5 w-5 absolute transition-all duration-300 ${isOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"}`}
                  />
                  <X
                    className={`h-5 w-5 absolute transition-all duration-300 ${isOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"}`}
                  />
                </div>
              </Button>
            </div>
          </div>

          <div
            className={`md:hidden transition-all duration-300 overflow-hidden ${
              isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-xl border-b border-border/50 rounded-b-lg">
              {navItems.map((item, index) => (
                <Button
                  key={item.href}
                  variant="ghost"
                  className={`w-full justify-start transition-all duration-300 ${
                    activeSection === item.href.slice(1)
                      ? "text-primary-foreground bg-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                  onClick={() => handleNavClick(item.href)}
                >
                  <item.icon className="h-4 w-4 mr-3" />
                  {item.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 hidden xl:block">
        <div className="space-y-3">
          {navItems.map((item) => (
            <Button
              key={item.href}
              variant="ghost"
              size="icon"
              className={`w-3 h-3 rounded-full p-0 transition-all duration-300 ${
                activeSection === item.href.slice(1) ? "bg-primary scale-125" : "bg-muted hover:bg-muted-foreground/20"
              }`}
              onClick={() => handleNavClick(item.href)}
              title={item.label}
            />
          ))}
        </div>
      </div>
    </>
  )
}

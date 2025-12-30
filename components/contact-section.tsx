"use client"

import { useEffect, useRef, useState } from "react"
import { Mail, MapPin, Github, Linkedin, Code2, Send, Sparkles, Heart } from "lucide-react"

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "yubi14465@gmail.com",
    href: "mailto:yubi14465@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Addis Ababa, Ethiopia",
    href: "#",
  },
]

const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com/uvatarkind" },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/yeabsira-mekonnen-",
  },
]

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-24 lg:py-32 px-6 lg:px-24 bg-secondary/30 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto text-center relative">
        {/* Section Header */}
        <div
          className={`flex items-center justify-center gap-2 mb-4 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <Sparkles className="w-4 h-4 text-primary" />
          <h2 className="text-sm font-medium text-primary tracking-wider uppercase">Contact</h2>
        </div>
        <h3
          className={`text-3xl lg:text-5xl font-bold text-foreground mb-6 transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Let&apos;s <span className="font-serif italic text-primary">connect</span>
        </h3>
        <p
          className={`text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-12 text-lg transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          I&apos;m currently open to new opportunities and collaborations. Whether you have a question, a project idea,
          or just want to say hi, my inbox is always open. I&apos;ll try my best to get back to you!
        </p>

        {/* Contact Info Cards */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="group flex items-center gap-3 bg-card px-6 py-4 rounded-2xl border border-border hover-lift"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <link.icon className="w-5 h-5 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-xs text-muted-foreground">{link.label}</p>
                <p className="font-medium text-foreground group-hover:text-primary transition-colors">{link.value}</p>
              </div>
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href="mailto:yubi14465@gmail.com"
          className={`group inline-flex items-center gap-3 px-10 py-5 bg-primary text-primary-foreground font-semibold rounded-full hover:shadow-xl hover:shadow-primary/25 transition-all duration-500 hover:scale-105 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <Send className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          Say Hello
          <Heart className="w-4 h-4 group-hover:scale-125 transition-transform" />
        </a>

        {/* Social Links */}
        <div
          className={`flex items-center justify-center gap-4 mt-12 transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 hover:scale-110"
              aria-label={link.label}
            >
              <link.icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

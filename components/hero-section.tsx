"use client"

import Image from "next/image"
import { Github, Linkedin, Mail, Code2, Sparkles } from "lucide-react"
import { useEffect, useState } from "react"

const socialLinks = [
  { href: "https://github.com/uvatarkind", icon: Github, label: "GitHub" },
  { href: "https://www.linkedin.com/in/yeabsira-mekonnen-", icon: Linkedin, label: "LinkedIn" },
  { href: "mailto:yubi14465@gmail.com", icon: Mail, label: "Email" },
]

const roles = ["Software Engineer", "Mobile Developer", "Community Leader", "MC & Host"]

function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-primary/20 animate-float"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${4 + i}s`,
          }}
        />
      ))}
    </div>
  )
}

export function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-24 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse-soft animation-delay-200" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/3 rounded-full blur-3xl" />
      </div>

      <FloatingParticles />

      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
        {/* Left Content */}
        <div className="order-2 lg:order-1 space-y-8">
          <div className="space-y-6">
            <div className="flex items-center gap-3 opacity-0 animate-fade-up">
              <Sparkles className="w-5 h-5 text-primary" />
              <p className="text-primary font-medium tracking-wide">Hello, I&apos;m</p>
            </div>

            <h1 className="opacity-0 animate-fade-up animation-delay-100">
              <span className="block text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">Yeabsira</span>
              <span className="block text-4xl md:text-5xl lg:text-6xl font-serif italic text-primary mt-1">
                Mekonnen
              </span>
            </h1>

            <div className="h-8 overflow-hidden opacity-0 animate-fade-up animation-delay-200">
              <div
                className="transition-transform duration-500 ease-out"
                style={{ transform: `translateY(-${currentRole * 2}rem)` }}
              >
                {roles.map((role) => (
                  <p key={role} className="h-8 text-lg md:text-xl text-muted-foreground font-medium">
                    {role}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <p className="text-muted-foreground leading-relaxed max-w-xl opacity-0 animate-fade-up animation-delay-300 text-pretty text-lg">
            I craft <span className="text-foreground font-medium">elegant digital experiences</span> that blend
            thoughtful design with robust engineering. Passionate about creating meaningful impact through technology
            and <span className="text-foreground font-medium">connecting communities</span>.
          </p>

          <div className="flex items-center gap-4 opacity-0 animate-fade-up animation-delay-400">
            {socialLinks.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                aria-label={link.label}
                style={{ animationDelay: `${400 + i * 100}ms` }}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 opacity-0 animate-fade-up animation-delay-500">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:scale-105"
            >
              Get in touch
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-border text-foreground font-semibold rounded-full hover:border-primary hover:text-primary transition-all duration-300"
            >
              View my work
            </a>
          </div>
        </div>

        {/* Right Content - Photo */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
          <div className="relative opacity-0 animate-scale-in animation-delay-200">
            <div className="absolute -inset-4 border-2 border-dashed border-primary/20 rounded-full animate-rotate-slow" />

            <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-[420px] lg:h-[420px]">
              <div className="absolute inset-0 bg-primary/20 animate-blob" />
              <div className="absolute inset-2 overflow-hidden rounded-[60%_40%_30%_70%/60%_30%_70%_40%] animate-blob animation-delay-200">
                <Image
                  src="/images/image.png"
                  alt="Yeabsira Mekonnen"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>

            <div className="absolute -bottom-2 -left-4 glass px-4 py-2 rounded-full shadow-lg animate-float-delayed">
              <p className="text-sm font-medium text-foreground flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Open to opportunities
              </p>
            </div>

            {/* <div className="absolute -top-2 -right-4 glass px-4 py-2 rounded-full shadow-lg animate-float">
              <p className="text-sm font-medium text-foreground">
                <span className="text-primary font-bold">500+</span> problems solved
              </p>
            </div> */}
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Discover more</span>
        <div className="w-6 h-10 rounded-full border-2 border-current flex justify-center pt-2">
          <div className="w-1.5 h-1.5 rounded-full bg-current animate-bounce" />
        </div>
      </a>
    </section>
  )
}

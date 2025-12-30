"use client"

import { useEffect, useRef, useState } from "react"
import { Sparkles, Award, Users, Clock, Code } from "lucide-react"

const stats = [
  { value: "500+", label: "Problems Solved", icon: Code },
  { value: "800+", label: "Hours Training", icon: Clock },
  { value: "400+", label: "Interns Managed", icon: Users },
  { value: "2x", label: "Academic Awards", icon: Award },
]

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [counts, setCounts] = useState([0, 0, 0, 0])
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return
    const targets = [500, 800, 400, 2]
    const duration = 2000
    const steps = 60
    const stepDuration = duration / steps

    let step = 0
    const interval = setInterval(() => {
      step++
      setCounts(targets.map((target) => Math.round((target * step) / steps)))
      if (step >= steps) clearInterval(interval)
    }, stepDuration)

    return () => clearInterval(interval)
  }, [isVisible])

  return (
    <section ref={sectionRef} id="about" className="py-24 lg:py-32 px-6 lg:px-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/30 -skew-x-12 origin-top-right" />

      <div className="max-w-6xl mx-auto relative">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20">
          {/* Section Title */}
          <div>
            <div
              className={`flex items-center gap-2 mb-4 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
              }`}
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <h2 className="text-sm font-medium text-primary tracking-wider uppercase">About Me</h2>
            </div>
            <h3
              className={`text-3xl lg:text-4xl font-bold text-foreground leading-tight transition-all duration-700 delay-100 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
              }`}
            >
              Building bridges between <span className="font-serif italic text-primary">technology</span> and people
            </h3>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <p
              className={`text-muted-foreground leading-relaxed text-lg transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              I&apos;m a Software Engineering student at{" "}
              <span className="text-foreground font-semibold">Addis Ababa Science and Technology University</span>,
              passionate about creating meaningful digital experiences through web & mobile development, UI/UX design,
              and project management.
            </p>

            <p
              className={`text-muted-foreground leading-relaxed text-lg transition-all duration-700 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              My journey into tech began with the{" "}
              <span className="text-foreground font-semibold">African Girls Can Code Initiative</span> in 2019, where I
              explored IoT, Robotics, and Animation. Since then, I&apos;ve grown through intensive training at{" "}
              <span className="text-foreground font-semibold">A2SV (Africa to Silicon Valley)</span>, backed by Google.
            </p>

            <p
              className={`text-muted-foreground leading-relaxed text-lg transition-all duration-700 delay-400 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Beyond coding, I love connecting people through tech events as a{" "}
              <span className="text-foreground font-semibold">Lead Event Organizer at GDG on Campus AASTU</span>, and
              bringing ideas to life through storytelling as an MC/Host.
            </p>
          </div>
        </div>

        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="group bg-card p-6 rounded-2xl border border-border hover-lift text-center"
              style={{ transitionDelay: `${500 + index * 100}ms` }}
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="text-3xl lg:text-4xl font-bold text-primary mb-1">
                {stat.label === "Academic Awards" ? `${counts[index]}x` : `${counts[index]}+`}
              </p>
              <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

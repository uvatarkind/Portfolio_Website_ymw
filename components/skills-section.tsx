"use client"

import { useEffect, useRef, useState } from "react"
import { Sparkles, Code, Smartphone, Server, Wrench, Heart, Star } from "lucide-react"

const skillCategories = [
  {
    title: "Languages",
    icon: Code,
    skills: ["Python", "Java", "C++", "JavaScript", "TypeScript", "Dart"],
  },
  {
    title: "Frontend",
    icon: Code,
    skills: ["React", "Next.js", "Tailwind CSS", "Redux Toolkit", "HTML/CSS"],
  },
  {
    title: "Mobile",
    icon: Smartphone,
    skills: ["Flutter", "BLoC Pattern", "Clean Architecture", "Firebase"],
  },
  {
    title: "Backend & Database",
    icon: Server,
    skills: ["Node.js", "Firebase", "Supabase", "REST APIs", "PostgreSQL"],
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: ["Git", "GitHub", "Figma", "VS Code", "Android Studio"],
  },
  {
    title: "Soft Skills",
    icon: Heart,
    skills: ["Leadership", "Event Management", "Public Speaking", "Mentoring", "Team Collaboration"],
  },
]

const awards = [
  {
    title: "President's Academic Award",
    organization: "Addis Ababa Science and Technology University",
    date: "May 2024 & May 2025",
    description: "Awarded twice for exceptional academic performance and dedication to excellence.",
    badge: "2x",
  },
  {
    title: "Impact Award",
    organization: "Google Developers Group on Campus AASTU",
    date: "May 2025",
    description:
      "Recognized for outstanding contributions to campus tech initiatives, event organization, and student mentorship.",
    badge: "★",
  },
]

export function SkillsSection() {
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
    <section ref={sectionRef} id="skills" className="py-24 lg:py-32 px-6 lg:px-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-secondary/30" />

      <div className="max-w-6xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div
            className={`flex items-center justify-center gap-2 mb-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <h2 className="text-sm font-medium text-primary tracking-wider uppercase">Skills & Recognition</h2>
          </div>
          <h3
            className={`text-3xl lg:text-4xl font-bold text-foreground transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Technologies I <span className="font-serif italic text-primary">work with</span>
          </h3>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`bg-card p-6 rounded-2xl border border-border hover-lift transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(categoryIndex + 2) * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <category.icon className="w-5 h-5 text-primary" />
                </div>
                <h4 className="text-lg font-bold text-foreground">{category.title}</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm bg-secondary text-secondary-foreground rounded-full hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Awards Section */}
        <div>
          <h4
            className={`text-2xl font-bold text-foreground text-center mb-8 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
            }`}
          >
            Awards & <span className="font-serif italic text-primary">Recognition</span>
          </h4>
          <div className="grid md:grid-cols-2 gap-6">
            {awards.map((award, index) => (
              <div
                key={award.title}
                className={`group bg-card p-6 rounded-2xl border border-border hover-lift transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${(index + 8) * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    {award.badge === "★" ? (
                      <Star className="w-6 h-6 text-primary fill-primary" />
                    ) : (
                      <span className="text-primary text-lg font-bold">{award.badge}</span>
                    )}
                  </div>
                  <div>
                    <h5 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {award.title}
                    </h5>
                    <p className="text-sm text-primary font-medium mb-1">{award.organization}</p>
                    <p className="text-xs text-muted-foreground mb-3">{award.date}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{award.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

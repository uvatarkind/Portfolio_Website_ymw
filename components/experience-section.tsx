"use client"

import { useEffect, useRef, useState } from "react"
import { Sparkles, Building2, Calendar } from "lucide-react"

const experiences = [
  {
    period: "Oct 2024 — Present",
    title: "Mobile Developer",
    company: "Hasab AI",
    description:
      "Developing core features in Flutter including chat interface, voice recording, and image-to-text processing. Integrating APIs for speech-to-text, translation, and OCR.",
    technologies: ["Flutter", "Dart", "REST APIs", "OCR", "Speech-to-Text"],
    color: "bg-rose-500",
  },
  {
    period: "Jan 2024 — Dec 2024",
    title: "Software Engineering Trainee",
    company: "A2SV (Africa to Silicon Valley)",
    description:
      "Committed 800+ hours to an intensive program focused on data structures and algorithms, solving 500+ coding challenges on LeetCode and Codeforces.",
    technologies: ["Python", "Data Structures", "Algorithms", "Problem Solving"],
    color: "bg-amber-500",
  },
  {
    period: "Jun 2024 — Sep 2024",
    title: "Mobile Application Developer",
    company: "Eskalate",
    description:
      "Developed mobile applications using Flutter, focusing on clean architecture and state management patterns for scalable solutions.",
    technologies: ["Flutter", "Dart", "Clean Architecture", "BLoC"],
    color: "bg-emerald-500",
  },
  {
    period: "Jul 2024 — Jul 2025",
    title: "Frontend Developer",
    company: "Kuraztech",
    description:
      "Developed web-based Intern Management Platform using React and Tailwind CSS. Built dashboards for students, admins, and instructors managing 400+ interns.",
    technologies: ["React", "Tailwind CSS", "Redux Toolkit", "REST APIs"],
    color: "bg-blue-500",
  },
]

export function ExperienceSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
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
    <section ref={sectionRef} id="experience" className="py-24 lg:py-32 px-6 lg:px-24 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div
            className={`flex items-center justify-center gap-2 mb-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <h2 className="text-sm font-medium text-primary tracking-wider uppercase">Experience</h2>
          </div>
          <h3
            className={`text-3xl lg:text-4xl font-bold text-foreground transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Where I&apos;ve <span className="font-serif italic text-primary">worked</span>
          </h3>
        </div>

        <div className="grid lg:grid-cols-[300px_1fr] gap-8">
          {/* Company tabs */}
          <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0">
            {experiences.map((exp, index) => (
              <button
                key={`${exp.company}-${exp.title}`}
                onClick={() => setActiveIndex(index)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-300 whitespace-nowrap ${
                  activeIndex === index ? "bg-card shadow-lg border border-primary/20" : "hover:bg-card/50"
                } ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}
                style={{ transitionDelay: `${(index + 2) * 100}ms` }}
              >
                <div
                  className={`w-3 h-3 rounded-full ${exp.color} ${activeIndex === index ? "scale-125" : ""} transition-transform`}
                />
                <div>
                  <p className={`font-semibold text-sm ${activeIndex === index ? "text-primary" : "text-foreground"}`}>
                    {exp.company}
                  </p>
                  <p className="text-xs text-muted-foreground">{exp.title}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Experience details */}
          <div
            className={`bg-card rounded-2xl p-8 border border-border transition-all duration-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
              <div>
                <h4 className="text-2xl font-bold text-foreground mb-2">{experiences[activeIndex].title}</h4>
                <div className="flex items-center gap-2 text-primary font-medium">
                  <Building2 className="w-4 h-4" />
                  {experiences[activeIndex].company}
                </div>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground text-sm bg-secondary px-3 py-1.5 rounded-full">
                <Calendar className="w-4 h-4" />
                {experiences[activeIndex].period}
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-6 text-lg">{experiences[activeIndex].description}</p>

            <div className="flex flex-wrap gap-2">
              {experiences[activeIndex].technologies.map((tech) => (
                <span key={tech} className="px-4 py-2 text-sm font-medium text-primary bg-primary/10 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

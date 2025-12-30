"use client"

import { useEffect, useRef, useState } from "react"
import { ExternalLink, Github, Folder, Sparkles, ArrowUpRight } from "lucide-react"
import Image from "next/image"

const featuredProjects = [
  {
    title: "Wekil AI",
    subtitle: "AI-Powered Contract Drafting",
    description:
      "A cross-platform mobile application that enables freelancers and small business owners to draft informal contracts. Utilizes OpenAI API to analyze prompts and automatically generate legally sound contracts with bilingual support (Amharic & English).",
    technologies: ["Flutter", "Dart", "BLoC", "Clean Architecture", "OpenAI API"],
    github: "#",
    external: "#",
    image: "/ai-contract-mobile-app-elegant-ui-dark-mode.jpg",
  },
  {
    title: "Yappers",
    subtitle: "Real-time Chat Application",
    description:
      "Real-time chat application built with Flutter and BLoC state management. Features user authentication, real-time messaging with Firebase, file sharing via Supabase, and a unique emotion tagging feature for messages.",
    technologies: ["Flutter", "Firebase", "Supabase", "BLoC", "Clean Architecture"],
    github: "#",
    external: "#",
    image: "/modern-chat-messaging-app-colorful-ui-bubbles.jpg",
  },
  {
    title: "Intern Management Platform",
    subtitle: "Enterprise Dashboard System",
    description:
      "Web-based platform managing 400+ interns at Kuraztech. Features registration, task allocation, performance tracking, and dashboards for students, admins, and instructors.",
    technologies: ["React", "Tailwind CSS", "Redux Toolkit", "REST APIs"],
    github: "#",
    external: "#",
    image: "/dashboard-analytics-intern-management-system-moder.jpg",
  },
]

const otherProjects = [
  {
    title: "UI/UX Design - Efuye Gela",
    description:
      "Created low-fidelity wireframes and interactive prototypes. Contributed to user flows, information architecture, and interaction design.",
    technologies: ["Figma", "UI/UX", "Prototyping"],
  },
  {
    title: "GDG Tech Events Platform",
    description:
      "Planned and hosted Dev Dialogues, tech fests, and hackathons, bringing renowned tech experts to share knowledge.",
    technologies: ["Event Planning", "Community", "Leadership"],
  },
  {
    title: "Web3 Mentorship Program",
    description: "Mentoring students in blockchain technology and decentralized applications as part of GDG on Campus.",
    technologies: ["Web3", "Blockchain", "Teaching"],
  },
]

export function ProjectsSection() {
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
    <section ref={sectionRef} id="projects" className="py-24 lg:py-32 px-6 lg:px-24 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div
            className={`flex items-center justify-center gap-2 mb-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <h2 className="text-sm font-medium text-primary tracking-wider uppercase">Projects</h2>
          </div>
          <h3
            className={`text-3xl lg:text-4xl font-bold text-foreground transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Things I&apos;ve <span className="font-serif italic text-primary">created</span>
          </h3>
        </div>

        {/* Featured Projects */}
        <div className="space-y-20 mb-20">
          {featuredProjects.map((project, index) => (
            <div
              key={project.title}
              className={`group grid lg:grid-cols-2 gap-8 items-center transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(index + 2) * 150}ms` }}
            >
              {/* Project Image */}
              <div className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-card border border-border">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-300" />
                </div>
                {/* Decorative element */}
                <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full border-2 border-primary/20 rounded-2xl" />
              </div>

              {/* Project Content */}
              <div className={`${index % 2 === 1 ? "lg:order-1 lg:text-right" : ""}`}>
                <p className="text-primary font-medium mb-2">{project.subtitle}</p>
                <h4 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <div className="bg-card p-6 rounded-xl shadow-lg border border-border mb-6">
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                </div>
                <div className={`flex flex-wrap gap-2 mb-6 ${index % 2 === 1 ? "lg:justify-end" : ""}`}>
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-sm font-medium text-primary bg-primary/10 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className={`flex gap-4 ${index % 2 === 1 ? "lg:justify-end" : ""}`}>
                  <a
                    href={project.github}
                    className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={project.external}
                    className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    aria-label="External Link"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div>
          <h4
            className={`text-2xl font-bold text-foreground text-center mb-12 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Other Noteworthy Work
          </h4>
          <div className="grid md:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <div
                key={project.title}
                className={`group bg-card p-6 rounded-2xl border border-border hover-lift transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${(index + 5) * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Folder className="w-6 h-6 text-primary" />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
                <h5 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-3">
                  {project.title}
                </h5>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-medium text-muted-foreground bg-secondary px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

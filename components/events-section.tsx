"use client"

import { useEffect, useRef, useState } from "react"
import { Sparkles, Calendar, Users, Mic, Star } from "lucide-react"
import Image from "next/image"

const events = [
  {
    title: "Dev Dialogues Series",
    role: "Lead Organizer & MC",
    organization: "GDG on Campus AASTU",
    description:
      "Monthly tech talk series bringing industry experts to share insights on software development, AI, and career growth with 200+ attendees per session.",
    date: "2024 — Present",
    attendees: "200+",
    image: "/tech-conference-speaker-presentation-stage.jpg",
  },
  {
    title: "AASTU Tech Fest 2024",
    role: "Event Coordinator & Host",
    organization: "GDG on Campus AASTU",
    description:
      "Large-scale technology festival featuring workshops, hackathons, and networking sessions. Coordinated with 15+ sponsors and managed a team of 30 volunteers.",
    date: "May 2024",
    attendees: "500+",
    image: "/tech-festival-hackathon-crowd-event.jpg",
  },
  {
    title: "Women in Tech Workshop",
    role: "Organizer & Speaker",
    organization: "CGI AASTU",
    description:
      "Empowering workshop series focused on inspiring and supporting women in technology careers. Featured panel discussions and hands-on coding sessions.",
    date: "March 2024",
    attendees: "150+",
    image: "/women-in-tech-workshop-diverse-group-coding.jpg",
  },
  {
    title: "Web3 & Blockchain Bootcamp",
    role: "Lead Mentor & MC",
    organization: "GDG on Campus AASTU",
    description:
      "Intensive 3-day bootcamp introducing students to blockchain technology, smart contracts, and decentralized applications with hands-on projects.",
    date: "February 2024",
    attendees: "100+",
    image: "/blockchain-workshop-coding-bootcamp-students.jpg",
  },
]

export function EventsSection() {
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
    <section ref={sectionRef} id="events" className="py-24 lg:py-32 px-6 lg:px-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div
            className={`flex items-center justify-center gap-2 mb-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <h2 className="text-sm font-medium text-primary tracking-wider uppercase">Events & Hosting</h2>
          </div>
          <h3
            className={`text-3xl lg:text-4xl font-bold text-foreground mb-4 transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Events I&apos;ve <span className="font-serif italic text-primary">hosted & organized</span>
          </h3>
          <p
            className={`text-muted-foreground max-w-2xl mx-auto text-lg transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Passionate about bringing people together through technology events, workshops, and community gatherings
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <div
              key={event.title}
              className={`group bg-card rounded-2xl overflow-hidden border border-border hover-lift transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(index + 3) * 100}ms` }}
            >
              {/* Event Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />

                {/* Role badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2 bg-primary text-primary-foreground px-3 py-1.5 rounded-full text-sm font-medium">
                  <Mic className="w-3.5 h-3.5" />
                  {event.role}
                </div>
              </div>

              {/* Event Content */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {event.title}
                  </h4>
                  <div className="flex items-center gap-1 text-primary shrink-0">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm font-semibold">{event.attendees}</span>
                  </div>
                </div>

                <p className="text-sm text-primary font-medium mb-3">{event.organization}</p>

                <p className="text-muted-foreground leading-relaxed mb-4">{event.description}</p>

                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    {event.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Users className="w-4 h-4" />
                    {event.attendees} attendees
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* MC Highlight */}
        <div
          className={`mt-16 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl p-8 md:p-12 text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "700ms" }}
        >
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
              <Mic className="w-8 h-8 text-primary" />
            </div>
          </div>
          <h4 className="text-2xl font-bold text-foreground mb-3">
            Available for <span className="font-serif italic text-primary">MC & Hosting</span>
          </h4>
          <p className="text-muted-foreground max-w-xl mx-auto mb-6">
            Bringing energy, professionalism, and genuine connection to tech events, conferences, and workshops.
            Let&apos;s make your next event memorable!
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-full hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
          >
            Book me for your event
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  )
}

import { Heart, Sparkles } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 px-6 lg:px-24 bg-card border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center gap-6">
          {/* Logo */}
          <a href="#" className="text-2xl font-bold text-foreground">
            <span className="text-primary">Y</span>M
          </a>

          {/* Tagline */}
          <p className="text-muted-foreground text-center max-w-md flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-primary" />
            Building bridges between technology and people
            <Sparkles className="w-4 h-4 text-primary" />
          </p>

          {/* Divider */}
          <div className="w-24 h-px bg-border" />

          {/* Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-2 text-sm text-muted-foreground">
            <p>Designed & Built with</p>
            <Heart className="w-4 h-4 text-primary fill-primary" />
            <p>by Yeabsira Mekonnen</p>
          </div>

          <p className="text-xs text-muted-foreground/60">© {new Date().getFullYear()} All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}

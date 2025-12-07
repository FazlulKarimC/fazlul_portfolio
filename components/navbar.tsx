"use client"

import { Moon, Sun, Menu, X } from "lucide-react"
import { useTheme } from "./theme-provider"
import { useState, useEffect } from "react"

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
]

export function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Prevent hydration mismatch by only rendering theme-specific content after mount
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b-3 border-border">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#" className="text-2xl font-bold font-mono tracking-tight hover:text-primary transition-colors">
          FH<span className="text-primary">.</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-2 font-medium border-3 border-transparent rounded-xl hover:border-border hover:bg-secondary hover:text-secondary-foreground hover:shadow-xs transition-all"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={toggleTheme}
            className="ml-2 p-2 border-3 border-border bg-card rounded-xl shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all"
            aria-label="Toggle theme"
          >
            {mounted && (theme === "light" ? <Moon size={20} /> : <Sun size={20} />)}
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 border-3 border-border bg-card rounded-xl shadow-xs"
            aria-label="Toggle theme"
          >
            {mounted && (theme === "light" ? <Moon size={20} /> : <Sun size={20} />)}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 border-3 border-border bg-card rounded-xl shadow-xs"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {isOpen && (
        <div className="md:hidden border-t-3 border-border bg-background rounded-b-2xl">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 font-medium border-b-3 border-border hover:bg-secondary hover:text-secondary-foreground transition-colors last:border-b-0 last:rounded-b-2xl"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}

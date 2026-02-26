import { ArrowDown, Github, Linkedin, Twitter, FileText } from "lucide-react"
import { personalData } from "@/lib/data"
import Image from "next/image"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Profile image - Added rounded-2xl */}
        <div className="relative inline-block mb-8">
          <div className="mt-10 w-40 h-40 md:w-48 md:h-48 border-4 border-border shadow-lg bg-secondary rounded-2xl overflow-hidden relative">
            <Image
              src="/me.jpeg"
              alt={personalData.name}
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* Decorative element - Added rounded-xl */}
          <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-primary border-3 border-border rounded-xl flex items-center justify-center text-2xl">
            <span className="animate-bounce">👋</span>
          </div>
        </div>

        {/* Name and title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight">
          Hi, I'm{" "}
          <span className="relative inline-block">
            <span className="relative z-10">{personalData.name}</span>
            <span className="absolute -bottom-1 left-0 w-full h-3 bg-secondary rounded-sm -z-10" />
          </span>
        </h1>

        <p className="text-xl md:text-2xl font-mono text-muted-foreground mb-6">{personalData.title}</p>

        <p className="text-lg max-w-2xl mx-auto mb-8 leading-relaxed">{personalData.bio}</p>

        {/* Social links - Added rounded-xl to all */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <a
            href={personalData.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border-3 border-border bg-card rounded-xl shadow-xs hover:shadow-md hover:-translate-y-1 hover:bg-secondary hover:text-secondary-foreground transition-all"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a
            href={personalData.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border-3 border-border bg-card rounded-xl shadow-xs hover:shadow-md hover:-translate-y-1 hover:bg-accent hover:text-accent-foreground transition-all"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a
            href={personalData.socials.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border-3 border-border bg-card rounded-xl shadow-xs hover:shadow-md hover:-translate-y-1 hover:bg-primary hover:text-primary-foreground transition-all"
            aria-label="Twitter"
          >
            <Twitter size={24} />
          </a>
        </div>

        {/* CTA buttons - Added rounded-xl */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            className="px-8 py-3 bg-primary text-primary-foreground font-bold border-3 border-border rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all"
          >
            View My Work
          </a>
          <a
            href={personalData.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-card font-bold border-3 border-border rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 hover:bg-secondary hover:text-secondary-foreground transition-all flex items-center gap-2"
          >
            <FileText size={20} />
            Resume
          </a>
          <a
            href="#contact"
            className="px-8 py-3 bg-card font-bold border-3 border-border rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 hover:bg-accent hover:text-accent-foreground transition-all"
          >
            Contact Me
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 animate-bounce">
          <ArrowDown className="mx-auto text-muted-foreground" size={28} />
        </div>
      </div>
    </section>
  )
}

import { MapPin, Mail, Calendar } from "lucide-react"
import { personalData } from "@/lib/data"

export function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="relative inline-block">
            About Me
            <span className="absolute -bottom-1 left-0 w-full h-3 bg-accent/30 rounded-sm -z-10" />
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Info card - Added rounded-2xl */}
          <div className="bg-card border-3 border-border rounded-2xl shadow-md p-6">
            <h3 className="text-xl font-bold mb-4 font-mono">Quick Info</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="p-2 bg-secondary text-secondary-foreground border-3 border-border rounded-xl">
                  <MapPin size={20} />
                </span>
                <span>{personalData.location}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="p-2 bg-accent text-accent-foreground border-3 border-border rounded-xl">
                  <Mail size={20} />
                </span>
                <span>{personalData.email}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="p-2 bg-primary text-primary-foreground border-3 border-border rounded-xl">
                  <Calendar size={20} />
                </span>
                <span>Available for freelance</span>
              </div>
            </div>
          </div>

          {/* Description card - Added rounded-2xl and fixed text color */}
          <div className="bg-secondary border-3 border-border rounded-2xl shadow-md p-6">
            <h3 className="text-xl font-bold mb-4 font-mono text-secondary-foreground">What I Do</h3>
            <p className="leading-relaxed text-secondary-foreground">
              I specialize in building modern web applications using cutting-edge technologies. From responsive
              front-end interfaces to robust back-end systems, I create solutions that are both beautiful and
              functional.
            </p>
            <p className="mt-4 leading-relaxed text-secondary-foreground">
              When I'm not coding, you'll find me exploring new technologies, contributing to open source, or sharing
              knowledge with the developer community.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

import { Mail, Send, ArrowUpRight } from "lucide-react"
import { personalData } from "@/lib/data"

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          <span className="relative inline-block">
            Let's Work Together
            <span className="absolute -bottom-1 left-0 w-full h-3 bg-primary/30 rounded-sm -z-10" />
          </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
          Have a project in mind or just want to chat? I'd love to hear from you. Feel free to reach out!
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact card - Added rounded-2xl */}
          <div className="bg-primary text-primary-foreground border-3 border-border rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="p-3 bg-background text-foreground border-3 border-border rounded-xl">
                <Mail size={24} />
              </span>
              <div>
                <p className="text-sm opacity-80">Email me at</p>
                <p className="font-bold">{personalData.email}</p>
              </div>
            </div>

            <a
              href={`mailto:${personalData.email}`}
              className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-background text-foreground font-bold border-3 border-border rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <Send size={20} />
              Send Email
            </a>
          </div>

          {/* Social card - Added rounded-2xl and fixed text color */}
          <div className="bg-secondary border-3 border-border rounded-2xl shadow-lg p-8">
            <h3 className="text-xl font-bold mb-6 text-secondary-foreground">Connect With Me</h3>

            <div className="space-y-4">
              <a
                href={personalData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between w-full px-4 py-3 bg-card border-3 border-border rounded-xl shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all"
              >
                <span className="font-medium">GitHub</span>
                <ArrowUpRight size={20} />
              </a>
              <a
                href={personalData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between w-full px-4 py-3 bg-card border-3 border-border rounded-xl shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all"
              >
                <span className="font-medium">LinkedIn</span>
                <ArrowUpRight size={20} />
              </a>
              <a
                href={personalData.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between w-full px-4 py-3 bg-card border-3 border-border rounded-xl shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all"
              >
                <span className="font-medium">Twitter</span>
                <ArrowUpRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

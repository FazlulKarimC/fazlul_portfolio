import { ExternalLink, Github } from "lucide-react"
import { projects } from "@/lib/data"

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="relative inline-block">
            Featured Projects
            <span className="absolute -bottom-1 left-0 w-full h-3 bg-accent/30 rounded-sm -z-10" />
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <article
              key={index}
              className="bg-card border-3 border-border rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-2 transition-all group overflow-hidden"
            >
              {/* Project image - Added rounded corners to top */}
              <div className="relative overflow-hidden border-b-3 border-border">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors" />
              </div>

              {/* Project content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>

                {/* Tech stack - Added rounded-lg */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-xs font-mono px-2 py-1 bg-muted border-2 border-border rounded-lg">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links - Added rounded-xl */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-card font-medium border-3 border-border rounded-xl shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground font-medium border-3 border-border rounded-xl shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

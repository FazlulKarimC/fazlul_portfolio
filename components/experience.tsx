import { Briefcase, GraduationCap } from "lucide-react"
import { experiences, education } from "@/lib/data"

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="relative inline-block">
            Experience & Education
            <span className="absolute -bottom-1 left-0 w-full h-3 bg-primary/30 rounded-sm -z-10" />
          </span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Work Experience */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="p-2 bg-primary text-primary-foreground border-3 border-border rounded-xl">
                <Briefcase size={24} />
              </span>
              <h3 className="text-2xl font-bold">Work Experience</h3>
            </div>

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="bg-card border-3 border-border rounded-2xl shadow-md p-5 hover:shadow-lg hover:-translate-y-1 transition-all"
                >
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h4 className="font-bold text-lg">{exp.position}</h4>
                    <span className="text-sm font-mono bg-secondary text-secondary-foreground px-2 py-1 border-2 border-border rounded-lg whitespace-nowrap">
                      {exp.duration}
                    </span>
                  </div>
                  <p className="font-mono text-primary mb-2">{exp.company}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="p-2 bg-accent text-accent-foreground border-3 border-border rounded-xl">
                <GraduationCap size={24} />
              </span>
              <h3 className="text-2xl font-bold">Education</h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-card border-3 border-border rounded-2xl shadow-md p-5 hover:shadow-lg hover:-translate-y-1 transition-all"
                >
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h4 className="font-bold text-lg">{edu.degree}</h4>
                    <span className="text-sm font-mono bg-accent text-accent-foreground px-2 py-1 border-2 border-border rounded-lg whitespace-nowrap">
                      {edu.duration}
                    </span>
                  </div>
                  <p className="font-mono text-accent">{edu.institution}</p>
                </div>
              ))}
            </div>

            {/* Fun fact card - Added rounded-2xl and text color */}
            <div className="mt-6 bg-secondary border-3 border-border rounded-2xl shadow-md p-5">
              <h4 className="font-bold mb-3 text-secondary-foreground">Fun Facts</h4>
              <ul className="text-secondary-foreground text-sm leading-relaxed space-y-2">
                <li>● Written <span className="font-bold">10,000+ lines</span> of code — currently warming up for the 100k club 💪 </li>
                <li>● Been coding for <span className="font-bold">8 years</span> — I learned to code before ChatGPT could even spell “Hello World”</li>
                <li>● Crushed <span className="font-bold">600+ DSA problems</span> — my brain now thinks in O(n) notation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

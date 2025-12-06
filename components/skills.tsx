import { skills } from "@/lib/data"

const colorClasses = {
  primary: "bg-primary text-primary-foreground",
  secondary: "bg-secondary text-secondary-foreground",
  accent: "bg-accent text-accent-foreground",
}

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="relative inline-block">
            Skills & Technologies
            <span className="absolute -bottom-1 left-0 w-full h-3 bg-secondary/50 rounded-sm -z-10" />
          </span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <span
              key={skill.name}
              className={`px-5 py-2 font-bold border-3 border-border rounded-xl shadow-xs hover:shadow-md hover:-translate-y-1 transition-all cursor-default ${
                colorClasses[skill.color as keyof typeof colorClasses]
              }`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {skill.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skillCategories = [
  {
    title: "Frontend",
    icon: "🎨",
    skills: [
      { name: "React", level: 95, color: "from-blue-500 to-cyan-500" },
      { name: "Next.js", level: 90, color: "from-gray-800 to-gray-600" },
      { name: "TypeScript", level: 88, color: "from-blue-600 to-blue-400" },
      { name: "Tailwind CSS", level: 92, color: "from-teal-500 to-cyan-500" },
      { name: "JavaScript", level: 95, color: "from-yellow-500 to-orange-500" },
    ],
  },
  {
    title: "Backend",
    icon: "⚙️",
    skills: [
      { name: "Node.js", level: 90, color: "from-green-600 to-green-400" },
      { name: "Express", level: 85, color: "from-gray-700 to-gray-500" },
      { name: "Python", level: 80, color: "from-blue-500 to-yellow-500" },
      { name: "PostgreSQL", level: 85, color: "from-blue-700 to-blue-500" },
      { name: "MongoDB", level: 82, color: "from-green-700 to-green-500" },
    ],
  },
  {
    title: "Tools & Others",
    icon: "🛠️",
    skills: [
      { name: "Git", level: 90, color: "from-orange-600 to-red-500" },
      { name: "Docker", level: 75, color: "from-blue-600 to-blue-400" },
      { name: "AWS", level: 70, color: "from-orange-500 to-yellow-500" },
      { name: "Vercel", level: 95, color: "from-black to-gray-800" },
      { name: "Figma", level: 80, color: "from-purple-500 to-pink-500" },
    ],
  },
]

const certifications = ["AWS Certified Developer", "React Professional", "Node.js Certified", "MongoDB Associate"]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">Skills & Technologies</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Technologies I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-0 bg-gradient-to-br from-background to-muted/20"
            >
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="text-3xl mb-2">{category.icon}</div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2 group/skill">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium group-hover/skill:text-primary transition-colors duration-300">
                          {skill.name}
                        </span>
                        <Badge variant="secondary" className="text-xs">
                          {skill.level}%
                        </Badge>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                        <div
                          className={`bg-gradient-to-r ${skill.color} h-2 rounded-full transition-all duration-1000 ease-out transform origin-left hover:scale-y-125`}
                          style={{
                            width: `${skill.level}%`,
                            animationDelay: `${skillIndex * 200}ms`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-8">Certifications & Achievements</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert, index) => (
              <Badge
                key={index}
                variant="outline"
                className="px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-default"
              >
                {cert}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

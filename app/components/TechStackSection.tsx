"use client"

import { motion } from 'framer-motion'
import { 
  Layers, Code2, Database, Cloud, Wrench, TestTube,
  Globe, Server, Smartphone, Terminal, GitBranch, Container
} from 'lucide-react'
import { useState } from 'react'

interface TechCategory {
  name: string
  icon: typeof Code2
  color: string
  technologies: {
    name: string
    level: 'expert' | 'advanced' | 'intermediate'
  }[]
}

const techStack: TechCategory[] = [
  {
    name: "Languages",
    icon: Code2,
    color: "#3B82F6",
    technologies: [
      { name: "C#", level: "expert" },
      { name: "TypeScript", level: "expert" },
      { name: "JavaScript", level: "expert" },
      { name: "Python", level: "intermediate" },
      { name: "SQL", level: "expert" }
    ]
  },
  {
    name: "Frontend",
    icon: Globe,
    color: "#10B981",
    technologies: [
      { name: "React", level: "expert" },
      { name: "Next.js", level: "expert" },
      { name: "Tailwind CSS", level: "expert" },
      { name: "HTML/CSS", level: "expert" },
      { name: "Framer Motion", level: "advanced" }
    ]
  },
  {
    name: "Backend",
    icon: Server,
    color: "#8B5CF6",
    technologies: [
      { name: ".NET Framework", level: "expert" },
      { name: "ASP.NET Core", level: "expert" },
      { name: "REST APIs", level: "expert" },
      { name: "Software Architecture", level: "advanced" },
      { name: "Automation", level: "advanced" }
    ]
  },
  {
    name: "Databases",
    icon: Database,
    color: "#F59E0B",
    technologies: [
      { name: "SQL Server", level: "expert" },
      { name: "PostgreSQL", level: "expert" },
      { name: "SQLite", level: "expert" },
      { name: "MongoDB", level: "intermediate" },
      { name: "Redis", level: "intermediate" }
    ]
  },
  {
    name: "DevOps & Tools",
    icon: Cloud,
    color: "#EC4899",
    technologies: [
      { name: "Docker", level: "intermediate" },
      { name: "Git/GitHub", level: "expert" },
      { name: "Agile/Scrum", level: "advanced" },
      { name: "CI/CD", level: "advanced" },
      { name: "Process Documentation", level: "advanced" }
    ]
  },
  {
    name: "Other Skills",
    icon: Wrench,
    color: "#06B6D4",
    technologies: [
      { name: "Network Management", level: "expert" },
      { name: "Software Design", level: "advanced" },
      { name: "Testing", level: "advanced" },
      { name: "Communication", level: "expert" },
      { name: "Game Development", level: "advanced" }
    ]
  }
]

const levelColors = {
  expert: { bg: 'bg-green-500/20', text: 'text-green-400', width: 'w-full' },
  advanced: { bg: 'bg-blue-500/20', text: 'text-blue-400', width: 'w-4/5' },
  intermediate: { bg: 'bg-yellow-500/20', text: 'text-yellow-400', width: 'w-3/5' }
}

const TechStackSection = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="w-full max-w-5xl"
    >
      <h2 className="text-gray-100 text-2xl font-semibold tracking-wide mb-8 flex items-center gap-3">
        <Layers className="w-6 h-6 text-[#C96065]" />
        Tech Stack
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {techStack.map((category, index) => {
          const IconComponent = category.icon
          const isActive = activeCategory === category.name

          return (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              onHoverStart={() => setActiveCategory(category.name)}
              onHoverEnd={() => setActiveCategory(null)}
              className="bg-gradient-to-br from-[#140F10] to-[#1a1315] border border-[#252525] rounded-xl p-5 cursor-pointer group relative overflow-hidden"
            >
              {/* Animated background */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  background: `radial-gradient(circle at top left, ${category.color}10 0%, transparent 50%)`
                }}
              />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    className="p-2.5 rounded-xl"
                    style={{ backgroundColor: `${category.color}20` }}
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <IconComponent className="w-5 h-5" style={{ color: category.color }} />
                  </motion.div>
                  <h3 className="text-lg font-semibold text-white">{category.name}</h3>
                </div>

                <div className="space-y-2.5">
                  {category.technologies.map((tech, techIndex) => {
                    const level = levelColors[tech.level]
                    return (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 + techIndex * 0.05 }}
                        className="group/tech"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm text-gray-300 group-hover/tech:text-white transition-colors">
                            {tech.name}
                          </span>
                          <span className={`text-xs ${level.text} opacity-0 group-hover/tech:opacity-100 transition-opacity`}>
                            {tech.level}
                          </span>
                        </div>
                        <div className="h-1.5 bg-[#0a0a0a] rounded-full overflow-hidden">
                          <motion.div
                            className="h-full rounded-full"
                            style={{ backgroundColor: category.color }}
                            initial={{ width: 0 }}
                            animate={{ width: isActive ? (tech.level === 'expert' ? '100%' : tech.level === 'advanced' ? '80%' : '60%') : '0%' }}
                            transition={{ duration: 0.5, delay: techIndex * 0.05 }}
                          />
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Legend */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="flex justify-center gap-6 mt-6 text-sm"
      >
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-green-500" />
          <span className="text-gray-400">Expert</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-blue-500" />
          <span className="text-gray-400">Advanced</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <span className="text-gray-400">Intermediate</span>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default TechStackSection

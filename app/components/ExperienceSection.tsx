"use client"

import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin, ChevronRight, Building2 } from 'lucide-react'
import { useState } from 'react'

interface Experience {
  id: number
  company: string
  role: string
  location: string
  period: string
  description: string
  responsibilities: string[]
  technologies: string[]
  current?: boolean
}

const experiences: Experience[] = [
  {
    id: 1,
    company: "GiG (Gaming Innovation Group)",
    role: "Full Stack Developer",
    location: "St Julians, Malta",
    period: "May 2025 - Present",
    description: "Spearheading development of full-stack applications driving automation and configuration across multiple system levels.",
    responsibilities: [
      "Spearheaded development and maintenance of full-stack applications driving automation and configuration across multiple system levels",
      "Leveraged robust and scalable software architecture to enhance operational efficiency",
      "Worked extensively with Redis, Docker, and the .NET framework lifecycle to build and optimize solutions",
      "Delivered consistent flowchart documentation to standardize processes and improve team collaboration",
      "Accelerated deployment cycles through process improvements"
    ],
    technologies: ["C#", ".NET", "Redis", "Docker", "SQL Server", "React"],
    current: true
  },
  {
    id: 2,
    company: "Freelance Development",
    role: "Freelance Full Stack Developer",
    location: "Malta",
    period: "Jan 2023 - May 2025",
    description: "Delivered 15+ custom software projects for clients across finance, gaming, and retail industries.",
    responsibilities: [
      "Delivered 15+ custom software projects for clients across finance using AI, gaming, and retail industries",
      "Designed and implemented scalable and robust web applications",
      "Integrated APIs and third-party services, enhancing product functionality and user engagement by minimum 25%",
      "Managed full project lifecycle from requirements gathering to deployment"
    ],
    technologies: ["React", "Next.js", "TypeScript", ".NET", "PostgreSQL", "AI/ML"]
  },
  {
    id: 3,
    company: "MITA (Malta Information Technology Agency)",
    role: "Network Intern",
    location: "Valletta, Malta",
    period: "Jul 2024 - Sep 2024",
    description: "Monitored and maintained network infrastructure across government offices and schools.",
    responsibilities: [
      "Monitored and maintained network infrastructure across 10+ government offices and schools",
      "Ensured 99.9% network uptime across all managed locations",
      "Diagnosed and resolved 20+ network issues monthly",
      "Assisted in upgrading network hardware and infrastructure",
      "Conducted vulnerability assessments and worked on remediation plans to meet regulatory standards"
    ],
    technologies: ["Network Management", "Security", "Infrastructure", "Compliance"]
  }
]

const ExperienceSection = () => {
  const [expandedId, setExpandedId] = useState<number | null>(1)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="w-full max-w-5xl"
    >
      <h2 className="text-gray-100 text-2xl font-semibold tracking-wide mb-8 flex items-center gap-3">
        <Briefcase className="w-6 h-6 text-[#C96065]" />
        Work Experience
      </h2>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-[19px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#C96065] via-[#C96065]/50 to-transparent" />

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="relative pl-12"
            >
              {/* Timeline dot */}
              <motion.div
                className={`absolute left-0 top-0 w-10 h-10 rounded-full border-2 flex items-center justify-center ${
                  exp.current 
                    ? 'bg-[#C96065] border-[#C96065]' 
                    : 'bg-[#140F10] border-[#252525]'
                }`}
                whileHover={{ scale: 1.1 }}
              >
                <Building2 className={`w-5 h-5 ${exp.current ? 'text-white' : 'text-gray-400'}`} />
              </motion.div>

              <motion.div
                className={`bg-gradient-to-br from-[#140F10] to-[#1a1315] border rounded-xl overflow-hidden cursor-pointer ${
                  expandedId === exp.id ? 'border-[#C96065]/50' : 'border-[#252525]'
                }`}
                onClick={() => setExpandedId(expandedId === exp.id ? null : exp.id)}
                whileHover={{ borderColor: 'rgba(201, 96, 101, 0.3)' }}
              >
                <div className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-lg font-semibold text-white">{exp.role}</h3>
                        {exp.current && (
                          <span className="px-2 py-0.5 bg-[#C96065]/20 text-[#C96065] text-xs rounded-full">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-[#C96065] font-medium">{exp.company}</p>
                    </div>
                    <motion.div
                      animate={{ rotate: expandedId === exp.id ? 90 : 0 }}
                      className="text-gray-400"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </motion.div>
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </span>
                  </div>

                  <p className="text-gray-400 text-sm">{exp.description}</p>

                  <motion.div
                    initial={false}
                    animate={{ 
                      height: expandedId === exp.id ? 'auto' : 0,
                      opacity: expandedId === exp.id ? 1 : 0
                    }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 mt-4 border-t border-[#252525]">
                      <h4 className="text-sm font-medium text-gray-300 mb-2">Key Responsibilities:</h4>
                      <ul className="space-y-1 mb-4">
                        {exp.responsibilities.map((resp, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: expandedId === exp.id ? 1 : 0, x: 0 }}
                            transition={{ delay: i * 0.05 }}
                            className="text-sm text-gray-400 flex items-start gap-2"
                          >
                            <span className="text-[#C96065] mt-1">•</span>
                            {resp}
                          </motion.li>
                        ))}
                      </ul>

                      <h4 className="text-sm font-medium text-gray-300 mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs px-2 py-1 rounded-md bg-[#0a0a0a] text-gray-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default ExperienceSection

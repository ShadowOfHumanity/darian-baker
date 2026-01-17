"use client"

import { motion } from 'framer-motion'
import { GraduationCap, Calendar, Award, BookOpen, ExternalLink } from 'lucide-react'

interface Education {
  id: number
  institution: string
  degree: string
  field: string
  period: string
  description?: string
  achievements?: string[]
  current?: boolean
}

interface Certification {
  id: number
  name: string
  issuer: string
  date: string
  credentialUrl?: string
}

const education: Education[] = [
  {
    id: 1,
    institution: "University of Malta",
    degree: "Bachelor's Degree",
    field: "Software Development",
    period: "Sep 2025 - Present",
    description: "Mastering advanced programming, algorithms, and database management. Currently ranking amongst the top in my class.",
    achievements: [
      "Ranking amongst top students in the cohort",
      "Developed proficiency in software design and agile methodologies",
      "Hands-on projects in structured development and testing"
    ],
    current: true
  },
  {
    id: 2,
    institution: "Giovanni Curmi Higher Sixth Form",
    degree: "A-Levels",
    field: "Computing, Mathematics & Physics",
    period: "Jan 2023 - Dec 2025",
    description: "Advanced studies in computing, mathematics, and sciences with focus on problem-solving and analytical thinking.",
    achievements: [
      "Advanced Computing - Programming & Problem-solving",
      "Advanced Pure Mathematics - Complex theories & concepts",
      "Intermediate Physics - Fundamental principles",
      "Psychology & Systems of Knowledge"
    ]
  }
]

const certifications: Certification[] = [
  {
    id: 1,
    name: ".NET Framework Professional",
    issuer: "Self-certified through professional work",
    date: "2025"
  },
  {
    id: 2,
    name: "Full Stack Development",
    issuer: "GiG - Professional Experience",
    date: "2025"
  },
  {
    id: 3,
    name: "Agile Methodologies",
    issuer: "Professional Practice",
    date: "2024"
  }
]

const EducationSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="w-full max-w-5xl"
    >
      {/* Education */}
      <h2 className="text-gray-100 text-2xl font-semibold tracking-wide mb-8 flex items-center gap-3">
        <GraduationCap className="w-6 h-6 text-[#C96065]" />
        Education
      </h2>

      <div className="grid md:grid-cols-2 gap-4 mb-12">
        {education.map((edu, index) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + index * 0.1 }}
            whileHover={{ y: -5 }}
            className="bg-gradient-to-br from-[#140F10] to-[#1a1315] border border-[#252525] rounded-xl p-5 relative overflow-hidden group"
          >
            {/* Current badge */}
            {edu.current && (
              <div className="absolute top-4 right-4 px-2 py-0.5 bg-[#C96065]/20 text-[#C96065] text-xs rounded-full">
                Current
              </div>
            )}

            {/* Decorative gradient */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#C96065]/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-[#C96065]/20">
                  <BookOpen className="w-5 h-5 text-[#C96065]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{edu.institution}</h3>
                  <p className="text-[#C96065] text-sm">{edu.degree}</p>
                </div>
              </div>

              <p className="text-gray-300 text-sm mb-2">{edu.field}</p>
              
              <div className="flex items-center gap-1 text-gray-400 text-sm mb-3">
                <Calendar className="w-4 h-4" />
                {edu.period}
              </div>

              {edu.description && (
                <p className="text-gray-400 text-sm mb-3">{edu.description}</p>
              )}

              {edu.achievements && edu.achievements.length > 0 && (
                <div className="space-y-1">
                  {edu.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm text-gray-400">
                      <Award className="w-4 h-4 text-[#C96065] mt-0.5 flex-shrink-0" />
                      {achievement}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Certifications */}
      <h2 className="text-gray-100 text-2xl font-semibold tracking-wide mb-6 flex items-center gap-3">
        <Award className="w-6 h-6 text-[#C96065]" />
        Certifications
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 + index * 0.1 }}
            whileHover={{ scale: 1.02, y: -3 }}
            className="bg-gradient-to-br from-[#140F10] to-[#1a1315] border border-[#252525] rounded-xl p-4 group cursor-pointer"
          >
            <div className="flex items-start justify-between mb-2">
              <div className="p-2 rounded-lg bg-[#0a0a0a]">
                <Award className="w-5 h-5 text-[#C96065]" />
              </div>
              {cert.credentialUrl && (
                <motion.a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="p-1 text-gray-400 hover:text-[#C96065] transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
              )}
            </div>
            
            <h3 className="text-white font-medium text-sm mb-1 group-hover:text-[#C96065] transition-colors">
              {cert.name}
            </h3>
            <p className="text-gray-400 text-xs mb-2">{cert.issuer}</p>
            <p className="text-gray-500 text-xs">{cert.date}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default EducationSection

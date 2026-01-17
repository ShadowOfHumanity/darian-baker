"use client"

import { motion, AnimatePresence } from 'framer-motion'
import { 
  ExternalLink, Github, X, 
  ShoppingCart, Gamepad2, Bot, BarChart3, 
  Globe, Server, Wallet, Code2, Layers,
  LucideIcon
} from 'lucide-react'
import { useState } from 'react'

interface Project {
  id: number
  title: string
  description: string
  longDescription: string
  tags: string[]
  icon: LucideIcon
  color: string
  liveUrl?: string
  githubUrl?: string
}

// Your actual projects based on freelance work
const projects: Project[] = [
  {
    id: 1,
    title: "Finance AI Platform",
    description: "AI-powered financial analysis tool for automated trading insights and portfolio management",
    longDescription: "Built a comprehensive financial platform integrating AI for market analysis, automated trading signals, and portfolio optimization. Features real-time data processing, predictive analytics, and secure API integrations with major financial services.",
    tags: ["React", "TypeScript", ".NET", "AI/ML", "PostgreSQL", "APIs"],
    icon: Wallet,
    color: "#10B981",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 2,
    title: "Gaming Platform Backend",
    description: "Scalable multiplayer game server with real-time synchronization and matchmaking",
    longDescription: "High-performance game backend handling real-time multiplayer synchronization, player authentication, matchmaking algorithms, and leaderboards. Built with event-driven architecture supporting thousands of concurrent players.",
    tags: ["C#", ".NET", "Redis", "WebSockets", "SQL Server"],
    icon: Gamepad2,
    color: "#8B5CF6",
    githubUrl: "#"
  },
  {
    id: 3,
    title: "Retail E-Commerce Solution",
    description: "Full-stack e-commerce platform with inventory management and payment processing",
    longDescription: "Comprehensive e-commerce solution featuring real-time inventory tracking, secure payment processing, order management, and an admin dashboard. Enhanced user engagement by 25%+ through optimized UX and API integrations.",
    tags: ["Next.js", "TypeScript", ".NET", "PostgreSQL", "Stripe"],
    icon: ShoppingCart,
    color: "#F59E0B",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 4,
    title: "AI Chatbot Integration",
    description: "Enterprise chatbot with custom knowledge base and natural language processing",
    longDescription: "AI-powered chat application integrating large language models with custom fine-tuning for domain-specific knowledge. Features conversation context management and seamless third-party service integrations.",
    tags: ["React", "TypeScript", "Python", "OpenAI", "APIs"],
    icon: Bot,
    color: "#EC4899",
    liveUrl: "#"
  },
  {
    id: 5,
    title: "GiG Automation Systems",
    description: "Enterprise automation and configuration management across multiple system levels",
    longDescription: "Full-stack applications driving automation and configuration for Gaming Innovation Group. Leveraged robust software architecture with Redis caching, Docker containerization, and .NET framework to enhance operational efficiency.",
    tags: ["C#", ".NET", "Redis", "Docker", "SQL Server", "Automation"],
    icon: Server,
    color: "#3B82F6"
  },
  {
    id: 6,
    title: "Custom Web Applications",
    description: "15+ bespoke web solutions for clients across various industries",
    longDescription: "Delivered over 15 custom software projects spanning finance, gaming, and retail industries. Each project featured scalable architecture, API integrations, and user engagement improvements averaging 25% or higher.",
    tags: ["React", "Next.js", ".NET", "TypeScript", "SQL", "APIs"],
    icon: Globe,
    color: "#06B6D4",
    liveUrl: "#"
  }
]

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="w-full max-w-5xl"
      >
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-gray-100 text-2xl font-semibold tracking-wide flex items-center gap-3">
            <Layers className="w-6 h-6 text-[#C96065]" />
            Featured Projects
          </h2>
          <span className="text-gray-500 text-sm">15+ projects delivered</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => {
            const IconComponent = project.icon
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.05 }}
                onHoverStart={() => setHoveredId(project.id)}
                onHoverEnd={() => setHoveredId(null)}
                onClick={() => setSelectedProject(project)}
                className="relative bg-gradient-to-br from-[#140F10] to-[#1a1315] border border-[#252525] rounded-xl p-5 cursor-pointer group overflow-hidden"
              >
                {/* Hover gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#C96065]/0 to-[#EB5C58]/0"
                  animate={{
                    background: hoveredId === project.id 
                      ? 'linear-gradient(to bottom right, rgba(201, 96, 101, 0.1), rgba(235, 92, 88, 0.05))' 
                      : 'linear-gradient(to bottom right, rgba(201, 96, 101, 0), rgba(235, 92, 88, 0))'
                  }}
                />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <motion.div 
                      className="p-3 rounded-xl"
                      style={{ backgroundColor: `${project.color}20` }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <IconComponent className="w-6 h-6" style={{ color: project.color }} />
                    </motion.div>
                    <div className="flex gap-2">
                      {project.githubUrl && (
                        <motion.a
                          href={project.githubUrl}
                          onClick={(e) => e.stopPropagation()}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 rounded-lg bg-[#0a0a0a] text-gray-400 hover:text-white transition-colors"
                        >
                          <Github className="w-4 h-4" />
                        </motion.a>
                      )}
                      {project.liveUrl && (
                        <motion.a
                          href={project.liveUrl}
                          onClick={(e) => e.stopPropagation()}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 rounded-lg bg-[#0a0a0a] text-gray-400 hover:text-[#C96065] transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </motion.a>
                      )}
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#EB5C58] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>

                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 rounded-md bg-[#0a0a0a] text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="text-xs px-2 py-1 rounded-md bg-[#0a0a0a] text-gray-500">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Bottom border glow */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-[2px]"
                  style={{ background: `linear-gradient(to right, transparent, ${project.color}, transparent)` }}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: hoveredId === project.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            )
          })}
        </div>
      </motion.div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg bg-gradient-to-br from-[#0a0a0a] to-[#140F10] border border-[#252525] rounded-2xl p-6 z-50"
            >
              <motion.button
                onClick={() => setSelectedProject(null)}
                whileHover={{ scale: 1.1, rotate: 90 }}
                className="absolute top-4 right-4 p-1 text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </motion.button>

              <motion.div 
                className="p-4 rounded-xl w-fit mb-4"
                style={{ backgroundColor: `${selectedProject.color}20` }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', delay: 0.1 }}
              >
                <selectedProject.icon className="w-10 h-10" style={{ color: selectedProject.color }} />
              </motion.div>
              
              <h3 className="text-2xl font-bold text-white mb-2">{selectedProject.title}</h3>
              <p className="text-gray-400 mb-4">{selectedProject.longDescription}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tags.map((tag) => (
                  <span key={tag} className="text-sm px-3 py-1 rounded-lg bg-[#C96065]/20 text-[#C96065]">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                {selectedProject.liveUrl && (
                  <motion.a
                    href={selectedProject.liveUrl}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 bg-gradient-to-r from-[#EB5C58] to-[#C96065] text-white py-3 rounded-lg flex items-center justify-center gap-2 font-medium"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Live Demo
                  </motion.a>
                )}
                {selectedProject.githubUrl && (
                  <motion.a
                    href={selectedProject.githubUrl}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 bg-[#252525] text-white py-3 rounded-lg flex items-center justify-center gap-2 font-medium"
                  >
                    <Github className="w-5 h-5" />
                    Source Code
                  </motion.a>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default ProjectsSection

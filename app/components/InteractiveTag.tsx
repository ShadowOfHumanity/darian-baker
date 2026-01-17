"use client"

import { motion } from 'framer-motion'
import { ReactNode, useState } from 'react'

interface TagProps {
  children?: ReactNode
  color?: string
  icon?: ReactNode
}

const skillDetails: Record<string, { description: string; level: number }> = {
  'C#': { description: 'Game & Backend Development', level: 95 },
  'TypeScript': { description: 'Type-safe Web Development', level: 95 },
  'React': { description: 'Frontend UI Library', level: 92 },
  'Next.js': { description: 'Full-stack React Framework', level: 90 },
  '.NET': { description: 'Enterprise Backend Framework', level: 95 },
  'SQL': { description: 'Database Management', level: 90 },
  'Docker': { description: 'Containerization', level: 70 },
  'Git': { description: 'Version Control', level: 95 },
  'Redis': { description: 'In-memory Data Store', level: 70 },
  'PostgreSQL': { description: 'Relational Database', level: 90 },
  'SQL Server': { description: 'Enterprise Database', level: 90 },
  'MongoDB': { description: 'NoSQL Database', level: 70 },
}

const InteractiveTag = ({ children, icon }: TagProps) => {
  const [isHovered, setIsHovered] = useState(false)
  const skill = children?.toString() || 'Tag'
  const details = skillDetails[skill]

  return (
    <motion.div
      className="relative"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        className="bg-[#140F10] text-gray-100 rounded-lg px-3 py-2 text-center cursor-pointer border border-transparent flex items-center gap-2 justify-center"
        whileHover={{ 
          scale: 1.05,
          borderColor: '#C96065',
          backgroundColor: '#1a1315'
        }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      >
        {icon}
        {children || 'Tag'}
      </motion.div>
      
      {/* Tooltip on hover */}
      {details && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.9 }}
          animate={{ 
            opacity: isHovered ? 1 : 0, 
            y: isHovered ? 0 : 10,
            scale: isHovered ? 1 : 0.9
          }}
          className="absolute z-50 top-full mt-2 left-1/2 -translate-x-1/2 bg-[#1a1315] border border-[#C96065]/30 rounded-lg px-4 py-3 min-w-[180px] pointer-events-none"
        >
          <p className="text-xs text-gray-400 mb-2">{details.description}</p>
          <div className="w-full bg-[#0a0a0a] rounded-full h-2">
            <motion.div
              className="h-2 rounded-full bg-gradient-to-r from-[#C96065] to-[#EB5C58]"
              initial={{ width: 0 }}
              animate={{ width: isHovered ? `${details.level}%` : 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            />
          </div>
          <p className="text-xs text-[#C96065] mt-1 text-right">{details.level}%</p>
        </motion.div>
      )}
    </motion.div>
  )
}

export default InteractiveTag

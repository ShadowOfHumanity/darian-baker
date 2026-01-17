"use client"

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { LucideIcon } from 'lucide-react'

interface ServiceCardProps {
  title: string
  description: string
  icon: LucideIcon
  delay?: number
}

const ServiceCard = ({ title, description, icon: Icon, delay = 0 }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ x: 10 }}
      className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-transparent to-transparent hover:from-[#140F10] hover:to-[#1a1315] transition-all duration-300 cursor-pointer group"
    >
      <motion.div
        className="p-2 rounded-lg bg-[#140F10] group-hover:bg-[#C96065]/20 transition-colors duration-300"
        whileHover={{ rotate: [0, -10, 10, 0] }}
        transition={{ duration: 0.5 }}
      >
        <Icon className="w-5 h-5 text-[#C96065]" />
      </motion.div>
      <div>
        <h4 className="text-gray-200 font-medium group-hover:text-white transition-colors">
          {title}
        </h4>
        <p className="text-gray-500 text-sm mt-1 group-hover:text-gray-400 transition-colors">
          {description}
        </p>
      </div>
    </motion.div>
  )
}

export default ServiceCard

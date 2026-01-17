"use client"

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary'
  onClick?: () => void
  icon?: ReactNode
}

const AnimatedButton = ({ children, variant = 'primary', onClick, icon }: ButtonProps) => {
  const isPrimary = variant === 'primary'

  return (
    <motion.button
      onClick={onClick}
      className={`
        relative overflow-hidden rounded-lg px-6 py-3 font-medium cursor-pointer
        flex items-center gap-2 justify-center
        ${isPrimary 
          ? 'bg-gradient-to-r from-[#EB5C58] to-[#C96065] text-white' 
          : 'bg-[#140F10] border-2 border-[#252525] text-gray-100'
        }
      `}
      whileHover={{ 
        scale: 1.03,
        boxShadow: isPrimary 
          ? '0 10px 30px -10px rgba(201, 96, 101, 0.5)' 
          : '0 10px 30px -10px rgba(0, 0, 0, 0.3)'
      }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      {/* Shimmer effect for primary */}
      {isPrimary && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
          animate={{ translateX: ['−100%', '200%'] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
        />
      )}
      
      {/* Hover gradient overlay for secondary */}
      {!isPrimary && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-[#C96065]/0 to-[#EB5C58]/0 hover:from-[#C96065]/10 hover:to-[#EB5C58]/5 transition-all duration-300"
        />
      )}
      
      <span className="relative z-10 flex items-center gap-2">
        {icon}
        {children}
      </span>
    </motion.button>
  )
}

export default AnimatedButton

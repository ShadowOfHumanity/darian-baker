"use client"

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ReactNode, useEffect, useState } from 'react'

interface BoxProps {
  children?: ReactNode
  TopText?: string
  Subtitle?: string
  delay?: number
  countUp?: boolean
  countTarget?: number
}

const AnimatedBox = ({ children, TopText, Subtitle, delay = 0, countUp = false, countTarget }: BoxProps) => {
  const [count, setCount] = useState(0)
  const [isInView, setIsInView] = useState(false)

  // Parse target number from TopText
  const target = countTarget ?? parseInt(TopText?.replace(/\D/g, '') || '0')
  const suffix = TopText?.replace(/[0-9]/g, '') || ''

  useEffect(() => {
    if (countUp && isInView) {
      const duration = 2000
      const steps = 60
      const increment = target / steps
      let current = 0
      
      const timer = setInterval(() => {
        current += increment
        if (current >= target) {
          setCount(target)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)

      return () => clearInterval(timer)
    }
  }, [isInView, countUp, target])

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ 
        scale: 1.02,
        y: -5,
        transition: { type: 'spring', stiffness: 300 }
      }}
      onViewportEnter={() => setIsInView(true)}
      className="w-44 h-28 flex flex-col justify-center bg-gradient-to-br from-[#140F10] to-[#1a1315] border border-[#252525] rounded-xl px-4 py-3 cursor-pointer group relative overflow-hidden"
    >
      {/* Animated background glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#C96065]/0 to-[#EB5C58]/0 group-hover:from-[#C96065]/10 group-hover:to-[#EB5C58]/5 transition-all duration-500"
      />
      
      {/* Animated border glow */}
      <motion.div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: 'linear-gradient(135deg, transparent 40%, rgba(201, 96, 101, 0.1) 50%, transparent 60%)',
        }}
      />
      
      <div className="relative z-10">
        <motion.div 
          className="text-2xl tracking-wide font-semibold text-[#8B6369] group-hover:text-[#C96065] transition-colors duration-300"
        >
          {countUp ? `${count}${suffix}` : (children || TopText)}
        </motion.div>
        <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
          {Subtitle}
        </div>
      </div>
    </motion.div>
  )
}

export default AnimatedBox

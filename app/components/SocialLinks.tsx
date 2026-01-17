"use client"

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Globe } from 'lucide-react'

const socials = [
  { icon: Github, href: 'https://github.com/darianbaker', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/darianbaker', label: 'LinkedIn' },
  { icon: Globe, href: 'https://darianbaker.eu', label: 'Website' },
  { icon: Mail, href: 'mailto:darianbakerbray@gmail.com', label: 'Email' },
]

const SocialLinks = () => {
  return (
    <div className="flex gap-3">
      {socials.map((social, index) => (
        <motion.a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 + index * 0.1 }}
          whileHover={{ 
            y: -3,
            color: '#C96065'
          }}
          whileTap={{ scale: 0.95 }}
          className="p-2 rounded-lg bg-[#140F10] border border-[#252525] text-gray-400 hover:border-[#C96065]/50 transition-colors duration-300"
          aria-label={social.label}
        >
          <social.icon className="w-5 h-5" />
        </motion.a>
      ))}
    </div>
  )
}

export default SocialLinks

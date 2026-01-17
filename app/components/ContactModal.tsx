"use client"

import { motion, AnimatePresence } from 'framer-motion'
import { X, Send, Mail, User, MessageSquare, Phone, Globe } from 'lucide-react'
import { useState } from 'react'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // TODO: Integrate with backend API to send email directly
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      if (response.ok) {
        setSubmitted(true)
        setTimeout(() => {
          onClose()
          setSubmitted(false)
          setFormData({ name: '', email: '', message: '' })
        }, 2000)
      } else {
        alert('Failed to send message. Please try again later.')
      }
    } catch (error) {
      alert('Failed to send message. Please try again later.')
    }
    setIsSubmitting(false)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-gradient-to-br from-[#0a0a0a] to-[#140F10] border border-[#252525] rounded-2xl p-6 z-50 shadow-2xl"
          >
            {/* Close button */}
            <motion.button
              onClick={onClose}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              className="absolute top-4 right-4 p-1 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </motion.button>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', delay: 0.1 }}
                  className="w-16 h-16 mx-auto bg-[#C96065]/20 rounded-full flex items-center justify-center mb-4"
                >
                  <Send className="w-8 h-8 text-[#C96065]" />
                </motion.div>
                <h3 className="text-xl font-semibold text-white mb-2">Message Sent!</h3>
                <p className="text-gray-400">Thank you for reaching out. I'll get back to you soon.</p>
              </motion.div>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-white mb-2">Get in Touch</h2>
                <p className="text-gray-400 mb-4">I'd love to hear from you!</p>

                {/* Quick contact info */}
                <div className="flex flex-wrap gap-3 mb-6">
                  <a 
                    href="mailto:darianbakerbray@gmail.com" 
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#C96065] transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    darianbakerbray@gmail.com
                  </a>
                  <a 
                    href="https://darianbaker.eu" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#C96065] transition-colors"
                  >
                    <Globe className="w-4 h-4" />
                    darianbaker.eu
                  </a>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full bg-[#0a0a0a] border border-[#252525] rounded-lg pl-11 pr-4 py-3 text-white placeholder-gray-500 focus:border-[#C96065] focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full bg-[#0a0a0a] border border-[#252525] rounded-lg pl-11 pr-4 py-3 text-white placeholder-gray-500 focus:border-[#C96065] focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-4 w-5 h-5 text-gray-500" />
                    <textarea
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={4}
                      className="w-full bg-[#0a0a0a] border border-[#252525] rounded-lg pl-11 pr-4 py-3 text-white placeholder-gray-500 focus:border-[#C96065] focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-[#EB5C58] to-[#C96065] text-white font-medium py-3 rounded-lg flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                      />
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              </>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default ContactModal

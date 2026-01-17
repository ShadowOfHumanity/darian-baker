"use client"

import { motion } from 'framer-motion'
import { 
  Braces, Calendar, MapPin, Disc, Globe, Gamepad2, 
  Server, Cpu, Code2, ArrowDown, Coffee, Heart,
  Download, FileText
} from 'lucide-react'
import { useState } from 'react'
import { GetAge } from './lib/Utility'
import InteractiveTag from './components/InteractiveTag'
import AnimatedBox from './components/AnimatedBox'
import AnimatedButton from './components/AnimatedButton'
import AnimatedSection from './components/AnimatedSection'
import TypewriterText from './components/TypewriterText'
import ServiceCard from './components/ServiceCard'
import FloatingParticles from './components/FloatingParticles'
import SocialLinks from './components/SocialLinks'
import ContactModal from './components/ContactModal'
import ProjectsSection from './components/ProjectsSection'
import ScrollIndicator from './components/ScrollIndicator'
import Navbar from './components/Navbar'
import ExperienceSection from './components/ExperienceSection'
import EducationSection from './components/EducationSection'
import TechStackSection from './components/TechStackSection'

const services = [
  { 
    title: 'Web Development', 
    description: 'Modern, responsive web applications with React & Next.js',
    icon: Globe 
  },
  { 
    title: 'Game Development', 
    description: 'Engaging games and interactive experiences with Unity',
    icon: Gamepad2 
  },
  { 
    title: 'Backend Services', 
    description: 'Scalable APIs and microservices with .NET',
    icon: Server 
  },
  { 
    title: 'AI Solutions', 
    description: 'Intelligent automation and machine learning integration',
    icon: Cpu 
  },
  { 
    title: 'API Development', 
    description: 'RESTful and GraphQL APIs for seamless integration',
    icon: Code2 
  },
]

const skills = [
  'C#', 'TypeScript', 'React', 'Next.js', '.NET', 'SQL', 'Docker', 'Git'
]

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false)
  const age = GetAge()

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <ScrollIndicator />
      <Navbar />
      <FloatingParticles />
      
      <main className="min-h-screen relative z-10">
        {/* Hero Section */}
        <section id="about" className="min-h-screen flex items-center justify-center px-6 pt-20">
          <div className="max-w-5xl w-full">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Left Column - About Me */}
              <div>
                <AnimatedSection delay={0}>
                  <div className="flex items-center gap-6 mb-6">
                    <motion.img
                      src="https://avatars.githubusercontent.com/u/79085418?v=4"
                      alt="Darian Baker Profile"
                      className="w-20 h-20 rounded-full border-4 border-[#C96065] shadow-lg"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 }}
                    />
                    <motion.span 
                      className="inline-flex items-center gap-2 text-[#C96065] text-sm font-medium px-3 py-1 rounded-full bg-[#C96065]/10 border border-[#C96065]/20"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Heart className="w-4 h-4" />
                      Available for opportunities
                    </motion.span>
                  </div>
                </AnimatedSection>

                <AnimatedSection delay={0.1}>
                  <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">
                    Hi, I'm{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EB5C58] to-[#C96065]">
                      Darian
                    </span>
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C96065] to-[#8B6369]">
                      Baker
                    </span>
                  </h1>
                </AnimatedSection>

                <AnimatedSection delay={0.2}>
                  <div className="text-2xl text-gray-300 mb-8 h-10">
                    <TypewriterText 
                      texts={[
                        'Fullstack Developer',
                        'Problem Solver',
                        'Tech Enthusiast',
                        'Tea Connoisseur'
                      ]} 
                    />
                  </div>
                </AnimatedSection>

                <AnimatedSection delay={0.3}>
                  <div className="space-y-3 mb-8">
                    {[
                      { icon: MapPin, text: 'Based in Għargħur, Malta' },
                      { icon: Disc, text: `${age} Years Old` },
                      { icon: Braces, text: 'Fullstack Software Developer' },
                      { icon: Calendar, text: `${age - 17}+ Years Of Experience` },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-3 text-gray-400 group cursor-default"
                      >
                        <item.icon className="w-5 h-5 text-[#C96065] group-hover:scale-110 transition-transform" />
                        <span className="group-hover:text-gray-300 transition-colors">{item.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </AnimatedSection>

                <AnimatedSection delay={0.5}>
                  <p className="text-gray-400 leading-relaxed mb-8 max-w-md">
                    As a {age}-year-old software developer from Malta
                    {age < 21 && ' currently studying at the University of Malta'}, 
                    I push my skills further daily. Outside of development, I enjoy football, 
                    staying active, and discovering elegant solutions to complex problems.
                  </p>
                </AnimatedSection>

                <AnimatedSection delay={0.6}>
                  <div className="flex flex-wrap gap-4 mb-8">
                    <AnimatedButton 
                      variant="primary" 
                      onClick={() => setIsContactOpen(true)}
                    >
                      Contact Me
                    </AnimatedButton>
                    <AnimatedButton 
                      variant="secondary"
                      onClick={scrollToProjects}
                      icon={<ArrowDown className="w-4 h-4" />}
                    >
                      View Projects
                    </AnimatedButton>
                    <a 
                      href="/file.pdf" 
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block"
                    >
                      <AnimatedButton 
                        variant="secondary"
                        icon={<Download className="w-4 h-4" />}
                      >
                        Download CV
                      </AnimatedButton>
                    </a>
                  </div>
                </AnimatedSection>

                <AnimatedSection delay={0.7}>
                  <SocialLinks />
                </AnimatedSection>
              </div>

              {/* Right Column - Skills & Services */}
              <div className="md:pt-16">
                <AnimatedSection delay={0.3} direction="left">
                  <div id="skills" className="mb-10">
                    <h2 className="text-lg font-semibold text-gray-100 mb-4 flex items-center gap-2">
                      <Code2 className="w-5 h-5 text-[#C96065]" />
                      Key Skills
                    </h2>
                    <div className="grid grid-cols-4 gap-2">
                      {skills.map((skill, index) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.5 + index * 0.05 }}
                        >
                          <InteractiveTag>{skill}</InteractiveTag>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>

                <AnimatedSection delay={0.5} direction="left">
                  <div>
                    <h2 className="text-lg font-semibold text-gray-100 mb-4 flex items-center gap-2">
                      <Heart className="w-5 h-5 text-[#C96065]" />
                      What I Do
                    </h2>
                    <div className="space-y-1">
                      {services.map((service, index) => (
                        <ServiceCard
                          key={service.title}
                          title={service.title}
                          description={service.description}
                          icon={service.icon}
                          delay={0.6 + index * 0.1}
                        />
                      ))}
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>

            {/* Stats Section */}
            <AnimatedSection delay={0.8}>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-16">
                <AnimatedBox 
                  TopText={`${age - 17}+`} 
                  Subtitle="Years of Experience" 
                  delay={0.9}
                  countUp
                  countTarget={age - 17}
                />
                <AnimatedBox 
                  TopText="5+" 
                  Subtitle="Projects in Production" 
                  delay={1.0}
                  countUp
                  countTarget={5}
                />
                <AnimatedBox 
                  TopText="20+" 
                  Subtitle="Projects Completed" 
                  delay={1.1}
                  countUp
                  countTarget={20}
                />
                <AnimatedBox 
                  TopText="403+" 
                  Subtitle="Teas Consumed" 
                  delay={1.2}
                  countUp
                  countTarget={403}
                />
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 px-6 flex justify-center">
          <ExperienceSection />
        </section>

        {/* Tech Stack Section */}
        <section id="tech" className="py-20 px-6 flex justify-center bg-gradient-to-b from-transparent via-[#0d0d0d] to-transparent">
          <TechStackSection />
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-6 flex justify-center">
          <ProjectsSection />
        </section>

        {/* Education Section */}
        <section id="education" className="py-20 px-6 flex justify-center bg-gradient-to-b from-transparent via-[#0d0d0d] to-transparent">
          <EducationSection />
        </section>

        {/* Contact CTA Section */}
        <section id="contact" className="py-20 px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#C96065]/20 flex items-center justify-center"
            >
              <Code2 className="w-8 h-8 text-[#C96065]" />
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Let's Build Something Amazing
            </h2>
            <p className="text-gray-400 mb-8 max-w-lg mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <AnimatedButton 
                variant="primary" 
                onClick={() => setIsContactOpen(true)}
              >
                Get In Touch
              </AnimatedButton>
              <a 
                href="/file.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <AnimatedButton 
                  variant="secondary"
                  icon={<FileText className="w-4 h-4" />}
                >
                  View Resume
                </AnimatedButton>
              </a>
            </div>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-6 border-t border-[#252525]">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-gray-500 text-sm flex items-center gap-1"
            >
              © {new Date().getFullYear()} Darian Baker. Built with Next.js & <Heart className="w-4 h-4 text-[#C96065]" />
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-2 text-gray-500 text-sm"
            >
              <Coffee className="w-4 h-4" />
              Fueled by tea
            </motion.div>
          </div>
        </footer>
      </main>

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  )
}
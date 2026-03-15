"use client"

import { motion } from 'framer-motion'
import { Github, GitPullRequest, Star, Shield, ExternalLink, Code2, TestTube } from 'lucide-react'

const OpenSourceSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
      className="w-full max-w-5xl"
    >
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-gray-100 text-2xl font-semibold tracking-wide flex items-center gap-3">
          <GitPullRequest className="w-6 h-6 text-[#C96065]" />
          Open Source Contributions
        </h2>
        <span className="text-gray-500 text-sm">Real-world impact beyond personal projects</span>
      </div>

      {/* Featured Contribution */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="relative bg-gradient-to-br from-[#140F10] to-[#1a1315] border border-[#C96065]/40 rounded-2xl p-8 overflow-hidden group"
        whileHover={{ borderColor: 'rgba(201, 96, 101, 0.7)' }}
      >
        {/* Background glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#C96065]/5 via-transparent to-[#EB5C58]/5 pointer-events-none" />

        {/* Top glow line */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C96065] to-transparent"
          initial={{ scaleX: 0.3, opacity: 0.5 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
        />

        <div className="relative z-10">
          {/* Header row */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
            <div className="flex items-center gap-4">
              {/* Microsoft / .NET icon */}
              <motion.div
                className="p-4 rounded-xl bg-[#C96065]/15 border border-[#C96065]/25"
                whileHover={{ scale: 1.08, rotate: 3 }}
              >
                <Code2 className="w-8 h-8 text-[#C96065]" />
              </motion.div>

              <div>
                {/* Contributor badge */}
                <div className="flex items-center gap-2 mb-1">
                  <motion.span
                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-[#C96065]/20 text-[#EB5C58] border border-[#C96065]/30"
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ repeat: Infinity, duration: 2.5 }}
                  >
                    <Shield className="w-3 h-3" />
                    Verified Contributor · Microsoft OSS
                  </motion.span>
                </div>

                {/* Repo path */}
                <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-[#EB5C58] transition-colors">
                  dotnet / aspnetcore
                </h3>
                <p className="text-[#C96065] text-sm font-mono mt-0.5">
                  tests / ResponseDrainingTests
                </p>
              </div>
            </div>

            {/* GitHub link */}
            <motion.a
              href="https://github.com/dotnet/aspnetcore"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0a0a0a] border border-[#252525] text-gray-400 hover:text-white hover:border-[#C96065]/50 transition-all text-sm self-start md:self-auto"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Github className="w-4 h-4" />
              View on GitHub
              <ExternalLink className="w-3 h-3" />
            </motion.a>
          </div>

          {/* Description */}
          <p className="text-gray-300 leading-relaxed mb-6 max-w-3xl text-[15px]">
            Contributed directly to <span className="text-white font-semibold">ASP.NET Core</span> —
            one of Microsoft&apos;s most active open-source repositories with thousands of contributors worldwide.
            Work focused on the <span className="text-[#EB5C58] font-semibold">ResponseDrainingTests</span> area,
            which validates the server&apos;s behaviour when draining response bodies before closing HTTP connections —
            a critical piece of infrastructure ensuring reliable keep-alive connections, preventing connection resets,
            and maintaining HTTP/1.1 protocol correctness under real-world conditions.
          </p>

          {/* What was done */}
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {[
              {
                icon: TestTube,
                title: 'Test Coverage',
                desc: 'Extended and hardened response draining test scenarios within the ASP.NET Core test suite',
              },
              {
                icon: Shield,
                title: 'Protocol Integrity',
                desc: 'Covered HTTP keep-alive edge cases ensuring the server drains bodies correctly before connection reuse',
              },
              {
                icon: Star,
                title: 'Microsoft Codebase',
                desc: 'Navigated and contributed to a large, production-grade codebase maintained by Microsoft and the .NET team',
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="bg-[#0d0d0d]/60 border border-[#252525] rounded-xl p-4"
              >
                <item.icon className="w-5 h-5 text-[#C96065] mb-2" />
                <p className="text-white text-sm font-semibold mb-1">{item.title}</p>
                <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2">
            {['C#', 'ASP.NET Core', '.NET', 'xUnit', 'HTTP/1.1', 'Unit Testing', 'Open Source'].map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 rounded-md bg-[#C96065]/10 text-[#C96065] border border-[#C96065]/20 font-mono"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default OpenSourceSection

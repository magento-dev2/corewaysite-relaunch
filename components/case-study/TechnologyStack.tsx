'use client'

import { motion } from 'framer-motion'

// Technology logo mapping to Simple Icons slugs
const techLogoMap: Record<string, { slug: string; color: string }> = {
  'React': { slug: 'react', color: '#61DAFB' },
  'Node.js': { slug: 'nodedotjs', color: '#339933' },
  'MongoDB': { slug: 'mongodb', color: '#47A248' },
  'AWS': { slug: 'amazonaws', color: '#FF9900' },
  'Elasticsearch': { slug: 'elasticsearch', color: '#005571' },
  'Redis': { slug: 'redis', color: '#DC382D' },
  'Chromium': { slug: 'googlechrome', color: '#4285F4' },
  'Magento 2': { slug: 'magento', color: '#EE672F' },
  'PHP': { slug: 'php', color: '#777BB4' },
  'MySQL': { slug: 'mysql', color: '#4479A1' },
  'Varnish Cache': { slug: 'varnish', color: '#00A4E4' },
  'NationBuilder': { slug: 'databricks', color: '#FF3621' },
  'HTML/CSS': { slug: 'html5', color: '#E34F26' },
  'jQuery': { slug: 'jquery', color: '#0769AD' },
  'Webhooks': { slug: 'webhook', color: '#2088FF' },
  'REST APIs': { slug: 'fastapi', color: '#009688' },
}

export default function TechnologyStack({ data }: { data: any }) {
  const technologies = data.technologies || []

  const getTechInfo = (tech: string) => {
    const info = techLogoMap[tech]
    if (info) {
      return {
        logoUrl: `https://cdn.simpleicons.org/${info.slug}/${info.color.replace('#', '')}`,
        color: info.color,
      }
    }
    // Fallback for unknown technologies
    return {
      logoUrl: `https://via.placeholder.com/64/6366f1/ffffff?text=${tech.charAt(0)}`,
      color: '#6366f1',
    }
  }

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0E0918] via-[#1a0f2e] to-[#0E0918]">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-fuchsia-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-fuchsia-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-semibold">
              Tech Stack
            </span>
          </motion.div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-fuchsia-200 bg-clip-text text-transparent">
            Technology Stack
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Cutting-edge technologies powering innovative solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {technologies.map((tech: string, index: number) => {
            const { logoUrl, color } = getTechInfo(tech)

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: [0.25, 0.4, 0.25, 1]
                }}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.2 }
                }}
                className="group relative"
              >
                {/* Glow effect on hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
                  style={{
                    background: `radial-gradient(circle at center, ${color}40, transparent 70%)`
                  }}
                />

                {/* Card */}
                <div className="relative h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300 group-hover:shadow-2xl">
                  {/* Logo Container */}
                  <div className="flex flex-col items-center justify-center gap-4">
                    <div className="relative w-16 h-16 flex items-center justify-center">
                      {/* Background glow */}
                      <div
                        className="absolute inset-0 rounded-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300"
                        style={{ backgroundColor: color }}
                      />
                      {/* Logo */}
                      <img
                        src={logoUrl}
                        alt={`${tech} logo`}
                        className="relative w-12 h-12 object-contain filter drop-shadow-lg transition-transform duration-300 group-hover:scale-110"
                        onError={(e) => {
                          // Fallback to a colored circle with initial
                          const target = e.target as HTMLImageElement
                          target.style.display = 'none'
                          const parent = target.parentElement
                          if (parent) {
                            const fallback = document.createElement('div')
                            fallback.className = 'w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-xl'
                            fallback.style.backgroundColor = color
                            fallback.textContent = tech.charAt(0)
                            parent.appendChild(fallback)
                          }
                        }}
                      />
                    </div>

                    {/* Technology Name */}
                    <div className="text-center">
                      <h3 className="text-white font-semibold text-sm leading-tight group-hover:text-purple-200 transition-colors duration-300">
                        {tech}
                      </h3>
                    </div>
                  </div>

                  {/* Shine effect */}
                  <div className="absolute inset-0 rounded-2xl overflow-hidden">
                    <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

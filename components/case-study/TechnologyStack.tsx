'use client'

import { motion } from 'framer-motion'
import { Cpu, Cloud, Code, Database, Shield, Layers } from 'lucide-react'

const techStack = [
  {
    category: 'AI & Machine Learning',
    icon: Cpu,
 color: 'from-purple-600 to-fuchsia-600',
    technologies: [
      { name: 'TensorFlow', logo: '🔷' },
      { name: 'PyTorch', logo: '🔥' },
      { name: 'OpenAI GPT', logo: '🤖' },
      { name: 'Scikit-learn', logo: '📊' },
    ],
  },
  {
    category: 'Backend',
    icon: Code,
 color: 'from-purple-600 to-fuchsia-600',
    technologies: [
      { name: 'Node.js', logo: '💚' },
      { name: 'Python', logo: '🐍' },
      { name: 'Go', logo: '🔵' },
      { name: 'GraphQL', logo: '🔺' },
    ],
  },
  {
    category: 'Frontend',
    icon: Layers,
 color: 'from-purple-600 to-fuchsia-600',
    technologies: [
      { name: 'React', logo: '⚛️' },
      { name: 'Next.js', logo: '▲' },
      { name: 'TypeScript', logo: '🔷' },
      { name: 'Tailwind', logo: '🎨' },
    ],
  },
  {
    category: 'Database',
    icon: Database,
 color: 'from-purple-600 to-fuchsia-600',
    technologies: [
      { name: 'PostgreSQL', logo: '🐘' },
      { name: 'MongoDB', logo: '🍃' },
      { name: 'Redis', logo: '🔴' },
      { name: 'Elasticsearch', logo: '🔍' },
    ],
  },
  {
    category: 'Infrastructure',
    icon: Cloud,
 color: 'from-purple-600 to-fuchsia-600',
    technologies: [
      { name: 'AWS', logo: '☁️' },
      { name: 'Docker', logo: '🐋' },
      { name: 'Kubernetes', logo: '☸️' },
      { name: 'Terraform', logo: '🏗️' },
    ],
  },
  {
    category: 'Security',
    icon: Shield,
 color: 'from-purple-600 to-fuchsia-600',
    technologies: [
      { name: 'Auth0', logo: '🔐' },
      { name: 'Vault', logo: '🔒' },
      { name: 'OWASP', logo: '🛡️' },
      { name: 'SSL/TLS', logo: '🔑' },
    ],
  },
]

export default function TechnologyStack() {
  return (
    <section className="py-10 bg-gradient-to-b from-[#0E0918] via-[#1a1325] to-[#0E0918]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-white">
            Technology Stack
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Enterprise-grade technologies powering the solution
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techStack.map((stack, index) => {
            const Icon = stack.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative h-full bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 transition-all duration-500 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/20 hover:scale-[1.03] hover:bg-white/10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${stack.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      {stack.category}
                    </h3>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {stack.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 + techIndex * 0.05 }}
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center gap-2 bg-purple-500/10 rounded-lg p-3 hover:bg-purple-500/20 transition-colors cursor-pointer border border-purple-500/20"
                      >
                        <span className="text-2xl">{tech.logo}</span>
                        <span className="text-sm font-medium text-gray-300">
                          {tech.name}
                        </span>
                      </motion.div>
                    ))}
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

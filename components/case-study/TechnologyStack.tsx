'use client'

import { motion } from 'framer-motion'
import { Code } from 'lucide-react'

export default function TechnologyStack({ data }: { data: any }) {
  const technologies = data.technologies || []

  return (
    <section className="py-20 bg-gradient-to-b from-[#0E0918] via-[#1a1325] to-[#0E0918]">
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
            Technologies powering the solution
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
          {technologies.map((tech: string, index: number) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl px-8 py-4 hover:border-purple-500/50 hover:bg-white/10 transition-all cursor-default"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-fuchsia-600 flex items-center justify-center text-white">
                  <Code size={20} />
                </div>
                <span className="text-lg font-semibold text-white">
                  {tech}
                </span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

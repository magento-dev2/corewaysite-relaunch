'use client'

import { motion } from 'framer-motion'

const challenges = [
  {
    number: '01',
    title: 'Legacy System Integration',
    description: 'Connecting modern AI solutions with 15-year-old enterprise systems required careful planning to avoid disrupting daily operations while ensuring data integrity across platforms.',
  },
  {
    number: '02',
    title: 'Change Management',
    description: 'Training 500+ employees across multiple departments demanded a comprehensive program that maintained productivity while introducing new workflows and technologies.',
  },
  {
    number: '03',
    title: 'Security & Compliance',
    description: 'Meeting strict SOC 2, GDPR, and industry regulations while implementing cloud-based solutions required rigorous security audits and compliance verification.',
  },
  {
    number: '04',
    title: 'Process Standardization',
    description: 'Unifying disparate workflows across global offices with different regional requirements necessitated flexible yet consistent automation frameworks.',
  },
]

export default function CoreChallenges() {
  return (
    <section className="bg-gradient-to-b from-[#0E0918] via-[#1a1325] to-[#0E0918] py-20 border-t border-gray-900">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Challenges We Overcame</h2>
          <p className="text-gray-400 text-lg max-w-3xl">
            Complex obstacles that required innovative solutions and strategic thinking to deliver successful outcomes.
          </p>
        </motion.div>

        <div className="space-y-6">
          {challenges.map((challenge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900/30 border border-gray-800 rounded-xl p-8 hover:border-purple-500/30 transition-colors"
            >
              <div className="flex gap-8 items-start">
                <div className="text-4xl font-bold text-purple-500/30 flex-shrink-0">
                  {challenge.number}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">{challenge.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{challenge.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

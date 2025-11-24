'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function ClientBackground() {
  return (
    <section className="relative bg-gradient-to-b from-[#04010a] via-[#1a1325] to-[#0E0918] py-8  overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0E0918] via-[#1a1325] to-[#0E0918]"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            The Situation
          </h2>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
            A Fortune 500 enterprise struggling with outdated infrastructure and inefficient processes
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-purple-500/50 to-transparent hidden lg:block"></div>

          <div className="space-y-24">
            {[
              {
                side: 'left',
                label: 'The Problem',
                title: 'Legacy Systems Holding Them Back',
                description: 'After 15 years of operation, their technology infrastructure had become a significant liability. Manual processes consumed valuable resources, errors were frequent, and scaling seemed impossible.',
                stats: [
                  { value: '40+', label: 'Hours wasted weekly on manual tasks' },
                  { value: '15+', label: 'Years of accumulated technical debt' },
                  { value: '500+', label: 'Employees affected by inefficiencies' },
                ],
                   gradient: 'from-purple-600/20 to-fuchsia-600/20',
                borderColor: 'border-purple-500/30',
              },
              {
                side: 'right',
                label: 'The Opportunity',
                title: 'Ready for Digital Transformation',
                description: 'The organization recognized the need for change and was committed to modernization. With leadership buy-in and a clear vision, they were ready to embrace AI-powered automation.',
                stats: [
                  { value: '100%', label: 'Executive leadership support' },
                  { value: '$2M+', label: 'Investment budget allocated' },
                  { value: '6 mo', label: 'Timeline for transformation' },
                ],
                gradient: 'from-purple-600/20 to-fuchsia-600/20',
                borderColor: 'border-purple-500/30',
              },
              {
                side: 'left',
                label: 'Our Approach',
                title: 'Comprehensive AI-Powered Solution',
                description: 'We designed an end-to-end automation platform that integrated seamlessly with existing systems while introducing cutting-edge AI capabilities for intelligent decision-making and workflow optimization.',
                stats: [
                  { value: '85%', label: 'Workflows automated' },
                  { value: '99.8%', label: 'Processing accuracy achieved' },
                  { value: '3x', label: 'Capacity increase delivered' },
                ],
                  gradient: 'from-purple-600/20 to-fuchsia-600/20',
                borderColor: 'border-purple-500/30',
              },
              {
                side: 'right',
                label: 'The Impact',
                title: 'Measurable Business Transformation',
                description: 'Within the first year, the client saw dramatic improvements across all key metrics. The AI-powered platform not only met expectations but exceeded them, delivering ROI ahead of schedule.',
                stats: [
                  { value: '45%', label: 'Reduction in operational costs' },
                  { value: '70%', label: 'Year-over-year revenue growth' },
                  { value: '35+ hrs', label: 'Saved per team weekly' },
                ],
                gradient: 'from-purple-600/20 to-fuchsia-600/20',
                borderColor: 'border-purple-500/30',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  item.side === 'right' ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={item.side === 'right' ? 'lg:col-start-2' : ''}>
                  <div className="relative">
                    <div className={`absolute -inset-6 bg-gradient-to-br ${item.gradient} rounded-3xl blur-3xl opacity-30`}></div>
                <div className="relative h-full bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 transition-all duration-500 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/20 hover:scale-[1.03] hover:bg-white/10">
                      <span className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-gray-400 uppercase tracking-wider mb-4">
                        {item.label}
                      </span>
                      <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-lg text-gray-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>

                <div className={item.side === 'right' ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="space-y-6">
                    {item.stats.map((stat, statIndex) => (
                      <motion.div
                        key={statIndex}
                        initial={{ opacity: 0, x: item.side === 'left' ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 + statIndex * 0.1 }}
                        className="flex items-center gap-6"
                      >
                        <div className={`flex-shrink-0 w-32 h-32 rounded-2xl bg-gradient-to-br ${item.gradient} border ${item.borderColor} flex items-center justify-center`}>
                          <div className="text-center">
                            <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                          </div>
                        </div>
                        <div className="flex-1">
                          <p className="text-gray-300 text-lg leading-snug">{stat.label}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      
      </div>
    </section>
  )
}

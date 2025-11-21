'use client'

import { motion } from 'framer-motion'
import { Target, TrendingUp, Users, Lock, Rocket, Award } from 'lucide-react'

const objectives = [
  {
    icon: Target,
    category: 'Business Goals',
    title: 'Drive Revenue & Reduce Costs',
    description: 'Achieve 40% cost reduction and 70% revenue growth while maintaining service quality',
    metrics: ['40% cost savings', '70% revenue increase', '9-month ROI'],
    color: 'from-blue-600 to-cyan-600',
    bgColor: 'from-blue-600/10 to-cyan-600/10',
  },
  {
    icon: Rocket,
    category: 'Technical Innovation',
    title: 'Modernize Infrastructure',
    description: 'Replace legacy systems with cloud-native AI-powered automation platform',
    metrics: ['99.9% uptime', 'Cloud-first', 'AI-driven'],
    color: 'from-purple-600 to-fuchsia-600',
    bgColor: 'from-purple-600/10 to-fuchsia-600/10',
  },
  {
    icon: Users,
    category: 'User Experience',
    title: 'Empower Teams',
    description: 'Eliminate manual work and provide intuitive tools for all 500+ employees',
    metrics: ['85% less manual work', 'Mobile access', 'Role-based dashboards'],
    color: 'from-emerald-600 to-teal-600',
    bgColor: 'from-emerald-600/10 to-teal-600/10',
  },
  {
    icon: Lock,
    category: 'Security & Compliance',
    title: 'Enterprise-Grade Security',
    description: 'Maintain SOC 2, GDPR compliance with zero-trust architecture',
    metrics: ['Zero-trust model', 'SOC 2 certified', 'End-to-end encryption'],
    color: 'from-orange-600 to-red-600',
    bgColor: 'from-orange-600/10 to-red-600/10',
  },
  {
    icon: TrendingUp,
    category: 'Scalability',
    title: 'Built for Growth',
    description: 'Infrastructure designed to support 3x capacity increase without degradation',
    metrics: ['3x capacity', 'Global reach', 'Auto-scaling'],
    color: 'from-pink-600 to-rose-600',
    bgColor: 'from-pink-600/10 to-rose-600/10',
  },
  {
    icon: Award,
    category: 'Quality & Performance',
    title: 'Excellence in Execution',
    description: 'Deliver industry-leading accuracy and performance metrics',
    metrics: ['99.8% accuracy', 'Real-time processing', 'Zero downtime'],
    color: 'from-amber-600 to-yellow-600',
    bgColor: 'from-amber-600/10 to-yellow-600/10',
  },
]

export default function ProjectBrief() {
  return (
    <section className="relative bg-gradient-to-b from-[#0E0918] via-[#1a1325] to-[#0E0918] py-32 border-t border-gray-900">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full text-sm font-medium text-purple-300 mb-6">
            Project Objectives
          </span>
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Clear Goals,{' '}
            <span className="bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
              Measurable Results
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Strategic objectives aligned with business priorities and user needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {objectives.map((objective, index) => {
            const Icon = objective.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className={`absolute -inset-4 bg-gradient-to-br ${objective.bgColor} rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                <div className="relative h-full bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 transition-all duration-500 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/20 hover:scale-[1.03] hover:bg-white/10">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${objective.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {objective.category}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 leading-tight">
                    {objective.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed mb-6">
                    {objective.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {objective.metrics.map((metric, metricIndex) => (
                      <span
                        key={metricIndex}
                        className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-gray-400"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 text-center"
        >
                <div className="relative h-full bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 transition-all duration-500 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/20 hover:scale-[1.03] hover:bg-white/10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-fuchsia-600 flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Success Criteria</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              All objectives were not only met but exceeded expectations, with ROI achieved
              3 months ahead of schedule and user satisfaction scores reaching 95%.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

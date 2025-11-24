'use client'

import { motion } from 'framer-motion'
import { Brain, Cog, Link2, BarChart3, Shield, Zap, Database, Cloud, Cpu, Network } from 'lucide-react'

const solutions = [
  {
    category: 'AI & Intelligence',
    color: 'from-purple-600 to-fuchsia-600',
    bgGlow: 'from-purple-600/10 to-fuchsia-600/10',
    features: [
      {
        icon: Brain,
        title: 'Intelligent Document Processing',
        description: 'Advanced OCR and NLP for automated classification and data extraction',
        impact: '99.8% accuracy',
      },
      {
        icon: BarChart3,
        title: 'Predictive Analytics',
        description: 'ML models for demand forecasting and risk assessment',
        impact: 'Real-time insights',
      },
    ],
  },
  {
    category: 'Automation',
    color: 'from-purple-600 to-fuchsia-600',
    bgGlow: 'from-purple-600/10 to-fuchsia-600/10',
    features: [
      {
        icon: Cog,
        title: 'Workflow Automation',
        description: 'Automated approval chains and cross-department orchestration',
        impact: '85% reduction',
      },
      {
        icon: Zap,
        title: 'Smart Task Distribution',
        description: 'AI-driven assignment based on skills and performance',
        impact: 'Optimal efficiency',
      },
    ],
  },
  {
    category: 'Integration & Infrastructure',
    color: 'from-purple-600 to-fuchsia-600',
    bgGlow: 'from-purple-600/10 to-fuchsia-600/10',
    features: [
      {
        icon: Link2,
        title: 'System Integration',
        description: 'RESTful APIs connecting CRM, ERP, and legacy systems',
        impact: 'Real-time sync',
      },
      {
        icon: Cloud,
        title: 'Cloud Architecture',
        description: 'Scalable microservices with containerized deployments',
        impact: '3x capacity',
      },
    ],
  },
  {
    category: 'Security & Performance',
    color: 'from-purple-600 to-fuchsia-600',
    bgGlow: 'from-purple-600/10 to-fuchsia-600/10',
    features: [
      {
        icon: Shield,
        title: 'Security Framework',
        description: 'Zero-trust architecture with end-to-end encryption',
        impact: 'SOC 2 compliant',
      },
      {
        icon: Cpu,
        title: 'Performance Optimization',
        description: 'Edge computing and caching for sub-second response',
        impact: '99.9% uptime',
      },
    ],
  },
]

const techStack = [
  { name: 'TensorFlow', category: 'AI/ML' },
  { name: 'Python', category: 'Backend' },
  { name: 'React', category: 'Frontend' },
  { name: 'Kubernetes', category: 'Infrastructure' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'Redis', category: 'Caching' },
  { name: 'AWS', category: 'Cloud' },
  { name: 'Docker', category: 'Containers' },
]

export default function SolutionScope() {
  return (
    <section className="relative bg-gradient-to-b from-[#0E0918] via-[#1a1325] to-[#0E0918] py-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          {/* <span className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-sm font-medium text-blue-300 mb-6">
            Solution Architecture
          </span> */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Comprehensive{' '}
            <span className="bg-purple-600 bg-clip-text text-transparent">
              AI-Powered Platform
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            An integrated ecosystem of intelligent automation, advanced analytics, and enterprise-grade infrastructure
          </p>
        </motion.div>

        <div className="space-y-16">
          {solutions.map((solution, solutionIndex) => (
            <motion.div
              key={solutionIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: solutionIndex * 0.1 }}
            >
              <div className="mb-8">
                <h3 className={`text-3xl font-bold bg-gradient-to-r text-white bg-clip-text text-transparent mb-2`}>
                  {solution.category}
                </h3>
                <div className={`h-1 w-24 bg-gradient-to-r ${solution.color} rounded-full`}></div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {solution.features.map((feature, featureIndex) => {
                  const Icon = feature.icon
                  return (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, x: featureIndex % 2 === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 + featureIndex * 0.1 }}
                      className="group relative"
                    >
                      <div className={`absolute -inset-4 bg-gradient-to-br ${solution.bgGlow} rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                      <div className="relative h-full bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 transition-all duration-500 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/20 hover:scale-[1.03] hover:bg-white/10">
                        <div className="flex items-start gap-6">
                          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${solution.color} flex items-center justify-center flex-shrink-0 shadow-xl`}>
                            <Icon className="w-8 h-8 text-white" />
                          </div>

                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-3">
                              <h4 className="text-xl font-bold text-white leading-tight">
                                {feature.title}
                              </h4>
                              <span className={`ml-2 px-3 py-1 bg-gradient-to-r ${solution.color} rounded-full text-xs font-bold text-white whitespace-nowrap`}>
                                {feature.impact}
                              </span>
                            </div>

                            <p className="text-gray-400 leading-relaxed">
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-32"
        >
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">Technology Stack</h3>
            <p className="text-gray-300 text-lg">
              Built with industry-leading technologies and frameworks
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-blue-600/10 to-emerald-600/10 rounded-3xl blur-3xl"></div>
            <div className="relative h-full bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 transition-all duration-500 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/20 hover:scale-[1.03] hover:bg-white/10">
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="text-center group"
                  >
                    <div className="w-20 h-20 mx-auto mb-3 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 flex items-center justify-center group-hover:border-purple-500/50 group-hover:shadow-lg group-hover:shadow-purple-500/20 transition-all duration-300">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600/20 to-blue-600/20 flex items-center justify-center">
                        <Database className="w-6 h-6 text-purple-400" />
                      </div>
                    </div>
                    <div className="text-sm font-semibold text-white mb-1">{tech.name}</div>
                    <div className="text-xs text-gray-500">{tech.category}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="relative h-full bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 transition-all duration-500 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/20 hover:scale-[1.03] hover:bg-white/10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Network className="w-8 h-8 text-purple-600" />
              <h3 className="text-2xl font-bold text-white">Seamless Integration</h3>
            </div>
            <p className="text-gray-300 leading-relaxed text-lg">
              All components work together in harmony, creating a unified platform that delivers
              exceptional performance, security, and scalability while maintaining compatibility
              with existing systems.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

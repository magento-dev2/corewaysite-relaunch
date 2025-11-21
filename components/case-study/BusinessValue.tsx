'use client'

import { motion } from 'framer-motion'
import { TrendingUp, DollarSign, Users, Clock, Target, Award } from 'lucide-react'
import { useEffect, useState } from 'react'

const metrics = [
  {
    icon: TrendingUp,
    value: 70,
    suffix: '%',
    label: 'Revenue Increase',
    description: 'Year-over-year growth in revenue',
    color: 'from-purple-500 to-fuchsia-600',
  },
  {
    icon: DollarSign,
    value: 2.5,
    suffix: 'M',
    label: 'Annual Cost Savings',
    description: 'Reduced operational expenses',
    color: 'from-violet-500 to-purple-600',
  },
  {
    icon: Clock,
    value: 35,
    suffix: '+',
    label: 'Hours Saved Weekly',
    description: 'Automated manual processes',
    color: 'from-fuchsia-500 to-pink-600',
  },
  {
    icon: Users,
    value: 85,
    suffix: '%',
    label: 'Client Satisfaction',
    description: 'Net Promoter Score improvement',
    color: 'from-pink-500 to-rose-600',
  },
  {
    icon: Target,
    value: 99.8,
    suffix: '%',
    label: 'Accuracy Rate',
    description: 'Error-free data processing',
    color: 'from-purple-600 to-violet-600',
  },
  {
    icon: Award,
    value: 92,
    suffix: '%',
    label: 'User Adoption',
    description: 'Employee engagement within month 1',
    color: 'from-violet-600 to-purple-700',
  },
]

function AnimatedCounter({ end, duration = 2000, suffix = '' }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = timestamp - startTime
      const percentage = Math.min(progress / duration, 1)

      const easeOutQuart = 1 - Math.pow(1 - percentage, 4)
      setCount(end * easeOutQuart)

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration])

  return (
    <span>
      {count.toFixed(end < 10 ? 1 : 0)}
      {suffix}
    </span>
  )
}

export default function BusinessValue() {
  const [hasAnimated, setHasAnimated] = useState(false)

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
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
            Business Value Delivered
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Measurable outcomes that transformed the organization
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {metrics.map((metric, index) => {
            const Icon = metric.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onViewportEnter={() => setHasAnimated(true)}
                className="group"
              >
                <div className="relative h-full bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 transition-all duration-500 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/20 hover:scale-[1.03] hover:bg-white/10">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${metric.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="mb-4">
                    <div className="text-5xl font-bold mb-2 text-white">
                      {hasAnimated ? (
                        <AnimatedCounter end={metric.value} suffix={metric.suffix} />
                      ) : (
                        `${metric.value}${metric.suffix}`
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {metric.label}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {metric.description}
                    </p>
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


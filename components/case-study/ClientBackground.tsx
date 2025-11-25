'use client'

import { motion } from 'framer-motion'
import { ArrowRight, MapPin, Globe, Users, Briefcase } from 'lucide-react'

export default function ClientBackground({ data }: { data: any }) {
  return (
    <section className="relative bg-gradient-to-b from-[#04010a] via-[#1a1325] to-[#0E0918] py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0E0918] via-[#1a1325] to-[#0E0918]"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            {data.clientOverview?.title || "Client Overview"}
          </h2>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
            {data.clientOverview?.description || data.overview}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: MapPin, label: "Location", value: data.location },
            { icon: Briefcase, label: "Industry", value: data.industry },
            { icon: Users, label: "Team Size", value: data.teamSize },
            { icon: Globe, label: "Duration", value: data.duration },
          ].map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center hover:bg-white/10 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-4 text-purple-400">
                  <Icon size={24} />
                </div>
                <h3 className="text-white font-semibold mb-1">{item.value}</h3>
                <p className="text-sm text-gray-400">{item.label}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

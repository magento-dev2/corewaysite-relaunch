'use client'

import { motion } from 'framer-motion'
import { MapPin, Globe, Users, Briefcase, Calendar, Target } from 'lucide-react'

export default function ClientBackground({ data }: { data: any }) {
  const projectStats = [
    { icon: MapPin, label: "Location", value: data.location },
    { icon: Briefcase, label: "Industry", value: data.industry },
    { icon: Users, label: "Team Size", value: data.teamSize },
    { icon: Calendar, label: "Duration", value: data.duration },
    { icon: Target, label: "Client", value: data.client || data.title },
  ].filter(item => item.value); // Only show stats that have values

  return (
    <section className="relative bg-gradient-to-b from-[#04010a] via-[#1a1325] to-[#0E0918] py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0E0918] via-[#1a1325] to-[#0E0918]"></div>

      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Left Side - Client Overview */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            {/* Section Badge */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-6"
            >
              <div className="px-5 py-2 bg-gradient-to-r from-purple-500/20 to-fuchsia-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-semibold backdrop-blur-sm">
                Client Overview
              </div>
            </motion.div>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              {data.clientOverview?.title || "About the Client"}
            </h2>

            {/* Description */}
            <div className="space-y-4">
              <p className="text-lg text-gray-300 leading-relaxed">
                {data.clientOverview?.description || data.overview}
              </p>

              {/* Additional context if available */}
              {data.clientOverview?.additionalInfo && (
                <p className="text-base text-gray-400 leading-relaxed">
                  {data.clientOverview.additionalInfo}
                </p>
              )}
            </div>
          </motion.div>

          {/* Right Side - Project Stats Box */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1"
          >
            {/* Stats Card */}
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-fuchsia-600 opacity-20 group-hover:opacity-30 blur-xl transition-all duration-500 rounded-3xl" />

              {/* Card */}
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 group-hover:border-white/20 transition-all duration-500">
                {/* Card Title */}
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <div className="w-1 h-6 bg-gradient-to-b from-purple-500 to-fuchsia-500 rounded-full" />
                  Project Details
                </h3>

                {/* Stats List */}
                <div className="space-y-5">
                  {projectStats.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                        className="flex items-start gap-4 group/item"
                      >
                        {/* Icon */}
                        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500/20 to-fuchsia-500/20 border border-purple-500/30 flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
                          <Icon size={20} className="text-purple-400" />
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">
                            {item.label}
                          </p>
                          <p className="text-white font-semibold text-base leading-tight">
                            {item.value}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Decorative Element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-transparent rounded-bl-full" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

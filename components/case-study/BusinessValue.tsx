'use client'

import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

export default function BusinessValue({ data }: { data: any }) {
  const points = data.impact?.points || []

  return (
    <section className="py-20 bg-gradient-to-b from-[#0E0918] via-[#1a1325] to-[#0E0918]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-white">
                {data.impact?.title || "Impact Delivered"}
              </h2>
              <p className="text-lg text-gray-300">
                {data.impact?.description}
              </p>
            </div>

            <div className="space-y-6">
              {points.map((point: string, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4 items-start bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-colors"
                >
                  <div className="mt-1 text-purple-500 flex-shrink-0">
                    <CheckCircle size={24} />
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {point}
                  </p>
                </motion.div>
              ))}
            </div>

            {data.impact?.conclusion && (
              <div className="mt-10 p-6 bg-purple-900/20 border border-purple-500/30 rounded-2xl">
                <p className="text-white text-lg font-medium italic">
                  "{data.impact.conclusion}"
                </p>
              </div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-fuchsia-600/20 blur-3xl"></div>
            <img
              src={data.impact?.image || "/assets/home/coreway-ai.png"}
              alt="Impact"
              className="relative rounded-3xl shadow-2xl border border-purple-500/20 w-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}


'use client'

import { motion } from 'framer-motion'

export default function CoreChallenges({ data }: { data: any }) {
  const challenges = data.challenge?.points || []

  return (
    <section className="bg-gradient-to-b from-[#0E0918] via-[#1a1325] to-[#0E0918] py-20 border-t border-gray-900">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{data.challenge?.title || "The Challenge"}</h2>
              <p className="text-gray-300 text-lg ">
                {data.challenge?.description}
              </p>
            </div>

            <div className="space-y-6">
              {challenges.map((challenge: string, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-900/30 border border-gray-800 rounded-xl p-6 hover:border-purple-500/30 transition-colors flex gap-6 items-start"
                >
                  <div className="text-2xl font-bold text-purple-600 flex-shrink-0">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <p className="text-gray-300 leading-relaxed">{challenge}</p>
                </motion.div>
              ))}
            </div>
            {data.challenge?.conclusion && (
              <p className="mt-8 text-gray-300 italic border-l-4 border-purple-500 pl-4">
                {data.challenge.conclusion}
              </p>
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
              src={data.challenge?.image || "/assets/home/coreway-ai.png"}
              alt="Challenge"
              className="relative rounded-2xl shadow-2xl border border-purple-500/20 w-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

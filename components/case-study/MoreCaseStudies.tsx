'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import caseStudiesData from '@/data/caseStudies.json'

export default function MoreCaseStudies({ currentSlug }: { currentSlug: string }) {
  const otherCaseStudies = caseStudiesData.filter(study => study.slug !== currentSlug).slice(0, 3)

  return (
    <section className="py-20 bg-gray-950">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-white">
            Explore More Case Studies
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Discover how we've helped other industry leaders achieve their goals
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherCaseStudies.map((study, index) => (
            <Link href={`/case-studies/${study.slug}`} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer h-full"
              >
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-purple-500/30 hover:shadow-2xl transition-all duration-300 border border-purple-500/30 h-full flex flex-col">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={study.imageUrl}
                      alt={study.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-white text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <div className="flex items-center gap-2 justify-center text-lg font-semibold">
                          <span>View Case Study</span>
                          <ArrowRight className="w-5 h-5" />
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="px-4 py-2 bg-purple-500/90 backdrop-blur-sm text-white rounded-full text-sm font-semibold shadow-lg">
                        {study.industry}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold mb-2 text-white group-hover:text-purple-400 transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-gray-400 mb-4 flex-1">
                      {study.subtitle}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {study.services.slice(0, 3).map((tag: string, tagIndex: number) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium border border-purple-500/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Link href="/case-studies">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white rounded-xl font-semibold hover:from-purple-700 hover:to-fuchsia-700 transition-all shadow-lg hover:shadow-purple-500/50 hover:shadow-xl inline-flex items-center gap-2 group">
              <span>View All Case Studies</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

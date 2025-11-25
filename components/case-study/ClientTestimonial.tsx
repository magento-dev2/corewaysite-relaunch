'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

export default function ClientTestimonial({ data }: { data: any }) {
    if (!data.testimonial) return null

    return (
        <section className="py-20 bg-gradient-to-b from-[#0E0918] via-[#1a1325] to-[#0E0918] relative overflow-hidden">
            <div className="max-w-5xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-10 text-center shadow-2xl">
                        {/* Avatar */}
                        {data.testimonial.image && (
                            <div className="w-28 h-28 rounded-full border-4 border-purple-500/30 overflow-hidden shadow-xl mx-auto mb-6">
                                <img
                                    src={data.testimonial.image}
                                    alt={data.testimonial.author}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        )}

                        <p className="text-purple-400 font-bold text-xl mb-6">
                            {data.testimonial.author}
                        </p>

                        <Quote className="text-purple-500 mx-auto mb-6" size={44} />

                        <blockquote className="text-lg text-gray-300 font-medium mb-6 leading-relaxed px-2 max-w-4xl mx-auto">
                            {data.testimonial.quote}
                        </blockquote>

                        {data.testimonial.position && (
                            <p className="text-purple-400 text-sm">
                                {data.testimonial.position}
                            </p>
                        )}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

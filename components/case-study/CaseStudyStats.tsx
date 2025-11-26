'use client'

import { motion } from 'framer-motion'
import { TrendingUp, CheckCircle2 } from 'lucide-react'

interface CaseStudyStatsProps {
    data: any
}

export default function CaseStudyStats({ data }: CaseStudyStatsProps) {
    // Extract first 2-3 impact points as key statistics
    const impactPoints = data.impact?.points || []

    // Mock statistics - in production, these should come from the database
    const statistics = [
        { value: data.stat1Value || "85%", label: data.stat1Label || "Improvement" },
        { value: data.stat2Value || "3x", label: data.stat2Label || "Faster" }
    ]

    return (
        <section className="relative py-20 overflow-hidden bg-gradient-to-b from-[#0E0918] via-[#1a1325] to-[#0E0918]">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
            </div>

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Key Results & Impact
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Measurable outcomes that demonstrate the success of this project
                    </p>
                </motion.div>

                {/* Statistics Cards */}
                <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
                    {statistics.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            className="relative group"
                        >
                            {/* Glow Effect */}
                            <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-fuchsia-600 opacity-20 group-hover:opacity-40 blur-2xl transition-all duration-500 rounded-3xl" />

                            {/* Card */}
                            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 group-hover:border-white/20 transition-all duration-500 text-center">
                                <div className="flex items-center justify-center gap-3 mb-3">
                                    <TrendingUp className="w-6 h-6 text-purple-400" />
                                    <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                                        {stat.value}
                                    </div>
                                </div>
                                <p className="text-gray-300 text-lg font-medium">{stat.label}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Impact Points */}
                {impactPoints && impactPoints.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <h3 className="text-2xl font-bold text-white mb-8 text-center flex items-center justify-center gap-2">
                            <CheckCircle2 className="w-6 h-6 text-purple-400" />
                            Key Impact Highlights
                        </h3>

                        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                            {impactPoints.slice(0, 3).map((point: string, index: number) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                                    className="relative group"
                                >
                                    {/* Glow Effect */}
                                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-fuchsia-600 opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500 rounded-2xl" />

                                    {/* Card */}
                                    <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 group-hover:border-purple-500/30 transition-all duration-300">
                                        <div className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                            <p className="text-gray-200 text-base leading-relaxed">{point}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </div>
        </section>
    )
}

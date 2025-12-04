"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

interface ERPOverviewProps {
    title: string;
    description: string;
    benefits: string[];
    stats: { value: string; label: string }[];
}

export default function ERPOverview({ title, description, benefits, stats }: ERPOverviewProps) {
    return (
        <section className="py-24 bg-gradient-to-b from-[#0E0918] to-[#1a0f2b] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-block px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-6">
                            <span className="text-sm font-medium text-gray-300">What is ERP?</span>
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            {title}
                        </h2>

                        <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                            {description}
                        </p>

                        <div className="space-y-4">
                            {benefits.map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className="flex items-start gap-3"
                                >
                                    <CheckCircle className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                                    <span className="text-gray-300">{benefit}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right - Stats */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="grid grid-cols-2 gap-6"
                    >
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300"
                            >
                                <div className="text-4xl font-bold text-purple-400 mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-gray-400 text-sm">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

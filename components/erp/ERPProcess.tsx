"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface ProcessStep {
    step: string;
    title: string;
    description: string;
    deliverables: string[];
}

interface ERPProcessProps {
    title: string;
    description: string;
    steps: ProcessStep[];
}

export default function ERPProcess({ title, description, steps }: ERPProcessProps) {
    return (
        <section className="py-24 bg-gradient-to-b from-[#0E0918] to-[#1a0f2b] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-6">
                        <span className="text-sm font-medium text-gray-300">Implementation Process</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        {title}
                    </h2>
                    <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                        {description}
                    </p>
                </div>

                <div className="relative">
                    {/* Timeline Line */}
                    <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-white/10 rounded-full">
                        <div className="absolute inset-0 bg-gradient-to-b from-purple-500 to-violet-500 rounded-full" style={{ height: '100%' }}></div>
                    </div>

                    <div className="space-y-12">
                        {steps.map((step, index) => {
                            const isEven = index % 2 === 0;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className={`flex items-center gap-8 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                                >
                                    <div className={`flex-1 ${isEven ? 'lg:text-right' : 'lg:text-left'}`}>
                                        <div className={`inline-block ${isEven ? 'lg:float-right' : 'lg:float-left'}`}>
                                            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 max-w-md">
                                                <div className="flex items-center gap-3 mb-3">
                                                    <div className="text-4xl font-bold text-purple-500/30">{step.step}</div>
                                                    <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                                                </div>

                                                <p className="text-gray-400 mb-4 leading-relaxed">
                                                    {step.description}
                                                </p>

                                                <div className="space-y-2">
                                                    <div className="text-sm font-medium text-purple-400 mb-2">Deliverables:</div>
                                                    {step.deliverables.map((deliverable, idx) => (
                                                        <div key={idx} className="flex items-center gap-2">
                                                            <ArrowRight className="w-4 h-4 text-purple-500" />
                                                            <span className="text-sm text-gray-400">{deliverable}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="hidden lg:block relative z-10">
                                        <div className="w-16 h-16 bg-gradient-to-br from-purple-500/30 to-violet-500/30 rounded-full flex items-center justify-center border-4 border-[#1a0f2b]">
                                            <div className="w-6 h-6 bg-purple-500 rounded-full"></div>
                                        </div>
                                    </div>

                                    <div className="flex-1"></div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

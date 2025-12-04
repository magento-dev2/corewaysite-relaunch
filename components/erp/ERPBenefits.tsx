"use client";

import { motion } from "framer-motion";
import { TrendingUp, DollarSign, Eye, Zap, Shield, Users } from "lucide-react";

interface Benefit {
    icon: string;
    title: string;
    description: string;
    impact: string;
}

interface ERPBenefitsProps {
    title: string;
    description: string;
    benefits: Benefit[];
}

export default function ERPBenefits({ title, description, benefits }: ERPBenefitsProps) {
    const getIcon = (iconName: string) => {
        const iconMap: Record<string, any> = {
            "trending-up": TrendingUp,
            "dollar-sign": DollarSign,
            "eye": Eye,
            "zap": Zap,
            "shield": Shield,
            "users": Users,
        };
        return iconMap[iconName] || TrendingUp;
    };

    return (
        <section className="py-24 bg-gradient-to-b from-[#1a0f2b] to-[#0E0918] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-6">
                        <span className="text-sm font-medium text-gray-300">Business Impact</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        {title}
                    </h2>
                    <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                        {description}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => {
                        const IconComponent = getIcon(benefit.icon);
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group"
                            >
                                <div className="h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20">
                                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-violet-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <IconComponent className="w-8 h-8 text-purple-400" strokeWidth={1.5} />
                                    </div>

                                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                                        {benefit.title}
                                    </h3>

                                    <p className="text-gray-400 mb-4 leading-relaxed">
                                        {benefit.description}
                                    </p>

                                    <div className="pt-4 border-t border-white/10">
                                        <div className="text-2xl font-bold text-purple-400">{benefit.impact}</div>
                                        <div className="text-xs text-gray-500 mt-1">Average Impact</div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

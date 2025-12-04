"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import * as Icons from "lucide-react";

interface Module {
    icon: string;
    title: string;
    description: string;
    features: string[];
}

interface ERPModulesProps {
    title: string;
    description: string;
    modules: Module[];
}

export default function ERPModules({ title, description, modules }: ERPModulesProps) {
    const getIcon = (iconName: string): LucideIcon => {
        const iconMap: Record<string, LucideIcon> = {
            "dollar-sign": Icons.DollarSign,
            "users": Icons.Users,
            "package": Icons.Package,
            "user-check": Icons.UserCheck,
            "truck": Icons.Truck,
            "factory": Icons.Factory,
            "folder-kanban": Icons.FolderKanban,
            "bar-chart-3": Icons.BarChart3,
        };
        return iconMap[iconName] || Icons.Box;
    };

    return (
        <section className="py-24 bg-gradient-to-b from-[#1a0f2b] to-[#0E0918] relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.05),transparent_70%)] pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-6">
                        <span className="text-sm font-medium text-gray-300">Core Modules</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        {title}
                    </h2>
                    <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                        {description}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {modules.map((module, index) => {
                        const IconComponent = getIcon(module.icon);
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group"
                            >
                                <div className="h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20">
                                    <div className="w-14 h-14 bg-gradient-to-br from-purple-500/20 to-violet-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <IconComponent className="w-7 h-7 text-purple-400" strokeWidth={1.5} />
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                                        {module.title}
                                    </h3>

                                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                                        {module.description}
                                    </p>

                                    <div className="space-y-2">
                                        {module.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                                                <span className="text-xs text-gray-400">{feature}</span>
                                            </div>
                                        ))}
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

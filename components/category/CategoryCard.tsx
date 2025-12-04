"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, LucideIcon } from "lucide-react";
import * as Icons from "lucide-react";

interface CategoryCardProps {
    title: string;
    description: string;
    href: string;
    icon?: string;
    gradient?: string;
    index?: number;
}

export default function CategoryCard({
    title,
    description,
    href,
    icon = "box",
    gradient = "from-purple-500 to-fuchsia-500",
    index = 0,
}: CategoryCardProps) {
    // Get icon component dynamically
    const getIcon = (iconName: string): LucideIcon => {
        const iconMap: Record<string, LucideIcon> = {
            "shopping-cart": Icons.ShoppingCart,
            "rocket": Icons.Rocket,
            "brain": Icons.Brain,
            "wifi": Icons.Wifi,
            "cloud": Icons.Cloud,
            "zap": Icons.Zap,
            "code": Icons.Code,
            "lightbulb": Icons.Lightbulb,
            "plug": Icons.Plug,
            "refresh-cw": Icons.RefreshCw,
            "shield": Icons.Shield,
            "server": Icons.Server,
            "database": Icons.Database,
            "hard-drive": Icons.HardDrive,
            "radio": Icons.Radio,
            "shield-check": Icons.ShieldCheck,
            "box": Icons.Box,
            "code-2": Icons.Code2,
            "sparkles": Icons.Sparkles,
            "trending-up": Icons.TrendingUp,
            "users": Icons.Users,
            "briefcase": Icons.Briefcase,
            "award": Icons.Award,
        };
        return iconMap[iconName] || Icons.Box;
    };

    const IconComponent = getIcon(icon);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative"
        >
            {/* Glow Effect */}
            <div className={`absolute -inset-1 bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500 rounded-2xl`} />

            {/* Card */}
            <Link href={href}>
                <div className="relative h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300 cursor-pointer">
                    {/* Icon */}
                    {/* <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} opacity-20 mb-4 flex items-center justify-center group-hover:opacity-30 transition-opacity`}>
                        <IconComponent className="w-6 h-6 text-white" />
                    </div> */}
                     <div className="w-12 h-12  bg-gradient-to-br from-purple-500/20 to-violet-500/20 rounded-lg flex mb-4 items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 text-purple-400 group-hover:text-purple-300 transition-colors" strokeWidth={1.5} />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                        {title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                        {description}
                    </p>

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-purple-400 group-hover:text-purple-300 font-medium text-sm transition-colors">
                        <span>Learn more</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}

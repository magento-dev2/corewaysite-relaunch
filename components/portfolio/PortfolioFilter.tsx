"use client";

import { motion } from "framer-motion";
import { Filter } from "lucide-react";

interface PortfolioFilterProps {
    categories: string[];
    activeCategory: string;
    onCategoryChange: (category: string) => void;
}

export default function PortfolioFilter({
    categories,
    activeCategory,
    onCategoryChange,
}: PortfolioFilterProps) {
    return (
        <section className="relative py-12 bg-gradient-to-b from-[#0E0918] to-[#1a0f2e]">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center gap-6"
                >
                    {/* Filter Label */}
                    <div className="flex items-center gap-2 text-gray-400">
                        <Filter className="w-4 h-4" />
                        <span className="text-sm font-medium">Filter by Category</span>
                    </div>

                    {/* Filter Buttons */}
                    <div className="flex flex-wrap items-center justify-center gap-3">
                        {categories.map((category, index) => {
                            const isActive = activeCategory === category;

                            return (
                                <motion.button
                                    key={category}
                                    onClick={() => onCategoryChange(category)}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.05, duration: 0.3 }}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="relative group"
                                >
                                    {/* Active Glow */}
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeGlow"
                                            className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-fuchsia-500 opacity-30 blur-lg rounded-2xl"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}

                                    {/* Button */}
                                    <div
                                        className={`relative px-6 py-3 rounded-xl border transition-all duration-300 ${isActive
                                                ? "bg-white/10 border-white/30 backdrop-blur-md text-white"
                                                : "bg-white/5 border-white/10 backdrop-blur-sm text-gray-400 hover:bg-white/10 hover:border-white/20 hover:text-white"
                                            }`}
                                    >
                                        <span className="font-medium text-sm">{category}</span>
                                    </div>
                                </motion.button>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

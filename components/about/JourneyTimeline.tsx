"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
    Rocket,
    Award,
    Globe,
    TrendingUp,
    Star,
    Trophy,
    Sparkles,
    ChevronLeft,
    ChevronRight
} from "lucide-react";

export default function JourneyTimeline() {
    const [activeIndex, setActiveIndex] = useState(0);

    const milestones = [
        {
            year: "2012",
            title: "The Beginning",
            description: "Founded with a vision to transform digital experiences",
            icon: Rocket,
            achievements: [
                "First office established",
                "Team of 5 passionate developers",
                "Launched first product"
            ],
            gradient: "from-purple-500 to-fuchsia-500",
            stats: { clients: "10+", projects: "15" }
        },
        {
            year: "2015",
            title: "Rapid Growth",
            description: "Expanded services and client base across multiple industries",
            icon: TrendingUp,
            achievements: [
                "Reached 50+ clients milestone",
                "Opened second office",
                "Team grew to 25 members",
                "Won 'Best Startup' award"
            ],
            gradient: "from-purple-600 to-pink-500",
            stats: { clients: "50+", projects: "100+" }
        },
        {
            year: "2018",
            title: "Global Expansion",
            description: "Established presence in international markets",
            icon: Globe,
            achievements: [
                "Expanded to 3 countries",
                "100+ team members",
                "Fortune 500 clients onboarded",
                "Launched AI division"
            ],
            gradient: "from-fuchsia-500 to-purple-500",
            stats: { clients: "150+", projects: "500+" }
        },
        {
            year: "2021",
            title: "Innovation Leader",
            description: "Recognized as industry leader in digital transformation",
            icon: Award,
            achievements: [
                "ISO 27001 certified",
                "200+ team members",
                "Launched 10+ products",
                "Industry awards received"
            ],
            gradient: "from-purple-500 to-violet-500",
            stats: { clients: "300+", projects: "1000+" }
        },
        {
            year: "2025",
            title: "Future Forward",
            description: "Leading the next generation of digital solutions",
            icon: Sparkles,
            achievements: [
                "500+ successful projects",
                "250+ team members",
                "AI-powered solutions",
                "Global recognition"
            ],
            gradient: "from-fuchsia-600 to-purple-600",
            stats: { clients: "500+", projects: "2000+" }
        }
    ];

    const nextSlide = () => {
        setActiveIndex((prev) => (prev + 1) % milestones.length);
    };

    const prevSlide = () => {
        setActiveIndex((prev) => (prev - 1 + milestones.length) % milestones.length);
    };

    const currentMilestone = milestones[activeIndex];
    const Icon = currentMilestone.icon;

    return (
        <section className="relative py-32 overflow-hidden bg-gradient-to-b from-[#0E0918] via-[#1a0f2e] to-[#0E0918]">
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="inline-block mb-6"
                    >
                        <div className="px-6 py-2 bg-gradient-to-r from-purple-500/20 to-fuchsia-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-semibold backdrop-blur-sm flex items-center gap-2">
                            <Trophy className="w-5 h-5" />
                            Our Journey
                        </div>
                    </motion.div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-fuchsia-200 bg-clip-text text-transparent leading-tight">
                        13 Years of Excellence
                    </h2>

                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        From a small startup to a global leader in digital transformation
                    </p>
                </motion.div>

                {/* Main Timeline Card */}
                <div className="relative max-w-5xl mx-auto">
                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 z-20 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center transition-all duration-300 group"
                    >
                        <ChevronLeft className="w-6 h-6 text-white group-hover:-translate-x-1 transition-transform" />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 z-20 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center transition-all duration-300 group"
                    >
                        <ChevronRight className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform" />
                    </button>

                    {/* Card Container */}
                    <motion.div
                        key={activeIndex}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5 }}
                        className="relative group"
                    >
                        {/* Glow Effect */}
                        <div className={`absolute -inset-4 bg-gradient-to-r ${currentMilestone.gradient} opacity-30 blur-3xl transition-all duration-500 rounded-3xl`} />

                        {/* Card */}
                        <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden">
                            {/* Top Section - Year and Icon */}
                            <div className="relative p-8 md:p-12 bg-gradient-to-br from-purple-900/20 to-fuchsia-900/20">
                                <div className="flex items-center justify-between">
                                    {/* Year Badge */}
                                    <div className={`px-8 py-4 bg-gradient-to-r ${currentMilestone.gradient} rounded-2xl shadow-2xl`}>
                                        <span className="text-white font-bold text-4xl">{currentMilestone.year}</span>
                                    </div>

                                    {/* Icon */}
                                    <motion.div
                                        animate={{ rotate: [0, 360] }}
                                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                        className={`w-24 h-24 rounded-2xl bg-gradient-to-r ${currentMilestone.gradient} flex items-center justify-center shadow-2xl`}
                                    >
                                        <Icon size={48} className="text-white" />
                                    </motion.div>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="p-8 md:p-12">
                                <div className="grid md:grid-cols-2 gap-8">
                                    {/* Left - Description */}
                                    <div>
                                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                                            {currentMilestone.title}
                                        </h3>

                                        <p className="text-gray-200 text-lg leading-relaxed mb-6">
                                            {currentMilestone.description}
                                        </p>

                                        {/* Stats */}
                                        <div className="flex gap-8">
                                            <div>
                                                <p className={`text-4xl font-bold bg-gradient-to-r ${currentMilestone.gradient} bg-clip-text text-transparent`}>
                                                    {currentMilestone.stats.clients}
                                                </p>
                                                <p className="text-sm text-gray-400 mt-1">Clients</p>
                                            </div>
                                            <div>
                                                <p className={`text-4xl font-bold bg-gradient-to-r ${currentMilestone.gradient} bg-clip-text text-transparent`}>
                                                    {currentMilestone.stats.projects}
                                                </p>
                                                <p className="text-sm text-gray-400 mt-1">Projects</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right - Achievements */}
                                    <div>
                                        <h4 className="text-lg font-semibold text-purple-300 mb-4">Key Achievements</h4>
                                        <div className="space-y-3">
                                            {currentMilestone.achievements.map((achievement, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ opacity: 0, x: 20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: i * 0.1 }}
                                                    className="flex items-start gap-3 text-gray-200"
                                                >
                                                    <Star size={18} className="text-purple-400 fill-purple-400 flex-shrink-0 mt-0.5" />
                                                    <span className="text-base leading-relaxed">{achievement}</span>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Progress Dots */}
                    <div className="flex justify-center gap-3 mt-8">
                        {milestones.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className="group relative"
                            >
                                {activeIndex === index && (
                                    <motion.div
                                        layoutId="activeDot"
                                        className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-fuchsia-500 opacity-50 blur-lg rounded-full"
                                    />
                                )}
                                <div
                                    className={`relative w-3 h-3 rounded-full transition-all duration-300 ${activeIndex === index
                                            ? 'bg-gradient-to-r from-purple-500 to-fuchsia-500 scale-125'
                                            : 'bg-white/30 group-hover:bg-white/50'
                                        }`}
                                />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Bottom Summary */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mt-16"
                >
                    <div className="inline-block px-8 py-6 bg-gradient-to-r from-purple-500/10 to-fuchsia-500/10 border border-purple-500/30 rounded-2xl backdrop-blur-sm">
                        <p className="text-gray-300 text-lg">
                            <span className="text-white font-bold text-2xl">13 years</span> of innovation,{" "}
                            <span className="text-white font-bold text-2xl">500+ clients</span> served,{" "}
                            <span className="text-white font-bold text-2xl">2000+ projects</span> delivered
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

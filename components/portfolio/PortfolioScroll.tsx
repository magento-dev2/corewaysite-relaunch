"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface Project {
    id: number;
    title: string;
    category: string;
    image: string;
    gradient: string;
    liveUrl?: string;
}

interface PortfolioScrollProps {
    projects: Project[];
    onProjectClick: (project: Project) => void;
}

export default function PortfolioScroll({ projects, onProjectClick }: PortfolioScrollProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current || !scrollRef.current) return;

        const container = containerRef.current;
        const scroll = scrollRef.current;

        // Calculate card width based on viewport and number of projects
        const cardWidth = window.innerWidth * 0.45; // 45vw per card
        const gap = 32; // 2rem gap between cards
        const totalWidth = (cardWidth + gap) * projects.length;
        const scrollWidth = totalWidth - window.innerWidth;

        // Horizontal scroll animation
        const tween = gsap.to(scroll, {
            x: -scrollWidth,
            ease: "none",
            scrollTrigger: {
                trigger: container,
                start: "top top",
                end: () => `+=${scrollWidth + window.innerHeight}`,
                scrub: 1,
                pin: true,
                anticipatePin: 1,
                invalidateOnRefresh: true,
            },
        });

        return () => {
            tween.kill();
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, [projects]);

    // Calculate dynamic width based on number of projects
    const cardWidthVw = 45; // Each card is 45vw
    const gapRem = 2; // 2rem gap
    const totalWidthVw = projects.length * (cardWidthVw + 2); // Approximate total width

    return (
        <div ref={containerRef} className="relative bg-[#0E0918]">
            <div className="h-screen overflow-hidden">
                <div
                    ref={scrollRef}
                    className="flex h-screen items-center gap-8 px-8"
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="relative group cursor-pointer flex-shrink-0 w-[45vw] h-[80vh]"
                            onClick={() => onProjectClick(project)}
                        >
                            {/* Glow Effect */}
                            <div
                                className={`absolute -inset-2 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-40 blur-2xl transition-all duration-500 rounded-3xl`}
                            />

                            {/* Card */}
                            <div className="relative h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden group-hover:border-white/30 transition-all duration-500">
                                {/* Image */}
                                <div className="absolute inset-0">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                                </div>

                                {/* Content */}
                                <div className="relative h-full flex flex-col justify-end p-10">
                                    {/* Category */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        className="mb-4"
                                    >
                                        <span className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-sm font-medium">
                                            {project.category}
                                        </span>
                                    </motion.div>

                                    {/* Title */}
                                    <motion.h3
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 }}
                                        className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
                                    >
                                        {project.title}
                                    </motion.h3>

                                    {/* View Button */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 }}
                                        className="flex items-center gap-3 text-purple-400 group-hover:text-purple-300 transition-colors"
                                    >
                                        <span className="text-lg font-semibold">Explore Project</span>
                                        <ExternalLink className="w-5 h-5 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-300" />
                                    </motion.div>
                                </div>

                                {/* Number Badge */}
                                <div className="absolute top-8 right-8 w-16 h-16 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center">
                                    <span className="text-2xl font-bold text-white">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}

                    {/* End Spacer */}
                    <div className="flex-shrink-0 w-8" />
                </div>
            </div>


            {/* Scroll Progress Indicator */}
            <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 pointer-events-none">
                <div className="px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-sm font-medium flex items-center gap-3">
                    <span>Scroll to explore</span>
                    <span className="text-purple-400">→</span>
                    <span className="text-gray-400">{projects.length} projects</span>
                </div>
            </div>
        </div>
    );
}

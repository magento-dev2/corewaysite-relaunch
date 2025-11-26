"use client";

import { motion } from "framer-motion";
import { Briefcase, ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PortfolioHero() {
    const titleRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        if (!titleRef.current) return;

        gsap.from(titleRef.current, {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power3.out",
        });
    }, []);

    return (
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0E0918] via-[#1a0f2e] to-[#0E0918] pt-32 pb-20">
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
                <div
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-fuchsia-500/20 rounded-full blur-3xl animate-pulse"
                    style={{ animationDelay: "1s" }}
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                {/* Badge */}
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="inline-block mb-8"
                >
                    <div className="px-6 py-2 bg-gradient-to-r from-purple-500/20 to-fuchsia-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-semibold backdrop-blur-sm flex items-center gap-2">
                        <Briefcase className="w-4 h-4" />
                        Our Portfolio
                    </div>
                </motion.div>

                {/* Main Heading */}
                <h1
                    ref={titleRef}
                    className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
                >
                    Visual{" "}
                    <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
                        Storytelling
                    </span>
                </h1>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="text-xl text-gray-300 max-w-2xl mx-auto mb-8"
                >
                    Scroll to explore our creative work
                </motion.p>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.6 }}
                    className="flex flex-col items-center gap-2"
                >
                    <ArrowRight className="w-6 h-6 text-purple-400 rotate-90 animate-bounce" />
                </motion.div>
            </div>
        </section>
    );
}

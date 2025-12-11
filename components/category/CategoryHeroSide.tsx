"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface CategoryHeroSideProps {
    badge?: string;
    title: string;
    titleHighlight?: string;
    subtitle: string;
    description: string;
    primaryButton?: { label: string; href: string };
    secondaryButton?: { label: string; href: string };
    imageSrc: string;
    imageAlt: string;
}

export default function CategoryHeroSide({
    badge,
    title,
    titleHighlight,
    subtitle,
    description,
    primaryButton,
    secondaryButton,
    imageSrc,
    imageAlt,
}: CategoryHeroSideProps) {
    return (
        <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-gradient-to-br from-[#0E0918] via-[#1a1325] to-[#0E0918]">
            {/* Animated Background */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    {/* Left Side - Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 space-y-6 text-center"
                    >
                        {/* {badge && (
                            <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
                                <span className="text-purple-400 text-sm font-medium">{badge}</span>
                            </div>
                        )} */}

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                            {title}
                            {titleHighlight && (
                                <span className="text-purple-500"> {titleHighlight}</span>
                            )}
                        </h1>

                        <p className="text-xl md:text-2xl text-purple-300 font-medium">
                            {subtitle}
                        </p>

                        <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
                            {description}
                        </p>

                        {/* Buttons */}
                        {(primaryButton || secondaryButton) && (
                            <div className="flex flex-col sm:flex-row items-start gap-4 pt-4">
                                {primaryButton && (
                                    <a
                                        href={primaryButton.href}
                                        className="group px-8 py-4 rounded-lg font-medium text-lg flex items-center space-x-2 transition-all bg-gradient-to-r from-purple-500 to-violet-600 text-white hover:from-purple-600 hover:to-violet-700 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 hover:scale-105"
                                    >
                                        <span>{primaryButton.label}</span>
                                        <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                                    </a>
                                )}
                                {secondaryButton && (
                                    <a
                                        href={secondaryButton.href}
                                        className="group px-8 py-4 rounded-lg font-medium text-lg flex items-center space-x-2 transition-all bg-white/5 backdrop-blur-sm border border-white/10 text-white hover:bg-white/10 hover:border-purple-500/50"
                                    >
                                        <span>{secondaryButton.label}</span>
                                        <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                                    </a>
                                )}
                            </div>
                        )}
                    </motion.div>

                    {/* Right Side - Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex-1 flex justify-center md:justify-end"
                    >
                        <div className="relative w-full max-w-2xl">
                            <img src={imageSrc}/>
                            {/* <Image
                                src={imageSrc}
                                alt={imageAlt}
                                width={800}
                                height={600}
                                className="w-full h-auto rounded-lg"
                                priority
                            /> */}
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
        </section>
    );
}

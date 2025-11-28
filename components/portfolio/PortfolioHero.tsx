"use client";

import { useEffect, useRef } from "react";
import { Palette, Code, Search, PlayCircle, Diamond, Laptop, ArrowRight } from "lucide-react";
import { gsap } from "gsap";
import SplitType from "split-type";

interface PortfolioHeroProps {
    title: string;
    title2?: string;
    subtitle: string;
    buttons: { label: string; link: string }[];
}

export default function PortfolioHero({ title, title2, subtitle, buttons }: PortfolioHeroProps) {
    const canvasRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLHeadingElement>(null);

    // === Heading Animation + 3D Hover ===
    useEffect(() => {
        if (!textRef.current) return;

        const split = new SplitType(textRef.current, { types: "chars,words" });

        gsap.from(split.chars, {
            opacity: 0,
            y: 40,
            rotateX: 90,
            stagger: 0.04,
            duration: 1.2,
            ease: "power4.out",
        });

        const handleMouseMove = (e: MouseEvent) => {
            const { innerWidth, innerHeight } = window;
            const x = (e.clientX / innerWidth - 0.5) * 20;
            const y = (e.clientY / innerHeight - 0.5) * 20;

            gsap.to(textRef.current, {
                rotationY: x,
                rotationX: -y,
                transformPerspective: 800,
                ease: "power2.out",
                duration: 0.6,
            });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            split.revert();
        };
    }, []);

    // === Floating Icons Animation ===
    useEffect(() => {
        const icons = canvasRef.current?.querySelectorAll(".floating-icon");
        icons?.forEach((icon, index) => {
            const delay = index * 0.2;
            const duration = 3 + Math.random() * 2;
            (icon as HTMLElement).style.animationDelay = `${delay}s`;
            (icon as HTMLElement).style.animationDuration = `${duration}s`;
        });
    }, []);

    return (
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#0E0918] via-[#1a1325] to-[#0E0918]">

            {/* Background Glow */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            {/* Floating Icons */}
            <div ref={canvasRef} className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="floating-icon absolute top-30  left-[12%] text-purple-400/20"><Palette size={52} /></div>
                <div className="floating-icon absolute top-32 right-[15%] text-violet-400/20"><Code size={48} /></div>
                <div className="floating-icon absolute bottom-36 left-[22%] text-purple-400/20"><Search size={56} /></div>
                <div className="floating-icon absolute bottom-20 right-[20%] text-blue-400/20"><PlayCircle size={50} /></div>
                <div className="floating-icon absolute top-1/2 left-[8%] text-fuchsia-400/20"><Diamond size={42} /></div>
                <div className="floating-icon absolute top-1/3 right-[10%] text-cyan-400/20"><Laptop size={54} /></div>
            </div>

            {/* HERO BODY */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="flex flex-col md:flex-row items-center justify-between w-full">

                    {/* LEFT */}
                    <div className="flex-1 flex flex-col justify-start items-center text-center mb-8 md:mb-0 space-y-6">
                        <h1 ref={textRef} className="text-5xl md:text-6xl font-bold text-white leading-tight">
                            {title} <span className="text-purple-500">{title2}</span>
                        </h1>

                        <p className="text-lg text-gray-300 max-w-md mt-5 leading-relaxed">
                            {subtitle}
                        </p>

                        {/* Description */}
                        {/* <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                            className="text-xl text-gray-300 max-w-2xl mx-auto mt-10 text-center"
                        >
                            Scroll to explore our creative work & discover our digital craftsmanship.
                        </motion.p> */}

                        {/* Scroll Indicator
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1, duration: 0.6 }}
                            className="flex flex-col items-center gap-2 mt-4"
                        >
                            <ArrowRight className="w-6 h-6 text-purple-400 rotate-90 animate-bounce" />
                        </motion.div> */}

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                            {buttons.map((button, index) => (
                                <a
                                    key={button.label}
                                    href={button.link}
                                    className={`group px-8 py-4 rounded-lg font-medium text-lg flex items-center space-x-2 transition-all ${index === 0
                                        ? "bg-gradient-to-r from-purple-500 to-violet-600 text-white hover:from-purple-600 hover:to-violet-700 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 hover:scale-105"
                                        : "bg-white/5 backdrop-blur-sm border border-white/10 text-white hover:bg-white/10 hover:border-purple-500/50"
                                        }`}
                                >
                                    <span>{button.label}</span>
                                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="flex-1 flex justify-center md:justify-end mt-8 md:mt-0">
                        <img
                            src="/assets/herosection/digital.png"
                            alt="Portfolio Visual"
                            className="w-full max-w-4xl rounded-lg shadow-lg"
                        />
                    </div>

                </div>
            </div>

            {/* Bottom Divider Line */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>

            <style>{`
                .floating-icon {
                    animation: float infinite ease-in-out;
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(5deg); }
                }
            `}</style>
        </section>
    );
}

"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowRight, Sparkles } from "lucide-react";

interface FoodHeroProps {
  title: string;
  title2: string;
  subtitle: string;
  buttons: Array<{ label: string; link: string }>;
  img: string;
}

export default function FoodHero({
  title,
  title2,
  subtitle,
  buttons,
  img,
}: FoodHeroProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        textRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1 }
      ).fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.9, rotate: -5 },
        { opacity: 1, scale: 1, rotate: 0, duration: 1.2 },
        "-=0.7"
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0E0918] via-[#1a1325] to-[#0E0918]"
    >
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div ref={textRef} className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-green-500/10 backdrop-blur-sm border border-green-500/20 rounded-full px-4 py-2">
              <Sparkles className="text-green-400" size={16} />
              <span className="text-green-400 text-sm font-semibold">
                Industry Solutions
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              {title}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
                {title2}
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              {subtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              {buttons.map((button, index) => (
                <a
                  key={index}
                  href={button.link}
                  className={`group px-8 py-4 rounded-xl font-semibold text-lg flex items-center space-x-2 transition-all ${
                    index === 0
                      ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700 shadow-lg shadow-green-500/25 hover:shadow-green-500/40 hover:scale-105"
                      : "bg-white/5 backdrop-blur-sm border border-white/10 text-white hover:bg-white/10 hover:border-green-500/50"
                  }`}
                >
                  <span>{button.label}</span>
                  <ArrowRight
                    className="group-hover:translate-x-1 transition-transform"
                    size={20}
                  />
                </a>
              ))}
            </div>
          </div>

          <div ref={imageRef} className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-3xl blur-2xl"></div>
            <img
              src={img}
              alt="Food & Beverage Solutions"
              className="relative w-full rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent"></div>
    </section>
  );
}

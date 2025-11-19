"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import SplitType from "split-type";
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
  const textRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.9, x: 100 },
        { opacity: 1, scale: 1, x: 0, duration: 1.2, ease: "power3.out", delay: 0.3 }
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
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-purple-500/10 backdrop-blur-sm border border-purple-500/20 rounded-full px-4 py-2">
              <Sparkles className="text-purple-400" size={16} />
              <span className="text-purple-400 text-sm font-semibold">
                Industry Solutions
              </span>
            </div>

            <h1
              ref={textRef}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
            >
              {title}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-500">
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
                      ? "bg-gradient-to-r from-purple-500 to-violet-600 text-white hover:from-purple-600 hover:to-violet-700 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-105"
                      : "bg-white/5 backdrop-blur-sm border border-white/10 text-white hover:bg-white/10 hover:border-purple-500/50"
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
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-violet-500/20 rounded-3xl blur-2xl"></div>
            <img
              src={img}
              alt="Food & Beverage Solutions"
              className="relative w-full rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
    </section>
  );
}

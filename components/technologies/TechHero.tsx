"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import SplitType from "split-type";
import { ArrowRight, Code, Zap } from "lucide-react";

interface TechHeroProps {
  title: string;
  title2: string;
  subtitle: string;
  buttons: Array<{ label: string; link: string }>;
  img: string;
  accentColor?: string;
}

export default function TechHero({
  title,
  title2,
  subtitle,
  buttons,
  img,
  accentColor = "purple",
}: TechHeroProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!titleRef.current) return;

    const split = new SplitType(titleRef.current, { types: "chars,words" });

    gsap.from(split.chars, {
      opacity: 0,
      y: 50,
      rotateX: -90,
      stagger: 0.02,
      duration: 1,
      ease: "back.out(1.7)",
    });

    return () => split.revert();
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.8, rotate: -5 },
        { opacity: 1, scale: 1, rotate: 0, duration: 1.2, ease: "power3.out", delay: 0.5 }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[85vh] flex items-center overflow-hidden bg-gradient-to-br from-[#0E0918] via-[#1a1325] to-[#0E0918]"
    >
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.15),transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(167,139,250,0.15),transparent_50%)]"></div>
      </div>

      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8b5cf620_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf620_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-purple-500/10 backdrop-blur-sm border border-purple-500/20 rounded-full px-4 py-2">
              <Code className="text-purple-400 w-4 h-4" />
              <span className="text-purple-400 text-sm font-semibold">
                Technology Expertise
              </span>
            </div>

            <div>
              <h1
                ref={titleRef}
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
              >
                {title}{" "}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-400 to-purple-500">
                  {title2}
                </span>
              </h1>
            </div>

            <p className="text-xl text-gray-300 leading-relaxed max-w-xl">
              {subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              {buttons.map((button, index) => (
                <a
                  key={index}
                  href={button.link}
                  className={`group px-8 py-4 rounded-xl font-semibold text-lg flex items-center justify-center space-x-2 transition-all ${
                    index === 0
                      ? "bg-gradient-to-r from-purple-500 to-violet-600 text-white hover:from-purple-600 hover:to-violet-700 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-105"
                      : "bg-white/5 backdrop-blur-sm border border-white/10 text-white hover:bg-white/10 hover:border-purple-500/50"
                  }`}
                >
                  <span>{button.label}</span>
                  <ArrowRight
                    className="group-hover:translate-x-1 transition-transform w-5 h-5"
                  />
                </a>
              ))}
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="flex items-center gap-2">
                <Zap className="text-purple-400 w-5 h-5" />
                <span className="text-gray-400 text-sm">Fast Development</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="text-violet-400 w-5 h-5" />
                <span className="text-gray-400 text-sm">Scalable Solutions</span>
              </div>
            </div>
          </div>

          <div ref={imageRef} className="relative">
            <div className="absolute -inset-8 bg-gradient-to-br from-purple-500/20 to-violet-500/20 rounded-full blur-3xl"></div>
            <img
              src={img}
              alt={`${title} ${title2}`}
              className="relative w-full rounded-2xl shadow-2xl border border-white/10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

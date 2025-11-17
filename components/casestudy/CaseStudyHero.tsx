"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface CaseStudyHeroProps {
  title: string;
  imageUrl: string;
  gradient: string;
}

export default function CaseStudyHero({
  title,
  imageUrl,
  gradient,
}: CaseStudyHeroProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!heroRef.current || !imageRef.current) return;

    gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );

    gsap.fromTo(
      imageRef.current,
      { scale: 1.2, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.5, ease: "power3.out", delay: 0.3 }
    );
  }, []);

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div ref={heroRef}>
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-full text-blue-400 text-sm font-semibold mb-6">
              Case Study
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              {title}
            </h1>
            <p className="text-xl text-gray-400">
              Discover how Coreway Solution transformed this business with
              innovative technology solutions
            </p>
          </div>

          <div className="relative">
            <div
              className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-20 blur-3xl`}
            ></div>
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                ref={imageRef}
                src={imageUrl}
                alt={title}
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

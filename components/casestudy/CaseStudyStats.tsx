"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface StatItem {
  value: string;
  label: string;
}

interface CaseStudyStatsProps {
  stats: StatItem[];
  gradient: string;
}

export default function CaseStudyStats({
  stats,
  gradient,
}: CaseStudyStatsProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current || cardsRef.current.length === 0) return;

    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "back.out(1.2)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden">
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-5`}
      ></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
          Results That Matter
        </h2>
        <p className="text-xl text-gray-400 text-center mb-12">
          Measurable impact delivered
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className={`relative p-8 bg-gradient-to-br ${gradient} opacity-90 rounded-2xl border border-white/20 text-center group hover:scale-105 transition-transform`}
            >
              <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>
              <div className="relative z-10">
                <div className="text-3xl md:text-4xl font-bold text-white mb-3">
                  {stat.value}
                </div>
                <p className="text-gray-200 font-medium">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

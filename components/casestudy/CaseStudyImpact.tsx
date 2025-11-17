"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TrendingUp } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface CaseStudyImpactProps {
  impact: string;
}

export default function CaseStudyImpact({ impact }: CaseStudyImpactProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-t from-transparent to-[#0E0E0E]"
    >
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm border border-blue-500/20 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent"></div>

          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/20 rounded-2xl mb-6">
              <TrendingUp className="w-8 h-8 text-blue-400" />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              The Impact
            </h2>

            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              {impact}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

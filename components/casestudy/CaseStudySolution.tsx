"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Lightbulb } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface CaseStudySolutionProps {
  solution: string;
}

export default function CaseStudySolution({
  solution,
}: CaseStudySolutionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
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
    <div ref={sectionRef} className="relative">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-green-500/10 rounded-xl border border-green-500/20">
          <Lightbulb className="w-6 h-6 text-green-400" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Our Solution
        </h2>
      </div>
      <p className="text-lg text-gray-300 leading-relaxed">{solution}</p>
      <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-green-500/50 to-transparent rounded-full"></div>
    </div>
  );
}

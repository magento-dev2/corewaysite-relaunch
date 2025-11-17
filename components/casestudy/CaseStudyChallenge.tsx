"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AlertCircle } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface CaseStudyChallengeProps {
  challenge: string;
}

export default function CaseStudyChallenge({
  challenge,
}: CaseStudyChallengeProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, x: -50 },
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
        <div className="p-3 bg-red-500/10 rounded-xl border border-red-500/20">
          <AlertCircle className="w-6 h-6 text-red-400" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          The Challenge
        </h2>
      </div>
      <p className="text-lg text-gray-300 leading-relaxed">{challenge}</p>
      <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-red-500/50 to-transparent rounded-full"></div>
    </div>
  );
}

"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface CaseStudyProcessProps {
  process: string[];
}

export default function CaseStudyProcess({ process }: CaseStudyProcessProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current || itemsRef.current.length === 0) return;

    gsap.fromTo(
      itemsRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-[#0E0E0E] to-[#0A0A0A]"
    >
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
          Our Process
        </h2>
        <p className="text-xl text-gray-400 text-center mb-12">
          Step-by-step approach to achieving success
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {process.map((step, index) => (
            <div
              key={index}
              ref={(el) => {
                itemsRef.current[index] = el;
              }}
              className="relative p-6 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl hover:border-cyan-500/30 transition-all group"
            >
              <div className="absolute top-4 right-4 text-4xl font-bold text-white/5 group-hover:text-cyan-500/10 transition-colors">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 leading-relaxed">{step}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

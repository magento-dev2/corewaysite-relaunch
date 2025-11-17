"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TrendingUp, Quote } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface Testimonial {
  quote: string;
  author: string;
  position: string;
}

interface CaseStudyImpactProps {
  impact: string;
  testimonial: Testimonial;
}

export default function CaseStudyImpact({
  impact,
  testimonial,
}: CaseStudyImpactProps) {
  const impactRef = useRef<HTMLDivElement>(null);
  const testimonialRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!impactRef.current || !testimonialRef.current) return;

    gsap.fromTo(
      impactRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: impactRef.current,
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      testimonialRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: testimonialRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section className="py-20 bg-gradient-to-t from-transparent to-[#0E0E0E]">
      <div className="max-w-5xl mx-auto px-6 space-y-12">
        <div
          ref={impactRef}
          className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm border border-blue-500/20 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden"
        >
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

        <div
          ref={testimonialRef}
          className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-3xl p-10 md:p-16 relative overflow-hidden"
        >
          <div className="absolute top-8 left-8 w-20 h-20 bg-cyan-500/10 rounded-full flex items-center justify-center">
            <Quote className="w-10 h-10 text-cyan-400" />
          </div>

          <div className="relative z-10 mt-12">
            <p className="text-2xl md:text-3xl text-gray-200 leading-relaxed mb-8 italic">
              "{testimonial.quote}"
            </p>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full"></div>
              <div>
                <p className="text-white font-bold text-lg">
                  {testimonial.author}
                </p>
                <p className="text-gray-400">{testimonial.position}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

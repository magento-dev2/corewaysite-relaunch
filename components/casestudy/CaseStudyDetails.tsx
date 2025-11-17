"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code2, CheckCircle } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface CaseStudyDetailsProps {
  technologies: string[];
  results: string[];
}

export default function CaseStudyDetails({
  technologies,
  results,
}: CaseStudyDetailsProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const techRef = useRef<(HTMLDivElement | null)[]>([]);
  const resultRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      techRef.current,
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      }
    );

    gsap.fromTo(
      resultRef.current,
      { opacity: 0, x: 30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-[#0A0A0A] to-[#0E0E0E]"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-blue-500/10 rounded-xl border border-blue-500/20">
                <Code2 className="w-6 h-6 text-blue-400" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Technologies Used
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  ref={(el) => {
                    techRef.current[index] = el;
                  }}
                  className="p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-blue-500/30 transition-all group"
                >
                  <p className="text-gray-300 font-semibold group-hover:text-blue-400 transition-colors">
                    {tech}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-green-500/10 rounded-xl border border-green-500/20">
                <CheckCircle className="w-6 h-6 text-green-400" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Key Results
              </h2>
            </div>

            <div className="space-y-4">
              {results.map((result, index) => (
                <div
                  key={index}
                  ref={(el) => {
                    resultRef.current[index] = el;
                  }}
                  className="flex items-start gap-3 p-4 bg-gradient-to-r from-green-500/5 to-transparent border border-green-500/10 rounded-xl hover:border-green-500/30 transition-all"
                >
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300 leading-relaxed">{result}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface CaseStudyProcessProps {
  process: string[];
}

export default function CaseStudyProcessTheme({ process }: CaseStudyProcessProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const leftSide = leftRef.current;
    const rightSide = rightRef.current;

    if (!section || !leftSide || !rightSide) return;

    // Pin left side
    ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: () => `+=${rightSide.offsetHeight - window.innerHeight + 200}`,
      pin: leftSide,
      pinSpacing: false,
      anticipatePin: 1,
    });

    // Animate steps
    const items = rightSide.querySelectorAll(".process-step");

    gsap.fromTo(
      items,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.18,
        ease: "power3.out",
        scrollTrigger: {
          trigger: rightSide,
          start: "top 85%",
        },
      }
    );

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-b from-[#0E0918] via-[#1a1325] to-[#0E0918] overflow-hidden"
    >
      {/* Glowing BG blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-violet-500/10 blur-3xl rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* LEFT SIDE — sticky heading */}
          <div ref={leftRef} className="md:sticky md:top-24 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Our Process
            </h2>

            <p className="text-lg text-gray-300 leading-relaxed">
              Step-by-step workflow designed to deliver predictable, repeatable success.
            </p>
          </div>

          {/* RIGHT SIDE — scrollable steps */}
          <div ref={rightRef} className="space-y-10">

            {process.map((step, index) => (
              <div
                key={index}
                className="process-step bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl p-8 relative hover:border-cyan-400/30 transition-all duration-300"
              >
                {/* Number Badge */}
                <div className="absolute top-4 right-4 text-5xl font-bold text-white/5 group-hover:text-cyan-400/10 transition-colors">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-7 h-7 text-purple-600 flex-shrink-0" />

                  <p className="text-gray-300 text-lg leading-relaxed">
                    {step}
                  </p>
                </div>
              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}

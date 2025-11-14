"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface CaseStudyDetailsProps {
  challenges: string;
  solutions: string;
  stats?: { value: string; label: string }[];
}

export default function CaseStudyDetails({
  challenges,
  solutions,
  stats = [],
}: CaseStudyDetailsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const scrollSection = scrollRef.current;

    if (!container || !scrollSection) return;

    const totalScrollWidth = scrollSection.scrollWidth;
    const scrollDistance = totalScrollWidth - window.innerWidth;

    gsap.to(scrollSection, {
      x: () => -scrollDistance,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: () => `+=${scrollDistance}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const sections = [
    {
      title: "Challenges",
      content: challenges,
      color: "from-red-500 to-orange-500",
    },
    {
      title: "Solutions",
      content: solutions,
      color: "from-blue-500 to-cyan-500",
    },
  ];

  return (
    <section
      ref={containerRef}
      className="relative bg-[#0E0918] py-32 overflow-hidden"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

      <div className="relative z-10 text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Case Study Details
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Discover the challenges we tackled and solutions we delivered
        </p>
      </div>

      <div
        ref={scrollRef}
        className="flex space-x-24 px-[10vw] relative z-10 items-center"
      >
        {sections.map((item, i) => (
          <div
            key={i}
            className={`relative flex-shrink-0 w-[40vw] h-[40vh] rounded-xl p-3 bg-gradient-to-br ${item.color}`}
          >
            {i !== 0 && (
              <div className="absolute top-1/2 -left-[15vw] w-[15vw] h-[2px] bg-gradient-to-r from-white/10 to-white/0"></div>
            )}

            <div className="bg-[#0E0918]/90 h-full rounded-xl p-10 flex flex-col justify-center border border-white/10 backdrop-blur-sm shadow-xl shadow-black/20">
              <h3 className="text-3xl font-bold text-white mb-4">
                {item.title}
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                {item.content}
              </p>
            </div>
          </div>
        ))}

        {stats && stats.length > 0 && (
          <div className="relative flex-shrink-0 w-[40vw] h-[40vh] rounded-xl p-3 bg-gradient-to-br from-green-500 to-emerald-500">
            <div className="absolute top-1/2 -left-[15vw] w-[15vw] h-[2px] bg-gradient-to-r from-white/10 to-white/0"></div>

            <div className="bg-[#0E0918]/90 h-full rounded-xl p-10 flex flex-col justify-center border border-white/10 backdrop-blur-sm shadow-xl shadow-black/20">
              <h3 className="text-3xl font-bold text-white mb-6">
                Impact & Results
              </h3>
              <div className="space-y-6">
                {stats.map((stat, index) => (
                  <div key={index}>
                    <div className="text-4xl font-bold text-emerald-400 mb-2">
                      {stat.value}
                    </div>
                    <p className="text-gray-300 text-lg">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#0E0918] to-transparent pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#0E0918] to-transparent pointer-events-none"></div>
    </section>
  );
}

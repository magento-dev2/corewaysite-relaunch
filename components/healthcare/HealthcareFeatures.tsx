"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Users, Video, Pill, Database, FileText, Brain } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface Feature {
  id: string;
  title: string;
  desc: string;
}

interface HealthcareFeaturesProps {
  title: string;
  items: Feature[];
}

const iconMap: Record<string, React.ReactNode> = {
  "patient-portals": <Users className="w-8 h-8" />,
  "telemedicine": <Video className="w-8 h-8" />,
  "prescription-mgmt": <Pill className="w-8 h-8" />,
  "ehr-integration": <Database className="w-8 h-8" />,
  "clinical-trials": <FileText className="w-8 h-8" />,
  "ai-diagnostics": <Brain className="w-8 h-8" />,
};

export default function HealthcareFeatures({
  title,
  items,
}: HealthcareFeaturesProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );

      const cards = gridRef.current?.children || [];
      Array.from(cards).forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 60, rotateY: -15 },
          {
            opacity: 1,
            y: 0,
            rotateY: 0,
            duration: 0.8,
            delay: index * 0.1,
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-[#1a1325] relative">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8b5cf610_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf610_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            {title}
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Comprehensive healthcare technology solutions for better patient
            outcomes
          </p>
        </div>

        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-purple-500/30 transition-all duration-500"
            >
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500/5 via-transparent to-violet-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-violet-500/20 rounded-2xl flex items-center justify-center mb-6 text-purple-400 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  {iconMap[item.id]}
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </div>

              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-violet-500 rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

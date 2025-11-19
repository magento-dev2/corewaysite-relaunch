"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  TruckIcon,
  Factory,
  BrainCircuit,
  ShieldCheck,
  Smartphone,
  MapPin,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface Feature {
  id: string;
  title: string;
  desc: string;
}

interface FoodFeaturesProps {
  title: string;
  items: Feature[];
}

const iconMap: Record<string, React.ReactNode> = {
  "supply-chain": <TruckIcon className="w-8 h-8" />,
  production: <Factory className="w-8 h-8" />,
  forecasting: <BrainCircuit className="w-8 h-8" />,
  quality: <ShieldCheck className="w-8 h-8" />,
  ordering: <Smartphone className="w-8 h-8" />,
  delivery: <MapPin className="w-8 h-8" />,
};

const colorMap: Record<string, string> = {
  "supply-chain": "from-blue-500/10 to-cyan-500/5 border-blue-500/20 hover:border-blue-500/40",
  production: "from-purple-500/10 to-pink-500/5 border-purple-500/20 hover:border-purple-500/40",
  forecasting: "from-green-500/10 to-emerald-500/5 border-green-500/20 hover:border-green-500/40",
  quality: "from-yellow-500/10 to-orange-500/5 border-yellow-500/20 hover:border-yellow-500/40",
  ordering: "from-pink-500/10 to-rose-500/5 border-pink-500/20 hover:border-pink-500/40",
  delivery: "from-cyan-500/10 to-blue-500/5 border-cyan-500/20 hover:border-cyan-500/40",
};

export default function FoodFeatures({ title, items }: FoodFeaturesProps) {
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

      gsap.fromTo(
        gridRef.current?.children || [],
        { opacity: 0, y: 60, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.12,
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 70%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-[#0E0918] to-[#1a1325]"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold text-center text-white mb-16"
        >
          {title}
        </h2>

        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <div
              key={item.id}
              className={`group relative bg-gradient-to-br ${
                colorMap[item.id] || "from-gray-500/10 to-transparent border-gray-500/20"
              } border rounded-2xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-2xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/5 backdrop-blur-sm rounded-xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300">
                  {iconMap[item.id]}
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </div>

              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

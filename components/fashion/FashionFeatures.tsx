"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Camera,
  Sparkles,
  BarChart3,
  Package,
  Globe,
  Leaf,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface Feature {
  id: string;
  title: string;
  desc: string;
}

interface FashionFeaturesProps {
  title: string;
  items: Feature[];
}

const iconMap: Record<string, React.ReactNode> = {
  "virtual-tryon": <Camera className="w-8 h-8" />,
  "style-ai": <Sparkles className="w-8 h-8" />,
  "trend-forecasting": <BarChart3 className="w-8 h-8" />,
  "smart-inventory": <Package className="w-8 h-8" />,
  "omnichannel": <Globe className="w-8 h-8" />,
  "sustainability": <Leaf className="w-8 h-8" />,
};

export default function FashionFeatures({ title, items }: FashionFeaturesProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
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
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.15,
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
      className="py-24 bg-gradient-to-b from-[#0E0918] to-[#1a1325] relative"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h2
          ref={titleRef}
          className="text-3xl md:text-4xl font-bold text-center text-white mb-4"
        >
          {title}
        </h2>
        <p className="text-lg text-gray-300 text-center mb-16 max-w-2xl mx-auto">
          Advanced technology solutions for modern fashion retail
        </p>

        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <div
              key={item.id}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 transition-all duration-500 hover:bg-white/10"
            >
              <div className={`absolute inset-0 bg-gradient-to-br from-purple-500/10 via-violet-500/5 to-transparent rounded-2xl opacity-0 transition-opacity duration-500 ${activeIndex === index ? 'opacity-100' : ''}`}></div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500/20 to-violet-500/20 rounded-xl flex items-center justify-center text-purple-400 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-purple-500/30 group-hover:to-violet-500/30 transition-all duration-300">
                    {iconMap[item.id]}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-gray-400 leading-relaxed flex-grow">
                  {item.desc}
                </p>

                <div className="mt-6 flex items-center text-purple-400 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Learn more</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              <div className="absolute -inset-px bg-gradient-to-br from-purple-500/50 via-violet-500/50 to-purple-500/50 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

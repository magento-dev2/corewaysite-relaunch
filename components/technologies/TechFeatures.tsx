"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Layout,
  Smartphone,
  Building,
  Package,
  Phone,
  RefreshCw,
  Server,
  Share2,
  Grid3x3,
  Zap,
  Cloud,
  Link,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface Feature {
  id: string;
  title: string;
  desc: string;
  icon: string;
}

interface TechFeaturesProps {
  title: string;
  items: Feature[];
}

const iconMap: Record<string, React.ElementType> = {
  layout: Layout,
  smartphone: Smartphone,
  building: Building,
  package: Package,
  phone: Phone,
  refresh: RefreshCw,
  server: Server,
  share: Share2,
  grid: Grid3x3,
  zap: Zap,
  cloud: Cloud,
  link: Link,
};

export default function TechFeatures({ title, items }: TechFeaturesProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        gridRef.current?.children || [],
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 75%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-[#1a1325] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive solutions tailored to your business needs
          </p>
        </div>

        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Layout;
            const isActive = activeIndex === index;

            return (
              <div
                key={item.id}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 transition-all duration-500 hover:bg-white/10 hover:border-purple-500/50 hover:-translate-y-2"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-purple-500/0 via-purple-500/10 to-violet-500/0 rounded-2xl transition-opacity duration-500 ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                ></div>

                <div className="relative z-10">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-violet-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <IconComponent className="w-8 h-8 text-purple-400" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                </div>

                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -mr-16 -mt-16"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

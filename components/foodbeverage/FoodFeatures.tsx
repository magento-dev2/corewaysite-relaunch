"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  TruckIcon,
  FactoryIcon,
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
  production: <FactoryIcon className="w-8 h-8" />,
  forecasting: <BrainCircuit className="w-8 h-8" />,
  quality: <ShieldCheck className="w-8 h-8" />,
  ordering: <Smartphone className="w-8 h-8" />,
  delivery: <MapPin className="w-8 h-8" />,
};

export default function FoodFeatures({ title, items }: FoodFeaturesProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // TITLE ANIMATION
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      // CARD STAGGER ANIMATION
      gsap.utils.toArray(".feature-card").forEach((card: any, i: number) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 60, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            delay: i * 0.12,
            ease: "power3.out",
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
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-[#0E0918] to-[#1a1325] relative overflow-hidden"
    >
      {/* BACKGROUND ANIMATED TEXT */}
     <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
  <style>
    {`
      @keyframes floatWord {
        0% { transform: translateY(0px); opacity: 0.2; }
        50% { transform: translateY(-25px); opacity: 0.5; }
        100% { transform: translateY(0px); opacity: 0.2; }
      }
    `}
  </style>

  {[...Array(40)].map((_, i) => (
    <div
      key={i}
      className="absolute font-mono text-purple-500/20 text-xs"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animation: `floatWord ${3 + Math.random() * 3}s ease-in-out ${Math.random()}s infinite`,
      }}
    >
      {["FRESH", "QUALITY", "SAFE", "FAST", "TRACK", "ORDER"][
        Math.floor(Math.random() * 6)
      ]}
    </div>
  ))}
</div>


      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold text-center text-white mb-16"
        >
          {title}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <div
              key={item.id}
              className="feature-card group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:scale-105 hover:border-purple-500/50 hover:bg-white/10 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full blur-2xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 bg-purple-500/10 backdrop-blur-sm rounded-xl flex items-center justify-center mb-6 text-purple-400 group-hover:scale-110 group-hover:bg-purple-500/20 transition-all duration-300">
                  {iconMap[item.id]}
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </div>

              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

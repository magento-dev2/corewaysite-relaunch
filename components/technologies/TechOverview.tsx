"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TrendingUp, Users, Award, Zap } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface Stat {
  value: string;
  label: string;
}

interface TechOverviewProps {
  title: string;
  content: string;
  image: string;
  stats: Stat[];
}

export default function TechOverview({
  title,
  content,
  image,
  stats,
}: TechOverviewProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  const icons = [TrendingUp, Users, Award, Zap];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, x: -60 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );

      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: 60 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );

      gsap.fromTo(
        statsRef.current?.children || [],
        { opacity: 0, y: 40, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 85%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-[#0E0918] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,#8b5cf6_25%,transparent_25%),linear-gradient(-45deg,#8b5cf6_25%,transparent_25%)] bg-[size:60px_60px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div ref={contentRef} className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              {title}
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">{content}</p>

            <div className="pt-4 space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-400"></div>
                <span>Industry-leading performance and scalability</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <div className="w-1.5 h-1.5 rounded-full bg-violet-400"></div>
                <span>Modern architecture and best practices</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-400"></div>
                <span>Comprehensive testing and documentation</span>
              </div>
            </div>
          </div>

          <div ref={imageRef} className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-purple-500/20 to-violet-500/20 rounded-3xl blur-2xl"></div>
            <img
              src={image}
              alt={title}
              className="relative w-full h-[400px] object-cover rounded-2xl shadow-2xl border border-white/10"
            />
          </div>
        </div>

        <div ref={statsRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-purple-500/30 hover:from-purple-500/10 transition-all"
              >
                <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                  <Icon className="w-8 h-8 text-purple-400" />
                </div>
                <div className="relative">
                  <h3 className="text-4xl font-bold text-white mb-2 bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
                    {stat.value}
                  </h3>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

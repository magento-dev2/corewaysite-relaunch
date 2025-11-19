"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Eye, Palette, Sofa, Sparkles } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface FurnitureOverviewProps {
  title: string;
  content: string;
  image: string;
}

export default function FurnitureOverview({
  title,
  content,
  image,
}: FurnitureOverviewProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );

      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );

      gsap.fromTo(
        statsRef.current?.children || [],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-[#0E0918] to-[#1a1325] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div ref={contentRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {title}
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">{content}</p>
        </div>

        <div ref={imageRef} className="relative mb-20">
          <div className="absolute -inset-4 bg-gradient-to-br from-purple-500/20 to-violet-500/20 rounded-3xl blur-2xl"></div>
          <img
            src={image}
            alt={title}
            className="relative w-full h-[500px] object-cover rounded-2xl shadow-2xl border border-white/10"
          />
        </div>

        <div ref={statsRef} className="grid md:grid-cols-4 gap-6">
          <div className="group relative bg-white/5 backdrop-blur-sm border border-purple-500/10 rounded-2xl p-6 hover:border-purple-500/30 hover:bg-white/10 transition-all">
            <div className="absolute top-0 right-0 w-20 h-20 bg-purple-500/10 rounded-full blur-xl -mr-10 -mt-10"></div>
            <div className="relative">
              <Eye className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-3xl font-bold text-white mb-2">40%</h3>
              <p className="text-gray-400">Higher Conversion with AR</p>
            </div>
          </div>

          <div className="group relative bg-white/5 backdrop-blur-sm border border-violet-500/10 rounded-2xl p-6 hover:border-violet-500/30 hover:bg-white/10 transition-all">
            <div className="absolute top-0 right-0 w-20 h-20 bg-violet-500/10 rounded-full blur-xl -mr-10 -mt-10"></div>
            <div className="relative">
              <Sparkles className="w-8 h-8 text-violet-400 mb-4" />
              <h3 className="text-3xl font-bold text-white mb-2">35%</h3>
              <p className="text-gray-400">Reduction in Returns</p>
            </div>
          </div>

          <div className="group relative bg-white/5 backdrop-blur-sm border border-purple-500/10 rounded-2xl p-6 hover:border-purple-500/30 hover:bg-white/10 transition-all">
            <div className="absolute top-0 right-0 w-20 h-20 bg-purple-500/10 rounded-full blur-xl -mr-10 -mt-10"></div>
            <div className="relative">
              <Palette className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-3xl font-bold text-white mb-2">2x</h3>
              <p className="text-gray-400">Better Engagement</p>
            </div>
          </div>

          <div className="group relative bg-white/5 backdrop-blur-sm border border-violet-500/10 rounded-2xl p-6 hover:border-violet-500/30 hover:bg-white/10 transition-all">
            <div className="absolute top-0 right-0 w-20 h-20 bg-violet-500/10 rounded-full blur-xl -mr-10 -mt-10"></div>
            <div className="relative">
              <Sofa className="w-8 h-8 text-violet-400 mb-4" />
              <h3 className="text-3xl font-bold text-white mb-2">60%</h3>
              <p className="text-gray-400">Faster Fulfillment</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

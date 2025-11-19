"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Zap, Shield, TrendingUp } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface FoodOverviewProps {
  title: string;
  content: string;
  image: string;
}

export default function FoodOverview({
  title,
  content,
  image,
}: FoodOverviewProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

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
        cardsRef.current?.children || [],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-[#0E0918] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div ref={contentRef}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {title}
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">{content}</p>
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

        <div ref={cardsRef} className="grid md:grid-cols-3 gap-8">
          <div className="group bg-white/5 backdrop-blur-sm border border-purple-500/10 rounded-2xl p-8 hover:border-purple-500/30 hover:bg-white/10 transition-all hover:scale-105">
            <div className="w-14 h-14 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Zap className="w-7 h-7 text-purple-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Fast & Efficient</h3>
            <p className="text-gray-400 leading-relaxed">
              Accelerate operations with automated workflows and real-time data processing.
            </p>
          </div>

          <div className="group bg-white/5 backdrop-blur-sm border border-violet-500/10 rounded-2xl p-8 hover:border-violet-500/30 hover:bg-white/10 transition-all hover:scale-105">
            <div className="w-14 h-14 bg-violet-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Shield className="w-7 h-7 text-violet-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Safe & Compliant</h3>
            <p className="text-gray-400 leading-relaxed">
              Meet FDA, HACCP, and food safety standards with automated tracking and documentation.
            </p>
          </div>

          <div className="group bg-white/5 backdrop-blur-sm border border-purple-500/10 rounded-2xl p-8 hover:border-purple-500/30 hover:bg-white/10 transition-all hover:scale-105">
            <div className="w-14 h-14 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <TrendingUp className="w-7 h-7 text-purple-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">
              Growth Focused
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Scale operations efficiently with AI-powered forecasting and intelligent automation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

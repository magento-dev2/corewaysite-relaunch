"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Leaf, Shield, TrendingUp } from "lucide-react";

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
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6IiBzdHJva2U9IiMyMjI3MmUiIHN0cm9rZS13aWR0aD0iMSIvPjwvZz48L3N2Zz4=')] opacity-5"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div ref={contentRef}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {title}
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">{content}</p>
          </div>

          <div ref={imageRef} className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-3xl blur-2xl"></div>
            <img
              src={image}
              alt={title}
              className="relative w-full h-[400px] object-cover rounded-2xl shadow-2xl border border-white/10"
            />
          </div>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-3 gap-8">
          <div className="group bg-gradient-to-br from-green-500/5 to-transparent border border-green-500/10 rounded-2xl p-8 hover:border-green-500/30 transition-all hover:scale-105">
            <div className="w-14 h-14 bg-green-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Leaf className="w-7 h-7 text-green-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Sustainable</h3>
            <p className="text-gray-400 leading-relaxed">
              Reduce waste and optimize resources with smart supply chain and
              production analytics.
            </p>
          </div>

          <div className="group bg-gradient-to-br from-blue-500/5 to-transparent border border-blue-500/10 rounded-2xl p-8 hover:border-blue-500/30 transition-all hover:scale-105">
            <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Shield className="w-7 h-7 text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Safe & Compliant</h3>
            <p className="text-gray-400 leading-relaxed">
              Meet FDA, HACCP, and food safety standards with automated tracking
              and documentation.
            </p>
          </div>

          <div className="group bg-gradient-to-br from-purple-500/5 to-transparent border border-purple-500/10 rounded-2xl p-8 hover:border-purple-500/30 transition-all hover:scale-105">
            <div className="w-14 h-14 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <TrendingUp className="w-7 h-7 text-purple-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">
              Growth Focused
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Scale operations efficiently with AI-powered forecasting and
              automated workflows.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

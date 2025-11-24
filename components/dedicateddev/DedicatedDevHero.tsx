"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Users, Code2, Sparkles, TrendingUp } from "lucide-react";

export default function DedicatedDevHero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(titleRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
      })
      .from(subtitleRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
      }, "-=0.5")
      .from(buttonsRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
      }, "-=0.4")
      .from(statsRef.current?.children || [], {
        opacity: 0,
        y: 30,
        stagger: 0.15,
        duration: 0.6,
      }, "-=0.3");

      gsap.to(".floating-shape", {
        y: -20,
        rotation: 5,
        duration: 3,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
      });

      gsap.to(".pulse-circle", {
        scale: 1.5,
        opacity: 0,
        duration: 2,
        repeat: -1,
        ease: "power2.out",
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0E0918] via-[#1a1325] to-[#0E0918]">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAyKSIvPjwvZz48L3N2Zz4=')] opacity-20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="text-center max-w-5xl mx-auto space-y-8">
          <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
            <Sparkles className="text-blue-500" size={16} />
            <span className="text-gray-300 text-sm">Top 1% Tech Talent</span>
          </div>

          <h1 ref={titleRef} className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
            Hire <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600">Dedicated Developers</span>
          </h1>

          <p ref={subtitleRef} className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
            Scale your team with expert developers who work exclusively for you. Access unlimited technology expertise with flexible engagement models.
          </p>

          <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-4 rounded-lg hover:from-blue-600 hover:to-cyan-700 transition-all font-medium text-lg flex items-center justify-center space-x-2 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:scale-105">
              <span>Start Hiring</span>
              <Users className="group-hover:scale-110 transition-transform" size={20} />
            </button>

            <button className="group bg-white/5 backdrop-blur-sm border border-white/10 text-white px-8 py-4 rounded-lg hover:bg-white/10 hover:border-blue-500/50 transition-all font-medium text-lg">
              View Talent Pool
            </button>
          </div>

          <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12">
            <div className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-6">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-gray-400 text-sm">Expert Developers</div>
            </div>
            <div className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-6">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-gray-400 text-sm">Technologies</div>
            </div>
            <div className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-6">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">98%</div>
              <div className="text-gray-400 text-sm">Client Satisfaction</div>
            </div>
            <div className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-6">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-400 text-sm">Support Available</div>
            </div>
          </div>

          <div className="relative pt-12">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="pulse-circle w-40 h-40 bg-blue-500/30 rounded-full"></div>
            </div>
            <div className="relative flex justify-center space-x-4">
              <div className="floating-shape w-20 h-20 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-2xl flex items-center justify-center border border-blue-500/40 shadow-xl backdrop-blur-xl">
                <Code2 className="w-10 h-10 text-blue-400" strokeWidth={1.5} />
              </div>
              <div className="floating-shape w-20 h-20 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 rounded-2xl flex items-center justify-center border border-cyan-500/40 shadow-xl backdrop-blur-xl" style={{ animationDelay: "0.5s" }}>
                <Users className="w-10 h-10 text-cyan-400" strokeWidth={1.5} />
              </div>
              <div className="floating-shape w-20 h-20 bg-gradient-to-br from-blue-600/30 to-cyan-600/30 rounded-2xl flex items-center justify-center border border-blue-600/40 shadow-xl backdrop-blur-xl" style={{ animationDelay: "1s" }}>
                <TrendingUp className="w-10 h-10 text-blue-400" strokeWidth={1.5} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
    </section>
  );
}

"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Database, Sparkles, MessageSquare, Zap } from "lucide-react";

export default function DBDashbotHero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

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
      .from(cardsRef.current?.children || [], {
        opacity: 0,
        y: 50,
        scale: 0.9,
        stagger: 0.2,
        duration: 0.8,
      }, "-=0.4");

      gsap.to(".floating-icon", {
        y: -20,
        duration: 2,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
      });

      gsap.to(".pulse-ring", {
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
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAyKSIvPjwvZz48L3N2Zz4=')] opacity-20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
              <Sparkles className="text-purple-500" size={16} />
              <span className="text-gray-300 text-sm">Free Setup for Your Business</span>
            </div>

            <h1 ref={titleRef} className="text-5xl md:text-7xl font-bold text-white leading-tight">
              AI-Driven SQL Database{" "}
              <span className="text-purple-500">Answering Solution</span>
            </h1>

            <p ref={subtitleRef} className="text-xl text-gray-300 leading-relaxed">
              Leverage the power of AI to extract precise answers from your SQL databases effortlessly. No technical SQL expertise required.
            </p>

            <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-gradient-to-r from-purple-500 to-violet-600 text-white px-8 py-4 rounded-lg hover:from-purple-600 hover:to-violet-700 transition-all font-medium text-lg flex items-center justify-center space-x-2 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 hover:scale-105">
                <span>Request for Demo</span>
                <Sparkles className="group-hover:rotate-12 transition-transform" size={20} />
              </button>

              <button className="group bg-white/5 backdrop-blur-sm border border-white/10 text-white px-8 py-4 rounded-lg hover:bg-white/10 hover:border-purple-500/50 transition-all font-medium text-lg">
                Get Started Free
              </button>
            </div>
          </div>

          <div ref={cardsRef} className="relative space-y-4">
            <div className="relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="pulse-ring w-32 h-32 bg-purple-500/30 rounded-full"></div>
              </div>
              <div className="relative flex justify-center mb-8">
                <div className="floating-icon w-32 h-32 bg-gradient-to-br from-purple-500/20 to-violet-500/20 rounded-3xl flex items-center justify-center border border-purple-500/30 shadow-2xl backdrop-blur-xl">
                  <Database className="w-16 h-16 text-purple-400" strokeWidth={1.5} />
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500/30 to-violet-500/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-6 h-6 text-purple-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold mb-2">Natural Language Queries</h3>
                  <p className="text-gray-400 text-sm">Ask questions in plain English without technical expertise</p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-violet-500/30 to-purple-500/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-violet-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold mb-2">Real-Time Responses</h3>
                  <p className="text-gray-400 text-sm">Get instant accurate answers from large datasets</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
    </section>
  );
}

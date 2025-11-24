"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { FileText, Sparkles, MessageSquare, Zap, ArrowRight } from "lucide-react";

export default function AIChatHero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(titleRef.current, {
        opacity: 0,
        y: 100,
        scale: 0.9,
        duration: 1.2,
      })
      .from(subtitleRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
      }, "-=0.6")
      .from(buttonsRef.current?.children || [], {
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 0.8,
      }, "-=0.5")
      .from(visualRef.current, {
        opacity: 0,
        scale: 0.8,
        rotationY: -30,
        duration: 1.2,
      }, "-=0.8");

      gsap.to(".floating-particle", {
        y: "random(-30, 30)",
        x: "random(-30, 30)",
        duration: "random(2, 4)",
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: {
          amount: 1.5,
          from: "random"
        }
      });

      gsap.to(".rotate-slow", {
        rotation: 360,
        duration: 20,
        ease: "none",
        repeat: -1,
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0E0918] via-[#1a1325] to-[#0E0918]">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-3xl"></div>

        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="floating-particle absolute w-1 h-1 bg-purple-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAyKSIvPjwvZz48L3N2Zz4=')] opacity-20"></div>

 <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
  <div className="grid md:grid-cols-2 gap-12 items-center">

    {/* LEFT CONTENT */}
    <div className="space-y-8">
      <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
        <Sparkles className="text-purple-500" size={16} />
        <span className="text-gray-300 text-sm">AI-Powered Document Intelligence</span>
      </div>

      <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
        Chat with Your{" "}
        <span className="text-purple-500">PDF Documents</span>
      </h1>

      <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
        Transform static PDFs into interactive conversations. Ask questions, get instant answers, and extract insights with AI.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <button className="cursor-pointer group bg-gradient-to-r from-purple-500 to-violet-600 text-white px-8 py-4 rounded-lg hover:from-purple-600 hover:to-violet-700 transition-all font-medium text-lg flex items-center justify-center space-x-2 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 hover:scale-105">
          <span>Request for Demo</span>
          <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
        </button>

        <button className="cursor-pointer group bg-white/5 backdrop-blur-sm border border-white/10 text-white px-8 py-4 rounded-lg hover:bg-white/10 hover:border-purple-500/50 transition-all font-medium text-lg">
          Watch Demo
        </button>
      </div>
    </div>

    {/* RIGHT VISUAL CARDS */}
    <div className="relative space-y-4">

      {/* Floating Icon */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="pulse-ring w-32 h-32 bg-purple-500/30 rounded-full"></div>
        </div>

        <div className="relative flex justify-center mb-8">
          <div className="floating-icon w-32 h-32 bg-gradient-to-br from-purple-500/20 to-violet-500/20 rounded-3xl flex items-center justify-center border border-purple-500/30 shadow-2xl backdrop-blur-xl">
            <FileText className="w-16 h-16 text-purple-400" strokeWidth={1.5} />
          </div>
        </div>
      </div>

      {/* Document Card */}
      <div className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-6">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500/30 to-violet-500/30 rounded-lg flex items-center justify-center flex-shrink-0">
            <FileText className="w-6 h-6 text-purple-400" />
          </div>
          <div className="flex-1">
            <h3 className="text-white font-semibold mb-2">Smart PDF Analysis</h3>
            <p className="text-gray-400 text-sm">
              AI reads and understands your documents instantly
            </p>
          </div>
        </div>
      </div>

      {/* AI Response Card */}
      <div className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-6">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-gradient-to-br from-violet-500/30 to-purple-500/30 rounded-lg flex items-center justify-center flex-shrink-0">
            <MessageSquare className="w-6 h-6 text-violet-400" />
          </div>
          <div className="flex-1">
            <h3 className="text-white font-semibold mb-2">Instant AI Answers</h3>
            <p className="text-gray-400 text-sm">
              Get responses in seconds with deep context
            </p>
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

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
        <div className="text-center space-y-8">
          <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3">
            <Sparkles className="text-purple-500" size={20} />
            <span className="text-gray-300">AI-Powered Document Intelligence</span>
          </div>

          <h1 ref={titleRef} className="text-6xl md:text-8xl font-bold text-white leading-tight max-w-5xl mx-auto">
            Chat with Your{" "}
            <span className="bg-gradient-to-r from-purple-500 via-violet-500 to-purple-600 bg-clip-text text-transparent">
              PDF Documents
            </span>
          </h1>

          <p ref={subtitleRef} className="text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Transform static PDFs into interactive conversations. Ask questions, get instant answers, and extract insights with AI.
          </p>

          <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <button className="group bg-gradient-to-r from-purple-500 to-violet-600 text-white px-10 py-5 rounded-xl hover:from-purple-600 hover:to-violet-700 transition-all font-semibold text-lg flex items-center space-x-3 shadow-2xl shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-105">
              <span>Request for Demo</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>

            <button className="group bg-white/5 backdrop-blur-sm border border-white/10 text-white px-10 py-5 rounded-xl hover:bg-white/10 hover:border-purple-500/50 transition-all font-semibold text-lg">
              Watch Demo
            </button>
          </div>

          <div ref={visualRef} className="pt-16 max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-violet-500/20 rounded-3xl blur-3xl"></div>

              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 shadow-2xl">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="flex-1 bg-white/5 rounded-lg px-4 py-2">
                    <span className="text-gray-400 text-sm">Document Analysis</span>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="rotate-slow w-12 h-12 bg-gradient-to-br from-purple-500/30 to-violet-500/30 rounded-xl flex items-center justify-center">
                          <FileText className="w-6 h-6 text-purple-400" />
                        </div>
                        <div className="flex-1">
                          <div className="h-2 bg-white/10 rounded-full mb-2"></div>
                          <div className="h-2 bg-white/10 rounded-full w-2/3"></div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="h-1.5 bg-purple-500/30 rounded-full"></div>
                        <div className="h-1.5 bg-purple-500/20 rounded-full w-5/6"></div>
                        <div className="h-1.5 bg-purple-500/20 rounded-full w-4/6"></div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-gradient-to-br from-purple-500/20 to-violet-500/20 border border-purple-500/30 rounded-2xl p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <MessageSquare className="w-6 h-6 text-purple-400" />
                        <span className="text-white font-semibold">AI Response</span>
                      </div>
                      <div className="space-y-2">
                        <div className="h-2 bg-white/20 rounded-full"></div>
                        <div className="h-2 bg-white/20 rounded-full w-5/6"></div>
                        <div className="h-2 bg-white/20 rounded-full w-4/6"></div>
                      </div>
                      <div className="mt-4 flex items-center space-x-2">
                        <Zap className="w-4 h-4 text-yellow-400" />
                        <span className="text-xs text-gray-400">Answered in 0.3s</span>
                      </div>
                    </div>
                  </div>
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

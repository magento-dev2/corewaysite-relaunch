"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Cloud, Database, Sparkles, Zap } from "lucide-react";

export default function S3ProcessHero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

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
      }, "-=0.4");

      gsap.from(imageRef.current, {
        opacity: 0,
        x: 100,
        duration: 1.2,
        ease: "power3.out"
      });

      gsap.to(".cloud-icon", {
        y: -20,
        duration: 2.5,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.3
      });

      gsap.to(".data-flow", {
        x: "100%",
        duration: 2,
        ease: "linear",
        repeat: -1,
        stagger: 0.4
      });

      gsap.to(".rotating-badge", {
        rotation: 360,
        duration: 20,
        ease: "linear",
        repeat: -1
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-[#0E0918] via-[#1a1325] to-[#0E0918]">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAyKSIvPjwvZz48L3N2Zz4=')] opacity-20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
              <Sparkles className="text-purple-500" size={16} />
              <span className="text-gray-300 text-sm">AWS S3 Optimization</span>
            </div>

            <h1 ref={titleRef} className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Master <span className="text-purple-500">S3 Storage</span> Process
            </h1>

            <p ref={subtitleRef} className="text-lg text-gray-300 leading-relaxed">
              Streamline your AWS S3 workflows with automated processes, intelligent data management, and enterprise-grade security solutions.
            </p>

            <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-gradient-to-r from-purple-500 to-violet-600 text-white px-8 py-4 rounded-lg hover:from-purple-600 hover:to-violet-700 transition-all font-medium text-lg flex items-center justify-center space-x-2 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 hover:scale-105">
                <span>Get Started</span>
                <Zap className="group-hover:scale-110 transition-transform" size={20} />
              </button>

              <button className="group bg-white/5 backdrop-blur-sm border border-white/10 text-white px-8 py-4 rounded-lg hover:bg-white/10 hover:border-purple-500/50 transition-all font-medium text-lg">
                View Documentation
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-4 text-center">
                <div className="text-2xl font-bold text-white mb-1">99.9%</div>
                <div className="text-gray-400 text-xs">Uptime</div>
              </div>
              <div className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-4 text-center">
                <div className="text-2xl font-bold text-white mb-1">50%</div>
                <div className="text-gray-400 text-xs">Cost Savings</div>
              </div>
              <div className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-4 text-center">
                <div className="text-2xl font-bold text-white mb-1">24/7</div>
                <div className="text-gray-400 text-xs">Support</div>
              </div>
            </div>
          </div>

          <div ref={imageRef} className="relative">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-violet-500/20 rounded-3xl blur-3xl"></div>

              <div className="relative bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8">
                <div className="relative">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotating-badge">
                    <div className="w-32 h-32 border-4 border-purple-500/30 border-dashed rounded-full"></div>
                  </div>

                  <div className="relative z-10 bg-gradient-to-br from-purple-500/30 to-violet-500/30 rounded-3xl p-8 border border-purple-500/40">
                    <div className="flex items-center justify-center mb-8">
                      <div className="cloud-icon w-20 h-20 bg-purple-500/40 rounded-2xl flex items-center justify-center backdrop-blur-xl border border-purple-500/50">
                        <Cloud className="w-10 h-10 text-white" strokeWidth={1.5} />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-[#1a1325] rounded-xl p-4 border border-white/10 overflow-hidden">
                        <div className="flex items-center space-x-3 mb-3">
                          <Database className="w-5 h-5 text-purple-400" />
                          <span className="text-white text-sm font-semibold">Upload Process</span>
                        </div>
                        <div className="relative h-2 bg-white/5 rounded-full overflow-hidden">
                          <div className="data-flow absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full"></div>
                        </div>
                      </div>

                      <div className="bg-[#1a1325] rounded-xl p-4 border border-white/10 overflow-hidden">
                        <div className="flex items-center space-x-3 mb-3">
                          <Zap className="w-5 h-5 text-violet-400" />
                          <span className="text-white text-sm font-semibold">Processing</span>
                        </div>
                        <div className="relative h-2 bg-white/5 rounded-full overflow-hidden">
                          <div className="data-flow absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full"></div>
                        </div>
                      </div>

                      <div className="bg-[#1a1325] rounded-xl p-4 border border-white/10">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                              <span className="text-green-400 text-xs">✓</span>
                            </div>
                            <span className="text-gray-300 text-sm">Completed</span>
                          </div>
                          <span className="text-gray-500 text-xs">Just now</span>
                        </div>
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

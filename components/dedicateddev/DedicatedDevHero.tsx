"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Users, Code2, Sparkles } from "lucide-react";

export default function DedicatedDevHero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
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
      }, "-=0.4")
      .from(statsRef.current?.children || [], {
        opacity: 0,
        y: 30,
        stagger: 0.15,
        duration: 0.6,
      }, "-=0.3");

      gsap.from(imageRef.current, {
        opacity: 0,
        x: 100,
        duration: 1.2,
        ease: "power3.out"
      });

      gsap.to(".floating-dev-card", {
        y: -15,
        rotation: 2,
        duration: 3,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.3
      });

      gsap.to(".code-line", {
        width: "100%",
        duration: 2,
        ease: "power2.inOut",
        stagger: 0.2,
        repeat: -1,
        repeatDelay: 1
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
              <span className="text-gray-300 text-sm">Top 1% Tech Talent</span>
            </div>

            <h1 ref={titleRef} className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Hire <span className="text-purple-500">Dedicated</span> Developers
            </h1>

            <p ref={subtitleRef} className="text-lg text-gray-300 leading-relaxed">
              Scale your team with expert developers who work exclusively for you. Access unlimited technology expertise with flexible engagement models.
            </p>

            <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-gradient-to-r from-purple-500 to-violet-600 text-white px-8 py-4 rounded-lg hover:from-purple-600 hover:to-violet-700 transition-all font-medium text-lg flex items-center justify-center space-x-2 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 hover:scale-105">
                <span>Start Hiring</span>
                <Users className="group-hover:scale-110 transition-transform" size={20} />
              </button>

              <button className="group bg-white/5 backdrop-blur-sm border border-white/10 text-white px-8 py-4 rounded-lg hover:bg-white/10 hover:border-purple-500/50 transition-all font-medium text-lg">
                View Talent Pool
              </button>
            </div>

            <div ref={statsRef} className="grid grid-cols-2 gap-4 pt-6">
              <div className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-4">
                <div className="text-3xl font-bold text-white mb-1">500+</div>
                <div className="text-gray-400 text-sm">Expert Developers</div>
              </div>
              <div className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-4">
                <div className="text-3xl font-bold text-white mb-1">50+</div>
                <div className="text-gray-400 text-sm">Technologies</div>
              </div>
              <div className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-4">
                <div className="text-3xl font-bold text-white mb-1">98%</div>
                <div className="text-gray-400 text-sm">Client Satisfaction</div>
              </div>
              <div className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-4">
                <div className="text-3xl font-bold text-white mb-1">24/7</div>
                <div className="text-gray-400 text-sm">Support Available</div>
              </div>
            </div>
          </div>

          <div ref={imageRef} className="relative">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-violet-500/20 rounded-3xl blur-3xl"></div>

              <div className="relative bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 space-y-6">
                <div className="floating-dev-card bg-gradient-to-br from-purple-500/20 to-violet-500/20 border border-purple-500/30 rounded-2xl p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-purple-500/30 rounded-full flex items-center justify-center">
                      <Code2 className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">Full Stack Developer</div>
                      <div className="text-gray-400 text-sm">10+ Years Experience</div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-xs text-purple-300">React</span>
                    <span className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-xs text-purple-300">Node.js</span>
                    <span className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-xs text-purple-300">AWS</span>
                  </div>
                </div>

                <div className="floating-dev-card bg-gradient-to-br from-violet-500/20 to-purple-500/20 border border-violet-500/30 rounded-2xl p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-violet-500/30 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-violet-400" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">Mobile Developer</div>
                      <div className="text-gray-400 text-sm">8+ Years Experience</div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-violet-500/20 border border-violet-500/30 rounded-full text-xs text-violet-300">Flutter</span>
                    <span className="px-3 py-1 bg-violet-500/20 border border-violet-500/30 rounded-full text-xs text-violet-300">React Native</span>
                  </div>
                </div>

                <div className="bg-[#1a1325] rounded-2xl p-4 border border-white/10">
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="flex space-x-1">
                      <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                    </div>
                    <span className="text-gray-500 text-xs">Live Coding Session</span>
                  </div>
                  <div className="space-y-2 font-mono text-xs">
                    <div className="code-line h-2 bg-purple-500/30 rounded w-0"></div>
                    <div className="code-line h-2 bg-violet-500/30 rounded w-0"></div>
                    <div className="code-line h-2 bg-purple-500/30 rounded w-0"></div>
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

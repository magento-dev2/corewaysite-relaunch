"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Brain, Code2, Server, Lock, Sparkle } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const technologies = [
  {
    icon: Brain,
    title: "Natural Language Processing",
    description: "Advanced NLP algorithms understand context and intent in plain English queries"
  },
  {
    icon: Code2,
    title: "SQL Query Generation",
    description: "Automatically transforms natural language into optimized SQL with full transparency"
  },
  {
    icon: Server,
    title: "Real-Time Data Processing",
    description: "Lightning-fast query execution across large and complex database structures"
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description: "Bank-level encryption and security protocols to protect your sensitive data"
  }
];

export default function DBDashbotTechnology() {
  const sectionRef = useRef<HTMLElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse"
        }
      });

      itemsRef.current.forEach((item, index) => {
        if (item) {
          tl.from(item, {
            opacity: 0,
            y: 50,
            rotation: -5,
            duration: 0.8,
            ease: "back.out(1.7)"
          }, index * 0.2);
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-[#1a0f2b] to-[#0E0918] relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-6">
             <div className="flex items-center gap-1">
          <Sparkle className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-medium text-gray-300">Technology Stack</span>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Powered by Advanced AI
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Built on cutting-edge technologies for superior performance and reliability
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div
                key={index}
                ref={(el) => { itemsRef.current[index] = el; }}
                className="group"
              >
                <div className="h-full bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 hover:-translate-y-2">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500/20 to-violet-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 border border-purple-500/30">
                    <Icon className="w-7 h-7 text-purple-400" strokeWidth={1.5} />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {tech.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed">
                    {tech.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

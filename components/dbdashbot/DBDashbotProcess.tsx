"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MessageCircle, Database, CheckCircle } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const steps = [
  {
    icon: MessageCircle,
    number: "01",
    title: "Ask in Plain English",
    description: "Type your question naturally, no SQL knowledge required. Our AI understands your intent.",
  },
  {
    icon: Database,
    number: "02",
    title: "AI Generates SQL",
    description: "The system automatically converts your question into optimized SQL queries with full transparency.",
  },
  {
    icon: CheckCircle,
    number: "03",
    title: "Get Instant Results",
    description: "Receive accurate answers in real-time, along with the generated SQL for your reference.",
  }
];

export default function DBDashbotProcess() {
  const sectionRef = useRef<HTMLElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "bottom 30%",
          toggleActions: "play none none reverse"
        }
      });

      tl.from(lineRef.current, {
        scaleX: 0,
        duration: 1.5,
        ease: "power2.inOut"
      });

      stepsRef.current.forEach((step, index) => {
        if (step) {
          tl.from(step, {
            opacity: 0,
            y: 50,
            scale: 0.8,
            duration: 0.6,
            ease: "back.out(1.7)"
          }, index * 0.3);
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-[#1a0f2b] to-[#0E0918] relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-6">
            <span className="text-sm font-medium text-gray-300">How It Works</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Simple Three-Step Process
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Query your database naturally and get instant results
          </p>
        </div>

        <div className="relative">
          <div ref={lineRef} className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 via-violet-500 to-purple-500 transform -translate-y-1/2 origin-left"></div>

          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  ref={(el) => { stepsRef.current[index] = el; }}
                  className="relative"
                >
                  <div className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 h-full">
                    <div className="flex justify-center mb-6">
                      <div className="relative">
                        <div className="absolute inset-0 bg-purple-500/30 rounded-full blur-xl"></div>
                        <div className="relative w-20 h-20 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full flex items-center justify-center">
                          <Icon className="w-10 h-10 text-white" strokeWidth={2} />
                        </div>
                      </div>
                    </div>

                    <div className="text-center">
                      <div className="text-5xl font-bold text-white/10 mb-4">{step.number}</div>
                      <h3 className="text-2xl font-bold text-white mb-4">
                        {step.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Clock, Sliders, Shield, TrendingUp, Sparkle } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const benefits = [
  {
    icon: Clock,
    title: "Time-Saving Efficiency",
    description: "Retrieve data instantly without the need for manual SQL expertise. Save hours of development time and focus on what matters.",
    stat: "10x Faster",
    details: ["Instant Results", "No Training Needed", "Quick Implementation"]
  },
  {
    icon: Sliders,
    title: "Customizable Flexibility",
    description: "Match the solution to your unique operational needs with custom filters and workflows tailored to your business.",
    stat: "100% Tailored",
    details: ["Custom Filters", "Your Workflow", "Adaptable Rules"]
  },
  {
    icon: Shield,
    title: "Secure Integration",
    description: "Ensures complete data integrity and security with enterprise-grade protection standards and compliance.",
    stat: "Bank-Level Security",
    details: ["End-to-End Encryption", "Compliance Ready", "Audit Logs"]
  },
  {
    icon: TrendingUp,
    title: "Scalable Growth",
    description: "Adapts seamlessly to your growing data requirements without performance degradation or additional complexity.",
    stat: "Unlimited Scale",
    details: ["Auto Scaling", "High Performance", "Future Ready"]
  }
];

export default function DBDashbotBenefits() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray<HTMLElement>('.benefit-panel');

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: () => `+=${rightRef.current?.offsetHeight || 0}`,
        pin: leftRef.current,
        pinSpacing: false,
      });

      panels.forEach((panel) => {
        gsap.from(panel, {
          opacity: 0,
          x: 100,
          scale: 0.9,
          scrollTrigger: {
            trigger: panel,
            start: "top 80%",
            end: "top 30%",
            scrub: 1,
          }
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-gradient-to-b from-[#1a0f2b] to-[#0E0918] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 min-h-screen items-start">
          <div ref={leftRef} className="lg:sticky lg:top-24 py-24">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full">
 <div className="flex items-center gap-1">
          <Sparkle className="w-4 h-4 text-purple-600" />
                <span className="text-sm font-medium text-gray-300">Key Benefits</span>
            </div>              </div>
             
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                Why Choose <span className="text-purple-500">DBDashbot</span>
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed">
                Experience unparalleled efficiency, flexibility, and security in database querying with measurable results.
              </p>

              <div className="pt-8 space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 flex items-center justify-center">
                    <span className="text-green-400 font-bold text-lg">✓</span>
                  </div>
                  <span className="text-gray-300">Trusted by 500+ businesses worldwide</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 flex items-center justify-center">
                    <span className="text-blue-400 font-bold text-lg">✓</span>
                  </div>
                  <span className="text-gray-300">Free setup included</span>
                </div>
              </div>
            </div>
          </div>

          <div ref={rightRef} className="py-24 space-y-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="benefit-panel">
                  <div className="group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20">
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500/30 to-violet-500/30 rounded-2xl flex items-center justify-center border border-purple-500/40 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-8 h-8 text-purple-400" strokeWidth={2} />
                      </div>
                      <div className="px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full">
                        <span className="text-sm font-semibold text-purple-300">{benefit.stat}</span>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                      {benefit.title}
                    </h3>

                    <p className="text-gray-400 leading-relaxed mb-6">
                      {benefit.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {benefit.details.map((detail, idx) => (
                        <span key={idx} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-400">
                          {detail}
                        </span>
                      ))}
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-violet-500/0 group-hover:from-purple-500/5 group-hover:to-violet-500/5 rounded-3xl transition-all duration-300"></div>
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

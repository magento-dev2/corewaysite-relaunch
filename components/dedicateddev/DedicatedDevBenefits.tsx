"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Zap, DollarSign, Shield, Users, Clock, TrendingUp } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const benefits = [
  {
    icon: Zap,
    title: "Faster Time to Market",
    description: "Launch products faster with dedicated developers who understand your vision and work exclusively on your projects without distractions.",
    stat: "3x Faster",
    highlights: ["Quick Onboarding", "Immediate Start", "No Delays"]
  },
  {
    icon: DollarSign,
    title: "Cost-Effective Solution",
    description: "Save up to 60% on hiring costs compared to in-house teams. No overhead, benefits, or infrastructure expenses to manage.",
    stat: "60% Savings",
    highlights: ["No Hidden Costs", "Flexible Rates", "Budget Friendly"]
  },
  {
    icon: Shield,
    title: "Complete Control & Transparency",
    description: "Direct communication with your dedicated developers. Daily reports, sprint planning, and complete visibility into development progress.",
    stat: "100% Transparent",
    highlights: ["Daily Reports", "Direct Access", "Full Control"]
  },
  {
    icon: Users,
    title: "Seamless Team Integration",
    description: "Developers integrate seamlessly with your existing team, following your processes, tools, and workflows for maximum productivity.",
    stat: "Perfect Fit",
    highlights: ["Your Processes", "Your Tools", "Your Culture"]
  },
  {
    icon: Clock,
    title: "Flexible Engagement Models",
    description: "Choose from hourly, part-time, or full-time engagement. Scale up or down based on project needs without long-term commitments.",
    stat: "Zero Lock-in",
    highlights: ["Hourly", "Part-time", "Full-time"]
  },
  {
    icon: TrendingUp,
    title: "Continuous Growth & Learning",
    description: "Developers stay updated with latest technologies and best practices, bringing fresh perspectives and innovative solutions to your projects.",
    stat: "Always Current",
    highlights: ["Latest Tech", "Best Practices", "Innovation"]
  }
];

export default function DedicatedDevBenefits() {
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
    <section ref={sectionRef} className="relative bg-gradient-to-b from-[#0E0918] to-[#1a0f2b] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 min-h-screen items-start">
          <div ref={leftRef} className="lg:sticky lg:top-24 py-24">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full">
                <span className="text-sm font-medium text-gray-300">Why Hire Dedicated Developers</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                Benefits That <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">Transform Your Business</span>
              </h2>
              <p className="text-xl text-gray-400 leading-relaxed">
                Get access to world-class developers who work as an extension of your team, delivering exceptional results while reducing costs.
              </p>

              <div className="pt-8 space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 flex items-center justify-center">
                    <span className="text-green-400 font-bold text-lg">✓</span>
                  </div>
                  <span className="text-gray-300">Trusted by Fortune 500 companies</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 flex items-center justify-center">
                    <span className="text-blue-400 font-bold text-lg">✓</span>
                  </div>
                  <span className="text-gray-300">Start in 48 hours or less</span>
                </div>
              </div>
            </div>
          </div>

          <div ref={rightRef} className="py-24 space-y-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="benefit-panel">
                  <div className="group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20">
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-2xl flex items-center justify-center border border-blue-500/40 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-8 h-8 text-blue-400" strokeWidth={2} />
                      </div>
                      <div className="px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full">
                        <span className="text-sm font-semibold text-blue-300">{benefit.stat}</span>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
                      {benefit.title}
                    </h3>

                    <p className="text-gray-400 leading-relaxed mb-6">
                      {benefit.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {benefit.highlights.map((highlight, idx) => (
                        <span key={idx} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-400">
                          {highlight}
                        </span>
                      ))}
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/5 group-hover:to-cyan-500/5 rounded-3xl transition-all duration-300"></div>
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

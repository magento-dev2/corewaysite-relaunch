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

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>('.benefit-card');

      cards.forEach((card, index) => {
        gsap.from(card, {
          opacity: 0,
          y: 80,
          rotation: index % 2 === 0 ? -5 : 5,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "top 50%",
            scrub: 1,
          }
        });

        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            scale: 1.02,
            z: 50,
            duration: 0.3,
            ease: "power2.out"
          });
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            scale: 1,
            z: 0,
            duration: 0.3,
            ease: "power2.out"
          });
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-[#0E0918] to-[#1a0f2b] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.05),transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-6">
            <span className="text-sm font-medium text-gray-300">Why Hire Dedicated Developers</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Benefits That <span className="text-purple-500">Transform Your Business</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get access to world-class developers who work as an extension of your team
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="benefit-card">
                <div className="h-full group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500/30 to-violet-500/30 rounded-2xl flex items-center justify-center border border-purple-500/40 group-hover:rotate-12 transition-transform duration-300">
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
                    {benefit.highlights.map((highlight, idx) => (
                      <span key={idx} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-400">
                        {highlight}
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
    </section>
  );
}

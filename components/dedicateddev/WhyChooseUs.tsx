"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Award, Target, HeartHandshake, TrendingUp, Shield, Zap } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const reasons = [
  {
    icon: Award,
    title: "Vetted Talent Pool",
    description: "Only the top 1% of developers make it through our rigorous screening process. Every developer is thoroughly tested for technical skills and communication.",
    metric: "Top 1%"
  },
  {
    icon: Target,
    title: "Perfect Match Guarantee",
    description: "We match developers to your project based on technical requirements, timezone, and cultural fit. If not satisfied, we'll find you another developer.",
    metric: "100% Match"
  },
  {
    icon: HeartHandshake,
    title: "Seamless Onboarding",
    description: "Start working with your dedicated developer within 48 hours. We handle all HR, payroll, and administrative tasks so you can focus on building.",
    metric: "48 Hours"
  },
  {
    icon: Shield,
    title: "Risk-Free Trial",
    description: "Try before you commit. Start with a 2-week trial period to ensure the developer is the right fit for your team and project needs.",
    metric: "2 Week Trial"
  },
  {
    icon: TrendingUp,
    title: "Continuous Support",
    description: "Dedicated account manager ensures smooth collaboration. Regular check-ins, performance reviews, and ongoing support throughout the engagement.",
    metric: "24/7 Support"
  },
  {
    icon: Zap,
    title: "Agile & Flexible",
    description: "Scale your team up or down as needed. No long-term contracts or commitments. Adapt quickly to changing project requirements.",
    metric: "Zero Lock-in"
  }
];

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray<HTMLElement>('.reason-panel');

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
                <span className="text-sm font-medium text-gray-300">Why Choose Coreway</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                Your Success is <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-violet-500">Our Priority</span>
              </h2>
              <p className="text-xl text-gray-400 leading-relaxed">
                We go beyond just providing developers. We partner with you to ensure project success through quality, support, and flexibility.
              </p>

              <div className="pt-8">
                <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl p-6">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <Award className="w-4 h-4 text-purple-400" />
                      </div>
                      <span className="text-white font-semibold">ISO 27001 Certified</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                        <Shield className="w-4 h-4 text-purple-400" />
                      </div>
                      <span className="text-white font-semibold">GDPR Compliant</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div ref={rightRef} className="py-24 space-y-8">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <div key={index} className="reason-panel">
                  <div className="group bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20">
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-2xl flex items-center justify-center border border-blue-500/40 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-8 h-8 text-purple-400" strokeWidth={2} />
                      </div>
                      <div className="px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full">
                        <span className="text-sm font-semibold text-purple-300">{reason.metric}</span>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                      {reason.title}
                    </h3>

                    <p className="text-gray-400 leading-relaxed">
                      {reason.description}
                    </p>

                    <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
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

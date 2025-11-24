"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Clock, Sliders, Shield, TrendingUp } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const benefits = [
  {
    icon: Clock,
    title: "Time-Saving Efficiency",
    description: "Retrieve data instantly without the need for manual SQL expertise. Save hours of development time.",
    stat: "10x Faster"
  },
  {
    icon: Sliders,
    title: "Customizable Flexibility",
    description: "Match the solution to your unique operational needs with custom filters and workflows.",
    stat: "100% Tailored"
  },
  {
    icon: Shield,
    title: "Secure Integration",
    description: "Ensures complete data integrity and security with enterprise-grade protection standards.",
    stat: "Bank-Level Security"
  },
  {
    icon: TrendingUp,
    title: "Scalable Growth",
    description: "Adapts seamlessly to your growing data requirements without performance degradation.",
    stat: "Unlimited Scale"
  }
];

export default function DBDashbotBenefits() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.from(card, {
            opacity: 0,
            x: index % 2 === 0 ? -80 : 80,
            duration: 1,
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          });

          const icon = card.querySelector('.benefit-icon');
          gsap.to(icon, {
            rotation: 360,
            duration: 20,
            repeat: -1,
            ease: "none"
          });
        }
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
            <span className="text-sm font-medium text-gray-300">Key Benefits</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why Choose DBDashbot
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience unparalleled efficiency and flexibility in database querying
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                ref={(el) => { cardsRef.current[index] = el; }}
                className="group"
              >
                <div className="relative h-full bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20">
                  <div className="flex items-start justify-between mb-6">
                    <div className="benefit-icon w-16 h-16 bg-gradient-to-br from-purple-500/30 to-violet-500/30 rounded-2xl flex items-center justify-center border border-purple-500/40">
                      <Icon className="w-8 h-8 text-purple-400" strokeWidth={2} />
                    </div>
                    <div className="px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full">
                      <span className="text-sm font-semibold text-purple-300">{benefit.stat}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                    {benefit.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed">
                    {benefit.description}
                  </p>

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

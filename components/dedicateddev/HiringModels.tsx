"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Clock, CalendarDays, Users, Check } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const models = [
  {
    icon: Clock,
    name: "Hourly",
    price: "Starting at $25/hr",
    description: "Perfect for short-term projects or consulting needs. Pay only for the hours worked.",
    features: [
      "Flexible hours",
      "No minimum commitment",
      "Ideal for consultation",
      "Quick start"
    ],
    gradient: "from-purple-500 to-violet-500",
    popular: false
  },
  {
    icon: CalendarDays,
    name: "Part-Time",
    price: "4-6 hours/day",
    description: "Great for ongoing projects with moderate workload. Consistent availability at lower cost.",
    features: [
      "4-6 hours daily",
      "Cost-effective",
      "Predictable schedule",
      "Long-term projects"
    ],
    gradient: "from-cyan-500 to-blue-600",
    popular: true
  },
  {
    icon: Users,
    name: "Full-Time",
    price: "8 hours/day",
    description: "Best for large projects requiring dedicated focus. Developer works exclusively for you.",
    features: [
      "8 hours daily",
      "Full dedication",
      "Team integration",
      "Maximum productivity"
    ],
    gradient: "from-blue-600 to-cyan-600",
    popular: false
  }
];

export default function HiringModels() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>('.model-card');

      cards.forEach((card, index) => {
        gsap.from(card, {
          opacity: 0,
          y: 80,
          rotation: -5,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "top 50%",
            scrub: 1,
          }
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-[#1a0f2b] to-[#0E0918] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-6">
            <span className="text-sm font-medium text-gray-300">Flexible Engagement</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-violet-500">Hiring Model</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Scale your team up or down with flexible engagement models that fit your needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {models.map((model, index) => {
            const Icon = model.icon;
            return (
              <div key={index} className="model-card relative">
                {model.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="px-4 py-1 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full text-white text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className={`h-full bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border ${model.popular ? 'border-blue-500/50' : 'border-white/20'} rounded-3xl p-8 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-2`}>
                  <div className={`w-16 h-16 bg-gradient-to-br ${model.gradient} rounded-2xl flex items-center justify-center mb-6 opacity-80`}>
                    <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">
                    {model.name}
                  </h3>

                  <div className="text-3xl font-bold text-purple-400 mb-4">
                    {model.price}
                  </div>

                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {model.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {model.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <div className="w-5 h-5 rounded-full bg-blue-500/20 border border-blue-500/40 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-purple-400" strokeWidth={3} />
                        </div>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 rounded-lg font-medium transition-all ${
                    model.popular
                      ? 'bg-gradient-to-r from-purple-500 to-violet-600 text-white hover:from-blue-600 hover:to-cyan-700'
                      : 'bg-white/5 border border-white/10 text-white hover:bg-white/10'
                  }`}>
                    Get Started
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

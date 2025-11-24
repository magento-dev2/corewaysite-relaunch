"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DollarSign, Zap, Scale, Globe, Shield, TrendingUp } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const benefits = [
  {
    icon: DollarSign,
    title: "Cost Optimization",
    metric: "50% Savings",
    description: "Reduce storage costs with intelligent tiering, lifecycle policies, and compression."
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    metric: "3x Faster",
    description: "Accelerated transfer speeds and global CDN integration for instant delivery."
  },
  {
    icon: Scale,
    title: "Infinite Scalability",
    metric: "Unlimited",
    description: "Scale from gigabytes to petabytes without infrastructure changes."
  },
  {
    icon: Globe,
    title: "Global Availability",
    metric: "99.99%",
    description: "Multi-region replication and high availability across the globe."
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    metric: "Bank-Grade",
    description: "Military-grade encryption, access controls, and compliance certifications."
  },
  {
    icon: TrendingUp,
    title: "Easy Integration",
    metric: "Seamless",
    description: "Simple APIs and SDKs for quick integration with existing systems."
  }
];

export default function S3Benefits() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>('.benefit-card');

      cards.forEach((card, index) => {
        gsap.from(card, {
          opacity: 0,
          scale: 0.5,
          rotation: 180,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "top 50%",
            scrub: 1,
          }
        });

        card.addEventListener('mouseenter', () => {
          gsap.to(card.querySelector('.icon-wrapper'), {
            rotation: 360,
            scale: 1.2,
            duration: 0.5,
            ease: "back.out(1.7)"
          });
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(card.querySelector('.icon-wrapper'), {
            rotation: 0,
            scale: 1,
            duration: 0.5,
            ease: "back.out(1.7)"
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
            <span className="text-sm font-medium text-gray-300">Key Benefits</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Choose <span className="text-purple-500">S3 Storage</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Transform your storage infrastructure with proven benefits
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="benefit-card">
                <div className="h-full group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 text-center">
                  <div className="flex justify-center mb-6">
                    <div className="icon-wrapper w-20 h-20 bg-gradient-to-br from-purple-500/30 to-violet-500/30 rounded-full flex items-center justify-center border-4 border-purple-500/20">
                      <Icon className="w-10 h-10 text-purple-400" strokeWidth={2} />
                    </div>
                  </div>

                  <div className="inline-block px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full mb-4">
                    <span className="text-sm font-bold text-purple-300">{benefit.metric}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {benefit.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed">
                    {benefit.description}
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

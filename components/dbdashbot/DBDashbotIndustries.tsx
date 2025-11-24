"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShoppingCart, BarChart3, Banknote, GraduationCap, Building2, Package } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const industries = [
  {
    icon: ShoppingCart,
    title: "Retail",
    description: "Analyze sales trends, inventory levels, and customer purchase patterns in real-time.",
    useCase: "Track product performance and optimize stock"
  },
  {
    icon: BarChart3,
    title: "Business Analysts",
    description: "Gather deep insights without SQL expertise. Make data-driven decisions faster.",
    useCase: "Generate reports and dashboards instantly"
  },
  {
    icon: Banknote,
    title: "Finance",
    description: "Extract insights from transaction data, financial reports, and accounting records.",
    useCase: "Monitor transactions and financial health"
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "Retrieve student data, research information, and academic performance metrics.",
    useCase: "Analyze student performance and research data"
  },
  {
    icon: Building2,
    title: "Corporate",
    description: "Streamline operational reporting, HR analytics, and business intelligence.",
    useCase: "Enterprise reporting and analytics"
  },
  {
    icon: Package,
    title: "Ecommerce",
    description: "Analyze customer behavior, order patterns, and conversion metrics effortlessly.",
    useCase: "Customer insights and sales optimization"
  }
];

export default function DBDashbotIndustries() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.from(card, {
            opacity: 0,
            scale: 0.8,
            rotation: -10,
            duration: 0.8,
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          });

          gsap.to(card, {
            y: -15,
            duration: 2 + (index * 0.2),
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: index * 0.2
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-[#0E0918] to-[#1a0f2b] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.08),transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-6">
            <span className="text-sm font-medium text-gray-300">Industry Applications</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Built for Every Industry
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From retail to finance, DBDashbot adapts to your industry-specific needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div
                key={index}
                ref={(el) => { cardsRef.current[index] = el; }}
                className="group"
              >
                <div className="relative h-full bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 transition-all duration-500 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/20">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-violet-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-purple-500/30">
                    <Icon className="w-8 h-8 text-purple-400 group-hover:text-purple-300 transition-colors" strokeWidth={1.5} />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                    {industry.title}
                  </h3>

                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {industry.description}
                  </p>

                  <div className="pt-4 border-t border-white/10">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-sm text-gray-500">{industry.useCase}</span>
                    </div>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

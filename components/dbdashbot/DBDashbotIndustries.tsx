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
    description: "Analyze sales trends, inventory levels, and customer purchase patterns in real-time without SQL knowledge.",
    useCase: "Track product performance and optimize stock",
    metrics: ["Sales Analytics", "Inventory Tracking", "Customer Insights"]
  },
  {
    icon: BarChart3,
    title: "Business Analysts",
    description: "Gather deep insights without SQL expertise. Make data-driven decisions faster with natural language queries.",
    useCase: "Generate reports and dashboards instantly",
    metrics: ["Quick Reports", "Data Insights", "Trend Analysis"]
  },
  {
    icon: Banknote,
    title: "Finance",
    description: "Extract insights from transaction data, financial reports, and accounting records with precision and speed.",
    useCase: "Monitor transactions and financial health",
    metrics: ["Transaction Data", "Financial Reports", "Compliance Ready"]
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "Retrieve student data, research information, and academic performance metrics instantly and accurately.",
    useCase: "Analyze student performance and research data",
    metrics: ["Student Records", "Performance Data", "Research Analytics"]
  },
  {
    icon: Building2,
    title: "Corporate",
    description: "Streamline operational reporting, HR analytics, and business intelligence across your organization.",
    useCase: "Enterprise reporting and analytics",
    metrics: ["HR Analytics", "Operations", "BI Reports"]
  },
  {
    icon: Package,
    title: "Ecommerce",
    description: "Analyze customer behavior, order patterns, and conversion metrics effortlessly to boost your online business.",
    useCase: "Customer insights and sales optimization",
    metrics: ["Customer Behavior", "Order Analytics", "Conversion Rates"]
  }
];

export default function DBDashbotIndustries() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray<HTMLElement>('.industry-panel');

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
                <span className="text-sm font-medium text-gray-300">Industry Applications</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                Built for <span className="text-purple-500">Every Industry</span>
              </h2>
              <p className="text-xl text-gray-400 leading-relaxed">
                From retail to finance, DBDashbot adapts to your industry-specific needs with powerful AI-driven insights.
              </p>

              <div className="pt-8">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Industries Served</span>
                      <span className="text-2xl font-bold text-white">50+</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Active Users</span>
                      <span className="text-2xl font-bold text-white">10K+</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Queries Processed</span>
                      <span className="text-2xl font-bold text-white">1M+</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div ref={rightRef} className="py-24 space-y-8">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <div key={index} className="industry-panel">
                  <div className="group bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20">
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-violet-500/20 rounded-2xl flex items-center justify-center border border-purple-500/30 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-8 h-8 text-purple-400 group-hover:text-purple-300 transition-colors" strokeWidth={1.5} />
                      </div>
                      <div className="text-right">
                        <span className="text-3xl font-bold text-white/10">0{index + 1}</span>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                      {industry.title}
                    </h3>

                    <p className="text-gray-400 mb-4 leading-relaxed">
                      {industry.description}
                    </p>

                    <div className="mb-6 pt-4 border-t border-white/10">
                      <div className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-gray-500">{industry.useCase}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {industry.metrics.map((metric, idx) => (
                        <span key={idx} className="px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-xs text-purple-300">
                          {metric}
                        </span>
                      ))}
                    </div>

                    <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
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

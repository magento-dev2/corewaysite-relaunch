"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check, Shield, Layers, AlertTriangle } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface Tool {
  name: string;
  type: string;
  method: string;
  features: string[];
  bestFor: string;
  protection: string;
}

interface SecurityToolsComparisonProps {
  title: string;
  subtitle: string;
  tools: Tool[];
}

export default function SecurityToolsComparison({
  title,
  subtitle,
  tools,
}: SecurityToolsComparisonProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        gridRef.current?.children || [],
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.15,
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 75%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const colors = [
    { bg: "from-red-500/10", border: "border-red-500/20", text: "text-red-400", badge: "bg-red-500/20 border-red-500/30", icon: Shield },
    { bg: "from-blue-500/10", border: "border-blue-500/20", text: "text-blue-400", badge: "bg-blue-500/20 border-blue-500/30", icon: AlertTriangle },
    { bg: "from-purple-500/10", border: "border-purple-500/20", text: "text-purple-400", badge: "bg-purple-500/20 border-purple-500/30", icon: Layers },
    { bg: "from-green-500/10", border: "border-green-500/20", text: "text-green-400", badge: "bg-green-500/20 border-green-500/30", icon: Shield },
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-[#0E0918] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8b5cf620_2px,transparent_2px),linear-gradient(to_bottom,#8b5cf620_2px,transparent_2px)] bg-[size:3rem_3rem]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-300">{subtitle}</p>
        </div>

        <div ref={gridRef} className="grid md:grid-cols-2 gap-6">
          {tools.map((tool, index) => {
            const color = colors[index % colors.length];
            const IconComponent = color.icon;

            return (
              <div
                key={tool.name}
                className={`group relative bg-gradient-to-br ${color.bg} to-transparent border ${color.border} rounded-2xl p-8 hover:border-opacity-60 transition-all`}
              >
                <div className="absolute top-0 right-0 w-32 h-32 ${color.bg} rounded-full blur-3xl opacity-0 group-hover:opacity-50 transition-opacity -mr-16 -mt-16"></div>

                <div className="relative mb-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-14 h-14 ${color.badge} border rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <IconComponent className={`w-7 h-7 ${color.text}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {tool.name}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        <span className={`px-3 py-1 ${color.badge} border rounded-lg text-xs ${color.text}`}>
                          {tool.type}
                        </span>
                        <span className={`px-3 py-1 ${color.badge} border rounded-lg text-xs ${color.text}`}>
                          {tool.method}
                        </span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2.5 mb-6">
                    {tool.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className={`w-4 h-4 ${color.text} flex-shrink-0 mt-0.5`} />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="space-y-2">
                    <div className={`px-4 py-2.5 ${color.badge} border rounded-xl`}>
                      <p className="text-xs text-gray-400 mb-1">Protection Layer:</p>
                      <p className={`text-sm font-semibold ${color.text}`}>{tool.protection}</p>
                    </div>
                    <div className={`px-4 py-2.5 ${color.badge} border rounded-xl`}>
                      <p className="text-xs text-gray-400 mb-1">Best For:</p>
                      <p className="text-sm text-white">{tool.bestFor}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 p-8 bg-gradient-to-r from-purple-500/10 to-violet-500/10 border border-purple-500/20 rounded-2xl">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <Shield className="w-6 h-6 text-purple-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">
                Recommended: Defense in Depth Strategy
              </h3>
              <p className="text-gray-300 mb-4">
                Use all three tools together for maximum protection. UFW blocks unauthorized network access,
                Fail2Ban stops brute-force attempts, and CrowdSec detects advanced threats with community intelligence.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-purple-500/20 border border-purple-500/30 rounded-xl text-purple-300 hover:bg-purple-500/30 transition-colors"
              >
                <span className="font-semibold">Get Complete Security Setup</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check, Activity, Zap, Clock } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface Protocol {
  name: string;
  type: string;
  overhead: string;
  features: string[];
  bestFor: string;
  latency: string;
}

interface ProtocolComparisonProps {
  title: string;
  subtitle: string;
  protocols: Protocol[];
}

export default function ProtocolComparison({
  title,
  subtitle,
  protocols,
}: ProtocolComparisonProps) {
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
    { bg: "from-cyan-500/10", border: "border-cyan-500/20", text: "text-cyan-400", badge: "bg-cyan-500/20 border-cyan-500/30", icon: "text-cyan-400" },
    { bg: "from-emerald-500/10", border: "border-emerald-500/20", text: "text-emerald-400", badge: "bg-emerald-500/20 border-emerald-500/30", icon: "text-emerald-400" },
    { bg: "from-violet-500/10", border: "border-violet-500/20", text: "text-violet-400", badge: "bg-violet-500/20 border-violet-500/30", icon: "text-violet-400" },
    { bg: "from-amber-500/10", border: "border-amber-500/20", text: "text-amber-400", badge: "bg-amber-500/20 border-amber-500/30", icon: "text-amber-400" },
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-[#1a1325] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-300">{subtitle}</p>
        </div>

        <div ref={gridRef} className="grid md:grid-cols-2 gap-6">
          {protocols.map((protocol, index) => {
            const color = colors[index % colors.length];
            return (
              <div
                key={protocol.name}
                className={`group relative bg-gradient-to-br ${color.bg} to-transparent border ${color.border} rounded-2xl p-8 hover:border-opacity-60 transition-all`}
              >
                <div className="mb-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {protocol.name}
                      </h3>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 ${color.badge} border rounded-lg text-xs ${color.text}`}>
                          <Activity className={`w-3 h-3 ${color.icon}`} />
                          {protocol.type}
                        </span>
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 ${color.badge} border rounded-lg text-xs ${color.text}`}>
                          <Zap className={`w-3 h-3 ${color.icon}`} />
                          {protocol.overhead}
                        </span>
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 ${color.badge} border rounded-lg text-xs ${color.text}`}>
                          <Clock className={`w-3 h-3 ${color.icon}`} />
                          {protocol.latency}
                        </span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2.5 mb-6">
                    {protocol.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className={`w-4 h-4 ${color.text} flex-shrink-0 mt-0.5`} />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className={`px-4 py-3 ${color.badge} border rounded-xl`}>
                    <p className="text-xs text-gray-400 mb-1">Best For:</p>
                    <p className="text-sm text-white">{protocol.bestFor}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3">
            <span className="text-gray-300">Need help choosing a protocol?</span>
            <a href="#contact" className="text-purple-400 font-semibold hover:text-purple-300 transition-colors">
              Consult our experts
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

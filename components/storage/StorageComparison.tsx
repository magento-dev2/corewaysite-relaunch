"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check, DollarSign, Cloud } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface Provider {
  name: string;
  pricing: string;
  egress: string;
  features: string[];
  bestFor: string;
}

interface StorageComparisonProps {
  title: string;
  subtitle: string;
  providers: Provider[];
}

export default function StorageComparison({
  title,
  subtitle,
  providers,
}: StorageComparisonProps) {
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
    { bg: "from-orange-500/10", border: "border-orange-500/20", text: "text-orange-400", accent: "bg-orange-500/20 border-orange-500/30" },
    { bg: "from-blue-500/10", border: "border-blue-500/20", text: "text-blue-400", accent: "bg-blue-500/20 border-blue-500/30" },
    { bg: "from-red-500/10", border: "border-red-500/20", text: "text-red-400", accent: "bg-red-500/20 border-red-500/30" },
    { bg: "from-yellow-500/10", border: "border-yellow-500/20", text: "text-yellow-400", accent: "bg-yellow-500/20 border-yellow-500/30" },
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-[#1a1325] relative" id="comparison">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-300">{subtitle}</p>
        </div>

        <div ref={gridRef} className="grid md:grid-cols-2 gap-6">
          {providers.map((provider, index) => {
            const color = colors[index % colors.length];
            return (
              <div
                key={provider.name}
                className={`group relative bg-gradient-to-br ${color.bg} to-transparent border ${color.border} rounded-2xl p-8 hover:border-opacity-60 transition-all`}
              >
                <div className="mb-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {provider.name}
                      </h3>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <DollarSign className={`w-4 h-4 ${color.text}`} />
                          <span className="text-sm text-gray-400">
                            Storage: <span className={color.text}>{provider.pricing}</span>
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Cloud className={`w-4 h-4 ${color.text}`} />
                          <span className="text-sm text-gray-400">
                            Egress: <span className={color.text}>{provider.egress}</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2.5 mb-6">
                    {provider.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className={`w-4 h-4 ${color.text} flex-shrink-0 mt-0.5`} />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className={`px-4 py-3 ${color.accent} border rounded-xl`}>
                    <p className="text-xs text-gray-400 mb-1">Best For:</p>
                    <p className="text-sm text-white">{provider.bestFor}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3">
            <span className="text-gray-300">Need help choosing?</span>
            <a href="#contact" className="text-purple-400 font-semibold hover:text-purple-300 transition-colors">
              Talk to our experts
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

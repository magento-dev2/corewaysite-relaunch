"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check, Database } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface ComparisonData {
  name: string;
  description: string;
  features: string[];
  useCases: string[];
}

interface DatabaseComparisonProps {
  title: string;
  subtitle: string;
  postgresql: ComparisonData;
  mongodb: ComparisonData;
}

export default function DatabaseComparison({
  title,
  subtitle,
  postgresql,
  mongodb,
}: DatabaseComparisonProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current?.children || [],
        { opacity: 0, y: 60, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 75%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

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

        <div ref={cardsRef} className="grid lg:grid-cols-2 gap-8">
          <div className="group relative bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/20 rounded-3xl p-8 hover:border-blue-500/40 transition-all">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity -mr-32 -mt-32"></div>

            <div className="relative">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center">
                  <Database className="w-8 h-8 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white">
                    {postgresql.name}
                  </h3>
                  <p className="text-blue-400">{postgresql.description}</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-bold text-white mb-4">
                    Key Features
                  </h4>
                  <ul className="space-y-3">
                    {postgresql.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-white mb-4">
                    Best For
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {postgresql.useCases.map((useCase, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 bg-blue-500/20 border border-blue-500/30 rounded-lg text-sm text-blue-300"
                      >
                        {useCase}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="group relative bg-gradient-to-br from-green-500/10 to-transparent border border-green-500/20 rounded-3xl p-8 hover:border-green-500/40 transition-all">
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity -mr-32 -mt-32"></div>

            <div className="relative">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center">
                  <Database className="w-8 h-8 text-green-400" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white">
                    {mongodb.name}
                  </h3>
                  <p className="text-green-400">{mongodb.description}</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-bold text-white mb-4">
                    Key Features
                  </h4>
                  <ul className="space-y-3">
                    {mongodb.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-white mb-4">
                    Best For
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {mongodb.useCases.map((useCase, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 bg-green-500/20 border border-green-500/30 rounded-lg text-sm text-green-300"
                      >
                        {useCase}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Cpu, Zap } from 'lucide-react';

interface CaseStudy {
  id: string;
  title: string;
  image: string;
  description: string;
  before?: string;
  after?: string;
}

interface UseCasesProps {
  title: string;
  cases: CaseStudy[];
}

export default function UseCases({ title, cases }: UseCasesProps) {
  const [visibleCases, setVisibleCases] = useState<string[]>([]);
  const [activeCase, setActiveCase] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          cases.forEach((caseStudy, index) => {
            setTimeout(() => {
              setVisibleCases((prev) => [...prev, caseStudy.id]);
            }, index * 250);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [cases]);

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-[#1a1325] to-[#0E0918]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-purple-500/10 backdrop-blur-sm border border-purple-500/20 rounded-full px-4 py-2 mb-6">
            <Cpu className="text-purple-500" size={16} />
            <span className="text-purple-300 text-sm font-medium">Business Transformation</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Practical AI Agent implementations solving real-world business challenges
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((caseStudy, index) => {
            const isVisible = visibleCases.includes(caseStudy.id);
            const isActive = activeCase === caseStudy.id;

            return (
              <article
                key={caseStudy.id}
                onMouseEnter={() => setActiveCase(caseStudy.id)}
                onMouseLeave={() => setActiveCase(null)}
                className={`relative group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                  } ${isActive
                    ? 'border-purple-500/50 scale-105 shadow-2xl shadow-purple-500/20'
                    : 'hover:border-purple-500/30'
                  }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="relative h-52 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br from-purple-500/20 to-violet-500/20 transition-opacity duration-500 z-10 ${isActive ? 'opacity-100' : 'opacity-0'
                    }`}></div>
                  <img
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    className={`w-full h-full object-cover transition-transform duration-700 ${isActive ? 'scale-110' : 'group-hover:scale-110'
                      }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E0918] via-[#0E0918]/50 to-transparent"></div>
                </div>

                <div className="p-6 relative">
                  <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 ${isActive ? 'text-purple-300' : 'text-white'
                    }`}>
                    {caseStudy.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {caseStudy.description}
                  </p>

                  {(caseStudy.before || caseStudy.after) && (
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {caseStudy.before && (
                        <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3">
                          <div className="text-[10px] uppercase tracking-wider text-red-400 font-bold mb-1">Before</div>
                          <div className="text-xs text-gray-400 font-mono">{caseStudy.before}</div>
                        </div>
                      )}
                      {caseStudy.after && (
                        <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3">
                          <div className="text-[10px] uppercase tracking-wider text-green-400 font-bold mb-1">After</div>
                          <div className="text-xs text-green-300 font-mono flex items-center gap-1">
                            <Zap size={10} />
                            {caseStudy.after}
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  <button className={`flex items-center space-x-2 transition-all duration-300 group/btn ${isActive ? 'text-purple-300' : 'text-purple-400 hover:text-purple-300'
                    }`}>
                    <span className="text-sm font-medium">Explore Solution</span>
                    <ArrowRight size={16} className={`transition-transform ${isActive ? 'translate-x-2' : 'group-hover/btn:translate-x-1'
                      }`} />
                  </button>

                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-violet-600"></div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

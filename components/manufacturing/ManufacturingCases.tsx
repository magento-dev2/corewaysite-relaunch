import { useEffect, useRef, useState } from 'react';
import { TrendingDown, TrendingUp, DollarSign } from 'lucide-react';

interface CaseStudy {
  id: string;
  company: string;
  challenge: string;
  solution: string;
  results: {
    downtime?: string;
    efficiency?: string;
    savings?: string;
    defects?: string;
    compliance?: string;
    waste?: string;
    costs?: string;
  };
}

interface ManufacturingCasesProps {
  title: string;
  items: CaseStudy[];
}

export default function ManufacturingCases({ title, items }: ManufacturingCasesProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getResultIcon = (key: string) => {
    if (key.includes('downtime') || key.includes('defects') || key.includes('waste') || key.includes('costs')) {
      return <TrendingDown className="text-purple-400" size={16} />;
    }
    if (key.includes('efficiency') || key.includes('compliance')) {
      return <TrendingUp className="text-purple-400" size={16} />;
    }
    return <DollarSign className="text-purple-400" size={16} />;
  };

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-[#0E0918] to-[#1a1325] relative"
      id="cases"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold text-white mb-4 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {title}
          </h2>
          <p className={`text-lg text-gray-300 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Real factories, real improvements, real ROI
          </p>
        </div>

        <div className="space-y-6">
          {items.map((item, index) => {
            const isExpanded = expandedId === item.id;

            return (
              <article
                key={item.id}
                onClick={() => setExpandedId(isExpanded ? null : item.id)}
                className={`relative group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 transition-all duration-700 cursor-pointer hover:border-purple-500/50 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
                } ${
                  isExpanded ? 'bg-gradient-to-br from-purple-500/10 to-violet-500/10 border-purple-500/50 shadow-2xl shadow-purple-500/20' : ''
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">{item.company}</h3>

                    <div className="mb-4">
                      <div className="text-sm font-semibold text-purple-400 mb-2">Challenge:</div>
                      <p className="text-gray-300">{item.challenge}</p>
                    </div>

                    {isExpanded && (
                      <div className="mb-4 animate-fadeIn">
                        <div className="text-sm font-semibold text-purple-400 mb-2">Solution:</div>
                        <p className="text-gray-300">{item.solution}</p>
                      </div>
                    )}
                  </div>

                  <div className={`grid ${Object.keys(item.results).length === 3 ? 'grid-cols-3' : 'grid-cols-2'} gap-4 lg:w-auto w-full`}>
                    {Object.entries(item.results).map(([key, value]) => (
                      <div
                        key={key}
                        className="bg-white/5 rounded-lg p-4 border border-purple-500/20 hover:border-purple-500/50 transition-colors text-center"
                      >
                        <div className="flex items-center justify-center mb-2">
                          {getResultIcon(key)}
                        </div>
                        <div className="text-2xl font-bold text-purple-400 mb-1 font-mono">{value}</div>
                        <div className="text-xs text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {isExpanded && (
                  <>
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-violet-600 to-purple-500 rounded-b-2xl"></div>
                    <div className="absolute top-4 right-4 text-purple-400 text-sm">Click to collapse</div>
                  </>
                )}
                {!isExpanded && (
                  <div className="absolute top-4 right-4 text-gray-500 text-sm">Click for details</div>
                )}
              </article>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
}

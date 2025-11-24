import { useEffect, useRef, useState } from 'react';
import { Workflow, Database, Radio, Shield, TrendingUp, Zap } from 'lucide-react';

interface Feature {
  id: string;
  title: string;
  desc: string;
}

interface DatasetFeaturesProps {
  title: string;
  items: Feature[];
}

const iconMap: Record<string, any> = {
  'pipeline': Workflow,
  'lakes': Database,
  'streaming': Radio,
  'governance': Shield,
  'analytics': TrendingUp,
  'delivery': Zap,
};

export default function DatasetFeatures({ title, items }: DatasetFeaturesProps) {
  const [visibleItems, setVisibleItems] = useState<string[]>([]);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          items.forEach((item, index) => {
            setTimeout(() => {
              setVisibleItems((prev) => [...prev, item.id]);
            }, index * 120);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [items]);

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-[#1a1325] to-[#0E0918] relative"
      id="features"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute font-mono text-purple-500/20 text-xs animate-data-stream"
              style={{
                left: `${5 + (i % 10) * 10}%`,
                animationDelay: `${i * 0.2}s`,
                animationDuration: '5s'
              }}
            >
              {['SELECT', 'INSERT', 'UPDATE', 'DELETE', 'WHERE', 'FROM', 'JOIN'][Math.floor(Math.random() * 7)]}
            </div>
          ))}
        </div>
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto font-mono text-sm">
            {'>'} End-to-end data management from ingestion to insights
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => {
            const Icon = iconMap[item.id] || Database;
            const isVisible = visibleItems.includes(item.id);
            const isHovered = hoveredId === item.id;

            return (
              <article
                key={item.id}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`relative group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 transition-all duration-700 ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                } ${
                  isHovered
                    ? 'bg-gradient-to-br from-purple-500/15 to-violet-500/15 border-purple-500/50 -translate-y-3 shadow-2xl shadow-purple-500/30'
                    : 'hover:border-purple-500/30 hover:-translate-y-2'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {isHovered && (
                  <>
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/10 to-violet-500/10 animate-pulse"></div>
                    <div className="absolute inset-0 rounded-2xl overflow-hidden">
                      <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-1 p-2">
                        {[...Array(16)].map((_, i) => (
                          <div
                            key={i}
                            className="bg-purple-500/20 rounded animate-data-block"
                            style={{ animationDelay: `${i * 0.05}s` }}
                          />
                        ))}
                      </div>
                    </div>
                  </>
                )}

                <div className={`relative w-14 h-14 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl flex items-center justify-center mb-6 transition-all duration-500 ${
                  isHovered ? 'scale-110 rotate-6 shadow-lg shadow-purple-500/50' : 'group-hover:scale-105'
                }`}>
                  <Icon className="text-white" size={28} />
                </div>

                <h3 className={`relative text-xl font-bold mb-3 transition-colors duration-300 ${
                  isHovered ? 'text-purple-300' : 'text-white'
                }`}>
                  {item.title}
                </h3>
                <p className="relative text-gray-300 leading-relaxed">
                  {item.desc}
                </p>

                {isHovered && (
                  <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/20 rounded-full blur-2xl -z-10"></div>
                )}
              </article>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes data-stream {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }
          10% {
            opacity: 0.5;
          }
          90% {
            opacity: 0.5;
          }
          100% {
            transform: translateY(100vh);
            opacity: 0;
          }
        }
        .animate-data-stream {
          animation: data-stream linear infinite;
        }
        @keyframes data-block {
          0%, 100% {
            opacity: 0.2;
            transform: scale(0.9);
          }
          50% {
            opacity: 0.6;
            transform: scale(1);
          }
        }
        .animate-data-block {
          animation: data-block 1.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}

import { useEffect, useRef, useState } from 'react';
import { Activity, Wrench, Zap, Eye, Battery, Link } from 'lucide-react';

interface Feature {
  id: string;
  title: string;
  desc: string;
}

interface ManufacturingFeaturesProps {
  title: string;
  items: Feature[];
}

const iconMap: Record<string, any> = {
  monitoring: Activity,
  predictive: Wrench,
  automation: Zap,
  quality: Eye,
  energy: Battery,
  supply: Link,
};

export default function ManufacturingFeatures({ title, items }: ManufacturingFeaturesProps) {
  const [visibleItems, setVisibleItems] = useState<string[]>([]);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [pulseIndex, setPulseIndex] = useState(0);
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

  useEffect(() => {
    const interval = setInterval(() => {
      setPulseIndex(prev => (prev + 1) % items.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-[#1a1325] to-[#0E0918] relative"
      id="features"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-signal-wave"
              style={{
                left: `${10 + (i % 10) * 10}%`,
                top: `${20 + Math.floor(i / 10) * 30}%`,
                animationDelay: `${i * 0.2}s`
              }}
            >
              <div className="relative">
                <div className="w-2 h-2 bg-purple-500/40 rounded-full" />
                <div className="absolute inset-0 w-2 h-2 bg-purple-500/60 rounded-full animate-ping" />
              </div>
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
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Comprehensive IoT solutions for modern manufacturing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => {
            const Icon = iconMap[item.id] || Activity;
            const isVisible = visibleItems.includes(item.id);
            const isHovered = hoveredId === item.id;
            const isPulsing = pulseIndex === index;

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
                } ${
                  isPulsing && !isHovered ? 'border-purple-500/40' : ''
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {isHovered && (
                  <>
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/10 to-violet-500/10 animate-pulse"></div>
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-2 h-2 bg-purple-500 rounded-full animate-sensor-blink"
                        style={{
                          top: `${25 + i * 20}%`,
                          right: '10px',
                          animationDelay: `${i * 0.2}s`
                        }}
                      />
                    ))}
                  </>
                )}

                <div className={`relative w-14 h-14 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl flex items-center justify-center mb-6 transition-all duration-500 ${
                  isHovered ? 'scale-110 rotate-6 shadow-lg shadow-purple-500/50' : isPulsing ? 'scale-105' : 'group-hover:scale-105'
                }`}>
                  <Icon className="text-white" size={28} />
                  {isPulsing && !isHovered && (
                    <div className="absolute inset-0 rounded-xl border-2 border-purple-500 animate-ping" />
                  )}
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
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-violet-600 to-purple-500 rounded-b-2xl"></div>
                )}
              </article>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes signal-wave {
          0%, 100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.5);
          }
        }
        .animate-signal-wave {
          animation: signal-wave 3s ease-in-out infinite;
        }
        @keyframes sensor-blink {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 1;
          }
        }
        .animate-sensor-blink {
          animation: sensor-blink 1s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}

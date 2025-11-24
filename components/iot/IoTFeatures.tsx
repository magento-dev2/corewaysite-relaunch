import { useEffect, useRef, useState } from 'react';
import { Wifi, Activity, Cpu, BarChart3, Shield, Link2 } from 'lucide-react';

interface Feature {
  id: string;
  title: string;
  desc: string;
}

interface IoTFeaturesProps {
  title: string;
  items: Feature[];
}

const iconMap: Record<string, any> = {
  device: Wifi,
  realtime: Activity,
  edge: Cpu,
  analytics: BarChart3,
  security: Shield,
  integration: Link2,
};

export default function IoTFeatures({ title, items }: IoTFeaturesProps) {
  const [visibleItems, setVisibleItems] = useState<string[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          items.forEach((item, index) => {
            setTimeout(() => {
              setVisibleItems((prev) => [...prev, item.id]);
            }, index * 150);
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
      className="py-24 bg-gradient-to-b from-[#1a1325] to-[#0E0918] relative overflow-hidden"
      id="features"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Comprehensive IoT solutions from edge to cloud
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => {
            const Icon = iconMap[item.id] || Wifi;
            const isVisible = visibleItems.includes(item.id);
            const isActive = activeIndex === index;

            return (
              <article
                key={item.id}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
                className={`group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 transition-all duration-500 cursor-pointer ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                } ${
                  isActive
                    ? 'bg-gradient-to-br from-purple-500/10 to-violet-500/10 border-purple-500/50 scale-105 -translate-y-2 shadow-xl shadow-purple-500/20'
                    : 'hover:bg-white/10 hover:border-purple-500/50 hover:scale-105 hover:-translate-y-2'
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                  animation: isVisible ? 'slideInFromSide 0.8s ease-out forwards' : 'none',
                  animationDelay: `${index * 150}ms`
                }}
              >
                <div className={`w-14 h-14 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl flex items-center justify-center mb-6 transition-all duration-500 ${
                  isActive ? 'scale-125 rotate-12 shadow-lg shadow-purple-500/50' : 'group-hover:scale-110'
                }`}>
                  <Icon className="text-white" size={28} />
                </div>

                <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 ${
                  isActive ? 'text-purple-400' : 'text-white group-hover:text-purple-400'
                }`}>
                  {item.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {item.desc}
                </p>

                {isActive && (
                  <>
                    <div className="absolute top-0 right-0 w-20 h-20 bg-purple-500/10 rounded-full blur-2xl"></div>
                    <div className="absolute bottom-0 left-0 w-20 h-20 bg-violet-500/10 rounded-full blur-2xl"></div>
                  </>
                )}

                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/0 to-violet-500/0 group-hover:from-purple-500/5 group-hover:to-violet-500/5 transition-all duration-500 pointer-events-none"></div>
              </article>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes slideInFromSide {
          0% {
            opacity: 0;
            transform: translateX(-50px) translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateX(0) translateY(0);
          }
        }
      `}</style>
    </section>
  );
}

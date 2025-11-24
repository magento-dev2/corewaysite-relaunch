import { useEffect, useRef, useState } from 'react';
import { Code, PieChart, BarChart3, TrendingUp, Layout, Layers } from 'lucide-react';

interface Platform {
  name: string;
  id: string;
}

interface DashboardTechnologiesProps {
  title: string;
  description: string;
  items: Platform[];
}

const platformIcons: Record<string, any> = {
  'react': Code,
  'd3js': PieChart,
  'tableau': BarChart3,
  'powerbi': TrendingUp,
  'grafana': Layout,
  'superset': Layers,
};

export default function DashboardTechnologies({ title, description, items }: DashboardTechnologiesProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
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

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % items.length);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [isVisible, items.length]);

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-[#0E0918] to-[#1a1325]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {items.map((platform, index) => {
            const Icon = platformIcons[platform.id] || Code;
            const isActive = activeIndex === index;

            return (
              <div
                key={platform.id}
                className={`group relative flex flex-col items-center justify-center p-8 bg-white/5 backdrop-blur-sm border rounded-2xl transition-all duration-700 cursor-pointer ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                } ${
                  isActive
                    ? 'border-purple-500 bg-gradient-to-br from-purple-500/20 to-violet-500/20 scale-110 shadow-xl shadow-purple-500/30'
                    : 'border-white/10 hover:border-purple-500/50 hover:bg-white/10 hover:scale-105'
                }`}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <Icon
                  className={`transition-all duration-500 mb-3 ${
                    isActive
                      ? 'text-purple-400 scale-125'
                      : 'text-gray-400 group-hover:text-purple-500'
                  }`}
                  size={48}
                />
                <span className={`text-sm font-medium text-center transition-colors ${
                  isActive
                    ? 'text-white'
                    : 'text-gray-300 group-hover:text-white'
                }`}>
                  {platform.name}
                </span>

                {isActive && (
                  <>
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/20 to-violet-500/20 animate-pulse"></div>
                    <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-purple-500/30 to-violet-500/30 blur-xl -z-10"></div>
                  </>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center gap-2">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? 'w-8 bg-purple-500'
                  : 'w-2 bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Technology ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

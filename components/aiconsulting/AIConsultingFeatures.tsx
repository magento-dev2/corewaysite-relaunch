import { useEffect, useRef, useState } from 'react';
import { Lightbulb, Brain, MessageSquare, Eye, BarChart3, Cpu } from 'lucide-react';

interface Feature {
  id: string;
  title: string;
  desc: string;
}

interface AIConsultingFeaturesProps {
  title: string;
  items: Feature[];
}

const iconMap: Record<string, any> = {
  strategy: Lightbulb,
  'ml-models': Brain,
  nlp: MessageSquare,
  'computer-vision': Eye,
  'data-science': BarChart3,
  'ai-ops': Cpu,
};

export default function AIConsultingFeatures({ title, items }: AIConsultingFeaturesProps) {
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
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-purple-500/30 animate-pulse"
            style={{
              top: `${20 + i * 30}%`,
              left: `${10 + i * 25}%`,
              width: `${100 + i * 50}px`,
              height: `${100 + i * 50}px`,
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${3 + i}s`
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Comprehensive AI solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => {
            const Icon = iconMap[item.id] || Brain;
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
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/10 to-violet-500/10 animate-pulse"></div>
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
    </section>
  );
}

import { useEffect, useRef, useState } from 'react';
import { Brain, Trophy, RefreshCw, Headphones, Rocket, Eye } from 'lucide-react';

interface Advantage {
  id: string;
  title: string;
  desc: string;
  icon: string;
}

interface WhyAdvantagesProps {
  title: string;
  items: Advantage[];
}

const iconMap: Record<string, any> = {
  brain: Brain,
  trophy: Trophy,
  refresh: RefreshCw,
  headphones: Headphones,
  rocket: Rocket,
  eye: Eye,
};

export default function WhyAdvantages({ title, items }: WhyAdvantagesProps) {
  const [visibleItems, setVisibleItems] = useState<string[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          items.forEach((item, index) => {
            setTimeout(() => {
              setVisibleItems((prev) => [...prev, item.id]);
            }, index * 100);
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
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-[#0E0918] to-[#1a1325] relative overflow-hidden"
      id="advantages"
    >
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-advantage-pulse"
            style={{
              left: `${10 + (i % 5) * 20}%`,
              top: `${10 + Math.floor(i / 5) * 30}%`,
              animationDelay: `${i * 0.3}s`
            }}
          >
            <div className="w-16 h-16 border-2 border-purple-500/20 rounded-full" />
          </div>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-300">
            What sets us apart from the competition
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => {
            const Icon = iconMap[item.icon] || Brain;
            const isVisible = visibleItems.includes(item.id);
            const isActive = activeIndex === index;

            return (
              <article
                key={item.id}
                className={`relative group bg-white/5 backdrop-blur-sm border rounded-2xl p-8 transition-all duration-700 ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                } ${
                  isActive
                    ? 'border-purple-500 bg-gradient-to-br from-purple-500/20 to-violet-500/20 scale-105 shadow-2xl shadow-purple-500/30'
                    : 'border-white/10 hover:border-purple-500/50 hover:scale-102'
                }`}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                {isActive && (
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/10 to-violet-500/10 animate-pulse"></div>
                )}

                <div className={`relative w-14 h-14 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl flex items-center justify-center mb-6 transition-all duration-500 ${
                  isActive ? 'scale-110 rotate-12 shadow-lg shadow-purple-500/50' : 'group-hover:scale-105'
                }`}>
                  <Icon className="text-white" size={28} />
                </div>

                <h3 className={`relative text-xl font-bold mb-3 transition-colors duration-300 ${
                  isActive ? 'text-purple-300' : 'text-white'
                }`}>
                  {item.title}
                </h3>
                <p className="relative text-gray-300 leading-relaxed">
                  {item.desc}
                </p>

                {isActive && (
                  <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-violet-600 to-purple-500 rounded-b-2xl"></div>
                )}
              </article>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes advantage-pulse {
          0%, 100% {
            opacity: 0.1;
            transform: scale(0.8);
          }
          50% {
            opacity: 0.3;
            transform: scale(1.2);
          }
        }
        .animate-advantage-pulse {
          animation: advantage-pulse 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}

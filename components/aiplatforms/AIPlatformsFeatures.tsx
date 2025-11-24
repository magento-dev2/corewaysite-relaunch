import { useEffect, useRef, useState } from 'react';
import { Brain, MessageSquare, Eye, Database, Zap, User } from 'lucide-react';

interface Feature {
  id: string;
  title: string;
  desc: string;
}

interface AIPlatformsFeaturesProps {
  title: string;
  items: Feature[];
}

const iconMap: Record<string, any> = {
  ml: Brain,
  nlp: MessageSquare,
  vision: Eye,
  data: Database,
  automation: Zap,
  personalization: User,
};

export default function AIPlatformsFeatures({ title, items }: AIPlatformsFeaturesProps) {
  const [visibleItems, setVisibleItems] = useState<string[]>([]);
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
      className="py-24 bg-gradient-to-b from-[#1a1325] to-[#0E0918]"
      id="features"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Comprehensive AI solutions designed to transform your business operations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => {
            const Icon = iconMap[item.id] || Brain;
            const isVisible = visibleItems.includes(item.id);

            return (
              <article
                key={item.id}
                className={`group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="text-white" size={28} />
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {item.desc}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef, useState } from 'react';
import { Rocket, Palette, Code, TrendingUp, Zap, Users } from 'lucide-react';

interface Feature {
  icon: string;
  title: string;
  desc: string;
}

interface FeatureGridData {
  title: string;
  features: Feature[];
}

interface FeatureGridProps {
  data: FeatureGridData;
}

const iconMap: Record<string, any> = {
  mvp: Rocket,
  uiux: Palette,
  fullstack: Code,
  scale: TrendingUp,
  prototype: Zap,
  consult: Users,
};

export default function FeatureGrid({ data }: FeatureGridProps) {
  const [visibleItems, setVisibleItems] = useState<string[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          data.features.forEach((_, index) => {
            setTimeout(() => {
              setVisibleItems((prev) => [...prev, index.toString()]);
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
  }, [data.features]);

  const getIcon = (iconPath: string) => {
    const iconName = iconPath.split('/').pop()?.replace('.svg', '') || '';
    return iconMap[iconName] || Rocket;
  };

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-[#1a1325] to-[#0E0918]"
      id="features"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {data.title}
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Comprehensive services for startup success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.features.map((feature, index) => {
            const Icon = getIcon(feature.icon);
            const isVisible = visibleItems.includes(index.toString());

            return (
              <article
                key={index}
                className={`group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="text-white" size={28} />
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.desc}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

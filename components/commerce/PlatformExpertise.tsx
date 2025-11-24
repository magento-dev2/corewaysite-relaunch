import { useEffect, useRef, useState } from 'react';
import { Package, ShoppingBag, Code, Layers as LayersIcon, Database, Cloud } from 'lucide-react';

interface Platform {
  name: string;
  id: string;
}

interface PlatformExpertiseProps {
  title: string;
  description: string;
  items: Platform[];
}

const platformIcons: Record<string, any> = {
  magento: Package,
  shopify: ShoppingBag,
  react: Code,
  vue: LayersIcon,
  graphql: Database,
  aws: Cloud,
};

export default function PlatformExpertise({ title, description, items }: PlatformExpertiseProps) {
  const [isVisible, setIsVisible] = useState(false);
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {items.map((platform, index) => {
            const Icon = platformIcons[platform.id] || Package;
            return (
              <div
                key={platform.id}
                className={`group flex flex-col items-center justify-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-purple-500/50 transition-all duration-500 hover:scale-110 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Icon
                  className="text-gray-400 group-hover:text-purple-500 transition-colors duration-300 mb-3"
                  size={48}
                />
                <span className="text-sm text-gray-300 group-hover:text-white transition-colors font-medium">
                  {platform.name}
                </span>
              </div>
            );
          })}
        </div>

        {/* <div className="mt-16 text-center">
          <p className="text-gray-400 text-sm">
            And many more technologies tailored to your specific needs
          </p>
        </div> */}
      </div>
    </section>
  );
}

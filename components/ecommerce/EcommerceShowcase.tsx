import { useEffect, useRef, useState } from 'react';
import { TrendingUp, DollarSign, ShoppingBag } from 'lucide-react';

interface Store {
  id: string;
  name: string;
  image: string;
  description: string;
  metrics: {
    conversion: string;
    revenue: string;
    orders: string;
  };
}

interface EcommerceShowcaseProps {
  title: string;
  stores: Store[];
}

export default function EcommerceShowcase({ title, stores }: EcommerceShowcaseProps) {
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

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-[#0E0918] to-[#1a1325] relative"
      id="showcase"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-white mb-4 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {title}
          </h2>
          <p className={`text-xl text-gray-300 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Real stores, real results, real revenue growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stores.map((store, index) => (
            <article
              key={store.id}
              onMouseEnter={() => setActiveIndex(index)}
              className={`relative group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              } ${
                activeIndex === index ? 'border-purple-500/50 bg-gradient-to-br from-purple-500/10 to-violet-500/10' : ''
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={store.image}
                  alt={store.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E0918] via-[#0E0918]/50 to-transparent"></div>

                {activeIndex === index && (
                  <div className="absolute top-4 right-4 bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">
                    Featured
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">{store.name}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{store.description}</p>

                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-white/5 rounded-lg p-3 border border-purple-500/20 hover:border-purple-500/50 transition-colors">
                    <div className="flex items-center space-x-1 mb-1">
                      <TrendingUp className="text-purple-400" size={14} />
                      <span className="text-xs text-gray-400">Conv.</span>
                    </div>
                    <div className="text-lg font-bold text-purple-400">{store.metrics.conversion}</div>
                  </div>

                  <div className="bg-white/5 rounded-lg p-3 border border-violet-500/20 hover:border-violet-500/50 transition-colors">
                    <div className="flex items-center space-x-1 mb-1">
                      <DollarSign className="text-violet-400" size={14} />
                      <span className="text-xs text-gray-400">Revenue</span>
                    </div>
                    <div className="text-lg font-bold text-violet-400">{store.metrics.revenue}</div>
                  </div>

                  <div className="bg-white/5 rounded-lg p-3 border border-purple-500/20 hover:border-purple-500/50 transition-colors">
                    <div className="flex items-center space-x-1 mb-1">
                      <ShoppingBag className="text-purple-400" size={14} />
                      <span className="text-xs text-gray-400">Orders</span>
                    </div>
                    <div className="text-lg font-bold text-purple-400">{store.metrics.orders}</div>
                  </div>
                </div>
              </div>

              {activeIndex === index && (
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

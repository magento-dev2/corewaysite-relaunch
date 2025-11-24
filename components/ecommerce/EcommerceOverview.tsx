import { useEffect, useRef, useState } from 'react';
import { CheckCircle } from 'lucide-react';

interface EcommerceOverviewProps {
  title: string;
  content: string;
  image: string;
}

export default function EcommerceOverview({ title, content, image }: EcommerceOverviewProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [products, setProducts] = useState<Array<{ id: number; sold: boolean }>>([]);
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
    const initialProducts = Array.from({ length: 16 }, (_, i) => ({ id: i, sold: Math.random() > 0.3 }));
    setProducts(initialProducts);

    const interval = setInterval(() => {
      setProducts(prev => prev.map(product => ({ ...product, sold: Math.random() > 0.3 })));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const highlights = [
    'AI-powered product recommendations and search',
    'One-click checkout with multiple payment options',
    'Real-time inventory tracking across warehouses',
    'Mobile-first responsive design with PWA support',
  ];

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-[#0E0918] to-[#1a1325] relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full">
          <defs>
            <pattern id="productGrid" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <rect x="10" y="10" width="60" height="60" rx="8" fill="none" stroke="#a855f7" strokeWidth="2" />
              <circle cx="40" cy="35" r="8" fill="#a855f7" opacity="0.3" />
              <rect x="25" y="45" width="30" height="4" rx="2" fill="#a855f7" opacity="0.3" />
              <rect x="20" y="52" width="40" height="3" rx="1.5" fill="#a855f7" opacity="0.2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#productGrid)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              {title}
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              {content}
            </p>

            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className={`flex items-start space-x-3 transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                  }`}
                  style={{ transitionDelay: `${200 + index * 150}ms` }}
                >
                  <div className="mt-1 flex-shrink-0">
                    <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center">
                      <CheckCircle className="text-purple-500" size={20} />
                    </div>
                  </div>
                  <span className="text-gray-300">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0 rotate-0' : 'opacity-0 translate-x-20 rotate-3'
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-violet-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>

              <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-2 p-4 opacity-50 z-10">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className={`flex items-center justify-center transition-all duration-500 ${
                      product.sold ? 'text-purple-500' : 'text-gray-600'
                    }`}
                  >
                    <div className={`w-full h-full border-2 rounded-lg flex items-center justify-center ${
                      product.sold ? 'border-purple-500 bg-purple-500/20' : 'border-gray-600 bg-gray-600/10'
                    }`}>
                      <div className="text-xs font-bold">{product.sold ? '✓' : '○'}</div>
                    </div>
                  </div>
                ))}
              </div>

              <img
                src={image}
                alt="eCommerce Platform"
                className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E0918]/70 to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

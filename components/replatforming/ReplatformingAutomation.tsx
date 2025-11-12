import { useEffect, useRef, useState } from 'react';
import { CheckCircle, Shield } from 'lucide-react';

interface ReplatformingAutomationProps {
  title: string;
  description: string;
  features: string[];
}

export default function ReplatformingAutomation({ title, description, features }: ReplatformingAutomationProps) {
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
      className="py-24 bg-gradient-to-b from-[#1a1325] to-[#0E0918] relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            }`}
          >
            <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-6">
              <Shield className="text-purple-500 animate-pulse" size={16} />
              <span className="text-gray-300 text-sm">Zero-Downtime Migration</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {title}
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              {description}
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`flex items-start space-x-3 transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                  }`}
                  style={{ transitionDelay: `${300 + index * 150}ms` }}
                >
                  <div className="mt-1 flex-shrink-0">
                    <div className="relative w-5 h-5 flex items-center justify-center">
                      <div className="absolute inset-0 bg-purple-500/30 rounded-full animate-ping"></div>
                      <CheckCircle className="relative text-purple-500" size={20} />
                    </div>
                  </div>
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-20 scale-90'
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 p-8">
              <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-violet-500/20 rounded-xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute bg-purple-500/20 rounded-full animate-pulse"
                      style={{
                        top: `${20 + i * 15}%`,
                        left: `${10 + i * 20}%`,
                        width: `${30 + i * 10}px`,
                        height: `${30 + i * 10}px`,
                        animationDelay: `${i * 0.3}s`,
                        animationDuration: `${2 + i * 0.5}s`
                      }}
                    />
                  ))}
                </div>
                <div className="relative text-center z-10">
                  <Shield className="text-purple-500 mx-auto mb-4 animate-pulse" size={64} />
                  <p className="text-white font-medium text-lg">Migration Safety</p>
                  <p className="text-gray-400 text-sm mt-2">
                    100% data integrity guarantee
                  </p>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-4">
                {[
                  { label: 'Uptime', value: '99.9%' },
                  { label: 'Success', value: '100%' },
                  { label: 'Support', value: '24/7' }
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 hover:bg-white/10 hover:border-purple-500/50 transition-all group"
                  >
                    <div className="text-2xl font-bold text-purple-400 group-hover:scale-110 transition-transform">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

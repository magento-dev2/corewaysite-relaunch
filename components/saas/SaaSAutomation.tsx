import { useEffect, useRef, useState } from 'react';
import { CheckCircle, Zap } from 'lucide-react';

interface SaaSAutomationProps {
  title: string;
  description: string;
  features: string[];
}

export default function SaaSAutomation({ title, description, features }: SaaSAutomationProps) {
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
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-6">
              <Zap className="text-purple-500" size={16} />
              <span className="text-gray-300 text-sm">Powered by Automation</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              {title}
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              {description}
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`flex items-start space-x-3 transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="mt-1 flex-shrink-0">
                    <CheckCircle className="text-purple-500" size={20} />
                  </div>
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 p-8">
              <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-violet-500/20 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <Zap className="text-purple-500 mx-auto mb-4" size={64} />
                  <p className="text-white font-medium text-lg">DevOps Dashboard</p>
                  <p className="text-gray-400 text-sm mt-2">
                    Real-time CI/CD pipeline monitoring
                  </p>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-4">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-all"
                  >
                    <div className="w-8 h-8 bg-purple-500/20 rounded-lg mb-2"></div>
                    <div className="h-2 bg-white/10 rounded w-3/4 mb-2"></div>
                    <div className="h-2 bg-white/10 rounded w-1/2"></div>
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

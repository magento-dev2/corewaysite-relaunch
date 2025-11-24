import { useEffect, useRef, useState } from 'react';
import { Check, Zap } from 'lucide-react';

interface AIPlatformAutomationProps {
  title: string;
  description: string;
  features: string[];
}

export default function AIPlatformAutomation({ title, description, features }: AIPlatformAutomationProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-[#1a1325] to-[#0E0918]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="inline-flex items-center space-x-2 bg-purple-500/10 backdrop-blur-sm border border-purple-500/20 rounded-full px-4 py-2 mb-6">
              <Zap className="text-purple-400" size={16} />
              <span className="text-purple-300 text-sm font-medium">Intelligent Automation</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {title}
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              {description}
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`flex items-start space-x-4 transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-5'
                  }`}
                  style={{ transitionDelay: `${(index + 2) * 150}ms` }}
                >
                  <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="text-white" size={16} />
                  </div>
                  <p className="text-gray-300 leading-relaxed">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="bg-gradient-to-br from-purple-500/10 to-violet-500/10 backdrop-blur-sm border border-white/10 rounded-2xl p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-violet-500/20 rounded-full blur-3xl"></div>

              <div className="relative z-10 space-y-8">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-violet-600 rounded-lg flex items-center justify-center">
                      <Zap className="text-white" size={20} />
                    </div>
                    <h4 className="text-white font-bold">Real-Time Processing</h4>
                  </div>
                  <p className="text-sm text-gray-300">Process and analyze data streams instantly with AI-powered insights</p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <Zap className="text-white" size={20} />
                    </div>
                    <h4 className="text-white font-bold">Predictive Analytics</h4>
                  </div>
                  <p className="text-sm text-gray-300">Forecast trends and optimize decisions with machine learning models</p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-violet-600 rounded-lg flex items-center justify-center">
                      <Zap className="text-white" size={20} />
                    </div>
                    <h4 className="text-white font-bold">Continuous Learning</h4>
                  </div>
                  <p className="text-sm text-gray-300">Systems that improve over time through adaptive learning algorithms</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

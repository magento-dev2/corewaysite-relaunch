import { useEffect, useRef, useState } from 'react';
import { CheckCircle, Zap } from 'lucide-react';

interface AIIntegrationAutomationProps {
  title: string;
  description: string;
  features: string[];
}

export default function AIIntegrationAutomation({ title, description, features }: AIIntegrationAutomationProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

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

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!visualRef.current) return;
    const rect = visualRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 30;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 30;
    setMousePosition({ x, y });
  };

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-[#1a1325] to-[#0E0918] relative overflow-hidden"
      style={{ perspective: '1500px' }}
    >
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            }`}
            style={{
              transform: isVisible ? 'translateZ(30px)' : 'translateZ(-50px)',
              transformStyle: 'preserve-3d'
            }}
          >
            <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-6">
              <Zap className="text-purple-500 animate-pulse" size={16} />
              <span className="text-gray-300 text-sm">Integration Excellence</span>
            </div>

            <h2
              className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight"
              style={{ transform: 'translateZ(20px)' }}
            >
              {title}
            </h2>
            <p
              className="text-lg text-gray-300 mb-8 leading-relaxed"
              style={{ transform: 'translateZ(10px)' }}
            >
              {description}
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`flex items-start space-x-3 transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                  }`}
                  style={{
                    transitionDelay: `${400 + index * 150}ms`,
                    transform: `translateZ(${15 - index * 3}px)`
                  }}
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
            ref={visualRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setMousePosition({ x: 0, y: 0 })}
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
            }`}
            style={{
              transform: isVisible ? 'translateZ(30px)' : 'translateZ(-50px)',
              transformStyle: 'preserve-3d',
              perspective: '1000px'
            }}
          >
            <div
              className="relative rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 p-8 cursor-pointer"
              style={{
                transform: `rotateY(${mousePosition.x * 0.3}deg) rotateX(${-mousePosition.y * 0.3}deg) translateZ(20px)`,
                transition: 'transform 0.3s ease-out',
                transformStyle: 'preserve-3d'
              }}
            >
              <div
                className="aspect-video bg-gradient-to-br from-purple-500/20 to-violet-500/20 rounded-xl flex items-center justify-center relative overflow-hidden"
                style={{
                  transform: 'translateZ(40px)',
                  transformStyle: 'preserve-3d'
                }}
              >
                <div className="absolute inset-0">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute bg-purple-500/30 rounded-full animate-pulse"
                      style={{
                        top: `${15 + i * 12}%`,
                        left: `${10 + i * 15}%`,
                        width: `${40 + i * 8}px`,
                        height: `${40 + i * 8}px`,
                        animationDelay: `${i * 0.4}s`,
                        animationDuration: `${2.5 + i * 0.3}s`,
                        transform: `translateZ(${20 + i * 5}px)`
                      }}
                    />
                  ))}
                </div>
                <div className="relative text-center z-10" style={{ transform: 'translateZ(60px)' }}>
                  <Zap className="text-purple-500 mx-auto mb-4 animate-pulse" size={64} />
                  <p className="text-white font-medium text-lg">AI Integration Hub</p>
                  <p className="text-gray-400 text-sm mt-2">Connected intelligence</p>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-4">
                {[
                  { label: 'Uptime', value: '99.9%' },
                  { label: 'Speed', value: '<50ms' },
                  { label: 'APIs', value: '100+' }
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 hover:bg-white/10 hover:border-purple-500/50 transition-all group cursor-pointer"
                    style={{
                      transform: `translateZ(${30 - i * 5}px)`,
                      transformStyle: 'preserve-3d'
                    }}
                  >
                    <div className="text-2xl font-bold text-purple-400 group-hover:scale-110 transition-transform">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div
                className="absolute top-4 right-4 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl"
                style={{
                  transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px) translateZ(10px)`,
                  transition: 'transform 0.3s ease-out'
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

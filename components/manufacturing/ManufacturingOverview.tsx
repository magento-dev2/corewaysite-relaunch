import { useEffect, useRef, useState } from 'react';
import { CheckCircle } from 'lucide-react';

interface ManufacturingOverviewProps {
  title: string;
  content: string;
  image: string;
}

export default function ManufacturingOverview({ title, content, image }: ManufacturingOverviewProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [sensors, setSensors] = useState<Array<{ id: number; active: boolean; value: number }>>([]);
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
    const initialSensors = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      active: Math.random() > 0.2,
      value: Math.floor(Math.random() * 100)
    }));
    setSensors(initialSensors);

    const interval = setInterval(() => {
      setSensors(prev => prev.map(sensor => ({
        ...sensor,
        active: Math.random() > 0.2,
        value: Math.floor(Math.random() * 100)
      })));
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  const highlights = [
    'Real-time production monitoring across all facilities',
    'AI-powered predictive maintenance reducing downtime by 40%',
    'Automated quality control with computer vision',
    'Energy optimization and consumption tracking',
  ];

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-[#0E0918] to-[#1a1325] relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full">
          <defs>
            <pattern id="factoryGrid" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="20" fill="none" stroke="#a855f7" strokeWidth="2" />
              <line x1="50" y1="30" x2="50" y2="20" stroke="#a855f7" strokeWidth="2" />
              <line x1="50" y1="70" x2="50" y2="80" stroke="#a855f7" strokeWidth="2" />
              <line x1="30" y1="50" x2="20" y2="50" stroke="#a855f7" strokeWidth="2" />
              <line x1="70" y1="50" x2="80" y2="50" stroke="#a855f7" strokeWidth="2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#factoryGrid)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
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

              <div className="absolute inset-0 grid grid-cols-4 grid-rows-3 gap-4 p-6 opacity-60 z-10">
                {sensors.map((sensor) => (
                  <div
                    key={sensor.id}
                    className={`relative flex flex-col items-center justify-center transition-all duration-500 ${
                      sensor.active ? 'text-purple-400' : 'text-gray-600'
                    }`}
                  >
                    <div className={`w-full h-full rounded-lg border-2 flex flex-col items-center justify-center ${
                      sensor.active ? 'border-purple-500 bg-purple-500/20' : 'border-gray-600 bg-gray-600/10'
                    }`}>
                      <div className="text-xs font-bold mb-1">{sensor.active ? '●' : '○'}</div>
                      <div className="text-[10px] font-mono">{sensor.value}</div>
                    </div>
                    {sensor.active && (
                      <div className="absolute -top-1 -right-1 w-2 h-2 bg-purple-500 rounded-full animate-ping" />
                    )}
                  </div>
                ))}
              </div>

              <img
                src={image}
                alt="Manufacturing IoT"
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

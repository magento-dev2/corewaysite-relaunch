import { useEffect, useRef, useState } from 'react';
import { Cloud, Server, Radio, Wifi, Cpu, Layers } from 'lucide-react';

interface Platform {
  name: string;
  id: string;
}

interface IoTTechnologiesProps {
  title: string;
  description: string;
  items: Platform[];
}

const platformIcons: Record<string, any> = {
  aws: Cloud,
  azure: Server,
  mqtt: Radio,
  lorawan: Wifi,
  raspberrypi: Cpu,
  arduino: Layers,
};

export default function IoTTechnologies({ title, description, items }: IoTTechnologiesProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
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
      className="py-24 bg-gradient-to-b from-[#0E0918] to-[#1a1325] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {items.map((platform, index) => {
              const Icon = platformIcons[platform.id] || Wifi;
              const isHovered = hoveredIndex === index;

              return (
                <div
                  key={platform.id}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`group relative flex flex-col items-center justify-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl transition-all duration-500 cursor-pointer ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  } ${
                    isHovered
                      ? 'bg-gradient-to-br from-purple-500/20 to-violet-500/20 border-purple-500/50 scale-110 shadow-lg shadow-purple-500/20'
                      : 'hover:bg-white/10 hover:border-purple-500/50 hover:scale-110'
                  }`}
                  style={{
                    transitionDelay: `${index * 100}ms`,
                    animation: isVisible ? `float ${3 + (index % 3)}s ease-in-out infinite` : 'none',
                    animationDelay: `${index * 0.2}s`
                  }}
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/0 to-violet-500/0 group-hover:from-purple-500/10 group-hover:to-violet-500/10 transition-all duration-500"></div>

                  <Icon
                    className={`relative z-10 transition-all duration-300 mb-3 ${
                      isHovered
                        ? 'text-purple-400 scale-125'
                        : 'text-gray-400 group-hover:text-purple-500'
                    }`}
                    size={48}
                  />
                  <span className={`relative z-10 text-sm font-medium transition-colors ${
                    isHovered
                      ? 'text-white'
                      : 'text-gray-300 group-hover:text-white'
                  }`}>
                    {platform.name}
                  </span>

                  {isHovered && (
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-violet-500/20 rounded-2xl blur-xl -z-10 animate-pulse"></div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-400 text-sm">
              Supporting industry-standard IoT protocols and platforms
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </section>
  );
}

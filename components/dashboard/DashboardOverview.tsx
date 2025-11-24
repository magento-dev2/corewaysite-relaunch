import { useEffect, useRef, useState } from 'react';
import { CheckCircle } from 'lucide-react';

interface DashboardOverviewProps {
  title: string;
  content: string;
  image: string;
}

export default function DashboardOverview({ title, content, image }: DashboardOverviewProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [widgets, setWidgets] = useState<Array<{ id: number; active: boolean }>>([]);
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
    const initialWidgets = Array.from({ length: 12 }, (_, i) => ({ id: i, active: false }));
    setWidgets(initialWidgets);

    const interval = setInterval(() => {
      setWidgets(prev => prev.map(w => ({ ...w, active: Math.random() > 0.5 })));
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  const highlights = [
    'Real-time data synchronization across all views',
    'Sub-second query performance with smart caching',
    'Role-based access with granular permissions',
    'Mobile-responsive design for any device',
  ];

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-[#0E0918] to-[#1a1325] relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full">
          <defs>
            <pattern id="dashboardWidgets" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
              <rect x="5" y="5" width="50" height="50" fill="none" stroke="#a855f7" strokeWidth="1" rx="4" />
              <rect x="65" y="5" width="50" height="50" fill="none" stroke="#a855f7" strokeWidth="1" rx="4" />
              <rect x="5" y="65" width="50" height="50" fill="none" stroke="#a855f7" strokeWidth="1" rx="4" />
              <rect x="65" y="65" width="50" height="50" fill="none" stroke="#a855f7" strokeWidth="1" rx="4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dashboardWidgets)" />
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

              <div className="absolute inset-0 grid grid-cols-4 grid-rows-3 gap-2 p-4 opacity-30 z-10">
                {widgets.map((widget) => (
                  <div
                    key={widget.id}
                    className={`rounded-lg border border-purple-500/30 backdrop-blur-sm transition-all duration-500 ${
                      widget.active ? 'bg-purple-500/30 shadow-lg shadow-purple-500/50' : 'bg-purple-500/10'
                    }`}
                  >
                    <div className="h-full flex flex-col p-2">
                      <div className={`w-2 h-2 rounded-full mb-1 ${widget.active ? 'bg-green-500' : 'bg-gray-500'}`} />
                      <div className="flex-1 flex flex-col justify-center space-y-1">
                        <div className="h-1 bg-white/20 rounded w-3/4" />
                        <div className="h-1 bg-white/20 rounded w-1/2" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <img
                src={image}
                alt="Dashboard"
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

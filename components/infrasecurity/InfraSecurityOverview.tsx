import { useEffect, useRef, useState } from 'react';
import { CheckCircle } from 'lucide-react';

interface InfraSecurityOverviewProps {
  title: string;
  content: string;
  image: string;
}

export default function InfraSecurityOverview({ title, content, image }: InfraSecurityOverviewProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [locks, setLocks] = useState<Array<{ id: number; locked: boolean }>>([]);
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
    const initialLocks = Array.from({ length: 16 }, (_, i) => ({ id: i, locked: true }));
    setLocks(initialLocks);

    const interval = setInterval(() => {
      setLocks(prev => prev.map(lock => ({ ...lock, locked: Math.random() > 0.2 })));
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  const highlights = [
    'AI-powered threat detection with 99.9% accuracy',
    'Zero-trust architecture with identity verification',
    'Automated incident response in under 10 seconds',
    'Continuous compliance monitoring and reporting',
  ];

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-[#0E0918] to-[#1a1325] relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full">
          <defs>
            <pattern id="lockPattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="30" r="12" fill="none" stroke="#a855f7" strokeWidth="2" />
              <rect x="42" y="30" width="16" height="20" rx="2" fill="none" stroke="#a855f7" strokeWidth="2" />
              <line x1="50" y1="38" x2="50" y2="44" stroke="#a855f7" strokeWidth="2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#lockPattern)" />
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

              <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-2 p-4 opacity-40 z-10">
                {locks.map((lock) => (
                  <div
                    key={lock.id}
                    className={`flex items-center justify-center transition-all duration-500 ${
                      lock.locked ? 'text-purple-500' : 'text-gray-500'
                    }`}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="5" y="11" width="14" height="10" rx="2" ry="2"/>
                      <path d="M12 17v-2"/>
                      {lock.locked ? (
                        <path d="M7 11V7a5 5 0 0110 0v4"/>
                      ) : (
                        <path d="M7 11V7a5 5 0 019.9-1"/>
                      )}
                    </svg>
                  </div>
                ))}
              </div>

              <img
                src={image}
                alt="Security Infrastructure"
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

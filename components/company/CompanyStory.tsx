import { useEffect, useRef, useState } from 'react';

interface Stat {
  value: string;
  label: string;
  icon: string;
}

interface CompanyStoryProps {
  title: string;
  content: string;
  stats: Stat[];
}

export default function CompanyStory({ title, content, stats }: CompanyStoryProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState<number[]>([0, 0, 0, 0]);
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
    if (isVisible) {
      stats.forEach((_, index) => {
        let current = 0;
        const target = parseInt(stats[index].value);
        const increment = target / 50;

        const interval = setInterval(() => {
          current += increment;
          if (current >= target) {
            setCounters(prev => {
              const newCounters = [...prev];
              newCounters[index] = target;
              return newCounters;
            });
            clearInterval(interval);
          } else {
            setCounters(prev => {
              const newCounters = [...prev];
              newCounters[index] = Math.floor(current);
              return newCounters;
            });
          }
        }, 30);
      });
    }
  }, [isVisible, stats]);

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-[#0E0918] to-[#1a1325] relative overflow-hidden"
      id="story"
    >
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-timeline-dot"
            style={{
              left: `${10 + (i % 10) * 9}%`,
              top: `${20 + (i % 2) * 40}%`,
              animationDelay: `${i * 0.2}s`
            }}
          >
            <div className="w-2 h-2 bg-purple-500 rounded-full" />
          </div>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {title}
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {content}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`relative group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center transition-all duration-700 hover:border-purple-500/50 hover:bg-white/10 hover:-translate-y-2 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-violet-500/0 group-hover:from-purple-500/10 group-hover:to-violet-500/10 rounded-2xl transition-all duration-500"></div>

              <div className="relative">
                <div className="text-4xl mb-3 animate-bounce-slow">{stat.icon}</div>
                <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2 font-mono">
                  {stat.value.includes('+') ? `${counters[index]}+` : stat.value.includes('%') ? `${counters[index]}%` : stat.value}
                </div>
                <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
              </div>

              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-violet-600 group-hover:w-3/4 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes timeline-dot {
          0%, 100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.5);
          }
        }
        .animate-timeline-dot {
          animation: timeline-dot 3s ease-in-out infinite;
        }
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}

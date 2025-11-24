import { useEffect, useRef, useState } from 'react';
import { CheckCircle, Cpu } from 'lucide-react';

interface DatasetAutomationProps {
  title: string;
  description: string;
  features: string[];
}

export default function DatasetAutomation({ title, description, features }: DatasetAutomationProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [dataRows, setDataRows] = useState<Array<{ id: number; active: boolean }>>([]);
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
    const rows = Array.from({ length: 8 }, (_, i) => ({ id: i, active: false }));
    setDataRows(rows);

    const interval = setInterval(() => {
      setDataRows(prev => prev.map(row => ({
        ...row,
        active: Math.random() > 0.6
      })));
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-[#1a1325] to-[#0E0918] relative overflow-hidden"
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
          >
            <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-6">
              <Cpu className="text-purple-500 animate-pulse" size={16} />
              <span className="text-gray-300 text-sm font-mono">{'<AI/>'} Data Processing</span>
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
                <div className="absolute inset-0 p-4">
                  <div className="space-y-2">
                    {dataRows.map((row) => (
                      <div
                        key={row.id}
                        className={`h-6 rounded transition-all duration-500 ${
                          row.active
                            ? 'bg-purple-500/40 shadow-lg shadow-purple-500/50'
                            : 'bg-purple-500/10'
                        }`}
                      >
                        <div className="h-full flex items-center px-3 space-x-2 font-mono text-xs">
                          <div className={`w-2 h-2 rounded-full ${row.active ? 'bg-green-500' : 'bg-gray-500'}`} />
                          <span className="text-purple-300">{row.active ? 'PROCESSING' : 'QUEUED'}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-purple-900/50" />
              </div>

              <div className="mt-6 grid grid-cols-3 gap-4">
                {[
                  { label: 'Processing', value: '10TB+' },
                  { label: 'Speed', value: '<100ms' },
                  { label: 'Accuracy', value: '99.9%' }
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 hover:bg-white/10 hover:border-purple-500/50 transition-all group"
                  >
                    <div className="text-2xl font-bold text-purple-400 group-hover:scale-110 transition-transform font-mono">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-400 mt-1 font-mono">{stat.label}</div>
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

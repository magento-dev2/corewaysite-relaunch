import { useEffect, useRef, useState } from 'react';
import { CheckCircle, Activity } from 'lucide-react';

interface DashboardAutomationProps {
  title: string;
  description: string;
  features: string[];
}

interface Chart {
  id: number;
  value: number;
  trend: 'up' | 'down' | 'stable';
}

export default function DashboardAutomation({ title, description, features }: DashboardAutomationProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [charts, setCharts] = useState<Chart[]>([]);
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
    const trends: Array<'up' | 'down' | 'stable'> = ['up', 'down', 'stable'];
    const initialCharts = Array.from({ length: 6 }, (_, i) => ({
      id: i,
      value: 40 + Math.random() * 40,
      trend: trends[Math.floor(Math.random() * trends.length)]
    }));
    setCharts(initialCharts);

    const interval = setInterval(() => {
      setCharts(prev => prev.map(chart => ({
        ...chart,
        value: Math.max(20, Math.min(80, chart.value + (Math.random() - 0.5) * 15)),
        trend: trends[Math.floor(Math.random() * trends.length)]
      })));
    }, 2000);

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
              <Activity className="text-purple-500 animate-pulse" size={16} />
              <span className="text-gray-300 text-sm font-mono">Live Analytics</span>
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
              <h3 className="text-white font-bold mb-6 font-mono text-sm">Real-Time Metrics</h3>

              <div className="grid grid-cols-3 gap-4 mb-6">
                {charts.map((chart) => (
                  <div
                    key={chart.id}
                    className="bg-white/5 rounded-lg p-4 border border-white/10 hover:border-purple-500/50 transition-all group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-gray-400 font-mono">KPI {chart.id + 1}</span>
                      <span className={`text-xs font-mono ${
                        chart.trend === 'up' ? 'text-green-400' : chart.trend === 'down' ? 'text-red-400' : 'text-gray-400'
                      }`}>
                        {chart.trend === 'up' ? '↑' : chart.trend === 'down' ? '↓' : '→'}
                      </span>
                    </div>
                    <div className="h-12 bg-purple-900/30 rounded overflow-hidden relative">
                      <div
                        className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-purple-500 to-violet-600 transition-all duration-1000"
                        style={{ height: `${chart.value}%` }}
                      />
                    </div>
                    <div className="text-xl font-bold text-purple-400 mt-2 font-mono group-hover:scale-110 transition-transform">
                      {Math.round(chart.value)}%
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Avg Response', value: '<50ms', color: 'text-green-400' },
                  { label: 'Active Users', value: '1.2K+', color: 'text-purple-400' }
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 hover:bg-white/10 hover:border-purple-500/50 transition-all group"
                  >
                    <div className={`text-2xl font-bold font-mono group-hover:scale-110 transition-transform ${stat.color}`}>
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

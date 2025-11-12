import { useEffect, useRef, useState } from 'react';
import { RefreshCw, Zap, Database, Server, ArrowRight } from 'lucide-react';

interface ReplatformingHeroProps {
  title: string;
  subtitle: string;
  buttons: { label: string; link: string }[];
}

export default function ReplatformingHero({ title, subtitle, buttons }: ReplatformingHeroProps) {
  const canvasRef = useRef<HTMLDivElement>(null);
  const [dataFlow, setDataFlow] = useState<Array<{ id: number; progress: number }>>([]);

  useEffect(() => {
    const flows = Array.from({ length: 5 }, (_, i) => ({ id: i, progress: 0 }));
    setDataFlow(flows);

    const interval = setInterval(() => {
      setDataFlow(prev =>
        prev.map(flow => ({
          ...flow,
          progress: flow.progress >= 100 ? 0 : flow.progress + 2
        }))
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0E0918] via-[#1a1325] to-[#0E0918]">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div ref={canvasRef} className="absolute inset-0 overflow-hidden pointer-events-none">
        {dataFlow.map((flow, index) => (
          <div
            key={flow.id}
            className="absolute h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent"
            style={{
              top: `${20 + index * 15}%`,
              left: '-10%',
              width: '120%',
              opacity: flow.progress / 100,
              transform: `translateX(${flow.progress - 100}%)`
            }}
          />
        ))}

        <div className="migration-icon absolute top-20 left-[15%] text-purple-400/30">
          <Database size={48} />
        </div>
        <div className="migration-icon absolute top-40 right-[20%] text-violet-400/30" style={{ animationDelay: '0.5s' }}>
          <Server size={44} />
        </div>
        <div className="migration-icon absolute bottom-40 left-[25%] text-purple-400/30" style={{ animationDelay: '1s' }}>
          <RefreshCw size={52} />
        </div>
        <div className="migration-icon absolute bottom-20 right-[18%] text-violet-400/30" style={{ animationDelay: '1.5s' }}>
          <Zap size={56} />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-8 animate-slideDown">
          <RefreshCw className="text-purple-500 animate-spin-slow" size={16} />
          <span className="text-gray-300 text-sm">Migration & Replatforming</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fadeInUp">
          {title}
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          {subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
          {buttons.map((button, index) => (
            <a
              key={index}
              href={button.link}
              className={`group px-8 py-4 rounded-lg font-medium text-lg flex items-center space-x-2 transition-all ${
                index === 0
                  ? 'bg-gradient-to-r from-purple-500 to-violet-600 text-white hover:from-purple-600 hover:to-violet-700 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 hover:scale-105'
                  : 'bg-white/5 backdrop-blur-sm border border-white/10 text-white hover:bg-white/10 hover:border-purple-500/50'
              }`}
            >
              <span>{button.label}</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </a>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>

      <style>{`
        .migration-icon {
          animation: migrate 3s ease-in-out infinite;
        }
        @keyframes migrate {
          0%, 100% {
            transform: translateX(0) translateY(0) scale(1);
            opacity: 0.3;
          }
          50% {
            transform: translateX(20px) translateY(-10px) scale(1.1);
            opacity: 0.6;
          }
        }
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.8s ease-out forwards;
        }
        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out forwards;
          opacity: 0;
        }
        .animate-spin-slow {
          animation: spin 4s linear infinite;
        }
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
}

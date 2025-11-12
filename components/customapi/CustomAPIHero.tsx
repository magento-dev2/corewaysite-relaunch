import { useEffect, useRef, useState } from 'react';
import { Zap, Link2, GitBranch, Webhook, ArrowRight } from 'lucide-react';

interface CustomAPIHeroProps {
  title: string;
  subtitle: string;
  buttons: { label: string; link: string }[];
}

export default function CustomAPIHero({ title, subtitle, buttons }: CustomAPIHeroProps) {
  const [apiCalls, setApiCalls] = useState<Array<{ id: number; x: number; y: number; active: boolean }>>([]);
  const [connections, setConnections] = useState<Array<{ from: number; to: number; progress: number }>>([]);

  useEffect(() => {
    const calls = Array.from({ length: 6 }, (_, i) => ({
      id: i,
      x: Math.random() * 80 + 10,
      y: Math.random() * 80 + 10,
      active: false
    }));
    setApiCalls(calls);

    const conns = [
      { from: 0, to: 1, progress: 0 },
      { from: 1, to: 2, progress: 0 },
      { from: 2, to: 3, progress: 0 },
      { from: 3, to: 4, progress: 0 },
      { from: 4, to: 5, progress: 0 }
    ];
    setConnections(conns);

    const interval = setInterval(() => {
      setConnections(prev =>
        prev.map(conn => ({
          ...conn,
          progress: conn.progress >= 100 ? 0 : conn.progress + 2
        }))
      );

      setApiCalls(prev =>
        prev.map((call, idx) => ({
          ...call,
          active: Math.random() > 0.7
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

      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
        <defs>
          <linearGradient id="apiGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#a855f7" stopOpacity="0" />
            <stop offset="50%" stopColor="#a855f7" stopOpacity="1" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
          </linearGradient>
        </defs>

        {connections.map((conn, idx) => {
          const from = apiCalls[conn.from];
          const to = apiCalls[conn.to];
          if (!from || !to) return null;

          return (
            <line
              key={idx}
              x1={`${from.x}%`}
              y1={`${from.y}%`}
              x2={`${to.x}%`}
              y2={`${to.y}%`}
              stroke="url(#apiGradient)"
              strokeWidth="2"
              strokeDasharray="5,5"
              strokeDashoffset={100 - conn.progress}
              opacity={conn.progress / 100}
            />
          );
        })}

        {apiCalls.map((call) => (
          <circle
            key={call.id}
            cx={`${call.x}%`}
            cy={`${call.y}%`}
            r={call.active ? "8" : "5"}
            fill="#a855f7"
            opacity={call.active ? "0.8" : "0.4"}
            className="transition-all duration-300"
          />
        ))}
      </svg>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="api-icon absolute top-20 left-[15%] text-purple-400/20">
          <GitBranch size={48} />
        </div>
        <div className="api-icon absolute top-40 right-[20%] text-violet-400/20" style={{ animationDelay: '0.5s' }}>
          <Webhook size={44} />
        </div>
        <div className="api-icon absolute bottom-40 left-[25%] text-purple-400/20" style={{ animationDelay: '1s' }}>
          <Link2 size={52} />
        </div>
        <div className="api-icon absolute bottom-20 right-[18%] text-violet-400/20" style={{ animationDelay: '1.5s' }}>
          <Zap size={56} />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-8 animate-slideDown">
          <Link2 className="text-purple-500 animate-pulse" size={16} />
          <span className="text-gray-300 text-sm">API & Integration Solutions</span>
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
        .api-icon {
          animation: pulse-move 4s ease-in-out infinite;
        }
        @keyframes pulse-move {
          0%, 100% {
            transform: scale(1) translateY(0);
            opacity: 0.2;
          }
          50% {
            transform: scale(1.2) translateY(-10px);
            opacity: 0.4;
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
      `}</style>
    </section>
  );
}

import { useEffect, useRef, useState } from 'react';
import { Shield, ArrowRight, Lock } from 'lucide-react';

interface InfraSecurityHeroProps {
  title: string;
  subtitle: string;
  buttons: { label: string; link: string }[];
}

export default function InfraSecurityHero({ title, subtitle, buttons }: InfraSecurityHeroProps) {
  const [shields, setShields] = useState<Array<{ id: number; x: number; y: number; active: boolean }>>([]);
  const [scanLine, setScanLine] = useState(0);
  const [threats, setThreats] = useState({ blocked: 0, detected: 0, uptime: 100 });
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const initialShields = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: 10 + (i % 5) * 20,
      y: 20 + Math.floor(i / 5) * 25,
      active: Math.random() > 0.3
    }));
    setShields(initialShields);

    const shieldInterval = setInterval(() => {
      setShields(prev => prev.map(shield => ({
        ...shield,
        active: Math.random() > 0.3
      })));
    }, 1500);

    const scanInterval = setInterval(() => {
      setScanLine(prev => (prev >= 100 ? 0 : prev + 2));
    }, 50);

    const threatsInterval = setInterval(() => {
      setThreats({
        blocked: Math.floor(10000 + Math.random() * 5000),
        detected: Math.floor(50 + Math.random() * 30),
        uptime: 99.9 + Math.random() * 0.09
      });
    }, 2000);

    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const drawSecurityGrid = () => {
          ctx.clearRect(0, 0, canvas.width, canvas.height);

          ctx.strokeStyle = 'rgba(168, 85, 247, 0.1)';
          ctx.lineWidth = 1;

          const gridSize = 50;
          for (let x = 0; x < canvas.width; x += gridSize) {
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, canvas.height);
            ctx.stroke();
          }
          for (let y = 0; y < canvas.height; y += gridSize) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(canvas.width, y);
            ctx.stroke();
          }

          requestAnimationFrame(drawSecurityGrid);
        };

        drawSecurityGrid();
      }
    }

    return () => {
      clearInterval(shieldInterval);
      clearInterval(scanInterval);
      clearInterval(threatsInterval);
    };
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0E0918] via-[#1a1325] to-[#0E0918]">
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none opacity-20" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {shields.map((shield) => (
          <div
            key={shield.id}
            className={`absolute transition-all duration-500 ${shield.active ? 'opacity-100' : 'opacity-30'}`}
            style={{
              left: `${shield.x}%`,
              top: `${shield.y}%`
            }}
          >
            <div className={`relative w-12 h-12 flex items-center justify-center ${
              shield.active ? 'animate-pulse-shield' : ''
            }`}>
              <Shield
                className={`${shield.active ? 'text-purple-500' : 'text-gray-600'}`}
                size={shield.active ? 32 : 24}
              />
              {shield.active && (
                <div className="absolute inset-0 border-2 border-purple-500 rounded-full animate-ping opacity-50"></div>
              )}
            </div>
          </div>
        ))}

        <div
          className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50"
          style={{ top: `${scanLine}%` }}
        />

        <svg className="absolute inset-0 w-full h-full opacity-10">
          <defs>
            <pattern id="securityHex" x="0" y="0" width="60" height="52" patternUnits="userSpaceOnUse">
              <path
                d="M30,2 L52,15 L52,37 L30,50 L8,37 L8,15 Z"
                fill="none"
                stroke="#a855f7"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#securityHex)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-purple-500/30 rounded-full px-4 py-2 mb-8 animate-slideDown">
          <Lock className="text-purple-500 animate-pulse" size={16} />
          <span className="text-gray-300 text-sm font-mono">Security Infrastructure</span>
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

        <div className="mt-12 grid grid-cols-3 gap-4 max-w-2xl mx-auto">
          {[
            { label: 'Threats Blocked', value: threats.blocked.toLocaleString(), icon: '🛡️', color: 'text-purple-400' },
            { label: 'Active Scans', value: threats.detected.toLocaleString(), icon: '🔍', color: 'text-purple-400' },
            { label: 'Security Score', value: `${threats.uptime.toFixed(1)}%`, icon: '✓', color: 'text-purple-400' }
          ].map((metric, i) => (
            <div
              key={i}
              className="bg-white/5 backdrop-blur-sm border border-purple-500/30 rounded-xl px-4 py-3"
            >
              <div className="text-2xl mb-1">{metric.icon}</div>
              <div className={`text-2xl font-bold font-mono ${metric.color}`}>{metric.value}</div>
              <div className="text-xs text-gray-400 font-mono">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>

      <style>{`
        @keyframes pulse-shield {
          0%, 100% {
            transform: scale(1);
            filter: drop-shadow(0 0 5px rgba(168, 85, 247, 0.5));
          }
          50% {
            transform: scale(1.1);
            filter: drop-shadow(0 0 15px rgba(168, 85, 247, 0.8));
          }
        }
        .animate-pulse-shield {
          animation: pulse-shield 2s ease-in-out infinite;
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

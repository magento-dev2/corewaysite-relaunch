"use client";


import { useEffect, useRef, useState } from 'react';
import { Shield, Lock, Eye, Zap, ArrowRight } from 'lucide-react';

interface AISecurityHeroProps {
  title: string;
  subtitle: string;
  buttons: { label: string; link: string }[];
}

export default function AISecurityHero({ title, subtitle, buttons }: AISecurityHeroProps) {
  const [scanProgress, setScanProgress] = useState(0);
  const [threats, setThreats] = useState<Array<{ id: number; x: number; y: number; detected: boolean }>>([]);

  useEffect(() => {
    const threatList = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 90 + 5,
      y: Math.random() * 90 + 5,
      detected: false
    }));
    setThreats(threatList);

    const scanInterval = setInterval(() => {
      setScanProgress(prev => (prev >= 100 ? 0 : prev + 1));
    }, 50);

    const detectionInterval = setInterval(() => {
      setThreats(prev =>
        prev.map(threat => ({
          ...threat,
          detected: Math.random() > 0.8 ? true : threat.detected
        }))
      );
    }, 1000);

    return () => {
      clearInterval(scanInterval);
      clearInterval(detectionInterval);
    };
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0E0918] via-[#1a1325] to-[#0E0918]">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="w-full h-full opacity-20">
          <defs>
            <radialGradient id="scanGradient">
              <stop offset="0%" stopColor="#a855f7" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle
            cx="50%"
            cy="50%"
            r="40%"
            fill="none"
            stroke="#a855f7"
            strokeWidth="2"
            strokeDasharray="10,5"
            className="animate-spin-slow"
            style={{ animationDuration: '20s' }}
          />
          <circle
            cx="50%"
            cy="50%"
            r="30%"
            fill="none"
            stroke="#8b5cf6"
            strokeWidth="2"
            strokeDasharray="5,10"
            className="animate-spin-reverse"
            style={{ animationDuration: '15s' }}
          />

          <line
            x1="50%"
            y1="50%"
            x2={`${50 + 40 * Math.cos((scanProgress * 3.6 * Math.PI) / 180)}%`}
            y2={`${50 + 40 * Math.sin((scanProgress * 3.6 * Math.PI) / 180)}%`}
            stroke="url(#scanGradient)"
            strokeWidth="3"
          />

          {threats.map((threat) => (
            <g key={threat.id}>
              <circle
                cx={`${threat.x}%`}
                cy={`${threat.y}%`}
                r={threat.detected ? "8" : "5"}
                fill={threat.detected ? "#ef4444" : "#a855f7"}
                opacity={threat.detected ? "0.9" : "0.4"}
                className={threat.detected ? "animate-ping" : ""}
              />
              {threat.detected && (
                <circle
                  cx={`${threat.x}%`}
                  cy={`${threat.y}%`}
                  r="15"
                  fill="none"
                  stroke="#ef4444"
                  strokeWidth="2"
                  opacity="0.6"
                />
              )}
            </g>
          ))}
        </svg>

        <div className="security-icon absolute top-20 left-[15%] text-purple-400/20">
          <Shield size={48} />
        </div>
        <div className="security-icon absolute top-40 right-[20%] text-violet-400/20" style={{ animationDelay: '0.5s' }}>
          <Lock size={44} />
        </div>
        <div className="security-icon absolute bottom-40 left-[25%] text-purple-400/20" style={{ animationDelay: '1s' }}>
          <Eye size={52} />
        </div>
        <div className="security-icon absolute bottom-20 right-[18%] text-violet-400/20" style={{ animationDelay: '1.5s' }}>
          <Zap size={56} />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-8 animate-slideDown">
          <Shield className="text-purple-500 animate-pulse" size={16} />
          <span className="text-gray-300 text-sm">AI Security Solutions</span>
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

        <div className="mt-12 inline-flex items-center space-x-3 bg-white/5 backdrop-blur-sm border border-purple-500/30 rounded-xl px-6 py-3">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-300">AI Monitoring Active</span>
          </div>
          <div className="w-px h-4 bg-white/20"></div>
          <span className="text-sm text-purple-400 font-mono">{scanProgress}% Scanned</span>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>

      <style>{`
        .security-icon {
          animation: shield-pulse 3s ease-in-out infinite;
        }
        @keyframes shield-pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.2;
          }
          50% {
            transform: scale(1.15);
            opacity: 0.4;
          }
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow linear infinite;
        }
        @keyframes spin-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }
        .animate-spin-reverse {
          animation: spin-reverse linear infinite;
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

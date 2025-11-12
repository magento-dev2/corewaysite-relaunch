"use client";

import { useEffect, useRef, useState } from 'react';
import { Cloud, Database, ArrowRight } from 'lucide-react';

interface AWSS3HeroProps {
  title: string;
  subtitle: string;
  buttons: { label: string; link: string }[];
}

export default function AWSS3Hero({ title, subtitle, buttons }: AWSS3HeroProps) {
  const [buckets, setBuckets] = useState<Array<{ id: number; size: number; x: number; y: number }>>([]);
  const [dataTransfer, setDataTransfer] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const initialBuckets = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      size: 20 + Math.random() * 30,
      x: Math.random() * 90 + 5,
      y: Math.random() * 80 + 10
    }));
    setBuckets(initialBuckets);

    const transferInterval = setInterval(() => {
      setDataTransfer(prev => (prev >= 100 ? 0 : prev + 2));
    }, 100);

    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const drawCloudNetwork = () => {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.strokeStyle = 'rgba(168, 85, 247, 0.2)';
          ctx.lineWidth = 1;

          for (let i = 0; i < initialBuckets.length; i++) {
            for (let j = i + 1; j < initialBuckets.length; j++) {
              if (Math.random() > 0.7) {
                const x1 = (initialBuckets[i].x / 100) * canvas.width;
                const y1 = (initialBuckets[i].y / 100) * canvas.height;
                const x2 = (initialBuckets[j].x / 100) * canvas.width;
                const y2 = (initialBuckets[j].y / 100) * canvas.height;

                ctx.beginPath();
                ctx.moveTo(x1, y1);
                ctx.lineTo(x2, y2);
                ctx.stroke();
              }
            }
          }

          requestAnimationFrame(drawCloudNetwork);
        };

        drawCloudNetwork();
      }
    }

    return () => clearInterval(transferInterval);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0E0918] via-[#1a1325] to-[#0E0918]">
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none opacity-30" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {buckets.map((bucket) => (
          <div
            key={bucket.id}
            className="absolute animate-bucket-float"
            style={{
              left: `${bucket.x}%`,
              top: `${bucket.y}%`,
              animationDelay: `${bucket.id * 0.3}s`,
              animationDuration: `${4 + bucket.id * 0.2}s`
            }}
          >
            <div
              className="relative"
              style={{
                width: `${bucket.size}px`,
                height: `${bucket.size}px`
              }}
            >
              <div className="absolute inset-0 bg-purple-500/20 rounded-lg border border-purple-500/30 backdrop-blur-sm">
                <Database className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-purple-400" size={bucket.size * 0.5} />
              </div>
              <div className="absolute -inset-1 bg-purple-500/10 rounded-lg blur-sm"></div>
            </div>
          </div>
        ))}

        <svg className="absolute inset-0 w-full h-full opacity-20">
          <defs>
            <linearGradient id="dataFlow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#a855f7" stopOpacity="0">
                <animate attributeName="offset" values="0;1" dur="2s" repeatCount="indefinite" />
              </stop>
              <stop offset="50%" stopColor="#a855f7" stopOpacity="1">
                <animate attributeName="offset" values="0;1" dur="2s" repeatCount="indefinite" />
              </stop>
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0">
                <animate attributeName="offset" values="0;1" dur="2s" repeatCount="indefinite" />
              </stop>
            </linearGradient>
          </defs>

          <path
            d="M 10,50 Q 30,30 50,50 T 90,50"
            stroke="url(#dataFlow)"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-8 animate-slideDown">
          <Cloud className="text-purple-500 animate-pulse" size={16} />
          <span className="text-gray-300 text-sm font-mono">AWS S3 Solutions</span>
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

        <div className="mt-12 inline-flex items-center space-x-4 bg-white/5 backdrop-blur-sm border border-purple-500/30 rounded-xl px-6 py-4">
          <div className="flex flex-col items-start">
            <span className="text-xs text-gray-400 font-mono mb-1">Storage</span>
            <span className="text-sm text-purple-400 font-mono">5.2 PB</span>
          </div>
          <div className="w-px h-8 bg-white/20"></div>
          <div className="flex flex-col items-start">
            <span className="text-xs text-gray-400 font-mono mb-1">Cost Savings</span>
            <span className="text-sm text-green-400 font-mono">-67%</span>
          </div>
          <div className="w-px h-8 bg-white/20"></div>
          <div className="flex flex-col items-start">
            <span className="text-xs text-gray-400 font-mono mb-1">Transfer</span>
            <div className="flex items-center space-x-2">
              <div className="w-16 h-1.5 bg-purple-900/50 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-purple-500 to-violet-600 transition-all duration-300"
                  style={{ width: `${dataTransfer}%` }}
                />
              </div>
              <span className="text-xs text-purple-400 font-mono">{dataTransfer}%</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>

      <style>{`
        @keyframes bucket-float {
          0%, 100% {
            transform: translateY(0) scale(1);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-20px) scale(1.05);
            opacity: 0.9;
          }
        }
        .animate-bucket-float {
          animation: bucket-float ease-in-out infinite;
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

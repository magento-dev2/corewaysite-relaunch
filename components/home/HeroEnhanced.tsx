"use client";

import { ArrowRight, Play, Zap, Database, Cloud, Code, Globe, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
}

export default function HeroEnhanced() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const initialParticles: Particle[] = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 3 + 1,
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.5,
      opacity: Math.random() * 0.5 + 0.2
    }));
    setParticles(initialParticles);

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const drawMeshGradient = () => {
      const time = Date.now() * 0.0005;

      const gradient = ctx.createRadialGradient(
        canvas.width / 2 + Math.sin(time) * 200,
        canvas.height / 2 + Math.cos(time) * 200,
        0,
        canvas.width / 2,
        canvas.height / 2,
        canvas.width / 2
      );

      gradient.addColorStop(0, 'rgba(168, 85, 247, 0.15)');
      gradient.addColorStop(0.5, 'rgba(139, 92, 246, 0.08)');
      gradient.addColorStop(1, 'rgba(168, 85, 247, 0)');

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const gradient2 = ctx.createRadialGradient(
        canvas.width / 2 - Math.sin(time * 0.8) * 250,
        canvas.height / 2 - Math.cos(time * 0.8) * 250,
        0,
        canvas.width / 2,
        canvas.height / 2,
        canvas.width / 2
      );

      gradient2.addColorStop(0, 'rgba(139, 92, 246, 0.12)');
      gradient2.addColorStop(0.5, 'rgba(168, 85, 247, 0.06)');
      gradient2.addColorStop(1, 'rgba(139, 92, 246, 0)');

      ctx.fillStyle = gradient2;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      requestAnimationFrame(drawMeshGradient);
    };

    drawMeshGradient();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setParticles(prev => prev.map(particle => {
        let newX = particle.x + particle.speedX;
        let newY = particle.y + particle.speedY;

        if (newX < 0 || newX > window.innerWidth) particle.speedX *= -1;
        if (newY < 0 || newY > window.innerHeight) particle.speedY *= -1;

        newX = Math.max(0, Math.min(window.innerWidth, newX));
        newY = Math.max(0, Math.min(window.innerHeight, newY));

        return { ...particle, x: newX, y: newY };
      }));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0E0918] pt-16">
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0" />

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-transparent to-violet-500/5" />

        <div className="absolute inset-0 opacity-30">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="gridPattern" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(168, 85, 247, 0.08)" strokeWidth="1"/>
              </pattern>
              <radialGradient id="gridFade" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="white" stopOpacity="1"/>
                <stop offset="100%" stopColor="white" stopOpacity="0"/>
              </radialGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#gridPattern)" />
            <rect width="100%" height="100%" fill="url(#gridFade)" opacity="0.3" />
          </svg>
        </div>

        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-purple-400"
            style={{
              width: particle.size,
              height: particle.size,
              left: particle.x,
              top: particle.y,
              opacity: particle.opacity,
              filter: 'blur(1px)'
            }}
            animate={{
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}

        <motion.div
          className="absolute w-[800px] h-[800px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, transparent 70%)',
            left: mousePosition.x - 400,
            top: mousePosition.y - 400,
            pointerEvents: 'none'
          }}
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute top-20 right-[10%] w-16 h-16 bg-gradient-to-br from-purple-500/20 to-violet-500/20 rounded-2xl flex items-center justify-center backdrop-blur-md border border-purple-500/30 shadow-lg shadow-purple-500/20"
          animate={{
            y: [0, -25, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Database className="w-8 h-8 text-purple-400" />
        </motion.div>

        <motion.div
          className="absolute top-40 left-[8%] w-14 h-14 bg-gradient-to-br from-violet-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center backdrop-blur-md border border-violet-500/30 shadow-lg shadow-violet-500/20"
          animate={{
            y: [0, 30, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          <Cloud className="w-7 h-7 text-violet-400" />
        </motion.div>

        <motion.div
          className="absolute bottom-40 right-[15%] w-12 h-12 bg-gradient-to-br from-purple-500/20 to-violet-500/20 rounded-2xl flex items-center justify-center backdrop-blur-md border border-purple-500/30 shadow-lg shadow-purple-500/20"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, 0]
          }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <Code className="w-6 h-6 text-purple-400" />
        </motion.div>

        <motion.div
          className="absolute bottom-32 left-[12%] w-14 h-14 bg-gradient-to-br from-violet-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center backdrop-blur-md border border-violet-500/30 shadow-lg shadow-violet-500/20"
          animate={{
            y: [0, 35, 0],
            rotate: [0, -8, 0]
          }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        >
          <Globe className="w-7 h-7 text-violet-400" />
        </motion.div>

        <motion.div
          className="absolute top-1/2 right-[20%] w-16 h-16 bg-gradient-to-br from-purple-500/20 to-violet-500/20 rounded-2xl flex items-center justify-center backdrop-blur-md border border-purple-500/30 shadow-lg shadow-purple-500/20"
          animate={{
            y: [0, -30, 0],
            rotate: [0, 15, 0]
          }}
          transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        >
          <Cpu className="w-8 h-8 text-purple-400" />
        </motion.div>

        <motion.div
          className="absolute top-1/3 left-[25%] w-12 h-12 bg-gradient-to-br from-violet-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center backdrop-blur-md border border-violet-500/30 shadow-lg shadow-violet-500/20"
          animate={{
            y: [0, 20, 0],
            rotate: [0, -12, 0]
          }}
          transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
        >
          <Zap className="w-6 h-6 text-violet-400" />
        </motion.div>

        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
          {[...Array(8)].map((_, i) => (
            <motion.line
              key={i}
              x1={`${10 + i * 12}%`}
              y1="0%"
              x2={`${10 + i * 12}%`}
              y2="100%"
              stroke="url(#lineGradient)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: [0, 0.5, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut"
              }}
            />
          ))}
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#a855f7" stopOpacity="0" />
              <stop offset="50%" stopColor="#a855f7" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        <div className="absolute inset-0 bg-gradient-to-t from-[#0E0918] via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-md border border-purple-500/30 rounded-full px-5 py-2.5 mb-8 shadow-lg shadow-purple-500/10"
        >
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></span>
          <span className="text-gray-200 text-sm font-medium">AI-powered workflow automation</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-6xl md:text-8xl font-bold text-white mb-6 leading-[1.1] tracking-tight"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-violet-200">
            Automate without limits
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Build complex automations <span className="text-purple-400 font-semibold">10x faster</span> without fighting APIs. Connect everything with Coreway Solution.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            className="group relative bg-gradient-to-r from-purple-500 to-violet-600 text-white px-10 py-5 rounded-xl hover:from-purple-600 hover:to-violet-700 transition-all font-semibold text-lg flex items-center space-x-2 shadow-2xl shadow-purple-500/30 overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <span className="relative">Start automating for free</span>
            <ArrowRight className="relative group-hover:translate-x-1 transition-transform" size={20} />
          </motion.button>

          <motion.button
            className="group bg-white/5 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-xl hover:bg-white/10 hover:border-purple-500/50 transition-all font-semibold text-lg flex items-center space-x-2 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Play size={20} className="text-purple-400" />
            <span>Watch demo</span>
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 flex items-center justify-center space-x-8 text-sm text-gray-400"
        >
          <div className="flex items-center space-x-2">
            <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-green-500" />
            </div>
            <span>No credit card required</span>
          </div>
          <div className="hidden sm:block w-1 h-1 rounded-full bg-gray-600" />
          <div className="flex items-center space-x-2">
            <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-purple-500" />
            </div>
            <span>Free forever for core features</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

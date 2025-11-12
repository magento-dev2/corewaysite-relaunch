"use client";

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  life: number;
}

export default function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let particleArray: Particle[] = [];

    const createParticles = () => {
      for (let i = 0; i < 3; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 1.5 + 0.5;
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;

        particleArray.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 0.5,
          size: Math.random() * 2.5 + 1,
          opacity: Math.random() * 0.6 + 0.3,
          life: 1
        });
      }
    };

    const updateParticles = () => {
      particleArray = particleArray.filter(p => p.life > 0);

      particleArray.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.vy += 0.03;
        particle.life -= 0.008;
        particle.opacity = particle.life * 0.8;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y > canvas.height) particle.y = 0;
      });

      if (particleArray.length < 300) {
        createParticles();
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particleArray.forEach(particle => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(168, 85, 247, ${particle.opacity})`;
        ctx.fill();

        ctx.shadowBlur = 8;
        ctx.shadowColor = 'rgba(168, 85, 247, 0.5)';
      });

      ctx.shadowBlur = 0;
    };

    const animate = () => {
      updateParticles();
      drawParticles();
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <>
      {/* Canvas for particles */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-0"
      />

      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(168, 85, 247, 0.3)" strokeWidth="1"/>
              </pattern>
              <radialGradient id="gridFade" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="white" stopOpacity="1"/>
                <stop offset="100%" stopColor="white" stopOpacity="0"/>
              </radialGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            <rect width="100%" height="100%" fill="url(#gridFade)" opacity="0.4" />
          </svg>
        </div>

        {/* Animated lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
          {[...Array(12)].map((_, i) => (
            <motion.line
              key={i}
              x1={`${5 + i * 8}%`}
              y1="0%"
              x2={`${5 + i * 8}%`}
              y2="100%"
              stroke="url(#lineGradient)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: [0, 0.6, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut"
              }}
            />
          ))}
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#a855f7" stopOpacity="0" />
              <stop offset="50%" stopColor="#a855f7" stopOpacity="1" />
              <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </>
  );
}
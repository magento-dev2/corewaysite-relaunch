"use client";

import { ArrowRight, Pause, Play } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  life: number;
}

export default function HeroAccenture() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const animationFrameRef = useRef<number | undefined>(undefined);

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
    let particleId = 0;

    const createParticle = (x: number, y: number) => {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 2 + 1;
      return {
        id: particleId++,
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.5,
        life: 1
      };
    };

    const textParticles = () => {
      const centerX = canvas.width * 0.35;
      const centerY = canvas.height * 0.45;
      const radius = 300;

      for (let i = 0; i < 5; i++) {
        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * radius;
        const x = centerX + Math.cos(angle) * distance;
        const y = centerY + Math.sin(angle) * distance;
        particleArray.push(createParticle(x, y));
      }
    };

    const updateParticles = () => {
      particleArray = particleArray.filter(p => p.life > 0);

      particleArray.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life -= 0.01;
        particle.opacity = particle.life;
        particle.vy += 0.05;
      });

      if (particleArray.length < 500) {
        textParticles();
      }
    };

    const drawParticles = () => {
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particleArray.forEach(particle => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200, 200, 200, ${particle.opacity * 0.6})`;
        ctx.fill();
      });
    };

    const animate = () => {
      if (!isPaused) {
        updateParticles();
        drawParticles();
      }
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isPaused]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black pt-16">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-0"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent z-[1]" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-8 md:px-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <h1 className="text-[clamp(3rem,8vw,7rem)] font-bold leading-[1.1] tracking-tight text-white mb-0">
                TOGETHER WE
              </h1>
              <div className="flex items-center">
                <h1 className="text-[clamp(3rem,8vw,7rem)] font-bold leading-[1.1] tracking-tight text-white">
                  REIN
                </h1>
                <motion.div
                  className="mx-2 md:mx-4"
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <svg
                    width="clamp(40, 6vw, 80)"
                    height="clamp(40, 6vw, 80)"
                    viewBox="0 0 80 80"
                    className="w-[clamp(40px,6vw,80px)] h-[clamp(40px,6vw,80px)]"
                  >
                    <motion.path
                      d="M20 20 L60 40 L20 60 Z"
                      fill="#A855F7"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                    />
                    <motion.path
                      d="M20 20 L60 40 L20 60 Z"
                      fill="none"
                      stroke="#A855F7"
                      strokeWidth="2"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  </svg>
                </motion.div>
                <h1 className="text-[clamp(3rem,8vw,7rem)] font-bold leading-[1.1] tracking-tight text-white">
                  ENTED
                </h1>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12">
              <motion.div
                className="absolute top-0 right-8 w-16 h-1 bg-gradient-to-r from-purple-600 to-purple-400"
                initial={{ width: 0 }}
                animate={{ width: 64 }}
                transition={{ duration: 1, delay: 0.8 }}
              />

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-3xl md:text-4xl font-bold text-white mb-6"
              >
                Scaling AI
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="text-lg md:text-lg text-gray-300 mb-8 leading-relaxed"
              >
                We help clients prioritize business strategy, technology readiness and organizational readiness to get to value faster.
              </motion.p>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="group inline-flex items-center space-x-3 text-white font-semibold text-lg hover:text-purple-400 transition-colors"
                whileHover={{ x: 5 }}
              >
                <span>See what we do</span>
                <div className="w-10 h-10 bg-purple-600 rounded flex items-center justify-center group-hover:bg-purple-500 transition-colors">
                  <ArrowRight size={20} />
                </div>
              </motion.button>

              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-600/20 rounded-full blur-3xl" />
            </div>
          </motion.div>
        </div>
      </div>

      <motion.button
        onClick={() => setIsPaused(!isPaused)}
        className="absolute bottom-12 left-8 md:left-16 z-20 w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-all group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {isPaused ? (
          <Play size={24} className="text-white ml-1" />
        ) : (
          <Pause size={24} className="text-white" />
        )}
      </motion.button>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-[1]" />
    </section>
  );
}

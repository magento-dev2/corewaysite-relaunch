"use client";

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import ContactForm from './ContactForm';
import SplitType from "split-type";
import { gsap } from "gsap";



interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  life: number;
}

export default function ContactHero() {
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

      const textRef = useRef<HTMLHeadingElement>(null);



    useEffect(() => {
    // 🌀 Split text into individual characters
    const split = new SplitType(textRef.current, { types: "chars, words" });

    // ✨ Intro animation
    gsap.from(split.chars, {
      opacity: 0,
      y: 40,
      rotateX: 90,
      stagger: 0.04,
      duration: 1.2,
      ease: "power4.out",
    });

    // 🎯 Cursor-based motion effect
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 20; // rotate limit
      const y = (e.clientY / innerHeight - 0.5) * 20;

      gsap.to(textRef.current, {
        rotationY: x,
        rotationX: -y,
        transformPerspective: 800,
        ease: "power2.out",
        duration: 0.6,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      split.revert(); // cleanup
    };
  }, []);

  return (
    <section className="relative bg-gradient-to-b from-[#0E0918] to-[#1a1325] py-24  pb-16 overflow-hidden min-h-screen flex items-center">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-0"
      />

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-start.">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center space-x-2 bg-purple-500/10 backdrop-blur-sm border border-purple-500/30 rounded-full px-4 py-2 mb-6"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                </span>
                <span className="text-purple-300 text-sm font-medium">Available 24/7</span>
              </motion.div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight" ref={textRef}>
                Get in <span className="bg-gradient-to-r from-purple-400 to-violet-600 bg-clip-text text-purple-500">Touch</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Have a project in mind? We'd love to hear from you. Let's discuss how we can help transform your business with cutting-edge solutions.
              </p>
            </div>

            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-center space-x-4 group cursor-pointer"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email us</p>
                  <a href="mailto:info@corewaysolution.com" className="text-purple-400 hover:text-purple-300 transition-colors font-medium">
                    info@corewaysolution.com
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="flex items-center space-x-4 group cursor-pointer"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Call us</p>
                  <a href="tel:+1234567890" className="text-purple-400 hover:text-purple-300 transition-colors font-medium">
                    +1 (234) 567-890
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="flex items-center space-x-4 group cursor-pointer"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MapPin className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Visit us</p>
                  <p className="text-white font-medium">United States</p>
                </div>
              </motion.div>
            </div>
{/* 
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="pt-6"
            >
              <p className="text-gray-400 text-sm mb-4">Response time</p>
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-violet-600 border-2 border-[#0E0918] flex items-center justify-center text-white text-xs font-bold">
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-300">
                  <span className="text-purple-400 font-semibold">Average 2 hours</span> response time
                </p>
              </div>
            </motion.div> */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

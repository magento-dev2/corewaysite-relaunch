"use client";

import { useEffect, useRef, useState } from 'react';
import { Brain, Sparkles, Zap, ArrowRight } from 'lucide-react';
import { gsap } from "gsap";
import SplitType from "split-type";

interface AIConsultingHeroProps {
  title: string;
  subtitle: string;
  buttons: { label: string; link: string }[];
  title2: string;
}

export default function AIConsultingHero({ title, subtitle, buttons ,title2}: AIConsultingHeroProps) {
  const canvasRef = useRef<HTMLDivElement>(null);
  const [particles, setParticles] = useState<Array<{ x: number; y: number; size: number; delay: number }>>([]);
   const textRef = useRef<HTMLHeadingElement>(null);
  
  
  
    useEffect(() => {
      if (!textRef.current) return;
      // 🌀 Split text into individual characters
      const split = new SplitType(textRef.current, { types: "chars,words" });
  
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

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      delay: Math.random() * 3
    }));
    setParticles(newParticles);

    const icons = canvasRef.current?.querySelectorAll('.floating-icon');
    icons?.forEach((icon, index) => {
      const delay = index * 0.3;
      const duration = 4 + Math.random() * 2;
      (icon as HTMLElement).style.animationDelay = `${delay}s`;
      (icon as HTMLElement).style.animationDuration = `${duration}s`;
    });
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0E0918] via-[#1a1325] to-[#0E0918]">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>

      {particles.map((particle, index) => (
        <div
          key={index}
          className="absolute rounded-full bg-purple-400/30 animate-float-particle"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${5 + Math.random() * 3}s`
          }}
        />
      ))}

      <div ref={canvasRef} className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-icon absolute top-20 left-[12%] text-purple-400/20">
          <Brain size={52} />
        </div>
        <div className="floating-icon absolute top-40 right-[18%] text-violet-400/20">
          <Zap size={44} />
        </div>
        <div className="floating-icon absolute bottom-40 left-[22%] text-purple-400/20">
          <Sparkles size={48} />
        </div>
        <div className="floating-icon absolute bottom-20 right-[20%] text-violet-400/20">
          <Brain size={56} />
        </div>
        <div className="floating-icon absolute top-1/2 left-[8%] text-purple-400/20">
          <Zap size={40} />
        </div>
        <div className="floating-icon absolute top-1/3 right-[10%] text-violet-400/20">
          <Sparkles size={52} />
        </div>
      </div>

      {/* <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-8 animate-slideDown">
          <Brain className="text-purple-500 animate-pulse" size={16} />
          <span className="text-gray-300 text-sm">AI Consulting Services</span>
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
      </div> */}
         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="flex flex-col md:flex-row items-center justify-between w-full">
      
                {/* Left Side Text + Button */}
                <div className="flex-1 flex flex-col justify-start items-center text-center mb-8 md:mb-0 space-y-6">
                  <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight" ref={textRef} >
                 {title}<span className="text-purple-500">{title2}</span>
                  </h1>
                  <p className="text-lg text-gray-300 max-w-md mt-2 leading-relaxed">
                    {subtitle}
                  </p>
      
                  {/* <button className="group bg-purple-500 text-white px-6 py-3 rounded-lg text-center hover:bg-purple-600 transition-all font-medium flex items-center space-x-2 shadow-lg shadow-purple-500/30">
                    <span>{button.label}</span>
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                  </button> */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
      
                {/* Right Side Image */}
                <div className="flex-1 flex justify-center md:justify-end mt-8 md:mt-0 ">
                  <img
                    // src="/assets/herosection/digital-commerce-transformation-removebg-preview.png"
                   src="/assets/herosection/ai-counsting-Photoroom.png"
                    alt="Hero Image"
                    className="w-full max-w-4xl rounded-lg shadow-lg"
                  />
                </div>
      
              </div>
            </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>

      <style>{`
        .floating-icon {
          animation: floatComplex infinite ease-in-out;
        }
        @keyframes floatComplex {
          0%, 100% {
            transform: translateY(0) rotate(0deg) scale(1);
          }
          33% {
            transform: translateY(-15px) rotate(3deg) scale(1.05);
          }
          66% {
            transform: translateY(-8px) rotate(-3deg) scale(0.95);
          }
        }
        @keyframes float-particle {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-30px) translateX(10px);
            opacity: 0.6;
          }
        }
        .animate-float-particle {
          animation: float-particle infinite ease-in-out;
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

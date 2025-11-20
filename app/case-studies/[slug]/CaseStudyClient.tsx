"use client";

import { useEffect, useRef, useState } from "react";
import { Code } from "lucide-react";
import Lenis from '@studio-freight/lenis';

interface CaseStudyClientProps {
  gallery: string[];
  technologies: string[];
}

const portfolioItems = [
  {
    title: "Dashboard Interface",
    description: "Intuitive dashboard design with real-time analytics and candidate tracking. Clean UI that makes complex data easy to understand at a glance.",
    category: "UI/UX Design",
    stats: { users: "10K+", rating: "4.9/5" }
  },
  {
    title: "AI Chat Interface",
    description: "Natural language processing that enables human-like conversations with candidates, understanding context and providing relevant responses instantly.",
    category: "AI Integration",
    stats: { conversations: "500K+", accuracy: "96%" }
  },
  {
    title: "Analytics Dashboard",
    description: "Comprehensive recruitment metrics and insights dashboard showing performance trends, conversion rates, and team productivity in real-time.",
    category: "Data Visualization",
    stats: { metrics: "50+", insights: "Real-time" }
  },
  {
    title: "Mobile Experience",
    description: "Fully responsive mobile application allowing recruiters to manage candidates and interviews on-the-go with native app performance.",
    category: "Mobile Development",
    stats: { mobile: "75%", response: "<500ms" }
  }
];

export default function CaseStudyClient({ gallery, technologies }: CaseStudyClientProps) {
  const [techVisible, setTechVisible] = useState<boolean[]>(new Array(technologies.length).fill(false));
  const techRef = useRef<HTMLDivElement>(null);
  const portfolioRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const handleScroll = () => {
      portfolioRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          const progress = Math.max(0, Math.min(1, (windowHeight - rect.top) / windowHeight));

          const img = ref.querySelector('.portfolio-image') as HTMLElement;
          const content = ref.querySelector('.portfolio-content') as HTMLElement;

          if (img) {
            img.style.transform = `scale(${0.85 + progress * 0.15})`;
            img.style.opacity = `${progress}`;
          }

          if (content) {
            content.style.transform = `translateX(${(1 - progress) * 50}px)`;
            content.style.opacity = `${progress}`;
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    const techObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const tags = entry.target.querySelectorAll('.tech-tag');
          tags.forEach((tag, index) => {
            setTimeout(() => {
              setTechVisible(prev => {
                const newState = [...prev];
                newState[index] = true;
                return newState;
              });
            }, index * 80);
          });
        }
      });
    }, { threshold: 0.1 });

    if (techRef.current) {
      techObserver.observe(techRef.current);
    }

    return () => {
      lenis.destroy();
      window.removeEventListener('scroll', handleScroll);
      techObserver.disconnect();
    };
  }, []);

  return (
    <>
      <div className="my-32 bg-gradient-to-b from-black via-purple-950/20 to-black">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Project Showcase
          </h2>
          <p className="text-xl text-gray-400 text-center mb-20 max-w-3xl mx-auto">
            Explore the key features and design elements that power this recruitment automation system
          </p>

          <div className="space-y-0">
            {gallery.map((image, index) => (
              <div
                key={index}
                ref={(el) => {
                  portfolioRefs.current[index] = el;
                }}
                className="portfolio-item relative min-h-screen flex items-center"
              >
                <div className="w-full">
                  <div className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                  }`}>
                    <div className={`portfolio-content space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                      <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-600 to-purple-800 text-white text-sm font-semibold rounded-full">
                        {portfolioItems[index]?.category || 'Development'}
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        {portfolioItems[index]?.title || `Feature ${index + 1}`}
                      </h3>
                      <p className="text-lg text-gray-300 leading-relaxed">
                        {portfolioItems[index]?.description || 'A comprehensive feature showcasing modern design and functionality.'}
                      </p>

                      <div className="grid grid-cols-2 gap-6 pt-4">
                        {portfolioItems[index]?.stats && Object.entries(portfolioItems[index].stats).map(([key, value], i) => (
                          <div key={i} className="space-y-2">
                            <p className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent" style={{ fontFamily: 'Poppins, sans-serif' }}>
                              {value}
                            </p>
                            <p className="text-sm text-gray-500 uppercase tracking-wider">{key}</p>
                          </div>
                        ))}
                      </div>

                      <div className="flex gap-4 pt-4">
                        <div className="w-12 h-1 bg-gradient-to-r from-purple-600 to-purple-800 rounded-full" />
                        <div className="w-12 h-1 bg-purple-900/30 rounded-full" />
                        <div className="w-12 h-1 bg-purple-900/30 rounded-full" />
                      </div>
                    </div>

                    <div className={`portfolio-image-wrapper ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                      <div className="portfolio-image relative rounded-2xl overflow-hidden shadow-2xl border border-purple-800/30" style={{ opacity: 0, transform: 'scale(0.85)' }}>
                        <div className="aspect-[4/3] relative">
                          <img
                            src={image}
                            alt={portfolioItems[index]?.title || `Project screenshot ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 via-transparent to-transparent" />
                        </div>
                        <div className="absolute top-6 right-6 bg-black/80 backdrop-blur-sm px-4 py-2 rounded-full border border-purple-500/30">
                          <span className="text-sm font-semibold text-white">{index + 1} / {gallery.length}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-purple-950/30 to-black border border-purple-800/30 rounded-3xl p-10 mb-20 max-w-7xl mx-auto" ref={techRef}>
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg flex items-center justify-center">
            <Code className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Technologies Used
          </h2>
        </div>
        <div className="flex flex-wrap gap-3">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className={`tech-tag px-6 py-3 bg-black/50 backdrop-blur-sm border-2 border-purple-700/30 text-white rounded-full font-semibold hover:border-purple-500 hover:bg-purple-900/30 hover:scale-110 transition-all duration-500 ${
                techVisible[index] ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}

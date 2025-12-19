"use client";

import { BarChart3, TrendingUp, Sparkles, Eye, Brain } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function AnalyticsHero() {
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (statsRef.current) {
      const children = statsRef.current.children;
      Array.from(children).forEach((child) => {
        observer.observe(child);
      });
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-[#0E0918] via-[#1a1325] to-[#0E0918]">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/3 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAyKSIvPjwvZz48L3N2Zz4=')] opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-40 ">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 text-center flex flex-col items-center">
            <div className="inline-flex items-center justify-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 animate-fade-in">
              <Sparkles className="text-purple-500" size={16} />
              <span className="text-gray-300 text-sm">AI-Powered Analytics</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight animate-fade-in-up">
            Smart Data  <span className="text-purple-500">  Real Impact </span> 
            </h1>

            <p className="text-lg text-gray-300 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Transform raw data into actionable intelligence with advanced analytics, real-time dashboards, and predictive insights that drive business growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
              <Link href="/" className="cursor-pointer">
                <button className="group cursor-pointer bg-gradient-to-r from-purple-500 to-violet-600 text-white px-8 py-4 rounded-lg hover:from-purple-600 hover:to-violet-700 transition-all font-medium text-lg flex items-center justify-center space-x-2 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 hover:scale-105 hover:-translate-y-1">
                  <span>Get Started</span>
                  <TrendingUp className="group-hover:scale-110 transition-transform" size={20} />
                </button>
              </Link>

              <Link href="/case-studies" className="cursor-pointer">
                <button className="group cursor-pointer bg-white/5 backdrop-blur-sm border border-white/10 text-white px-8 py-4 rounded-lg hover:bg-white/10 hover:border-purple-500/50 transition-all font-medium text-lg hover:scale-105">
                  Watch Demo
                </button>
              </Link>
            </div>

            <div
              ref={statsRef}
              className="grid grid-cols-3 gap-4 pt-6 justify-center max-w-xl"
            >
              <div className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-4 text-center hover:border-purple-500/50 transition-all hover:scale-105 opacity-0">
                <div className="text-2xl font-bold text-white mb-1">99.9%</div>
                <div className="text-gray-400 text-xs">Accuracy</div>
              </div>
              <div className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-4 text-center hover:border-purple-500/50 transition-all hover:scale-105 opacity-0">
                <div className="text-2xl font-bold text-white mb-1">Real-Time</div>
                <div className="text-gray-400 text-xs">Updates</div>
              </div>
              <div className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-4 text-center hover:border-purple-500/50 transition-all hover:scale-105 opacity-0">
                <div className="text-2xl font-bold text-white mb-1">1B+</div>
                <div className="text-gray-400 text-xs">Data Points</div>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in-right">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-violet-500/20 rounded-3xl blur-3xl animate-pulse-slow"></div>

              <div className="relative bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 hover:border-purple-500/30 transition-all duration-500">
                <div className="space-y-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500/30 to-violet-500/30 rounded-xl flex items-center justify-center border border-purple-500/40">
                        <BarChart3 className="w-6 h-6 text-purple-400" strokeWidth={2} />
                      </div>
                      <div>
                        <div className="text-white font-semibold">Live Analytics</div>
                        <div className="text-gray-400 text-xs">Real-time monitoring</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-gray-300 text-xs">Active</span>
                    </div>
                  </div>

                  <div className="bg-[#1a1325] rounded-2xl p-6 border border-white/10">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-gray-300 text-sm">Revenue Growth</span>
                      <div className="flex items-center space-x-1 text-green-400">
                        <TrendingUp size={16} />
                        <span className="text-sm font-bold">+24.5%</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      {[85, 92, 78, 95, 88].map((value, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <div className="text-gray-400 text-xs w-8">Q{index + 1}</div>
                          <div className="flex-1 h-2 bg-white/5 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-purple-500 to-violet-500 rounded-full animate-expand-width"
                              style={{
                                width: `${value}%`,
                                animationDelay: `${index * 0.1}s`
                              }}
                            ></div>
                          </div>
                          <div className="text-white text-xs font-semibold w-10">{value}%</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-purple-500/20 to-transparent border border-purple-500/30 rounded-xl p-4 hover:from-purple-500/30 transition-all">
                      <Eye className="text-purple-400 mb-2" size={20} />
                      <div className="text-2xl font-bold text-white mb-1">2.4M</div>
                      <div className="text-gray-400 text-xs">Total Views</div>
                    </div>
                    <div className="bg-gradient-to-br from-violet-500/20 to-transparent border border-violet-500/30 rounded-xl p-4 hover:from-violet-500/30 transition-all">
                      <Brain className="text-violet-400 mb-2" size={20} />
                      <div className="text-2xl font-bold text-white mb-1">AI Powered</div>
                      <div className="text-gray-400 text-xs">Smart Insights</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.05); }
        }

        @keyframes expand-width {
          from { width: 0; }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-fade-in-right {
          animation: fade-in-right 1s ease-out forwards;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-expand-width {
          animation: expand-width 1.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
}

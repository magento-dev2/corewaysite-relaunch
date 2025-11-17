"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ArrowUp, ArrowDown } from "lucide-react";

export default function CaseStudyHero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const infoBoxRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);
  
  const [counts, setCounts] = useState({
    users: 0,
    orders: 0,
    loadTime: 0
  });

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Image reveal with scale
      if (imageRef.current) {
        tl.fromTo(
          imageRef.current,
          { 
            opacity: 0,
            scale: 1.1,
          },
          {
            opacity: 1,
            scale: 1,
            duration: 1.4,
            ease: "power3.out",
          }
        );
      }

      // Info box slides in from left
      if (infoBoxRef.current) {
        tl.fromTo(
          infoBoxRef.current,
          { opacity: 0, x: -80, scale: 0.95 },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.8"
        );
      }

      // Metrics section fades in
      if (metricsRef.current) {
        tl.fromTo(
          metricsRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.4"
        );
      }

      // Animate counters
      tl.to(counts, {
        users: 147818,
        duration: 2.5,
        ease: "power2.out",
        onUpdate: function() {
          setCounts({
            users: Math.floor(this.targets()[0].users),
            orders: Math.floor(this.targets()[0].orders),
            loadTime: parseFloat(this.targets()[0].loadTime.toFixed(2))
          });
        }
      }, "-=0.5");

      tl.to(counts, {
        orders: 2629,
        duration: 2.5,
        ease: "power2.out",
        onUpdate: function() {
          setCounts(prev => ({
            ...prev,
            orders: Math.floor(this.targets()[0].orders)
          }));
        }
      }, "-=2.3");

      tl.to(counts, {
        loadTime: 1.28,
        duration: 2,
        ease: "power2.out",
        onUpdate: function() {
          setCounts(prev => ({
            ...prev,
            loadTime: parseFloat(this.targets()[0].loadTime.toFixed(2))
          }));
        }
      }, "-=2");

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative mt-[70px]  bg-white">
      {/* Main Hero Image with Info Overlay */}
      <div className="relative max-w-[1200px] m-auto w-full">
        <div 
          ref={imageRef}
          className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden"
        >
          <img
            src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&h=1080&fit=crop&q=80"
            alt="Hamleys Store Interior"
            className="w-400px pl-[200px] h-400px object-cover"
          />
          
          {/* Dark gradient overlay */}
          {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div> */}

          {/* Info Box - Bottom Left Overlay */}
          <div
            ref={infoBoxRef}
            className="absolute top-20 left-6 md:left-12 lg:left-16 bg-white rounded-lg shadow-2xl p-6 md:p-8 max-w-xs md:max-w-sm"
          >
            {/* Logo/Header */}
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-2xl">H</span>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Europe</p>
                <h3 className="text-2xl font-bold text-gray-900">Hamleys</h3>
                <p className="text-sm text-gray-600 italic mt-1">The Finest Toys in the World</p>
              </div>
            </div>
            
            <div className="space-y-4">
              {/* Solution */}
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1 font-semibold">SOLUTION</p>
                <p className="text-gray-900 font-semibold">B2C | Digital Marketing</p>
              </div>
              
              {/* Services */}
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-2 font-semibold">SERVICES</p>
                <div className="space-y-1">
                  <p className="text-sm text-gray-700">Consulting & UX Design</p>
                  <p className="text-sm text-gray-700">Development & Integration</p>
                  <p className="text-sm text-gray-700">Growth Support</p>
                </div>
              </div>
              
              {/* Industry */}
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1 font-semibold">INDUSTRY</p>
                <p className="text-gray-900 font-semibold">Kids & Education</p>
              </div>
              
              {/* Website Link */}
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1 font-semibold">WEBSITE</p>
                <a 
                  href="#" 
                  className="text-red-600 hover:text-red-700 font-semibold transition-colors inline-flex items-center gap-1"
                >
                  Hamleys
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
           <div className="max-w-7xl mx-auto px-6 pl-[200px] mt-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            
            {/* Metric 1 - New Users */}
            <div className="text-center group">
              <div className="inline-flex items-center justify-center mb-4">
                <div className="p-3 bg-emerald-50 rounded-full">
                  <ArrowUp className="w-6 h-6 text-emerald-600" />
                </div>
              </div>
              <div className="text-5xl md:text-6xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                {counts.users.toLocaleString()}
              </div>
              <p className="text-gray-600 font-medium text-lg">New Users</p>
            </div>

            {/* Metric 2 - New Orders */}
            <div className="text-center group">
              <div className="inline-flex items-center justify-center mb-4">
                <div className="p-3 bg-emerald-50 rounded-full">
                  <ArrowUp className="w-6 h-6 text-emerald-600" />
                </div>
              </div>
              <div className="text-5xl md:text-6xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                {counts.orders.toLocaleString()}
              </div>
              <p className="text-gray-600 font-medium text-lg">New Orders</p>
            </div>

            {/* Metric 3 - Page Load Time */}
            <div className="text-center group">
              <div className="inline-flex items-center justify-center mb-4">
                <div className="p-3 bg-red-50 rounded-full">
                  <ArrowDown className="w-6 h-6 text-red-600" />
                </div>
              </div>
              <div className="text-5xl md:text-6xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                {counts.loadTime.toFixed(2)}s
              </div>
              <p className="text-gray-600 font-medium text-lg">Page Load Time</p>
            </div>

          </div>
        </div>
        </div>
      </div>

      {/* Metrics Section */}
      
    </section>
  );
}
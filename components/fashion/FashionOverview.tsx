"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Shirt, TrendingUp, Users, Award } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface FashionOverviewProps {
  title: string;
  content: string;
  image: string;
}

export default function FashionOverview({
  title,
  content,
  image,
}: FashionOverviewProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });

      tl.fromTo(
        imageRef.current,
        { opacity: 0, x: -80 },
        { opacity: 1, x: 0, duration: 1 }
      ).fromTo(
        contentRef.current,
        { opacity: 0, x: 80 },
        { opacity: 1, x: 0, duration: 1 },
        "-=0.7"
      );

      gsap.fromTo(
        cardsRef.current?.children || [],
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.15,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-[#1a1325] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-40 left-20 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div ref={imageRef} className="relative order-2 lg:order-1">
            <div className="absolute -inset-4 bg-gradient-to-br from-purple-500/20 to-violet-500/20 rounded-3xl blur-2xl"></div>
            <div className="relative">
              <img
                src={image}
                alt={title}
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl border border-white/10"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1325]/80 to-transparent rounded-2xl"></div>
            </div>
          </div>

          <div ref={contentRef} className="order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {title}
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">{content}</p>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-purple-500/20 border border-purple-500/50 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                </div>
                <p className="text-gray-400">Personalized shopping experiences with AI-powered recommendations</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-violet-500/20 border border-violet-500/50 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-violet-400"></div>
                </div>
                <p className="text-gray-400">Virtual try-on technology reducing returns and increasing satisfaction</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-purple-500/20 border border-purple-500/50 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                </div>
                <p className="text-gray-400">Real-time trend analytics and inventory optimization</p>
              </div>
            </div>
          </div>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="group relative bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20 rounded-2xl p-6 hover:border-purple-500/40 hover:shadow-xl hover:shadow-purple-500/10 transition-all">
            <Shirt className="w-10 h-10 text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-bold text-white mb-2">45%</h3>
            <p className="text-gray-400 text-sm">Fewer Returns with Virtual Try-On</p>
          </div>

          <div className="group relative bg-gradient-to-br from-violet-500/10 to-transparent border border-violet-500/20 rounded-2xl p-6 hover:border-violet-500/40 hover:shadow-xl hover:shadow-violet-500/10 transition-all">
            <TrendingUp className="w-10 h-10 text-violet-400 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-bold text-white mb-2">70%</h3>
            <p className="text-gray-400 text-sm">Better Inventory Accuracy</p>
          </div>

          <div className="group relative bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20 rounded-2xl p-6 hover:border-purple-500/40 hover:shadow-xl hover:shadow-purple-500/10 transition-all">
            <Users className="w-10 h-10 text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-bold text-white mb-2">80%</h3>
            <p className="text-gray-400 text-sm">Higher Customer Engagement</p>
          </div>

          <div className="group relative bg-gradient-to-br from-violet-500/10 to-transparent border border-violet-500/20 rounded-2xl p-6 hover:border-violet-500/40 hover:shadow-xl hover:shadow-violet-500/10 transition-all">
            <Award className="w-10 h-10 text-violet-400 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-bold text-white mb-2">35%</h3>
            <p className="text-gray-400 text-sm">Conversion Rate Increase</p>
          </div>
        </div>
      </div>
    </section>
  );
}

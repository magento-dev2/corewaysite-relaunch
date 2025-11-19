"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface UseCase {
  id: string;
  title: string;
  description: string;
  image: string;
}

interface TechUseCasesProps {
  title: string;
  cases: UseCase[];
}

export default function TechUseCases({ title, cases }: TechUseCasesProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gridRef.current?.children || [];
      Array.from(items).forEach((item, index) => {
        gsap.fromTo(
          item,
          { opacity: 0, x: index % 2 === 0 ? -40 : 40 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-[#1a1325] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-300">
            Real-world applications and success stories
          </p>
        </div>

        <div ref={gridRef} className="grid md:grid-cols-2 gap-8">
          {cases.map((useCase) => (
            <div
              key={useCase.id}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/30 transition-all"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={useCase.image}
                  alt={useCase.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1325] via-[#1a1325]/50 to-transparent"></div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {useCase.title}
                </h3>
                <p className="text-gray-400 mb-6">{useCase.description}</p>

                <div className="flex items-center text-purple-400 font-semibold group-hover:gap-2 transition-all">
                  <span>Learn more</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -mr-20 -mt-20"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

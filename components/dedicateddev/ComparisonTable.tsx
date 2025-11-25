"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check, X, Star, Award } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const comparisonData = [
  {
    feature: "Hiring Time",
    coreway: "2-3 Days",
    others: "4-8 Weeks",
    highlight: true
  },
  {
    feature: "Vetting Process",
    coreway: "Top 1% Talent Only",
    others: "Varies",
    highlight: false
  },
  {
    feature: "Replacement Guarantee",
    coreway: "Yes, Free & Fast",
    others: "Limited or None",
    highlight: true
  },
  {
    feature: "Time Zone Coverage",
    coreway: "Full Overlap",
    others: "Partial or None",
    highlight: false
  },
  {
    feature: "Communication",
    coreway: "Daily Reports & Direct Access",
    others: "Weekly Updates",
    highlight: false
  },
  {
    feature: "Technology Expertise",
    coreway: "50+ Technologies",
    others: "Limited Stack",
    highlight: true
  },
  {
    feature: "Onboarding Support",
    coreway: "Dedicated Manager",
    others: "Self-Service",
    highlight: false
  },
  {
    feature: "Contract Flexibility",
    coreway: "No Lock-in Period",
    others: "6-12 Month Minimum",
    highlight: true
  },
  {
    feature: "Cost Transparency",
    coreway: "No Hidden Fees",
    others: "Additional Charges Apply",
    highlight: false
  },
  {
    feature: "24/7 Support",
    coreway: "Available",
    others: "Business Hours Only",
    highlight: false
  }
];

export default function ComparisonTable() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".comparison-header", {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: ".comparison-header",
          start: "top 80%",
        }
      });

      const rows = gsap.utils.toArray<HTMLElement>('.comparison-row');
      rows.forEach((row, index) => {
        gsap.from(row, {
          opacity: 0,
          x: -50,
          scrollTrigger: {
            trigger: row,
            start: "top 90%",
            end: "top 70%",
            scrub: 1,
          }
        });
      });

      gsap.to(".floating-badge", {
        y: -10,
        duration: 2,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-[#1a0f2b] to-[#0E0918] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.05),transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="comparison-header text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-6">
            <Award className="text-purple-500" size={16} />
            <span className="text-sm font-medium text-gray-300">Comparison</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why Choose <span className="text-purple-500">Coreway Developers</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how we compare to other development agencies and freelance platforms
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left p-6 text-gray-400 font-semibold text-sm uppercase tracking-wider w-1/3">
                    Features
                  </th>
                  <th className="text-center p-6 w-1/3">
                    <div className="inline-flex flex-col items-center">
                      <div className="floating-badge mb-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-violet-600 rounded-full shadow-lg shadow-purple-500/30">
                        <Star className="w-5 h-5 text-white inline mr-2" fill="currentColor" />
                        <span className="text-white font-bold text-sm">Coreway</span>
                      </div>
                    </div>
                  </th>
                  <th className="text-center p-6 text-gray-400 font-semibold text-sm uppercase tracking-wider w-1/3">
                    Others
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr
                    key={index}
                    className={`comparison-row border-b border-white/5 transition-all duration-300 hover:bg-white/5 ${
                      row.highlight ? 'bg-purple-500/5' : ''
                    }`}
                  >
                    <td className="p-6">
                      <div className="flex items-center gap-3">
                        {row.highlight && (
                          <div className="w-1 h-8 bg-purple-500 rounded-full"></div>
                        )}
                        <span className="text-white font-medium">{row.feature}</span>
                      </div>
                    </td>
                    <td className="p-6">
                      <div className="flex items-center justify-center gap-3">
                        <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <Check className="w-5 h-5 text-green-400" strokeWidth={3} />
                        </div>
                        <span className="text-green-400 font-semibold text-center">{row.coreway}</span>
                      </div>
                    </td>
                    <td className="p-6">
                      <div className="flex items-center justify-center gap-3">
                        <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <X className="w-5 h-5 text-red-400" strokeWidth={3} />
                        </div>
                        <span className="text-red-400 font-medium text-center">{row.others}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 text-center hover:border-purple-500/50 transition-all">
            <div className="text-4xl font-bold text-purple-500 mb-2">500+</div>
            <div className="text-gray-400">Expert Developers</div>
          </div>
          <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 text-center hover:border-purple-500/50 transition-all">
            <div className="text-4xl font-bold text-purple-500 mb-2">98%</div>
            <div className="text-gray-400">Client Satisfaction</div>
          </div>
          <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 text-center hover:border-purple-500/50 transition-all">
            <div className="text-4xl font-bold text-purple-500 mb-2">2-3 Days</div>
            <div className="text-gray-400">Average Hiring Time</div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Plus, Minus, HelpCircle, Sparkles } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  badge?: string;
  title?: string;
  description?: string;
  faqs: FAQItem[];
  columns?: 1 | 2;
  showContactCTA?: boolean;
  contactText?: string;
  contactButtonText?: string;
}

export default function FAQ({
  badge = "Frequently Asked Questions",
  title = "Got Questions? We've Got Answers",
  description = "Find answers to common questions about our services and solutions",
  faqs,
  columns = 1,
  showContactCTA = true,
  contactText = "Still have questions?",
  contactButtonText = "Contact Support"
}: FAQProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".faq-header", {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: ".faq-header",
          start: "top 80%",
        }
      });

      const faqItems = gsap.utils.toArray<HTMLElement>('.faq-item');
      faqItems.forEach((item, index) => {
        gsap.from(item, {
          opacity: 0,
          x: index % 2 === 0 ? -50 : 50,
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
            end: "top 70%",
            scrub: 1,
          }
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-[#0E0918] via-[#1a1325] to-[#0E0918] relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAyKSIvPjwvZz48L3N2Zz4=')] opacity-20"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="faq-header text-center mb-16">
          {badge && (
            <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-6">
              <HelpCircle className="text-purple-500" size={16} />
              <span className="text-gray-300 text-sm">{badge}</span>
            </div>
          )}

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {title.split(' ').map((word, index) => {
              const shouldHighlight = word.includes('Questions') || word.includes('Answers');
              return shouldHighlight ? (
                <span key={index} className="text-purple-500"> {word}</span>
              ) : (
                <span key={index}> {word}</span>
              );
            })}
          </h2>

          {description && (
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              {description}
            </p>
          )}
        </div>

        <div className={`grid ${columns === 2 ? 'md:grid-cols-2' : 'grid-cols-1'} gap-6 mb-12`}>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className="faq-item ">
                <div className={` group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen ? 'border-purple-500/50 shadow-lg shadow-purple-500/20' : 'hover:border-purple-500/30'
                }`}>
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full cursor-pointer text-left p-6 flex items-start justify-between gap-4 transition-all"
                  >
                    <div className="flex items-start gap-4 flex-1">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                        isOpen
                          ? 'bg-gradient-to-br from-purple-500/30 to-violet-500/30 border border-purple-500/50'
                          : 'bg-white/5 border border-white/10 group-hover:bg-purple-500/20 group-hover:border-purple-500/30'
                      }`}>
                        <span className={`font-bold text-sm transition-colors ${
                          isOpen ? 'text-purple-400' : 'text-gray-400 group-hover:text-purple-400'
                        }`}>
                          Q{index + 1}
                        </span>
                      </div>

                      <h3 className={`text-lg font-semibold leading-relaxed transition-colors ${
                        isOpen ? 'text-purple-300' : 'text-white group-hover:text-purple-300'
                      }`}>
                        {faq.question}
                      </h3>
                    </div>

                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      isOpen
                        ? 'bg-purple-500 rotate-180'
                        : 'bg-white/10 group-hover:bg-purple-500/20'
                    }`}>
                      {isOpen ? (
                        <Minus className="w-4 h-4 text-white" strokeWidth={3} />
                      ) : (
                        <Plus className="w-4 h-4 text-gray-400 group-hover:text-purple-400" strokeWidth={3} />
                      )}
                    </div>
                  </button>

                  <div
                    className={`transition-all duration-300 ease-in-out ${
                      isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6 pb-6 pl-20">
                      <div className="border-t border-white/10 pt-4">
                        <p className="text-gray-400 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* {showContactCTA && (
          <div className="bg-gradient-to-br from-purple-500/10 to-violet-500/10 border border-purple-500/30 rounded-3xl p-8 text-center backdrop-blur-xl">
            <div className="flex items-center justify-center mb-4">
              <Sparkles className="text-purple-500 mr-2" size={24} />
              <h3 className="text-2xl font-bold text-white">{contactText}</h3>
            </div>
            <p className="text-gray-300 mb-6">
              Our team is here to help you with any questions or concerns
            </p>
            <button className="group bg-gradient-to-r from-purple-500 to-violet-600 text-white px-8 py-4 rounded-lg hover:from-purple-600 hover:to-violet-700 transition-all font-medium text-lg shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 hover:scale-105">
              {contactButtonText}
            </button>
          </div>
        )} */}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
    </section>
  );
}

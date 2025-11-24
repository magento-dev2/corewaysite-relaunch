"use client";

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "What services do you offer?",
    answer: "We offer a wide range of services including AI consulting, digital commerce transformation, product development for startups, IoT application development, SaaS infrastructure & DevOps, and custom API & systems integration."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on scope and complexity. A simple integration might take 2-4 weeks, while a full product development project could take 3-6 months. We'll provide a detailed timeline during our initial consultation."
  },
  {
    question: "Do you work with startups?",
    answer: "Yes! We specialize in helping startups bring their ideas to life. We offer flexible engagement models and can work within startup budgets while delivering enterprise-quality solutions."
  },
  {
    question: "What is your development process?",
    answer: "We follow an agile methodology with regular sprints, continuous communication, and iterative delivery. You'll be involved throughout the process with regular demos and feedback sessions."
  },
  {
    question: "Do you provide ongoing support?",
    answer: "Absolutely. We offer various support and maintenance packages to ensure your solution continues to run smoothly after launch. This includes bug fixes, updates, and feature enhancements."
  },
  {
    question: "How do you handle project pricing?",
    answer: "We offer flexible pricing models including fixed-price projects, time and materials, and dedicated team engagements. After understanding your requirements, we'll provide a detailed proposal with transparent pricing."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-[#1a1325] to-[#0E0918]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-300">
            Quick answers to common questions about our services
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:border-purple-500/50 transition-all"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <h3 className="text-lg font-semibold text-white pr-4">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`text-purple-400 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  size={24}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

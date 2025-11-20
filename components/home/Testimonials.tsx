"use client";

import { useEffect, useState } from 'react';
import { Quote } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Testimonials() {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: t('testimonials.items.0.quote'),
      author: t('testimonials.items.0.author'),
      role: t('testimonials.items.0.role'),
      company: t('testimonials.items.0.company'),
    },
    {
      quote: t('testimonials.items.1.quote'),
      author: t('testimonials.items.1.author'),
      role: t('testimonials.items.1.role'),
      company: t('testimonials.items.1.company'),
    },
    {
      quote: t('testimonials.items.2.quote'),
      author: t('testimonials.items.2.author'),
      role: t('testimonials.items.2.role'),
      company: t('testimonials.items.2.company'),
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-gradient-to-b from-[#1a1325] to-[#0E0918] overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('testimonials.title')}
          </h2>
        </div>

        <div className="relative">
          <div className="relative min-h-[300px]">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 ${
                  index === currentIndex
                    ? 'opacity-100 translate-x-0'
                    : index < currentIndex
                    ? 'opacity-0 -translate-x-full'
                    : 'opacity-0 translate-x-full'
                }`}
              >
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-12 text-center">
                  <Quote className="text-purple-500 mx-auto mb-6" size={48} />

                  <blockquote className="text-2xl md:text-3xl text-white font-medium mb-8 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>

                  <div>
                    <p className="text-white font-semibold text-lg">{testimonial.author}</p>
                    <p className="text-gray-400">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

       
        </div>
      </div>
         <div className="flex justify-center space-x-2 mt-20">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-purple-500 w-8'
                    : 'bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>
    </section>
  );
}

"use client";

import { useEffect, useState } from 'react';
import { Quote, Play } from 'lucide-react';
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
      image: "/assets/review/ty-smith.png",
      video: "https://www.youtube.com/watch?v=VIDEO_ID_1"
    },
    {
      quote: t('testimonials.items.1.quote'),
      author: t('testimonials.items.1.author'),
      role: t('testimonials.items.1.role'),
      company: t('testimonials.items.1.company'),
        image: "/assets/review/Alex-Bestall.png",
      video: "https://www.youtube.com/watch?v=VIDEO_ID_2"
    },
    {
      quote: t('testimonials.items.2.quote'),
      author: t('testimonials.items.2.author'),
      role: t('testimonials.items.2.role'),
      company: t('testimonials.items.2.company'),
      image: "/assets/review/randy.png",
      video: "https://www.youtube.com/watch?v=VIDEO_ID_3"
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % testimonials.length);
    }, 50000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-24 min-h-screen bg-gradient-to-b from-[#1a1325] to-[#0E0918] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('testimonials.title')}
          </h2>
        </div>

        {/* ✅ FIXED HEIGHT WRAPPER */}
        <div className="relative ">

          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`absolute w-full transition-all duration-700 ease-in-out ${
                index === currentIndex
                  ? 'opacity-100 translate-x-0 scale-100 z-10'
                  : 'opacity-0 translate-x-10 scale-95 z-0 pointer-events-none'
              }`}
            >
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 sm:p-10 text-center shadow-2xl">

                {/* Avatar */}
               
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4  overflow-hidden shadow-xl mx-auto">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                     <p className="text-purple-500 font-bold text-lg">
                    {testimonial.author}
                  </p>
                  
              

                <Quote className="text-purple-500 mx-auto mb-4" size={44} />

                <blockquote className="text-lg  text-gray-300  font-medium mb-6 leading-relaxed px-2">
                  {testimonial.quote}
                </blockquote>

                {/* <div>
                  <p className="text-purple-500 font-bold text-lg">
                    {testimonial.author}
                  </p>
                  <p className="text-purple-400 text-sm">
                    {testimonial.role} 

                  </p>
                </div> */}

              </div>
            </div>
          ))}

        </div>

        {/* ✅ DOT NAV FIXED */}
        <div className="flex absolute bottom-30 right-0 left-0 justify-center ">
          <div className="flex items-center gap-4 bg-white/5 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 shadow-lg">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-500 rounded-full ${
                  index === currentIndex
                    ? 'w-12 h-3 bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg shadow-purple-500/50'
                    : 'w-3 h-3 bg-white/40 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

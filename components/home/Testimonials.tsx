"use client";

import { useState } from 'react';
import { Quote, Play, X, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Testimonials() {
  const { t } = useLanguage();
  const [activeVideo, setActiveVideo] = useState<number | null>(null);
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set());

  const toggleExpanded = (index: number) => {
    const newExpanded = new Set(expandedCards);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedCards(newExpanded);
  };

  const testimonials = [
    {
      quote: t('testimonials.items.0.quote'),
      author: t('testimonials.items.0.author'),
      role: t('testimonials.items.0.role'),
      company: t('testimonials.items.0.company'),
      image: "/assets/review/ty-smith.png",
      video: "https://www.youtube.com/watch?v=B6zVzWU95Sw",
      rating: 5,
      location: "USA"
    },
    {
      quote: t('testimonials.items.1.quote'),
      author: t('testimonials.items.1.author'),
      role: t('testimonials.items.1.role'),
      company: t('testimonials.items.1.company'),
      image: "/assets/review/Alex-Bestall.png",
      video: "https://www.youtube.com/watch?v=QyhwSYhX09s",
      rating: 5,
      location: "UK"
    },
    {
      quote: t('testimonials.items.2.quote'),
      author: t('testimonials.items.2.author'),
      role: t('testimonials.items.2.role'),
      company: t('testimonials.items.2.company'),
      image: "/assets/review/randy.png",
      video: "https://www.youtube.com/watch?v=H14bBuluwB8",
      rating: 5,
      location: "Canada"
    },
  ];

  const getYouTubeID = (url: string) => {
    const regExp = /v=([a-zA-Z0-9_-]{11})/;
    const match = url.match(regExp);
    return match ? match[1] : null;
  };

  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-b from-[#0E0918] via-[#1a0f2e] to-[#0E0918]">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-fuchsia-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6"
          >
            <div className="px-5 flex justify-center items-center py-2 bg-gradient-to-r from-purple-500/20 to-fuchsia-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-semibold backdrop-blur-sm">
              <Quote className="w-5 h-5 mr-2" />
              Client Success Stories
            </div>
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-fuchsia-200 bg-clip-text text-transparent leading-tight">
            {t('testimonials.title')}
          </h2>

          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Hear from clients who've transformed their businesses with our solutions
          </p>
        </motion.div>

        {/* Testimonials Grid - 3 Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="group relative"
            >
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-fuchsia-600 opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500 rounded-3xl" />

              {/* Card */}
              <div className="relative h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden group-hover:border-white/20 transition-all duration-500 flex flex-col">
                {/* Image with Play Button */}
                <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-purple-900/20 to-fuchsia-900/20">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-full h-full object-cover"
                  />

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-center justify-center group-hover:bg-black/50 transition-all duration-300">
                    <motion.button
                      onClick={() => setActiveVideo(index)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-20 h-20 bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-purple-500/50 transition-all duration-300"
                    >
                      <Play size={32} className="fill-white text-white ml-1" />
                    </motion.button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  {/* Quote Icon */}
                  <Quote size={40} className="text-purple-400/40 mb-4" />

                  {/* Quote Text */}
                  <div className="flex-1 mb-4">
                    <blockquote className={`text-gray-200 text-base leading-relaxed ${expandedCards.has(index) ? '' : 'line-clamp-4'
                      }`}>
                      <span className="font-medium">"</span>
                      {testimonial.quote}
                      <span className="font-medium">"</span>
                    </blockquote>

                    {/* Read More Button */}
                    {testimonial.quote.length > 150 && (
                      <motion.button
                        onClick={() => toggleExpanded(index)}
                        whileHover={{ x: 5 }}
                        className="mt-3 text-purple-400 hover:text-purple-300 text-sm font-semibold flex items-center gap-2 group transition-colors"
                      >
                        <span>{expandedCards.has(index) ? 'Read Less' : 'Read More'}</span>
                        <motion.span
                          animate={{ rotate: expandedCards.has(index) ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          ▼
                        </motion.span>
                      </motion.button>
                    )}
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent mb-4" />

                  {/* Author Info */}
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-white font-bold text-lg">
                        {testimonial.author}
                      </h3>
                      <p className="text-gray-400 text-sm mt-1">
                        ( {testimonial.location} )
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Popup Modal */}
      <AnimatePresence>
        {activeVideo !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={() => setActiveVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute -top-12 right-0 w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center transition-all duration-300 group"
              >
                <X className="w-5 h-5 text-white group-hover:rotate-90 transition-transform duration-300" />
              </button>

              {/* Video Container */}
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-black">
                <iframe
                  src={`https://www.youtube.com/embed/${getYouTubeID(testimonials[activeVideo].video)}?autoplay=1`}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Video Info */}
              <div className="mt-6 text-center">
                <h3 className="text-white text-xl font-bold">
                  {testimonials[activeVideo].author}
                </h3>
                <p className="text-gray-400 text-sm mt-1">
                  {testimonials[activeVideo].role} — {testimonials[activeVideo].company}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

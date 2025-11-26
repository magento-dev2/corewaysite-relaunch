"use client";

import { useState } from 'react';
import { Quote, Play, X, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Testimonials() {
  const { t } = useLanguage();
  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  const testimonials = [
    {
      quote: t('testimonials.items.0.quote'),
      author: t('testimonials.items.0.author'),
      role: t('testimonials.items.0.role'),
      company: t('testimonials.items.0.company'),
      image: "/assets/review/ty-smith.png",
      video: "https://www.youtube.com/watch?v=B6zVzWU95Sw",
      rating: 5
    },
    {
      quote: t('testimonials.items.1.quote'),
      author: t('testimonials.items.1.author'),
      role: t('testimonials.items.1.role'),
      company: t('testimonials.items.1.company'),
      image: "/assets/review/Alex-Bestall.png",
      video: "https://www.youtube.com/watch?v=QyhwSYhX09s",
      rating: 5
    },
    {
      quote: t('testimonials.items.2.quote'),
      author: t('testimonials.items.2.author'),
      role: t('testimonials.items.2.role'),
      company: t('testimonials.items.2.company'),
      image: "/assets/review/randy.png",
      video: "https://www.youtube.com/watch?v=H14bBuluwB8",
      rating: 5
    },
  ];

  const getYouTubeID = (url: string) => {
    const regExp = /v=([a-zA-Z0-9_-]{11})/;
    const match = url.match(regExp);
    return match ? match[1] : null;
  };

  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-b from-[#1a0f2e] via-[#0E0918] to-[#1a0f2e]">
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

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-fuchsia-600 opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500 rounded-3xl" />

              {/* Card */}
              <div className="relative h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 group-hover:border-white/20 transition-all duration-500 flex flex-col">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote size={64} className="text-purple-400" />
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-4 mb-6 relative z-10">
                  {/* Avatar */}
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-full blur opacity-75 group-hover:opacity-100 transition-opacity" />
                    <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white/20">
                      <img
                        src={testimonial.image}
                        alt={testimonial.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Name & Role */}
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-lg leading-tight">
                      {testimonial.author}
                    </h3>
                    <p className="text-gray-400 text-sm mt-0.5">
                      {testimonial.role}
                    </p>
                    <p className="text-purple-400 text-xs font-medium mt-0.5">
                      {testimonial.company}
                    </p>
                  </div>
                </div>

                {/* Star Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Quote Text */}
                <blockquote className="text-gray-300 text-base leading-relaxed mb-6 flex-1 line-clamp-6">
                  "{testimonial.quote}"
                </blockquote>

                {/* Video Play Button */}
                <motion.button
                  onClick={() => setActiveVideo(index)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group/btn flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
                >
                  <Play size={18} className="fill-white" />
                  <span>Watch Video</span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-8 px-8 py-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl">
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                100+
              </div>
              <div className="text-gray-400 text-sm mt-1">Happy Clients</div>
            </div>
            <div className="w-px h-12 bg-white/10" />
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                4.9/5
              </div>
              <div className="text-gray-400 text-sm mt-1">Average Rating</div>
            </div>
            <div className="w-px h-12 bg-white/10" />
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                200+
              </div>
              <div className="text-gray-400 text-sm mt-1">Projects Delivered</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Video Modal */}
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
                className="absolute -top-12 right-0 p-2 text-white hover:text-purple-400 transition-colors"
              >
                <X size={32} />
              </button>

              {/* Video Container */}
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/20">
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

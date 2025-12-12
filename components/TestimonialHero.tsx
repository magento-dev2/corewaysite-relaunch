import { Play, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TestimonialHeroProps {
  testimonial?: string;
  authorName?: string;
  authorLocation?: string;
  authorImage?: string;
  heroImage?: string;
  title?: string;
  description?: string;
  videoUrl?: string; // ⬅ NEW PROP
}

export default function TestimonialHero({
  testimonial = "At Rightsify we've been working with Coreway Solution...",
  authorName = "Alex-Bestall,",
  authorLocation = "Los Angeles, USA",
  authorImage = "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400",
  heroImage = "https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg?auto=compress&cs=tinysrgb&w=1600",
  title = "Streamlining the candidate verificaiton process",
  description = "CandidateVerification.org is a public charity...",
  videoUrl = "https://www.youtube.com/watch?v=dQw4w9WgXcQ" // default demo
}: TestimonialHeroProps) {

  const [showVideo, setShowVideo] = useState(false);

  // ⬅ Extract YouTube ID
  const getYouTubeID = (url: string) => {
    const reg = /(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=))([\w-]{11})/;
    const match = url.match(reg);
    return match ? match[1] : "";
  };

  const videoID = getYouTubeID(videoUrl);

  return (
    <div className="flex flex-col lg:flex-row max-w-7xl mx-auto bg-gradient-to-b from-[#0E0918] via-[#1a1325] to-[#0E0918] relative">

      {/* LEFT SECTION */}
      <div className="relative w-full lg:w-[32%] bg-gradient-to-r from-purple-500/10 to-transparent rounded-2xl pl-6 lg:pl-12 pr-6 lg:pr-8 pt-20 pb-12 flex flex-col justify-between z-20">

        {/* Author Image */}
        <div className="absolute -top-16 left-10 w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-xl">
          <img src={authorImage} alt={authorName} className="w-full h-full object-cover" />
        </div>

        {/* Quote Icon */}
        <div className="mb-6 mt-10">
          <svg className="w-10 h-10 text-white/50" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
          </svg>
        </div>

        {/* Testimonial */}
        <p className="text-white/80 text-[15px] lg:text-[16px] italic leading-relaxed mb-auto">
          {testimonial}
        </p>

        {/* Play + Author Info */}
        <div className="flex items-center gap-6 mt-8">
          <button
            onClick={() => setShowVideo(true)}
            className="w-16 h-16 lg:w-[72px] lg:h-[72px] bg-purple-500 cursor-pointer flex items-center justify-center shadow-md rounded-xl"
          >
            <Play className="w-7 h-7 text-white" />
          </button>

          <div>
            <p className="text-xl lg:text-2xl font-bold text-white">{authorName}</p>
            <p className="text-white/60 text-base">( {authorLocation} )</p>
          </div>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="w-full lg:w-[68%] relative overflow-hidden min-h-[500px]">

        {/* Hero Image */}
        <img src={heroImage} alt="Team collaboration" className="absolute inset-0 w-full h-full object-cover" />

      </div>

      {/* Bottom Box */}
      <div className="absolute -bottom-16 right-0 bg-white p-8 z-10 shadow-xl max-w-lg lg:max-w-xl border-l-4 border-purple-500">
        <h2 className="text-2xl lg:text-3xl font-bold text-purple-500 mb-4 leading-snug">
          {title}
        </h2>
        <p className="text-gray-700 text-[15px] lg:text-base leading-relaxed">
          {description}
        </p>
      </div>

      {/* VIDEO MODAL */}
      <AnimatePresence>
        {showVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setShowVideo(false)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl"
            >
              <button
                onClick={() => setShowVideo(false)}
                className="absolute -top-12 right-0 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
              >
                <X className="text-white w-5 h-5" />
              </button>

              <div className="w-full aspect-video bg-black rounded-xl overflow-hidden">
                <iframe
                  src={`https://www.youtube.com/embed/${videoID}?autoplay=1`}
                  className="w-full h-full"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

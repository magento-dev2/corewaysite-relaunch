"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Project {
  id: number;
  language: string;
  images: string[];
}

interface PortfolioHighlightsProps {
  data: Project[]; // Pass the project data from parent page
  highlightCount?: number; // How many images to show
}

export default function PortfolioHighlights({
  data,
  highlightCount = 6,
}: PortfolioHighlightsProps) {
  const router = useRouter();

  // Flatten all images with language info
  const allImages = data.flatMap((p) =>
    p.images.map((img) => ({ src: img, language: p.language }))
  );

  // Take only first `highlightCount` images
  const highlighted = allImages.slice(0, highlightCount);

  return (
    <section className="bg-[#05030D] text-white py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-8">
        Portfolio Highlights
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 md:px-20">
        {highlighted.map((imgObj, idx) => (
          <div
            key={idx}
            className="relative w-full h-70 rounded-2xl overflow-hidden cursor-pointer group"
          >
            <Image
              src={imgObj.src}
              alt={imgObj.language}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 flex items-end p-4">
              <span className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                {imgObj.language}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <button
          onClick={() => router.push("/portfolio")}
          className="px-8 py-4 cursor-pointer bg-purple-500 text-white border border-white/10 hover:border-purple-500/50 rounded-2xl font-bold transition"
        >
          View All →
        </button>
      </div>
    </section>
  );
}

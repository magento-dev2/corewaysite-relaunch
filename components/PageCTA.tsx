"use client";

import { ArrowRight, Sparkles } from 'lucide-react';

interface PageCTAProps {
  badge?: string;
  title: string;
  description: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  footerText?: string;
}

export default function PageCTA({
  badge = 'Start automating today',
  title,
  description,
  primaryButtonText = 'Get started for free',
  secondaryButtonText = 'Talk to sales',
  footerText = 'No credit card required • Free forever for core features • Cancel anytime',
}: PageCTAProps) {
  return (
    <section className="py-24 bg-gradient-to-b from-[#1a1325] to-[#0E0918] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAyKSIvPjwvZz48L3N2Zz4=')] opacity-20"></div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {badge && (
          <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-8 hover:bg-white/10 transition-all">
            <Sparkles className="text-purple-500" size={16} />
            <span className="text-gray-300 text-sm">{badge}</span>
          </div>
        )}

        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent">
          {title}
        </h2>

        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="group bg-gradient-to-r from-purple-500 to-violet-600 text-white px-8 py-4 rounded-lg hover:from-purple-600 hover:to-violet-700 transition-all font-medium text-lg flex items-center space-x-2 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 hover:scale-105">
            <span>{primaryButtonText}</span>
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </button>

          <button className="group bg-white/5 backdrop-blur-sm border border-white/10 text-white px-8 py-4 rounded-lg hover:bg-white/10 hover:border-purple-500/50 transition-all font-medium text-lg">
            {secondaryButtonText}
          </button>
        </div>

        {footerText && (
          <p className="text-gray-400 text-sm mt-8 flex items-center justify-center flex-wrap gap-x-3 gap-y-1">
            {footerText.split('•').map((text, index) => (
              <span key={index} className="flex items-center">
                {text.trim()}
                {index < footerText.split('•').length - 1 && (
                  <span className="ml-3 text-purple-500">•</span>
                )}
              </span>
            ))}
          </p>
        )}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
    </section>
  );
}

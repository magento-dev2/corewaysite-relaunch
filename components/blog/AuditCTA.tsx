'use client';

import React from 'react';
import { ArrowRight, Sparkles, FileText } from "lucide-react";

export default function AuditCTA() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#1a1325] to-[#0E0918] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-8 hover:bg-white/10 transition-all">
          <Sparkles className="text-purple-500" size={16} />
          <span className="text-gray-300 text-sm">Free Performance Audit</span>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent">
          Get your free AI audit report
        </h2>

        <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          Tell us about your business. We will send you a written report showing exactly where AI and custom software can save you time and money — within 24 hours. No sales call required.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={() => window.dispatchEvent(new CustomEvent('open-audit-modal'))}
            className="cursor-pointer group bg-gradient-to-r from-purple-500 to-violet-600 text-white px-8 py-4 rounded-lg hover:from-purple-600 hover:to-violet-700 transition-all font-medium text-lg flex items-center space-x-2 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 hover:scale-105"
          >
            <span>Get My Free Audit Report</span>
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </button>
          
          <a 
            href="/assets/sample-audit-report.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="cursor-pointer group bg-white/5 backdrop-blur-sm border border-white/10 text-white px-8 py-4 rounded-lg hover:bg-white/10 hover:border-purple-500/50 transition-all font-medium text-lg flex items-center space-x-2"
          >
            <FileText size={20} className="text-purple-400" />
            <span>View Sample PDF</span>
          </a>
        </div>

        <p className="text-gray-400 text-sm mt-8">
          Personalized Analysis <span className="mx-2 text-purple-500">•</span> 24h Turnaround <span className="mx-2 text-purple-500">•</span> Completely Free
        </p>
      </div>
    </section>
  );
}

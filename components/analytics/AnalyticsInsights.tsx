"use client";

import { TrendingUp, Target, Lightbulb, AlertCircle, Sparkles, Zap } from "lucide-react";

const insights = [
  {
    icon: TrendingUp,
    type: "Growth Opportunity",
    title: "Revenue optimization detected",
    description: "Product category 'Premium Services' shows 45% higher conversion during weekends",
    action: "Increase weekend promotions",
    impact: "+$124K projected monthly",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: AlertCircle,
    type: "Alert",
    title: "Churn risk identified",
    description: "28 high-value customers showing decreased engagement over past 14 days",
    action: "Launch retention campaign",
    impact: "Save $86K ARR",
    color: "from-red-500 to-orange-500"
  },
  {
    icon: Lightbulb,
    type: "Recommendation",
    title: "Market expansion opportunity",
    description: "Analysis shows strong demand in APAC region with 72% YoY growth potential",
    action: "Explore APAC market entry",
    impact: "+$340K potential",
    color: "from-yellow-500 to-amber-500"
  },
  {
    icon: Target,
    type: "Performance",
    title: "Marketing efficiency gain",
    description: "Email campaigns outperforming paid ads by 3.2x ROI in target demographics",
    action: "Reallocate 30% budget to email",
    impact: "+18% overall ROI",
    color: "from-blue-500 to-cyan-500"
  }
];

export default function AnalyticsInsights() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#1a0f2b] via-[#0E0918] to-[#1a0f2b] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-blob" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-blob" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-6">
            <Sparkles className="text-purple-500" size={16} />
            <span className="text-sm font-medium text-gray-300">AI-Powered Insights</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Intelligent <span className="text-purple-500">Business Insights</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Our AI analyzes your data 24/7 to surface actionable insights and opportunities
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {insights.map((insight, index) => {
            const Icon = insight.icon;
            return (
              <div
                key={index}
                className="group relative"
                style={{
                  animation: `fade-in-scale 0.6s ease-out forwards`,
                  animationDelay: `${index * 0.15}s`,
                  opacity: 0
                }}
              >
                <div className={`absolute -inset-1 bg-gradient-to-r ${insight.color} opacity-0 group-hover:opacity-30 rounded-2xl blur-xl transition-all duration-500`}></div>

                <div className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-500 overflow-hidden">
                  <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${insight.color} opacity-5 rounded-full blur-3xl`}></div>

                  <div className="relative">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className={`w-12 h-12 bg-gradient-to-br ${insight.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="w-6 h-6 text-white" strokeWidth={2} />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide">{insight.type}</div>
                          <div className="text-sm text-purple-300 font-medium">AI Detected</div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-xs text-gray-400">Active</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                      {insight.title}
                    </h3>

                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                      {insight.description}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      <div>
                        <div className="text-xs text-gray-500 mb-1">Recommended Action</div>
                        <div className="text-sm text-white font-medium">{insight.action}</div>
                      </div>
                    </div>

                    <div className="mt-4 flex items-center justify-between bg-gradient-to-r from-purple-500/10 to-transparent border border-purple-500/20 rounded-lg p-3">
                      <div className="flex items-center space-x-2">
                        <Zap className="text-purple-400" size={16} />
                        <span className="text-sm text-gray-300">Projected Impact</span>
                      </div>
                      <span className="text-lg font-bold text-purple-400">{insight.impact}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-8 bg-gradient-to-r from-white/5 via-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl px-8 py-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">24/7</div>
              <div className="text-gray-400 text-sm">AI Monitoring</div>
            </div>
            <div className="w-px h-12 bg-white/20"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">1000+</div>
              <div className="text-gray-400 text-sm">Insights/Month</div>
            </div>
            <div className="w-px h-12 bg-white/20"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">95%</div>
              <div className="text-gray-400 text-sm">Accuracy</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }

        @keyframes fade-in-scale {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-blob {
          animation: blob 7s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}

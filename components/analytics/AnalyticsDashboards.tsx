"use client";

import { LayoutDashboard, Activity, Users, DollarSign } from "lucide-react";

const dashboards = [
  {
    icon: LayoutDashboard,
    title: "Executive Dashboard",
    description: "High-level KPIs and metrics for C-suite decision making",
    metrics: ["Revenue", "Growth", "Churn", "CAC"],
    preview: [
      { label: "Total Revenue", value: "$2.4M", trend: "+18%" },
      { label: "Active Users", value: "48.2K", trend: "+24%" }
    ]
  },
  {
    icon: Activity,
    title: "Operations Dashboard",
    description: "Real-time monitoring of system performance and operations",
    metrics: ["Uptime", "Response Time", "Error Rate", "Throughput"],
    preview: [
      { label: "System Health", value: "99.9%", trend: "+0.2%" },
      { label: "Avg Response", value: "45ms", trend: "-12%" }
    ]
  },
  {
    icon: Users,
    title: "Marketing Dashboard",
    description: "Track campaigns, conversions, and customer acquisition",
    metrics: ["Conversions", "ROI", "CTR", "Leads"],
    preview: [
      { label: "Conv. Rate", value: "3.8%", trend: "+32%" },
      { label: "Campaign ROI", value: "425%", trend: "+15%" }
    ]
  },
  {
    icon: DollarSign,
    title: "Sales Dashboard",
    description: "Pipeline visibility, deal tracking, and sales forecasting",
    metrics: ["Pipeline", "Win Rate", "Avg Deal", "Forecast"],
    preview: [
      { label: "Pipeline Value", value: "$8.2M", trend: "+28%" },
      { label: "Win Rate", value: "42%", trend: "+5%" }
    ]
  }
];

export default function AnalyticsDashboards() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#0E0918] to-[#1a0f2b] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(139,92,246,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(168,85,247,0.1),transparent_50%)]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-6">
            <span className="text-sm font-medium text-gray-300">Dashboard Gallery</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Pre-Built <span className="text-purple-500">Analytics Dashboards</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Ready-to-use dashboards tailored for different roles and use cases
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {dashboards.map((dashboard, index) => {
            const Icon = dashboard.icon;
            return (
              <div
                key={index}
                className="group relative"
                style={{
                  animation: `slide-in-${index % 2 === 0 ? 'left' : 'right'} 0.8s ease-out forwards`,
                  animationDelay: `${index * 0.15}s`,
                  opacity: 0
                }}
              >
                <div className="absolute -inset-1 bg-gradient-to-br from-purple-500/20 via-violet-500/20 to-pink-500/20 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"></div>

                <div className="relative h-full bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden hover:border-purple-500/50 transition-all duration-500">
                  <div className="p-8">
                    <div className="flex items-start space-x-4 mb-6">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-violet-500 rounded-xl blur-md opacity-50 group-hover:opacity-70 transition-opacity"></div>
                        <div className="relative w-16 h-16 bg-gradient-to-br from-purple-500/30 to-violet-500/30 rounded-xl flex items-center justify-center border border-purple-500/40 group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-8 h-8 text-purple-400" strokeWidth={2} />
                        </div>
                      </div>

                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                          {dashboard.title}
                        </h3>
                        <p className="text-gray-400 text-sm">
                          {dashboard.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {dashboard.metrics.map((metric, metricIndex) => (
                        <span
                          key={metricIndex}
                          className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300 hover:bg-purple-500/20 hover:border-purple-500/40 transition-all cursor-default"
                        >
                          {metric}
                        </span>
                      ))}
                    </div>

                    <div className="space-y-3">
                      {dashboard.preview.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="bg-[#1a1325] border border-white/10 rounded-xl p-4 hover:border-purple-500/30 transition-all"
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="text-gray-400 text-xs mb-1">{item.label}</div>
                              <div className="text-white text-2xl font-bold">{item.value}</div>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="text-green-400 text-sm font-semibold">{item.trend}</div>
                              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="h-1 bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}

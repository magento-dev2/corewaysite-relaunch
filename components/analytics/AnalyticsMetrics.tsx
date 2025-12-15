"use client";

import { TrendingUp, Users, DollarSign, Eye, Clock, Target } from "lucide-react";

const metrics = [
  {
    icon: TrendingUp,
    label: "Revenue Growth",
    value: "156%",
    change: "+32% MoM",
    trend: "up",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Users,
    label: "Active Users",
    value: "2.4M",
    change: "+18% MoM",
    trend: "up",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: DollarSign,
    label: "Average Revenue",
    value: "$124K",
    change: "+24% MoM",
    trend: "up",
    color: "from-purple-500 to-violet-500"
  },
  {
    icon: Eye,
    label: "Page Views",
    value: "18.2M",
    change: "+42% MoM",
    trend: "up",
    color: "from-pink-500 to-rose-500"
  },
  {
    icon: Clock,
    label: "Avg. Session",
    value: "8m 34s",
    change: "+12% MoM",
    trend: "up",
    color: "from-orange-500 to-amber-500"
  },
  {
    icon: Target,
    label: "Conversion Rate",
    value: "4.8%",
    change: "+28% MoM",
    trend: "up",
    color: "from-violet-500 to-purple-500"
  }
];

export default function AnalyticsMetrics() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#0E0918] via-[#1a1325] to-[#0E0918] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(139,92,246,0.05)_1px,transparent_1px),linear-gradient(rgba(139,92,246,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-6">
            <span className="text-sm font-medium text-gray-300">Live Metrics</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Track What <span className="text-purple-500">Matters Most</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Monitor key performance indicators in real-time with beautiful, actionable dashboards
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div
                key={index}
                className="group relative"
                style={{
                  animation: `bounce-in ${0.6}s ease-out forwards`,
                  animationDelay: `${index * 0.1}s`,
                  opacity: 0
                }}
              >
                <div className={`absolute -inset-1 bg-gradient-to-r ${metric.color} opacity-0 group-hover:opacity-30 rounded-2xl blur-xl transition-all duration-500`}></div>

                <div className="relative h-full bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-500 overflow-hidden">
                  <div className={`absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br ${metric.color} opacity-10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500`}></div>

                  <div className="relative">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${metric.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                        <Icon className="w-6 h-6 text-white" strokeWidth={2} />
                      </div>

                      <div className="flex items-center space-x-1 text-green-400">
                        <TrendingUp size={14} />
                        <span className="text-xs font-semibold">{metric.change}</span>
                      </div>
                    </div>

                    <div className="mb-2">
                      <div className="text-gray-400 text-sm mb-1">{metric.label}</div>
                      <div className="text-3xl font-bold text-white group-hover:text-purple-300 transition-colors">
                        {metric.value}
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 mt-4">
                      <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${metric.color} rounded-full animate-progress-bar`}
                          style={{ animationDelay: `${index * 0.2}s` }}
                        ></div>
                      </div>
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-violet-500/20 to-pink-500/20 rounded-3xl blur-3xl"></div>

          <div className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Real-Time Performance Overview
              </h3>
              <p className="text-gray-300">
                All metrics updated live every second
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-purple-500/30 transition-all">
                <div className="text-4xl font-bold text-white mb-2">99.9%</div>
                <div className="text-gray-400 text-sm">Uptime</div>
                <div className="mt-2 inline-flex items-center space-x-1 text-green-400 text-xs">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                  <span>Operational</span>
                </div>
              </div>

              <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-purple-500/30 transition-all">
                <div className="text-4xl font-bold text-white mb-2">45ms</div>
                <div className="text-gray-400 text-sm">Response Time</div>
                <div className="mt-2 inline-flex items-center space-x-1 text-green-400 text-xs">
                  <TrendingUp size={12} />
                  <span>Optimal</span>
                </div>
              </div>

              <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-purple-500/30 transition-all">
                <div className="text-4xl font-bold text-white mb-2">24/7</div>
                <div className="text-gray-400 text-sm">Monitoring</div>
                <div className="mt-2 inline-flex items-center space-x-1 text-purple-400 text-xs">
                  <Clock size={12} />
                  <span>Always On</span>
                </div>
              </div>

              <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-purple-500/30 transition-all">
                <div className="text-4xl font-bold text-white mb-2">1B+</div>
                <div className="text-gray-400 text-sm">Events/Day</div>
                <div className="mt-2 inline-flex items-center space-x-1 text-blue-400 text-xs">
                  <Target size={12} />
                  <span>Processing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce-in {
          0% {
            opacity: 0;
            transform: scale(0.5) translateY(50px);
          }
          50% {
            transform: scale(1.05) translateY(-10px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          33% {
            transform: translateY(-20px) translateX(20px);
          }
          66% {
            transform: translateY(20px) translateX(-20px);
          }
        }

        @keyframes progress-bar {
          from {
            width: 0;
          }
          to {
            width: 75%;
          }
        }

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }

        .animate-progress-bar {
          animation: progress-bar 1.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
}

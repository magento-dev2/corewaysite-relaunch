"use client";

import {
  BarChart3,
  PieChart,
  LineChart,
  Database,
  Brain,
  Target,
  Gauge,
  FileSpreadsheet,
  Workflow
} from "lucide-react";

const services = [
  {
    icon: BarChart3,
    title: "Business Intelligence",
    description: "Transform data into strategic insights with comprehensive BI solutions, custom dashboards, and advanced reporting capabilities."
  },
  {
    icon: PieChart,
    title: "Data Visualization",
    description: "Create stunning, interactive visualizations that make complex data easy to understand and actionable for stakeholders."
  },
  {
    icon: LineChart,
    title: "Predictive Analytics",
    description: "Leverage machine learning and AI to forecast trends, identify patterns, and make data-driven predictions."
  },
  {
    icon: Database,
    title: "Data Warehousing",
    description: "Build scalable data warehouses that consolidate information from multiple sources for comprehensive analysis."
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Implement advanced AI models for anomaly detection, customer segmentation, and intelligent automation."
  },
  {
    icon: Target,
    title: "Marketing Analytics",
    description: "Track campaign performance, customer behavior, and ROI with detailed marketing analytics and attribution modeling."
  },
  {
    icon: Gauge,
    title: "Performance Metrics",
    description: "Monitor KPIs in real-time with customizable dashboards that track the metrics that matter most to your business."
  },
  {
    icon: FileSpreadsheet,
    title: "Custom Reporting",
    description: "Generate automated reports tailored to your needs with scheduled delivery and multi-format export options."
  },
  {
    icon: Workflow,
    title: "ETL Pipelines",
    description: "Design and implement robust ETL processes to extract, transform, and load data efficiently across systems."
  }
];

export default function AnalyticsServices() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#1a0f2b] via-[#0E0918] to-[#1a0f2b] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-purple-500/20 to-transparent"></div>
        <div className="absolute top-0 left-2/4 w-px h-full bg-gradient-to-b from-transparent via-purple-500/20 to-transparent"></div>
        <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-purple-500/20 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-6 hover:border-purple-500/50 transition-all">
            <span className="text-sm font-medium text-gray-300">Our Services</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Comprehensive <span className="text-purple-500">Analytics Solutions</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            End-to-end analytics services that transform your data into competitive advantages
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative"
                style={{
                  animation: `float ${3 + (index % 3)}s ease-in-out infinite`,
                  animationDelay: `${index * 0.2}s`
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-purple-500/5 to-purple-500/0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>

                <div className="relative h-full bg-gradient-to-br from-white/[0.07] to-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:border-purple-500/50 transition-all duration-500 group-hover:transform group-hover:-translate-y-2">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-purple-500/30 rounded-xl blur-md group-hover:blur-lg transition-all"></div>
                      <div className="relative w-14 h-14 bg-gradient-to-br from-purple-500/30 to-violet-500/30 rounded-xl flex items-center justify-center border border-purple-500/40 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                        <Icon className="w-7 h-7 text-purple-400" strokeWidth={2} />
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed text-sm">
                    {service.description}
                  </p>

                  <div className="mt-4 h-1 w-0 group-hover:w-full bg-gradient-to-r from-purple-500 to-violet-500 rounded-full transition-all duration-500"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  );
}

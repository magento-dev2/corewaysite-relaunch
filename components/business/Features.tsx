"use client";

import { useRef } from "react";
import { ArrowRight, Database, Users, RefreshCw, MessageSquare } from "lucide-react";

const workflows = [
  {
    title: "Lead enrichment",
    description:
      "Automatically enrich leads from your CRM with data from multiple sources.",
    color: "from-violet-500/20 to-indigo-500/20",
    icon: Database,
    borderColor: "group-hover:border-violet-500/50",
    iconColor: "text-violet-400"
  },
  {
    title: "Customer onboarding",
    description:
      "Create seamless onboarding experiences that sync across all your tools.",
    color: "from-violet-500/20 to-indigo-500/20",
    icon: Users,
    borderColor: "group-hover:border-violet-500/50",
    iconColor: "text-violet-400"
  },
  {
    title: "Data synchronization",
    description: "Keep your databases, spreadsheets, and apps in perfect sync.",
    color: "from-violet-500/20 to-indigo-500/20",
    icon: RefreshCw,
    borderColor: "group-hover:border-violet-500/50",
    iconColor: "text-violet-400"
  },
  {
    title: "Support automation",
    description:
      "Route tickets, gather context, and respond faster to customers.",
    color: "from-violet-500/20 to-indigo-500/20",
    icon: MessageSquare,
    borderColor: "group-hover:border-violet-500/50",
    iconColor: "text-violet-400"
  },
];

export default function WorkflowZigZagScroll() {
  return (
    <section className="relative bg-[#0E0918] py-24 overflow-hidden">

      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-64 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-6">
            <span className="text-purple-400 text-sm font-medium">Streamline Operations</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Workflows for every team
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Pre-built templates to get you started in minutes. Automate repetitive tasks and focus on high-impact work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {workflows.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className={`group relative p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-500 ${item.borderColor}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}></div>

                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                    <Icon className={`w-7 h-7 ${item.iconColor}`} />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:translate-x-1 transition-transform duration-300">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 mb-8 leading-relaxed group-hover:text-gray-300 transition-colors">
                    {item.description}
                  </p>

                  <div className="flex items-center text-white font-medium group/btn cursor-pointer">
                    <span className="mr-2 group-hover/btn:mr-4 transition-all duration-300">Explore template</span>
                    <ArrowRight className="w-5 h-5 text-purple-400 group-hover/btn:text-white transition-colors" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

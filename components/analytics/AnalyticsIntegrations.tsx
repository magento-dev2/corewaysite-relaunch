"use client";

import { Database, Cloud, ShoppingCart, Mail, Smartphone, Code2, Globe, Webhook } from "lucide-react";

const integrations = [
  {
    icon: Database,
    name: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Cloud,
    name: "Cloud Platforms",
    items: ["AWS", "Azure", "Google Cloud", "DigitalOcean"],
    color: "from-purple-500 to-violet-500"
  },
  {
    icon: ShoppingCart,
    name: "E-commerce",
    items: ["Shopify", "WooCommerce", "Magento", "BigCommerce"],
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Mail,
    name: "Marketing",
    items: ["HubSpot", "Mailchimp", "Salesforce", "Marketo"],
    color: "from-orange-500 to-red-500"
  },
  {
    icon: Smartphone,
    name: "Mobile Analytics",
    items: ["Firebase", "Mixpanel", "Amplitude", "Segment"],
    color: "from-pink-500 to-rose-500"
  },
  {
    icon: Code2,
    name: "Development",
    items: ["GitHub", "GitLab", "Jira", "Bitbucket"],
    color: "from-indigo-500 to-blue-500"
  },
  {
    icon: Globe,
    name: "Social Media",
    items: ["Facebook", "Twitter", "LinkedIn", "Instagram"],
    color: "from-violet-500 to-purple-500"
  },
  {
    icon: Webhook,
    name: "APIs & Webhooks",
    items: ["REST API", "GraphQL", "Webhooks", "Custom"],
    color: "from-teal-500 to-cyan-500"
  }
];

export default function AnalyticsIntegrations() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#1a0f2b] to-[#0E0918] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
      </div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-purple-500/20 rounded-full"
              style={{
                left: `${10 + i * 12}%`,
                top: `${20 + (i % 3) * 30}%`,
                animation: `ping-slow ${3 + i}s ease-in-out infinite`,
                animationDelay: `${i * 0.5}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-6">
            <span className="text-sm font-medium text-gray-300">Integrations</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Connect <span className="text-purple-500">Everything</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Seamlessly integrate with your existing tools and platforms for unified analytics
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {integrations.map((integration, index) => {
            const Icon = integration.icon;
            return (
              <div
                key={index}
                className="group relative"
                style={{
                  animation: `fade-up ${0.6}s ease-out forwards`,
                  animationDelay: `${index * 0.1}s`,
                  opacity: 0
                }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${integration.color} opacity-0 group-hover:opacity-10 rounded-2xl blur-2xl transition-all duration-500`}></div>

                <div className="relative h-full bg-gradient-to-br from-white/[0.06] to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-500">
                  <div className="text-center">
                    <div className="inline-flex mb-4">
                      <div className={`w-16 h-16 bg-gradient-to-br ${integration.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                        <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                      {integration.name}
                    </h3>

                    <div className="space-y-2">
                      {integration.items.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="text-sm text-gray-400 py-2 px-3 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 hover:text-white hover:border-purple-500/30 transition-all"
                          style={{
                            animation: `slide-in-right 0.4s ease-out forwards`,
                            animationDelay: `${index * 0.1 + itemIndex * 0.05}s`,
                            opacity: 0
                          }}
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center bg-gradient-to-br from-purple-500/10 via-violet-500/10 to-pink-500/10 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-8">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-500 rounded-xl flex items-center justify-center">
                <Webhook className="w-6 h-6 text-white" strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-bold text-white">Custom Integration Needed?</h3>
            </div>
            <p className="text-gray-300 mb-6 max-w-xl">
              We build custom integrations for any data source or platform
            </p>
            <button className="bg-gradient-to-r from-purple-500 to-violet-600 text-white px-8 py-3 rounded-lg hover:from-purple-600 hover:to-violet-700 transition-all font-medium shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 hover:scale-105">
              Request Custom Integration
            </button>
          </div>
        </div> */}
      </div>

      <style jsx>{`
        @keyframes fade-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes ping-slow {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(2);
          }
        }
      `}</style>
    </section>
  );
}

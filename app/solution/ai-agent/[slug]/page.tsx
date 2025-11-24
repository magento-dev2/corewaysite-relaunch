"use client"

import { useState } from 'react';
import { Check, X, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';

// Sample JSON configuration for steps
const stepsData = [
  {
    id: 1,
    title: "Superior Security Architecture",
    description: "Our advanced security measures ensure your data is protected",
    features: [
      {
        text: "Fully closed-source (not publicly available for exploitation)",
        isPositive: true
      },
      {
        text: "Directory structure is not exposed",
        isPositive: true
      },
      {
        text: "Resistant to automated cyber-attacks like OK88, SEO spam injections, and phishing script uploads",
        isPositive: true
      },
      {
        text: "Built on a protected server environment optimized for journal data",
        isPositive: true
      }
    ],
    bgColor: "bg-gray-800/50",
    numberColor: "bg-purple-600"
  },
  {
    id: 2,
    title: "Login-less Article Submission",
    description: "Compare traditional vs modern submission process",
    columns: [
      {
        title: "OJS requires authors to:",
        bgColor: "bg-red-900/30",
        textColor: "text-red-400",
        features: [
          { text: "Register", isPositive: false },
          { text: "Verify email", isPositive: false },
          { text: "Log in", isPositive: false },
          { text: "Navigate complicated submission steps", isPositive: false }
        ]
      },
      {
        title: "Coreway removes the friction completely:",
        bgColor: "bg-green-900/30",
        textColor: "text-green-400",
        features: [
          { text: "No login required", isPositive: true },
          { text: "AI-assisted metadata entry", isPositive: true },
          { text: "Instant submission form", isPositive: true },
          { text: "Spam protection enabled by intelligent filtering", isPositive: true }
        ]
      }
    ],
    bgColor: "bg-gray-800/50",
    numberColor: "bg-purple-600"
  },
  {
    id: 3,
    title: "AI-Powered Processing",
    description: "Leverage artificial intelligence for smarter workflows",
    features: [
      {
        text: "Automatic document analysis and classification",
        isPositive: true
      },
      {
        text: "Intelligent plagiarism detection",
        isPositive: true
      },
      {
        text: "Smart reviewer matching based on expertise",
        isPositive: true
      },
      {
        text: "Automated formatting and style checking",
        isPositive: true
      }
    ],
    bgColor: "bg-gray-800/50",
    numberColor: "bg-purple-600"
  }
];

const StepByStepComponent = () => {
  const [expandedSteps, setExpandedSteps] = useState([1, 2, 3]);

  const toggleStep = (stepId: number) => {
    setExpandedSteps(prev =>
      prev.includes(stepId)
        ? prev.filter(id => id !== stepId)
        : [...prev, stepId]
    );
  };

  const renderFeature = (feature: any, index: number) => (
    <div key={index} className="flex items-start gap-3 mb-3">
      <div className={`mt-1 ${feature.isPositive ? 'text-green-400' : 'text-red-400'}`}>
        {feature.isPositive ? (
          <Check className="w-5 h-5" />
        ) : (
          <X className="w-5 h-5" />
        )}
      </div>
      <span className="text-gray-300 leading-relaxed">{feature.text}</span>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
      {/* Hero Section */}
      


<div className='max-w-6xl mx-auto mt-5 '>

  <img src="/assets/herosection/agent.webp" className='rounded-2xl'/>
</div>
    
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className={`bg-gray-800/50 rounded-2xl border p-5 border-gray-700 overflow-hidden transition-all duration-300 hover:border-purple-600`}>
        <div className="text-center mb-4">
          <h2 className="text-4xl font-bold text-white ">
            How it works
          </h2>
          {/* <p className="text-xl text-gray-400">
            Discover how our AI-powered system simplifies your workflow
          </p> */}

          
        </div>
        <div className='max-w-5xl  mx-auto '>
       <p className='text-xl'>
        This project teaches you to create a personal AI assistant named Jackie that operates through Telegram. Jackie can summarize unread emails, check calendar events, manage Google Tasks, and handle both voice and text interactions. The assistant provides a comprehensive digital life management solution accessible via Telegram messaging.
       </p>
       </div>
       
        </div>
        </div>

      {/* Steps Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Our Process Step-by-Step
          </h2>
          <p className="text-xl text-gray-400">
            Discover how our AI-powered system simplifies your workflow
          </p>
        </div>

        <div className="space-y-6">
          {stepsData.map((step) => (
            <div
              key={step.id}
              className={`${step.bgColor} rounded-2xl border border-gray-700 overflow-hidden transition-all duration-300 hover:border-purple-600`}
            >
              <div
                className="p-6 cursor-pointer"
                onClick={() => toggleStep(step.id)}
              >
                <div className="flex items-start gap-4">
                  <div className={`${step.numberColor} text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0 shadow-lg`}>
                    {step.id}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-bold text-white">
                        {step.title}
                      </h3>
                      {expandedSteps.includes(step.id) ? (
                        <ChevronUp className="w-6 h-6 text-gray-400" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-gray-400" />
                      )}
                    </div>
                    {step.description && (
                      <p className="text-gray-400 mt-2">{step.description}</p>
                    )}
                  </div>
                </div>
              </div>

              {expandedSteps.includes(step.id) && (
                <div className="px-6 pb-6">
                  {step.columns ? (
                    <div className="grid md:grid-cols-2 gap-6 mt-4">
                      {step.columns.map((column, idx) => (
                        <div
                          key={idx}
                          className={`${column.bgColor} border border-gray-700 rounded-xl p-6`}
                        >
                          <h4 className={`font-bold text-lg mb-4 ${column.textColor}`}>
                            {column.title}
                          </h4>
                          <div>
                            {column.features.map((feature, featureIdx) =>
                              renderFeature(feature, featureIdx)
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="mt-4 pl-16">
                      {step.features.map((feature, idx) =>
                        renderFeature(feature, idx)
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* JSON Configuration Display */}
        <div className="mt-12 bg-gray-800/50 border border-gray-700 rounded-2xl p-6">
          <h3 className="text-2xl font-bold text-white mb-4">
            JSON Configuration Example
          </h3>
          <p className="text-gray-400 mb-4">
            This component is driven by JSON data. You can easily modify the content by updating the configuration:
          </p>
          <pre className="bg-gray-950 text-green-400 p-4 rounded-lg overflow-x-auto text-sm border border-gray-800">
            {`{
  "id": 1,
  "title": "Your Step Title",
  "description": "Step description",
  "features": [
    {
      "text": "Feature description",
      "isPositive": true
    }
  ],
  "bgColor": "bg-gray-800/50",
  "numberColor": "bg-purple-600"
}

// For comparison columns:
{
  "id": 2,
  "title": "Comparison Step",
  "columns": [
    {
      "title": "Column Title",
      "bgColor": "bg-red-900/30",
      "textColor": "text-red-400",
      "features": [...]
    }
  ]
}`}
          </pre>
        </div>

        {/* Instructions for AI Agent */}
        <div className="mt-6 bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-700/50 rounded-2xl p-6">
          <h3 className="text-2xl font-bold text-white mb-4">
            🤖 AI Agent Instructions
          </h3>
          <div className="space-y-3 text-gray-300">
            <p><strong className="text-purple-400">To update this component:</strong></p>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>Modify the <code className="bg-purple-900/50 px-2 py-1 rounded text-purple-300">stepsData</code> array</li>
              <li>Each step needs: <code className="bg-purple-900/50 px-2 py-1 rounded text-purple-300">id</code>, <code className="bg-purple-900/50 px-2 py-1 rounded text-purple-300">title</code>, <code className="bg-purple-900/50 px-2 py-1 rounded text-purple-300">description</code></li>
              <li>Use <code className="bg-purple-900/50 px-2 py-1 rounded text-purple-300">features</code> array for simple lists</li>
              <li>Use <code className="bg-purple-900/50 px-2 py-1 rounded text-purple-300">columns</code> array for comparison layouts</li>
              <li>Set <code className="bg-purple-900/50 px-2 py-1 rounded text-purple-300">isPositive: true/false</code> for checkmarks/x-marks</li>
              <li>Customize colors with dark-themed Tailwind classes</li>
            </ol>
          </div>
        </div>

        {/* Tools Integration Section */}
        <div className="py-20 bg-gradient-to-br from-gray-900 via-purple-900/10 to-gray-900 border-t border-gray-800">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Seamless Tool Integration
              </h2>
              <p className="text-xl text-gray-400">
                Connect with your favorite tools and platforms
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  category: "E-commerce Platforms",
                  tools: ["Shopify", "WooCommerce", "Magento", "BigCommerce"],
                  icon: (
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" strokeWidth="2" />
                      <path d="M9 22V12h6v10" strokeWidth="2" />
                    </svg>
                  )
                },
                {
                  category: "Payment Gateways",
                  tools: ["Stripe", "PayPal", "Square", "Razorpay"],
                  icon: (
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <rect x="2" y="5" width="20" height="14" rx="2" strokeWidth="2" />
                      <path d="M2 10h20" strokeWidth="2" />
                    </svg>
                  )
                },
                {
                  category: "Marketing Tools",
                  tools: ["Mailchimp", "HubSpot", "Google Analytics", "Meta Ads"],
                  icon: (
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )
                }
              ].map((category, idx) => (
                <div key={idx} className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-purple-600 transition-all duration-300">
                  <div className="w-16 h-16 bg-purple-600/20 rounded-lg flex items-center justify-center text-purple-400 mb-4">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{category.category}</h3>
                  <div className="space-y-2">
                    {category.tools.map((tool, toolIdx) => (
                      <div key={toolIdx} className="flex items-center gap-2 text-gray-400">
                        <Check className="w-4 h-4 text-green-400" />
                        <span>{tool}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            
          </div>
        </div>
      </div>
    </div>
  );
}

export default StepByStepComponent;
"use client";

import Image from "next/image";
import Link from "next/link";

const steps = [
  {
    number: "Step 1",
    title: "Tell Us Your Needs",
    description: "Share your project requirements with our experts through a quick consultation.",
     image: "/assets/agent/share_requirement.png",
    bgColor: "bg-gray-50",
    badge: "bg-gray-200 text-gray-800",
  },
  {
    number: "Step 2",
    title: "Select & Interview Talent",
    description: "Review profiles, conduct interviews, and choose developers that best fit your project.",
    image: "/assets/agent/dedicated_team.jpg",
   
    bgColor: "bg-cyan-400",
    badge: "bg-cyan-500 text-white",
  },
  {
    number: "Step 3",
    title: "Sign & Start Development",
    description: "Finalize the contract and onboard your dedicated developers to begin work immediately.",
     image: "/assets/agent/happy_customer.png",
   
    bgColor: "bg-gray-50",
    badge: "bg-gray-200 text-gray-800",
  },
];

export default function HiringSteps() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#0E0918] to-[#1a0f2b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-purple-500 mb-6 leading-tight">
            Fast & Simple Onboarding
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
           Hire dedicated developers through a streamlined 3-step process designed to save time and effort. 
Whether you need a single specialist or a full development team, we make hiring quick and hassle-free.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Steps - Taking 3 columns */}
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Step Number Badge */}
            

              {/* Image Container with Overlay Elements */}
             {/* Image Container with Overlay Elements */}
<div className={`relative w-full ${step.bgColor} overflow-hidden aspect-[9/9]`}>
  {/* Background Pattern - Decorative circles */}
  <div className="absolute inset-0 opacity-10">
    <div className="absolute top-10 right-10 w-32 h-32 bg-gray-900 rounded-full blur-2xl"></div>
    <div className="absolute bottom-10 left-10 w-24 h-24 bg-cyan-500 rounded-full blur-2xl"></div>
  </div>

  {/* Main Image */}
  <div className="relative w-full h-full">
    <Image
      src={step.image}
      alt={step.title}
      fill
      className="object-cover group-hover:scale-105 transition-transform duration-700"
    />
  </div>
</div>


              {/* Content */}
              {/* <div className="flex justify-center items-center">
                <span className={`inline-block px-5 py-2.5 mt-2 ${step.badge} text-sm font-bold rounded-xl shadow-md`}>
                  {step.number}
                </span>
                </div> */}
              <div className="p-8 bg-white">
               
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 leading-tight">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-base">
                  {step.description}
                </p>
              </div>
            </div>
          ))}

          {/* CTA Card - Taking 1 column on desktop, full width on mobile */}
          <div className="lg:col-span-1 lg:row-span-1">
            <div className="sticky top-8 bg-gradient-to-br from-white via-gray-50 to-cyan-50 rounded-3xl shadow-xl p-8 h-full flex flex-col justify-center items-center text-center border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
              {/* Decorative Element */}
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-2xl mx-auto transform rotate-6 flex items-center justify-center shadow-lg">
                  <svg 
                    className="w-8 h-8 text-white transform -rotate-6" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M13 10V3L4 14h7v7l9-11h-7z" 
                    />
                  </svg>
                </div>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                Kickstart Your Project Today

              </h3>

<Link href="/dedicated-developers/hire-developers">
              <button className="mt-6 px-8 py-4 cursor-pointer bg-cyan-400 text-gray-900 font-bold rounded-xl hover:bg-cyan-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 transform whitespace-nowrap text-base">
Build Your Team                 </button> </Link>

              {/* Trust Indicators */}
              <div className="mt-8 flex items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                  <span className="font-semibold">4.9/5</span>
                </div>
                <div className="h-4 w-px bg-gray-300"></div>
                <div className="font-semibold">500+ Projects</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.9;
            transform: scale(1.05);
          }
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
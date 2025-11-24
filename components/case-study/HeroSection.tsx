'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Calendar, Clock, Building2, TrendingUp, DollarSign, Zap, ArrowRight } from 'lucide-react'





export default function HeroSection() {
  return (
    <>
   <div className="container mx-auto px-6 max-w-7xl pt-8 pb-4">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
          >

            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm">Back to Case Studies</span>
          </motion.button>
        </div>

      <section className="relative  bg-gradient-to-b from-[#0E0918] via-[#1a1325] to-[#0E0918] pt-16 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzhiNWNmNiIgc3Ryb2tlLXdpZHRoPSIuNSIgb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')] opacity-20"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between w-full">

          {/* Left Side Text + Button */}
          <div className="flex-1 flex flex-col justify-start items-center text-center mb-8 md:mb-0 space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight" >
         Transforming    <span className="text-purple-500">
             Automation
         </span>
            </h1>
            <p className="text-lg text-gray-300 max-w-md mt-2 leading-relaxed">
             How we helped a Fortune 500 company reduce operational costs by 45%,
              automate 85% of workflows, and achieve 70% revenue growth through
              intelligent automation and AI-driven insights.
            </p>

            {/* <button className="group bg-purple-500 text-white px-6 py-3 rounded-lg text-center hover:bg-purple-600 transition-all font-medium flex items-center space-x-2 shadow-lg shadow-purple-500/30">
              <span>View al</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
            </button> */}

          </div>

          {/* Right Side Image */}
          <div className="flex-1 flex justify-center md:justify-end mt-8 md:mt-0 ">
            <img
              src="/assets/home/coreway-ai.png"
              alt="Hero Image"
              className="w-full max-w-4xl rounded-lg shadow-lg"
            />
          </div>

        </div>
      </div>
      </section>

      <section className="relative bg-gradient-to-b from-[#0E0918] via-[#1a1325] to-[#0E0918] py-20 border-b border-gray-900">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-fuchsia-600/20 blur-3xl"></div>
            <img
              src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1400"
              alt="Enterprise workspace"
              className="w-full h-[600px] object-cover rounded-3xl border border-purple-500/20"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent rounded-3xl"></div>

            <div className="absolute bottom-0 left-0 right-0 p-12">
              <div className="grid grid-cols-3 gap-8">
                {[
                  { icon: TrendingUp, value: '70%', label: 'Revenue Growth', color: 'from-purple-400 to-fuchsia-400' },
                  { icon: DollarSign, value: '45%', label: 'Cost Reduction', color: 'from-purple-400 to-fuchsia-400' },
                  { icon: Zap, value: '85%', label: 'Workflows Automated', color: 'from-purple-400 to-fuchsia-400' },
                ].map((stat, index) => {
                  const Icon = stat.icon
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                      className="bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <div className={`text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                        {stat.value}
                      </div>
                      <div className="text-gray-300 font-medium">{stat.label}</div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

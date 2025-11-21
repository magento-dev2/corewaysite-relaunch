'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Code, Clock, Users, DollarSign } from 'lucide-react'
import { useState } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const qnaItems = [
  {
    icon: Clock,
    question: 'What was the project timeline and key milestones?',
    answer: 'The project was completed in 6 months with four major phases: Discovery & Planning (1 month), Development & Integration (3 months), Testing & Training (1 month), and Deployment & Optimization (1 month). Key milestones included legacy system integration, employee training completion, and successful production launch.',
    color: 'from-purple-500 to-violet-600',
  },
  {
    icon: Code,
    question: 'How did you approach the technical implementation?',
    answer: 'We employed an agile methodology with bi-weekly sprints, starting with a microservices architecture for scalability. The implementation included containerized deployments, CI/CD pipelines, comprehensive API development, and progressive migration strategies to minimize disruption.',
    color: 'from-fuchsia-500 to-purple-600',
  },
  {
    icon: Users,
    question: 'How was change management handled across the organization?',
    answer: 'We implemented a comprehensive change management program including executive sponsorship, department champions, phased rollouts, hands-on training sessions, detailed documentation, and a dedicated support team. User adoption rates exceeded 92% within the first month.',
    color: 'from-violet-500 to-purple-600',
  },
  {
    icon: DollarSign,
    question: 'What was the ROI and business impact?',
    answer: 'The client achieved ROI within 9 months (3 months ahead of target) through 45% reduction in operational costs, 70% increase in processing speed, elimination of manual errors, and improved customer satisfaction scores. Annual cost savings exceeded $2.5M.',
    color: 'from-pink-500 to-fuchsia-600',
  },
]

export default function QnASection() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#0E0918] via-[#1a1325] to-[#0E0918]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
            Implementation Blueprint
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Detailed insights into our strategic approach and execution
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {qnaItems.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <AccordionItem
                    value={`item-${index}`}
                    className="bg-gray-900/50 backdrop-blur-sm rounded-2xl shadow-lg border border-purple-500/30 overflow-hidden"
                  >
                    <AccordionTrigger className="px-8 py-6 hover:no-underline hover:bg-purple-500/10 transition-colors">
                      <div className="flex items-center gap-4 text-left">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-lg font-semibold text-white">
                          {item.question}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-8 pb-6 text-gray-300 text-base leading-relaxed">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              )
            })}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}

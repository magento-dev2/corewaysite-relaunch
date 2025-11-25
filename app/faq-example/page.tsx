"use client";

import FAQ from '@/components/FAQ';

const sampleFAQs = [
  {
    question: "What services do you offer?",
    answer: "We offer a comprehensive range of services including AI integration, custom software development, cloud infrastructure, dedicated developers, and digital transformation solutions. Our team specializes in cutting-edge technologies to help businesses scale and innovate."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on scope and complexity. Simple integrations can be completed in 2-4 weeks, while comprehensive solutions typically take 3-6 months. We provide detailed project timelines during the discovery phase and maintain transparent communication throughout development."
  },
  {
    question: "Do you provide ongoing support and maintenance?",
    answer: "Yes! We offer comprehensive support packages including 24/7 monitoring, regular updates, security patches, and performance optimization. Our team ensures your systems run smoothly and efficiently long after launch."
  },
  {
    question: "What is your pricing model?",
    answer: "We offer flexible pricing models including fixed-price projects, time & materials, and dedicated team engagements. Pricing depends on project scope, technology stack, and team size. Contact us for a customized quote tailored to your specific needs."
  },
  {
    question: "Can you work with our existing technology stack?",
    answer: "Absolutely! Our developers are proficient in 50+ technologies across various platforms. We seamlessly integrate with your existing systems and can work with any technology stack including legacy systems, modern frameworks, and emerging technologies."
  },
  {
    question: "How do you ensure project security and data privacy?",
    answer: "Security is our top priority. We follow industry best practices including encryption, secure coding standards, regular security audits, and compliance with regulations like GDPR, HIPAA, and SOC 2. All team members sign NDAs and we implement strict access controls."
  }
];

export default function FAQExamplePage() {
  return (
    <div className="min-h-screen bg-[#0E0918]">
      <div className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-6">
            FAQ Component <span className="text-purple-500">Examples</span>
          </h1>
          <p className="text-xl text-gray-300">
            Dynamic FAQ component with modern design and animations
          </p>
        </div>
      </div>

      <FAQ
        badge="Help Center"
        title="Common Questions & Answers"
        description="Everything you need to know about our services and how we work"
        faqs={sampleFAQs}
        columns={1}
        showContactCTA={true}
        contactText="Still have questions?"
        contactButtonText="Contact Our Team"
      />

      <div className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Usage Example:</h2>
          <pre className="bg-[#0E0918] p-6 rounded-xl overflow-x-auto">
            <code className="text-purple-300 text-sm">{`<FAQ
  badge="Help Center"
  title="Common Questions & Answers"
  description="Everything you need to know"
  faqs={[
    {
      question: "Your question here?",
      answer: "Your answer here"
    }
  ]}
  columns={1}
  showContactCTA={true}
  contactText="Still have questions?"
  contactButtonText="Contact Support"
/>`}</code>
          </pre>
        </div>
      </div>

      <div className="py-24">
        <FAQ
          badge="Two Column Layout"
          title="FAQ with 2 Columns"
          description="Compact layout perfect for pages with many questions"
          faqs={sampleFAQs}
          columns={2}
          showContactCTA={false}
        />
      </div>
    </div>
  );
}

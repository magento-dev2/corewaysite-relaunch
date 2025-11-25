"use client";

import WhyCorewaySection from '@/components/WhyCorewaySection';

const exampleReasons = [
  {
    icon: "trophy",
    title: "Proven Track Record",
    description: "500+ successful projects delivered across industries. Our portfolio speaks for itself with measurable results and satisfied clients worldwide.",
    stat: "500+",
    statLabel: "Projects Delivered"
  },
  {
    icon: "zap",
    title: "Lightning Fast Delivery",
    description: "Agile methodology and experienced teams enable us to deliver MVPs in weeks, not months. Get to market faster than your competition.",
    stat: "3x",
    statLabel: "Faster Than Average"
  },
  {
    icon: "shield",
    title: "Enterprise Security",
    description: "Bank-level security protocols, GDPR compliance, and SOC 2 certification. Your data and systems are in safe hands.",
    stat: "99.9%",
    statLabel: "Uptime Guaranteed"
  },
  {
    icon: "users",
    title: "Expert Team",
    description: "Senior developers, AI specialists, and cloud architects with 10+ years average experience. Top 1% talent working on your project.",
    stat: "150+",
    statLabel: "Expert Engineers"
  },
  {
    icon: "trending",
    title: "Scalable Solutions",
    description: "Architecture designed to grow with your business. From startup to enterprise, we build systems that scale seamlessly.",
    stat: "10x",
    statLabel: "Scale Capacity"
  },
  {
    icon: "clock",
    title: "24/7 Support",
    description: "Round-the-clock support across all time zones. Our global team ensures you're never left waiting for critical assistance.",
    stat: "24/7",
    statLabel: "Always Available"
  }
];

const customStats = [
  { value: "500+", label: "Projects Delivered", highlight: true },
  { value: "98%", label: "Client Satisfaction", highlight: false },
  { value: "50+", label: "Technologies", highlight: false },
  { value: "24/7", label: "Support Available", highlight: true }
];

export default function WhyCorewayExamplePage() {
  return (
    <div className="min-h-screen bg-[#0E0918]">
      <div className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-6">
            Why Coreway Section <span className="text-purple-500">Component</span>
          </h1>
          <p className="text-xl text-gray-300">
            Modern, dynamic component with purple theme and animations
          </p>
        </div>
      </div>

      <WhyCorewaySection
        badge="Why Choose Us"
        title="Why Choose Coreway Solutions"
        subtitle="We're not just another software company. We're your technology partner committed to delivering exceptional results through innovation and expertise."
        reasons={exampleReasons}
        showStats={true}
        stats={customStats}
      />

      <div className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Usage Example:</h2>
          <pre className="bg-[#0E0918] p-6 rounded-xl overflow-x-auto">
            <code className="text-purple-300 text-sm">{`<WhyCorewaySection
  badge="Why Choose Us"
  title="Why Choose Coreway Solutions"
  subtitle="Your technology partner for success"
  reasons={[
    {
      icon: "trophy",
      title: "Proven Track Record",
      description: "500+ successful projects",
      stat: "500+",
      statLabel: "Projects Delivered"
    }
  ]}
  showStats={true}
  stats={[
    { value: "500+", label: "Projects", highlight: true }
  ]}
/>`}</code>
          </pre>

          <div className="mt-6 p-4 bg-purple-500/10 border border-purple-500/30 rounded-lg">
            <h3 className="text-lg font-bold text-white mb-2">Available Icons:</h3>
            <p className="text-gray-300 text-sm">
              trophy, zap, shield, users, trending, clock, star
            </p>
          </div>
        </div>
      </div>

      <div className="py-24">
        <WhyCorewaySection
          badge="Our Advantages"
          title="The Coreway Difference"
          subtitle="See what sets us apart from other development agencies"
          reasons={[
            {
              icon: "shield",
              title: "Enterprise Security",
              description: "Bank-level security with SOC 2 compliance and regular audits."
            },
            {
              icon: "zap",
              title: "Rapid Development",
              description: "Agile sprints deliver working software every 2 weeks."
            },
            {
              icon: "star",
              title: "Top Talent",
              description: "Only the top 1% of developers make it through our vetting process."
            }
          ]}
          showStats={false}
        />
      </div>
    </div>
  );
}

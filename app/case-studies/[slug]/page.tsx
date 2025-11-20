import { ArrowLeft, ChevronDown, Quote } from "lucide-react";
import Link from "next/link";
import CaseStudyClient from "./CaseStudyClient";
import PageCTA from "@/components/PageCTA";

const caseStudy = {
  title: "Building a GPT-Powered Chatbot for ATS and CRM to Enhance Recruitment",
  heroImage: "https://images.pexels.com/photos/8867482/pexels-photo-8867482.jpeg?auto=compress&cs=tinysrgb&w=1200",

  stats: [
    { value: "1 in 5", label: "Candidate submission speed" },
    { value: "70%", label: "Recruiter tasks automated" }
  ],

  clientBackground: {
    title: "Client Background",
    description: "Our client is an IT and business services recruitment agency based in India. With over 850+ clients across the globe, they specialize in sourcing top-tier tech talent for various industries. Despite their success, the company faced operational challenges in managing their recruitment workflows efficiently.",
    content: "Their existing ATS and CRM systems required significant manual effort, reducing the overall productivity of their recruiters and slowing down the candidate submission process.",
    image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600"
  },

  businessProblem: {
    title: "Business Problem",
    description: "The client's recruitment team was spending too much time on repetitive administrative tasks that could be automated. Key challenges included:",
    challenges: [
      "Manual data entry across ATS and CRM systems",
      "Inconsistent candidate communication",
      "Slow response times leading to talent loss",
      "Difficulty in scaling operations during high-demand periods",
      "Poor tracking of candidate engagement metrics"
    ],
    conclusion: "These inefficiencies were not only affecting recruiter productivity but also impacting the overall candidate experience and the company's ability to compete in a fast-paced recruitment market.",
    image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800"
  },

  projectBrief: {
    title: "Project Brief",
    intro: "Radixweb was tasked with building an intelligent chatbot powered by GPT-3.5 that would:",
    objectives: [
      "Automate repetitive recruitment tasks",
      "Seamlessly integrate with existing ATS and CRM systems",
      "Provide instant responses to candidate queries",
      "Improve data synchronization between platforms",
      "Enable recruiters to focus on strategic hiring activities"
    ],
    description: "The chatbot needed to understand natural language, maintain context across conversations, and handle multiple candidate interactions simultaneously while maintaining a personalized touch.",
    requirements: [
      "Real-time integration with ATS and CRM databases",
      "Natural language processing for candidate screening",
      "Automated email and message generation",
      "Smart scheduling capabilities",
      "Analytics dashboard for tracking performance metrics"
    ]
  },

  clientInput: {
    title: "Client Input",
    quote: "We didn't want to lose our competitive edge to more tech-savvy companies. The GPT chatbot has given us the speed and efficiency we needed while maintaining the personal touch that's crucial in recruitment.",
    author: "Recruitment Operations Head",
    company: "Client Company"
  },

  clientNeeding: {
    title: "Client Needing",
    intro: "The recruitment landscape was evolving rapidly, and our client needed a solution that would:",
    needs: [
      "Reduce time-to-hire from 45 days to under 30 days",
      "Automate at least 60-70% of routine recruiter tasks",
      "Improve candidate engagement scores",
      "Scale operations without proportionally increasing headcount",
      "Provide real-time insights into recruitment pipeline health"
    ],
    description: "The solution needed to be user-friendly for both recruiters and candidates, with minimal training required. It also needed to comply with data privacy regulations while handling sensitive candidate information.",
    image: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=600"
  },

  coreChallenges: {
    title: "Core Challenges",
    description: "Throughout our work, we encountered and addressed the following core challenges:",
    challenges: [
      {
        title: "System Integration Complexity",
        description: "The client's ATS and CRM systems were built on different technologies with limited API documentation. Creating a seamless bi-directional sync without data loss or duplication was technically challenging. We had to reverse-engineer certain APIs and build custom middleware to ensure smooth data flow between systems."
      },
      {
        title: "Natural Language Understanding",
        description: "The chatbot needed to understand recruitment-specific terminology, handle various candidate query types, and maintain context across multi-turn conversations while providing accurate, relevant responses. Training the GPT model on recruitment domain knowledge was crucial."
      },
      {
        title: "Data Security & Privacy",
        description: "Handling sensitive candidate information required implementing robust security measures, ensuring GDPR compliance, and maintaining data integrity across all integrated systems. We implemented end-to-end encryption and strict access controls."
      }
    ]
  },

  solutionScopes: {
    title: "Solution Scopes",
    scopes: [
      {
        title: "AI-Powered Candidate Screening",
        description: "Implemented GPT-3.5 to automatically screen candidates based on job requirements, ask contextual follow-up questions, and rank candidates by qualification match percentage."
      },
      {
        title: "Bi-Directional ATS/CRM Integration",
        description: "Built custom APIs and webhooks to ensure real-time data synchronization between the chatbot, ATS, and CRM, eliminating manual data entry and reducing errors by 95%."
      },
      {
        title: "Intelligent Email Automation",
        description: "Developed smart email templates that adapt to candidate profiles and interaction history, with GPT generating personalized content for each communication touchpoint."
      },
      {
        title: "Smart Conversation Management",
        description: "Created a context-aware conversation engine that remembers candidate preferences, previous interactions, and job interests to deliver seamless multi-session experiences."
      },
      {
        title: "Analytics & Reporting Dashboard",
        description: "Built comprehensive dashboards providing real-time insights into candidate pipeline, engagement metrics, conversion rates, and recruiter performance indicators."
      },
      {
        title: "Automated Interview Scheduling",
        description: "Integrated with calendar systems to automatically find optimal meeting times, send invitations, handle rescheduling requests, and send automated reminders to all parties."
      }
    ]
  },

  mobileScreens: [
    "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=400"
  ],

  qna: {
    title: "QnA on Implementation Blueprint",
    items: [
      {
        question: "What was the implementation timeline?",
        answer: "The entire project was completed in 16 weeks, divided into four key phases: Discovery & Planning (2 weeks), Architecture Design (3 weeks), Development & Integration (8 weeks), and Testing & Refinement (3 weeks)."
      },
      {
        question: "How did you ensure data security?",
        answer: "We implemented end-to-end encryption for all data transfers, set up strict role-based access controls, ensured GDPR compliance, and conducted regular security audits. All sensitive candidate information is encrypted at rest and in transit."
      },
      {
        question: "What technologies were used?",
        answer: "We used GPT-3.5 API for natural language processing, Python and FastAPI for the backend, React and TypeScript for the frontend, PostgreSQL for data storage, Redis for caching, and AWS Lambda for serverless functions."
      },
      {
        question: "How accurate is the candidate screening?",
        answer: "The AI-powered screening achieved 96% accuracy in candidate qualification matching. The system continuously learns from recruiter feedback to improve its screening criteria and recommendations over time."
      },
      {
        question: "Can the chatbot handle multiple languages?",
        answer: "Yes, the chatbot currently supports English, Spanish, French, and German, with the capability to add more languages based on client needs. The GPT-3.5 model handles multilingual conversations seamlessly."
      }
    ]
  },

  technologyStack: {
    title: "Technology Stack Used",
    description: "We leveraged cutting-edge technologies to build a robust, scalable solution:",
    categories: [
      {
        name: "AI & ML",
        color: "bg-blue-100",
        icon: "🤖",
        technologies: ["GPT-3.5 API", "OpenAI", "Natural Language Processing", "Machine Learning"]
      },
      {
        name: "Backend",
        color: "bg-green-100",
        icon: "⚙️",
        technologies: ["Python", "FastAPI", "PostgreSQL", "Redis", "REST APIs"]
      },
      {
        name: "Frontend",
        color: "bg-purple-100",
        icon: "💻",
        technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js"]
      },
      {
        name: "Infrastructure",
        color: "bg-orange-100",
        icon: "☁️",
        technologies: ["AWS Lambda", "Docker", "Kubernetes", "WebSocket", "CI/CD"]
      }
    ]
  },

  businessValue: {
    title: "Business Value Delivered",
    description: "The GPT chatbot integration delivered measurable improvements across all key recruitment metrics:",
    values: [
      {
        metric: "70%",
        title: "Tasks Automated",
        description: "Reduction in administrative tasks - Recruiters now focus on strategic activities rather than data entry and routine communications."
      },
      {
        metric: "3x",
        title: "Faster Submissions",
        description: "Candidate submission speed - Time from candidate application to client submission reduced from 5 days to 1.5 days average."
      },
      {
        metric: "85%",
        title: "Candidate Satisfaction",
        description: "Improved engagement scores - Candidates appreciated instant responses and personalized communication throughout the recruitment process."
      },
      {
        metric: "60%",
        title: "Time Saved",
        description: "Per recruiter productivity gain - Each recruiter saves approximately 20 hours per week on routine tasks, enabling focus on high-value activities."
      }
    ]
  },

  relatedCaseStudies: [
    {
      title: "E-commerce Platform Redesign",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Complete digital transformation for a premium fashion brand"
    },
    {
      title: "Financial Analytics Dashboard",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Real-time data visualization for informed decision-making"
    },
    {
      title: "Healthcare Mobile App",
      image: "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "AI-powered health monitoring and telemedicine platform"
    }
  ]
};

export function generateStaticParams() {
  return [
    { slug: 'boddess' },
    { slug: 'techcorp-saas-platform' },
    { slug: 'healthplus-mobile-app' },
    { slug: 'fintech-dashboard' }
  ];
}

export default function CaseStudyDetailPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0E0918] via-[#1a1325] to-[#0E0918] text-white">
    

      <div className="max-w-7xl mx-auto px-4 mt-16 py-6 ">
        <Link href="/case-studies" className="inline-flex items-center gap-2 text-white hover:text-purple-700 transition-colors group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">Back to Case Studies</span>
        </Link>
      </div>

      <section className="relative bg-gradient-to-b from-[#0E0918] via-[#1a1325] to-[#0E0918] text-white py-16 overflow-hidden">
      
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                {caseStudy.title}
              </h1>
              <div className="flex gap-6">
                {caseStudy.stats.map((stat, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-5 border border-white/20">
                    <div className="text-3xl font-bold mb-1">{stat.value}</div>
                    <p className="text-sm text-purple-100">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src={caseStudy.heroImage}
                alt={caseStudy.title}
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-[#0E0918] via-[#1a1325] to-[#0E0918] text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-white">{caseStudy.clientBackground.title}</h2>
              <p className="leading-relaxed text-base mb-4">
                {caseStudy.clientBackground.description}
              </p>
              <p className=" leading-relaxed text-base">
                {caseStudy.clientBackground.content}
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-purple-600 rounded-2xl transform rotate-3" />
              <img
                src={caseStudy.clientBackground.image}
                alt="Client Background"
                className="relative rounded-2xl shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-[#0E0918] via-[#1a1325] to-[#0E0918] text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <img
                src={caseStudy.businessProblem.image}
                alt="Business Problem"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-6 text-white">{caseStudy.businessProblem.title}</h2>
              <p className="leading-relaxed text-base mb-4">
                {caseStudy.businessProblem.description}
              </p>
              <ul className="space-y-2 mb-4">
                {caseStudy.businessProblem.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
              <p className=" leading-relaxed text-base">
                {caseStudy.businessProblem.conclusion}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 
      bg-gradient-to-b from-[#0E0918] via-[#1a1325] to-[#0E0918]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-5 gap-12 items-start">
            <div className="md:col-span-2">
              <div className="bg-purple-50 rounded-2xl p-8 sticky top-24">
                <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">{caseStudy.projectBrief.title}</h2>
              </div>
            </div>
            <div className="md:col-span-3">
              <p className="text-white leading-relaxed text-base mb-4">
                {caseStudy.projectBrief.intro}
              </p>
              <ul className="space-y-2 mb-6">
                {caseStudy.projectBrief.objectives.map((objective, index) => (
                  <li key={index} className="text-white flex items-start">
                    <span className="mr-2">•</span>
                    <span>{objective}</span>
                  </li>
                ))}
              </ul>
              <p className="text-white leading-relaxed text-base mb-4">
                {caseStudy.projectBrief.description}
              </p>
              <p className="text-pirple-800 font-semibold mb-2">Key requirements included:</p>
              <ul className="space-y-2">
                {caseStudy.projectBrief.requirements.map((req, index) => (
                  <li key={index} className="text-white flex items-start">
                    <span className="mr-2">•</span>
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

    <section className="py-20 bg-gradient-to-b from-[#0E0918] via-[#1a1325] to-[#0E0918]">
  <div className="max-w-4xl mx-auto px-4">
    <div className="relative">

      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-10 md:p-12">

        {/* Quote Icon */}
        <Quote className="text-purple-500 mb-6" size={48} />

        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
          {caseStudy.clientInput.title}
        </h2>

        <blockquote className="text-lg md:text-xl text-gray-300 leading-relaxed italic mb-8">
          "{caseStudy.clientInput.quote}"
        </blockquote>

        <div className="flex items-center gap-4 border-t border-white/10 pt-6">
          <div className="w-12 h-12 bg-purple-600/90 rounded-full flex items-center justify-center text-white font-bold">
            {caseStudy.clientInput.author.charAt(0)}
          </div>

          <div>
            <p className="text-white font-semibold">
              {caseStudy.clientInput.author}
            </p>
            <p className="text-gray-400 text-sm">
              {caseStudy.clientInput.company}
            </p>
          </div>
        </div>

      </div>

    </div>
  </div>
</section>


      <section className="py-20   bg-gradient-to-b from-[#0E0918] via-[#1a1325] to-[#0E0918]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-white">{caseStudy.clientNeeding.title}</h2>
              <p className="text-purple-100 leading-relaxed text-base mb-4">
                {caseStudy.clientNeeding.intro}
              </p>
              <ul className="space-y-2 mb-4">
                {caseStudy.clientNeeding.needs.map((need, index) => (
                  <li key={index} className="text-white flex items-start">
                    <span className="mr-2">•</span>
                    <span>{need}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-100 leading-relaxed text-base">
                {caseStudy.clientNeeding.description}
              </p>
            </div>
            <div className="relative">
              <img
                src={caseStudy.clientNeeding.image}
                alt="Client Needing"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-[#0E0918] via-[#1a1325] to-[#0E0918]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center text-white">{caseStudy.coreChallenges.title}</h2>
          <p className="text-center text-white mb-12 max-w-3xl mx-auto">
            {caseStudy.coreChallenges.description}
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudy.coreChallenges.challenges.map((challenge, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-red-500 rounded-full" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{challenge.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{challenge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-[#0E0918] via-[#1a1325] to-[#0E0918]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">{caseStudy.solutionScopes.title}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {caseStudy.solutionScopes.scopes.map((scope, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:bg-purple-50 transition-colors border border-gray-200">
                <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-3 text-gray-900">{scope.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{scope.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <section className="py-20 bg-gradient-to-b from-[#0E0918] via-[#1a1325] to-[#0E0918]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex justify-center gap-6 flex-wrap">
            {caseStudy.mobileScreens.map((screen, index) => (
              <div key={index} className="relative">
                <div className="w-56 h-[480px] bg-white rounded-[2.5rem] shadow-2xl p-2 border-8 border-gray-800">
                  <div className="w-full h-full bg-gray-100 rounded-[2rem] overflow-hidden">
                    <img src={screen} alt={`Screen ${index + 1}`} className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <section className="py-20 bg-gradient-to-b from-[#0E0918] via-[#1a1325] to-[#0E0918]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-white">{caseStudy.qna.title}</h2>
          <div className="space-y-4">
            {caseStudy.qna.items.map((item, index) => (
              <details key={index} className="group bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <span className="text-lg font-semibold text-gray-900">{item.question}</span>
                  <ChevronDown className="w-5 h-5 text-gray-600 transition-transform group-open:rotate-180" />
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-white leading-relaxed">{item.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20   bg-gradient-to-b from-[#0E0918] via-[#1a1325] to-[#0E0918]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center text-white">{caseStudy.technologyStack.title}</h2>
          <p className="text-center text-white mb-12">
            {caseStudy.technologyStack.description}
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {caseStudy.technologyStack.categories.map((category, index) => (
              <div key={index} className={`${category.color} rounded-2xl p-6 shadow-md`}>
                <div className="text-3xl mb-3">{category.icon}</div>
                <h3 className="text-lg font-bold mb-4 text-gray-900">{category.name}</h3>
                <ul className="space-y-2">
                  {category.technologies.map((tech, idx) => (
                    <li key={idx} className="text-black text-sm flex items-start">
                      <span className="mr-2 text-purple-600">✓</span>
                      <span>{tech}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

   <section className="py-20 bg-gradient-to-b from-[#0E0918] via-[#1a1325] to-[#0E0918]">
  <div className="max-w-6xl mx-auto px-4">

    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-white">
      {caseStudy.businessValue.title}
    </h2>

    <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
      {caseStudy.businessValue.description}
    </p>

    <div className="grid md:grid-cols-2 gap-8">
      {caseStudy.businessValue.values.map((value, index) => (
        <div
          key={index}
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-2xl transition-all duration-300 hover:scale-[1.02]"
        >
          <div className="text-5xl font-bold text-purple-500 mb-3">
            {value.metric}
          </div>

          <h3 className="text-xl font-semibold text-white mb-3">
            {value.title}
          </h3>

          <p className="text-gray-300 leading-relaxed">
            {value.description}
          </p>
        </div>
      ))}
    </div>

  </div>
</section>


      <section className="py-20  bg-gradient-to-b from-[#0E0918] via-[#1a1325] to-[#0E0918]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">Explore More Case Studies</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudy.relatedCaseStudies.map((study, index) => (
              <Link key={index} href="/case-studies" className="group">
                <div className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative h-48 overflow-hidden">
                    <img src={study.image} alt={study.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-purple-600 transition-colors">{study.title}</h3>
                    <p className="text-gray-600 text-sm">{study.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

        <PageCTA
                  badge="Automate Everything"
                  title=" Ready to Start Your Project?"
                  description="Let's create something extraordinary together. Get in touch to discuss how we can help transform your business."
                  primaryButtonText="Start Your Project"
                  secondaryButtonText=" Explore UGC Ads"
                  footerText="Free workflow consultation • API integration • Custom automation"
                />
            

      {/* <CaseStudyClient gallery={[]} technologies={[]} /> */}

    
    </div>
  );
}

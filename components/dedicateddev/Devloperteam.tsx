import { Code2, Briefcase, Award, Zap } from 'lucide-react';

interface Developer {
  id: number;
  name: string;
  role: string;
  experience: string;
  avatar: string;
  techStack: string[];
  highlights: string[];
  gradient: string;
}

const developers: Developer[] = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Senior Full Stack Developer",
    experience: "8+ Years",
    avatar: "SM",
    techStack: ["React", "Node.js", "TypeScript", "PostgreSQL", "AWS"],
    highlights: [
      "Led 15+ enterprise projects",
      "AWS Certified Solutions Architect",
      "Open source contributor"
    ],
    gradient: "from-purple-600 to-pink-600"
  },
  {
    id: 2,
    name: "Marcus Chen",
    role: "DevOps Engineer",
    experience: "6+ Years",
    avatar: "MC",
    techStack: ["Docker", "Kubernetes", "Jenkins", "Terraform", "Python"],
    highlights: [
      "Reduced deployment time by 70%",
      "Kubernetes Certified Administrator",
      "Built CI/CD pipelines for 50+ apps"
    ],
    gradient: "from-blue-600 to-cyan-600"
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Frontend Architect",
    experience: "10+ Years",
    avatar: "ER",
    techStack: ["React", "Vue.js", "Next.js", "TailwindCSS", "Figma"],
    highlights: [
      "Design systems expert",
      "Performance optimization specialist",
      "Speaker at 5+ tech conferences"
    ],
    gradient: "from-violet-600 to-purple-600"
  },
  {
    id: 4,
    name: "James Anderson",
    role: "Backend Engineer",
    experience: "7+ Years",
    avatar: "JA",
    techStack: ["Go", "Python", "GraphQL", "MongoDB", "Redis"],
    highlights: [
      "Scaled systems to 10M+ users",
      "Microservices architecture expert",
      "Published author on system design"
    ],
    gradient: "from-emerald-600 to-teal-600"
  }
];

export default function Dedicatedteam() {
  return (
    <div className="min-h-screendss  text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-purple-500">
            Our Developer Team
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Meet our exceptional developers who bring innovation and expertise to every project
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {developers.map((developer, index) => (
                           <div className="h-full group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20">

              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>

              <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20">
                <div className="flex items-start gap-6 mb-6">
                  <div className={`relative w-20 h-20 rounded-xl bg-gradient-to-br ${developer.gradient} flex items-center justify-center text-2xl font-bold shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    {developer.avatar}
                    <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-2xl font-bold mb-1 text-white group-hover:text-purple-300 transition-colors">
                      {developer.name}
                    </h3>
                    <p className="text-purple-400 font-medium mb-2">{developer.role}</p>
                    <div className="flex items-center gap-2 text-gray-400">
                      <Briefcase size={16} />
                      <span className="text-sm">{developer.experience}</span>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Code2 size={18} className="text-purple-400" />
                    <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wide">Tech Stack</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {developer.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 bg-purple-500/10 border border-purple-500/20 rounded-lg text-sm text-purple-300 hover:bg-purple-500/20 hover:border-purple-500/40 transition-all duration-300 cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Award size={18} className="text-purple-400" />
                    <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wide">Key Highlights</h4>
                  </div>
                  <ul className="space-y-2">
                    {developer.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-400 text-sm group/item">
                        <Zap size={16} className="text-purple-500 flex-shrink-0 mt-0.5 group-hover/item:text-purple-400 transition-colors" />
                        <span className="group-hover/item:text-gray-300 transition-colors">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
                      {/* <div className="inline-block px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-6"> */}

          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-xl rounded-full border border-white/10">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-gray-300 text-sm">Available for new projects</span>
          </div>
        </div>
      </div>
    </div>
  );
}



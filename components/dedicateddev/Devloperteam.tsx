import { Code2, Briefcase, Award, Zap } from 'lucide-react';
import Link from 'next/link';

interface Developer {
    id: number;
    name: string;
    role: string;
    experience: string;
    avatar: string;
    techStack: string[];
    highlights: string[];
    gradient: string;
    cvUrl?: string;
}

const developers: Developer[] = [
    {
        id: 1,
        name: "Alpesh R.",
        role: "Principal DevOps & Cloud Engineer",
        experience: "11+ Years",
        avatar: "AR",
        techStack: [
            "AWS",
            "Docker",
            "Linux",
            "CI/CD",
            "Nginx",
            "GitHub Actions",
            "S3",
            "Cloud Infrastructure"
        ],
        highlights: [
            "Managed 200TB+ cloud storage",
            "AWS Certified Solutions Architect",
            "Designed large-scale SaaS & IoT infrastructure"
        ],
        gradient: "from-orange-600 to-amber-600",
        cvUrl: "/cv/Alpesh-devops_aws-CV.pdf"
    },
    {
        id: 2,
        name: "Ravi C.",
        role: "Senior PHP ERP & Full Stack Developer",
        experience: "8+ Years",
        avatar: "RC",
        techStack: [
            "PHP",
            "Laravel",
            "CodeIgniter",
            "MySQL",
            "PostgreSQL",
            "REST APIs",
            "Docker"
        ],
        highlights: [
            "Built multiple ERP platforms",
            "Expert in finance & reporting systems",
            "Developed SaaS & IoT dashboards"
        ],
        gradient: "from-blue-600 to-cyan-600",
        cvUrl: "/cv/Ravi-PHP-ERP-Fullstack_developer_CV.pdf"
    },
    {
        id: 3,
        name: "Niks R.",
        role: "Senior MERN Stack Developer",
        experience: "6+ Years",
        avatar: "NR",
        techStack: [
            "React",
            "Next.js",
            "Node.js",
            "MongoDB",
            "Redis",
            "Tailwind CSS",
            "Docker"
        ],
        highlights: [
            "Built scalable SaaS platforms",
            "Strong API & performance optimization skills",
            "Payment gateway integrations"
        ],
        gradient: "from-purple-600 to-pink-600",
        cvUrl: "/cv/Niks-Fullstack_developer_CV.pdf"
    },
    {
        id: 4,
        name: "Nial C.",
        role: "Senior Magento Developer",
        experience: "11+ Years",
        avatar: "NC",
        techStack: [
            "Magento 2",
            "PHP",
            "JavaScript",
            "MySQL",
            "Knockout JS",
            "HTML",
            "jQuery"
        ],
        highlights: [
            "Adobe Certified Magento Developer",
            "Magento 1 → 2 migration expert",
            "Built large B2B & marketplace stores"
        ],
        gradient: "from-red-600 to-rose-600",
        cvUrl: "/cv/Nial- Magento_developer_CV.pdf"
    },
    {
        id: 5,
        name: "Dhaman",
        role: "Senior AI & Automation Engineer",
        experience: "7+ Years",
        avatar: "DA",
        techStack: [
            "Python",
            "LLMs",
            "LangChain",
            "FastAPI",
            "AI Agents",
            "FAISS",
            "Docker"
        ],
        highlights: [
            "Built AI-powered automation platforms",
            "Developed RAG-based chatbots",
            "Expert in workflow automation & AI agents"
        ],
        gradient: "from-emerald-600 to-teal-600",
        cvUrl: "/cv/Dhaman-AI & Automation Engineer.pdf"
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

                                <div className="mt-6 flex gap-4">
                                    {/* View CV Button */}
                                    <button
                                        type="button"
                                        onClick={() => {
                                            window.open(developer.cvUrl!, '_blank', 'noopener,noreferrer');
                                        }}
                                        className="flex-1 cursor-pointer text-center px-4 py-2 rounded-xl bg-purple-500/20 border border-purple-500/30 text-purple-300 font-medium hover:bg-purple-500/30 hover:border-purple-500/50 transition-all duration-300"
                                    >
                                        View CV
                                    </button>




                                    {/* Schedule Meeting Button */}
                                    <Link href="/dedicated-developers/hire-developers">
                                        <button

                                            className="flex-1 px-4 cursor-pointer py-2 rounded-xl bg-pink-500/20 border border-pink-500/30 text-pink-300 font-medium hover:bg-pink-500/30 hover:border-pink-500/50 transition-all duration-300"
                                        >
                                            Schedule Meeting
                                        </button>
                                    </Link>
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



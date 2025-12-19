"use client";

import { motion } from "framer-motion";
import { Upload, ScanEye, Cpu, FolderTree, CheckCircle2, Download } from "lucide-react";

const processSteps = [
  {
    number: "01",
    icon: <Upload className="w-8 h-8" />,
    title: "Import Images",
    description: "Upload from local storage, cloud services (Dropbox, Google Drive, AWS S3), or connect via FTP/SFTP",
    features: ["Drag & drop interface", "Bulk upload support", "Cloud integration"],
    color: "from-purple-500 to-violet-600",
  },
  {
    number: "02",
    icon: <ScanEye className="w-8 h-8" />,
    title: "AI Analysis",
    description: "Computer vision algorithms scan each image to identify objects, scenes, faces, colors, and context",
    features: ["Object detection", "Scene recognition", "Facial analysis"],
    color: "from-violet-500 to-purple-600",
  },
  {
    number: "03",
    icon: <Cpu className="w-8 h-8" />,
    title: "Smart Processing",
    description: "Extracts metadata, detects duplicates, analyzes quality, and applies your custom organization rules",
    features: ["Metadata extraction", "Duplicate detection", "Quality assessment"],
    color: "from-purple-600 to-violet-500",
  },
  {
    number: "04",
    icon: <FolderTree className="w-8 h-8" />,
    title: "Auto-Organization",
    description: "Creates logical folder structures, renames files, and applies tags based on content and your preferences",
    features: ["Smart folder creation", "Batch renaming", "Auto-tagging"],
    color: "from-violet-600 to-purple-500",
  },
  {
    number: "05",
    icon: <CheckCircle2 className="w-8 h-8" />,
    title: "Review & Refine",
    description: "Preview the organized structure, make adjustments, and approve changes before finalizing",
    features: ["Visual preview", "Manual override", "Undo changes"],
    color: "from-purple-500 to-violet-700",
  },
  {
    number: "06",
    icon: <Download className="w-8 h-8" />,
    title: "Export & Sync",
    description: "Download organized folders or sync directly to cloud storage with your new structure",
    features: ["Multi-format export", "Cloud sync", "Backup creation"],
    color: "from-violet-500 to-purple-700",
  },
];

export default function ImageReorgProcess() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#0E0918] to-[#0A0F1E] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAyKSIvPjwvZz48L3N2Zz4=')] opacity-20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full text-purple-300 text-sm font-semibold mb-4">
            How It Works
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Six Simple Steps to Perfect Organization
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From chaotic folders to beautifully organized collections in minutes
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="relative group"
              >
                <div className="relative bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-violet-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

                  <div className="relative z-10">
                    <div className="flex items-start gap-6 mb-6">
                      <div className="flex-shrink-0">
                        <div
                          className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}
                        >
                          <div className="text-white">{step.icon}</div>
                        </div>
                      </div>

                      <div className="flex-1">
                        <div className="text-6xl font-bold text-white/10 mb-2">{step.number}</div>
                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                          {step.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed">{step.description}</p>

                    <div className="space-y-2">
                      {step.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                          <span className="text-sm text-gray-400">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {index < processSteps.length - 1 && index % 2 === 1 && (
                  <div className="hidden lg:block absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-gradient-to-b from-purple-500/50 to-transparent"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col items-center gap-4 p-8 bg-gradient-to-br from-purple-900/30 to-violet-900/30 border border-purple-500/30 rounded-2xl backdrop-blur-sm">
            <CheckCircle2 className="w-12 h-12 text-purple-400" />
            <p className="text-lg text-white font-semibold">Average processing time: 2-5 minutes for 10,000 images</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

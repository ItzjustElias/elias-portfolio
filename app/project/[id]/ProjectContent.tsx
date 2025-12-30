"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { PROJECT_DATA } from "../../lib/data";

const GridCross = ({ className = "", isLoeka = false }) => (
  <div className={`absolute font-thin text-xl select-none pointer-events-none transition-colors duration-500 ${className} ${isLoeka ? 'text-red-500' : 'text-zinc-800'}`}>
    {isLoeka ? "❤" : "+"}
  </div>
);

export default function ProjectContent({ id }: { id: string }) {
  const isLoeka = id === "theone";

  const project = PROJECT_DATA[id] || {
    title: id,
    year: "future",
    role: "Designer",
    context: "Creative Work",
    description: "Project details coming soon.",
    tags: ["Design", "Dev"]
  };

  const accentColor = isLoeka ? "#FF0000" : "#5D3FD3";
  const textColorClass = isLoeka ? "text-red-500" : "text-[#5D3FD3]";
  const hoverColorClass = isLoeka ? "hover:text-red-500" : "hover:text-[#5D3FD3]";
  const glowClass = isLoeka ? "drop-shadow-[0_0_35px_rgba(255,0,0,0.5)]" : "";

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`relative z-10 min-h-screen text-white pt-32 pb-20 px-6 md:px-12 backdrop-blur-md transition-colors duration-1000 ${isLoeka ? 'bg-red-950/10' : 'bg-black/40'}`}
    >
      <div className="max-w-7xl mx-auto relative">
        <GridCross className="-top-10 -left-4" isLoeka={isLoeka} />

        <Link href="/" className={`group inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-500 ${hoverColorClass} transition-colors mb-16`}>
          <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Index
        </Link>

        <header className="mb-24">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className={glowClass}
          >
            <span className={`font-mono ${textColorClass} text-xs mb-4 block uppercase tracking-widest transition-colors`}>
              {isLoeka ? "❤ System.Affection: Maximum" : project.context}
            </span>

            <h1
              style={{ color: isLoeka ? accentColor : 'white' }}
              className="text-[15vw] md:text-[12vw] font-black uppercase tracking-tighter leading-[0.8] mb-12 italic transition-all"
            >
              {project.title}
            </h1>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-white/10">
            {[
              { label: "Year", val: project.year },
              { label: "Role", val: project.role },
              { label: "Sector", val: isLoeka ? "Personal" : "Technology" },
              { label: "Status", val: isLoeka ? "Infinite" : "Completed" }
            ].map((info, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + (i * 0.1) }}
                className="flex flex-col gap-1"
              >
                <span className="font-mono text-[9px] text-zinc-600 uppercase tracking-widest">{info.label}</span>
                <span className="text-sm font-bold uppercase" style={{ color: (isLoeka && i === 0) ? accentColor : 'white' }}>
                  {info.val}
                </span>
              </motion.div>
            ))}
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="md:col-span-5"
          >
            <h2 className="font-mono text-[10px] text-zinc-500 uppercase tracking-[0.5em] mb-6">
              {isLoeka ? "Message" : "Abstract"}
            </h2>
            <p className={`text-xl md:text-2xl leading-relaxed font-light transition-colors ${isLoeka ? 'text-zinc-100' : 'text-zinc-300'}`}>
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-8">
              {project.tags.map((tag: string) => (
                <span
                  key={tag}
                  style={{ borderColor: isLoeka ? `${accentColor}44` : '' }}
                  className={`px-4 py-2 border rounded-full text-[10px] uppercase font-mono transition-colors ${isLoeka ? 'text-red-400' : 'border-white/5 text-zinc-500'}`}
                >
                  {tag}
                </span>
              ))}
              {project.githubUrl && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="mt-12"
                >
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center gap-4 px-8 py-4 bg-white/5 border border-white/10 rounded-full overflow-hidden transition-all hover:border-[#5D3FD3]/50"
                    style={{ borderColor: isLoeka ? '#FF000044' : '' }}
                  >
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity"
                      style={{ backgroundColor: accentColor }}
                    />

                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="z-10 text-white">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>

                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white z-10">
                      Source_Code.sh
                    </span>

                    <span className={`text-xs transition-transform group-hover:translate-x-1 z-10 ${textColorClass}`}>
                      -&gt;
                    </span>
                  </a>
                </motion.div>
              )}
            </div>
          </motion.div>

          <div className="md:col-span-7 grid grid-cols-1 gap-6">
            <motion.div
              whileHover={{ scale: 0.99 }}
              className={`aspect-video border rounded-4xl overflow-hidden group relative transition-colors ${isLoeka ? 'bg-red-950/20 border-red-500/20' : 'bg-zinc-900/30 border-white/10'}`}
            >
              <div
                style={{ backgroundColor: isLoeka ? accentColor : '#5D3FD3' }}
                className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity"
              />
              <div className="absolute top-6 right-6 font-mono text-[10px] text-zinc-700">{isLoeka ? "LOVE.01" : "FIG. 01"}</div>
            </motion.div>
          </div>
        </div>

        <footer className="pt-20 border-t border-white/10 text-center">
          <Link
            href={isLoeka ? "/" : "/project/minecraft"}
            style={{ color: isLoeka ? accentColor : '' }}
            className={`text-4xl md:text-6xl font-black uppercase transition-colors italic ${isLoeka ? 'opacity-50 hover:opacity-100' : 'hover:text-[#5D3FD3] text-white'}`}
          >
            {isLoeka ? "You are my favorite project ❤" : "Next Project →"}
          </Link>
        </footer>
      </div>
    </motion.main>
  );
}
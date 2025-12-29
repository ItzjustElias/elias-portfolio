"use client";

import { use } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export async function generateStaticParams() {
  const projects = ["zero"];

  return projects.map((id) => ({
    id: id,
  }));
}

interface Project {
  title: string;
  year: string;
  role: string;
  context: string;
  description: string;
  tags: string[];
}

const PROJECT_DATA: Record<string, Project> = {
  zero: {
    title: "ZERO",
    year: "2024",
    role: "Lead Developer",
    context: "Experimental 3D Interface",
    description: "Een diepe duik in de mogelijkheden van WebGL en interactieve typografie. Zero onderzoekt de grens tussen abstracte kunst en functionele interface design.",
    tags: ["Three.js", "GSAP", "React", "Shaders"],
  },
};

const GridCross = ({ className = "" }) => (
  <div className={`absolute text-zinc-800 font-thin text-xl select-none pointer-events-none ${className}`}>+</div>
);

export default function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  const unwrappedParams = use(params);
  const id = unwrappedParams.id;
  const project = PROJECT_DATA[id] || { title: id, year: "2024", role: "Designer", context: "Creative Work", description: "Project details coming soon.", tags: ["Design", "Dev"] };

  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative z-10 min-h-screen text-white pt-32 pb-20 px-6 md:px-12 bg-black/40 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto relative">
        <GridCross className="-top-10 -left-4" />
        
        <Link href="/" className="group inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-500 hover:text-[#5D3FD3] transition-colors mb-16">
          <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Index
        </Link>

        <header className="mb-24">
          <motion.div 
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="font-mono text-[#5D3FD3] text-xs mb-4 block uppercase tracking-widest">{project.context}</span>
            <h1 className="text-[15vw] md:text-[12vw] font-black uppercase tracking-tighter leading-[0.8] mb-12 italic">
              {project.title}
            </h1>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-white/10">
            {[
              { label: "Year", val: project.year },
              { label: "Role", val: project.role },
              { label: "Sector", val: "Technology" },
              { label: "Status", val: "Completed" }
            ].map((info, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + (i * 0.1) }}
                className="flex flex-col gap-1"
              >
                <span className="font-mono text-[9px] text-zinc-600 uppercase tracking-widest">{info.label}</span>
                <span className="text-sm font-bold uppercase">{info.val}</span>
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
            <h2 className="font-mono text-[10px] text-zinc-500 uppercase tracking-[0.5em] mb-6">Abstract</h2>
            <p className="text-xl md:text-2xl text-zinc-300 leading-relaxed font-light">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-8">
              {project.tags.map((tag: string) => (
                <span key={tag} className="px-4 py-2 border border-white/5 rounded-full text-[10px] uppercase font-mono text-zinc-500">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="md:col-span-7 grid grid-cols-1 gap-6">
            <motion.div 
              whileHover={{ scale: 0.99 }}
              className="aspect-video bg-zinc-900/30 border border-white/10 rounded-4xl overflow-hidden group relative"
            >
               <div className="absolute inset-0 bg-[#5D3FD3]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
               <div className="absolute top-6 right-6 font-mono text-[10px] text-zinc-700">FIG. 01</div>
            </motion.div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="aspect-square bg-zinc-900/30 border border-white/10 rounded-4xl relative">
                <div className="absolute top-6 right-6 font-mono text-[10px] text-zinc-700">FIG. 02</div>
              </div>
              <div className="aspect-square bg-zinc-900/30 border border-white/10 rounded-4xl relative">
                <div className="absolute top-6 right-6 font-mono text-[10px] text-zinc-700">FIG. 03</div>
              </div>
            </div>
          </div>
        </div>

        <footer className="pt-20 border-t border-white/10 text-center">
          <Link href="/" className="text-4xl md:text-6xl font-black uppercase hover:text-[#5D3FD3] transition-colors italic">
            Next Project (WIP) →
          </Link>
        </footer>
      </div>
    </motion.main>
  );
}
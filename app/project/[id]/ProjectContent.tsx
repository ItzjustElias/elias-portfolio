"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { PROJECT_DATA } from "../../lib/data";

const PROJECT_ORDER = ["zero", "minecraft"] as const;

function getNextProject(id: string) {
  if (id === "theone") return null;
  const idx = PROJECT_ORDER.indexOf(id as typeof PROJECT_ORDER[number]);
  if (idx === -1) return null;
  const nextId = PROJECT_ORDER[(idx + 1) % PROJECT_ORDER.length];
  return { id: nextId, data: PROJECT_DATA[nextId] };
}

export default function ProjectContent({ id }: { id: string }) {
  const isLoeka = id === "theone";
  const project = PROJECT_DATA[id] || {
    title: id,
    year: "—",
    role: "Designer",
    context: "Creative Work",
    description: "Project details coming soon.",
    tags: ["Design", "Dev"],
  };

  const accentDim = isLoeka ? "rgba(239,68,68,0.06)" : "rgba(255,255,255,0.03)";
  const accentBorder = isLoeka ? "rgba(239,68,68,0.2)" : "rgba(255,255,255,0.06)";
  const next = getNextProject(id);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-[#0d1117] text-white"
    >
      {/* ── TOP BAR ── */}
      <div className="sticky top-0 z-50 border-b border-white/5 bg-[#0d1117]/90 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-zinc-600 hover:text-white transition-colors"
          >
            <span className="group-hover:-translate-x-0.5 transition-transform">←</span>
            <span>Elias Bloem</span>
          </Link>

          <div className="flex items-center gap-2">
            <span
              className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border"
              style={{ borderColor: accentBorder, color: isLoeka ? "#ef4444" : "#71717a" }}
            >
              {isLoeka ? "private" : project.context}
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">

        {/* ── HEADER ── */}
        <motion.header
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 md:mb-24"
        >
          {/* Context label */}
          <p
            className="text-[10px] uppercase tracking-[0.4em] mb-6 font-bold"
            style={{ color: isLoeka ? "#ef4444" : "#52525b" }}
          >
            {isLoeka ? "❤ System.Affection: Maximum" : project.context}
          </p>

          {/* Title */}
          <h1
            className="font-black uppercase tracking-tighter leading-[0.85] italic mb-10"
            style={{
              fontSize: "clamp(3rem, 10vw, 8rem)",
              color: isLoeka ? "#ef4444" : "#ffffff",
              wordBreak: "break-word",
            }}
          >
            {project.title}
          </h1>

          {/* Meta strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 border border-white/5 rounded-xl overflow-hidden">
            {[
              { label: "Year", val: project.year },
              { label: "Role", val: project.role },
              { label: "Sector", val: isLoeka ? "Personal" : "Technology" },
              { label: "Status", val: isLoeka ? "∞" : "Completed" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 + i * 0.07 }}
                className="bg-[#0d1117] px-5 py-4"
              >
                <p className="text-[9px] uppercase tracking-widest text-zinc-600 mb-1">
                  {item.label}
                </p>
                <p
                  className="text-sm font-black uppercase tracking-tight"
                  style={{ color: isLoeka && i === 0 ? "#ef4444" : "#e4e4e7" }}
                >
                  {item.val}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.header>

        {/* ── BODY ── */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-16 mb-24">

          {/* Description — left / wider */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="md:col-span-3 flex flex-col gap-8"
          >
            <p className="text-lg md:text-xl leading-relaxed text-zinc-300 font-light">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border"
                  style={{
                    borderColor: accentBorder,
                    color: isLoeka ? "#f87171" : "#52525b",
                    background: accentDim,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* GitHub link */}
            {project.githubUrl && (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.55 }}
                className="group inline-flex items-center gap-3 self-start px-5 py-3 border border-white/10 rounded-xl text-[11px] font-bold uppercase tracking-widest text-zinc-400 hover:text-white hover:border-white/20 transition-all bg-white/[0.02] hover:bg-white/[0.04]"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                View Source
                <span className="group-hover:translate-x-0.5 transition-transform">→</span>
              </motion.a>
            )}
          </motion.div>

          {/* Preview card — right / narrower */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="md:col-span-2"
          >
            <div
              className="rounded-2xl border overflow-hidden aspect-[4/3] flex flex-col items-center justify-center gap-4 relative"
              style={{ borderColor: accentBorder, background: accentDim }}
            >
              {/* Decorative grid */}
              <div
                className="absolute inset-0 opacity-30 pointer-events-none"
                style={{
                  backgroundImage: "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                }}
              />
              <div
                className="relative z-10 w-12 h-12 rounded-xl border flex items-center justify-center"
                style={{ borderColor: accentBorder }}
              >
                {isLoeka ? (
                  <svg width="22" height="22" viewBox="0 0 16 16" fill="#ef4444">
                    <path d="M7.655 14.916L8 14.25l.345.666a.752.752 0 01-.69 0zm0 0L8 14.25l.345.666.002-.001.006-.003.018-.01a7.643 7.643 0 00.31-.17 22.08 22.08 0 003.433-2.414C13.956 10.731 16 8.35 16 5.5 16 2.836 13.914 1 11.75 1 10.203 1 8.847 1.802 8 3.02 7.153 1.802 5.797 1 4.25 1 2.086 1 0 2.836 0 5.5c0 2.85 2.045 5.231 3.885 6.818a22.075 22.075 0 003.744 2.584l.018.01.006.003.002.001z" />
                  </svg>
                ) : (
                  <svg width="22" height="22" viewBox="0 0 16 16" fill="rgba(255,255,255,0.3)">
                    <path d="M1.75 1A1.75 1.75 0 000 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0016 13.25v-8.5A1.75 1.75 0 0014.25 3H7.5a.25.25 0 01-.2-.1l-.9-1.2C6.07 1.26 5.55 1 5 1H1.75z" />
                  </svg>
                )}
              </div>
              <p
                className="relative z-10 text-[10px] uppercase tracking-widest font-bold"
                style={{ color: isLoeka ? "#ef4444" : "rgba(255,255,255,0.2)" }}
              >
                {isLoeka ? project.title : `${project.role} · ${project.year}`}
              </p>
            </div>
          </motion.div>
        </div>

        {/* ── FOOTER NAV ── */}
        <footer className="border-t border-white/5 pt-12">
          {isLoeka ? (
            <Link
              href="/"
              className="text-3xl md:text-5xl font-black uppercase tracking-tighter italic text-red-500/50 hover:text-red-500 transition-colors"
            >
              You are my favorite project ❤
            </Link>
          ) : next ? (
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-zinc-700 mb-2">
                  Next Project
                </p>
                <Link
                  href={`/project/${next.id}`}
                  className="group flex items-center gap-4"
                >
                  <span className="text-3xl md:text-5xl font-black uppercase tracking-tighter italic text-white/30 group-hover:text-white transition-colors">
                    {next.data?.title}
                  </span>
                  <span className="text-white/30 group-hover:text-white group-hover:translate-x-1 transition-all text-2xl">
                    →
                  </span>
                </Link>
              </div>
              <Link
                href="/"
                className="text-[11px] font-bold uppercase tracking-widest text-zinc-700 hover:text-white transition-colors"
              >
                ← All Projects
              </Link>
            </div>
          ) : (
            <Link
              href="/"
              className="text-[11px] font-bold uppercase tracking-widest text-zinc-600 hover:text-white transition-colors"
            >
              ← Back to Index
            </Link>
          )}
        </footer>
      </div>
    </motion.main>
  );
}
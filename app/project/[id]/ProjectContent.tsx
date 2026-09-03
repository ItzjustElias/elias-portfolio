"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { PROJECT_DATA } from "../../lib/data";
import SketchDivider from "@/app/components/SketchDivider";
import {
  IconMail,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandGithub,
  IconHome,
} from "@tabler/icons-react";

export default function ProjectContent({ id }: { id: string }) {
  const isLoeka = id === "theone";
  const project = PROJECT_DATA[id] || {
    title: id,
    year: "—",
    role: "Designer",
    context: "Creative Work",
    description: "Project details coming soon.",
    longDescription: "",
    imageUrl: "",
    tags: ["Design", "Dev"],
  };

  const accent = isLoeka ? "#c23b3b" : "var(--accent)";
  const accentSoft = isLoeka ? "#c23b3b14" : "var(--accent-soft)";
  const accentBorder = isLoeka ? "#c23b3b40" : "var(--accent-border)";

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen paper-grid relative"
      style={{ backgroundColor: "var(--paper)", color: "var(--ink)" }}
    >
      <div
        className="sticky top-0 z-40 border-b backdrop-blur-sm"
        style={{
          borderColor: "var(--paper-line)",
          backgroundColor: "rgba(242,237,227,0.85)",
        }}
      >
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/">
            <span
              className="font-hand font-bold text-4xl"
              style={{ color: "var(--ink)" }}
            >
              E
            </span>
          </Link>
          <div
            className="flex items-center gap-6 text-[13px] font-bold uppercase"
            style={{ color: "var(--ink)" }}
          >
            <Link
              href="/#projects"
              className="hover:opacity-70 transition-opacity"
            >
              Projects
            </Link>
            <Link
              href="/#about"
              className="hover:opacity-70 transition-opacity"
            >
              About
            </Link>
            <a
              href="/CV_ELIAS_BLOEM.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-sm border transition-colors"
              style={{ borderColor: "var(--ink)", color: "var(--ink)" }}
            >
              CV
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12 md:py-20">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-lg border p-8 md:p-12 mb-12 shadow-sm"
          style={{
            borderColor: "var(--paper-line)",
            backgroundColor: "var(--card)",
          }}
        >
          <span
            className="tape w-18 h-8 -top-4 left-12"
            style={{ transform: "rotate(-2deg)" }}
          />
          <span
            className="tape w-18 h-8 -top-4 right-12"
            style={{ transform: "rotate(1.5deg)" }}
          />

          <div className="max-w-3xl">
            <p
              className="text-xs uppercase tracking-[0.3em] mb-4 font-bold"
              style={{ color: accent }}
            >
              {isLoeka ? "System.Affection: Maximum" : `${project.context}`}
            </p>

            <h1
              className="font-hand font-bold tracking-tight mb-8"
              style={{
                fontSize: "clamp(2.5rem, 7vw, 5.5rem)",
                color: isLoeka ? accent : "var(--ink)",
                lineHeight: 1.05,
              }}
            >
              {project.title}
            </h1>
          </div>

          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t"
            style={{ borderColor: "var(--ink-faint)" }}
          >
            {[
              { label: "Year", val: project.year },
              { label: "Role", val: project.role },
              { label: "Sector", val: isLoeka ? "Personal" : "Technology" },
              { label: "Status", val: isLoeka ? "∞" : "Completed" },
            ].map((item, i) => (
              <div key={i} className="space-y-1">
                <p
                  className="text-[10px] uppercase tracking-widest font-bold"
                  style={{ color: "var(--ink-faint)" }}
                >
                  {item.label}
                </p>
                <p
                  className="text-sm font-bold uppercase tracking-wide"
                  style={{ color: "var(--ink)" }}
                >
                  {item.val}
                </p>
              </div>
            ))}
          </div>
        </motion.header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20 items-start">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="lg:col-span-7 flex flex-col gap-8"
          >
            <div
              className="rounded-lg border p-8 md:p-10 relative shadow-sm"
              style={{
                borderColor: "var(--paper-line)",
                backgroundColor: "var(--card)",
              }}
            >
              <h3
                className="text-xs font-bold uppercase tracking-widest mb-4"
                style={{ color: "var(--ink-faint)" }}
              >
                Overview
              </h3>
              <p
                className="text-lg leading-relaxed mb-6"
                style={{ color: "var(--ink-soft)" }}
              >
                {project.description}
              </p>

              {project.longDescription && (
                <p
                  className="text-base leading-relaxed mb-8"
                  style={{ color: "var(--ink-soft)" }}
                >
                  {project.longDescription}
                </p>
              )}

              <div
                className="flex flex-wrap gap-2 pt-6 border-t"
                style={{ borderColor: "var(--paper-line)" }}
              >
                {project.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="text-[11px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-sm border shadow-xs"
                    style={{
                      borderColor: accentBorder,
                      color: accent,
                      background: accentSoft,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Button wrapper container */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 w-full">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-3 w-full sm:w-auto px-6 py-4 rounded-md text-xs font-bold uppercase tracking-widest border transition-all hover:-translate-y-0.5 shadow-sm"
                  style={{
                    borderColor: "var(--ink)",
                    color: "var(--ink)",
                    backgroundColor: "var(--card)",
                  }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <span>View Source Repository</span>
                </a>
              )}
              <Link
                href={"/#projects"}
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 w-full sm:w-auto px-6 py-4 rounded-md text-xs font-bold uppercase tracking-widest border transition-all hover:-translate-y-0.5 shadow-sm"
                style={{
                  borderColor: "var(--accent)",
                  color: "var(--accent)",
                  backgroundColor: "var(--card)",
                }}
              >
                <IconHome size={16} />
                <span>Go back home</span>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="lg:col-span-5"
          >
            <div
              className="rounded-lg border overflow-hidden aspect-4/4 relative shadow-sm flex items-center justify-center"
              style={{ borderColor: accentBorder, background: accentSoft }}
            >
              {project.imageUrl ? (
                <Image
                  fill
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <p
                  className="text-xs uppercase tracking-widest font-bold px-4 text-center"
                  style={{ color: accent }}
                >
                  {isLoeka
                    ? project.title
                    : `${project.role} · ${project.year}`}
                </p>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      <footer
        className="relative border-t px-6 pt-14 pb-10"
        style={{
          borderColor: "var(--paper-line)",
          backgroundColor: "var(--card)",
        }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center text-center gap-6 pb-14">
            <h2
              className="font-hand font-bold text-5xl md:text-6xl"
              style={{ color: "var(--ink)" }}
            >
              Let&apos;s build something.
            </h2>
            <p
              className="max-w-md text-sm leading-relaxed"
              style={{ color: "var(--ink-soft)" }}
            >
              Got a project, an idea, or just want to say hi? My inbox is always
              open for freelance work and interesting collaborations.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-2">
              <a
                href="/CV_ELIAS_BLOEM.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-md border text-[11px] font-bold uppercase tracking-widest transition-colors hover:bg-(--ink) hover:text-(--card)"
                style={{ borderColor: "var(--ink)" }}
              >
                View CV
              </a>
              <a
                href="/CV_ELIAS_BLOEM.pdf"
                download="CV_ELIAS_BLOEM.pdf"
                className="px-5 py-2.5 rounded-md border text-[11px] font-bold uppercase tracking-widest transition-colors hover:bg-(--ink) hover:text-(--card)"
                style={{ borderColor: "var(--ink)" }}
              >
                Download CV
              </a>
              <Link
                href="/cv"
                className="px-5 py-2.5 rounded-md border text-[11px] font-bold uppercase tracking-widest transition-colors hover:bg-(--ink) hover:text-(--card)"
                style={{ borderColor: "var(--ink)" }}
              >
                QR CV
              </Link>
            </div>
          </div>

          <div className="max-w-xs mx-auto opacity-70 mb-10">
            <SketchDivider color="var(--ink-faint)" height={20} />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-10 text-center md:text-left">
            <div>
              <p
                className="font-hand font-bold text-2xl mb-3"
                style={{ color: "var(--accent)" }}
              >
                Elias Bloem
              </p>
              <p
                className="text-xs leading-relaxed"
                style={{ color: "var(--ink)" }}
              >
                Creative developer building interfaces, tools and the occasional
                late-night experiment.
              </p>
            </div>

            <div>
              <p
                className="text-[13px] font-bold uppercase tracking-widest mb-3"
                style={{ color: "var(--ink)" }}
              >
                Site
              </p>
              <div className="flex flex-col gap-2 text-sm items-center md:items-start">
                <a
                  href="#about"
                  style={{ color: "var(--ink-soft)" }}
                  className="hover:opacity-70 transition-opacity"
                >
                  About
                </a>
                <a
                  href="#projects"
                  style={{ color: "var(--ink-soft)" }}
                  className="hover:opacity-70 transition-opacity"
                >
                  Projects
                </a>
                <Link
                  href="/privacy"
                  style={{ color: "var(--ink-soft)" }}
                  className="hover:opacity-70 transition-opacity"
                >
                  Privacy Policy
                </Link>
              </div>
            </div>

            <div>
              <p
                className="text-[13px] font-bold uppercase tracking-widest mb-3"
                style={{ color: "var(--ink)" }}
              >
                Connect
              </p>
              <div className="flex flex-col gap-2 text-sm items-center md:items-start">
                <a
                  href="mailto:elias.bloem@telenet.be"
                  style={{ color: "var(--ink-soft)" }}
                  className="flex items-center gap-2 hover:opacity-70 transition-opacity"
                >
                  <IconMail size={15} /> Email
                </a>
                <a
                  href="https://www.instagram.com/bloemelias/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "var(--ink-soft)" }}
                  className="flex items-center gap-2 hover:opacity-70 transition-opacity"
                >
                  <IconBrandInstagram size={15} /> Instagram
                </a>
                <a
                  href="https://be.linkedin.com/in/elias-bloem-048470267"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "var(--ink-soft)" }}
                  className="flex items-center gap-2 hover:opacity-70 transition-opacity"
                >
                  <IconBrandLinkedin size={15} /> LinkedIn
                </a>
              </div>
            </div>

            <div>
              <p
                className="text-[13px] font-bold uppercase tracking-widest mb-3"
                style={{ color: "var(--ink)" }}
              >
                Code
              </p>
              <div className="flex flex-col gap-2 text-sm items-center md:items-start">
                <a
                  href="https://github.com/ItzjustElias"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "var(--ink-soft)" }}
                  className="flex items-center gap-2 hover:opacity-70 transition-opacity"
                >
                  <IconBrandGithub size={15} /> GitHub
                </a>
              </div>
            </div>
          </div>

          <div
            className="flex flex-col md:flex-row items-center justify-between gap-3 pt-6 border-t text-[13px]"
            style={{
              borderColor: "var(--paper-line)",
              color: "var(--ink)",
            }}
          >
            <span>
              © {new Date().getFullYear()} Elias Bloem. All rights reserved.
            </span>
            <span className="font-hand normal-class tracking-normal text-sm">
              Made with care, in Belgium.
            </span>
          </div>
        </div>
      </footer>
    </motion.main>
  );
}

"use client";

import { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  IconMail,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandGithub,
} from "@tabler/icons-react";
import { PROJECT_DATA, PROJECT_ORDER } from "./lib/data";
import { EXPERIENCE, SKILLS } from "./lib/stats";
import StickerBadge from "./components/StickerBadge";
import SketchChart from "./components/SketchChart";
import { SketchSeries } from "./components/SketchChart";
import SketchDivider from "./components/SketchDivider";

type HomeContentProps = {
  xLabels: string[];
  series: SketchSeries[];
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function HomeContent({ xLabels, series }: HomeContentProps) {
  const router = useRouter();
  const [foundLoeka, setFoundLoeka] = useState(false);

  useEffect(() => {
    let buffer = "";
    const targetCode = "loeka";

    const handleKeyDown = (e: KeyboardEvent) => {
      buffer += e.key.toLowerCase();
      buffer = buffer.slice(-targetCode.length);

      if (buffer === targetCode) {
        setFoundLoeka(true);
        setTimeout(() => router.push("/project/theone"), 700);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [router]);

  return (
    <main
      className="relative min-h-screen paper-grid"
      style={{ backgroundColor: "var(--paper)", color: "var(--ink)" }}
    >
      {foundLoeka && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-999 flex items-center justify-center"
          style={{ backgroundColor: "var(--paper)" }}
        >
          <span
            className="font-hand font-bold text-6xl"
            style={{ color: "#c23b3b" }}
          >
            found you ❤
          </span>
        </motion.div>
      )}

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
            <a href="#projects" className="hover:opacity-70 transition-opacity">
              Projects
            </a>
            <a href="#about" className="hover:opacity-70 transition-opacity">
              About
            </a>
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

      <section
        id="about"
        className="relative max-w-5xl mx-auto px-6 pt-16 pb-24"
      >
        <div
          className="absolute right-6 top-16 hidden md:block"
          style={{ transform: "rotate(2deg)" }}
        >
          <StickerBadge>Every frame is art.</StickerBadge>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
        >
          <StickerBadge tone="accent" className="mb-6">
            About Me
          </StickerBadge>

          <h1
            className="font-hand font-bold leading-[0.95] mb-8"
            style={{ fontSize: "clamp(2.75rem, 7vw, 5.5rem)" }}
          >
            Hello! I&apos;m{" "}
            <span style={{ color: "var(--accent)" }}>Elias Bloem</span>.
          </h1>

          <p
            className="max-w-xl text-lg leading-relaxed mb-4"
            style={{ color: "var(--ink-soft)" }}
          >
            Whether it&apos;s a serious project or a late-night experiment,
            I&apos;m usually designing, testing or building something. I enjoy
            turning complex systems into experiences that feel clear, expressive
            and human.
          </p>
          <p
            className="max-w-xl text-lg leading-relaxed"
            style={{ color: "var(--ink-soft)" }}
          >
            I care about fast, accessible interfaces, reliable tooling and
            thoughtful micro-interactions - and I follow unusual ideas until
            they become useful, real things.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16"
        >
          <div>
            <h2 className="font-hand font-bold text-4xl mb-6">Experience</h2>

            <div className="relative pl-6 space-y-8">
              <div
                className="absolute top-2 bottom-[-30] left-1.25 w-0.75"
                style={{ backgroundColor: "var(--accent)" }}
              />

              {EXPERIENCE.map((item) => (
                <div key={item.title} className="relative">
                  <div
                    className="absolute -left-6 top-0.5 w-3 h-3 rounded-full border-2"
                    style={{
                      backgroundColor: "var(--paper)",
                      borderColor: "var(--accent)",
                    }}
                  />

                  <span
                    className="block text-[13px] font-bold mb-1"
                    style={{ color: "var(--accent)" }}
                  >
                    {item.period}
                  </span>
                  <p className="font-bold" style={{ color: "var(--ink)" }}>
                    {item.title}
                  </p>
                  <p className="text-base" style={{ color: "var(--ink)" }}>
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div
            className="relative rounded-md border p-8 md:p-10 transition-shadow"
            style={{
              borderColor: "var(--paper-line)",
              backgroundColor: "var(--card)",
              transform: "rotate(1deg)",
              boxShadow: "3px 3px 0 0 rgba(42,38,32,0.06)",
            }}
          >
            <span
              className="tape w-16 h-6 -top-3 left-1/2"
              style={{ transform: "translateX(-50%) rotate(2deg)" }}
            />

            <h2 className="font-hand font-bold text-4xl mb-6 text-center">
              Skills
            </h2>
            <div className="grid grid-cols-2 gap-x-20 md:gap-x-50 gap-y-4">
              {SKILLS.map((skill) => (
                <div
                  key={skill.id}
                  className="flex items-center gap-2 text-sm font-medium"
                  style={{ color: "var(--ink-soft)" }}
                >
                  <Image
                    src={`https://skillicons.dev/icons?i=${skill.id}`}
                    alt={skill.name}
                    width={18}
                    height={18}
                  />
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <section
        className="border-y relative"
        style={{
          borderColor: "var(--paper-line)",
          backgroundColor: "var(--accent)",
        }}
      >
        <div className="absolute inset-[17px] pointer-events-none border-5 border-white" />
        <div className="max-w-5xl mx-auto px-6 py-14 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Available for", val: "Freelance", rotate: -2 },
            { label: "Based in", val: "Belgium", rotate: 1.5 },
            { label: "Focus", val: "React / Java", rotate: -1 },
            { label: "Experience", val: "2+ Years", rotate: 2 },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              whileHover={{ rotate: 0, y: -4 }}
              className="relative rounded-md border px-5 py-6 text-center transition-shadow"
              style={{
                borderColor: "var(--paper-line)",
                backgroundColor: "var(--card)",
                transform: `rotate(${stat.rotate}deg)`,
                boxShadow: "3px 3px 0 0 rgba(42,38,32,0.06)",
              }}
            >
              <span
                className="tape w-10 h-4 -top-2 left-1/2"
                style={{ transform: "translateX(-50%) rotate(-4deg)" }}
              />
              <p
                className="text-[13px] font-bold mb-2 relative z-10"
                style={{ color: "var(--ink-faint)" }}
              >
                {stat.label}
              </p>
              <p
                className="font-hand font-bold text-2xl md:text-3xl relative z-10"
                style={{ color: "var(--accent)" }}
              >
                {stat.val}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 pt-24 pb-12">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
        >
          <StickerBadge className="mb-6">A rough estimate</StickerBadge>
          <h2 className="font-hand font-bold text-4xl md:text-5xl mb-10">
            Github stars, overtime.
          </h2>
          <div
            className="relative rounded-md border p-4 sm:p-8 md:p-10"
            style={{
              borderColor: "var(--paper-line)",
              backgroundColor: "var(--card)",
            }}
          >
            <span
              className="tape w-16 h-6 -top-3 left-8"
              style={{ transform: "rotate(-3deg)" }}
            />
            <span
              className="tape w-16 h-6 -top-3 right-8"
              style={{ transform: "rotate(2deg)" }}
            />
            <SketchChart xLabels={xLabels} series={series} />
          </div>
        </motion.div>
      </section>

      <section id="projects" className="max-w-5xl mx-auto px-6 pt-8 pb-15">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
        >
          <h2 className="font-hand font-bold text-4xl md:text-5xl mb-12">
            Projects
          </h2>

          <div className="flex flex-col gap-6">
            {PROJECT_ORDER.map((pid, i) => {
              const p = PROJECT_DATA[pid];
              if (!p) return null;
              const rotate = i % 2 === 0 ? -0.6 : 0.6;
              return (
                <motion.div
                  key={pid}
                  whileHover={{ rotate: 0, y: -3 }}
                  style={{ transform: `rotate(${rotate}deg)` }}
                >
                  <Link
                    href={`/project/${pid}`}
                    className="group relative flex flex-col overflow-hidden rounded-lg border px-7 py-7 md:px-9 md:py-8 transition-colors"
                    style={{
                      borderColor: "var(--paper-line)",
                      backgroundColor: "var(--card)",
                      textDecoration: "none",
                      boxShadow: "4px 4px 0 0 rgba(42,38,32,0.05)",
                    }}
                  >
                    <span
                      aria-hidden
                      className="absolute -right-2 -top-6 font-hand font-bold select-none pointer-events-none"
                      style={{
                        fontSize: "8rem",
                        color: "var(--accent-soft)",
                        lineHeight: 1,
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <div className="relative flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-2">
                          <h3
                            className="font-hand font-bold text-3xl md:text-4xl transition-colors"
                            style={{ color: "var(--ink)" }}
                          >
                            {p.title}
                          </h3>
                          <span
                            className="text-[12px] font-bold px-2 py-0.5 rounded-sm border shrink-0"
                            style={{
                              borderColor: "var(--ink-faint)",
                              color: "var(--ink-faint)",
                            }}
                          >
                            {p.year}
                          </span>
                        </div>
                        <p
                          className="text-sm max-w-xl leading-relaxed"
                          style={{ color: "var(--ink-soft)" }}
                        >
                          {p.description}
                        </p>
                      </div>

                      <div className="flex items-center gap-4 shrink-0 self-start md:self-center">
                        <div className="flex flex-wrap gap-2 justify-end max-w-55">
                          {p.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="font-bold text-[12px] px-2.5 py-1 rounded-sm border"
                              style={{
                                borderColor: "var(--accent-border)",
                                color: "var(--ink-soft)",
                                backgroundColor: "var(--paper)",
                              }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <span
                          className="font-hand flex items-center justify-center w-9 h-9 rounded-full text-lg shrink-0 transition-transform group-hover:translate-x-1"
                          style={{
                            borderColor: "var(--accent)",
                            color: "var(--accent)",
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 32 24"
                            strokeWidth={5}
                            stroke="currentColor"
                            className="w-10 h-10"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M4 12h24M22 5l7 7-7 7"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

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
            <span className="font-hand normal-case tracking-normal text-sm">
              Made with care, in Belgium.
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}

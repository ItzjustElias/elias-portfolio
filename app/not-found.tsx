"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SketchFrame from "./components/SketchFrame";

export default function NotFound() {
  return (
    <main
      className="relative min-h-screen paper-grid flex items-center justify-center px-6"
      style={{ backgroundColor: "var(--paper)", color: "var(--ink)" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center text-center gap-6 max-w-md"
      >
        <div className="relative flex items-center justify-center" style={{ width: 220, height: 220 }}>
          <SketchFrame size={220} color="#3355dd" />
          <span
            className="absolute font-hand font-bold"
            style={{ fontSize: "4.5rem", color: "var(--ink)", marginLeft: "-12px" }}
          >
          404
          </span>
        </div>

        <h1 className="font-hand font-bold text-4xl md:text-5xl" style={{ color: "var(--ink)" }}>
          Page wandered off.
        </h1>

        <p className="text-base leading-relaxed" style={{ color: "var(--ink)" }}>
          Looks like this page fell out of the sketchbook. It might have been moved,
          renamed, or maybe it never existed - either way, let&apos;s get you back
          somewhere useful.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-2">
          <Link
            href="/"
            className="px-5 py-2.5 rounded-md border text-[16px] font-bold tracking-widest transition-colors hover:bg-(--ink) hover:text-(--card)"
            style={{ borderColor: "var(--ink)" }}
          >
            Back to Home
          </Link>
          <Link
            href="/#projects"
            className="px-5 py-2.5 rounded-md border text-[16px] font-bold tracking-widest transition-colors text-(--accent) hover:bg-(--accent) hover:text-(--card) hover:border-(--accent)"
            style={{ borderColor: "var(--accent)" }}
          >
            See Projects
          </Link>
        </div>
      </motion.div>
    </main>
  );
}

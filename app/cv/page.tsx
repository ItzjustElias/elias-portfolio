"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { QRCodeSVG } from "qrcode.react";
import { IconHome } from "@tabler/icons-react";

export default function CvQrPage() {
  const liveCvUrl = "https://eliasb.be/CV_ELIAS_BLOEM.pdf";

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen   relative flex flex-col items-center justify-center p-6 overflow-hidden"
      style={{ backgroundColor: "var(--transparent)", color: "var(--ink)" }}
    >
      <div className="absolute inset-0 opacity-40 pointer-events-none animate-infinite-grid z-0" />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.5 }}
        className="relative z-10 flex flex-col items-center text-center max-w-sm w-full"
      >
        <div>
          <div
            className="p-5 rounded-lg border bg-white/90 backdrop-blur-sm shadow-md mb-6 transition-transform duration-300 hover:scale-105"
            style={{ borderColor: "var(--paper-line)" }}
          >
            <QRCodeSVG value={liveCvUrl} size={280} level="M" />
          </div>

          <div className="flex flex-col gap-3 w-full">
            <Link
              href="/"
              className="w-full py-4 rounded-md border text-xs font-bold uppercase tracking-widest transition-all hover:-translate-y-0.5 shadow-sm flex items-center justify-center gap-2 backdrop-blur-sm"
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
        </div>
      </motion.div>
    </motion.main>
  );
}

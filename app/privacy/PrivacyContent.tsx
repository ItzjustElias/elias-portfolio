"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main
      className="min-h-screen paper-grid"
      style={{ backgroundColor: "var(--paper)", color: "var(--ink)" }}
    >
      <div className="max-w-3xl mx-auto pt-10 pb-20 px-6">
        <Link
          href="/"
          className="text-[10px] font-bold uppercase tracking-[0.3em] mb-[-60] inline-block transition-colors"
          style={{ color: "var(--accent)" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 32 24"
            strokeWidth={5}
            stroke="currentColor"
            className="w-10 h-10 scale-x-[-1]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 12h24M22 5l7 7-7 7"
            />
          </svg>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-hand font-bold text-5xl md:text-6xl mb-12 text-center">
            Privacy <span style={{ color: "var(--accent)" }}>Policy</span>
          </h1>

          <div
            className="relative rounded-md border p-8 md:p-10"
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
            <div
              className="space-y-10 leading-relaxed"
              style={{ color: "var(--ink-soft)" }}
            >
              <section>
                <h2
                  className="text-xs font-bold uppercase tracking-widest mb-3"
                  style={{ color: "var(--ink)" }}
                >
                  01. General
                </h2>
                <p>
                  Dit is de persoonlijke portfolio website van{" "}
                  <strong>Elias Bloem</strong>, gevestigd in België. Ik hecht
                  veel waarde aan je privacy. De korte versie: ik verzamel geen
                  persoonlijke gegevens, ik verkoop niets, en ik volg je niet
                  over het internet.
                </p>
              </section>

              <section>
                <h2
                  className="text-xs font-bold uppercase tracking-widest mb-3"
                  style={{ color: "var(--ink)" }}
                >
                  02. Cookies
                </h2>
                <p>
                  Deze website is &quot;Cookie-Vrij&quot;. Ik gebruik geen
                  tracking-cookies, geen advertentie-cookies en geen analytische
                  cookies van derden (zoals Google Analytics). Je browser hoeft
                  geen toestemming te geven omdat er simpelweg niets opgeslagen
                  wordt.
                </p>
              </section>

              <section>
                <h2
                  className="text-xs font-bold uppercase tracking-widest mb-3"
                  style={{ color: "var(--ink)" }}
                >
                  03. Data Collection
                </h2>
                <p>
                  Wanneer je deze website bezoekt, worden alleen technische logs
                  (zoals je IP-adres) tijdelijk verwerkt door mijn
                  hostingprovider (bijv. GitHub Pages of Vercel) om de website
                  veilig en stabiel te kunnen tonen. Deze gegevens worden niet
                  door mij persoonlijk ingezien of opgeslagen.
                </p>
              </section>

              <section>
                <h2
                  className="text-xs font-bold uppercase tracking-widest mb-3"
                  style={{ color: "var(--ink)" }}
                >
                  04. Contact
                </h2>
                <p>
                  Als je contact met mij opneemt via e-mail of sociale media,
                  gebruik ik je gegevens alleen om op je bericht te reageren. Je
                  gegevens worden nooit gedeeld met derden voor commerciële
                  doeleinden.
                </p>
              </section>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}

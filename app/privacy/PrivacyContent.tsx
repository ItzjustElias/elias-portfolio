"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const getYear = () => new Date().getFullYear();

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-black text-white font-sans selection:bg-[#5D3FD3] selection:text-white">
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="relative z-10 max-w-3xl mx-auto pt-32 pb-20 px-6">
        <Link href="/" className="font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-500 hover:text-[#5D3FD3] transition-colors mb-16 inline-block">
          ← Back_to_Index
        </Link>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-black uppercase tracking-tighter mb-12 italic">
            Privacy <span className="text-[#5D3FD3]">Policy</span>
          </h1>

          <div className="space-y-12 font-light leading-relaxed text-zinc-400">
            <section>
              <h2 className="font-mono text-xs text-white uppercase tracking-widest mb-4">01. General</h2>
              <p>
                Dit is de persoonlijke portfolio website van <strong>Elias Bloem</strong>, gevestigd in België. 
                Ik hecht veel waarde aan je privacy. De korte versie: ik verzamel geen persoonlijke gegevens, ik verkoop niets, 
                en ik volg je niet over het internet.
              </p>
            </section>

            <section>
              <h2 className="font-mono text-xs text-white uppercase tracking-widest mb-4">02. Cookies</h2>
              <p>
                Deze website is &quot;Cookie-Vrij&quot;. Ik gebruik geen tracking-cookies, geen advertentie-cookies en geen 
                analytische cookies van derden (zoals Google Analytics). Je browser hoeft geen toestemming te geven 
                omdat er simpelweg niets opgeslagen wordt.
              </p>
            </section>

            <section>
              <h2 className="font-mono text-xs text-white uppercase tracking-widest mb-4">03. Data Collection</h2>
              <p>
                Wanneer je deze website bezoekt, worden alleen technische logs (zoals je IP-adres) tijdelijk verwerkt door mijn hostingprovider 
                (bijv. GitHub Pages of Vercel) om de website veilig en stabiel te kunnen tonen. Deze gegevens worden niet door mij 
                persoonlijk ingezien of opgeslagen.
              </p>
            </section>

            <section>
              <h2 className="font-mono text-xs text-white uppercase tracking-widest mb-4">04. Contact</h2>
              <p>
                Als je contact met mij opneemt via e-mail of sociale media, gebruik ik je gegevens alleen om op je bericht te reageren. 
                Je gegevens worden nooit gedeeld met derden voor commerciële doeleinden.
              </p>
            </section>

            <div className="pt-12 border-t border-white/10">
              <p className="font-mono text-[9px] uppercase text-zinc-600">
                Last_Updated: {getYear()}.01.01 // System.Version: 1.0.0
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
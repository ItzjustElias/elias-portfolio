"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { motion } from "framer-motion";
import { CapabilityItem } from "../app/components/CapabilityItem";

gsap.registerPlugin(ScrollTrigger);

const GridCross = ({ className = "" }) => (
  <div className={`absolute text-zinc-800 font-thin text-xl select-none pointer-events-none ${className}`}>+</div>
);

const TechLabel = ({ label, className = "" }: { label: string; className?: string }) => (
  <div className={`absolute font-mono text-[10px] tracking-[0.3em] text-zinc-600 uppercase ${className}`}>
    {label}
  </div>
);

export default function Home() {
  const mainRef = useRef(null);
  const bentoRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".scene-container", {
        scrollTrigger: {
          trigger: mainRef.current,
          start: "top top",
          end: "30% top",
          scrub: true,
        },
        opacity: 0,
        transformOrigin: "50% 50%",
        force3D: false,
        filter: "blur(40px)",
        scale: 0.6,
        ease: "none"
      });

      gsap.to(".hero-content", {
        scrollTrigger: {
          trigger: mainRef.current,
          start: "top top",
          end: "40% top",
          scrub: true,
        },
        opacity: 0,
        y: -150,
        ease: "none"
      });

      gsap.fromTo(".bento-card-anim",
        { opacity: 0, y: 50 },
        {
          scrollTrigger: {
            trigger: bentoRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.8,
          ease: "power3.out",
          clearProps: "all"
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <main ref={mainRef} className="relative  min-h-screen overflow-x-hidden text-white">
      {/* GLOBAL TECH OVERLAY */}
      <div className="fixed inset-0 pointer-events-none z-50">
        {/* De hoekkruisjes van het scherm */}
        <GridCross className="top-4 left-4" />
        <GridCross className="top-4 right-4" />
        <GridCross className="bottom-4 left-4" />
        <GridCross className="bottom-4 right-4" />

        {/* Tech labels aan de zijkanten */}
        <TechLabel label="System.Status: Active" className="rotate-90 origin-left left-4 top-1/4" />
        <TechLabel label="Design.Unit: 01" className="-rotate-90 origin-right right-4 top-1/4" />
      </div>

      {/* HERO SECTION */}
      <section className="relative h-screen z-10 flex items-center justify-center">
        <div className="hero-content text-center px-4">
          <h1 className="text-[15vw] font-black uppercase leading-[0.8] tracking-tighter text-white">
            ELIAS<br />BLOEM
          </h1>
          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="h-1px w-12 bg-[#5D3FD3]" />
            <p className="text-zinc-500 uppercase tracking-[0.5em] text-[10px] md:text-sm font-light">
              Creative Developer & Designer
            </p>
            <div className="h-1px w-12 bg-[#5D3FD3]" />
          </div>
        </div>
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="w-1px h-12 bg-linear-to-b from-[#5D3FD3] to-transparent" />
          <span className="font-mono text-[8px] uppercase tracking-widest text-zinc-500">Scroll to Explore</span>
        </div>
      </section>

      <section className="relative z-20 py-20 border-y border-white/5 bg-black/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
          {[
            { label: "Available for", val: "FREELANCE" },
            { label: "Based in", val: "BELGIUM" },
            { label: "Focus", val: "WEBGL / NEXT.JS" },
            { label: "Experience", val: "5+ YEARS" }
          ].map((stat, i) => (
            <div key={i} className="flex flex-col gap-2">
              <span className="font-mono text-[10px] text-[#5D3FD3]">{stat.label}</span>
              <span className="text-xl font-bold tracking-tight uppercase">{stat.val}</span>
            </div>
          ))}
        </div>
      </section>

      <section ref={bentoRef} className="relative z-20 px-6 py-40 bg-black">
        <div className="max-w-7xl mx-auto relative">
          <GridCross className="-top-10 -left-5 text-zinc-500!" />
          <GridCross className="-top-10 -right-5 text-zinc-500!" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[300px]">
            <Link href="/project/zero" className="bento-card-anim md:col-span-2 md:row-span-2 group block h-full">
              <motion.div whileHover={{ scale: 0.985 }} className="h-full relative bg-zinc-900/30 border border-white/10 rounded-[2.5rem] overflow-hidden p-12 flex flex-col justify-between hover:border-[#5D3FD3]/50 transition-all duration-500">
                <div className="absolute inset-0 bg-linear-to-br from-[#5D3FD3]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex justify-between items-start z-10">
                  <div className="px-4 py-1.5 bg-[#5D3FD3]/10 border border-[#5D3FD3]/20 text-[#5D3FD3] rounded-full text-[10px] font-bold tracking-widest uppercase">Selected Work</div>
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-[#5D3FD3] transition-all duration-500">→</div>
                </div>
                <div className="z-10">
                  <h3 className="text-6xl font-black uppercase tracking-tighter mb-4 italic">ZERO</h3>
                  <p className="text-zinc-400 text-sm max-w-62.5 mb-6">Pushing the boundaries of digital interaction through 3D experiences.</p>
                </div>
              </motion.div>
            </Link>

            {['Motion', 'Strategy', 'Design', 'Code'].map((item, i) => (
              <div key={i} className="bento-card-anim relative bg-zinc-900/30 border border-white/10 rounded-4xl p-8 flex flex-col justify-between group hover:bg-[#5D3FD3]/5 transition-all overflow-hidden">
                <div className="flex justify-between items-center">
                  <span className="text-[#5D3FD3] font-mono text-xs">0{i + 1}</span>
                  <div className="w-2 h-2 rounded-full bg-zinc-800 group-hover:bg-[#5D3FD3] transition-colors" />
                </div>
                <h3 className="text-2xl font-bold uppercase tracking-tight group-hover:translate-x-2 transition-transform">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-30 py-40 bg-black px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-mono text-[10px] text-zinc-600 uppercase tracking-[0.5em] mb-20">Capabilities</h2>
          <div className="flex flex-col border-t border-white/10">
            <CapabilityItem
              index={0}
              title="Creative Direction"
              description="Translating complex ideas into visual stories that resonate. We focus on the intersection of art and technology."
            />
            <CapabilityItem
              index={1}
              title="WebGL Development"
              description="High-performance 3D experiences for the modern web. Using Three.js and GLSL to push the boundaries of the browser."
            />
            <CapabilityItem
              index={2}
              title="UI/UX Design"
              description="Systems-driven design that prioritizes both aesthetics and usability. Building interfaces that feel natural."
            />
          </div>
        </div>
      </section>

      <section className="group py-24 overflow-hidden border-y border-white/5 bg-black relative z-30">
        <div className="animate-marquee flex gap-12 whitespace-nowrap">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex gap-12 items-center">
              <span className="text-[10vw] font-black uppercase italic opacity-10 hover:opacity-100 hover:text-[#5D3FD3] transition-all duration-500">Innovation</span>
              <span className="text-[10vw] font-black uppercase italic opacity-10">•</span>
            </div>
          ))}
        </div>
      </section>

      <footer className="py-40 text-center relative z-30 bg-black">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-linear-to-b from-[#5D3FD3] to-transparent" />
        <h2 className="text-[20vw] font-black uppercase text-zinc-900 leading-none tracking-tighter">ELIAS</h2>
        <div className="mt-12 flex justify-center gap-8 font-mono text-[10px] uppercase text-zinc-500 tracking-widest">
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
        </div>
      </footer>
    </main>
  );
}
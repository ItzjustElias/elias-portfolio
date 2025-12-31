"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { CapabilityItem } from "../app/components/CapabilityItem";
import { useRouter } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

const GridCross = ({ className = "" }) => (
  <div className={`absolute text-zinc-800 font-thin text-xl select-none pointer-events-none ${className}`}>+</div>
);

const TechLabel = ({ label, className = "" }: { label: string; className?: string }) => (
  <div className={`absolute font-mono text-[10px] tracking-[0.3em] text-zinc-600 uppercase ${className}`}>
    {label}
  </div>
);

const FloatingTech = ({ label, x, y, delay = 0 }: { label: string, x: string, y: string, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: [0, 0.8, 0.5],
      scale: 1,
      y: [0, -20, 0],
      x: [0, 10, 0]
    }}
    transition={{ 
      scale: { type: "spring", stiffness: 100, delay: 0.8 + delay }, 
      opacity: { duration: 1, delay: 0.8 + delay },
      y: { duration: 5, repeat: Infinity, ease: "linear" },
      x: { duration: 5, repeat: Infinity, ease: "linear" }
    }}
    className="absolute font-mono text-[9px] text-[#5D3FD3] border border-[#5D3FD3]/80 px-2 py-1 rounded-sm bg-black/50 backdrop-blur-sm z-20"
    style={{ left: x, top: y }}
  >
    {label}
  </motion.div>
);

export default function Home() {
  const mainRef = useRef(null);
  const bentoRef = useRef(null);
  const techRef = useRef(null);
  const router = useRouter();

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
            scrub: 1,
          },
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.8,
          ease: "power3.out",
          clearProps: "all"
        }
      );

      gsap.fromTo(techRef.current,
        { backgroundColor: "transparent" },
        {
          scrollTrigger: {
            trigger: techRef.current,
            start: "top bottom",
            end: "top center",
            scrub: true,
          },
          backgroundColor: "transparent",
        }
      );

      gsap.from(".tech-card", {
        scrollTrigger: {
          trigger: techRef.current,
          start: "top 70%",
        },
        y: 30,
        opacity: 0,
        stagger: 0.05,
        duration: 0.8,
        ease: "power3.out"
      });
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    let buffer = "";
    const targetCode = "loeka";

    const handleKeyDown = (e: KeyboardEvent) => {
      buffer += e.key.toLowerCase();
      buffer = buffer.slice(-targetCode.length);

      if (buffer === targetCode) {
        document.body.style.transition = "background-color 0.8s ease";
        document.body.style.backgroundColor = "#FF0000";

        setTimeout(() => {
          router.push("/project/theone");
        }, 800);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.backgroundColor = "";
    };
  }, [router]);

  const TECH_DATA = [
    { name: "Next.js", id: "nextjs", cat: "Framework" },
    { name: "TypeScript", id: "ts", cat: "Language" },
    { name: "Java", id: "java", cat: "Backend" },
    { name: "Python", id: "py", cat: "Scripting" },
    { name: "Three.js", id: "threejs", cat: "3D Engine" },
    { name: "GSAP", id: "gsap", cat: "Animation" },
    { name: "Blender", id: "blender", cat: "3D Modeling" },
    { name: "Unreal", id: "unreal", cat: "Game Engine" },
    { name: "Node.js", id: "nodejs", cat: "Runtime" },
    { name: "GitHub", id: "github", cat: "Version Control" },
    { name: "VS Code", id: "vscode", cat: "IDE" },
    { name: "IntelliJ", id: "idea", cat: "IDE" },
    { name: "Bash", id: "bash", cat: "Terminal" },
    { name: "Kali", id: "kali", cat: "Security" },
    { name: "Gradle", id: "gradle", cat: "Build Tool" },
    { name: "Deno", id: "deno", cat: "Runtime" },
  ];

  return (
    <main ref={mainRef} className="relative  min-h-screen overflow-x-hidden text-white">
      <div className="fixed inset-0 pointer-events-none z-50">
        <GridCross className="top-4 left-4" />
        <GridCross className="top-4 right-4" />
        <GridCross className="bottom-4 left-4" />
        <GridCross className="bottom-4 right-4" />

        <TechLabel label="System.Status: Active" className="rotate-90 origin-left left-4 top-1/4" />
        <TechLabel label="Design.Unit: 01" className="-rotate-90 origin-right right-4 top-1/4" />
      </div>

      <section className="relative h-screen z-10 flex items-center justify-center">
        <FloatingTech label="THREE.JS" x="20%" y="30%" delay={0.1} />
        <FloatingTech label="GLSL" x="75%" y="25%" delay={0.3} />
        <FloatingTech label="REACT" x="25%" y="75%" delay={0.2} />
        <FloatingTech label="GSAP" x="80%" y="80%" delay={0.4} />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-18 left-12 font-mono text-[8px] text-zinc-600 space-y-1 hidden md:block">
            <p>LAT: 50.8503° N</p>
            <p>LONG: 4.3517° E</p>
            <div className="w-12 h-px bg-zinc-800 mt-2" />
          </div>

          <div className="absolute bottom-18 right-12 text-right font-mono text-[8px] text-zinc-600 hidden md:block">
            <p>BUILD_VER: 2025.01</p>
            <p>CORE_ENGINE: GSAP_THREE</p>
            <div className="w-12 h-px bg-zinc-800 mt-2 ml-auto" />
          </div>
        </div>
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
            { label: "Focus", val: "REACT / JAVA" },
            { label: "Experience", val: "2+ YEARS" }
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


      <section ref={techRef} className="relative z-20 py-20 px-6 border-y border-white/5 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <TechLabel label="Engine.Stack" className="static mb-4" />
            <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none">
              TECH <span className="text-[#5D3FD3]">TOOLS</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-px bg-white/5 border border-white/5 overflow-hidden rounded-3xl">
            {TECH_DATA.map((tech, i) => (
              <div key={i} className="tech-card group relative bg-black p-6 flex flex-col items-center justify-center gap-4 hover:bg-zinc-900 transition-colors aspect-square">
                <Image
                  src={`https://skillicons.dev/icons?i=${tech.id}`}
                  alt={tech.name}
                  width={40}
                  height={40}
                  className="w-10 h-10 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                />
                <div className="text-center">
                  <p className="text-[8px] font-mono text-zinc-600 uppercase tracking-tighter">{tech.cat}</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest group-hover:text-[#5D3FD3] transition-colors">{tech.name}</p>
                </div>
                <div className="absolute inset-0 bg-[#5D3FD3]/5 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-30 py-35 bg-black px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-mono text-[10px] text-zinc-600 uppercase tracking-[0.5em] mb-20">Capabilities</h2>
          <div className="flex flex-col border-t border-white/10">
            <CapabilityItem
              index={0}
              title="Creative Direction"
              description="Translating complex ideas into visual stories that resonate. I focus on the intersection of art and technology."
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
          <a href="https://www.instagram.com/bloemelias/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
          <a href="https://be.linkedin.com/in/elias-bloem-048470267" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="https://github.com/ItzjustElias" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Github</a>
        </div>
        <a href="/privacy" className="hover:text-white transition-colors text-[10px] font-mono text-zinc-500 tracking-widest">Privacy Policy</a>
      </footer>
    </main>
  );
}
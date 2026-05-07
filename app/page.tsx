"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { CapabilityItem } from "../app/components/CapabilityItem";
import { useRouter } from "next/navigation";
import { IconArrowNarrowDown } from '@tabler/icons-react';

gsap.registerPlugin(ScrollTrigger);

const GridCross = ({ className = "" }) => (
  <div
    className={`absolute text-zinc-800 font-thin text-xl select-none pointer-events-none ${className}`}
  >
    +
  </div>
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
        ease: "none",
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
        ease: "none",
      });

      gsap.fromTo(
        ".bento-card-anim",
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
          clearProps: "all",
        },
      );

      gsap.fromTo(
        techRef.current,
        { backgroundColor: "transparent" },
        {
          scrollTrigger: {
            trigger: techRef.current,
            start: "top bottom",
            end: "top center",
            scrub: true,
          },
          backgroundColor: "transparent",
        },
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
        ease: "power3.out",
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
    { name: "Docker", id: "docker", cat: "Containerization" },
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
    <main
      ref={mainRef}
      className="relative  min-h-screen overflow-x-hidden text-white bg-[#0d1117]"
    >
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      <div className="fixed inset-0 pointer-events-none z-50">
        <GridCross className="top-4 left-4" />
        <GridCross className="top-4 right-4" />
        <GridCross className="bottom-4 left-4" />
        <GridCross className="bottom-4 right-4" />
      </div>

      <section className="relative h-screen z-10 flex items-center justify-center">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
        </div>
        <div className="hero-content text-center px-4">
          <h1 className="text-[15vw] font-black uppercase leading-[0.8] tracking-tighter text-white">
            ELIAS
            <br />
            BLOEM
          </h1>
          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="h-1px w-12 bg-[blue]" />
            <p className="text-zinc-500 uppercase tracking-[0.5em] text-[10px] md:text-sm font-bold">
              Creative Developer & Designer
            </p>
            <div className="h-1px w-12 bg-[blue]" />
          </div>
        </div>
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="w-1px h-12 bg-linear-to-b from-[blue] to-transparent" />
          <IconArrowNarrowDown stroke={2} />
        </div>
      </section>

      <section className="relative z-20 py-20 border-y border-white/5 bg-black/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
          {[
            { label: "Available for", val: "FREELANCE" },
            { label: "Based in", val: "BELGIUM" },
            { label: "Focus", val: "REACT / JAVA" },
            { label: "Experience", val: "2+ YEARS" },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col gap-2">
              <span className="font-bold text-[10px] text-[blue]">
                {stat.label}
              </span>
              <span className="text-xl font-bold tracking-tight uppercase">
                {stat.val}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section
        ref={techRef}
        className="relative z-20 py-20 px-6 border-y border-white/5 bg-zinc-950/50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none">
              TECH <span className="text-[blue]">TOOLS</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-px bg-white/5 border border-white/5 overflow-hidden rounded-3xl">
            {TECH_DATA.map((tech, i) => (
              <div
                key={i}
                className="tech-card group relative bg-black p-6 flex flex-col items-center justify-center gap-4 hover:bg-zinc-900 transition-colors aspect-square"
              >
                <Image
                  src={`https://skillicons.dev/icons?i=${tech.id}`}
                  alt={tech.name}
                  width={40}
                  height={40}
                  className="w-10 h-10 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                />
                <div className="text-center">
                  <p className="text-[11px] font-bold text-zinc-600 uppercase tracking-tighter">
                    {tech.cat}
                  </p>
                  <p className="text-[10px] font-bold uppercase tracking-widest group-hover:text-[blue] transition-colors">
                    {tech.name}
                  </p>
                </div>
                <div className="absolute inset-0 bg-[blue]/5 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-30 py-10 bg-black px-6">
        <div className="max-w-7xl mx-auto">
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

      <footer className="text-center relative z-30 bg-black">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-30 bg-transparent" />
        <h2 className="text-[20vw] font-black uppercase text-zinc-900 leading-none tracking-tighter">
          Hello World
        </h2>
        <div className="mt-12 flex justify-center gap-8 font-bold text-[10px] uppercase text-zinc-500 tracking-widest">
          <a
            href="https://www.instagram.com/bloemelias/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Instagram
          </a>
          <a
            href="https://be.linkedin.com/in/elias-bloem-048470267"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/ItzjustElias"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Github
          </a>
        </div>
        <a
          href="/privacy"
          className="hover:text-white transition-colors text-[10px] font-bold text-zinc-500 tracking-widest"
        >
          Privacy Policy
        </a>
      </footer>
    </main>
  );
}

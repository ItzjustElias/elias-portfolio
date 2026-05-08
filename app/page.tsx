"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { IconArrowNarrowDown } from "@tabler/icons-react";
import Link from "next/link";
import { PROJECT_DATA } from "./lib/data";

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
      <div
        className="fixed inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="fixed inset-0 pointer-events-none z-50">
        <GridCross className="top-4 left-4" />
        <GridCross className="top-4 right-4" />
        <GridCross className="bottom-4 left-4" />
        <GridCross className="bottom-4 right-4" />
      </div>

      <section className="relative h-screen z-10 flex items-center justify-center">
        <div className="absolute inset-0 overflow-hidden pointer-events-none"></div>
        <div className="hero-content text-center px-4">
          <h1
            style={{
              fontSize: "clamp(3.5rem, 15vw, 14rem)",
              fontWeight: 900,
              textTransform: "uppercase",
              lineHeight: 0.8,
              letterSpacing: "-0.04em",
            }}
          >
            ELIAS
            <br />
            BLOEM
          </h1>
          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="h-1px w-12 bg-white/20" />
            <p className="text-zinc-500 uppercase tracking-[0.5em] text-[10px] md:text-sm font-bold">
              Creative Developer & Designer
            </p>
            <div className="h-1px w-12 bg-white/20" />
          </div>
        </div>
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="w-2px h-14 bg-linear-to-b from-[white/20] to-transparent" />
          <IconArrowNarrowDown stroke={2} />
        </div>
      </section>

      <section className="relative z-20 py-20 border-y border-white/5 bg-black/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          {/* Added justify-items-center to center the columns themselves */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-8 justify-items-center">
            {[
              { label: "Available for", val: "FREELANCE" },
              { label: "Based in", val: "BELGIUM" },
              { label: "Focus", val: "REACT / JAVA" },
              { label: "Experience", val: "2+ YEARS" },
            ].map((stat, i) => (
              /* Changed border-l to a centered layout with a small top accent or just centered text */
              <div
                key={i}
                className="flex flex-col items-center justify-center gap-1.5 transition-all group"
              >
                <span className="font-bold text-[10px] uppercase tracking-[0.2em] text-white/30 text-center">
                  {stat.label}
                </span>
                <span className="text-lg md:text-xl font-bold tracking-tight uppercase text-zinc-100 text-center">
                  {stat.val}
                </span>
              </div>
            ))}
          </div>

          {/* CV Section */}
          <div className="flex flex-col items-center justify-center gap-3 pt-12">
            {/* Reduced w-200 to something more reasonable like w-24 or w-32 */}
            <div className="w-200 border-t border-white/10 mb-4"></div>

            <a
              href="/CV_ELIAS_BLOEM.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center w-full max-w-40 gap-2 px-5 py-2.5 border border-white/10 rounded-lg text-[11px] font-bold uppercase tracking-widest text-zinc-400 hover:text-white hover:border-white/20 transition-all bg-white/[0.02] hover:bg-white/[0.04]"
            >
              View CV
            </a>

            <a
              href="/CV_ELIAS_BLOEM.pdf"
              download="CV_ELIAS_BLOEM.pdf"
              className="group inline-flex items-center justify-center w-full max-w-20 gap-2 px-5 py-2.5 border border-white/10 rounded-lg text-[11px] font-bold uppercase tracking-widest text-zinc-400 hover:text-white hover:border-white/20 transition-all bg-white/[0.02] hover:bg-white/[0.04]"
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 16 16"
                fill="currentColor"
              >
                <path d="M.5 9.9a.5.5 0 01.5.5v2.5a1 1 0 001 1h12a1 1 0 001-1v-2.5a.5.5 0 011 0v2.5a2 2 0 01-2 2H2a2 2 0 01-2-2v-2.5a.5.5 0 01.5-.5z" />
                <path d="M7.646 11.854a.5.5 0 00.708 0l3-3a.5.5 0 00-.708-.708L8.5 10.293V1.5a.5.5 0 00-1 0v8.793L5.354 8.146a.5.5 0 10-.708.708l3 3z" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <section
        ref={techRef}
        className="relative z-20 py-20 px-6 border-b border-white/5"
      >
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none">
              TECH <span className="text-white/20">TOOLS</span>
            </h2>
          </div>

          <div className="grid grid-cols-4 md:grid-cols-8 gap-px bg-white/5 border border-white/5 overflow-hidden rounded-2xl">
            {TECH_DATA.map((tech, i) => (
              <div
                key={i}
                className="tech-card group relative bg-[#0d1117] p-2 md:p-4 flex flex-col items-center justify-center gap-2 hover:bg-zinc-900/80 transition-colors aspect-square"
              >
                <Image
                  src={`https://skillicons.dev/icons?i=${tech.id}`}
                  alt={tech.name}
                  width={28}
                  height={28}
                  className="w-6 h-6 md:w-7 md:h-7 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-300"
                />
                <p className="text-[8px] md:text-[9px] font-bold uppercase tracking-wider text-zinc-700 group-hover:text-zinc-400 transition-colors text-center leading-tight">
                  {tech.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-15 relative z-30 bg-black px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none">
              SELECTED <span className="text-white/20">Projects</span>
            </h2>
          </div>

          <div className="flex flex-col border-t border-white/10">
            {(["zero", "minecraft"] as const).map((pid, i) => {
              const p = PROJECT_DATA[pid];
              if (!p) return null;
              return (
                <Link
                  key={pid}
                  href={`/project/${pid}`}
                  className="group flex flex-col md:flex-row md:items-center gap-4 md:gap-8 py-8 border-b border-white/10 hover:border-white/20 transition-all"
                  style={{ textDecoration: "none" }}
                >

                  <h3
                    className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none transition-colors shrink-0"
                    style={{ color: "#e6edf3" }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLElement).style.color =
                        "white/20")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLElement).style.color = "#e6edf3")
                    }
                  >
                    {p.title}
                  </h3>

                  <div
                    className="hidden md:block flex-1 h-px"
                    style={{ background: "rgba(255,255,255,0.06)" }}
                  />

                  <div className="flex flex-wrap gap-2 shrink-0">
                    {p.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="font-bold text-[10px] uppercase tracking-widest px-3 py-1 rounded-full border transition-colors"
                        style={{
                          borderColor: "rgba(0,100,255,0.2)",
                          color: "#7d8590",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <span
                      className="font-bold text-[11px] tracking-widest"
                      style={{ color: "#7d8590" }}
                    >
                      {p.year}
                    </span>
                    <span className="text-lg transition-transform group-hover:translate-x-1 text-white/20">
                      →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <footer className="relative z-30 bg-black pb-12 px-6 text-center">
        <h2
          className="font-black uppercase leading-none tracking-tighter text-zinc-900 select-none"
          style={{ fontSize: "clamp(2.5rem, 20vw, 18rem)" }}
        >
          Hello World
        </h2>
        <div className="flex flex-wrap justify-center gap-6 mt-8">
          {[
            {
              label: "Instagram",
              href: "https://www.instagram.com/bloemelias/",
            },
            {
              label: "LinkedIn",
              href: "https://be.linkedin.com/in/elias-bloem-048470267",
            },
            { label: "GitHub", href: "https://github.com/ItzjustElias" },
          ].map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] font-bold uppercase tracking-widest text-zinc-600 hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="/privacy"
          className="inline-block mt-4 text-[10px] font-bold uppercase tracking-widest text-zinc-800 hover:text-zinc-500 transition-colors"
        >
          Privacy Policy
        </a>
      </footer>
    </main>
  );
}

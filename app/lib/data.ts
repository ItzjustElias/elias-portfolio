import { Project } from "../interfaces/Project.interface";

export const PROJECT_DATA: Record<string, Project> = {
  zero: {
    title: "ZERO",
    year: "2025",
    role: "Lead Developer",
    context: "Experimental 3D Interface",
    description: "Een diepe duik in de mogelijkheden van WebGL en interactieve typografie. Zero onderzoekt de grens tussen abstracte kunst en functionele interface design.",
    tags: ["Three.js", "GSAP", "React", "Shaders"],
    githubUrl: "https://github.com/ItzjustElias/"
  },
  theone: {
    title: "LOEKA",
    year: "∞",
    role: "The One",
    context: "Special Edition Instance",
    description: "Geen code of design kan beschrijven hoe speciaal je bent. En ook hoe mooi je bent! Bedankt om er altijd te zijn.",
    tags: ["Love", "Always", "Red", "Secret"],
  },
  minecraft: {
    title: "Fast Math",
    year: "2024",
    role: "Lead Developer",
    context: "Minecraft Fabric Mod",
    description: "Een prestatiegerichte mod die geoptimaliseerde wiskundige functies introduceert om de rekensnelheid binnen Minecraft te verbeteren, wat resulteert in een soepelere gameplay-ervaring.",
    tags: ["Java", "gradle", "maven", "Fabric"],
    githubUrl: "https://github.com/ItzjustElias/FastMathMod"
  },
};
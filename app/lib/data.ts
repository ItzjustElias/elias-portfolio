import { Project } from "../interfaces/Project.interface";

export const PROJECT_DATA: Record<string, Project> = {
  zero: {
    title: "This site",
    year: "2026",
    role: "Developer",
    context: "Experimental 3D Interface",
    description:
      "Een diepe duik in de mogelijkheden van WebGL en interactieve typografie. Zero onderzoekt de grens tussen abstracte kunst en functionele interface design.",
    tags: ["Three.js", "GSAP", "React", "Shaders"],
    githubUrl: "https://github.com/ItzjustElias/",
  },
  minecraft: {
    title: "Fast Math",
    year: "2024",
    role: "Developer",
    context: "Minecraft Fabric Mod",
    description:
      "Een prestatiegerichte mod die geoptimaliseerde wiskundige functies introduceert om de rekensnelheid binnen Minecraft te verbeteren, wat resulteert in een soepelere gameplay-ervaring.",
    tags: ["Java", "gradle", "maven", "Fabric"],
    githubUrl: "https://github.com/ItzjustElias/FastMathMod",
  },
  netherportal: {
    title: "Nether Portal Coords",
    year: "2024",
    role: "Developer",
    context: "Minecraft Fabric Mod",
    description:
      "Een mod die automatisch de coördinaten berekent waar een nether-portal moet komen, op basis van spelerpositie of chat-input.",
    tags: ["Java", "Fabric", "Minecraft Mod"],
    githubUrl: "https://github.com/ItzjustElias/NetherPortalCoordsMOD-1.20.4",
  },
  slabbed: {
    title: "Slabbed",
    year: "2024",
    role: "Developer",
    context: "Minecraft Mod",
    description:
      "Een Minecraft mod gericht op extra slab-mechanics en bouwmogelijkheden voor meer creatieve vrijheid.",
    tags: ["Java", "Minecraft Mod"],
    githubUrl: "https://github.com/ItzjustElias/slabbed",
  },
  pokedex: {
    title: "Pixel PokeDex",
    year: "2023",
    role: "Developer",
    context: "Web Application",
    description:
      "Een volledig webgebaseerde Pokédex bovenop de PokéAPI, met snelle opzoekfunctie en details per Pokémon.",
    tags: ["JavaScript", "PokeAPI", "Web"],
    githubUrl: "https://github.com/ItzjustElias/Pixel-PokeDex",
  },
  ytdownloader: {
    title: "YT Flask Downloader",
    year: "2023",
    role: "Developer",
    context: "Python Web Tool",
    description:
      "Een lichte Flask-applicatie waarmee je YouTube-video's snel omzet naar MP3 of MP4.",
    tags: ["Python", "Flask", "YouTube"],
    githubUrl: "https://github.com/ItzjustElias/YouTube-Flask-Downloader",
  },
  portbuster: {
    title: "Port Buster",
    year: "2026",
    role: "MC Developer",
    context: "VS Code Extension",
    description:
      "Een VS Code-extensie die actieve poorten opspoort en ze met één klik kan afsluiten.",
    tags: ["TypeScript", "VS Code", "Extension"],
    githubUrl: "https://github.com/ItzjustElias/port-buster",
  },
  csvtableviewer: {
    title: "CSV Table Viewer",
    year: "2026",
    role: "MC Developer",
    context: "VS Code Extension",
    description:
      "Een VS Code-extensie waarmee je CSV-bestanden in een tabelweergave kunt bekijken.",
    tags: ["TypeScript", "VS Code", "Extension"],
    githubUrl: "https://github.com/ItzjustElias/csv-table-viewer",
  },
  connectivityhook: {
    title: "useConnectivity",
    year: "2026",
    role: "Developer",
    context: "React Hook",
    description:
      "Een lichte React hook om de netwerkverbinding van een gebruiker in real-time te checken.",
    tags: ["TypeScript", "React", "Hooks"],
    githubUrl: "https://github.com/ItzjustElias/connectivityHook",
  },
  budgetksa: {
    title: "Budget KSA",
    year: "2026",
    role: "Developer",
    context: "Budgeting App",
    description:
      "Een persoonlijke budgetteringstool om inkomsten en uitgaven overzichtelijk bij te houden.",
    tags: ["TypeScript", "Finance"],
    githubUrl: "https://github.com/ItzjustElias/budget-ksa",
  },
  discordbot: {
    title: "Discord Bot Toolkit",
    year: "2023",
    role: "Developer",
    context: "Discord Bot",
    description:
      "Een verzameling handige Discord bot commands, gebouwd met Node.js.",
    tags: ["JavaScript", "Node.js", "Discord.js"],
    githubUrl: "https://github.com/ItzjustElias/discord-bot-commands",
  },
  theone: {
    title: "LOEKA",
    year: "∞",
    role: "The One",
    context: "Special Edition Instance",
    description:
      "Geen code of design kan beschrijven hoe speciaal je bent. En ook hoe mooi je bent! Bedankt om er altijd te zijn.",
    tags: ["Love", "Always", "Red", "Secret"],
    listed: false,
  },
};

export const PROJECT_ORDER = Object.keys(PROJECT_DATA).filter(
  (id) => PROJECT_DATA[id].listed !== false,
);
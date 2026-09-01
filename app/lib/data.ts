import { Project } from "../interfaces/Project.interface";

export const PROJECT_DATA: Record<string, Project> = {
  zero: {
    title: "This site",
    year: "2026",
    role: "Developer",
    context: "Experimental 3D Interface",
    description:
      "Een diepe duik in de mogelijkheden van WebGL en interactieve typografie. Deze portfolio toont de grens tussen abstracte kunst en functionele interface design.",
    longDescription:
      "Hier kan je een langere, uitgebreide tekst kwijt over het project. Vertel over de technische uitdagingen, de keuzes die je hebt gemaakt qua architectuur, en hoe je alles hebt gebouwd met moderne webtechnologieën.",
    tags: ["Three.js", "RoughJS", "React", "Shaders"],
    githubUrl: "https://github.com/ItzjustElias/elias-portfolio",
  },
  minecraft: {
    title: "Fast Math (archived)",
    year: "2024",
    role: "Developer",
    context: "Minecraft Fabric Mod",
    description:
      "Een prestatiegerichte mod die geoptimaliseerde wiskundige functies introduceert om de rekensnelheid binnen Minecraft te verbeteren, wat resulteert in een soepelere gameplay-ervaring.",
    longDescription:
      "Door gebruik te maken van snellere benaderingen voor trigonometrische functies en matrixberekeningen, vermindert deze Fabric mod de CPU-overhead tijdens intensieve rendering- en wereldgeneratietaken. Het meeste van de code is geschreven in Java en met hulp van AI uitgedokterd. Deze is dan weer geimplementeerd in wat ze noemen Mixins, waardoor de originele Minecraft code niet aangepast hoeft te worden.",
    imageUrl: "/images/projects/fastMath_LOGO.png",
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
    longDescription:
      "Geen handmatig rekenwerk meer op een 8:1 schaal. Deze mod berekent direct de exacte oversteekcoördinaten voor de Overworld en Nether, en geeft de optie om dit netjes naar de chat of een overlay te sturen.",
    imageUrl: "/images/projects/NetherMod_LOGO.png",
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
    longDescription:
      "Ontworpen voor bouwers die meer diepgang zoeken in vanilla-stijl gameplay. Slabbed voegt slimme plaatsingsregels en extra combinaties toe om je bouwwerken naar een hoger niveau te tillen.",
    imageUrl: "/images/projects/SlabbedMod_LOGO.png",
    tags: ["Java", "Minecraft Mod"],
    githubUrl: "https://github.com/ItzjustElias/slabbed",
  },
  ytdownloader: {
    title: "YT Flask Downloader",
    year: "2023",
    role: "Developer",
    context: "Python Web Tool",
    description:
      "Een lichte Flask-applicatie waarmee je YouTube-video's snel omzet naar MP3 of MP4.",
    longDescription:
      "Een handige self-hosted webtool gebouwd met Python en Flask, aangedreven door pytube. Hiermee download en converteer je media lokaal zonder vervelende advertenties of trage externe websites.",
    imageUrl: "https://nordicapis.com/wp-content/uploads/How-to-Create-an-API-Using-The-Flask-Framework.png",
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
    longDescription:
      "Geen gedoe meer met handmatig PID's opzoeken in je terminal als poort 3000 of 8080 bezet is. Port Buster geeft je een handig overzicht direct binnen je editor om processen direct te stoppen.",
    imageUrl: "https://eliasbloem.gallerycdn.vsassets.io/extensions/eliasbloem/port-buster/1.1.0/1787537388006/Microsoft.VisualStudio.Services.Icons.Default",
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
    longDescription:
      "Maakt het analyseren van ruwe data-bestanden binnen Visual Studio Code een stuk overzichtelijker door komma-gescheiden waarden om te zetten naar een gestileerde, interactieve tabel.",
    imageUrl: "https://eliasbloem.gallerycdn.vsassets.io/extensions/eliasbloem/csv-t-viewer/1.0.0/1787855150582/Microsoft.VisualStudio.Services.Icons.Default",
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
    longDescription:
      "Een plug-and-play hook die gebruikmaakt van de browser Network Information API en online/offline events. Ideaal om gebruikervaringen elegant aan te passen bij een wegvallende verbinding.",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLG3z0BBkTNb_NeQFqQR_-f2Z63SH03-QIN_7rrR_Iqh8XR0StPwVwSubx&s=10",
    tags: ["TypeScript", "React", "Hooks"],
    githubUrl: "https://github.com/ItzjustElias/connectivityHook",
  },
  discordbot: {
    title: "Discord Bot Toolkit",
    year: "2023",
    role: "Developer",
    context: "Discord Bot",
    description:
      "Een verzameling handige Discord bot commands, gebouwd met Node.js.",
    longDescription:
      "Een modulaire toolkit voor Discord.js-ontwikkelaars met vooraf geschreven commands voor moderatie, utility en interactieve mini-games die direct in een server geïntegreerd kunnen worden.",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsbFdgcwpJpBgOQPjiwL60xQwQ7iqzxdnWkNmYK-R8gc5oRU_BrPb33od6&s=10",
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
    longDescription:
      "Dit project draait niet op servers of compilers, maar zit diep verankerd in het hart. Een digitale ode aan iemand die alles net dat tikkeltje mooier maakt.",
    imageUrl: "/images/projects/theone.png",
    tags: ["Love", "Always", "Red", "Secret"],
    listed: false,
  },
};

export const PROJECT_ORDER = Object.keys(PROJECT_DATA).filter(
  (id) => PROJECT_DATA[id].listed !== false,
);
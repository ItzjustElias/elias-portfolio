import type { Metadata } from "next";
import Link from "next/link";
import Bar from "../components/Bar";
import Foot from "../components/Foot";

export const metadata: Metadata = { title: "Privacy Policy" };

const SECTIONS: { h: string; p: React.ReactNode }[] = [
  {
    h: "01. General",
    p: (
      <>
        Dit is de persoonlijke portfolio website van <strong>Elias Bloem</strong>,
        gevestigd in België. Ik hecht veel waarde aan je privacy. De korte versie:
        ik verzamel geen persoonlijke gegevens, ik verkoop niets, en ik volg je
        niet over het internet.
      </>
    ),
  },
  {
    h: "02. Cookies",
    p: (
      <>
        Deze website is &quot;Cookie-Vrij&quot;. Ik gebruik geen tracking-cookies,
        geen advertentie-cookies en geen analytische cookies van derden (zoals
        Google Analytics). Je browser hoeft geen toestemming te geven omdat er
        simpelweg niets opgeslagen wordt.
      </>
    ),
  },
  {
    h: "03. Data Collection",
    p: (
      <>
        Wanneer je deze website bezoekt, worden alleen technische logs (zoals je
        IP-adres) tijdelijk verwerkt door mijn hostingprovider (bijv. GitHub
        Pages of Vercel) om de website veilig en stabiel te kunnen tonen. Deze
        gegevens worden niet door mij persoonlijk ingezien of opgeslagen.
      </>
    ),
  },
  {
    h: "04. Contact",
    p: (
      <>
        Als je contact met mij opneemt via e-mail of sociale media, gebruik ik je
        gegevens alleen om op je bericht te reageren. Je gegevens worden nooit
        gedeeld met derden voor commerciële doeleinden.
      </>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Bar />
      <main className="wrap">
        <Link href="/" className="back">
          &lt; back
        </Link>
        <h1 className="title" style={{ marginBottom: "var(--s6)" }}>
          Privacy policy
        </h1>
        <section className="sec">
          <h2 className="sec-label">-- Policy --</h2>
          <div className="legal" lang="nl">
            {SECTIONS.map((s) => (
              <section key={s.h}>
                <h2 lang="en">{s.h}</h2>
                <p>{s.p}</p>
              </section>
            ))}
          </div>
        </section>
      </main>
      <Foot />
    </>
  );
}

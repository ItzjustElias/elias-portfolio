import type { Metadata } from "next";
import Link from "next/link";
import Bar from "../components/Bar";
import Foot from "../components/Foot";
import QrTile from "../components/QrTile";
import { LINKS } from "../lib/data";

export const metadata: Metadata = { title: "CV" };

const URL = `https://eliasb.be${LINKS.cv}`;

export default function CvPage() {
  return (
    <>
      <Bar />
      <main className="wrap moving-grid">
        <section className="sec" style={{ borderTop: 0 }}>
          <h2 className="sec-label">-- CV --</h2>
        
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "3rem" }}>
            <QrTile value={URL} />
            <div className="plain-links" style={{ marginTop: "1.5rem", display: "flex", gap: "1rem" }}>
              <a href={LINKS.cv} target="_blank" rel="noopener noreferrer">
                open pdf
              </a>
              <Link href="/">back</Link>
            </div>
          </div>
          
        </section>
      </main>
      <Foot />
    </>
  );
}
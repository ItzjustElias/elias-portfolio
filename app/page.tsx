import Link from "next/link";
import Bar from "./components/Bar";
import Foot from "./components/Foot";
import Secret from "./components/Secret";
import { LINKS, LISTED, SYSTEM, UPTIME } from "./lib/data";
import { repoYears } from "./lib/github";
import { QUIP, stamp } from "./lib/report";

export default async function Home() {
  const t = stamp();
  const years = await repoYears();
  const max = years ? Math.max(...years.map((y) => y.count)) : 1;

  const groups: { year: string; items: typeof LISTED }[] = [];
  for (const p of LISTED) {
    const last = groups[groups.length - 1];
    if (last && last.year === p.year) last.items.push(p);
    else groups.push({ year: p.year, items: [p] });
  }

  return (
    <>
      <Secret />
      <Bar />
      <main>
        <div className="wrap">
          <header className="head">
            <p>---- Crash Report ----</p>
            <p>{QUIP}</p>
            <p>&nbsp;</p>
            <p>Time: {t.display}</p>
            <p>Description: Ticking developer</p>
          </header>

          <div className="hero">
            <div className="mast">
              <h1 className="name">
                <span className="line">Elias</span>{" "}
                <span className="line">Bloem</span>
              </h1>
            </div>
            <div className="about">
              <p>
                Developer in Belgium. I study applied informatics at HOGENT
                in Ghent and take on freelance work.
              </p>
              <p>
                Most of what I have built is tooling: Minecraft mods in Java,
                VS Code extensions in TypeScript, a few small web apps.
              </p>
            </div>
          </div>
        </div>

        <div className="wrap">
          <section className="sec" id="trace">
            <h2 className="sec-label">-- Stacktrace --</h2>
            <div>
              <p className="exception">
                <span className="cls">java.lang.IllegalStateException:</span>
                just one more project before bed
              </p>

              {groups.map((g, gi) => (
                <div key={g.year}>
                  {gi > 0 && (
                    <p className="caused">
                      Caused by: <b>{g.year}</b>
                    </p>
                  )}
                  <ul className="frames">
                    {g.items.map((p) => (
                      <li key={p.id}>
                        <Link href={`/project/${p.id}/`} className="frame">
                          <span className="at">at</span>
                          <span className="sym">
                            <span className="pkg">{p.pkg}.</span>
                            {p.frame}
                          </span>
                          <span className="loc">
                            ({p.frame}.{p.ext}:{p.year})
                          </span>
                          <span className="sum">{p.summary}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="sec" id="system">
            <h2 className="sec-label">-- System Details --</h2>
            <dl className="kv">
              {SYSTEM.map(([k, v]) => (
                <div key={k}>
                  <dt>{k}:</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="sec" id="uptime">
            <h2 className="sec-label">-- Uptime --</h2>
            <dl className="kv">
              {UPTIME.map((u) => (
                <div key={u.when}>
                  <dt>{u.when}</dt>
                  <dd>
                    {u.what}
                    <span className="sub">{u.detail}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </section>

          {years && (
            <section className="sec" id="repos">
              <h2 className="sec-label">-- Repositories --</h2>
              <div>
                <ul className="years" aria-label="Public repositories created per year">
                  {years.map((y: { year: number; count: number }) => (
                    <li key={y.year} data-n={y.count}>
                      <span className="faint">{y.year}</span>
                      <span className="track">
                        <span
                          className="fill"
                          style={
                            {
                              "--n": y.count,
                              "--unit": `${Math.min(2.25, 18 / max)}rem`,
                            } as React.CSSProperties
                          }
                        />
                        {y.count}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          )}

          <section className="sec" id="contact">
            <h2 className="sec-label">-- Contact --</h2>
            <div>
              <a className="mail" href={`mailto:${LINKS.email}`}>
                {LINKS.email}
              </a>
              <dl className="kv">
                <div>
                  <dt>GitHub:</dt>
                  <dd>
                    <a href={LINKS.github.href} target="_blank" rel="noopener noreferrer">
                      {LINKS.github.label}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt>LinkedIn:</dt>
                  <dd>
                    <a href={LINKS.linkedin.href} target="_blank" rel="noopener noreferrer">
                      {LINKS.linkedin.label}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt>Instagram:</dt>
                  <dd>
                    <a href={LINKS.instagram.href} target="_blank" rel="noopener noreferrer">
                      {LINKS.instagram.label}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt>CV:</dt>
                  <dd className="row-links">
                    <a href={LINKS.cv} target="_blank" rel="noopener noreferrer">
                      view
                    </a>
                    <a href={LINKS.cv} download="CV_ELIAS_BLOEM.pdf">
                      download
                    </a>
                    <Link href="/cv/">qr</Link>
                  </dd>
                </div>
              </dl>
            </div>
          </section>
        </div>
      </main>
      <Foot />
    </>
  );
}

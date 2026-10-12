import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Bar from "../../components/Bar";
import Foot from "../../components/Foot";
import { LISTED, PROJECTS, byId } from "../../lib/data";
import { QUIP, stamp } from "../../lib/report";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const p = byId(id);
  if (!p) return {};
  return { title: p.title, description: p.summary };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const p = byId(id);
  if (!p) notFound();

  const i = LISTED.findIndex((x) => x.id === p.id);
  const newer = i > 0 ? LISTED[i - 1] : null;
  const older = i >= 0 && i < LISTED.length - 1 ? LISTED[i + 1] : null;
  const love = p.id === "theone";
  const t = stamp();

  const rows: [string, React.ReactNode][] = [
    ["Package", p.pkg],
    ["Source", `${p.frame}.${p.ext}:${p.year}`],
    ["Role", p.role],
    ["Context", p.context],
    ["Stack", p.stack.join(", ")],
  ];
  if (p.archived) rows.push(["Status", "Archived"]);
  if (p.repo)
    rows.push([
      "Repository",
      <a key="r" href={p.repo} target="_blank" rel="noopener noreferrer">
        {p.repo.replace("https://", "")}
      </a>,
    ]);

  return (
    <div data-tone={love ? "love" : undefined}>
      <Bar />
      <main>
        <div className="wrap">
          <Link href="/#trace" className="back">
            &lt; back to stacktrace
          </Link>
          <header className="head" style={{ paddingTop: "var(--s4)" }}>
            <p>---- Crash Report ----</p>
            <p>{love ? "// System.Affection: Maximum" : QUIP}</p>
            <p>&nbsp;</p>
            <p>Time: {t.display}</p>
            <p>Description: {p.context}</p>
          </header>
          <h1 className="title" lang={p.lang}>
            {p.title}
          </h1>
        </div>

        <div className="wrap" style={{ marginTop: "var(--s5)" }}>
          <section className="sec">
            <h2 className="sec-label">-- Description --</h2>
            <div className="desc" lang={p.lang}>
              <div className="prose">
                <p>{p.summary}</p>
                {p.body.map((para) => (
                  <p key={para}>{para}</p>
                ))}
              </div>
              {p.logo && (
                // eslint-disable-next-line @next/next/no-img-element
                <img className="logo" src={p.logo} alt={`${p.title} logo`} width={144} height={144} />
              )}
            </div>
          </section>

          <section className="sec">
            <h2 className="sec-label">-- Frame Details --</h2>
            <dl className="kv">
              {rows.map(([k, v]) => (
                <div key={k}>
                  <dt>{k}:</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
          </section>

          {(newer || older) && (
            <section className="sec">
              <h2 className="sec-label">-- Stacktrace --</h2>
              <ul className="stackrow">
                {older && (
                  <li>
                    <Link href={`/project/${older.id}/`}>
                      <span className="dir">Caused by:</span>
                      <span className="sym">
                        <span className="faint">{older.pkg}.</span>
                        {older.frame}
                      </span>
                    </Link>
                  </li>
                )}
                {newer && (
                  <li>
                    <Link href={`/project/${newer.id}/`}>
                      <span className="dir">Led to:</span>
                      <span className="sym">
                        <span className="faint">{newer.pkg}.</span>
                        {newer.frame}
                      </span>
                    </Link>
                  </li>
                )}
              </ul>
            </section>
          )}
        </div>
      </main>
      <Foot />
    </div>
  );
}

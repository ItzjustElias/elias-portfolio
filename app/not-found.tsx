import Link from "next/link";
import Bar from "./components/Bar";
import Foot from "./components/Foot";

export default function NotFound() {
  return (
    <>
      <Bar />
      <main className="wrap">
        <header className="head">
          <p>---- Crash Report ----</p>
          <p>{"// Not on my machine either."}</p>
        </header>
        <section className="sec" style={{ borderTop: 0 }}>
          <h2 className="sec-label">-- Head --</h2>
          <div>
            <p className="exception">
              <span className="cls">java.lang.ClassNotFoundException:</span>
              no page here
            </p>
            <div className="plain-links">
              <Link href="/">home</Link>
              <Link href="/#trace">stacktrace</Link>
            </div>
          </div>
        </section>
      </main>
      <Foot />
    </>
  );
}

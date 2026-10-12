import Link from "next/link";
import { stamp } from "../lib/report";

export default function Bar() {
  return (
    <div className="bar">
      <div className="wrap">
        <Link href="/" className="file" aria-label="Home">
          {stamp().file}
        </Link>
        <nav aria-label="Sections">
          <Link href="/#trace">trace</Link>
          <Link href="/#system">system</Link>
          <Link href="/#uptime">uptime</Link>
          <Link href="/#contact">contact</Link>
        </nav>
      </div>
    </div>
  );
}

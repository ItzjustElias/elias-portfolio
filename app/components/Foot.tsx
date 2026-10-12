import Link from "next/link";

export default function Foot() {
  return (
    <footer className="foot">
      <div className="wrap">
        <span>Report saved to eliasb.be</span>
        <Link href="/privacy/">Privacy</Link>
      </div>
    </footer>
  );
}

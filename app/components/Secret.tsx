"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

/** Type "loeka" anywhere on the page. */
export default function Secret() {
  const router = useRouter();
  const [found, setFound] = useState(false);

  useEffect(() => {
    const code = "loeka";
    let buffer = "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key.length !== 1) return;
      buffer = (buffer + e.key.toLowerCase()).slice(-code.length);
      if (buffer === code) {
        setFound(true);
        window.setTimeout(() => router.push("/project/theone/"), 700);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [router]);

  if (!found) return null;
  return (
    <div className="found" data-tone="love" role="status">
      found you ❤
    </div>
  );
}

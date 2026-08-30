"use client";

import { useEffect, useRef } from "react";
import rough from "roughjs";

export default function SketchFrame({
  size = 220,
  color = "#3355dd",
}: {
  size?: number;
  color?: string;
}) {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    svg.innerHTML = "";

    const rc = rough.svg(svg);
    const cx = size / 2;
    const cy = size / 2;
    const r = size * 0.42;

    svg.appendChild(
      rc.circle(cx, cy, r * 2, {
        stroke: color,
        strokeWidth: 3,
        roughness: 2.4,
        fill: `${color}14`,
        fillStyle: "solid",
      }),
    );
    svg.appendChild(
      rc.circle(cx, cy, r * 2 * 0.86, {
        stroke: color,
        strokeWidth: 1.5,
        roughness: 2.8,
      }),
    );
  }, [size, color]);

  return (
    <svg
      ref={svgRef}
      viewBox={`0 0 ${size} ${size}`}
      width={size}
      height={size}
      aria-hidden
    />
  );
}

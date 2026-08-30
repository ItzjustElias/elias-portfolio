"use client";

import { useEffect, useRef } from "react";
import rough from "roughjs";


export default function SketchDivider({
  color = "var(--ink-faint)",
  height = 24,
}: {
  color?: string;
  height?: number;
}) {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    svg.innerHTML = "";

    const rc = rough.svg(svg);
    const width = 400;
    const mid = height / 2;

    const resolved =
      color.startsWith("var(") && typeof window !== "undefined"
        ? getComputedStyle(document.documentElement).getPropertyValue(
            color.slice(4, -1),
          ) || "#9c937e"
        : color;

    const points: [number, number][] = [
      [0, mid],
      [width * 0.15, mid - height * 0.4],
      [width * 0.35, mid + height * 0.4],
      [width * 0.5, mid],
      [width * 0.65, mid - height * 0.4],
      [width * 0.85, mid + height * 0.4],
      [width, mid],
    ];

    svg.appendChild(
      rc.curve(points, {
        stroke: resolved.trim() || "#9c937e",
        strokeWidth: 2,
        roughness: 1.4,
        bowing: 0.6,
      }),
    );
  }, [color, height]);

  return (
    <svg
      ref={svgRef}
      viewBox={`0 0 400 ${height}`}
      className="w-full h-auto"
      preserveAspectRatio="none"
      aria-hidden
    />
  );
}

"use client";

import { useEffect, useRef } from "react";
import rough from "roughjs";

export type SketchSeries = {
  label: string;
  color: string;
  points: number[];
};

type SketchChartProps = {
  xLabels: string[];
  series: SketchSeries[];
  yLabel?: string;
  height?: number;
};

export default function SketchChart({
  xLabels,
  series,
  yLabel,
  height = 320,
}: SketchChartProps) {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const width = 640;

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    
    while (svg.firstChild) {
      svg.removeChild(svg.firstChild);
    }

    const rc = rough.svg(svg);
    const padding = { top: 20, right: 20, bottom: 40, left: 36 };
    const plotW = width - padding.left - padding.right;
    const plotH = height - padding.top - padding.bottom;
    const ink = "#2a2620";

    const axisOptions = { stroke: ink, strokeWidth: 2, roughness: 2.2, disableMultiStroke: true };

    svg.appendChild(
      rc.line(
        padding.left,
        padding.top,
        padding.left,
        height - padding.bottom,
        axisOptions,
      ),
    );
    svg.appendChild(
      rc.line(
        padding.left,
        height - padding.bottom,
        width - padding.right,
        height - padding.bottom,
        axisOptions,
      ),
    );

    const stepX = plotW / Math.max(xLabels.length - 1, 1);

    xLabels.forEach((label, i) => {
      const x = padding.left + i * stepX;
      svg.appendChild(
        rc.line(
          x,
          height - padding.bottom,
          x,
          height - padding.bottom + 6,
          axisOptions,
        ),
      );
      const text = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "text",
      );
      text.setAttribute("x", String(x));
      text.setAttribute("y", String(height - padding.bottom + 20));
      text.setAttribute("text-anchor", "middle");
      text.setAttribute("font-size", "12");
      text.setAttribute("fill", "#6b6455");
      text.textContent = label;
      svg.appendChild(text);
    });

    [0, 50, 100].forEach((val) => {
      const y = height - padding.bottom - (val / 100) * plotH;
      const text = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "text",
      );
      text.setAttribute("x", String(padding.left - 8));
      text.setAttribute("y", String(y + 4));
      text.setAttribute("text-anchor", "end");
      text.setAttribute("font-size", "11");
      text.setAttribute("fill", "#9c937e");
      text.textContent = String(val);
      svg.appendChild(text);
    });

    series.forEach((s) => {
      const points: [number, number][] = s.points.map((v, i) => [
        padding.left + i * stepX,
        height - padding.bottom - (v / 100) * plotH,
      ]);

      svg.appendChild(
        rc.curve(points, {
          stroke: s.color,
          strokeWidth: 3,
          roughness: 1.6,
          bowing: 1,
          disableMultiStroke: true,
        }),
      );

      points.forEach(([x, y], i) => {
        svg.appendChild(
          rc.circle(x, y, 5, {
            stroke: s.color,
            fill: s.color,
            fillStyle: "solid",
            roughness: 1.8,
          }),
        );

        if (i > 0 ) {
        const valText = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "text",
        );
        valText.setAttribute("x", String(x));
        valText.setAttribute("y", String(y - 10));
        valText.setAttribute("text-anchor", "middle");
        valText.setAttribute("font-size", "10");
        valText.setAttribute("font-weight", "bold");
        valText.setAttribute("fill", s.color);
        valText.textContent = String(s.points[i]);
        svg.appendChild(valText);
      }
      });
    });
  }, [xLabels, series, height]);

  return (
    <div className="w-full">
      <svg
        ref={svgRef}
        viewBox={`0 0 ${width} ${height}`}
        className="w-full h-auto"
        role="img"
        aria-label={yLabel || "chart"}
      />
      <div className="flex flex-wrap gap-4 mt-4 justify-center">
        {series.map((s) => (
          <span
            key={s.label}
            className="flex items-center gap-2 text-xs font-bold"
            style={{ color: "var(--ink-soft)" }}
          >
            <span
              className="inline-block w-3 h-3 rounded-full"
              style={{ backgroundColor: s.color }}
            />
            {s.label}
          </span>
        ))}
      </div>
    </div>
  );
}
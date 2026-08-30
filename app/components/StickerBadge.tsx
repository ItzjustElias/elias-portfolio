type StickerBadgeProps = {
  children: React.ReactNode;
  className?: string;
  tone?: "ink" | "accent";
};

export default function StickerBadge({
  children,
  className = "",
  tone = "ink",
}: StickerBadgeProps) {
  const toneClasses =
    tone === "accent"
      ? "bg-[var(--accent)] text-[var(--card)] border-[var(--accent)]"
      : "bg-[var(--card)] text-[var(--ink)] border-[var(--ink)]";

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-sm border px-3 py-1 text-[11px] font-bold uppercase tracking-[0.15em] shadow-[2px_2px_0_0_rgba(42,38,32,0.12)] ${toneClasses} ${className}`}
      style={{ transform: "rotate(-1.2deg)" }}
    >
      {children}
    </span>
  );
}

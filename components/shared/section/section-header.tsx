import { SectionLabel } from "./section-label";

type SectionHeaderProps = {
  label: string;
  title?: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  label,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "";

  return (
    <header className={`max-w-4xl ${alignClass} ${className}`}>
      <SectionLabel>{label}</SectionLabel>

      {title && (
        <h2 className="text-balance text-[clamp(2.25rem,5vw,4.5rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-zinc-100">
          {title}
        </h2>
      )}

      {description && (
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-500">
          {description}
        </p>
      )}
    </header>
  );
}

type SectionLabelProps = {
  children: React.ReactNode;
  className?: string;
};

export function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <p
      className={`mb-6 text-[11px] uppercase tracking-[0.35em] text-zinc-500 ${className}`}
    >
      {children}
    </p>
  );
}

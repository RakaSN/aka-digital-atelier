type SectionShellProps = {
  children: React.ReactNode;
  id?: string;
  className?: string;
  bordered?: boolean;
};

export function SectionShell({
  children,
  id,
  className = "",
  bordered = false,
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={`relative py-28 md:py-36 lg:py-40 ${bordered ? "border-t border-zinc-900/80" : ""} ${className}`}
    >
      {children}
    </section>
  );
}

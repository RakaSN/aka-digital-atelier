export function HeroSocials() {
  const links = [
    { label: "GitHub", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "YouTube", href: "#" },
  ];

  return (
    <div className="mt-14 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-zinc-500 md:mt-16 md:gap-8 md:text-base">
      {links.map((link, index) => (
        <span key={link.label} className="flex items-center gap-6 md:gap-8">
          <a
            href={link.href}
            className="transition-colors duration-300 hover:text-zinc-100"
          >
            {link.label}
          </a>
          {index < links.length - 1 && (
            <span aria-hidden className="text-violet-600/60">
              ·
            </span>
          )}
        </span>
      ))}
    </div>
  );
}

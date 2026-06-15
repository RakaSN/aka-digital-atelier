import { Container } from "./container";
import { Logo } from "./logo";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#works" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#" },
];

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        aria-hidden
        className="
          pointer-events-none
          absolute inset-0
          bg-gradient-to-b
          from-[#09090b]/90
          via-[#09090b]/40
          to-transparent
        "
      />

      <Container>
        <div className="relative flex h-20 items-center justify-between">
          <Logo />

          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-10 text-[13px] text-zinc-500 md:flex"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="transition-colors duration-300 hover:text-zinc-100"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </Container>
    </header>
  );
}

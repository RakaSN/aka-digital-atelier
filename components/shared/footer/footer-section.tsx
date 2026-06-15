import { Container } from "@/components/layout/container";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Works", href: "#works" },
  { label: "Studio", href: "#studio" },
  { label: "Blog", href: "#blog" },
];

const socialLinks = [
  { label: "GitHub", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "YouTube", href: "#" },
];

export function FooterSection() {
  return (
    <footer className="border-t border-zinc-900/80">
      <Container>
        <div className="py-16 md:py-20">
          <div className="grid gap-12 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-5">
              <p className="text-[11px] uppercase tracking-[0.45em] text-zinc-500">
                AKA
              </p>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-zinc-500">
                Teacher • Developer • Linux Engineer • Creative Technologist •
                Music Producer
              </p>
            </div>

            <nav
              aria-label="Footer navigation"
              className="md:col-span-3 md:col-start-7"
            >
              <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-zinc-600">
                Navigate
              </p>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-zinc-400 transition-colors hover:text-zinc-100"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="md:col-span-2">
              <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-zinc-600">
                Connect
              </p>
              <ul className="space-y-3">
                {socialLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-zinc-400 transition-colors hover:text-zinc-100"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="section-divider mt-16 mb-8" />

          <div className="flex flex-col gap-2 text-xs text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 AKA. All rights reserved.</p>
            <p className="uppercase tracking-[0.2em]">
              Where Code Becomes Art
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default FooterSection;

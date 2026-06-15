import { Container } from "./container";
import { Logo } from "./logo";

export function Navbar() {
  return (
    //<header className="fixed inset-x-0 top-0 z-50 bg-transparent">
    <header className="fixed inset-x-0 top-0 z-50">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <Logo />

          <nav className="hidden items-center gap-10 text-sm text-zinc-500 md:flex">
            <a href="/" className="transition-colors hover:text-white">
              Home
            </a>

            <a href="/about" className="transition-colors hover:text-white">
              About
            </a>

            <a href="/portfolio" className="transition-colors hover:text-white">
              Portfolio
            </a>

            <a href="/blog" className="transition-colors hover:text-white">
              Blog
            </a>

            <a href="/contact" className="transition-colors hover:text-white">
              Contact
            </a>
          </nav>
        </div>
      </Container>
    </header>
  );
}
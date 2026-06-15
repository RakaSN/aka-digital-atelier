import { Container } from "@/components/layout/container";
import { HeroContent } from "./hero-content";
import { HeroImage } from "./hero-image";

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">

      <HeroImage />

      {/* Vertical Text */}
      <div
        className="
        absolute
        left-8
        top-1/2
        hidden
        -translate-y-1/2
        rotate-180

        text-xs
        uppercase
        tracking-[0.8em]

        text-zinc-700

        [writing-mode:vertical-rl]

        xl:block
      "
      >
        DIGITAL ATELIER
      </div>

      <Container>

        <div className="flex min-h-screen items-center">

          <HeroContent />

        </div>

      </Container>

      {/* Scroll */}
      <div
        className="
        absolute
        bottom-10
        left-1/2
        hidden
        -translate-x-1/2

        text-xs
        uppercase
        tracking-[0.4em]

        text-zinc-600

        lg:block
      "
      >
        SCROLL
      </div>

    </section>
  );
}
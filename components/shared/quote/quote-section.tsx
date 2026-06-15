import { Container } from "@/components/layout/container";
import { FadeIn, SectionShell } from "@/components/shared/section";

export function QuoteSection() {
  return (
    <SectionShell id="quote" className="py-32 md:py-44 lg:py-56">
      <Container>
        <FadeIn>
          <figure className="relative mx-auto max-w-5xl text-center">
            {/* Atmospheric accent */}
            <div
              aria-hidden
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-[400px]
                w-[400px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-violet-700/[0.04]
                blur-[120px]
              "
            />

            <blockquote
              className="
                relative
                text-balance
                text-[clamp(2rem,5.5vw,5rem)]
                font-semibold
                leading-[1.08]
                tracking-[-0.03em]
                text-zinc-100
              "
            >
              <span className="text-zinc-300">Where Code Becomes Art</span>
              <br />
              <span className="text-zinc-500">and Sound Becomes Emotion.</span>
            </blockquote>

            <figcaption className="mt-10 text-[11px] uppercase tracking-[0.45em] text-zinc-600">
              AKA — Digital Atelier
            </figcaption>
          </figure>
        </FadeIn>
      </Container>
    </SectionShell>
  );
}

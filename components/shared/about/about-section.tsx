import { Container } from "@/components/layout/container";
import {
  FadeIn,
  SectionHeader,
  SectionShell,
} from "@/components/shared/section";

const roles = ["Engineer.", "Artist.", "Educator."];

const paragraphs = [
  "I build, break, learn, and create.",
  "From systems that scale to melodies that heal.",
  "I believe in curiosity, discipline, and the beauty of craftsmanship.",
];

export function AboutSection() {
  return (
    <SectionShell id="about">
      <Container>
        <div className="grid items-start gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <FadeIn>
              <SectionHeader label="About" title={null} />

              <div className="space-y-1">
                {roles.map((role) => (
                  <h2
                    key={role}
                    className="text-[clamp(2.5rem,5vw,4.25rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-zinc-100"
                  >
                    {role}
                  </h2>
                ))}
              </div>
            </FadeIn>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <FadeIn delay={0.15}>
              <div className="relative pl-0 lg:border-l lg:border-zinc-800/80 lg:pl-12">
                <div
                  aria-hidden
                  className="absolute -left-px top-0 hidden h-12 w-px bg-violet-600 lg:block"
                />

                <div className="space-y-8">
                  {paragraphs.map((text) => (
                    <p
                      key={text}
                      className="text-lg leading-[1.85] text-zinc-400 md:text-xl md:leading-9"
                    >
                      {text}
                    </p>
                  ))}
                </div>

                <p className="mt-12 text-sm uppercase tracking-[0.25em] text-zinc-600">
                  Digital Atelier — Est. 2026
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </Container>
    </SectionShell>
  );
}

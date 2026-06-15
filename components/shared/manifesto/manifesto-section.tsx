import { Container } from "@/components/layout/container";
import {
  FadeIn,
  SectionHeader,
  SectionShell,
  StaggerContainer,
  StaggerItem,
} from "@/components/shared/section";

const principles = [
  {
    index: "01",
    statement: "One creates systems.",
    detail: "Architecture, infrastructure, and code that scales with intention.",
  },
  {
    index: "02",
    statement: "One creates emotions.",
    detail: "Sound, rhythm, and atmosphere that move people before words do.",
  },
  {
    index: "03",
    statement: "Both are forms of art.",
    detail: "Crafted with the same discipline — precision in service of feeling.",
  },
];

export function ManifestoSection() {
  return (
    <SectionShell id="manifesto" bordered>
      <Container>
        <div className="mx-auto max-w-5xl">
          <FadeIn>
            <SectionHeader
              label="Manifesto"
              title={
                <>
                  Technology and music
                  <br />
                  <span className="text-zinc-400">are not separate worlds.</span>
                </>
              }
            />
          </FadeIn>

          <StaggerContainer className="mt-20 space-y-0 md:mt-28">
            {principles.map((item, i) => (
              <StaggerItem key={item.index}>
                <article
                  className={`
                    group
                    border-t border-zinc-800/80
                    py-10
                    transition-colors
                    duration-500
                    hover:border-zinc-700
                    md:py-14
                    ${i === principles.length - 1 ? "border-b border-zinc-800/80" : ""}
                  `}
                >
                  <div className="grid gap-4 md:grid-cols-[4rem_1fr] md:gap-12">
                    <p className="font-mono text-xs tracking-wider text-zinc-600">
                      {item.index}
                    </p>

                    <div>
                      <h3 className="text-[clamp(1.5rem,3vw,2.75rem)] font-medium leading-tight tracking-[-0.02em] text-zinc-100 transition-colors group-hover:text-white">
                        {item.statement}
                      </h3>
                      <p className="mt-3 max-w-xl text-base leading-relaxed text-zinc-500 md:mt-4">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </Container>
    </SectionShell>
  );
}

import { Container } from "@/components/layout/container";
import {
  FadeIn,
  SectionHeader,
  SectionShell,
  StaggerContainer,
  StaggerItem,
} from "@/components/shared/section";

const works = [
  {
    index: "01",
    title: "Portfolio Premium",
    category: "Personal Brand Website",
    year: "2026",
  },
  {
    index: "02",
    title: "School Website Premium",
    category: "Digital Ecosystem",
    year: "2025",
  },
  {
    index: "03",
    title: "Moodle Infrastructure",
    category: "Learning Platform",
    year: "2025",
  },
  {
    index: "04",
    title: "Linux & Server",
    category: "Self-hosted Systems",
    year: "2024",
  },
];

export function WorksSection() {
  return (
    <SectionShell id="works">
      <Container>
        <FadeIn>
          <SectionHeader
            label="Selected Works"
            title="Building ideas into experiences."
            className="mb-16 md:mb-24"
          />
        </FadeIn>

        <StaggerContainer className="divide-y divide-zinc-800/80">
          {works.map((work) => (
            <StaggerItem key={work.index}>
              <article
                className="
                  group
                  grid
                  gap-4
                  py-10
                  transition-colors
                  duration-500
                  hover:bg-zinc-900/20
                  md:grid-cols-[4rem_1fr_auto]
                  md:items-center
                  md:gap-12
                  md:py-12
                "
              >
                <p className="font-mono text-xs tracking-wider text-zinc-600">
                  {work.index}
                </p>

                <div>
                  <h3
                    className="
                      text-[clamp(1.5rem,3vw,2.25rem)]
                      font-medium
                      tracking-[-0.02em]
                      text-zinc-100
                      transition-colors
                      group-hover:text-white
                    "
                  >
                    {work.title}
                  </h3>
                  <p className="mt-2 text-sm text-zinc-500">{work.category}</p>
                </div>

                <p className="text-xs uppercase tracking-[0.2em] text-zinc-600 md:text-right">
                  {work.year}
                </p>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </SectionShell>
  );
}

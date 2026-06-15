import { Container } from "@/components/layout/container";
import {
  SectionShell,
  StaggerContainer,
  StaggerItem,
} from "@/components/shared/section";

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "20+", label: "Projects" },
  { value: "10+", label: "Technologies" },
  { value: "∞", label: "Passion" },
];

export function ExperienceSection() {
  return (
    <SectionShell id="experience" bordered>
      <Container>
        <StaggerContainer className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <article className="group relative">
                  <div
                    aria-hidden
                    className="
                      absolute -top-3 left-0 h-px w-8
                      bg-violet-600/0
                      transition-all duration-500
                      group-hover:w-12 group-hover:bg-violet-600
                    "
                  />

                  <p
                    className="
                      text-[clamp(3rem,6vw,4.5rem)]
                      font-semibold
                      leading-none
                      tracking-[-0.03em]
                      text-zinc-100
                    "
                  >
                    {stat.value}
                  </p>

                  <p className="mt-4 text-sm uppercase tracking-[0.2em] text-zinc-500">
                    {stat.label}
                  </p>
                </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </SectionShell>
  );
}

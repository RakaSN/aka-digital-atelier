import { Container } from "@/components/layout/container";
import {
  FadeIn,
  SectionHeader,
  SectionShell,
  StaggerContainer,
  StaggerItem,
} from "@/components/shared/section";

const genres = [
  "Cinematic Metal",
  "Progressive Metal",
  "Hybrid Trap",
  "Future Riddim",
  "Color Bass",
];

const tools = [
  "Odin III",
  "Serum",
  "Archetype Nolly",
  "Mjolnir",
  "Umansky Bass",
];

type StudioListProps = {
  title: string;
  items: string[];
};

function StudioList({ title, items }: StudioListProps) {
  return (
    <div>
      <h3 className="mb-8 text-[11px] uppercase tracking-[0.35em] text-zinc-500">
        {title}
      </h3>

      <ul className="space-y-5">
        {items.map((item) => (
          <li
            key={item}
            className="
              text-[clamp(1.25rem,2.5vw,1.875rem)]
              font-light
              tracking-[-0.01em]
              text-zinc-400
              transition-colors
              duration-300
              hover:text-zinc-100
            "
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function StudioSection() {
  return (
    <SectionShell id="studio" bordered>
      <Container>
        <FadeIn>
          <SectionHeader
            label="Creative Studio"
            title={
              <>
                Composing emotions
                <br />
                <span className="text-zinc-400">through sound.</span>
              </>
            }
            className="mb-16 md:mb-24"
          />
        </FadeIn>

        <StaggerContainer className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <StaggerItem>
            <StudioList title="Genres" items={genres} />
          </StaggerItem>

          <StaggerItem>
            <div className="lg:border-l lg:border-zinc-800/80 lg:pl-16">
              <StudioList title="Tools" items={tools} />
            </div>
          </StaggerItem>
        </StaggerContainer>
      </Container>
    </SectionShell>
  );
}

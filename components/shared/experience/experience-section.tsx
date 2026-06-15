import { Container } from "@/components/layout/container";

export function ExperienceSection() {
  return (
    <section className="py-40">
      <Container>
        <div className="grid gap-16 md:grid-cols-4">
          <div>
            <h3 className="text-7xl font-bold text-zinc-100">5+</h3>
            <p className="mt-4 text-zinc-500">Years Experience</p>
          </div>

          <div>
            <h3 className="text-7xl font-bold text-zinc-100">20+</h3>
            <p className="mt-4 text-zinc-500">Projects</p>
          </div>

          <div>
            <h3 className="text-7xl font-bold text-zinc-100">10+</h3>
            <p className="mt-4 text-zinc-500">Technologies</p>
          </div>

          <div>
            <h3 className="text-7xl font-bold text-zinc-100">∞</h3>
            <p className="mt-4 text-zinc-500">Passion</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
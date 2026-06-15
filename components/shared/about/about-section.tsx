import { Container } from "@/components/layout/container";

export function AboutSection() {
  return (
    <section className="py-40">
      <Container>
        <div className="grid gap-20 lg:grid-cols-2">
          <div>
            <p className="mb-8 text-sm uppercase tracking-[0.3em] text-zinc-500">
              About
            </p>

            <h2 className="text-5xl font-bold leading-tight text-zinc-100 md:text-7xl">
              Engineer.
              <br />
              Artist.
              <br />
              Educator.
            </h2>
          </div>

          <div className="space-y-8 text-lg leading-9 text-zinc-400">
            <p>
              I build, break, learn, and create.
            </p>

            <p>
              From systems that scale to melodies that heal.
            </p>

            <p>
              I believe in curiosity, discipline, and the beauty of
              craftsmanship.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
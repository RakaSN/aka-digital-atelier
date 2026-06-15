import { Container } from "@/components/layout/container";

export function WorksSection() {
  return (
    <section className="py-40">
      <Container>
        <div className="mb-24">
          <p className="mb-8 text-sm uppercase tracking-[0.3em] text-zinc-500">
            Selected Works
          </p>

          <h2 className="text-5xl font-bold text-zinc-100 md:text-7xl">
            Building ideas into experiences.
          </h2>
        </div>

        <div className="space-y-16">
          <div className="border-b border-zinc-800 pb-12">
            <p className="mb-4 text-zinc-600">01</p>

            <h3 className="text-4xl font-semibold text-zinc-100">
              Portfolio Premium
            </h3>

            <p className="mt-4 text-zinc-500">
              Personal Brand Website
            </p>
          </div>

          <div className="border-b border-zinc-800 pb-12">
            <p className="mb-4 text-zinc-600">02</p>

            <h3 className="text-4xl font-semibold text-zinc-100">
              School Website Premium
            </h3>

            <p className="mt-4 text-zinc-500">
              Digital Ecosystem
            </p>
          </div>

          <div className="border-b border-zinc-800 pb-12">
            <p className="mb-4 text-zinc-600">03</p>

            <h3 className="text-4xl font-semibold text-zinc-100">
              Moodle Infrastructure
            </h3>

            <p className="mt-4 text-zinc-500">
              Learning Platform
            </p>
          </div>

          <div className="pb-12">
            <p className="mb-4 text-zinc-600">04</p>

            <h3 className="text-4xl font-semibold text-zinc-100">
              Linux & Server
            </h3>

            <p className="mt-4 text-zinc-500">
              Self-hosted Systems
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
import { Container } from "@/components/layout/container";

export function StudioSection() {
  return (
    <section className="py-40">
      <Container>
        <div className="mb-24">
          <p className="mb-8 text-sm uppercase tracking-[0.3em] text-zinc-500">
            Creative Studio
          </p>

          <h2 className="max-w-4xl text-5xl font-bold text-zinc-100 md:text-7xl">
            Composing emotions through sound.
          </h2>
        </div>

        <div className="grid gap-20 lg:grid-cols-2">
          <div>
            <h3 className="mb-8 text-2xl font-semibold text-zinc-100">
              Genres
            </h3>

            <div className="space-y-6 text-3xl text-zinc-400">
              <p>Cinematic Metal</p>
              <p>Progressive Metal</p>
              <p>Hybrid Trap</p>
              <p>Future Riddim</p>
              <p>Color Bass</p>
            </div>
          </div>

          <div>
            <h3 className="mb-8 text-2xl font-semibold text-zinc-100">
              Tools
            </h3>

            <div className="space-y-6 text-3xl text-zinc-400">
              <p>Odin III</p>
              <p>Serum</p>
              <p>Archetype Nolly</p>
              <p>Mjolnir</p>
              <p>Umansky Bass</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
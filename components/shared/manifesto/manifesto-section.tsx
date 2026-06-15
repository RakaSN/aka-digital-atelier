import { Container } from "@/components/layout/container";

export function ManifestoSection() {
  return (
    <section className="py-40">
      <Container>
        <div className="mx-auto max-w-5xl">
          <p className="mb-8 text-sm uppercase tracking-[0.3em] text-zinc-500">
            Manifesto
          </p>

          <h2 className="max-w-4xl text-5xl font-bold leading-tight text-zinc-100 md:text-7xl">
            Technology and music
            <br />
            are not separate worlds.
          </h2>

          <div className="mt-24 space-y-20">
            <div>
              <p className="mb-3 text-sm text-zinc-600">01</p>

              <h3 className="text-3xl font-semibold text-zinc-100 md:text-5xl">
                One creates systems.
              </h3>
            </div>

            <div>
              <p className="mb-3 text-sm text-zinc-600">02</p>

              <h3 className="text-3xl font-semibold text-zinc-100 md:text-5xl">
                One creates emotions.
              </h3>
            </div>

            <div>
              <p className="mb-3 text-sm text-zinc-600">03</p>

              <h3 className="text-3xl font-semibold text-zinc-100 md:text-5xl">
                Both are forms of art.
              </h3>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
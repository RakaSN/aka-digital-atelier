import { Container } from "@/components/layout/container";

export function QuoteSection() {
  return (
    <section className="py-56">
      <Container>
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-5xl font-bold leading-tight text-zinc-100 md:text-8xl">
            Where Code Becomes Art
            <br />
            and Sound Becomes Emotion.
          </h2>

          <p className="mt-10 text-zinc-500">
            AKA
          </p>
        </div>
      </Container>
    </section>
  );
}
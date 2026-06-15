import { HeroButtons } from "./hero-buttons";
import { HeroSocials } from "./hero-socials";

export function HeroContent() {
  return (
    <div className="relative z-20 max-w-3xl">

      <p
        className="
        mb-10
        text-sm
        uppercase
        tracking-[0.4em]
        text-zinc-500
      "
      >
        Teacher • Developer • Linux Engineer
      </p>

      <h1
        className="
        bg-gradient-to-b
        from-white
        via-zinc-100
        to-zinc-500
        bg-clip-text
        text-transparent

        text-8xl
        font-semibold

        md:text-[9rem]
        "
      >
        AKA
      </h1>

      <div className="mt-8 space-y-3">

        <h2 className="text-6xl font-light leading-none text-zinc-100 md:text-7xl">
          Where Code
        </h2>

        <h2 className="text-6xl font-light leading-none text-zinc-100 md:text-7xl">
          Becomes Art
        </h2>

        <div className="my-8 h-[2px] w-24 bg-violet-600" />

        <h2 className="text-6xl font-light leading-none text-zinc-100 md:text-7xl">
          and Sound
        </h2>

        <h2 className="text-6xl font-light leading-none text-zinc-100 md:text-7xl">
          Becomes Emotion.
        </h2>

      </div>

      <p className="mt-14 max-w-xl text-xl leading-10 text-zinc-400">
        Building digital experiences, engineering systems,
        and composing emotions through technology and music.
      </p>

      <HeroButtons />

      <HeroSocials />

    </div>
  );
}
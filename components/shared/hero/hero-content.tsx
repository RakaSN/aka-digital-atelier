"use client";

import { motion } from "framer-motion";

import { HeroButtons } from "./hero-buttons";
import { HeroSocials } from "./hero-socials";

const ease = [0.22, 1, 0.36, 1] as const;

export function HeroContent() {
  return (
    <div className="relative z-20 w-full max-w-[42rem] lg:max-w-[46rem]">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.1, ease }}
        className="
          mb-8
          text-[11px]
          uppercase
          tracking-[0.45em]
          text-zinc-500
          md:mb-10
        "
      >
        Teacher • Developer • Linux Engineer
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2, ease }}
        className="
          bg-gradient-to-b
          from-white
          via-zinc-100
          to-zinc-600
          bg-clip-text
          text-transparent

          text-[clamp(5.5rem,16vw,10.5rem)]
          font-semibold
          leading-[0.85]
          tracking-[-0.04em]

          drop-shadow-[0_0_80px_rgba(255,255,255,0.04)]
        "
      >
        AKA
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.35, ease }}
        className="mt-6 space-y-1 md:mt-8 md:space-y-0.5"
      >
        <h2
          className="
            text-[clamp(1.75rem,4.2vw,3.75rem)]
            font-light
            leading-[1.05]
            tracking-[-0.02em]
            text-zinc-100/95
          "
        >
          Where Code
        </h2>

        <h2
          className="
            text-[clamp(1.75rem,4.2vw,3.75rem)]
            font-light
            leading-[1.05]
            tracking-[-0.02em]
            text-zinc-100/95
          "
        >
          Becomes Art
        </h2>

        <div
          className="
            my-5
            h-px
            w-16
            bg-gradient-to-r
            from-violet-600
            to-violet-600/0
            md:my-7
            md:w-20
          "
        />

        <h2
          className="
            text-[clamp(1.75rem,4.2vw,3.75rem)]
            font-light
            leading-[1.05]
            tracking-[-0.02em]
            text-zinc-300/90
          "
        >
          and Sound
        </h2>

        <h2
          className="
            text-[clamp(1.75rem,4.2vw,3.75rem)]
            font-light
            leading-[1.05]
            tracking-[-0.02em]
            text-zinc-300/90
          "
        >
          Becomes Emotion.
        </h2>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.5, ease }}
        className="
          mt-10
          max-w-md
          text-base
          leading-[1.85]
          text-zinc-400/90
          md:mt-12
          md:text-lg
          md:leading-8
        "
      >
        Building digital experiences, engineering systems,
        and composing emotions through technology and music.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.65, ease }}
      >
        <HeroButtons />
        <HeroSocials />
      </motion.div>
    </div>
  );
}

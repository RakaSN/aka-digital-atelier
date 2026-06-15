"use client";

import { motion } from "framer-motion";

import { Container } from "@/components/layout/container";
import { GridBackground } from "@/components/background/grid-background";

import { HeroContent } from "./hero-content";
import { HeroImage } from "./hero-image";

export function HeroSection() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#09090b]">
      <GridBackground />

      <HeroImage />

      {/* Unified vignette — ties text + image into one frame */}
      <div aria-hidden className="hero-vignette pointer-events-none absolute inset-0 z-10" />

      <div aria-hidden className="film-grain" />

      {/* Vertical spine — editorial anchor */}
      <div
        aria-hidden
        className="
          absolute
          left-6
          top-1/2
          z-20
          hidden
          -translate-y-1/2
          rotate-180
          text-[10px]
          uppercase
          tracking-[0.85em]
          text-zinc-700/80
          [writing-mode:vertical-rl]
          xl:left-8
          xl:block
        "
      >
        Digital Atelier
      </div>

      <Container>
        <div className="relative z-20 flex min-h-[100svh] items-center pt-24 pb-20 lg:pt-28">
          <HeroContent />
        </div>
      </Container>

      {/* Scroll cue */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="
          absolute
          bottom-8
          left-1/2
          z-20
          hidden
          -translate-x-1/2
          flex-col
          items-center
          gap-3
          lg:flex
        "
      >
        <span className="text-[10px] uppercase tracking-[0.5em] text-zinc-600">
          Scroll
        </span>
        <motion.span
          animate={{ y: [0, 6, 0], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          className="block h-8 w-px bg-gradient-to-b from-zinc-600 to-transparent"
        />
      </motion.div>
    </section>
  );
}

import Image from "next/image";

export function HeroImage() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0"
    >
      {/* Atmospheric bridge — spans full canvas */}
      <div
        className="
          absolute
          left-[10%]
          top-[5%]
          h-[700px]
          w-[700px]
          rounded-full
          bg-violet-700/[0.08]
          blur-[180px]
          lg:left-[20%]
          lg:top-[10%]
          lg:h-[900px]
          lg:w-[900px]
          lg:-translate-x-1/4
          lg:blur-[200px]
        "
      />

      <div
        className="
          absolute
          right-[-10%]
          top-[15%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-violet-900/[0.05]
          blur-[140px]
          lg:right-[-5%]
          lg:top-[25%]
          lg:h-[600px]
          lg:w-[600px]
          lg:blur-[160px]
        "
      />

      {/* Portrait — full bleed on mobile, composited overlap on desktop */}
      <div
        className="
          hero-portrait
          absolute
          inset-0
          lg:inset-y-[-4%]
          lg:left-[32%]
          lg:right-[-8%]
        "
      >
        <Image
          src="/images/profile.png"
          alt=""
          fill
          priority
          quality={100}
          sizes="(max-width: 1024px) 100vw, 68vw"
          className="
            object-cover
            object-[50%_15%]
            grayscale
            contrast-[1.08]
            brightness-[0.75]
            saturate-0
            lg:object-[42%_18%]
            lg:brightness-[0.82]
          "
        />

        {/* Color grade */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-br
            from-violet-950/30
            via-transparent
            to-[#09090b]/50
            mix-blend-multiply
            lg:from-violet-950/25
            lg:to-[#09090b]/40
          "
        />

        {/* Left feather — dissolves portrait into typography */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-r
            from-[#09090b]
            via-[#09090b]/85
            to-transparent
            lg:via-[#09090b]/60
            lg:[background-size:55%_100%]
            lg:[background-repeat:no-repeat]
          "
        />

        {/* Spotlight */}
        <div
          className="
            absolute inset-0
            bg-[radial-gradient(ellipse_80%_55%_at_60%_25%,rgba(255,255,255,0.05),transparent_60%)]
            lg:bg-[radial-gradient(ellipse_70%_60%_at_72%_28%,rgba(255,255,255,0.06),transparent_65%)]
          "
        />

        {/* Right edge depth */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-l
            from-[#09090b]/60
            via-transparent
            to-transparent
            lg:from-[#09090b]/50
          "
        />

        {/* Mobile: bottom anchor for text legibility */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-t
            from-[#09090b]
            via-[#09090b]/80
            to-transparent
            lg:hidden
          "
        />
      </div>
    </div>
  );
}

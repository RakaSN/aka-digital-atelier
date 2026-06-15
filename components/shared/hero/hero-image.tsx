import Image from "next/image";

export function HeroImage() {
  return (
    <>
      {/* Purple Atmosphere */}
      <div
        className="
        absolute
        right-0
        top-0
        h-[1200px]
        w-[1200px]
        rounded-full
        bg-violet-700/10
        blur-[300px]
      "
      />

      {/* Image */}
      <div
        className="
        absolute
        inset-y-0
        right-0
        w-[62vw]
      "
      >
        <Image
          src="/images/profile.png"
          alt="AKA"
          fill
          priority
          quality={100}
          className="
            object-cover
            object-[40%]
            grayscale
            brightness-90
            contrast-110
            opacity-90
          "
        />

        {/* LEFT BLEND */}
        <div
          className="
          absolute inset-0

          bg-gradient-to-r

          from-[#09090b]
          via-[#09090b]/20
          to-transparent
        "
        />

        {/* TOP VIGNETTE */}
        <div
          className="
          absolute inset-0

          bg-gradient-to-b
          from-black/30
          via-transparent
          to-black/20
        "
        />
      </div>
    </>
  );
}
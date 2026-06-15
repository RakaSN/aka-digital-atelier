export function GridBackground() {
  return (
    <div
      aria-hidden
      className="
        pointer-events-none
        absolute inset-0
        -z-10
        opacity-[0.04]
        [mask-image:radial-gradient(ellipse_80%_70%_at_50%_50%,black,transparent)]
        bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)]
        bg-[size:6rem_6rem]
      "
    />
  );
}

export function HeroButtons() {
  return (
    <div className="mt-16 flex items-center gap-16">

      <button className="group">

        <div className="flex items-center gap-3 text-xl text-zinc-100">

          Explore Projects

          <span className="text-violet-500 transition-all duration-300 group-hover:translate-x-2">
            →
          </span>

        </div>

        <div className="mt-4 h-[2px] w-full bg-violet-600" />

      </button>

      <button className="group">

        <div className="flex items-center gap-3 text-xl text-zinc-300">

          Read Blog

          <span className="transition-all duration-300 group-hover:translate-x-2">
            →
          </span>

        </div>

        <div className="mt-4 h-[1px] w-full bg-zinc-700" />

      </button>

    </div>
  );
}
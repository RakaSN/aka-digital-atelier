export function HeroButtons() {
  return (
    <div className="mt-12 flex flex-col gap-8 sm:mt-14 sm:flex-row sm:items-center sm:gap-14 md:mt-16 md:gap-16">
      <button type="button" className="group text-left">
        <div className="flex items-center gap-3 text-base text-zinc-100 md:text-lg">
          Explore Projects
          <span className="text-violet-500 transition-transform duration-300 group-hover:translate-x-1.5">
            →
          </span>
        </div>
        <div className="mt-3 h-px w-full bg-gradient-to-r from-violet-600 to-violet-600/20" />
      </button>

      <button type="button" className="group text-left">
        <div className="flex items-center gap-3 text-base text-zinc-400 md:text-lg">
          Read Blog
          <span className="transition-transform duration-300 group-hover:translate-x-1.5">
            →
          </span>
        </div>
        <div className="mt-3 h-px w-full bg-zinc-800" />
      </button>
    </div>
  );
}

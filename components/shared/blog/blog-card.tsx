type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
};

type BlogCardProps = {
  post: BlogPost;
};

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article
      className="
        group
        flex
        h-full
        flex-col
        justify-between
        border
        border-zinc-800/80
        bg-zinc-900/20
        p-8
        transition-all
        duration-500
        hover:border-zinc-700/80
        hover:bg-zinc-900/40
        md:p-10
      "
    >
      <div>
        <div className="mb-6 flex items-center justify-between gap-4">
          <span className="text-[10px] uppercase tracking-[0.3em] text-violet-500/80">
            {post.category}
          </span>
          <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-600">
            {post.readTime}
          </span>
        </div>

        <h3
          className="
            text-xl
            font-medium
            leading-snug
            tracking-[-0.02em]
            text-zinc-100
            transition-colors
            group-hover:text-white
            md:text-2xl
          "
        >
          {post.title}
        </h3>

        <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-zinc-500 md:text-base">
          {post.excerpt}
        </p>
      </div>

      <div className="mt-8 flex items-center justify-between border-t border-zinc-800/60 pt-6">
        <time className="text-xs uppercase tracking-[0.15em] text-zinc-600">
          {post.date}
        </time>

        <span
          className="
            text-sm
            text-zinc-400
            transition-all
            duration-300
            group-hover:translate-x-1
            group-hover:text-zinc-100
          "
        >
          Read →
        </span>
      </div>
    </article>
  );
}

export type { BlogPost };

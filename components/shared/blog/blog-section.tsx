import { Container } from "@/components/layout/container";
import {
  FadeIn,
  SectionHeader,
  SectionShell,
  StaggerContainer,
  StaggerItem,
} from "@/components/shared/section";

import { BlogCard, type BlogPost } from "./blog-card";

const posts: BlogPost[] = [
  {
    slug: "code-as-canvas",
    title: "When Code Becomes Canvas",
    excerpt:
      "Exploring the intersection of engineering discipline and creative expression in modern web design.",
    date: "Jun 2026",
    readTime: "6 min",
    category: "Craft",
  },
  {
    slug: "sound-design-emotion",
    title: "Designing Emotion Through Sound",
    excerpt:
      "How cinematic metal and hybrid production techniques shape the emotional architecture of a track.",
    date: "May 2026",
    readTime: "8 min",
    category: "Music",
  },
  {
    slug: "self-hosted-freedom",
    title: "The Freedom of Self-Hosted Systems",
    excerpt:
      "Why Linux infrastructure and self-hosted platforms remain the foundation of digital sovereignty.",
    date: "Apr 2026",
    readTime: "5 min",
    category: "Engineering",
  },
];

export function BlogSection() {
  return (
    <SectionShell id="blog">
      <Container>
        <div className="mb-16 flex flex-col gap-8 md:mb-24 md:flex-row md:items-end md:justify-between">
          <FadeIn>
            <SectionHeader
              label="Journal"
              title="Thoughts from the atelier."
              description="Notes on code, sound, and the craft of building with intention."
            />
          </FadeIn>

          <FadeIn delay={0.1}>
            <a
              href="/blog"
              className="
                inline-flex
                shrink-0
                items-center
                gap-2
                text-sm
                uppercase
                tracking-[0.2em]
                text-zinc-400
                transition-colors
                hover:text-zinc-100
              "
            >
              View all
              <span aria-hidden>→</span>
            </a>
          </FadeIn>
        </div>

        <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {posts.map((post) => (
            <StaggerItem key={post.slug}>
              <a href={`/blog/${post.slug}`} className="block h-full">
                <BlogCard post={post} />
              </a>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </SectionShell>
  );
}

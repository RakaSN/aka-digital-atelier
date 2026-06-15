import { Navbar } from "@/components/layout/navbar";

import { AboutSection } from "@/components/shared/about/about-section";
import { BlogSection } from "@/components/shared/blog/blog-section";
import { ExperienceSection } from "@/components/shared/experience/experience-section";
import { FooterSection } from "@/components/shared/footer/footer-section";
import { HeroSection } from "@/components/shared/hero/hero-section";
import { ManifestoSection } from "@/components/shared/manifesto/manifesto-section";
import { QuoteSection } from "@/components/shared/quote/quote-section";
import { StudioSection } from "@/components/shared/studio/studio-section";
import { WorksSection } from "@/components/shared/works/works-section";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <HeroSection />

        <ManifestoSection />

        <AboutSection />

        <ExperienceSection />

        <WorksSection />

        <StudioSection />

        <BlogSection />

        <QuoteSection />
      </main>

      <FooterSection />
    </>
  );
}

import { Navbar } from "@/components/layout/navbar";

import { HeroSection } from "@/components/shared/hero/hero-section";
import { ManifestoSection } from "@/components/shared/manifesto/manifesto-section";
import { AboutSection } from "@/components/shared/about/about-section";
import { ExperienceSection } from "@/components/shared/experience/experience-section";
import { WorksSection } from "@/components/shared/works/works-section";
import { StudioSection } from "@/components/shared/studio/studio-section";
import {QuoteSection} from "@/components/shared/quote/quote-section";
import  Footer  from "@/components/shared/footer/footer-section";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <HeroSection />

      <ManifestoSection />

      <AboutSection />

      <ExperienceSection />

      <WorksSection />

      <StudioSection />

      <QuoteSection />

      <Footer />
    </>
  );
}
"use client";

import { useState } from "react";
import { PillNav } from "./PillNav";
import { SiteHeader } from "./SiteHeader";
import { Hero } from "./Hero";
import { Marquee } from "./Marquee";
import { AboutSection } from "./AboutSection";
import { FeaturedWork } from "./FeaturedWork";
import { AllPieces } from "./AllPieces";
import { SkillsSection } from "./SkillsSection";
import { ContactSection } from "./ContactSection";
import { SiteFooter } from "./SiteFooter";
import { CaseStudyModal } from "./CaseStudyModal";
import { RevealOnScroll } from "./RevealOnScroll";

export function PortfolioPage() {
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  return (
    <>
      <a
        href="#hero"
        className="sr-only"
        style={{
          position: "absolute",
          left: -9999,
          top: "auto",
          width: 1,
          height: 1,
          overflow: "hidden",
        }}
      >
        Skip to content
      </a>
      <SiteHeader />
      <PillNav />
      <RevealOnScroll />
      <main>
        <Hero onOpenCase={setOpenSlug} />
        <Marquee />
        <AboutSection />
        <FeaturedWork onOpenCase={setOpenSlug} />
        <AllPieces onOpenCase={setOpenSlug} />
        <SkillsSection />
        <ContactSection />
      </main>
      <SiteFooter />
      <CaseStudyModal slug={openSlug} onClose={() => setOpenSlug(null)} />
    </>
  );
}

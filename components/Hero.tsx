"use client";

import { caseStudies, featuredCaseStudies } from "@/lib/case-studies";
import { scrollToId } from "@/lib/scroll";
import type { CaseStudy } from "@/lib/case-studies";

type HeroProps = {
  onOpenCase: (slug: string) => void;
};

const MINI_STATS = [
  {
    num: "12",
    label: "Case studies",
    sub: "End-to-end analyses",
  },
  {
    num: "4",
    label: "Products studied",
    sub: "Razorpay · Slice · Jupiter · CRED",
  },
  { num: "3", label: "Top case studies", sub: "Strategy · Data · GTM" },
];

const HERO_SKILLS = [
  "PRD Writing",
  "Unit Economics",
  "A/B Testing",
  "GTM Strategy",
  "Funnel Analysis",
  "Stakeholder Mgmt",
  "User Research",
  "SQL Basics",
];

export function Hero({ onOpenCase }: HeroProps) {
  const featured: CaseStudy = featuredCaseStudies[2] ?? caseStudies[10];

  return (
    <section id="hero" className="hero" aria-labelledby="hero-title">
      <div className="hero-grain" aria-hidden="true" />
      <div className="hero-mesh" aria-hidden="true" />

      <div className="hero-left">
        <p className="hero-greeting">
          Hi, Siddhita here
          <span className="hero-greeting-dot">.</span>
        </p>

        <h1 id="hero-title" className="hero-title">
          <span className="line l1">
            <span className="word">Product&nbsp;decisions,</span>
          </span>
          <span className="line l2">
            <span className="word italic">built on</span>
          </span>
          <span className="line l3">
            <span className="word">business truth.</span>
          </span>
        </h1>

        <p className="hero-desc">
          I turn ambiguous problems into{" "}
          <strong>clear product decisions</strong>. From writing PRDs and
          running A/B tests to breaking down unit economics and designing GTM
          strategy — I&apos;ve built 12 end-to-end case studies that show{" "}
          <strong>how I think, not just what I know</strong>.
        </p>

        <div className="hero-btns">
          <button
            type="button"
            className="btn-primary"
            onClick={() => scrollToId("work")}
          >
            <span>View my work</span>
            <span className="arr" aria-hidden="true">
              →
            </span>
          </button>
          <button
            type="button"
            className="btn-ghost"
            onClick={() => scrollToId("contact")}
          >
            Get in touch
          </button>
        </div>

        <dl className="hero-stats">
          <div>
            <dt className="hero-stat-lbl">Case studies</dt>
            <dd className="hero-stat-num">12</dd>
          </div>
          <div>
            <dt className="hero-stat-lbl">Products analysed</dt>
            <dd className="hero-stat-num">5+</dd>
          </div>
          <div>
            <dt className="hero-stat-lbl">Based in</dt>
            <dd className="hero-stat-num">Mumbai</dd>
          </div>
        </dl>
      </div>

      <aside className="hero-right" aria-label="Featured case study preview">
        <button
          type="button"
          className="hero-card-main"
          onClick={() => onOpenCase(featured.slug)}
          aria-label={`Open case study: ${featured.title}`}
        >
          <p className="hero-card-label">Featured case study · {featured.category}</p>
          <p className="hero-card-title">&ldquo;{featured.hook}&rdquo;</p>
          <div className="hero-card-meta">
            <span className="hero-card-tag">{featured.title.replace(" Teardown", "")}</span>
            <span className="hero-card-arrow" aria-hidden="true">
              ↗
            </span>
          </div>
        </button>

        <ul className="hero-minis" aria-label="Case study highlights">
          {MINI_STATS.map((stat, idx) => (
            <li
              key={stat.label}
              className="hero-mini"
              style={
                {
                  animationDelay: `${0.7 + idx * 0.07}s`,
                  opacity: 0,
                  animationFillMode: "forwards",
                  animationName: "fadeUp",
                  animationDuration: "0.7s",
                  animationTimingFunction: "var(--ease-out-quart)",
                } as React.CSSProperties
              }
            >
              <div className="hero-mini-num">{stat.num}</div>
              <div className="hero-mini-lbl">{stat.label}</div>
              <div className="hero-mini-sub">{stat.sub}</div>
            </li>
          ))}
        </ul>

        <div className="hero-skill-list">
          <p className="hero-skill-title">Skills demonstrated</p>
          <ul className="hero-skill-items">
            {HERO_SKILLS.map((skill, idx) => (
              <li
                key={skill}
                className="hero-skill"
                style={
                  {
                    animationDelay: `${0.95 + idx * 0.04}s`,
                    opacity: 0,
                    animationFillMode: "forwards",
                    animationName: "fadeUp",
                    animationDuration: "0.55s",
                    animationTimingFunction: "var(--ease-out-quart)",
                  } as React.CSSProperties
                }
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </section>
  );
}

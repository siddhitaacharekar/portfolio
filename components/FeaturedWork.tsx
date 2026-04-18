"use client";

import { featuredCaseStudies } from "@/lib/case-studies";

type Props = {
  onOpenCase: (slug: string) => void;
};

export function FeaturedWork({ onOpenCase }: Props) {
  return (
    <section
      id="work"
      className="section section-alt"
      aria-labelledby="work-title"
    >
      <p className="s-tag">Featured work</p>
      <h2 id="work-title">
        Top 3 <em>Case Studies</em>
      </h2>
      <p className="s-sub">
        Click any card to read the full analysis — hook, finding, and
        strategic recommendation.
      </p>

      <div className="work-grid">
        {featuredCaseStudies.map((cs, idx) => (
          <article
            key={cs.slug}
            className={`work-card reveal ${idx === 1 ? "d1" : idx === 2 ? "d2" : ""}`}
            role="button"
            tabIndex={0}
            onClick={() => onOpenCase(cs.slug)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onOpenCase(cs.slug);
              }
            }}
            aria-label={`Open case study: ${cs.title}`}
          >
            <div className="work-card-bg" aria-hidden="true" />
            <div className="wc-index">
              <span>
                0{idx + 1} / {cs.category}
              </span>
              <span className="wc-arrow" aria-hidden="true">
                ↗
              </span>
            </div>
            <p className="wc-type">Portfolio Piece {cs.number}</p>
            <h3 className="wc-title">{cs.title}</h3>
            <blockquote className="wc-hook">&ldquo;{cs.hook}&rdquo;</blockquote>
            <p className="wc-body">{cs.summary}</p>
            <ul className="wc-tags">
              {cs.tags.slice(0, 4).map((tag) => (
                <li key={tag} className="wc-tag">
                  {tag}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

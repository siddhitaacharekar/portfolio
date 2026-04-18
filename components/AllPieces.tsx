"use client";

import { caseStudies } from "@/lib/case-studies";

type Props = {
  onOpenCase: (slug: string) => void;
};

export function AllPieces({ onOpenCase }: Props) {
  return (
    <section id="all" className="section" aria-labelledby="all-title">
      <p className="s-tag">Complete portfolio</p>
      <h2 id="all-title">
        All <em>12</em> Case Studies
      </h2>
      <div className="pieces-list reveal" role="table" aria-label="All case studies">
        <div className="pl-header" role="row">
          <div className="pl-hcell" role="columnheader">
            #
          </div>
          <div className="pl-hcell" role="columnheader">
            Piece
          </div>
          <div className="pl-hcell" role="columnheader">
            Key Insight
          </div>
          <div className="pl-hcell" role="columnheader">
            Skills
          </div>
        </div>

        {caseStudies.map((cs, idx) => (
          <button
            type="button"
            key={cs.slug}
            className="pl-row"
            onClick={() => onOpenCase(cs.slug)}
            role="row"
            aria-label={`Open case study: ${cs.title}`}
            data-stagger-child
            style={{ "--i": idx } as React.CSSProperties}
          >
            <div className="pl-cell" role="cell">
              <span className="pl-num">
                {cs.number}
                {cs.pinned && <span className="star">★</span>}
              </span>
            </div>
            <div className="pl-cell" role="cell">
              <span className="pl-title">{cs.title}</span>
            </div>
            <div className="pl-cell" role="cell">
              <span className="pl-insight">{cs.insight}</span>
            </div>
            <div className="pl-cell" role="cell">
              <ul className="pl-tags">
                {cs.skills.map((s) => (
                  <li key={s} className="pl-tag">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}

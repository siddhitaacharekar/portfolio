const ITEMS = [
  "Unit Economics",
  "Product Strategy",
  "GTM Design",
  "Funnel Analysis",
  "A/B Testing",
  "PRD Writing",
  "Stakeholder Management",
  "User Research",
];

export function Marquee() {
  return (
    <div className="marquee-wrap" aria-hidden="true">
      <div className="marquee-track">
        {[0, 1].map((i) => (
          <div key={i} className="marquee-item">
            {ITEMS.map((t) => (
              <span key={t + i} style={{ display: "inline-flex", alignItems: "center", gap: 32 }}>
                {t}
                <span className="marquee-dot" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

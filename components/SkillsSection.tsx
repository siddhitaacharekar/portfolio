const SKILL_GROUPS = [
  {
    label: "Core Product",
    items: [
      "Domain Knowledge",
      "Unit Economics",
      "Prioritization",
      "PRD Writing",
      "Product Strategy",
      "GTM Design",
      "Stakeholder Management",
    ],
  },
  {
    label: "Analytics",
    items: [
      "Funnel Analysis",
      "A/B Testing",
      "Metrics Design",
      "North Star",
      "User Research",
    ],
  },
  {
    label: "Technical",
    items: ["Technical Literacy", "APIs & ML Basics", "SQL"],
  },
];

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="section section-alt"
      aria-labelledby="skills-title"
    >
      <div className="skills-head">
        <div>
          <p className="s-tag">Capabilities</p>
          <h2 id="skills-title" style={{ marginBottom: 0 }}>
            What I <em>Bring</em>
          </h2>
        </div>
        <p className="skills-intro">
          Applied across real product case studies over 8 weeks of structured
          learning.
        </p>
      </div>

      <div className="skills-compact reveal">
        {SKILL_GROUPS.map((group, gIdx) => (
          <ul key={group.label} className="sk-group" aria-label={group.label}>
            <li
              className="sk-group-label"
              data-stagger-child
              style={{ "--i": gIdx * 4 } as React.CSSProperties}
            >
              {group.label}
            </li>
            {group.items.map((item, iIdx) => (
              <li
                key={item}
                className="sk-pill"
                data-stagger-child
                style={
                  { "--i": gIdx * 4 + iIdx + 1 } as React.CSSProperties
                }
              >
                {item}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
}

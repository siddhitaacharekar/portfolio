export function AboutSection() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="about-layout">
        <article className="reveal">
          <p className="s-tag">About me</p>
          <p className="about-number" aria-hidden="true">
            01
          </p>
          <h2 id="about-title" className="sr-only" style={{ position: "absolute", left: -9999 }}>
            About Siddhita Acharekar
          </h2>
          <blockquote className="about-quote">
            &ldquo;I don&apos;t just analyse products — I try to understand why
            every decision exists and what it reveals about the business
            beneath it.&rdquo;
          </blockquote>
          <div className="about-body">
            <p>
              I&apos;m a <strong>Product Manager</strong> based in{" "}
              <strong>Mumbai</strong>, focused on product strategy, user
              behaviour, and business model design. My work sits at the
              intersection of user needs, execution, and measurable outcomes.
            </p>
            <p>
              I built 12 portfolio pieces spanning user research, data
              analysis, GTM strategy, unit economics, and technical literacy.
              I&apos;ve examined Razorpay&apos;s MDR concentration risk,
              Slice&apos;s default risk economics, Jupiter&apos;s secondary
              account problem, and CRED&apos;s exclusivity moat — treating
              each as a business problem first, a product problem second.
            </p>
            <p>
              I&apos;m drawn to products where the stakes are real. A poorly
              designed onboarding flow doesn&apos;t just hurt retention — it
              breaks trust. That weight makes the work matter.
            </p>
          </div>
        </article>

        <aside className="reveal d2" aria-label="Profile summary">
          <div className="profile-panel">
            <header className="pp-header">
              <div className="pp-avatar" aria-hidden="true">
                SA
              </div>
              <p className="pp-name">Siddhita Acharekar</p>
              <p className="pp-role">Mumbai · Open to opportunities</p>
            </header>
            <dl className="pp-rows">
              <div className="pp-row">
                <dt className="pp-k">Experience</dt>
                <dd className="pp-v">Flexi Loans · Oct &apos;25 – Present</dd>
              </div>
              <div className="pp-row">
                <dt className="pp-k">Products analysed</dt>
                <dd className="pp-v">Razorpay · Slice · Jupiter · CRED</dd>
              </div>
              <div className="pp-row">
                <dt className="pp-k">Portfolio pieces</dt>
                <dd className="pp-v">12 end-to-end case studies</dd>
              </div>
              <div className="pp-row">
                <dt className="pp-k">Status</dt>
                <dd className="pp-v accent">Actively looking</dd>
              </div>
            </dl>
            <ul className="pp-stats">
              <li className="pp-stat">
                <div className="pp-stat-num">12</div>
                <div className="pp-stat-lbl">Pieces</div>
              </li>
              <li className="pp-stat">
                <div className="pp-stat-num">8w</div>
                <div className="pp-stat-lbl">Study</div>
              </li>
              <li className="pp-stat">
                <div className="pp-stat-num">5+</div>
                <div className="pp-stat-lbl">Products</div>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}

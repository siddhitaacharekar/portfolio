"use client";

import { useEffect, useRef, useState } from "react";
import { caseStudies } from "@/lib/case-studies";
import { siteConfig } from "@/lib/site-config";
import { scrollToId } from "@/lib/scroll";
import { CaseStudyModal } from "./CaseStudyModal";

/* count-up that fires when scrolled into view */
function Counter({ to, decimals = 0 }: { to: number; decimals?: number }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const dur = 1100, start = performance.now();
            const step = (now: number) => {
              const p = Math.min((now - start) / dur, 1);
              const k = 1 - Math.pow(1 - p, 3);
              setVal(k * to);
              if (p < 1) requestAnimationFrame(step);
              else setVal(to);
            };
            requestAnimationFrame(step);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  return <span ref={ref}>{decimals ? val.toFixed(decimals) : Math.round(val)}</span>;
}

function ThemeToggle() {
  const flip = () => {
    const cur = document.documentElement.getAttribute("data-theme");
    const next = cur === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {}
  };
  return (
    <button className="tg" id="tg" aria-label="Toggle theme" onClick={flip}>
      <svg className="ic-sun" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4" />
      </svg>
      <svg className="ic-moon" viewBox="0 0 24 24">
        <path d="M20 14.5A8 8 0 1 1 9.5 4 6.3 6.3 0 0 0 20 14.5z" />
      </svg>
    </button>
  );
}

export function PortfolioPage() {
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [heroOn, setHeroOn] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const id = requestAnimationFrame(() => setHeroOn(true));
    return () => cancelAnimationFrame(id);
  }, []);

  // reveal-on-scroll for .rise elements
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".rise"));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.18 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const nav = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    scrollToId(id);
  };

  return (
    <>
      <a href="#top" className="sr-only">Skip to content</a>

      <nav id="nav" className={scrolled ? "scrolled" : ""}>
        <div className="shell">
          <div className="brand">Siddhita Acharekar<span className="mono"> ·</span></div>
          <div className="nav-r">
            <div className="nav-links">
              <a href="#work" onClick={(e) => nav(e, "work")}>Case studies</a>
              <a href="#about" onClick={(e) => nav(e, "about")}>About</a>
              <a href="#contact" onClick={(e) => nav(e, "contact")}>Contact</a>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      <header className={"hero" + (heroOn ? " on" : "")} id="top">
        <div className="hero-dot" />
        <div className="hero-glow" />
        <div className="shell">
          <span className="eyebrow"><span className="d" />Product · Fintech Lending · Mumbai</span>
          <h1 className="hero-title">
            <span className="hl"><span>Product decisions,</span></span>
            <span className="hl"><span>built on <span className="accent">business truth.</span></span></span>
          </h1>
          <p className="hero-desc">
            Product intern in fintech lending — I shipped automated credit decisioning at{" "}
            <b>Flexi Loans</b>, and I run unit-economics teardowns of the products beneath the
            interface. Work that shows <b>how I think, and what I&rsquo;ve shipped.</b>
          </p>
          <div className="hero-btns">
            <a href="#work" className="btn btn-primary" onClick={(e) => nav(e, "work")}>
              View the work <span className="arr">→</span>
            </a>
            <a href="#contact" className="btn btn-ghost" onClick={(e) => nav(e, "contact")}>
              Get in touch
            </a>
          </div>
        </div>
      </header>

      <section className="block" style={{ paddingTop: "clamp(40px,7vh,70px)" }}>
        <div className="shell">
          <div className="stats rise">
            <div>
              <div className="st-num"><Counter to={40} /><span className="u">%</span></div>
              <div className="st-lbl">Decisions automated</div>
              <div className="st-sub">Flexi Loans · Jarvis</div>
            </div>
            <div>
              <div className="st-num"><Counter to={25} /><span className="u">%</span></div>
              <div className="st-lbl">Faster LOS turnaround</div>
              <div className="st-sub">workflow rework</div>
            </div>
            <div>
              <div className="st-num"><Counter to={8} /></div>
              <div className="st-lbl">Case studies</div>
              <div className="st-sub">1 shipped · 7 analyses</div>
            </div>
            <div>
              <div className="st-num"><Counter to={4} /><span className="u"> live</span></div>
              <div className="st-lbl">Interactive models</div>
              <div className="st-sub">explore the math</div>
            </div>
          </div>
        </div>
      </section>

      <section className="block" id="work">
        <div className="shell">
          <div className="sec-head rise">
            <span className="sec-tag">Case studies</span>
            <h2 className="sec-title">One shipped · seven teardowns</h2>
          </div>
          <div className="feat-grid">
            {caseStudies.map((s) => (
              <article
                key={s.slug}
                className={"feat rise" + (s.risk ? " risk" : "") + (s.model ? " has-model" : "")}
                onClick={() => setOpenSlug(s.slug)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && (e.preventDefault(), setOpenSlug(s.slug))}
              >
                <div>
                  <div className="feat-meta">
                    <span className="chip">{s.category}</span>
                    <span className="feat-no">Case {s.number}</span>
                    {s.shipped && <span className="badge-shipped">shipped to production</span>}
                    {s.model && <span className="row-live">live model</span>}
                  </div>
                  <div className="feat-hook">{s.hook}</div>
                  <div className="feat-sum">{s.sections[1].text}</div>
                </div>
                <div className="feat-stat">
                  {s.model && s.featStat ? (
                    <>
                      <div className="fs-v">{s.featStat[0]}</div>
                      <div className="fs-k">{s.featStat[1]}</div>
                      <div className="fs-go">Open model <span>↗</span></div>
                    </>
                  ) : (
                    <>
                      <div className="fs-lens">{s.category}</div>
                      <div className="fs-go">Read study <span>↗</span></div>
                    </>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="block" id="about">
        <div className="shell">
          <div className="sec-head rise">
            <span className="sec-tag">About</span>
            <h2 className="sec-title">Product, judged by the business beneath it</h2>
          </div>
          <div className="about rise">
            <div className="about-body">
              <p>
                I&rsquo;m a <b>Product Intern at Flexi Loans</b>, working in fintech lending and
                seeking an <b>Associate Product Manager</b> role. I&rsquo;ve owned automated credit
                decisioning, partner onboarding, and Loan Origination System improvements — turning
                manual, hours-long processes into near-instant, automated ones.
              </p>
              <p>
                I pair a <b>strong technical base</b> (B.Sc. IT, 9.28 CGPA) with funnel analysis, KPI
                design, and stakeholder management — translating business needs into shipped
                outcomes. Comfortable getting hands-on with SQL, APIs, and automation, which keeps me
                honest about what&rsquo;s feasible to build versus what just sounds good on a roadmap.
              </p>
              <p>
                Outside of work, I run fintech teardowns — Slice, Razorpay, Jupiter — treating each as
                a <b>business problem first, a product problem second.</b> I&rsquo;m drawn to products
                where the stakes are real: a poorly designed onboarding flow doesn&rsquo;t just hurt
                retention — it breaks trust.
              </p>
            </div>
            <div className="pcard">
              <div className="pcard-h">
                <div className="pc-av">SA</div>
                <div className="pc-name">Siddhita Acharekar</div>
                <div className="pc-role">Mumbai · Seeking APM roles</div>
              </div>
              <div className="prow"><span className="k">Now</span><span className="v">Product Intern · Flexi Loans</span></div>
              <div className="prow"><span className="k">Education</span><span className="v">B.Sc. IT · 9.28 CGPA</span></div>
              <div className="prow"><span className="k">Focus</span><span className="v">Fintech lending · Automation</span></div>
              <div className="prow"><span className="k">Status</span><span className="v ac">Actively looking</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="block" id="contact">
        <div className="shell">
          <div className="cta rise">
            <div className="glow" />
            <div className="cta-t">Let&rsquo;s connect.</div>
            <p className="cta-s">
              Have a product challenge, a role, or a conversation in mind? I&rsquo;d love to hear from you.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", position: "relative" }}>
              <a href={siteConfig.social.gmail} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Email me <span className="arr">→</span>
              </a>
              <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                LinkedIn <span className="arr">↗</span>
              </a>
              <a href={siteConfig.social.twitter} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                Twitter <span className="arr">↗</span>
              </a>
            </div>
            <p className="cta-s" style={{ margin: "22px auto 0", fontFamily: "var(--mono)", fontSize: 13 }}>
              {siteConfig.email}
            </p>
          </div>
          <footer>
            <span>© {new Date().getFullYear()} Siddhita Acharekar · Crafted in Mumbai</span>
            <span style={{ display: "flex", gap: 18 }}>
              <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href={siteConfig.social.twitter} target="_blank" rel="noopener noreferrer">Twitter</a>
              <a href={siteConfig.social.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            </span>
          </footer>
        </div>
      </section>

      <CaseStudyModal slug={openSlug} onClose={() => setOpenSlug(null)} />
    </>
  );
}

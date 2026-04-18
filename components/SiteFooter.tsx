import { siteConfig } from "@/lib/site-config";

const WORK_LINKS = [
  { label: "About", href: "#about" },
  { label: "Featured Work", href: "#work" },
  { label: "All Pieces", href: "#all" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const ELSEWHERE_LINKS = [
  { label: "LinkedIn", href: siteConfig.social.linkedin, external: true },
  { label: "Twitter / X", href: siteConfig.social.twitter, external: true },
  { label: "GitHub", href: siteConfig.social.github, external: true },
  { label: "Email", href: siteConfig.social.email, external: false },
];

const COLOPHON = [
  { label: "Built with Next.js", href: "https://nextjs.org" },
  {
    label: "Typeset in Instrument Serif",
    href: "https://fonts.google.com/specimen/Instrument+Serif",
  },
  { label: "Deployed on Vercel", href: "https://vercel.com" },
];

export function SiteFooter() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-grid">
        <div>
          <p className="footer-brand">
            Siddhita <em>Acharekar</em>
          </p>
          <p className="footer-manifesto">
            Product Manager obsessed with the economics beneath the interface.
            I treat every product as a business problem first — and the
            interface as the place it becomes visible.
          </p>
        </div>
        <div>
          <p className="footer-h">Explore</p>
          <ul className="footer-list">
            {WORK_LINKS.map((l) => (
              <li key={l.label}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="footer-h">Elsewhere</p>
          <ul className="footer-list">
            {ELSEWHERE_LINKS.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  {...(l.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {l.label}
                  {l.external && <span className="external">↗</span>}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="footer-h">Colophon</p>
          <ul className="footer-list">
            {COLOPHON.map((l) => (
              <li key={l.label}>
                <a href={l.href} target="_blank" rel="noopener noreferrer">
                  {l.label}
                  <span className="external">↗</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}. Crafted in{" "}
          <em>Mumbai</em>.
        </p>
        <p>A portfolio that argues for itself.</p>
      </div>
    </footer>
  );
}

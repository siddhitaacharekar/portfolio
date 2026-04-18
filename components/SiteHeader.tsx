"use client";

import { scrollToId } from "@/lib/scroll";

export function SiteHeader() {
  return (
    <header className="site-header" role="banner">
      <button
        type="button"
        className="site-header-logo"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
      >
        Siddhita <em>Acharekar</em>
      </button>
      <nav aria-label="Primary">
        <ul className="site-header-links">
          <li>
            <a onClick={() => scrollToId("about")} tabIndex={0} role="button">
              About
            </a>
          </li>
          <li>
            <a onClick={() => scrollToId("work")} tabIndex={0} role="button">
              Work
            </a>
          </li>
          <li>
            <a onClick={() => scrollToId("skills")} tabIndex={0} role="button">
              Skills
            </a>
          </li>
          <li>
            <a onClick={() => scrollToId("contact")} tabIndex={0} role="button">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <p className="site-header-copy">
        Product Manager · Mumbai · 2026
      </p>
    </header>
  );
}

"use client";

import { useEffect, useState } from "react";
import { scrollToId } from "@/lib/scroll";

const NAV_IDS = ["about", "work", "all", "skills", "contact"] as const;
const NAV_LABELS: Record<(typeof NAV_IDS)[number], string> = {
  about: "About",
  work: "Work",
  all: "All Case Studies",
  skills: "Skills",
  contact: "Contact",
};

export function PillNav() {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => {
      let current = "";
      for (const id of NAV_IDS) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="pill-nav" aria-label="Section navigation">
      <ul className="pill-nav-list">
        {NAV_IDS.map((id) => (
          <li key={id}>
            <button
              type="button"
              className={`pill-nav-link ${active === id ? "active" : ""}`}
              onClick={() => scrollToId(id)}
              aria-current={active === id ? "true" : undefined}
            >
              {NAV_LABELS[id]}
            </button>
          </li>
        ))}
      </ul>
      <div className="pill-nav-sep" aria-hidden="true" />
      <div className="pill-nav-right">
        <button
          type="button"
          className="nav-cta"
          onClick={() => scrollToId("contact")}
        >
          <span>Get in Touch</span>
        </button>
      </div>
    </nav>
  );
}

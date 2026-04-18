"use client";

import { useEffect, useState } from "react";
import { useTheme } from "./ThemeProvider";
import { scrollToId } from "@/lib/scroll";

const NAV_IDS = ["about", "work", "all", "skills", "contact"] as const;
const NAV_LABELS: Record<(typeof NAV_IDS)[number], string> = {
  about: "About",
  work: "Work",
  all: "All Pieces",
  skills: "Skills",
  contact: "Contact",
};

function MoonIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  );
}

export function PillNav() {
  const [active, setActive] = useState<string>("");
  const { theme, toggleTheme } = useTheme();

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
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          title="Toggle theme"
        >
          {theme === "dark" ? <SunIcon /> : <MoonIcon />}
        </button>
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

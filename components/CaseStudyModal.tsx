"use client";

import { useEffect, useRef } from "react";
import { getCaseStudyBySlug } from "@/lib/case-studies";

type Props = {
  slug: string | null;
  onClose: () => void;
};

export function CaseStudyModal({ slug, onClose }: Props) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const study = slug ? getCaseStudyBySlug(slug) : null;

  useEffect(() => {
    if (!study) return;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [study, onClose]);

  if (!study) return null;

  return (
    <div
      className="modal-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <article className="modal">
        <header className="modal-header">
          <button
            ref={closeRef}
            type="button"
            className="modal-close"
            onClick={onClose}
            aria-label="Close case study"
          >
            ✕
          </button>
          <p className="modal-type">{study.type}</p>
          <h2 id="modal-title" className="modal-title">
            {study.title}
          </h2>
        </header>
        <div className="modal-body">
          <blockquote className="modal-hook">
            &ldquo;{study.hook}&rdquo;
          </blockquote>
          {study.sections.map((section) => (
            <section key={section.label} className="modal-section">
              <p className="modal-stitle">{section.label}</p>
              <p className="modal-stext">{section.text}</p>
            </section>
          ))}
          <ul className="modal-tags">
            {study.tags.map((tag) => (
              <li key={tag} className="modal-tag">
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </article>
    </div>
  );
}

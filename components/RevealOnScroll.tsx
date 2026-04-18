"use client";

import { useEffect } from "react";

export function RevealOnScroll() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("in");
        });
      },
      { threshold: 0.08 }
    );

    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}

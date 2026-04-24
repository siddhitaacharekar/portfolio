"use client";
import { caseStudies } from "@/lib/case-studies";
import { useState } from "react";

type Props = {
  onOpenCase: (slug: string) => void;
};

// Unique accent color + mini visual config per case study slug
const csConfig: Record<string, {
  accent: string;
  bg: string;
  icon: React.ReactNode;
  stat: string;
  statLabel: string;
}> = {
  "snapchat-user-journey": {
    accent: "#FFFC00",
    bg: "linear-gradient(135deg, #1a1a00 0%, #111 100%)",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="48" height="48">
        <path d="M8 36 Q24 8 40 36" stroke="#FFFC00" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <circle cx="16" cy="30" r="3" fill="#FFFC00" opacity="0.6"/>
        <circle cx="24" cy="20" r="4" fill="#FFFC00" opacity="0.8"/>
        <circle cx="32" cy="28" r="3" fill="#FFFC00" opacity="0.5"/>
      </svg>
    ),
    stat: "85%",
    statLabel: "felt judgement anxiety",
  },
  "prd-snapchat-gallery": {
    accent: "#00C8FF",
    bg: "linear-gradient(135deg, #001a22 0%, #0a0a0a 100%)",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="48" height="48">
        <rect x="8" y="8" width="32" height="8" rx="2" fill="#00C8FF" opacity="0.8"/>
        <rect x="8" y="22" width="22" height="6" rx="2" fill="#00C8FF" opacity="0.5"/>
        <rect x="8" y="34" width="14" height="6" rx="2" fill="#00C8FF" opacity="0.3"/>
        <line x1="38" y1="28" x2="38" y2="40" stroke="#00C8FF" strokeWidth="1.5" strokeDasharray="2 2"/>
      </svg>
    ),
    stat: "3",
    statLabel: "sprint cycles saved",
  },
  "cred-teardown": {
    accent: "#C8A96E",
    bg: "linear-gradient(135deg, #1a1200 0%, #0d0d0d 100%)",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="48" height="48">
        <circle cx="24" cy="24" r="16" stroke="#C8A96E" strokeWidth="1" strokeDasharray="3 2"/>
        <circle cx="24" cy="24" r="10" stroke="#C8A96E" strokeWidth="1.5" opacity="0.7"/>
        <circle cx="24" cy="24" r="4" fill="#C8A96E"/>
      </svg>
    ),
    stat: "750+",
    statLabel: "score to enter",
  },
  "mixpanel-funnel": {
    accent: "#7C3AED",
    bg: "linear-gradient(135deg, #0d0014 0%, #0a0a0a 100%)",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="48" height="48">
        {[["8","100","40"],["10","82","32"],["14","33","20"],["18","28","16"],["22","24","12"]].map(([x,_,w],i)=>(
          <rect key={i} x={x} y={8+i*7} width={w} height="5" rx="1.5" fill="#7C3AED" opacity={1-i*0.15}/>
        ))}
      </svg>
    ),
    stat: "67%",
    statLabel: "drop at feature discovery",
  },
  "ab-test-bank": {
    accent: "#10B981",
    bg: "linear-gradient(135deg, #001a0d 0%, #0a0a0a 100%)",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="48" height="48">
        <rect x="6" y="18" width="16" height="20" rx="3" fill="#10B981" opacity="0.3" stroke="#10B981" strokeWidth="1"/>
        <rect x="26" y="12" width="16" height="26" rx="3" fill="#10B981" opacity="0.7" stroke="#10B981" strokeWidth="1"/>
        <text x="14" y="32" textAnchor="middle" fontSize="9" fill="#10B981" fontFamily="monospace">A</text>
        <text x="34" y="29" textAnchor="middle" fontSize="9" fill="#10B981" fontFamily="monospace">B</text>
      </svg>
    ),
    stat: "+11%",
    statLabel: "bank link lift",
  },
  "fintech-onboarding": {
    accent: "#F43F5E",
    bg: "linear-gradient(135deg, #1a0008 0%, #0d0d0d 100%)",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="48" height="48">
        {[100,94,87,35,28,15].map((v,i)=>(
          <rect key={i} x={6+i*6} y={40-v*0.32} width="5" height={v*0.32} rx="1" fill={v<40?"#F43F5E":"#10B981"} opacity={0.8}/>
        ))}
        <line x1="6" y1="40" x2="42" y2="40" stroke="#F43F5E" strokeWidth="0.5" opacity="0.4"/>
      </svg>
    ),
    stat: "85%",
    statLabel: "abandoned before txn",
  },
  "metrics-doc": {
    accent: "#F59E0B",
    bg: "linear-gradient(135deg, #1a1000 0%, #0d0d0d 100%)",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="48" height="48">
        <circle cx="24" cy="20" r="8" stroke="#F59E0B" strokeWidth="1.5"/>
        <circle cx="12" cy="34" r="5" stroke="#F59E0B" strokeWidth="1" opacity="0.6" strokeDasharray="2 1"/>
        <circle cx="36" cy="34" r="5" stroke="#F59E0B" strokeWidth="1" opacity="0.6" strokeDasharray="2 1"/>
        <line x1="24" y1="28" x2="12" y2="29" stroke="#F59E0B" strokeWidth="0.5" opacity="0.5"/>
        <line x1="24" y1="28" x2="36" y2="29" stroke="#F59E0B" strokeWidth="0.5" opacity="0.5"/>
      </svg>
    ),
    stat: "3×",
    statLabel: "fraud spike without guardrail",
  },
  "slice-circles": {
    accent: "#6366F1",
    bg: "linear-gradient(135deg, #08001a 0%, #0d0d0d 100%)",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="48" height="48">
        {[-1,0,1,2,3,4,5,6].map((d,i)=>{
          const margin = 3.2 - d*0.64;
          const h = Math.abs(margin)*5;
          const y = margin>=0 ? 24-h : 24;
          return <rect key={i} x={4+i*5} y={y} width="4" height={h} rx="1" fill={margin>=0?"#6366F1":"#F43F5E"} opacity="0.8"/>
        })}
        <line x1="4" y1="24" x2="44" y2="24" stroke="#6366F1" strokeWidth="0.5" opacity="0.4"/>
      </svg>
    ),
    stat: "5M",
    statLabel: "users to break even",
  },
  "jupiter-circles": {
    accent: "#0EA5E9",
    bg: "linear-gradient(135deg, #00101a 0%, #0d0d0d 100%)",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="48" height="48">
        <circle cx="24" cy="24" r="16" fill="none" stroke="#0EA5E9" strokeWidth="1" opacity="0.3"/>
        <path d="M24 8 A16 16 0 0 1 38 30 L24 24 Z" fill="#0EA5E9" opacity="0.25"/>
        <path d="M38 30 A16 16 0 1 1 24 8 L24 24 Z" fill="#0EA5E9" opacity="0.08"/>
        <text x="30" y="20" fontSize="7" fill="#0EA5E9" fontFamily="monospace">15%</text>
        <text x="10" y="32" fontSize="7" fill="#0EA5E9" fontFamily="monospace" opacity="0.5">85%</text>
      </svg>
    ),
    stat: "15%",
    statLabel: "Jupiter wallet share",
  },
  "razorpay-unit-economics": {
    accent: "#22D3EE",
    bg: "linear-gradient(135deg, #001a1a 0%, #0d0d0d 100%)",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="48" height="48">
        <rect x="6" y="10" width="36" height="10" rx="2" fill="#22D3EE" opacity="0.8"/>
        <rect x="6" y="10" width="13" height="10" rx="2" fill="#F43F5E" opacity="0.9"/>
        <rect x="6" y="26" width="24" height="8" rx="2" fill="#22D3EE" opacity="0.4"/>
        <text x="3" y="44" fontSize="7" fill="#22D3EE" fontFamily="monospace" opacity="0.7">concentration risk</text>
      </svg>
    ),
    stat: "34%",
    statLabel: "GMV from top 10",
  },
  "slice-unit-economics": {
    accent: "#FB7185",
    bg: "linear-gradient(135deg, #1a0005 0%, #0d0d0d 100%)",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="48" height="48">
        {[1,2,3,4,5,6,7].map((d,i)=>{
          const ltv = 38 - i*5;
          const y = 40 - ltv;
          const col = d<=3?"#10B981":d<=5?"#F59E0B":"#FB7185";
          return <rect key={i} x={3+i*6} y={y} width="5" height={ltv} rx="1" fill={col} opacity="0.85"/>
        })}
        <line x1="3" y1="40" x2="45" y2="40" stroke="#FB7185" strokeWidth="0.5" opacity="0.4"/>
        <line x1="33" y1="8" x2="33" y2="40" stroke="#FB7185" strokeWidth="0.5" strokeDasharray="2 1"/>
      </svg>
    ),
    stat: "5%",
    statLabel: "default wipes all margin",
  },
  "business-model-map": {
    accent: "#A78BFA",
    bg: "linear-gradient(135deg, #0d0014 0%, #0a0a0a 100%)",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="48" height="48">
        <line x1="24" y1="6" x2="24" y2="42" stroke="#A78BFA" strokeWidth="0.5" opacity="0.4"/>
        <line x1="6" y1="24" x2="42" y2="24" stroke="#A78BFA" strokeWidth="0.5" opacity="0.4"/>
        <circle cx="14" cy="18" r="3" fill="#A78BFA" opacity="0.7"/>
        <circle cx="32" cy="14" r="3" fill="#A78BFA" opacity="0.5"/>
        <circle cx="14" cy="32" r="3" fill="#A78BFA" opacity="0.4"/>
        <circle cx="34" cy="32" r="4" fill="#A78BFA" opacity="0.9"/>
        <text x="38" y="38" fontSize="6" fill="#A78BFA" fontFamily="monospace">casino</text>
        <text x="4" y="16" fontSize="6" fill="#A78BFA" fontFamily="monospace">toll</text>
      </svg>
    ),
    stat: "5",
    statLabel: "products mapped",
  },
};

// Fallback config
const defaultConfig = {
  accent: "#888",
  bg: "linear-gradient(135deg, #111 0%, #0a0a0a 100%)",
  icon: null,
  stat: "—",
  statLabel: "",
};

export function AllPieces({ onOpenCase }: Props) {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="all" className="section" aria-labelledby="all-title">
      <p className="s-tag">Complete portfolio</p>
      <h2 id="all-title">
        All <em>12</em> Case Studies
      </h2>

      <div
        className="ap-grid reveal"
        role="list"
        aria-label="All case studies"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "1px",
          background: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(255,255,255,0.06)",
          borderRadius: "16px",
          overflow: "hidden",
        }}
      >
        {caseStudies.map((cs, idx) => {
          const cfg = csConfig[cs.slug] ?? defaultConfig;
          const isHovered = hovered === cs.slug;

          return (
            <button
              type="button"
              key={cs.slug}
              role="listitem"
              aria-label={`Open case study: ${cs.title}`}
              data-stagger-child
              style={
                {
                  "--i": idx,
                  "--accent": cfg.accent,
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0",
                  padding: "0",
                  background: isHovered ? cfg.bg : "transparent",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                  transition: "background 0.35s ease",
                  overflow: "hidden",
                } as React.CSSProperties
              }
              onClick={() => onOpenCase(cs.slug)}
              onMouseEnter={() => setHovered(cs.slug)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Accent line top */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "2px",
                  background: cfg.accent,
                  opacity: isHovered ? 1 : 0,
                  transition: "opacity 0.3s ease",
                }}
              />

              {/* Card content */}
              <div style={{ padding: "20px 22px 16px", flex: 1 }}>
                {/* Top row: number + icon */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: "14px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span
                      style={{
                        fontFamily: "var(--font-mono, monospace)",
                        fontSize: "11px",
                        color: cfg.accent,
                        opacity: 0.9,
                        letterSpacing: "0.08em",
                      }}
                    >
                      {cs.number}
                    </span>
                    {cs.pinned && (
                      <span
                        style={{
                          fontSize: "9px",
                          background: cfg.accent,
                          color: "#000",
                          padding: "1px 6px",
                          borderRadius: "20px",
                          fontWeight: 600,
                          letterSpacing: "0.04em",
                        }}
                      >
                        FEATURED
                      </span>
                    )}
                  </div>

                  {/* Mini SVG visual */}
                  <div
                    style={{
                      opacity: isHovered ? 1 : 0.35,
                      transform: isHovered ? "scale(1.1)" : "scale(1)",
                      transition: "opacity 0.3s, transform 0.3s",
                    }}
                  >
                    {cfg.icon}
                  </div>
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontSize: "15px",
                    fontWeight: 500,
                    lineHeight: 1.35,
                    color: isHovered ? "#fff" : "var(--color-text, #e5e5e5)",
                    marginBottom: "8px",
                    transition: "color 0.3s",
                  }}
                >
                  {cs.title}
                </h3>

                {/* Insight */}
                <p
                  style={{
                    fontSize: "12px",
                    lineHeight: 1.6,
                    color: isHovered
                      ? "rgba(255,255,255,0.65)"
                      : "rgba(255,255,255,0.35)",
                    marginBottom: "16px",
                    transition: "color 0.3s",
                  }}
                >
                  {cs.insight}
                </p>

                {/* Stat pill */}
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "baseline",
                    gap: "6px",
                    background: isHovered
                      ? `${cfg.accent}18`
                      : "rgba(255,255,255,0.04)",
                    border: `1px solid ${isHovered ? cfg.accent + "40" : "rgba(255,255,255,0.08)"}`,
                    borderRadius: "8px",
                    padding: "6px 12px",
                    marginBottom: "14px",
                    transition: "all 0.3s",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono, monospace)",
                      fontSize: "16px",
                      fontWeight: 600,
                      color: cfg.accent,
                      lineHeight: 1,
                    }}
                  >
                    {cfg.stat}
                  </span>
                  <span
                    style={{
                      fontSize: "10px",
                      color: "rgba(255,255,255,0.4)",
                      letterSpacing: "0.02em",
                    }}
                  >
                    {cfg.statLabel}
                  </span>
                </div>
              </div>

              {/* Footer: tags + arrow */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "10px 22px 14px",
                  borderTop: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                <div style={{ display: "flex", gap: "5px", flexWrap: "wrap" }}>
                  {cs.skills.slice(0, 2).map((s) => (
                    <span
                      key={s}
                      style={{
                        fontSize: "10px",
                        padding: "2px 8px",
                        borderRadius: "20px",
                        border: "1px solid rgba(255,255,255,0.12)",
                        color: "rgba(255,255,255,0.45)",
                        letterSpacing: "0.02em",
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <span
                  style={{
                    fontSize: "16px",
                    color: cfg.accent,
                    opacity: isHovered ? 1 : 0.3,
                    transform: isHovered ? "translate(2px, -2px)" : "translate(0,0)",
                    transition: "all 0.25s",
                    display: "inline-block",
                  }}
                >
                  ↗
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}

"use client";

import { useEffect, useState } from "react";
import { getCaseStudy } from "@/lib/case-studies";

const inr = (n: number) => n.toLocaleString("en-IN");

/* ---------------- Slice: break-even default ---------------- */
function SliceModel() {
  const [dr, setDr] = useState(2);
  const REV = 87500, LOSS = 17500, U = 100, W = 320, H = 140, P = 6;
  const at = (d: number) => REV - U * (d / 100) * LOSS;
  const N0 = at(0), N10 = at(10);
  const yF = (v: number) => H - P - ((v - N10) / (N0 - N10)) * (H - 2 * P);
  const xF = (d: number) => P + (d / 10) * (W - 2 * P);
  const z = yF(0), be = xF(5);
  const v = at(dr), pos = v >= 0;
  const verdict =
    Math.abs(v) < 1500 ? "Break-even — MDR exactly covers losses"
    : pos ? "Profitable — MDR covers losses"
    : "Loss-making — defaults exceed MDR";
  return (
    <div className="model">
      <div className="model-top">
        <div className="model-title">Slice unit economics — live model</div>
        <span className="model-badge">interactive</span>
      </div>
      <div className="model-sub">Net contribution per 100 users / year</div>
      <div className={"readout-v " + (pos ? "pos" : "neg")}>
        {(v < 0 ? "−₹" : "+₹") + inr(Math.abs(Math.round(v)))}
      </div>
      <div className={"verdict " + (pos ? "pos" : "neg")}>{verdict}</div>
      <div className="chart-wrap">
        <svg className="chart" viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none">
          <defs>
            <linearGradient id="gp" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#10b981" stopOpacity=".35" />
              <stop offset="1" stopColor="#10b981" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="gn" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#f43f5e" stopOpacity="0" />
              <stop offset="1" stopColor="#f43f5e" stopOpacity=".35" />
            </linearGradient>
          </defs>
          <path d={`M${xF(0)},${z} L${xF(0)},${yF(N0)} L${be},${z} Z`} fill="url(#gp)" />
          <path d={`M${be},${z} L${xF(10)},${yF(N10)} L${xF(10)},${z} Z`} fill="url(#gn)" />
          <line x1={P} y1={z} x2={W - P} y2={z} stroke="rgba(255,255,255,.18)" strokeDasharray="2 3" />
          <line x1={be} y1={P} x2={be} y2={H - P} stroke="rgba(255,255,255,.22)" strokeDasharray="3 3" />
          <text className="be-lbl" x={be + 5} y={P + 11}>5%</text>
          <line x1={xF(0)} y1={yF(N0)} x2={xF(10)} y2={yF(N10)} stroke="#fff" strokeWidth="2" strokeLinecap="round" />
          <circle cx={xF(dr)} cy={yF(v)} r="5" fill={pos ? "#10b981" : "#f43f5e"} stroke="#0c1322" strokeWidth="2" />
        </svg>
      </div>
      <div className="sld-head"><span>Default rate</span><b>{dr.toFixed(1)}%</b></div>
      <input type="range" min={0} max={10} step={0.1} value={dr}
        onChange={(e) => setDr(+e.target.value)}
        style={{ background: "linear-gradient(90deg,#10b981 0,#10b981 50%,#f43f5e 50%,#f43f5e 100%)" }} />
      <div className="ticks"><span>0%</span><span>break-even 5%</span><span>10%</span></div>
      <div className="assump">
        <div className="ass"><div className="ass-k">Spend/user</div><div className="ass-v">₹50,000</div></div>
        <div className="ass"><div className="ass-k">MDR</div><div className="ass-v">1.75%</div></div>
        <div className="ass"><div className="ass-k">MDR rev/user</div><div className="ass-v">₹875</div></div>
        <div className="ass"><div className="ass-k">Loss/default</div><div className="ass-v">₹17,500</div></div>
        <div className="ass-note">modeled estimates — drag to test sensitivity</div>
      </div>
    </div>
  );
}

/* ---------------- Razorpay: concentration ---------------- */
function RazorpayModel() {
  const [n, setN] = useState(0);
  const W = 320, per = 3.8;
  const risk = Math.min(n * per, 38);
  const bad = risk >= 10, warn = risk >= 5;
  const rw = (risk / 100) * W;
  const verdict = bad ? "Structural exposure — >10% revenue at risk"
    : warn ? "Watch — material single-quarter exposure"
    : "Resilient — minimal exposure";
  return (
    <div className="model">
      <div className="model-top">
        <div className="model-title">Razorpay concentration — live model</div>
        <span className="model-badge">interactive</span>
      </div>
      <div className="model-sub">Gateway revenue at risk if top merchants churn</div>
      <div className={"readout-v " + (bad ? "neg" : "pos")}>{risk.toFixed(1)}%</div>
      <div className={"verdict " + (bad ? "neg" : "pos")}>{verdict}</div>
      <div className="chart-wrap">
        <svg className="chart" viewBox={`0 0 ${W} 54`} preserveAspectRatio="none">
          <rect x="0" y="14" width={W} height="26" rx="6" fill="#1f2a40" />
          <rect x="0" y="14" width={W - rw} height="26" rx="6" fill="#10b981" opacity=".55" />
          <rect x={W - rw} y="14" width={rw} height="26" fill="#f43f5e" />
          <text x="6" y="9" className="be-lbl" fill="#8896ab">safe revenue</text>
          <text x={W - 6} y="9" className="be-lbl" fill="#fb5d7a" textAnchor="end">at risk</text>
        </svg>
      </div>
      <div className="sld-head"><span>Top merchants lost</span><b>{n}</b></div>
      <input type="range" min={0} max={10} step={1} value={n}
        onChange={(e) => setN(+e.target.value)}
        style={{ background: "linear-gradient(90deg,#10b981 0,#f43f5e 100%)" }} />
      <div className="ticks"><span>0</span><span>5</span><span>10</span></div>
      <div className="assump">
        <div className="ass"><div className="ass-k">Top-10 share of TPV</div><div className="ass-v">~38%</div></div>
        <div className="ass"><div className="ass-k">Avg / top merchant</div><div className="ass-v">~3.8%</div></div>
        <div className="ass-note">modeled estimate — concentration = fragility</div>
      </div>
    </div>
  );
}

/* ---------------- Jupiter: share of wallet ---------------- */
function JupiterModel() {
  const [sow, setSow] = useState(15);
  const W = 320, ARPU = 2400;
  const rev = Math.round(ARPU * (sow / 100));
  const primary = sow >= 60, ok = sow >= 30;
  const jw = (sow / 100) * W;
  const verdict = primary ? "Primary relationship — full monetisation"
    : ok ? "Transitioning — rising share of wallet"
    : "Secondary-app trap — low monetisation";
  return (
    <div className="model">
      <div className="model-top">
        <div className="model-title">Jupiter share-of-wallet — live model</div>
        <span className="model-badge">interactive</span>
      </div>
      <div className="model-sub">Revenue per user scales with primary-relationship share</div>
      <div className={"readout-v " + (ok ? "pos" : "neg")}>₹{inr(rev)}</div>
      <div className={"verdict " + (ok ? "pos" : "neg")}>{verdict}</div>
      <div className="chart-wrap">
        <svg className="chart" viewBox={`0 0 ${W} 54`} preserveAspectRatio="none">
          <rect x="0" y="14" width={W} height="26" rx="6" fill="#1f2a40" />
          <rect x="0" y="14" width={jw} height="26" rx="6" fill="#10b981" opacity=".7" />
          <text x="6" y="9" className="be-lbl" fill="#34d399">Jupiter</text>
          <text x={W - 6} y="9" className="be-lbl" fill="#8896ab" textAnchor="end">other banks</text>
        </svg>
      </div>
      <div className="sld-head"><span>Share of wallet</span><b>{sow}%</b></div>
      <input type="range" min={5} max={100} step={1} value={sow}
        onChange={(e) => setSow(+e.target.value)}
        style={{ background: "linear-gradient(90deg,#f43f5e 0,#10b981 100%)" }} />
      <div className="ticks"><span>5%</span><span>primary at 60%</span><span>100%</span></div>
      <div className="assump">
        <div className="ass"><div className="ass-k">Full-relationship ARPU</div><div className="ass-v">₹2,400/yr</div></div>
        <div className="ass"><div className="ass-k">Today (secondary)</div><div className="ass-v">~15%</div></div>
        <div className="ass-note">modeled estimate — SoW, not DAU, drives revenue</div>
      </div>
    </div>
  );
}

/* ---------------- Flexi: policy-bucket flow ---------------- */
type Sample = {
  id: string; chip: string; app: string; bucket: string;
  checks: [string, 0 | 1][]; decision: ["approve" | "reject" | "review", string, string];
};
const SAMPLES: Sample[] = [
  { id: "a", chip: "Salaried · ₹2L · clean bureau", app: "Salaried · ₹2,00,000 · clean credit history", bucket: "Bucket A — Salaried, ≤ ₹5L",
    checks: [["Bureau score ≥ 720", 1], ["Income ≥ bucket minimum", 1], ["Existing obligations within limit", 1], ["KYC & documents complete", 1], ["Amount within bucket cap", 1]],
    decision: ["approve", "Auto-approved", "instant"] },
  { id: "b", chip: "Self-employed · ₹12L · thin file", app: "Self-employed · ₹12,00,000 · limited credit file", bucket: "Bucket C — Self-employed, high ticket",
    checks: [["Bureau score ≥ 740", 0], ["Income documents verified", 1], ["Existing obligations within limit", 1], ["KYC & documents complete", 1], ["Amount within bucket cap", 1]],
    decision: ["review", "Routed to manual review", "ambiguous"] },
  { id: "c", chip: "Salaried · ₹3L · recent default", app: "Salaried · ₹3,00,000 · recent default on record", bucket: "Bucket A — Salaried, ≤ ₹5L",
    checks: [["No active default flag", 0], ["Bureau score ≥ 720", 0], ["Income ≥ bucket minimum", 1], ["KYC & documents complete", 1], ["Amount within bucket cap", 1]],
    decision: ["reject", "Auto-rejected", "policy breach"] },
];

function FlexiModel() {
  const [sel, setSel] = useState(0);
  const [revealed, setRevealed] = useState(0);
  const [showDecision, setShowDecision] = useState(false);
  const s = SAMPLES[sel];

  useEffect(() => {
    setRevealed(0);
    setShowDecision(false);
    const timers: ReturnType<typeof setTimeout>[] = [];
    s.checks.forEach((_, i) => {
      timers.push(setTimeout(() => setRevealed((r) => Math.max(r, i + 1)), 240 * (i + 1)));
    });
    timers.push(setTimeout(() => setShowDecision(true), 240 * (s.checks.length + 1) + 140));
    return () => timers.forEach(clearTimeout);
  }, [sel, s.checks]);

  return (
    <div className="model">
      <div className="model-top">
        <div className="model-title">Policy-bucket decisioning — how it works</div>
        <span className="model-badge">interactive</span>
      </div>
      <div className="model-sub">Pick an application — watch it route to a bucket, clear its policy checks, and get an instant decision</div>
      <div className="bk-apps">
        {SAMPLES.map((x, i) => (
          <button key={x.id} className={"bk-app-chip" + (i === sel ? " active" : "")} onClick={() => setSel(i)}>
            {x.chip}
          </button>
        ))}
      </div>
      <div className="bk-flow">
        <div className="bk-stage"><div className="bk-stage-k">Application</div><div className="bk-app">{s.app}</div></div>
        <div className="bk-arrow">→</div>
        <div className="bk-stage"><div className="bk-stage-k">Routed to bucket</div><div className="bk-bucket">{s.bucket}</div></div>
      </div>
      <div className="bk-checks">
        {s.checks.map((c, i) => {
          const shown = i < revealed;
          const pass = c[1] === 1;
          return (
            <div key={i} className={"bk-check" + (shown ? " show " + (pass ? "pass" : "fail") : "")}>
              <span className="bk-ic">{shown ? (pass ? "✓" : "✗") : "·"}</span>
              <span className="bk-lbl">{c[0]}</span>
            </div>
          );
        })}
      </div>
      <div className={"bk-decision " + s.decision[0] + (showDecision ? " show" : "")}>
        {showDecision && (<><span>{s.decision[1]}</span><span className="bk-dtag">{s.decision[2]}</span></>)}
      </div>
      <div className="ass-note" style={{ marginTop: 14 }}>
        illustrative of the decision flow — policy values are examples, not Flexi&rsquo;s actual thresholds
      </div>
    </div>
  );
}

function Model({ kind }: { kind: string }) {
  if (kind === "slice") return <SliceModel />;
  if (kind === "razorpay") return <RazorpayModel />;
  if (kind === "jupiter") return <JupiterModel />;
  if (kind === "flexi") return <FlexiModel />;
  return null;
}

/* ---------------- Modal shell ---------------- */
export function CaseStudyModal({
  slug,
  onClose,
}: {
  slug: string | null;
  onClose: () => void;
}) {
  const study = slug ? getCaseStudy(slug) : undefined;

  useEffect(() => {
    if (!slug) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [slug, onClose]);

  const rk = study?.risk ? " risk" : "";

  return (
    <div className={"overlay" + (slug ? " open" : "")} onClick={onClose}>
      {study && (
        <div className="modal" role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
          <div className="m-head">
            <div className="m-crumb">
              Case {study.number} <span style={{ opacity: 0.5 }}>/</span> {study.category}{" "}
              <span style={{ opacity: 0.5 }}>/</span> <b>{study.title.split(" ")[0]}</b>
            </div>
            <button className="m-x" aria-label="Close" onClick={onClose}>✕</button>
          </div>
          <div className="m-body">
            <span className={"m-chip" + rk}>{study.category}</span>
            {study.shipped && (
              <span className="badge-shipped" style={{ marginLeft: 8 }}>shipped to production</span>
            )}
            <div className="m-title">{study.title}</div>
            <div className={"m-hook" + rk}>{study.hook}</div>
            {study.model && <Model kind={study.model} />}
            {study.sections.map((sec, i) => (
              <div className="m-sec" key={i}>
                <h5>{sec.label}</h5>
                <p>{sec.text}</p>
              </div>
            ))}
            <div className="m-tags">
              {study.tags.map((t) => (
                <span className="m-tag" key={t}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

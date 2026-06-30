/* eslint-disable */
// @ts-nocheck
"use client";
import { useEffect, useRef } from "react";
import { siteConfig } from "@/lib/site-config";

type Study = { no: string; cat: string; title: string; hook: string; sections: string[][]; tags: string[]; shipped?: number; model?: string };

const SKILLS: string[] = ['Product Management','Product Strategy','PRD Writing','Prioritization','GTM','Roadmapping','Stakeholder Management','Unit Economics','Funnel Analysis','A/B Testing','KPI Design','User Research','SQL','APIs','Data Analysis','Credit Risk','Automation','Fintech Lending'];

const STUDIES: Study[] = [
 {no:'01',cat:'Automation',shipped:1,model:'flexi',title:'Automated Credit Decisioning — Flexi Loans',hook:"The hard part of automating credit decisions isn't the model — it's turning scattered, case-by-case judgement into rules a machine can be trusted with.",sections:[['Context','Jarvis, Flexi Loans’ in-house lending platform, already existed — but every loan was approved manually against policies that lived in different places. As volume grew, that case-by-case review became slow, inconsistent, and a bottleneck.'],['What I built','I created policy “buckets” keyed to loan requirements — each defining exactly which policies an application must satisfy — and brought scattered rules into one place. Jarvis could then auto-approve or auto-reject against the right bucket instead of sending every case to a human.'],['The hard part','The judgement was in the bucketing: how to segment loans, which policies each bucket must satisfy, and getting it complete enough that credit and risk teams would trust it. Auto-approving a bad loan and auto-rejecting a good customer are both costly — so ambiguous cases still route to a human.'],['Impact','~40% of decisions now run automatically, cutting decision time from hours to near-instant and applying policy consistently — alongside LOS workflow changes that cut overall turnaround ~25%.']],tags:['Automation','Policy Design','Credit Decisioning','Stakeholder Mgmt']},
 {no:'02',cat:'Unit Economics',model:'slice',title:'Slice Unit Economics Teardown',hook:"Most people think Slice is a payments company — but it's actually a credit-risk company disguised as fintech.",sections:[['Context','Slice is a BNPL card for 18–27s who can’t get a traditional card, earning via MDR, late fees, and subscriptions — not interest.'],['Key finding','The model lives or dies on default rate. ~₹875 MDR per user vs ~₹17,500 lost per default — break-even at ~5%.'],['Core insight','A credit-risk company with a fintech interface. Survival depends on holding defaults below 3–4% while lending to bank-rejected users.'],['As PM I would','Build an early-warning system — flag repayment stress before write-offs and offer structured restructuring to recover revenue.']],tags:['LTV:CAC','Default Risk','MDR','BNPL']},
 {no:'03',cat:'Unit Economics',model:'razorpay',title:'Razorpay Unit Economics',hook:"Razorpay's biggest risk isn't competition — it's concentration. If the top 10 merchants leave, the model breaks.",sections:[['Context','Razorpay earns via MDR on every transaction. I analyzed where the gateway model is fragile.'],['Key finding','Revenue follows a power-law: a few enterprise merchants drive a large share of TPV; the SMB tail is thin-margin.'],['Core insight','Concentration is the hidden threat — and the same top accounts hold both the volume and the pricing leverage.'],['As PM I would','Build a merchant-health dashboard tracking concentration and churn signals; for SMBs, bundle value-added services to lift switching cost.']],tags:['MDR','Concentration','Power-law']},
 {no:'04',cat:'Product Strategy',model:'jupiter',title:'Jupiter Neo-bank Teardown (CIRCLES)',hook:"Jupiter's biggest risk isn't competition — it's becoming exactly what they were built to replace.",sections:[['Context','A CIRCLES teardown of Jupiter, a neo-bank on Federal Bank’s licence targeting young salaried professionals.'],['Key finding','Users love the UI but receive salary in HDFC/SBI — making Jupiter a secondary app, which caps share of wallet.'],['Core insight','Chasing feature completeness risks becoming the cluttered banks Jupiter set out to replace. The moat should be clarity.'],['As PM I would','Double down on salary-account hooks — early salary, savings jars, contextual credit — to convert secondary users into primary.']],tags:['CIRCLES','Neo-banking','Share of Wallet']},
 {no:'05',cat:'Competitive',title:'Slice Teardown (CIRCLES)',hook:"In BNPL the product is a commodity — Slice's only durable moat is owning the segment banks ignore.",sections:[['Context','A CIRCLES competitive read of Slice against Lazypay, Simpl, Uni, Kissht, and the credit card.'],['Key finding','The product is replicable; banks can copy it once the segment looks profitable. Slice’s edge is early access + brand.'],['Core insight','In a commoditized category, advantage is segment ownership and switching cost — not feature count.'],['As PM I would','Build switching costs: tenure-based limits, a credit-building narrative, and rewards that make leaving feel like losing progress.']],tags:['CIRCLES','Competitive Moat','Switching Costs']},
 {no:'06',cat:'GTM',title:'Jupiter Money Report Positioning',hook:"Positioning wins when it names the enemy — the real competitor is the raw, unreadable bank statement.",sections:[['Context','Jupiter’s monthly money report — a spending-insights feature — and how it should be positioned.'],['Key finding','Its real competitor isn’t another app; it’s the bank statement users never read. The value is making money legible.'],['Core insight','Positioning wins when it names the enemy. “Your bank sends a statement; we send clarity.”'],['As PM I would','Use the report as a shareable top-of-funnel hook; test anonymized spending insights as a growth loop.']],tags:['GTM','Positioning','Growth Loops']},
 {no:'07',cat:'Launch',title:'Razorpay Merchant Loan Launch',hook:"Alpha must test assumptions, not features — first users should break your riskiest hypothesis.",sections:[['Context','Razorpay’s merchant-lending alpha — working-capital loans to merchants already on the gateway.'],['Key finding','The riskiest assumption wasn’t demand — it was whether transaction data alone can underwrite credit.'],['Core insight','Alpha must test the riskiest assumption, not validate UI. If the credit model is wrong, a beautiful interface doesn’t matter.'],['As PM I would','Design the alpha cohort around risk diversity and measure repayment vs predictions — success is the credit model surviving contact.']],tags:['Alpha','Hypothesis Testing','B2B GTM']},
 {no:'08',cat:'Funnel Analysis',title:'Fintech Onboarding Funnel Analysis',hook:"Fintech onboarding looks like a UX problem — but it's actually a trust problem.",sections:[['Context','Self-directed. Mapped a full fintech onboarding funnel with ~85% abandonment before first transaction.'],['Key finding','Users abandon at moments of perceived risk — KYC, bank linking — not at moments of length.'],['Core insight','Onboarding is a trust problem. Length isn’t the enemy; the feeling of being unsafe is.'],['As PM I would','Add a progressive-trust redesign — value before data requests, plain-language explanations, progress cues, session recovery.']],tags:['Funnel','Trust Design','A/B Testing']},
];

const $ = (id: string): any => document.getElementById(id);
const MODEL_HTML: Record<string,string> = {
 flexi:`<div class="model"><div class="model-top"><div class="model-title">Policy-bucket decisioning — how it works</div><span class="model-badge">interactive</span></div><div class="model-sub">Pick an application — watch it route to a bucket, clear its policy checks, and get an instant decision</div><div class="bk-apps" id="bk_apps"></div><div class="bk-flow"><div class="bk-stage"><div class="bk-stage-k">Application</div><div class="bk-app" id="bk_app">—</div></div><div class="bk-arrow">→</div><div class="bk-stage"><div class="bk-stage-k">Routed to bucket</div><div class="bk-bucket" id="bk_bucket">—</div></div></div><div class="bk-checks" id="bk_checks"></div><div class="bk-decision" id="bk_decision"></div><div class="ass-note" style="margin-top:14px">illustrative of the decision flow — policy values are examples, not Flexi’s actual thresholds</div></div>`,
 slice:`<div class="model"><div class="model-top"><div class="model-title">Slice unit economics — live model</div><span class="model-badge">interactive</span></div><div class="model-sub">Each user nets ~₹875 in MDR, but one default costs ~₹17,500. Drag the default rate — past ~5%, losses overtake MDR and Slice turns unprofitable.</div>
   <div class="readout-v pos" id="m_net">+₹87,500</div><div class="verdict pos" id="m_verdict">Profitable — MDR covers losses</div>
   <div class="chart-wrap"><svg class="chart" id="m_chart" viewBox="0 0 320 140" preserveAspectRatio="none"></svg></div>
   <div class="sld-head"><span>Default rate</span><b id="m_lbl">2.0%</b></div>
   <input type="range" id="m_dr" min="0" max="10" step="0.1" value="2" style="background:linear-gradient(90deg,var(--chart-pos) 0,var(--chart-pos) 50%,var(--chart-risk) 50%,var(--chart-risk) 100%)"/>
   <div class="ticks"><span>0%</span><span>break-even 5%</span><span>10%</span></div>
   <div class="assump"><div class="ass"><div class="ass-k">Spend/user</div><div class="ass-v">₹50,000</div></div><div class="ass"><div class="ass-k">MDR</div><div class="ass-v">1.75%</div></div><div class="ass"><div class="ass-k">MDR rev/user</div><div class="ass-v">₹875</div></div><div class="ass"><div class="ass-k">Loss/default</div><div class="ass-v">₹17,500</div></div><div class="ass-note">modeled estimates — drag to test sensitivity</div></div></div>`,
 razorpay:`<div class="model"><div class="model-top"><div class="model-title">Razorpay concentration — live model</div><span class="model-badge">interactive</span></div><div class="model-sub">Gateway revenue at risk if top merchants churn</div>
   <div class="readout-v pos" id="r_out">0%</div><div class="verdict pos" id="r_verdict">Resilient — minimal exposure</div>
   <div class="chart-wrap"><svg class="chart" id="r_bar" viewBox="0 0 320 54" preserveAspectRatio="none"></svg></div>
   <div class="sld-head"><span>Top merchants lost</span><b id="r_lbl">0</b></div>
   <input type="range" id="r_n" min="0" max="10" step="1" value="0" style="background:linear-gradient(90deg,var(--chart-pos) 0,var(--chart-risk) 100%)"/>
   <div class="ticks"><span>0</span><span>5</span><span>10</span></div>
   <div class="assump"><div class="ass"><div class="ass-k">Top-10 share of TPV</div><div class="ass-v">~38%</div></div><div class="ass"><div class="ass-k">Avg / top merchant</div><div class="ass-v">~3.8%</div></div><div class="ass-note">modeled estimate — concentration = fragility</div></div></div>`,
 jupiter:`<div class="model"><div class="model-top"><div class="model-title">Jupiter share-of-wallet — live model</div><span class="model-badge">interactive</span></div><div class="model-sub">Revenue per user scales with primary-relationship share</div>
   <div class="readout-v neg" id="j_out">₹360</div><div class="verdict neg" id="j_verdict">Secondary-app trap — low monetization</div>
   <div class="chart-wrap"><svg class="chart" id="j_bar" viewBox="0 0 320 54" preserveAspectRatio="none"></svg></div>
   <div class="sld-head"><span>Share of wallet</span><b id="j_lbl">15%</b></div>
   <input type="range" id="j_sow" min="5" max="100" step="1" value="15" style="background:linear-gradient(90deg,var(--chart-risk) 0,var(--chart-pos) 100%)"/>
   <div class="ticks"><span>5%</span><span>primary at 60%</span><span>100%</span></div>
   <div class="assump"><div class="ass"><div class="ass-k">Full-relationship ARPU</div><div class="ass-v">₹2,400/yr</div></div><div class="ass"><div class="ass-k">Today (secondary)</div><div class="ass-v">~15%</div></div><div class="ass-note">modeled estimate — SoW, not DAU, drives revenue</div></div></div>`
};
const fmt=(n:number):string=>(n<0?'−₹':'+₹')+Math.abs(Math.round(n)).toLocaleString('en-IN');
const INIT: Record<string, ()=>void> = {
 flexi(){
   const samples=[
    {id:'a',chip:'Salaried · ₹2L · clean bureau',app:'Salaried · ₹2,00,000 · clean credit history',bucket:'Bucket A — Salaried, ≤ ₹5L',checks:[['Bureau score ≥ 720',1],['Income ≥ bucket minimum',1],['Existing obligations within limit',1],['KYC & documents complete',1],['Amount within bucket cap',1]],decision:['approve','Auto-approved','instant']},
    {id:'b',chip:'Self-employed · ₹12L · thin file',app:'Self-employed · ₹12,00,000 · limited credit file',bucket:'Bucket C — Self-employed, high ticket',checks:[['Bureau score ≥ 740',0],['Income documents verified',1],['Existing obligations within limit',1],['KYC & documents complete',1],['Amount within bucket cap',1]],decision:['review','Routed to manual review','ambiguous']},
    {id:'c',chip:'Salaried · ₹3L · recent default',app:'Salaried · ₹3,00,000 · recent default on record',bucket:'Bucket A — Salaried, ≤ ₹5L',checks:[['No active default flag',0],['Bureau score ≥ 720',0],['Income ≥ bucket minimum',1],['KYC & documents complete',1],['Amount within bucket cap',1]],decision:['reject','Auto-rejected','policy breach']},
   ];
   const appsEl=$('bk_apps'),appEl=$('bk_app'),buckEl=$('bk_bucket'),checksEl=$('bk_checks'),decEl=$('bk_decision');
   let timers=[];
   const run=(x)=>{
     timers.forEach(clearTimeout);timers=[];
     appEl.textContent=x.app;buckEl.textContent=x.bucket;decEl.className='bk-decision';decEl.innerHTML='';
     checksEl.innerHTML=x.checks.map((c,i)=>`<div class="bk-check" data-i="${i}"><span class="bk-ic">·</span><span class="bk-lbl">${c[0]}</span></div>`).join('');
     const rows=[...checksEl.children];
     rows.forEach((r,i)=>{timers.push(setTimeout(()=>{const p=x.checks[i][1];r.classList.add('show',p?'pass':'fail');r.querySelector('.bk-ic').textContent=p?'✓':'✗';},240*(i+1)));});
     timers.push(setTimeout(()=>{const[t,l,g]=x.decision;decEl.classList.add(t,'show');decEl.innerHTML=`<span>${l}</span><span class="bk-dtag">${g}</span>`;},240*(rows.length+1)+140));
   };
   appsEl.innerHTML=samples.map((x,i)=>`<button class="bk-app-chip${i===0?' active':''}" data-id="${x.id}">${x.chip}</button>`).join('');
   [...appsEl.children].forEach(b=>b.onclick=()=>{[...appsEl.children].forEach(z=>z.classList.remove('active'));b.classList.add('active');run(samples.find(y=>y.id===b.dataset.id));});
   run(samples[0]);
 },
 slice(){const dr=$('m_dr'),lbl=$('m_lbl'),net=$('m_net'),vd=$('m_verdict'),ch=$('m_chart');
   const REV=87500,LOSS=17500,U=100,W=320,H=140,P=6;const at=d=>REV-(U*(d/100))*LOSS;const N0=at(0),N10=at(10);
   const yF=v=>{const t=(v-N10)/(N0-N10);return H-P-t*(H-2*P);};const xF=d=>P+(d/10)*(W-2*P);const z=yF(0),be=xF(5);
   ch.innerHTML=`<defs><linearGradient id="gp" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#d4d4d8" stop-opacity=".35"/><stop offset="1" stop-color="#d4d4d8" stop-opacity="0"/></linearGradient><linearGradient id="gn" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f1796b" stop-opacity="0"/><stop offset="1" stop-color="#f1796b" stop-opacity=".35"/></linearGradient></defs>
     <path d="M${xF(0)},${z} L${xF(0)},${yF(N0)} L${be},${z} Z" fill="url(#gp)"/><path d="M${be},${z} L${xF(10)},${yF(N10)} L${xF(10)},${z} Z" fill="url(#gn)"/>
     <line x1="${P}" y1="${z}" x2="${W-P}" y2="${z}" stroke="rgba(250,250,250,.18)" stroke-dasharray="2 3"/><line x1="${be}" y1="${P}" x2="${be}" y2="${H-P}" stroke="rgba(250,250,250,.22)" stroke-dasharray="3 3"/><text class="be-lbl" x="${be+5}" y="${P+11}">5%</text>
     <line x1="${xF(0)}" y1="${yF(N0)}" x2="${xF(10)}" y2="${yF(N10)}" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle id="m_mk" r="5" fill="#fff" stroke="#161619" stroke-width="2"/>`;
   const up=()=>{const d=+dr.value,v=at(d);lbl.textContent=d.toFixed(1)+'%';net.textContent=fmt(v);const p=v>=0;net.className='readout-v '+(p?'pos':'neg');vd.className='verdict '+(p?'pos':'neg');vd.textContent=Math.abs(v)<1500?'Break-even — MDR exactly covers losses':p?'Profitable — MDR covers losses':'Loss-making — defaults exceed MDR';const m=$('m_mk');m.setAttribute('cx',xF(d));m.setAttribute('cy',yF(v));m.setAttribute('fill',p?'#d4d4d8':'#f1796b');};
   dr.oninput=up;up();},
 razorpay(){const n=$('r_n'),lbl=$('r_lbl'),out=$('r_out'),vd=$('r_verdict'),bar=$('r_bar');
   const W=320,H=54,per=3.8;
   const up=()=>{const lost=+n.value,risk=Math.min(lost*per,38);lbl.textContent=lost;out.textContent=risk.toFixed(1)+'%';
     const bad=risk>=10,warn=risk>=5;out.className='readout-v '+(bad?'neg':'pos');vd.className='verdict '+(bad?'neg':'pos');
     vd.textContent=bad?'Structural exposure — >10% revenue at risk':warn?'Watch — material single-quarter exposure':'Resilient — minimal exposure';
     const rw=(risk/100)*W;bar.innerHTML=`<rect x="0" y="14" width="${W}" height="26" rx="6" fill="#2a2a2e"/><rect x="0" y="14" width="${W-rw}" height="26" rx="6" fill="#d4d4d8" opacity=".55"/><rect x="${W-rw}" y="14" width="${rw}" height="26" fill="#f1796b"/><text x="6" y="9" class="be-lbl" fill="#a1a1aa">safe revenue</text><text x="${W-6}" y="9" class="be-lbl" fill="#f87171" text-anchor="end">at risk</text>`;};
   n.oninput=up;up();},
 jupiter(){const s=$('j_sow'),lbl=$('j_lbl'),out=$('j_out'),vd=$('j_verdict'),bar=$('j_bar');
   const W=320,ARPU=2400;
   const up=()=>{const sow=+s.value,rev=Math.round(ARPU*(sow/100));lbl.textContent=sow+'%';out.textContent='₹'+rev.toLocaleString('en-IN');
     const primary=sow>=60,ok=sow>=30;out.className='readout-v '+(ok?'pos':'neg');vd.className='verdict '+(ok?'pos':'neg');
     vd.textContent=primary?'Primary relationship — full monetization':ok?'Transitioning — rising share of wallet':'Secondary-app trap — low monetization';
     const jw=(sow/100)*W;bar.innerHTML=`<rect x="0" y="14" width="${W}" height="26" rx="6" fill="#2a2a2e"/><rect x="0" y="14" width="${jw}" height="26" rx="6" fill="#d4d4d8" opacity=".7"/><text x="6" y="9" class="be-lbl" fill="#e4e4e7">Jupiter</text><text x="${W-6}" y="9" class="be-lbl" fill="#a1a1aa" text-anchor="end">other banks</text>`;};
   s.oninput=up;up();}
};


export function PortfolioPage() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const closeModal = () => {
    overlayRef.current?.classList.remove("open");
    document.body.style.overflow = "";
  };

  const openStudy = (no: string) => {
    const s = STUDIES.find((x) => x.no === no);
    if (!s || !modalRef.current || !overlayRef.current) return;
    const flag = s.shipped
      ? '<span class="m-flag ship">Shipped to production</span>'
      : s.model
      ? '<span class="m-flag">Interactive analysis</span>'
      : '<span class="m-flag">Case study</span>';
    let html =
      `<div class="m-head"><div class="m-crumb">Case ${s.no} <span style="opacity:.5">/</span> ${s.cat}</div><button class="m-x" id="mx" aria-label="Close">✕</button></div>` +
      `<div class="m-body">${flag}<div class="m-title">${s.title}</div><div class="m-hook">${s.hook}</div>`;
    if (s.model && MODEL_HTML[s.model]) html += MODEL_HTML[s.model];
    s.sections.forEach(([k, v]) => {
      html += `<div class="m-sec"><h5>${k}</h5><p>${v}</p></div>`;
    });
    html += `<div class="m-tags">${s.tags.map((t) => `<span>${t}</span>`).join("")}</div></div>`;
    modalRef.current.innerHTML = html;
    overlayRef.current.classList.add("open");
    document.body.style.overflow = "hidden";
    const x = document.getElementById("mx");
    if (x) (x as HTMLElement).onclick = closeModal;
    if (s.model && INIT[s.model]) INIT[s.model]();
  };

  const toggleTheme = () => {
    const cur = document.documentElement.getAttribute("data-theme");
    const next = cur === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch {}
  };

  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("show"); io.unobserve(e.target); } }),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".bf").forEach((el) => io.observe(el));
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") closeModal(); };
    const ov = overlayRef.current;
    const onOv = (e: MouseEvent) => { if (e.target === ov) closeModal(); };
    const onAnchor = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute("href").slice(1);
      if (!id) return;
      const t = document.getElementById(id);
      if (!t) return;
      e.preventDefault();
      t.scrollIntoView({ behavior: "smooth", block: "start" });
      history.pushState(null, "", "#" + id);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onAnchor);
    ov?.addEventListener("click", onOv);
    return () => { io.disconnect(); document.removeEventListener("keydown", onKey); document.removeEventListener("click", onAnchor); ov?.removeEventListener("click", onOv); };
  }, []);

  const I = {
    home: (<svg viewBox="0 0 24 24"><path d="M3 11l9-8 9 8M5 10v10h14V10" /></svg>),
    gh: (<svg viewBox="0 0 24 24"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 0 0-.9-2.6c3-.3 6.2-1.5 6.2-6.7A5.2 5.2 0 0 0 19.9 5 4.9 4.9 0 0 0 19.8 1S18.6.6 16 2.4a13.4 13.4 0 0 0-7 0C6.4.6 5.2 1 5.2 1A4.9 4.9 0 0 0 5.1 5 5.2 5.2 0 0 0 3.7 8.6c0 5.2 3.2 6.4 6.2 6.7a3.4 3.4 0 0 0-.9 2.6V22" /></svg>),
    li: (<svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" /></svg>),
    x: (<svg viewBox="0 0 24 24"><path d="M4 4l16 16M20 4L4 20" /></svg>),
    mail: (<svg viewBox="0 0 24 24"><path d="M4 5h16v14H4zM4 6l8 7 8-7" /></svg>),
  };

  return (
    <>
      <main className="wrap">
        <section id="top">
          <div className="hero-row">
            <div className="hero-text">
              <h1 className="bf" aria-label="Hi, I’m Siddhita" style={{ transitionDelay: ".05s" }}><AnimatedGreeting />, I’m Siddhita <span className="wave">👋</span></h1>
            </div>
          </div>
        </section>

        <section>
          <h2 className="sec-h bf">About</h2>
          <p className="about-text bf">I’m a <b>Product Intern at Flexi Loans</b> and an aspiring Associate Product Manager. I work where product meets credit risk: at Flexi, I built automated credit-decisioning policies inside <b>Jarvis</b>, our in-house lending platform, turning manual, case-by-case approvals into reusable policy buckets the system can decide against on its own. I like understanding the business behind a product, and I stay close enough to the data — SQL, APIs, funnels — to know what’s actually buildable.</p>
        </section>

        <section>
          <h2 className="sec-h bf">Work Experience</h2>
          <div className="resume">
            <div className="rc bf">
              <div className="rc-av">FL</div>
              <div className="rc-main">
                <div className="rc-top"><span className="rc-co">Flexi Loans</span><span className="rc-date">Oct 2025 – Present</span></div>
                <div className="rc-role">Product Intern · Mumbai</div>
                <ul className="rc-bullets">
                  <li>Built automated decisioning policies in <b>Jarvis</b> (in-house lending platform), automating <b>~40%</b> of credit decisions and cutting decision time from hours to near-instant.</li>
                  <li>Consolidated scattered loan policies into reusable <b>buckets</b> so the system auto-approves or rejects against the right rules — routing genuinely ambiguous cases to a human.</li>
                  <li>Onboarded a partner channel that now drives <b>~70%</b> of business-loan disbursements.</li>
                  <li>Reworked the Loan Origination System (LOS) workflow, improving turnaround by <b>~25%</b>.</li>
                  <li>Defined partner-health and disbursement KPIs; ran onboarding funnel analysis.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="sec-h bf">Education</h2>
          <div className="resume">
            <div className="rc bf">
              <div className="rc-av">MV</div>
              <div className="rc-main">
                <div className="rc-top"><span className="rc-co">MVLU College</span><span className="rc-date">2022 – 2025</span></div>
                <div className="rc-role">B.Sc. Information Technology · 9.28 CGPA</div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="sec-h bf">Skills</h2>
          <div className="badges bf">{SKILLS.map((s) => (<span className="badge" key={s}>{s}</span>))}</div>
        </section>

        <section id="work">
          <div className="center-head bf">
            <span className="pill">My Work</span>
            <h2 className="big">Selected case studies</h2>
            <p className="sub">Shipped product work and deep teardowns of fintech businesses — each one a study in the economics beneath the product. Tap any card for the full breakdown.</p>
          </div>
          <div className="proj-grid bf">
            {STUDIES.map((s) => (
              <button className="proj-card" key={s.no} onClick={() => openStudy(s.no)}>
                <div className="pc-cat">{s.cat} · Case {s.no}</div>
                <div className="pc-title">{s.title}</div>
                <div className="pc-desc">{s.hook}</div>
                <div className="pc-badges">{s.tags.map((t) => (<span key={t}>{t}</span>))}</div>
                <div className="pc-foot"><span className="pc-link">View case study <span className="ar">→</span></span>{s.shipped ? (<span className="pc-flag ship">Shipped</span>) : s.model ? (<span className="pc-flag">Interactive</span>) : null}</div>
              </button>
            ))}
          </div>
        </section>

        <section>
          <div className="dual-grid bf">
            <div className="info-card" id="contact">
              <div className="info-head">
                <span className="pill">Contact</span>
                <h3 className="dual-title">Get in touch</h3>
                <p className="dual-sub">Want to talk product, or have a role in mind? I’d love to hear from you.</p>
              </div>
              <div className="info-body">
                <div className="contact-actions">
                  <a className="cbtn primary" href={siteConfig.social.gmail} target="_blank" rel="noopener noreferrer">{I.mail} Email me</a>
                  <a className="cbtn" href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer">{I.li} LinkedIn</a>
                  <a className="cbtn" href={siteConfig.social.twitter} target="_blank" rel="noopener noreferrer">{I.x} Twitter</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="bf">Siddhita Acharekar · Built in Mumbai</footer>
      </main>

      <nav className="dock" aria-label="Quick links">
        <a href="#top" title="Home">{I.home}</a>
        <span className="dock-sep" />
        <a href={siteConfig.social.github} target="_blank" rel="noopener noreferrer" title="GitHub">{I.gh}</a>
        <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn">{I.li}</a>
        <a href={siteConfig.social.twitter} target="_blank" rel="noopener noreferrer" title="Twitter">{I.x}</a>
        <a href={siteConfig.social.gmail} target="_blank" rel="noopener noreferrer" title="Email">{I.mail}</a>
        <span className="dock-sep" />
        <button onClick={toggleTheme} title="Toggle theme" aria-label="Toggle theme">
          <svg className="ic-moon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4" /></svg>
          <svg className="ic-sun" viewBox="0 0 24 24"><path d="M20 14.5A8 8 0 1 1 9.5 4 6.3 6.3 0 0 0 20 14.5z" /></svg>
        </button>
      </nav>

      <div className="overlay" id="overlay" ref={overlayRef}><div className="modal" id="modal" ref={modalRef} role="dialog" aria-modal="true"></div></div>
    </>
  );
}
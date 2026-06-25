export type ModelKind = "flexi" | "slice" | "razorpay" | "jupiter";

export type CaseStudySection = {
  label: string;
  text: string;
};

export type CaseStudy = {
  slug: string;
  number: string;
  type: string;
  title: string;
  hook: string;
  category: string;
  insight: string;
  summary: string;
  risk?: boolean;
  shipped?: boolean;
  model?: ModelKind;
  featStat?: [string, string];
  featured?: boolean;
  pinned?: boolean;
  skills: string[];
  tags: string[];
  sections: CaseStudySection[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "flexi_decisioning",
    number: "01",
    type: "Automation \u00b7 Case Study 01",
    skills: ["Automation", "Policy Design"],
    featured: true,
    title: "Automated Credit Decisioning — Flexi Loans",
    category: "Automation",
    shipped: true,
    model: "flexi",
    featStat: ["40%", "decisions automated"],
    hook: "The hard part of automating credit decisions isn't the model — it's turning scattered, case-by-case judgement into rules a machine can be trusted with.",
    insight: "Codified scattered loan policies into buckets — automated ~40% of decisions",
    summary:
      "I created policy \u201cbuckets\u201d keyed to loan requirements, consolidating scattered rules so Jarvis could auto-decide instead of routing every case to a human.",
    tags: ["Automation", "Policy Design", "Credit Decisioning", "Stakeholder Mgmt"],
    sections: [
      { label: "Context", text: "Jarvis, Flexi Loans\u2019 in-house lending platform, already existed \u2014 but every loan was approved manually against policies that lived in different places. As volume grew, that case-by-case review became slow, inconsistent, and a bottleneck for credit and operations." },
      { label: "What I built", text: "I created policy \u201cbuckets\u201d keyed to loan requirements \u2014 each bucket defining exactly which policies an application must satisfy \u2014 and brought those previously scattered rules into one place. With the logic codified, Jarvis could auto-approve or auto-reject against the right bucket instead of sending every case to a human." },
      { label: "The hard part", text: "The judgement was in the bucketing itself: how to segment loans, which policies each bucket must satisfy, and getting the rules complete and correct enough that credit and risk teams would trust the system to decide. Auto-approving a bad loan and auto-rejecting a good customer are both costly \u2014 so genuinely ambiguous cases still route to a human." },
      { label: "Impact", text: "~40% of decisions now run automatically, cutting decision time from hours to near-instant and applying policy consistently. Credit and ops are freed for the cases that actually need judgement \u2014 alongside LOS workflow changes that cut overall turnaround ~25%." },
    ],
  },
  {
    slug: "slice_unit_economics",
    number: "02",
    type: "Unit Economics · Case Study 02",
    skills: ["LTV:CAC", "Default Risk"],
    featured: true,
    title: "Slice Unit Economics Teardown",
    category: "Unit Economics",
    risk: true,
    model: "slice",
    featStat: ["5%", "break-even default"],
    hook: "Most people think Slice is a payments company — but it's actually a credit-risk company disguised as fintech.",
    insight: "5% default wipes all MDR revenue — one default erases ~20 paying users",
    summary:
      "Slice earns via MDR, late fees, and subscriptions \u2014 but the model lives or dies on default rate, breaking even around ~5%.",
    tags: ["LTV:CAC", "Default Risk", "MDR", "BNPL"],
    sections: [
      { label: "Context", text: "Slice is a BNPL card for 18\u201327s who can\u2019t get a traditional card, earning via MDR (1.5\u20132%), late fees, and subscriptions \u2014 not interest." },
      { label: "Key finding", text: "The model lives or dies on default rate. ~\u20b9875 MDR per user vs ~\u20b917,500 lost per default \u2014 break-even at ~5%." },
      { label: "Core insight", text: "A credit-risk company with a fintech interface. Survival depends on holding defaults below 3\u20134% while lending to bank-rejected users." },
      { label: "As PM I would", text: "Build an early-warning system \u2014 flag repayment stress before write-offs and offer structured restructuring to recover revenue." },
    ],
  },
  {
    slug: "razorpay_unit_economics",
    number: "03",
    type: "Unit Economics · Case Study 03",
    skills: ["MDR", "Concentration"],
    featured: true,
    title: "Razorpay Unit Economics",
    category: "Unit Economics",
    risk: true,
    model: "razorpay",
    featStat: ["~38%", "top-10 of TPV"],
    hook: "Razorpay's biggest risk isn't competition — it's concentration. If the top 10 merchants leave, the model breaks.",
    insight: "Concentration is the hidden threat — top accounts hold both the volume and the leverage",
    summary:
      "Razorpay earns MDR on every transaction, but revenue follows a power-law \u2014 a few enterprise merchants drive a large share of TPV.",
    tags: ["MDR", "Concentration", "Power-law"],
    sections: [
      { label: "Context", text: "Razorpay earns via MDR (0.2\u20132%) on every transaction. I analysed where the gateway model is fragile." },
      { label: "Key finding", text: "Revenue follows a power-law: a few enterprise merchants drive a large share of TPV; the SMB tail is thin-margin, often below cost-to-serve." },
      { label: "Core insight", text: "Concentration is the hidden threat \u2014 and the same top accounts hold both the volume and the pricing leverage." },
      { label: "As PM I would", text: "Build a merchant-health dashboard tracking concentration and churn signals; for SMBs, bundle value-added services to lift switching cost." },
    ],
  },
  {
    slug: "jupiter_teardown",
    number: "04",
    type: "Product Strategy · Case Study 04",
    skills: ["CIRCLES", "Neo-banking"],
    featured: true,
    title: "Jupiter Neo-bank Teardown (CIRCLES)",
    category: "Product Strategy",
    model: "jupiter",
    featStat: ["SoW", "strategic lever"],
    hook: "Jupiter's biggest risk isn't competition — it's becoming exactly what they were built to replace.",
    insight: "Share of wallet, not DAU — the secondary-account problem caps monetisation",
    summary:
      "A CIRCLES teardown of Jupiter \u2014 users love the UI but bank elsewhere, making it a secondary app and capping monetisation.",
    tags: ["CIRCLES", "Neo-banking", "Share of Wallet"],
    sections: [
      { label: "Context", text: "A CIRCLES teardown of Jupiter, a neo-bank on Federal Bank\u2019s licence targeting young salaried professionals." },
      { label: "Key finding", text: "Users love the UI but receive salary in HDFC/SBI \u2014 making Jupiter a secondary app, which caps share of wallet and monetisation." },
      { label: "Core insight", text: "Chasing feature completeness risks becoming the cluttered banks Jupiter set out to replace. The moat should be clarity, not features." },
      { label: "As PM I would", text: "Double down on salary-account hooks \u2014 early salary, savings jars, contextual credit \u2014 to convert secondary users into primary relationships." },
    ],
  },
  {
    slug: "slice_circles",
    number: "05",
    type: "Competitive · Case Study 05",
    skills: ["CIRCLES", "Competitive Moat"],
    featured: false,
    title: "Slice Teardown (CIRCLES)",
    category: "Competitive",
    hook: "In BNPL the product is a commodity — Slice's only durable moat is owning the segment banks ignore.",
    insight: "BNPL products are commodities — the moat is segment ownership and switching cost",
    summary:
      "A CIRCLES competitive read of Slice \u2014 the product is replicable, so the edge is segment ownership and switching cost, not features.",
    tags: ["CIRCLES", "Competitive Moat", "Switching Costs"],
    sections: [
      { label: "Context", text: "A CIRCLES competitive read of Slice against Lazypay, Simpl, Uni, Kissht, and the credit card." },
      { label: "Key finding", text: "The product is replicable; banks can copy it once the segment looks profitable. Slice\u2019s edge is early access + brand, not features." },
      { label: "Core insight", text: "In a commoditised category, advantage is segment ownership and switching cost \u2014 not feature count." },
      { label: "As PM I would", text: "Build switching costs: tenure-based limits, a credit-building narrative, and rewards that make leaving feel like losing progress." },
    ],
  },
  {
    slug: "jupiter_positioning",
    number: "06",
    type: "GTM · Case Study 06",
    skills: ["GTM", "Positioning"],
    featured: false,
    title: "Jupiter Money Report Positioning",
    category: "GTM",
    hook: "Positioning wins when it names the enemy — the real competitor is the raw, unreadable bank statement.",
    insight: "Positioning wins when it names the enemy — the rival is the unreadable bank statement",
    summary:
      "Jupiter\u2019s money report competes not with another app but with the bank statement users never read. The value is making money legible.",
    tags: ["GTM", "Positioning", "Growth Loops"],
    sections: [
      { label: "Context", text: "Jupiter\u2019s monthly money report \u2014 a spending-insights feature \u2014 and how it should be positioned." },
      { label: "Key finding", text: "Its real competitor isn\u2019t another app; it\u2019s the bank statement users never read. The value is making money legible." },
      { label: "Core insight", text: "Positioning wins when it names the enemy. \u201cYour bank sends a statement; we send clarity.\u201d" },
      { label: "As PM I would", text: "Use the report as a shareable top-of-funnel hook; test anonymised spending insights as a growth loop." },
    ],
  },
  {
    slug: "razorpay_launch",
    number: "07",
    type: "Launch · Case Study 07",
    skills: ["Alpha", "Hypothesis Testing"],
    featured: false,
    title: "Razorpay Merchant Loan Launch",
    category: "Launch",
    hook: "Alpha must test assumptions, not features — first users should break your riskiest hypothesis.",
    insight: "Alpha tests assumptions, not features — first users should break your riskiest hypothesis",
    summary:
      "Razorpay\u2019s merchant-lending alpha \u2014 the riskiest assumption wasn\u2019t demand, it was whether transaction data alone can underwrite credit.",
    tags: ["Alpha", "Hypothesis Testing", "B2B GTM"],
    sections: [
      { label: "Context", text: "Razorpay\u2019s merchant-lending alpha \u2014 working-capital loans to merchants already on the gateway." },
      { label: "Key finding", text: "The riskiest assumption wasn\u2019t demand (obvious) \u2014 it was whether transaction data alone can underwrite credit." },
      { label: "Core insight", text: "Alpha must test the riskiest assumption, not validate UI. If the credit model is wrong, a beautiful interface doesn\u2019t matter." },
      { label: "As PM I would", text: "Design the alpha cohort around risk diversity and measure repayment vs predictions \u2014 success is the credit model surviving contact." },
    ],
  },
  {
    slug: "onboarding_funnel",
    number: "08",
    type: "Funnel Analysis · Case Study 08",
    skills: ["Funnel", "Trust Design"],
    featured: false,
    title: "Fintech Onboarding Funnel Analysis",
    category: "Funnel Analysis",
    hook: "Fintech onboarding looks like a UX problem — but it's actually a trust problem.",
    insight: "Onboarding is a trust problem — users leave when they don't feel safe, not when it's long",
    summary:
      "Self-directed. ~85% abandonment concentrated at KYC and bank-linking \u2014 driven by trust hesitation, not step count.",
    tags: ["Funnel", "Trust Design", "A/B Testing"],
    sections: [
      { label: "Context", text: "Self-directed. Mapped a full fintech onboarding funnel with ~85% abandonment before first transaction." },
      { label: "Key finding", text: "Users abandon at moments of perceived risk \u2014 KYC, bank linking \u2014 not at moments of length." },
      { label: "Core insight", text: "Onboarding is a trust problem. Length isn\u2019t the enemy; the feeling of being unsafe is." },
      { label: "As PM I would", text: "Add a progressive-trust redesign \u2014 value before data requests, plain-language explanations, progress cues, session recovery \u2014 without loosening fraud controls." },
    ],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}

export const featuredCaseStudies = caseStudies.filter((c) => c.featured);
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
  featured?: boolean;
  pinned?: boolean;
  skills: string[];
  tags: string[];
  sections: CaseStudySection[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "snapchat_journey",
    number: "01",
    type: "User Research · Case Study 01",
    title: "Snapchat User Journey Map",
    hook:
      "Users don't leave Snapchat because it lacks features — they leave because sharing feels like a performance.",
    category: "User Research",
    insight:
      "Pain points cluster around memory and sharing anxiety — users fear judgement, not lack of features",
    summary:
      "Mapped the full emotional user journey across Snapchat's capture-share-view loop, surfacing friction that no feature list captures.",
    skills: ["User Research", "Empathy"],
    tags: [
      "User Journey",
      "Empathy Mapping",
      "Pain Points",
      "Sharing Anxiety",
      "Emotional UX",
      "Snapchat",
    ],
    sections: [
      {
        label: "Context",
        text: "Snapchat's core loop — capture, share, view — seems simple. But mapping the full user journey reveals emotional friction points that no feature list captures. Users move between creation, sharing, and consumption with underlying anxieties about judgement, permanence, and social reciprocity.",
      },
      {
        label: "Key Finding",
        text: "Pain points cluster around memory and sharing anxiety. Users hesitate before posting — not because the UI is confusing, but because they fear how their content will be received. The streak mechanic drives engagement but also creates obligation stress. Gallery sharing (camera roll uploads) feels less authentic, creating a two-tier content hierarchy.",
      },
      {
        label: "The Core Insight",
        text: "Snapchat's biggest UX friction isn't navigational — it's emotional. Users fear judgement, not complexity. The ephemerality that once reduced sharing anxiety has been diluted by features like Memories and Spotlight, reintroducing the permanence users originally came to escape.",
      },
      {
        label: "As Product Manager, I Would",
        text: "Design sharing flows that reduce social evaluation anxiety — smaller audience selectors, gentle prompts for close-friends sharing, and clearer separation between ephemeral and permanent content. Reaffirm the core promise: this disappears, so you can be yourself.",
      },
    ],
  },
  {
    slug: "snapchat_prd",
    number: "02",
    type: "PRD Writing · Case Study 02",
    title: "PRD — Snapchat Gallery Sharing",
    hook:
      "What you choose not to build is as important as what you ship — scope control is a product skill.",
    category: "PRD Writing",
    insight:
      "Scope control matters as much as feature design — what you don't build is as important as what you do",
    summary:
      "Scoped a redesign of Snapchat's gallery sharing flow with a hard boundary between in-scope and explicitly-not-in-scope requests.",
    skills: ["PRD Writing", "Prioritization"],
    tags: [
      "PRD Writing",
      "Scope Control",
      "Prioritization",
      "RICE Framework",
      "Feature Design",
      "Stakeholder Alignment",
    ],
    sections: [
      {
        label: "Context",
        text: "Snapchat users frequently want to share photos from their camera roll, but the current gallery-sharing flow feels like a second-class citizen compared to in-app captures. This PRD scopes a redesign of gallery sharing to make it feel native while preserving Snapchat's authenticity-first identity.",
      },
      {
        label: "Key Finding",
        text: "The hardest part of writing this PRD was not defining features — it was defining boundaries. Every stakeholder had a different vision: marketing wanted filters on gallery photos, engineering wanted a simple upload, design wanted parity with camera captures. Without explicit scope control, the feature would balloon.",
      },
      {
        label: "The Core Insight",
        text: "A PRD's most valuable section isn't what we're building — it's what we're not building and why. Scope discipline forces alignment early and prevents the slow creep that delays launches and dilutes product clarity. Saying no is a product decision, not a limitation.",
      },
      {
        label: "As Product Manager, I Would",
        text: "Define a hard scope boundary in every PRD with a Not in Scope section that names specific requests and explains the reasoning. Use a RICE framework to prioritise within scope, and timebox the first release to force trade-off conversations before engineering begins.",
      },
    ],
  },
  {
    slug: "cred",
    number: "03",
    type: "Product Strategy · Case Study 03",
    title: "CRED Product Teardown",
    hook:
      "CRED's moat isn't rewards or UI — it's the feeling of being rejected if you don't qualify.",
    category: "Strategy",
    insight:
      "CRED's moat is exclusivity perception — being rejected from CRED feels worse than not joining",
    summary:
      "Dissected CRED's exclusivity positioning: monetising aspiration rather than transactions, and why competitors with better cashback keep losing.",
    skills: ["Strategy", "Moat Analysis"],
    tags: [
      "Product Teardown",
      "Exclusivity Moat",
      "Loss Aversion",
      "Positioning",
      "Monetisation Strategy",
      "CRED",
    ],
    sections: [
      {
        label: "Context",
        text: "CRED is a credit card bill payment app that restricts access to users with a credit score above 750. In a market flooded with cashback apps, CRED chose exclusivity as its core positioning — turning a bill payment utility into a status signal.",
      },
      {
        label: "Key Finding",
        text: "CRED's exclusivity creates a psychological moat that no feature can replicate. Being rejected from CRED feels worse than never applying — it triggers loss aversion. Users who do qualify feel a sense of belonging to a curated community, which drives retention independent of reward value.",
      },
      {
        label: "The Core Insight",
        text: "CRED monetises aspiration, not transactions. The rewards are a retention mechanic, but the real product is the identity it gives users. This is why competitors offering better cashback haven't dented CRED's position — they're competing on economics while CRED competes on psychology.",
      },
      {
        label: "As Product Manager, I Would",
        text: "Protect the exclusivity threshold ruthlessly — lowering the bar for growth would destroy the moat. Expand monetisation through premium financial products (wealth management, premium credit cards) that reinforce the high-trust user base, rather than chasing transaction volume.",
      },
    ],
  },
  {
    slug: "mixpanel",
    number: "04",
    type: "Data Analysis · Case Study 04",
    title: "Mixpanel Funnel Analysis",
    hook:
      "Numbers tell you where users drop off. Only qualitative research tells you why.",
    category: "Data Analysis",
    insight:
      "Drop-off diagnosis needs both quantitative and qualitative signals — neither alone tells the full story",
    summary:
      "Tracked a six-step fintech onboarding funnel in Mixpanel and discovered the bottleneck was acquisition quality, not UX.",
    skills: ["Data Analysis", "Metrics"],
    tags: [
      "Funnel Analysis",
      "Mixpanel",
      "Quantitative Analysis",
      "Cohort Segmentation",
      "User Research",
      "Data-Driven Decisions",
    ],
    sections: [
      {
        label: "Context",
        text: "Using Mixpanel to analyse a fintech onboarding funnel, I tracked conversion across six steps — from app open to first transaction. The quantitative data revealed sharp drop-offs at specific stages, but the numbers alone couldn't explain user intent or hesitation.",
      },
      {
        label: "Key Finding",
        text: "The data showed a 40% drop at KYC verification and a 35% drop at bank linking. But segmenting by acquisition channel revealed that organic users converted 2.3x better than paid users — suggesting the problem wasn't the funnel, but who was entering it. Paid campaigns attracted low-intent users who were never going to convert.",
      },
      {
        label: "The Core Insight",
        text: "Drop-off diagnosis needs both quantitative and qualitative signals. Mixpanel shows you the what and where — but without user interviews, session recordings, or survey data, you're guessing at the why. The most dangerous product decisions come from acting on data without context.",
      },
      {
        label: "As Product Manager, I Would",
        text: "Pair every funnel analysis with at least 5–10 user interviews targeting drop-off points. Segment funnel data by cohort (channel, device, time-of-day) before drawing conclusions. Build a dashboard that tracks not just conversion rates but also time-to-complete per step — slowdowns signal confusion even when users eventually convert.",
      },
    ],
  },
  {
    slug: "abtest",
    number: "05",
    type: "Experimentation · Case Study 05",
    title: "A/B Test Design — Bank Linking",
    hook:
      "If your hypothesis isn't falsifiable with a single metric, you haven't designed an experiment — you've designed a debate.",
    category: "Experimentation",
    insight:
      "A hypothesis must be falsifiable with a single metric — if you can't measure it cleanly, you can't learn",
    summary:
      "Designed a dual-metric A/B test (primary + guardrail) to evaluate a security explainer before the bank linking step.",
    skills: ["Experimentation", "Hypothesis"],
    tags: [
      "A/B Testing",
      "Hypothesis Design",
      "Guardrail Metrics",
      "Experimentation",
      "Statistical Rigour",
      "Bank Linking",
    ],
    sections: [
      {
        label: "Context",
        text: "Bank linking is one of the highest-friction steps in fintech onboarding. I designed an A/B test to evaluate whether showing a trust badge and security explainer before the bank linking step would improve conversion — without compromising fraud detection rates.",
      },
      {
        label: "Key Finding",
        text: "The hypothesis was specific: adding a security explainer before bank linking will increase step completion by ≥8% without increasing fraud flags by more than 0.5%. This dual-metric approach — a primary success metric with a guardrail — prevented the common trap of optimising conversion at the cost of security.",
      },
      {
        label: "The Core Insight",
        text: "A hypothesis must be falsifiable with a single metric. If you need three metrics to decide whether the test worked, your test is too broad. The guardrail metric exists to catch unintended consequences, not to define success. Clean experiment design means knowing exactly what winning looks like before you see any results.",
      },
      {
        label: "As Product Manager, I Would",
        text: "Define every A/B test with: one primary metric, one guardrail metric, a minimum detectable effect, required sample size, and a pre-committed run time. Refuse to peek at results early. Document learnings regardless of outcome — failed experiments are only wasted if you don't extract the insight.",
      },
    ],
  },
  {
    slug: "onboarding",
    number: "06",
    type: "Funnel Analysis · Case Study 06",
    title: "Fintech Onboarding Funnel Analysis",
    hook:
      "Fintech onboarding looks like a UX problem — but it's actually a trust problem.",
    category: "Funnel Analysis",
    insight:
      "Onboarding is a trust problem — users leave the moment they don't feel safe, not when steps feel long",
    summary:
      "Mapped drop-off across the full onboarding funnel and diagnosed the real driver behind 85% abandonment before first transaction.",
    featured: true,
    pinned: true,
    skills: ["Funnel", "Trust Design"],
    tags: ["KYC Drop-off", "Trust Design", "A/B Testing"],
    sections: [
      {
        label: "Context",
        text: "Digital product companies spend heavily to acquire users — ads, referrals, cashback. But somewhere between download and first transaction, the majority disappear. Typical fintech funnel: 100 downloads → 85 mobile entry → 80 OTP → 60 PAN entry → 40 KYC → 25 bank linking → 15 first transaction. That is an 85% drop-off.",
      },
      {
        label: "Key Finding",
        text: "The biggest drops happen at KYC and bank linking — not because steps are too many, but because at those moments users ask: do I trust this app enough to share my credentials? Users who don't understand the value of completing onboarding churn early, even when the product itself is strong.",
      },
      {
        label: "The Core Insight",
        text: "Every redesign focused on reducing steps solves the wrong problem. You can cut a 6-step flow to 3 and still lose 85% of users if you haven't addressed the moment of trust hesitation. The real intervention is building credibility before asking for sensitive information.",
      },
      {
        label: "As Product Manager, I Would",
        text: "Redesign around progressive trust: show value before asking for sensitive data, explain why each step is needed in plain language, add progress cues like 2 minutes left, save progress so users can leave and return, and fix the top 3 failure reasons — without loosening fraud controls.",
      },
    ],
  },
  {
    slug: "metrics",
    number: "07",
    type: "Metrics Design · Case Study 07",
    title: "Metrics Doc — Partner Platform",
    hook:
      "A metric without a guardrail is a recipe for gaming — optimising one number without constraints breaks the system.",
    category: "Metrics",
    insight:
      "Every metric needs a guardrail — optimising one number without constraints breaks the system",
    summary:
      "Designed a North Star + guardrail metrics framework for a partner platform to align incentives without creating gaming loops.",
    skills: ["North Star", "Guardrails"],
    tags: [
      "North Star Metric",
      "Guardrail Metrics",
      "Metrics Framework",
      "Incentive Design",
      "Partner Platforms",
      "KPIs",
    ],
    sections: [
      {
        label: "Context",
        text: "I designed a metrics framework for a hypothetical partner platform — defining the North Star metric, supporting input metrics, and guardrail metrics. The goal was to create a measurement system that aligns team incentives without creating perverse optimisation loops.",
      },
      {
        label: "Key Finding",
        text: "The North Star metric (monthly active partnerships) only works if paired with guardrails: partner satisfaction score, churn rate, and support ticket volume. Without guardrails, teams could inflate active partnerships by lowering onboarding standards — hitting the number while degrading the ecosystem.",
      },
      {
        label: "The Core Insight",
        text: "Every metric needs a guardrail. The North Star tells you what to optimise; guardrails tell you what you can't sacrifice. Teams that optimise a single number without constraints inevitably game it — not maliciously, but because incentives shape behaviour. Metrics design is incentive design.",
      },
      {
        label: "As Product Manager, I Would",
        text: "Build a metrics hierarchy: one North Star, 3–4 input metrics that drive it, and 2–3 guardrail metrics that protect quality. Review guardrails weekly — if they're trending down while the North Star trends up, something is breaking. Make guardrail violations a blocker for launches.",
      },
    ],
  },
  {
    slug: "slice_circles",
    number: "08",
    type: "Competitive Analysis · Case Study 08",
    title: "Slice Teardown (CIRCLES)",
    hook:
      "BNPL monetisation depends on scale, not margin — volume must absorb default losses to be viable.",
    category: "Competitive",
    insight:
      "BNPL monetisation depends on scale not margin — volume must absorb default losses to be viable",
    summary:
      "Applied the CIRCLES framework to Slice's BNPL positioning and surfaced the volume-vs-default tension hidden in the business model.",
    skills: ["BNPL", "Competitive"],
    tags: [
      "CIRCLES Framework",
      "BNPL",
      "Competitive Analysis",
      "Default Risk",
      "Credit Risk",
      "Scale Economics",
    ],
    sections: [
      {
        label: "Context",
        text: "Using the CIRCLES framework, I dissected Slice's product positioning in the Indian BNPL market. Slice targets users aged 18–27 who are underserved by traditional credit — offering a virtual credit line with a sleek UX that masks the underlying credit infrastructure.",
      },
      {
        label: "Key Finding",
        text: "Slice's per-transaction revenue (1.5–2% MDR) is thin. At scale, this works only if default rates stay below 3–4%. But their target demographic — young, first-time credit users — inherently carries higher default risk. The business model requires massive transaction volume to absorb inevitable losses.",
      },
      {
        label: "The Core Insight",
        text: "BNPL monetisation is a volume game, not a margin game. Slice cannot price for risk the way a bank would — higher fees would kill adoption. So they must grow fast enough that healthy users subsidise defaulters. This creates a dangerous dependency on growth rate as a survival metric.",
      },
      {
        label: "As Product Manager, I Would",
        text: "Build risk-based credit limits that tighten automatically when a user shows early stress signals. Create a graduated trust system — new users start with low limits and earn higher ones through consistent repayment. This reduces default exposure without killing the frictionless onboarding experience.",
      },
    ],
  },
  {
    slug: "jupiter",
    number: "09",
    type: "Product Strategy · Case Study 09",
    title: "Jupiter Neo-bank Teardown (CIRCLES)",
    hook:
      "Jupiter's biggest risk isn't competition — it's becoming exactly what they were built to replace.",
    category: "Product Strategy",
    insight:
      "Secondary account problem limits monetisation — share of wallet, not DAU, is what matters",
    summary:
      "Applied the CIRCLES framework to diagnose Jupiter's secondary account problem and recommend a share-of-wallet growth strategy.",
    featured: true,
    pinned: true,
    skills: ["Neo-banking", "Strategy"],
    tags: ["CIRCLES", "Neo-banking", "Share of Wallet"],
    sections: [
      {
        label: "Context",
        text: "Jupiter is a neo-bank built on Federal Bank's licence, targeting young salaried professionals frustrated with traditional banking. Strong UX, spending insights, higher FD rates — but built on existing banking infrastructure, not owning the full stack.",
      },
      {
        label: "Key Finding",
        text: "The secondary account problem is Jupiter's core strategic challenge. Users love the UI but receive their salary in HDFC or SBI — making Jupiter a secondary app they check occasionally, not their primary financial relationship. This limits share of wallet, engagement, and monetisation.",
      },
      {
        label: "The Core Insight",
        text: "In trying to add more features — investments, insurance, credit — Jupiter risks becoming as cluttered as the apps they were built to replace. Their real strategic moat should be financial clarity, not feature completeness. Growth through feature expansion may destroy the simplicity that made them different.",
      },
      {
        label: "As Product Manager, I Would",
        text: "Double down on salary-account hooks: early salary access, automated savings jars, intelligent bill management, and contextual credit offers. Prioritise revenue aligned with user value — contextual lending, wealth products, premium tiers — rather than relying only on transaction income.",
      },
    ],
  },
  {
    slug: "razorpay",
    number: "10a",
    type: "Unit Economics · Case Study 10a",
    title: "Razorpay Unit Economics",
    hook:
      "Razorpay's biggest risk isn't competition — it's concentration. If the top 10 merchants leave, the model breaks.",
    category: "Unit Economics",
    insight:
      "Concentration risk is Razorpay's hidden threat — if top 10 merchants churn, revenue drops sharply",
    summary:
      "Analysed Razorpay's MDR economics and surfaced the concentration risk lurking under a seemingly diversified merchant base.",
    skills: ["MDR", "Risk"],
    tags: [
      "Unit Economics",
      "MDR",
      "Concentration Risk",
      "Merchant Economics",
      "Payment Gateway",
      "Revenue Diversification",
    ],
    sections: [
      {
        label: "Context",
        text: "Razorpay is India's leading payment gateway, processing transactions for businesses of all sizes. Revenue comes primarily from MDR (merchant discount rate) — a thin 0.2–2% margin on every transaction processed. I analysed their unit economics to understand where the business is fragile.",
      },
      {
        label: "Key Finding",
        text: "Razorpay's revenue is heavily concentrated in a small number of large merchants. If the top 10 merchants churned — or negotiated lower rates — revenue would drop disproportionately. Meanwhile, SMB merchants generate volume but at razor-thin margins, often below the cost-to-serve.",
      },
      {
        label: "The Core Insight",
        text: "Concentration risk is Razorpay's hidden threat. The payment gateway model looks diversified from the outside — thousands of merchants — but revenue concentration tells a different story. True resilience requires either deepening wallet share with large merchants or building profitable SMB economics.",
      },
      {
        label: "As Product Manager, I Would",
        text: "Build a merchant health dashboard tracking revenue concentration, churn signals, and competitive switching indicators for top accounts. For SMBs, create bundled value-added services (invoicing, lending, payroll) that increase switching cost and improve per-merchant economics beyond pure MDR.",
      },
    ],
  },
  {
    slug: "slice",
    number: "10b",
    type: "Unit Economics · Case Study 10b",
    title: "Slice Unit Economics Teardown",
    hook:
      "Most people think Slice is a payments company — but it's actually a credit risk company disguised as fintech.",
    category: "Unit Economics",
    insight:
      "Default rate is the single variable that breaks the model — 5% default wipes all MDR revenue at scale",
    summary:
      "Analysed LTV:CAC dynamics, MDR revenue model, default risk thresholds, and regulatory exposure across Slice's BNPL product.",
    featured: true,
    pinned: true,
    skills: ["LTV:CAC", "Default Risk"],
    tags: ["LTV:CAC", "Default Risk", "MDR", "BNPL"],
    sections: [
      {
        label: "Context",
        text: "Slice is a BNPL credit card targeting young Indians (18–27) who cannot get a traditional credit card. They earn primarily through MDR (merchant discount rate) at 1.5–2% per transaction, late fees, and subscriptions — not through interest on the core product.",
      },
      {
        label: "Key Finding",
        text: "LTV:CAC of 1.3:1 means Slice needs 2–3 years to break even per user (CAC approximately ₹500–800, Year 1 LTV approximately ₹900). A healthy business needs 3:1 or higher. Default rates above 4–5% wipe out all MDR revenue. Their cost of funds persists even when users default. RBI regulatory risk on BNPL is a second existential threat.",
      },
      {
        label: "The Core Insight",
        text: "Slice is not a fintech company with a credit risk problem. It is a credit risk company that built a fintech interface. Their survival depends on keeping default rates below 3–4% while lending to people that banks already refused — at enough scale for MDR to cover CAC.",
      },
      {
        label: "As Product Manager, I Would",
        text: "Build an early warning system — flag users showing repayment stress before they default, using signals like payment delays, reduced spending, or missed minimum payments. Offer structured repayment restructuring to recover revenue before it becomes a write-off.",
      },
    ],
  },
  {
    slug: "bizmodel",
    number: "10c",
    type: "Business Model Analysis · Case Study 10c",
    title: "Business Model Map — 5 Products",
    hook:
      "Every product is either a toll road or a casino — knowing which changes how you evaluate risk and growth.",
    category: "Business Model",
    insight:
      "Every product is either a toll road or a casino — knowing which changes how you evaluate risk and growth",
    summary:
      "Mapped Razorpay, Slice, Jupiter, CRED, and Zerodha into two archetypes — toll roads and casinos — and what each one dies from.",
    skills: ["Model Patterns", "Revenue"],
    tags: [
      "Business Models",
      "Revenue Patterns",
      "Toll Road vs Casino",
      "Risk Analysis",
      "Product Economics",
      "Strategic Frameworks",
    ],
    sections: [
      {
        label: "Context",
        text: "I mapped the business models of five Indian tech products — Razorpay, Slice, Jupiter, CRED, and Zerodha — to identify structural patterns in how they generate, capture, and defend revenue. The goal was to build a reusable mental model for evaluating any product's economics.",
      },
      {
        label: "Key Finding",
        text: "Products fall into two archetypes: toll roads (Razorpay, Zerodha) that take a small cut of every transaction and depend on volume, and casinos (Slice, Jupiter) that bet on user lifetime value exceeding acquisition and servicing costs. CRED is a hybrid — monetising neither transactions nor credit, but audience and aspiration.",
      },
      {
        label: "The Core Insight",
        text: "The archetype determines what kills the business. Toll roads die from price compression and concentration risk. Casinos die from adverse selection and default rates. Knowing which archetype you're building tells you what metric to obsess over and what risk to hedge against — before it becomes a crisis.",
      },
      {
        label: "As Product Manager, I Would",
        text: "Build a one-page business model map for any product I work on — revenue source, cost structure, key risk, and the single metric that predicts survival. Use it to pressure-test roadmap decisions: does this feature strengthen the model, or does it just add surface area?",
      },
    ],
  },
  {
    slug: "jupiter_positioning",
    number: "11",
    type: "GTM Strategy · Case Study 11",
    title: "Jupiter Money Report Positioning",
    hook:
      "Positioning wins when it names the enemy — the real competitor is the raw, unreadable bank statement.",
    category: "GTM",
    insight:
      "Positioning wins when it names the enemy — the real competitor is the raw, unreadable bank statement",
    summary:
      "Reframed Jupiter's monthly money report against the right enemy — the unreadable bank statement, not rival fintech apps.",
    skills: ["GTM", "Positioning"],
    tags: [
      "GTM Strategy",
      "Positioning",
      "Competitive Framing",
      "Growth Loops",
      "Content Marketing",
      "Jupiter",
    ],
    sections: [
      {
        label: "Context",
        text: "Jupiter's monthly money report is a spending insights feature that summarises a user's financial activity. I analysed its positioning strategy — how it's framed, who it targets, and what it competes against — to understand whether the GTM approach matches user behaviour.",
      },
      {
        label: "Key Finding",
        text: "The money report's real competitor isn't another fintech app — it's the bank statement. Most users have never seen their spending patterns presented clearly. The report's value isn't analytical sophistication — it's the simple act of making money legible for the first time.",
      },
      {
        label: "The Core Insight",
        text: "Positioning wins when it names the enemy clearly. Jupiter's money report should be positioned against the confusing bank statement you ignore every month — not against Walnut, Fi, or any other app. When you name the right enemy, users immediately understand your value without needing a feature comparison.",
      },
      {
        label: "As Product Manager, I Would",
        text: "Reframe the GTM narrative: your bank sends you a statement, we send you clarity. Use the money report as a top-of-funnel acquisition hook — shareable, visual, and positioned as the antidote to financial confusion. Test social sharing of anonymised spending insights as a growth loop.",
      },
    ],
  },
  {
    slug: "razorpay_launch",
    number: "12",
    type: "Launch Strategy · Case Study 12",
    title: "Razorpay Merchant Loan Launch",
    hook:
      "Alpha must test assumptions, not features — first users should break your riskiest hypothesis.",
    category: "Launch",
    insight:
      "Alpha must test assumptions not features — first users should break your riskiest hypothesis",
    summary:
      "Evaluated Razorpay's merchant lending alpha and argued the riskiest assumption was credit underwriting, not product-market fit.",
    skills: ["Launch", "B2B GTM"],
    tags: [
      "Alpha Launch",
      "Hypothesis Testing",
      "B2B GTM",
      "Credit Risk",
      "Lending Products",
      "Razorpay",
    ],
    sections: [
      {
        label: "Context",
        text: "Razorpay launched a merchant lending product — offering working capital loans to businesses already processing payments through their gateway. I analysed their alpha launch strategy to evaluate whether it was designed to learn or just to ship.",
      },
      {
        label: "Key Finding",
        text: "The riskiest assumption wasn't will merchants want loans (they obviously do) — it was can Razorpay assess credit risk using transaction data alone? The alpha needed to test this underwriting hypothesis with a small, controlled cohort before scaling distribution.",
      },
      {
        label: "The Core Insight",
        text: "Alpha must test assumptions, not features. Most teams use alpha launches to validate UX or gather feedback on interface design. But the real risk in a lending product is the credit model — if the underwriting thesis is wrong, a beautiful UI doesn't matter. First users should break your riskiest hypothesis, not admire your design.",
      },
      {
        label: "As Product Manager, I Would",
        text: "Design the alpha cohort around risk diversity — include merchants with varying transaction volumes, seasonality patterns, and industry verticals. Measure not just loan uptake, but repayment behaviour against predictions. The alpha succeeds if the credit model's assumptions survive contact with real borrowers.",
      },
    ],
  },
];

export const featuredCaseStudies = caseStudies.filter((c) => c.featured);

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}

export const COVERAGE_AREAS = [
  "Greater Toronto Area",
  "Kitchener-Waterloo",
  "Hamilton",
  "Ottawa",
  "Mississauga",
  "Brampton",
  "Oakville",
  "Burlington",
];

export const BENEFITS = [
  {
    n: "01",
    title: "Your data never leaves your office.",
    body: "Local AI runs on hardware you own. No cloud uploads. No vendor reading your prompts. Client files stay where they belong — behind your firewall.",
    foot: "ON-PREM • OFFLINE-CAPABLE",
  },
  {
    n: "02",
    title: "One flat fee. No per-seat surprises.",
    body: "A single setup. Your whole team uses it. No monthly tokens, no usage tiers, no cost that grows with adoption.",
    foot: "FIXED-COST • UNCAPPED USERS",
  },
  {
    n: "03",
    title: "Set up in person. Same day.",
    body: "I drive to your office, install on your machine, and walk your staff through it. You start using it before I leave.",
    foot: "ON-SITE • ONTARIO-WIDE",
  },
];

export const INDUSTRIES = [
  {
    n: "01",
    name: "Law Firms",
    risk: "Solicitor-client privilege broken the moment a brief is pasted into ChatGPT.",
    solve: "A private model trained on your firm's playbooks. Drafts contracts and summarizes discovery — without sending a word to OpenAI.",
  },
  {
    n: "02",
    name: "Medical Clinics",
    risk: "PHIPA violations from any cloud tool that touches patient records.",
    solve: "On-premise transcription and intake summarization. PHI never leaves the clinic network.",
  },
  {
    n: "03",
    name: "Accounting & Tax",
    risk: "Client financials and SINs sitting in a third-party AI vendor's logs.",
    solve: "Local document Q&A across years of returns. Search a client's file in seconds, with zero data egress.",
  },
];

export const STEPS = [
  {
    n: "01",
    title: "Discovery call",
    body: "30 minutes. We map your workflow and identify the two or three tasks that will save the most time.",
    time: "30 MIN",
  },
  {
    n: "02",
    title: "Hardware check",
    body: "I confirm your existing machine works, or spec a small workstation. Most setups need 8GB RAM minimum.",
    time: "SAME DAY",
  },
  {
    n: "03",
    title: "On-site install",
    body: "I drive to your office, install Ollama and the interface, and load a model tuned for your industry.",
    time: "2–3 HOURS",
  },
  {
    n: "04",
    title: "Hands-on training",
    body: "Your team practices real tasks with me beside them. You leave knowing how to use it.",
    time: "1 HOUR",
  },
];

export const SERVICE_GROUPS = [
  {
    id: "setup",
    label: "Setup Services",
    items: [
      {
        n: "S-01",
        name: "Private AI Workstation",
        desc: "Local LLM installed on your existing hardware with a private chat interface.",
        price: "Starting at $500",
        priceNote: "one-time",
        what: ["Ollama runtime + Open WebUI", "Two models tuned for your work", "Encrypted local storage"],
        deliv: ["On-site install (2–3 hrs)", "Staff training session", "30 days of email support"],
      },
      {
        n: "S-02",
        name: "Document Knowledge Base",
        desc: "RAG pipeline so the AI can answer questions across your firm's documents.",
        price: "$300",
        priceNote: "one-time add-on",
        what: ["Vector store + ingest pipeline", "Citations on every answer", "Version history"],
        deliv: ["Initial corpus indexed", "Ingest folder watcher", "Audit log for compliance"],
      },
      {
        n: "S-03",
        name: "Compliance-Ready Deployment",
        desc: "Hardened install for regulated industries. PIPEDA / PHIPA / FINTRAC aware.",
        price: "On request",
        priceNote: "scoped per engagement",
        what: ["Encrypted disk + locked-down OS", "Retention & access policies", "Compliance attestation doc"],
        deliv: ["Full audit trail", "Retention rules wired in", "Quarterly review on request"],
      },
    ],
  },
  {
    id: "support",
    label: "Ongoing Support",
    items: [
      {
        n: "M-01",
        name: "Maintenance & Updates",
        desc: "Monthly patches, model updates, and a check-in to make sure it's still working for you.",
        price: "$150–$300/mo",
        priceNote: "month-to-month",
        what: ["Monthly patch cycle", "Model upgrades when relevant", "Backup verification"],
        deliv: ["Email + phone support", "30-min monthly check-in", "Pause anytime"],
      },
      {
        n: "M-02",
        name: "Priority Response",
        desc: "Same-day response for issues, with on-site visits inside the GTA when needed.",
        price: "On request",
        priceNote: "month-to-month",
        what: ["Same-business-day response", "On-site visits in GTA", "Emergency hardware swap"],
        deliv: ["Direct phone line", "4-hour response SLA", "Quarterly tune-up"],
      },
    ],
  },
  {
    id: "custom",
    label: "Custom Builds",
    items: [
      {
        n: "C-01",
        name: "Workflow Automation",
        desc: "A specific bottleneck — intake forms, file routing, summary generation — automated end to end.",
        price: "$800–$2,500",
        priceNote: "per project",
        what: ["Discovery + scoping doc", "Custom prompts and tooling", "Integration with your stack"],
        deliv: ["Working pipeline", "Documentation", "Two rounds of revisions"],
      },
      {
        n: "C-02",
        name: "Internal Assistant",
        desc: "An AI assistant trained on your firm's voice, templates, and prior work.",
        price: "Quoted",
        priceNote: "by scope",
        what: ["Custom system prompts", "Style + voice tuning", "Template library"],
        deliv: ["Branded interface", "Admin controls", "Staff training"],
      },
    ],
  },
];

export const CREDENTIALS = [
  { org: "Middlesex University", role: "MSc Computer Science · London, UK", year: "Distinction" },
  { org: "Lighthouse Labs", role: "Web Development Diploma", year: "2025" },
  { org: "Microsoft", role: "Datacenter Technician · HK & Toronto", year: "Enterprise" },
  { org: "FDM Group", role: "IT Consultant · onsite at TD Bank", year: "Bay Street" },
  { org: "Rogers Communications", role: "Technology Sales", year: "Telecom" },
];

export const TECH_STACK = ["Ollama", "Open WebUI", "Claude API", "Python", "RAG", "Linux", "Windows Server"];

export const FRAMEWORKS = [
  { name: "PIPEDA", desc: "Canada's federal privacy law for personal information in commerce." },
  { name: "Solicitor–Client Privilege", desc: "Legal confidentiality preserved by keeping AI on-premise." },
  { name: "PHIPA", desc: "Ontario's Personal Health Information Protection Act." },
  { name: "FINTRAC", desc: "Federal anti-money-laundering reporting and record-keeping rules." },
];

export const HERO_HEADLINES = [
  { display: "Private AI, installed in your office.", em: "installed in your office." },
  { display: "AI your clients' data stays out of.", em: "stays out of." },
  { display: "Enterprise-grade AI. On your hardware.", em: "On your hardware." },
];

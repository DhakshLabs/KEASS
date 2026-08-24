export const company = {
  name: "KEAAS",
  formal: "Knowledge & Expertise as a Service",
  tagline: "Expertise Delivered.",
  email: "hello@keaas.com",
  description:
    "Experts-as-a-Service company delivering on-demand functional and technical expertise to System Integrators worldwide.",
};

export const nav = [
  { href: "/about", label: "About" },
  { href: "/why-keaas", label: "Why KEAAS" },
  { href: "/approach", label: "Approach" },
  { href: "/experts", label: "Experts" },
  { href: "/insights", label: "Insights" },
  { href: "/leadership", label: "Leadership" },
] as const;

export const propositions = [
  {
    id: "01",
    title: "Agile",
    copy: "Access specialized expertise when you need it.",
  },
  {
    id: "02",
    title: "Integrated",
    copy: "We work inside your delivery ecosystem.",
  },
  {
    id: "03",
    title: "Global",
    copy: "Specialized talent aligned to your geography and time zone.",
  },
  {
    id: "04",
    title: "Trusted",
    copy: "Experienced professionals with proven enterprise exposure.",
  },
  {
    id: "05",
    title: "Results",
    copy: "Expertise that moves projects forward.",
  },
] as const;

export const differences = [
  {
    id: "01",
    title: "Curated Experts",
    copy: "Rigorously screened for skills, experience and cultural fit.",
  },
  {
    id: "02",
    title: "Domain Depth",
    copy: "Deep functional and technical knowledge across enterprise platforms.",
  },
  {
    id: "03",
    title: "Flexible Engagements",
    copy: "Hourly, part-time, full-time or project-based.",
  },
  {
    id: "04",
    title: "Seamless Integration",
    copy: "We adapt to your processes, tools and ways of working.",
  },
  {
    id: "05",
    title: "Measurable Impact",
    copy: "Focused on outcomes that move delivery forward.",
  },
] as const;

export const process = [
  {
    id: "01",
    title: "Understand",
    copy: "We understand your requirements, ecosystem and challenges.",
  },
  {
    id: "02",
    title: "Match",
    copy: "We identify the right expert based on domain, technology and experience.",
  },
  {
    id: "03",
    title: "Onboard",
    copy: "Quick onboarding and alignment with your team.",
  },
  {
    id: "04",
    title: "Deliver",
    copy: "Experts integrate, collaborate and deliver results.",
  },
  {
    id: "05",
    title: "Optimize",
    copy: "Continuous feedback to improve and scale success.",
  },
] as const;

export const outcomes = [
  {
    title: "Reduce Time-to-Market",
    copy: "Specialists join live programmes without a lengthy hiring cycle.",
  },
  {
    title: "Optimize Delivery Capacity",
    copy: "Scale the bench around peak demand, not permanent headcount.",
  },
  {
    title: "Improve Project Margins",
    copy: "Deploy the precise skill, for the precise window, at the right cost.",
  },
  {
    title: "Access Specialized Skills Instantly",
    copy: "SAP, integration, data and architecture expertise on demand.",
  },
] as const;

export const experts = [
  {
    slug: "erp-consultant",
    role: "ERP Consultant",
    experience: "15+ years typical depth",
    specialization: "SAP S/4HANA, Finance, Controlling",
    summary:
      "Finance transformation workstreams for multi-country S/4HANA programmes, with depth in controlling design and close acceleration.",
  },
  {
    slug: "technical-architect",
    role: "Technical Architect",
    experience: "12+ years typical depth",
    specialization: "Solution Architecture, Integration, Cloud",
    summary:
      "Target architectures for System Integrators delivering hybrid SAP and cloud landscapes.",
  },
  {
    slug: "integration-specialist",
    role: "Integration Specialist",
    experience: "10+ years typical depth",
    specialization: "SAP, APIs, Middleware",
    summary:
      "Integration layers across SAP BTP, middleware and partner APIs, written for operators who inherit the landscape.",
  },
  {
    slug: "data-analyst",
    role: "Data Analyst",
    experience: "8+ years typical depth",
    specialization: "Analytics, Reporting, Visualization",
    summary:
      "Programme data turned into decision-ready reporting, from cutover dashboards to value-tracking packs.",
  },
  {
    slug: "project-manager",
    role: "Project Manager",
    experience: "12+ years typical depth",
    specialization: "Agile, Delivery, Stakeholder Management",
    summary:
      "Complex SI workstreams with disciplined governance, RAID control and clear stakeholder communication.",
  },
] as const;

export const testimonials = [
  {
    featured: true,
    quote:
      "KEAAS provided us the right SAP FICO expertise at the right time. Their flexibility and quality of talent are unmatched.",
    role: "Director of Finance Transformation",
    company: "Global System Integrator, EMEA",
  },
  {
    featured: false,
    quote:
      "We needed a technical architect within ten days. KEAAS matched, onboarded and had the expert contributing in the second week.",
    role: "Programme Director",
    company: "Delivery Leadership, APAC",
  },
  {
    featured: false,
    quote:
      "The reliability is what we keep coming back for. The experts work as part of our team, not as visitors on the edge of it.",
    role: "Partner, Enterprise Applications",
    company: "Practice Lead, Americas",
  },
] as const;

export const insights = [
  {
    slug: "future-of-erp-2026",
    category: "Enterprise Platforms",
    title: "The Future of ERP: Trends Shaping 2026 and Beyond",
    date: "12 March 2026",
    readTime: "8 min",
    image: "/images/insight-erp.jpg",
    excerpt:
      "How System Integrators should prepare for composable ERP, cleaner cores and a scarcer market for true functional depth.",
    body: [
      "Enterprise resource planning is no longer a single-suite conversation. System Integrators are being asked to deliver cleaner cores, more disciplined extensions and faster value stories — often with the same delivery bench they had three years ago.",
      "Three forces will define 2026 and beyond. First, the move from monolithic customisation to a clean core with a governed side-by-side estate. Second, the rise of industry-specific process depth as a differentiator, not a commodity. Third, a structural shortage of consultants who have actually closed a books cycle, not merely configured a chart of accounts.",
      "KEAAS works with SI partners who treat expertise as infrastructure. The firms that win the next wave of ERP programmes will not be those with the largest bench. They will be those who can place the right specialist, in the right workstream, at the exact moment the programme needs them.",
      "For delivery leaders, the implication is practical. Build a thinner permanent core. Surround it with curated, on-demand depth. Measure experts by the movement of the plan, not by the hours they occupy a seat.",
    ],
  },
  {
    slug: "high-performing-extended-teams",
    category: "Delivery",
    title: "Building High-Performing Extended Teams",
    date: "4 February 2026",
    readTime: "6 min",
    image: "/images/insight-teams.jpg",
    excerpt:
      "Extended teams fail when they are treated as overflow. They succeed when they inherit your operating system.",
    body: [
      "Most extended-team models fail for a simple reason: the expert is asked to deliver inside a system they have not been shown. Access arrives late. Rituals are implied. Decision rights stay unspoken.",
      "High-performing SI programmes treat KEAAS experts as an extension of the delivery system, not as a contractor parked at the edge. That means a named counterpart, a defined workstream, a shared RAID log and a two-week onboarding that is as disciplined as a client kick-off.",
      "The cultural test is equally precise. An expert who has worked inside regulated, multi-country programmes already understands how an SI speaks to a client. Screening for that fluency is as important as screening for the module.",
      "When the operating system is shared, extended teams stop being a capacity patch and become a growth instrument.",
    ],
  },
  {
    slug: "global-talent-local-impact",
    category: "EaaS",
    title: "Global Talent, Local Impact: The EaaS Advantage",
    date: "18 January 2026",
    readTime: "7 min",
    image: "/images/insight-global.jpg",
    excerpt:
      "Geography still matters. Time zones, language and regulatory context decide whether expertise lands — or merely arrives.",
    body: [
      "Global talent is not the same as interchangeable talent. A controlling specialist in Mumbai can be exactly right for a Frankfurt close — if the time-zone overlap, the language of the steering pack and the local statutory context have been designed for.",
      "Experts-as-a-Service works when the matching logic is geographic as well as technical. KEAAS aligns specialists to the SI’s delivery theatre across India, the United Arab Emirates and the United Kingdom.",
      "The commercial effect is quiet and material. Programmes stop paying for the wrong seniority in the wrong city. Clients stop feeling the seam between the SI team and the specialist who joined in week six.",
      "Local impact is the point. Global reach is only the method.",
    ],
  },
] as const;

export const services = [
  {
    slug: "functional-experts",
    title: "Functional Experts",
    summary:
      "Finance, controlling, supply chain, HR and industry process specialists who have delivered inside live SI programmes.",
    detail:
      "Functional depth is the scarcest resource on most enterprise programmes. KEAAS provides consultants who have designed, configured and stabilised processes — not merely documented them. Engagements range from a four-week design sprint to a multi-year workstream lead.",
  },
  {
    slug: "technical-experts",
    title: "Technical Experts",
    summary:
      "Architects, integration specialists and platform engineers who make landscapes operable.",
    detail:
      "From S/4HANA technical architecture to API and middleware design, KEAAS technical experts join SI teams with the discipline of an internal principal. They write for the operators who will inherit the landscape, not only for the slide that wins the next gate.",
  },
  {
    slug: "project-acceleration",
    title: "Project Acceleration",
    summary:
      "Targeted expertise to unblock programmes that are slipping on skill, not on intent.",
    detail:
      "When a workstream stalls, adding generalist capacity rarely restores the plan. KEAAS deploys a precise specialist — often within days — to recover design decisions, cutover readiness or integration defects that are holding the critical path.",
  },
  {
    slug: "managed-solutions",
    title: "Managed Solutions",
    summary:
      "A curated pod of experts owned as a single, accountable extension of your delivery organisation.",
    detail:
      "For SI partners running a portfolio of programmes, KEAAS can stand up a managed expert cell: a named lead, a standing bench and a shared operating cadence. You retain the client relationship. We retain the specialist quality.",
  },
] as const;

export const careers = [
  {
    title: "Senior ERP Consultant — Finance",
    location: "Remote · India / UAE / UK",
    type: "Expert network",
  },
  {
    title: "Integration Architect",
    location: "Remote · India / UAE / UK",
    type: "Expert network",
  },
  {
    title: "Partner Development Manager",
    location: "Mumbai or Dubai",
    type: "Full-time",
  },
] as const;

export const caseStudies = [
  {
    slug: "s4hana-finance-emea",
    client: "Global SI · EMEA",
    title: "S/4HANA Finance workstream recovered in six weeks",
    result: "Critical-path design decisions closed; UAT entered on the reset plan.",
  },
  {
    slug: "integration-apac-cutover",
    client: "Regional SI · APAC",
    title: "Cutover integration defects cleared ahead of go-live",
    result: "Fourteen priority interfaces stabilised; hypercare reduced by a third.",
  },
  {
    slug: "architecture-americas",
    client: "National SI · India",
    title: "Target architecture for a hybrid cloud programme",
    result: "Board-ready landscape decision in twenty-two days.",
  },
] as const;

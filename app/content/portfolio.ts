export interface NavigationItem {
  label: string;
  href: `#${string}`;
}

export interface WorkItem {
  title: string;
  eyebrow: string;
  summary: string;
  details: readonly string[];
  technologies: readonly string[];
  href?: string;
  linkLabel?: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  evidence: readonly string[];
  technologies: readonly string[];
}

export interface TechnicalGroup {
  label: string;
  items: readonly string[];
}

export interface ContactLink {
  label: "Email" | "LinkedIn" | "GitHub" | "CV";
  href: string;
  external: boolean;
}

export const profile = {
  name: "Darian Baker",
  role: "Backend Software Developer",
  headline: "Thoughtful systems. Dependable delivery.",
  intro: "I build production services, internal platforms, and developer tools with clarity.",
  location: "Based in Malta",
  mobility: "Open to local, remote, and relocation opportunities.",
  about:
    "I'm Darian, a backend developer at Religa with a full-stack background from GiG. I care about systems that remain understandable as the codebase, architecture, and team grow.",
} as const;

const metadataTitle = "Darian Baker — Backend Software Developer";
const metadataDescription =
  "Backend Software Developer in Malta building production services, internal platforms, and developer tools with C# and .NET.";

export const siteMetadata = {
  title: metadataTitle,
  description: metadataDescription,
  openGraph: {
    title: metadataTitle,
    description: metadataDescription,
  },
} as const;

export const navigation = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const satisfies readonly NavigationItem[];

export const selectedWork = [
  {
    eyebrow: "CURRENT ROLE",
    title: "Religa — backend systems",
    summary:
      "Backend systems work across production services and a growing microservice estate.",
    details: [
      "Built a production microservice for high-value win alerting.",
      "Documents and helps align a 30+ microservice estate across seven implementation languages to reduce fragmentation.",
    ],
    technologies: [
      "C#",
      ".NET",
      "PHP",
      "Laravel",
      "TypeScript",
      "Next.js",
      "MySQL",
      "SQL Server",
      "Kafka",
      "EMQX/MQTT",
      "Protocol Buffers",
      "Redis",
      "Grafana",
      "Docker",
      "AWS",
    ],
  },
  {
    eyebrow: "OPEN-SOURCE TOOLING",
    title: "Multi-Codex",
    summary:
      "A maintained OpenAI Codex fork with original subsystems authored by Darian for account pooling and dependable local use.",
    details: [
      "Authored a Rust account-pooling proxy with routing and failover.",
      "Built authentication and setup flows, a Windows installer, self-check tooling, documentation, and real-run verification.",
    ],
    technologies: ["Rust", "OpenAI Codex", "Windows"],
    href: "https://github.com/DarianBaker/Multi-Codex",
    linkLabel: "View Multi-Codex on GitHub",
  },
  {
    eyebrow: "DEVELOPER TOOLING",
    title: "BakeThere CLI",
    summary:
      "An original TypeScript CLI for copying React and Tailwind components into an application and exporting standalone HTML and CSS.",
    details: [
      "Includes a component registry, three themes, tests, and 31 components.",
    ],
    technologies: ["TypeScript", "React", "Tailwind CSS"],
    href: "https://github.com/DarianBaker/bakethere-cli",
    linkLabel: "View BakeThere CLI on GitHub",
  },
] as const satisfies readonly WorkItem[];

export const experience = [
  {
    company: "Religa (Portomaso Group)",
    role: "Backend Software Developer",
    period: "May 2026 — Present",
    location: "Malta",
    summary:
      "Developing production backend systems while helping make a multi-service architecture easier to understand and align.",
    evidence: [
      "Built a production microservice for high-value win alerting.",
      "Documents and helps align a 30+ microservice estate across seven implementation languages without exposing confidential implementation detail.",
    ],
    technologies: [
      "C#",
      ".NET",
      "PHP",
      "Laravel",
      "Kafka",
      "EMQX/MQTT",
      "Protocol Buffers",
      "Redis",
      "MySQL",
      "SQL Server",
      "Docker",
      "AWS",
      "Grafana",
    ],
  },
  {
    company: "GiG (Gaming Innovation Group)",
    role: "Full Stack Developer",
    period: "May 2025 — May 2026",
    location: "Malta",
    summary:
      "Delivered frontend and backend for an internal platform used by multiple teams for integrations, account management, configuration, and operations.",
    evidence: [
      "Made the strongest contribution in backend architecture.",
      "Worked with TIM and TAM teams on integrations while DevOps owned deployment.",
    ],
    technologies: ["C#", ".NET", "SQL Server", "Redis", "Docker", "React"],
  },
  {
    company: "Freelance Development",
    role: "Full Stack Developer",
    period: "January 2023 — May 2025",
    location: "Malta",
    summary:
      "Delivered web and backend work across client and game-development engagements.",
    evidence: [
      "Built Next.js web work and Node, Express, and MongoDB backends.",
      "Contributed to Bertus Gym, BargainToolShop.com, and game-development engagements.",
    ],
    technologies: ["TypeScript", "Next.js", "Node.js", "Express", "MongoDB"],
  },
] as const satisfies readonly ExperienceItem[];

export const technicalPractice = [
  { label: "Backend", items: ["C#", ".NET", "PHP", "Laravel", "Node.js", "Express"] },
  {
    label: "Messaging and data",
    items: [
      "Kafka",
      "EMQX/MQTT",
      "Protocol Buffers",
      "Redis",
      "MySQL",
      "SQL Server",
      "MongoDB",
    ],
  },
  { label: "Delivery and observability", items: ["Docker", "AWS", "Grafana", "Git"] },
  { label: "Full-stack context", items: ["TypeScript", "Next.js", "React"] },
] as const satisfies readonly TechnicalGroup[];

export const supportingNotes = {
  education: "Studied Software Development at the University of Malta.",
  openSource:
    "Contributed to Microsoft's ASP.NET Core repository in the ResponseDrainingTests area, working within a large production-grade codebase and its review process.",
  gameDevelopment: "Game development is part of my earlier professional background.",
} as const;

export const contactLinks = [
  { label: "Email", href: "mailto:Darianbakerbray@gmail.com", external: false },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/darian-baker-1402b2327/",
    external: true,
  },
  { label: "GitHub", href: "https://github.com/DarianBaker", external: true },
  { label: "CV", href: "/file.pdf", external: false },
] as const satisfies readonly ContactLink[];

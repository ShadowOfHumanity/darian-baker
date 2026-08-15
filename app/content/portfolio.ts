export interface NavigationItem {
  label: string;
  href: `#${string}`;
}

export interface WorkItem {
  title: string;
  eyebrow: string;
  role?: string;
  period?: string;
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
  location?: string;
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
  headline: "I build backend systems that stay understandable.",
  intro: "I work on production services at Religa and build developer tools in my own time.",
  location: "Based in Malta",
  mobility: "Open to local, remote, or relocation opportunities.",
  about:
    "Before Religa, I worked across the frontend and backend at GiG. My strongest work was in backend architecture, which is where I chose to focus.",
} as const;

const metadataTitle = "Darian Baker | Backend Software Developer";
const metadataDescription =
  "Backend Software Developer in Malta working with C#, .NET, microservices, and internal platforms.";

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
    title: "Religa: backend systems",
    role: "Mid-level Backend Software Developer",
    period: "May 2026 to present",
    summary: "I work on production backend services and help standardize a large microservice estate.",
    details: [
      "I built a production service that alerts the team when a player wins big.",
      "I document a 30+ service architecture and help reduce the number of implementation languages from seven.",
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
    summary: "Multi-Codex is a maintained OpenAI Codex fork. I added account pooling and the local tools around it.",
    details: [
      "I built a Rust account-pooling proxy with routing and failover.",
      "I also built the authentication and setup flows, Windows installer, self-checks, documentation, and real-run verification.",
    ],
    technologies: ["Rust", "OpenAI Codex", "Windows"],
    href: "https://github.com/DarianBaker/Multi-Codex",
    linkLabel: "View Multi-Codex on GitHub",
  },
  {
    eyebrow: "DEVELOPER TOOLING",
    title: "BakeThere CLI",
    summary:
      "My TypeScript CLI for adding React and Tailwind components to an app, with an option to export plain HTML and CSS.",
    details: [
      "The registry includes 31 components, three themes, and tests.",
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
    period: "May 2026 to present",
    location: "Malta",
    summary: "I build backend services and help make a 30+ service architecture easier to work with.",
    evidence: [
      "I built a production service that alerts the team when a player wins big.",
      "I document the architecture and help reduce the number of implementation languages from seven.",
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
    period: "May 2025 to May 2026",
    location: "Malta",
    summary: "I worked on both frontend and backend for an internal platform used by several teams.",
    evidence: [
      "My strongest work was in backend architecture.",
      "The platform supported integrations, account management, configuration, and operations. DevOps owned deployment, while TIM and TAM teams handled integrations.",
    ],
    technologies: ["C#", ".NET", "SQL Server", "Redis", "Docker", "React"],
  },
  {
    company: "Freelance Development",
    role: "Full Stack Developer",
    period: "January 2023 to May 2025",
    summary: "I built websites and backend systems for clients, along with some game development work.",
    evidence: [
      "I used Next.js for web work and Node, Express, and MongoDB for backend projects.",
      "I worked on Bertus Gym, BargainToolShop.com, and freelance game projects.",
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
  gameDevelopment: "I also spent part of my freelance career working on games.",
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

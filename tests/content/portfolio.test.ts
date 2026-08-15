import { describe, expect, it } from "vitest";
import {
  contactLinks,
  experience,
  profile,
  selectedWork,
  siteMetadata,
  supportingNotes,
} from "@/app/content/portfolio";

describe("portfolio content", () => {
  it("positions Darian as a backend developer with current Religa context", () => {
    expect(profile.role).toBe("Backend Software Developer");
    expect(profile.headline).toBe("I build backend systems that stay understandable.");
    expect(profile.location).toBe("Based in Malta");
    expect(experience[0]).toMatchObject({
      company: "Religa (Portomaso Group)",
      role: "Backend Software Developer",
      period: "May 2026 to present",
    });
    expect(selectedWork[0]).toMatchObject({
      title: "Religa: backend systems",
      role: "Mid-level Backend Software Developer",
      period: "May 2026 to present",
    });
  });

  it("attributes Multi-Codex to upstream OpenAI Codex and Darian's original work", () => {
    const project = selectedWork.find((item) => item.title === "Multi-Codex");
    expect(project?.summary).toContain("OpenAI Codex fork");
    expect(project?.details.join(" ")).toContain("account-pooling proxy");
    expect(project?.href).toBe("https://github.com/DarianBaker/Multi-Codex");
  });

  it("publishes experience locations only where they are verified", () => {
    expect(experience[0].location).toBe("Malta");
    expect(experience[1].location).toBe("Malta");
    expect(experience[2]).not.toHaveProperty("location");
  });

  it("keeps supporting claims narrow and accurate", () => {
    expect(supportingNotes.education).toBe(
      "Studied Software Development at the University of Malta.",
    );
    expect(supportingNotes.openSource).toBe(
      "Contributed to Microsoft's ASP.NET Core repository in the ResponseDrainingTests area, working within a large production-grade codebase and its review process.",
    );
  });

  it("publishes only the approved direct contact destinations", () => {
    expect(contactLinks.map(({ label, href }) => ({ label, href }))).toEqual([
      { label: "Email", href: "mailto:Darianbakerbray@gmail.com" },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/darian-baker-1402b2327/",
      },
      { label: "GitHub", href: "https://github.com/DarianBaker" },
      { label: "CV", href: "/file.pdf" },
    ]);
  });

  it("publishes the approved metadata positioning from the content model", () => {
    expect(siteMetadata).toEqual({
      title: "Darian Baker | Backend Software Developer",
      description:
        "Backend Software Developer in Malta working with C#, .NET, microservices, and internal platforms.",
      openGraph: {
        title: "Darian Baker | Backend Software Developer",
        description:
          "Backend Software Developer in Malta working with C#, .NET, microservices, and internal platforms.",
      },
    });
  });

  it("uses direct copy without AI-styled punctuation", () => {
    const publicCopy = JSON.stringify({
      experience,
      profile,
      selectedWork,
      siteMetadata,
      supportingNotes,
    });

    expect(publicCopy).not.toMatch(/[—–·“”]/u);
    expect(profile.intro).toBe(
      "I work on production services at Religa and build developer tools in my own time.",
    );
    expect(profile.about).toBe(
      "Before Religa, I worked across the frontend and backend at GiG. My strongest work was in backend architecture, which is where I chose to focus.",
    );
  });
});

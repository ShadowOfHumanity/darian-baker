import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ContactFooter from "@/app/components/ContactFooter";
import TechnicalPractice from "@/app/components/TechnicalPractice";

describe("supporting portfolio content", () => {
  it("groups demonstrated technologies without proficiency ratings", () => {
    render(<TechnicalPractice />);
    expect(screen.getByRole("heading", { name: "Backend" })).toBeInTheDocument();
    expect(screen.getByText("Kafka")).toBeInTheDocument();
    expect(screen.getByText("Grafana")).toBeInTheDocument();
    expect(screen.queryByText(/expert|advanced|intermediate/i)).not.toBeInTheDocument();
    expect(
      screen.getByText("Studied Software Development at the University of Malta."),
    ).toBeInTheDocument();
    expect(screen.getByText(/ResponseDrainingTests area/)).toBeInTheDocument();
  });

  it("offers direct contact and CV links without a form or availability claim", () => {
    render(<ContactFooter />);
    const emailLink = screen.getByRole("link", { name: "Email" });
    const linkedInLink = screen.getByRole("link", { name: "LinkedIn" });
    const githubLink = screen.getByRole("link", { name: "GitHub" });
    const cvLink = screen.getByRole("link", { name: "CV" });

    expect(emailLink).toHaveAttribute(
      "href",
      "mailto:Darianbakerbray@gmail.com",
    );
    expect(emailLink).not.toHaveAttribute("target");
    expect(emailLink).not.toHaveAttribute("rel");
    expect(linkedInLink).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/darian-baker-1402b2327/",
    );
    expect(linkedInLink).toHaveAttribute("target", "_blank");
    expect(linkedInLink.getAttribute("rel")?.split(/\s+/)).toEqual(
      expect.arrayContaining(["noopener", "noreferrer"]),
    );
    expect(githubLink).toHaveAttribute("href", "https://github.com/DarianBaker");
    expect(githubLink).toHaveAttribute("target", "_blank");
    expect(githubLink.getAttribute("rel")?.split(/\s+/)).toEqual(
      expect.arrayContaining(["noopener", "noreferrer"]),
    );
    expect(cvLink).toHaveAttribute("href", "/file.pdf");
    expect(cvLink).not.toHaveAttribute("target");
    expect(cvLink).not.toHaveAttribute("rel");
    expect(screen.queryByRole("form")).not.toBeInTheDocument();
    expect(screen.queryByText(/available for|actively looking/i)).not.toBeInTheDocument();
  });
});

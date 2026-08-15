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
    expect(screen.getByRole("link", { name: "Email" })).toHaveAttribute(
      "href",
      "mailto:Darianbakerbray@gmail.com",
    );
    expect(screen.getByRole("link", { name: "LinkedIn" })).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/darian-baker-1402b2327/",
    );
    expect(screen.getByRole("link", { name: "CV" })).toHaveAttribute("href", "/file.pdf");
    expect(screen.queryByRole("form")).not.toBeInTheDocument();
    expect(screen.queryByText(/available for|actively looking/i)).not.toBeInTheDocument();
  });
});

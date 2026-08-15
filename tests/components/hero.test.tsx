import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Hero from "@/app/components/Hero";
import SiteHeader from "@/app/components/SiteHeader";

describe("portfolio introduction", () => {
  it("renders semantic navigation to the page sections", () => {
    render(<SiteHeader />);
    const navigation = screen.getByRole("navigation", { name: "Primary" });
    expect(navigation).toHaveTextContent("Darian Baker");
    expect(screen.getByRole("link", { name: "Work" })).toHaveAttribute("href", "#work");
    expect(screen.getByRole("link", { name: "Contact" })).toHaveAttribute("href", "#contact");
  });

  it("introduces Darian with portrait, backend positioning, and selected-work action", () => {
    render(<Hero />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Thoughtful systems. Dependable delivery.",
    );
    expect(screen.getByRole("img", { name: "Darian Baker" })).toBeInTheDocument();
    expect(screen.getByText("Backend Software Developer")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "View selected work" })).toHaveAttribute(
      "href",
      "#work",
    );
    expect(screen.getByText(/backend developer at Religa/i)).toBeInTheDocument();
  });
});

import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "@/app/page";

describe("portfolio homepage", () => {
  it("presents one coherent semantic portfolio", () => {
    render(<Home />);
    expect(screen.getByRole("link", { name: "Skip to content" })).toHaveAttribute(
      "href",
      "#main-content",
    );
    expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
    expect(screen.getByRole("navigation", { name: "Primary" })).toBeInTheDocument();
    expect(screen.getByRole("region", { name: "Selected work" })).toBeInTheDocument();
    expect(screen.getByRole("region", { name: "Experience" })).toBeInTheDocument();
    expect(screen.getByRole("region", { name: "Technical practice" })).toBeInTheDocument();
    expect(screen.getByRole("region", { name: "Contact" })).toBeInTheDocument();
  });

  it("does not expose the old junior or generic portfolio claims", () => {
    render(<Home />);
    expect(screen.queryByText(/years old/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/teas consumed|tea connoisseur/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/years of experience/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/projects completed|projects in production/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/let's build something amazing/i)).not.toBeInTheDocument();
    expect(screen.queryByRole("form")).not.toBeInTheDocument();
  });
});

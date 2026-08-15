import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Experience from "@/app/components/Experience";
import SelectedWork from "@/app/components/SelectedWork";

describe("professional evidence", () => {
  it("shows three selected work items with accurate public attribution", () => {
    render(<SelectedWork />);
    const section = screen.getByRole("region", { name: "Selected work" });
    expect(within(section).getByText("Religa — backend systems")).toBeInTheDocument();
    expect(within(section).getByText("Multi-Codex")).toBeInTheDocument();
    expect(within(section).getByText(/OpenAI Codex fork/i)).toBeInTheDocument();
    expect(within(section).getByRole("link", { name: "View Multi-Codex on GitHub" })).toHaveAttribute(
      "href",
      "https://github.com/DarianBaker/Multi-Codex",
    );
    expect(within(section).getByText("BakeThere CLI")).toBeInTheDocument();
  });

  it("renders the factual Religa, GiG, and freelance history", () => {
    render(<Experience />);
    expect(screen.getByText("Religa (Portomaso Group)")).toBeInTheDocument();
    expect(screen.getByText("May 2026 — Present")).toBeInTheDocument();
    expect(screen.getByText("GiG (Gaming Innovation Group)")).toBeInTheDocument();
    expect(screen.getByText("May 2025 — May 2026")).toBeInTheDocument();
    expect(screen.getByText("Freelance Development")).toBeInTheDocument();
    expect(screen.queryByText(/spearheaded/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/25%/i)).not.toBeInTheDocument();
  });
});

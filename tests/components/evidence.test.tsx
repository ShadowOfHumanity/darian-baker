import { render, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Experience from "@/app/components/Experience";
import SelectedWork from "@/app/components/SelectedWork";

describe("professional evidence", () => {
  it("renders exactly three selected work articles with current Religa evidence", () => {
    const { container } = render(<SelectedWork />);
    const section = within(container).getByRole("region", { name: "Selected work" });
    const articles = within(section).getAllByRole("article");
    const religaArticle = within(section)
      .getByRole("heading", { name: "Religa — backend systems" })
      .closest("article");

    expect(articles).toHaveLength(3);
    expect(religaArticle).not.toBeNull();
    expect(within(religaArticle as HTMLElement).getByText("Mid-level Backend Software Developer"))
      .toBeInTheDocument();
    expect(within(religaArticle as HTMLElement).getByText("May 2026 — Present"))
      .toBeInTheDocument();
  });

  it("attributes public work accurately and opens both project links safely", () => {
    const { container } = render(<SelectedWork />);
    const section = within(container).getByRole("region", { name: "Selected work" });
    const multiCodexLink = within(section).getByRole("link", {
      name: "View Multi-Codex on GitHub",
    });
    const bakeThereLink = within(section).getByRole("link", {
      name: "View BakeThere CLI on GitHub",
    });

    expect(within(section).getByText("Multi-Codex")).toBeInTheDocument();
    expect(within(section).getByText(/OpenAI Codex fork/i)).toBeInTheDocument();
    expect(multiCodexLink).toHaveAttribute(
      "href",
      "https://github.com/DarianBaker/Multi-Codex",
    );
    expect(multiCodexLink).toHaveAttribute("target", "_blank");
    expect(multiCodexLink.getAttribute("rel")?.split(/\s+/)).toEqual(
      expect.arrayContaining(["noopener", "noreferrer"]),
    );
    expect(within(section).getByText("BakeThere CLI")).toBeInTheDocument();
    expect(bakeThereLink).toHaveAttribute(
      "href",
      "https://github.com/DarianBaker/bakethere-cli",
    );
    expect(bakeThereLink).toHaveAttribute("target", "_blank");
    expect(bakeThereLink.getAttribute("rel")?.split(/\s+/)).toEqual(
      expect.arrayContaining(["noopener", "noreferrer"]),
    );
  });

  it("renders the factual Religa, GiG, and freelance history", () => {
    const { container } = render(<Experience />);
    const view = within(container);
    const religaArticle = view.getByText("Religa (Portomaso Group)").closest("article");
    const gigArticle = view.getByText("GiG (Gaming Innovation Group)").closest("article");
    const freelanceArticle = view.getByText("Freelance Development").closest("article");

    expect(view.getByText("Religa (Portomaso Group)")).toBeInTheDocument();
    expect(view.getByText("May 2026 — Present")).toBeInTheDocument();
    expect(view.getByText("GiG (Gaming Innovation Group)")).toBeInTheDocument();
    expect(view.getByText("May 2025 — May 2026")).toBeInTheDocument();
    expect(view.getByText("Freelance Development")).toBeInTheDocument();
    expect(within(religaArticle as HTMLElement).getByText("Malta")).toBeInTheDocument();
    expect(within(gigArticle as HTMLElement).getByText("Malta")).toBeInTheDocument();
    expect(within(freelanceArticle as HTMLElement).queryByText("Malta")).not.toBeInTheDocument();
    expect(view.queryByText(/spearheaded/i)).not.toBeInTheDocument();
    expect(view.queryByText(/25%/i)).not.toBeInTheDocument();
  });
});

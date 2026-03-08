import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import StatsSection from "../StatsSection";

describe("StatsSection", () => {
  it("renders all stat labels", () => {
    render(<StatsSection />);
    expect(screen.getByText("Students Trained")).toBeInTheDocument();
    expect(screen.getByText("Placement Rate")).toBeInTheDocument();
    expect(screen.getByText("College Partners")).toBeInTheDocument();
    expect(screen.getByText("Industry Programs")).toBeInTheDocument();
  });

  it("renders initial counter values of 0", () => {
    render(<StatsSection />);
    // Counters start at 0 before intersection triggers animation
    const zeros = screen.getAllByText(/^0/);
    expect(zeros.length).toBeGreaterThanOrEqual(4);
  });

  it("renders stat icons", () => {
    render(<StatsSection />);
    const icons = document.querySelectorAll("svg");
    expect(icons.length).toBe(4);
  });
});

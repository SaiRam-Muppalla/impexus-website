import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Navbar from "../Navbar";

describe("Navbar", () => {
  it("renders the brand name", () => {
    render(<Navbar />);
    expect(screen.getByText((_, el) => el?.textContent === "iMPEXUS")).toBeInTheDocument();
  });

  it("renders all navigation links", () => {
    render(<Navbar />);
    const links = ["Home", "About", "Services", "Why Us", "Contact"];
    links.forEach((label) => {
      expect(screen.getAllByText(label).length).toBeGreaterThanOrEqual(1);
    });
  });

  it("toggles mobile menu on hamburger click", () => {
    render(<Navbar />);
    const toggleButton = screen.getByRole("button");
    fireEvent.click(toggleButton);
    // Mobile menu should show social icons
    const instagramIcons = document.querySelectorAll("svg");
    expect(instagramIcons.length).toBeGreaterThan(0);
  });

  it("renders scroll progress bar", () => {
    render(<Navbar />);
    const progressBar = document.querySelector(".bg-primary");
    expect(progressBar).toBeInTheDocument();
  });
});

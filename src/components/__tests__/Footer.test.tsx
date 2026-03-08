import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Footer from "../Footer";

describe("Footer", () => {
  it("renders brand name", () => {
    render(<Footer />);
    expect(screen.getByText("MPEX")).toBeInTheDocument();
  });

  it("renders quick links pointing to correct sections", () => {
    render(<Footer />);
    const whyUsLink = screen.getByText("Why Us");
    expect(whyUsLink.closest("a")).toHaveAttribute("href", "#programs");
  });

  it("renders program list", () => {
    render(<Footer />);
    expect(screen.getByText("Full Stack Development")).toBeInTheDocument();
    expect(screen.getByText("AI & Machine Learning")).toBeInTheDocument();
    expect(screen.getByText("Cybersecurity")).toBeInTheDocument();
  });

  it("renders contact information", () => {
    render(<Footer />);
    expect(screen.getByText("+91 7013547471")).toBeInTheDocument();
    expect(screen.getByText("info@impexuss.com")).toBeInTheDocument();
    expect(screen.getByText("Hyderabad, India")).toBeInTheDocument();
  });

  it("renders copyright text", () => {
    render(<Footer />);
    expect(screen.getByText(/© 2025 Impexus Technologies/)).toBeInTheDocument();
  });

  it("renders back to top button", () => {
    render(<Footer />);
    expect(screen.getByText("Back to top")).toBeInTheDocument();
  });

  it("renders social media icons", () => {
    render(<Footer />);
    const socialIcons = document.querySelectorAll("footer svg");
    // 4 social icons + 1 ArrowUp icon
    expect(socialIcons.length).toBe(5);
  });
});

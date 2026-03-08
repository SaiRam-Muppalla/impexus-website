import { describe, it, expect } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ContactSection from "../ContactSection";

describe("ContactSection", () => {
  it("renders the section heading", () => {
    render(<ContactSection />);
    expect(screen.getByText("Impexus")).toBeInTheDocument();
    expect(screen.getByText("Get In Touch")).toBeInTheDocument();
  });

  it("renders contact info cards", () => {
    render(<ContactSection />);
    expect(screen.getByText("+91 7013547471")).toBeInTheDocument();
    expect(screen.getByText("info@impexuss.com")).toBeInTheDocument();
    expect(screen.getByText("Hyderabad, India")).toBeInTheDocument();
  });

  it("renders form fields", () => {
    render(<ContactSection />);
    expect(screen.getByPlaceholderText("John Doe")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("john@example.com")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("+91 XXXXXXXXXX")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Your college name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Tell us about your requirements...")).toBeInTheDocument();
  });

  it("shows validation errors on empty submit", async () => {
    render(<ContactSection />);
    const submitButton = screen.getByRole("button", { name: /send message/i });
    fireEvent.click(submitButton);
    await waitFor(() => {
      expect(screen.getByText("Name is required")).toBeInTheDocument();
    });
  });

  it("renders social links", () => {
    render(<ContactSection />);
    expect(screen.getByText("Instagram")).toBeInTheDocument();
    expect(screen.getByText("LinkedIn")).toBeInTheDocument();
  });
});

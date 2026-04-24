import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import impexusLogo from "@/assets/impexus-logo.jpeg";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#programs" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks.map((l) => document.querySelector(l.href));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            const link = navLinks.find((l) => l.href === `#${id}`);
            if (link) setActive(link.label);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => s && observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/95 backdrop-blur shadow-sm" : "bg-background/80 backdrop-blur"} border-b border-border`} role="navigation" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        <a href="#home" className="flex items-center" aria-label="Impexus Technologies - Home">
          <img
            src={impexusLogo}
            alt="Impexus Technologies - Escalating The Excellence"
            className="h-10 md:h-12 w-auto object-contain"
            width="240"
            height="96"
          />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className={`text-sm font-medium transition-colors relative pb-1 ${
                active === link.label
                  ? "text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:rounded"
                  : "text-foreground/70 hover:text-primary"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className={`md:hidden border-t border-border bg-background overflow-hidden transition-all duration-300 ${open ? "max-h-80 py-4" : "max-h-0 py-0"}`}>
        <div className="px-6 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className={`block text-sm font-medium ${active === link.label ? "text-primary" : "text-foreground/70"}`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

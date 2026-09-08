import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

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
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    const rafId = requestAnimationFrame(() => {
      const sections = navLinks
        .map((l) => document.querySelector(l.href))
        .filter(Boolean) as Element[];

      if (!sections.length) return;

      observer = new IntersectionObserver(
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
      sections.forEach((el) => observer!.observe(el));
    });
    return () => {
      cancelAnimationFrame(rafId);
      observer?.disconnect();
    };
  }, [location.pathname]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (!isHome) {
      navigate("/", { state: { scrollTo: href } });
    } else {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <>
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:rounded-lg focus:font-medium"
    >
      Skip to main content
    </a>
    <nav
      className={`fixed top-0 left-0 right-0 z-50 border-b border-border backdrop-blur-md transition-all duration-500 [transition-timing-function:var(--ease-premium)] ${
        scrolled ? "bg-background/85 shadow-[0_8px_30px_-16px_hsl(var(--foreground)/0.35)]" : "bg-background"
      }`}
      role="navigation"
      aria-label="Main navigation"
    >

      <div className={`max-w-7xl mx-auto flex items-center justify-between px-6 transition-all duration-500 [transition-timing-function:var(--ease-premium)] ${scrolled ? "py-2" : "py-3"}`}>
        <a href="/" className="flex items-center bg-brand-logo" aria-label="Impexus Technologies home">
          <img
            src="/impexus-logo.jpg"
            alt="Impexus Technologies"
            width="990"
            height="461"
            className={`w-auto object-contain opacity-100 filter-none transition-all duration-500 [transition-timing-function:var(--ease-premium)] ${scrolled ? "h-9 md:h-10" : "h-10 md:h-12"}`}
            loading="eager"
            decoding="async"
          />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className={`text-sm font-medium relative pb-1 transition-colors duration-300 ${
                active === link.label
                  ? "text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:rounded"
                  : "text-foreground/70 hover:text-primary link-underline"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          className="md:hidden p-2 rounded-md hover:bg-muted transition-colors active:scale-95"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-nav-menu"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        >
          {open ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
      </div>

      <div
        id="mobile-nav-menu"
        role="menu"
        className={`md:hidden border-t border-border bg-background overflow-hidden transition-all duration-500 [transition-timing-function:var(--ease-premium)] ${open ? "max-h-80 py-4" : "max-h-0 py-0"}`}
      >
        <div className="px-6 space-y-1">
          {navLinks.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              role="menuitem"
              onClick={(e) => handleClick(e, link.href)}
              style={{
                transitionDelay: open ? `${80 + i * 60}ms` : "0ms",
              }}
              className={`block text-sm font-medium py-2 transition-all duration-400 [transition-timing-function:var(--ease-premium)] ${
                open ? "translate-x-0 opacity-100" : "-translate-x-3 opacity-0"
              } ${active === link.label ? "text-primary" : "text-foreground/70"}`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navbar;

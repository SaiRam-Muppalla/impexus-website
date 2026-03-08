import { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";

const navLinks = ["Home", "About", "Programs", "Courses", "Contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-heading font-bold tracking-tight">
            <span className="text-primary">i</span>MPEX
            <span className="text-primary">U</span>S
          </span>
          <span className="hidden sm:block text-[10px] text-muted-foreground tracking-widest">
            - Escalating The Excellence -
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {link}
            </a>
          ))}
          <a href="#" className="flex items-center gap-1 text-sm text-foreground/80 hover:text-primary">
            <ShoppingCart size={16} /> My Cart
          </a>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="block text-sm font-medium text-foreground/80"
              onClick={() => setOpen(false)}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

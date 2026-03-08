import { Instagram, Linkedin, Facebook, Twitter, ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer-section py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* CTA banner */}
        <div className="rounded-2xl bg-gradient-to-r from-primary to-primary/80 p-8 md:p-12 mb-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground mb-2">
              Ready to transform your campus?
            </h3>
            <p className="text-primary-foreground/70 text-sm">
              Partner with Impexus to build industry-ready graduates.
            </p>
          </div>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
            className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-6 py-3 rounded-xl font-medium hover:bg-primary-foreground/90 transition-colors shrink-0"
          >
            Get Started <ArrowRight size={16} />
          </a>
        </div>

        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <span className="text-2xl font-heading font-bold tracking-tight">
              <span className="text-primary">i</span>MPEX
              <span className="text-primary">U</span>S
            </span>
            <p className="text-sm opacity-60 mt-3 leading-relaxed">
              Campus Learning & Development platform partnering with colleges to deliver industry-aligned programs.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4 text-sm">Quick Links</h4>
            <ul className="space-y-2.5 text-sm opacity-60">
              {[
                { label: "Home", href: "#home" },
                { label: "About", href: "#about" },
                { label: "Services", href: "#services" },
                { label: "Why Us", href: "#programs" },
                { label: "Contact", href: "#contact" },
              ].map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    onClick={(e) => { e.preventDefault(); document.querySelector(l.href)?.scrollIntoView({ behavior: "smooth" }); }}
                    className="hover:text-primary hover:opacity-100 transition-all"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4 text-sm">Programs</h4>
            <ul className="space-y-2.5 text-sm opacity-60">
              {["Full Stack Development", "AI & Machine Learning", "Cloud & DevOps", "Placement Preparation", "Cybersecurity", "Mobile Development"].map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4 text-sm">Contact</h4>
            <div className="space-y-2.5 text-sm opacity-60">
              <p>+91 7013547471</p>
              <p>info@impexuss.com</p>
              <p>Hyderabad, India</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm opacity-40">© 2025 Impexus Technologies. All rights reserved.</p>
          <div className="flex gap-3">
            {[Instagram, Linkedin, Facebook, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center opacity-50 hover:opacity-100 hover:bg-primary/20 hover:text-primary transition-all">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

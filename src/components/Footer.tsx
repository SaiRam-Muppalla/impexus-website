import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";

const programs: { label: string; slug: string }[] = [
  { label: "Full Stack Development",   slug: "full-stack-web-development" },
  { label: "AI & Machine Learning",    slug: "ai-ml-data-science" },
  { label: "Cloud & DevOps",           slug: "cloud-computing-devops" },
  { label: "Placement Preparation",    slug: "placement-preparation" },
  { label: "Cybersecurity",            slug: "cybersecurity-ethical-hacking" },
  { label: "Mobile Development",       slug: "mobile-app-development" },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-section py-12 px-6" role="contentinfo" itemScope itemType="https://schema.org/WPFooter">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <span className="text-2xl font-heading font-bold tracking-tight">
            <span className="text-primary">i</span>MPEX
            <span className="text-primary">U</span>S
          </span>
          <p className="text-sm opacity-70 mt-3">
            Campus Learning & Development platform partnering with colleges to deliver industry-aligned skill development programs.
          </p>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm opacity-70">
            {["Home", "About", "Services", "Why Us", "Contact"].map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase().replace(" ", "-")}`} className="hover:text-primary transition-colors">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-4">Programs</h4>
          <ul className="space-y-2 text-sm opacity-70">
            {programs.map((p) => (
              <li key={p.slug}>
                <Link to={`/topic/${p.slug}`} className="hover:text-primary transition-colors">
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-4">Contact</h4>
          <p className="text-sm opacity-70 mb-2">
            <a href="tel:+917013547471" className="hover:text-primary transition-colors">+91 7013547471</a>
          </p>
          <p className="text-sm opacity-70 mb-2">
            <a href="mailto:info@impexus.co.in" className="hover:text-primary transition-colors">info@impexus.co.in</a>
          </p>
          <p className="text-sm opacity-70">Hyderabad, India</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm opacity-50">© {year} Impexus Technologies. All rights reserved.</p>
        <a href="https://www.instagram.com/impexus" target="_blank" rel="noopener noreferrer" aria-label="Impexus on Instagram" className="opacity-50 hover:opacity-100 hover:text-primary transition-all">
          <Instagram size={18} aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

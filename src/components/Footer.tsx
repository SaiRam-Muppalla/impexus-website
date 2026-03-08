import { Instagram, Linkedin, Facebook, Twitter, ArrowUp } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer-section py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <span className="text-2xl font-heading font-bold tracking-tight">
            <span className="text-primary">i</span>MPEX
            <span className="text-primary">U</span>S
          </span>
          <p className="text-sm opacity-70 mt-3 leading-relaxed">
            Campus Learning & Development platform partnering with colleges to deliver industry-aligned skill development programs.
          </p>
          <div className="flex gap-3 mt-5">
            {[Instagram, Linkedin, Facebook, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center opacity-60 hover:opacity-100 hover:bg-primary/20 hover:text-primary transition-all duration-300">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-4 text-sm tracking-wide uppercase opacity-90">Quick Links</h4>
          <ul className="space-y-2.5 text-sm opacity-70">
            {["Home", "About", "Services", "Why Us", "Contact"].map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase().replace(" ", "-")}`} className="hover:text-primary hover:translate-x-1 transition-all duration-200 inline-block">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-4 text-sm tracking-wide uppercase opacity-90">Programs</h4>
          <ul className="space-y-2.5 text-sm opacity-70">
            {["Full Stack Development", "AI & Machine Learning", "Cloud & DevOps", "Placement Preparation", "Cybersecurity", "Mobile Development"].map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-4 text-sm tracking-wide uppercase opacity-90">Contact</h4>
          <div className="space-y-2.5 text-sm opacity-70">
            <p>+91 7013547471</p>
            <p>info@impexuss.com</p>
            <p>Hyderabad, India</p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm opacity-50">© 2025 Impexus Technologies. All rights reserved.</p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-sm opacity-50 hover:opacity-100 hover:text-primary transition-all flex items-center gap-1"
        >
          Back to top <ArrowUp size={14} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;

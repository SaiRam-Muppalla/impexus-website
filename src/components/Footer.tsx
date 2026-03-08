import { Instagram, Linkedin, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer-section py-12 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <span className="text-2xl font-heading font-bold tracking-tight">
            <span className="text-primary">i</span>MPEX
            <span className="text-primary">U</span>S
          </span>
          <p className="text-sm opacity-70 mt-3">
            Empowering students through hands-on programming experiences and industry-aligned education.
          </p>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm opacity-70">
            {["Home", "About", "Programs", "Courses", "Contact"].map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} className="hover:text-primary transition-colors">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-4">Programs</h4>
          <ul className="space-y-2 text-sm opacity-70">
            {["Web Development", "Python", "Data Science", "App Development"].map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-4">Contact</h4>
          <p className="text-sm opacity-70 mb-2">+91 7013547471</p>
          <p className="text-sm opacity-70 mb-2">info@impexuss.com</p>
          <p className="text-sm opacity-70">Hyderabad, India</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm opacity-50">© 2025 Impexus Technologies. All rights reserved.</p>
        <div className="flex gap-4">
          {[Instagram, Linkedin, Facebook, Twitter].map((Icon, i) => (
            <a key={i} href="#" className="opacity-50 hover:opacity-100 hover:text-primary transition-all">
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

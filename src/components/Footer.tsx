import { useState } from "react";
import { Instagram, Linkedin, Facebook, Twitter, Mail, Phone } from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");

  return (
    <footer id="contact" className="footer-section py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
        <div>
          <h3 className="font-heading font-bold text-xl mb-2">Innovate</h3>
          <p className="text-sm opacity-70 mb-4">
            Empowering students through hands-on programming experiences.
          </p>
          <p className="font-heading font-semibold text-primary">Transform</p>
        </div>

        <div>
          <h3 className="font-heading font-semibold mb-4">Let's Connect</h3>
          <div className="flex items-center gap-2 mb-3 text-sm opacity-70">
            <Phone size={14} /> +91 7013547471
          </div>
          <div className="flex items-center gap-2 mb-3 text-sm opacity-70">
            <Mail size={14} /> info@impexuss.com
          </div>
          <div className="flex items-center gap-2 text-sm opacity-70">
            <Mail size={14} /> support@impexuss.com
          </div>
        </div>

        <div>
          <h3 className="font-heading font-semibold mb-4">Join us for innovation</h3>
          <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-2 rounded-md bg-foreground/10 border border-foreground/20 text-sm placeholder:opacity-50 focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors">
              Send
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm opacity-50">© 2025. All rights reserved.</p>
        <div className="flex gap-4">
          {[Instagram, Linkedin, Facebook, Twitter].map((Icon, i) => (
            <a key={i} href="#" className="opacity-50 hover:opacity-100 transition-opacity">
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

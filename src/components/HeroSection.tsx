import { Instagram, Linkedin, Facebook, Twitter } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=1920&q=80"
        alt="Keyboard background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="hero-overlay absolute inset-0" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
        <h1 className="text-5xl md:text-7xl font-heading font-bold text-primary-foreground leading-tight mb-6">
          Escalating the Excellence
        </h1>
        <p className="text-lg text-primary-foreground/70 mb-8 max-w-xl mx-auto">
          Transforming education through hands-on programming and mentorship.
        </p>
        <a
          href="#contact"
          className="inline-block bg-primary text-primary-foreground px-10 py-3 rounded-md font-medium text-lg hover:bg-primary/90 transition-colors"
        >
          Join
        </a>

        <div className="flex justify-center gap-6 mt-8">
          {[Instagram, Linkedin, Facebook, Twitter].map((Icon, i) => (
            <a key={i} href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              <Icon size={28} />
            </a>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 mb-8">
          {[
            { title: "Real-World Skills", desc: "Learn through immersive, project-based experiences." },
            { title: "Expert Mentorship", desc: "Expert mentorship for future-ready professionals." },
            { title: "Hands-On Experience", desc: "Industry-driven curriculum for innovative thinkers." },
          ].map((card) => (
            <div key={card.title} className="feature-card rounded-lg p-6 text-center">
              <h3 className="text-primary-foreground font-heading font-semibold text-lg mb-2">{card.title}</h3>
              <p className="text-primary-foreground/60 text-sm">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

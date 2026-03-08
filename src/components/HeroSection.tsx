import { useInView } from "@/hooks/useInView";
import { BookOpen, Users, Lightbulb } from "lucide-react";

const features = [
  { icon: BookOpen, title: "Learn", desc: "Master in-demand skills with structured, industry-aligned curricula." },
  { icon: Users, title: "Collaborate", desc: "Work alongside peers and mentors on real-world team projects." },
  { icon: Lightbulb, title: "Innovate", desc: "Turn ideas into impactful solutions through hands-on experience." },
];

const HeroSection = () => {
  const { ref, isInView } = useInView(0.1);

  return (
    <section id="home" ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1920&q=80"
        alt="Technology background"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      <div className="hero-overlay absolute inset-0" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20">
        <div className={`transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">Escalating The Excellence</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-tight mb-6">
            Empowering Future <br />
            <span className="text-primary">Tech Leaders</span>
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto text-lg mb-10">
            Join Impexus Technologies and transform your passion for technology into real-world expertise through hands-on learning and mentorship.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <a href="#courses" onClick={(e) => { e.preventDefault(); document.querySelector("#courses")?.scrollIntoView({ behavior: "smooth" }); }} className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Explore Courses
            </a>
            <a href="#about" onClick={(e) => { e.preventDefault(); document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" }); }} className="border border-white/30 text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors">
              Learn More
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 pb-10">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`feature-card rounded-xl p-6 text-left border border-white/10 transition-all duration-700 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: isInView ? `${300 + i * 150}ms` : "0ms" }}
            >
              <f.icon size={28} className="text-primary mb-3" />
              <h3 className="font-heading font-semibold text-white text-lg mb-1">{f.title}</h3>
              <p className="text-white/60 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

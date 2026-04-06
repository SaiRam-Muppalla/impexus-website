import { useInView } from "@/hooks/useInView";
import { GraduationCap, Building2, Rocket } from "lucide-react";

const features = [
  { icon: GraduationCap, title: "Campus Programs", desc: "Structured, industry-aligned skill development programs delivered within academic institutions." },
  { icon: Building2, title: "Industry Partnership", desc: "Bridging the gap between classroom learning and real-world technology careers." },
  { icon: Rocket, title: "Career Readiness", desc: "From coding foundations to placement preparation — building job-ready graduates." },
];

const HeroSection = () => {
  const { ref, isInView } = useInView(0.1);

  return (
    <section id="home" ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1920&q=80"
        alt="Indian college students in a campus classroom"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      <div className="hero-overlay absolute inset-0" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20">
        <div className={`transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">Campus Learning & Development</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-tight mb-6">
            Empowering Future <br />
            <span className="text-primary">Tech Leaders</span>
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto text-lg mb-10">
            Impexus partners with colleges and universities to deliver structured, industry-aligned skill development programs — enabling students to bridge the gap between education and industry.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <a href="#services" onClick={(e) => { e.preventDefault(); document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" }); }} className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Explore Programs
            </a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }} className="border border-white/30 text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors">
              Partner With Us
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

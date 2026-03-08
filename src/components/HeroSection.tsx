import { useInView } from "@/hooks/useInView";
import { GraduationCap, Building2, Rocket, ArrowRight } from "lucide-react";

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
        src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1920&q=80"
        alt="Students in campus learning environment"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      <div className="hero-overlay absolute inset-0" />

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-primary/10 blur-[100px]" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-accent/10 blur-[120px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24 pb-10">
        <div className={`transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/10 text-white/90 px-5 py-2 rounded-full text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Campus Learning & Development
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-[1.1] mb-6 tracking-tight">
            Empowering Future{" "}
            <span className="relative inline-block">
              <span className="gradient-text">Tech Leaders</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                <path d="M2 6C50 2 150 2 198 6" stroke="hsl(32, 95%, 54%)" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          <p className="text-white/60 max-w-2xl mx-auto text-lg md:text-xl mb-12 leading-relaxed font-light">
            Impexus partners with colleges and universities to deliver structured, industry-aligned skill development programs — enabling students to bridge the gap between education and industry.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-20">
            <a
              href="#services"
              onClick={(e) => { e.preventDefault(); document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" }); }}
              className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3.5 rounded-xl font-medium transition-all duration-300 inline-flex items-center gap-2 shadow-[0_0_30px_-5px_hsl(var(--primary)/0.4)]"
            >
              Explore Programs
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
              className="border border-white/20 text-white px-8 py-3.5 rounded-xl font-medium hover:bg-white/10 hover:border-white/30 transition-all duration-300 backdrop-blur-sm"
            >
              Partner With Us
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`feature-card rounded-2xl p-7 text-left transition-all duration-700 hover:bg-white/[0.08] group ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: isInView ? `${400 + i * 150}ms` : "0ms" }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center mb-4 group-hover:bg-primary/25 transition-colors">
                <f.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-white text-lg mb-2">{f.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

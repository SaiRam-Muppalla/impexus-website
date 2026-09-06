import { useEffect, useRef } from "react";
import { useInView } from "@/hooks/useInView";
import { useRichMotion } from "@/hooks/useMotionPrefs";
import { GraduationCap, Building2, Rocket, ArrowRight } from "lucide-react";
import HeroBackdrop from "@/components/motion/HeroBackdrop";
import MagneticButton from "@/components/motion/MagneticButton";
import TiltCard from "@/components/motion/TiltCard";

const features = [
  { icon: GraduationCap, title: "Campus Programs", desc: "Structured, industry-aligned skill development programs delivered within academic institutions." },
  { icon: Building2, title: "Industry Partnership", desc: "Bridging the gap between classroom learning and real-world technology careers." },
  { icon: Rocket, title: "Career Readiness", desc: "From coding foundations to placement preparation — building job-ready graduates." },
];

const HeroSection = () => {
  const { ref, isInView } = useInView(0.1);
  const rich = useRichMotion();
  const layerRef = useRef<HTMLDivElement>(null);

  // Very subtle depth parallax on the hero image layer.
  useEffect(() => {
    if (!rich) return;
    let frame = 0;
    const state = { x: 0, y: 0, tx: 0, ty: 0 };

    const onMove = (e: PointerEvent) => {
      state.tx = (e.clientX / window.innerWidth - 0.5) * 14;
      state.ty = (e.clientY / window.innerHeight - 0.5) * 10;
      if (!frame) frame = requestAnimationFrame(loop);
    };

    const loop = () => {
      state.x += (state.tx - state.x) * 0.06;
      state.y += (state.ty - state.y) * 0.06;
      if (layerRef.current) {
        layerRef.current.style.transform = `scale(1.06) translate3d(${state.x}px, ${state.y}px, 0)`;
      }
      frame = Math.abs(state.tx - state.x) > 0.05 || Math.abs(state.ty - state.y) > 0.05 ? requestAnimationFrame(loop) : 0;
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [rich]);

  return (
    <header id="home" ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden" role="banner">
      <div ref={layerRef} className="absolute inset-0 will-change-transform" style={{ transform: "scale(1.06)" }}>
        <img
          src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1920&q=80"
          alt="Indian college students in a campus classroom"
          className="w-full h-full object-cover"
          loading="eager"
          {...{ fetchpriority: "high" }}
          decoding="sync"
        />
      </div>
      <div className="hero-overlay absolute inset-0" />
      <HeroBackdrop />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20">
        <div>
          <p className="hero-line text-primary font-medium tracking-widest uppercase text-sm mb-4" style={{ animationDelay: "60ms" }}>
            Campus Learning &amp; Development
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-tight mb-6">
            <span className="hero-line block" style={{ animationDelay: "160ms" }}>Empowering Future</span>
            <span className="hero-line block text-primary" style={{ animationDelay: "260ms" }}>
              <span className="hero-highlight">Tech Leaders</span>
            </span>
          </h1>
          <p className="hero-line text-white/70 max-w-2xl mx-auto text-lg mb-10" style={{ animationDelay: "360ms" }}>
            Impexus partners with colleges and universities to deliver structured, industry-aligned skill development programs — enabling students to bridge the gap between education and industry.
          </p>
          <div className="hero-line flex flex-wrap justify-center gap-4 mb-16" style={{ animationDelay: "460ms" }}>
            <MagneticButton
              href="#services"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90"
            >
              Explore Programs
              <ArrowRight size={18} className="magnetic-icon" aria-hidden="true" />
            </MagneticButton>
            <MagneticButton
              href="#contact"
              className="inline-flex items-center gap-2 border border-white/30 text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10"
            >
              Partner With Us
              <ArrowRight size={18} className="magnetic-icon" aria-hidden="true" />
            </MagneticButton>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 pb-10">
          {features.map((f, i) => (
            <TiltCard
              key={f.title}
              className={`feature-card rounded-xl p-6 text-left border border-white/10 transition-all duration-700 hover:border-white/25 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: isInView ? `${300 + i * 150}ms` : "0ms" }}
            >
              <f.icon size={28} className="depth-icon text-primary mb-3" />
              <h2 className="font-heading font-semibold text-white text-lg mb-1">{f.title}</h2>
              <p className="text-white/60 text-sm">{f.desc}</p>
            </TiltCard>
          ))}
        </div>
      </div>
    </header>
  );
};

export default HeroSection;

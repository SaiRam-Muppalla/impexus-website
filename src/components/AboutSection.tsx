import { useInView } from "@/hooks/useInView";
import { CheckCircle, ArrowRight } from "lucide-react";

const focusAreas = [
  "Practical technical skills aligned with current industry demand",
  "Real-world project development and applied learning",
  "Industry-relevant tools, platforms, and workflows",
  "Collaborative problem solving and innovation",
];

const AboutSection = () => {
  const { ref, isInView } = useInView(0.15);

  return (
    <section id="about" ref={ref} className="py-24 px-6 relative">
      <div className="absolute inset-0 dot-pattern opacity-40" />
      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className={`transition-all duration-700 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80"
                alt="Students collaborating on campus"
                className="rounded-2xl h-52 w-full object-cover shadow-lg"
              />
              <div className="bg-primary rounded-2xl p-5 text-primary-foreground">
                <p className="text-3xl font-heading font-bold">5+</p>
                <p className="text-sm opacity-80">Years of Experience</p>
              </div>
            </div>
            <div className="pt-8 space-y-4">
              <div className="bg-accent rounded-2xl p-5 text-accent-foreground">
                <p className="text-3xl font-heading font-bold">500+</p>
                <p className="text-sm opacity-80">Students Trained</p>
              </div>
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80"
                alt="Team working together"
                className="rounded-2xl h-52 w-full object-cover shadow-lg"
              />
            </div>
          </div>
        </div>

        <div className={`transition-all duration-700 delay-200 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-xs mb-3">About Us</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-5 text-foreground tracking-tight leading-tight">
            Bridging the Gap Between{" "}
            <span className="gradient-text">Education & Industry</span>
          </h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            Many students graduate with strong theoretical knowledge but limited exposure to industry practices, modern tools, and applied problem solving. Impexus addresses this gap by introducing structured L&D programs on campus.
          </p>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Our approach enables students to transition from academic learning to industry readiness through hands-on technical training, modern technology exposure, and professional development.
          </p>
          <ul className="space-y-3 mb-8">
            {focusAreas.map((area) => (
              <li key={area} className="flex items-start gap-3">
                <CheckCircle size={18} className="text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-foreground/80">{area}</span>
              </li>
            ))}
          </ul>
          <a
            href="#services"
            onClick={(e) => { e.preventDefault(); document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" }); }}
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
          >
            Explore our programs <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

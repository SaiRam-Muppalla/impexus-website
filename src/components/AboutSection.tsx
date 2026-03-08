import { useInView } from "@/hooks/useInView";
import { CheckCircle } from "lucide-react";
import aboutCollab from "@/assets/about-collab.jpg";
import aboutTeam from "@/assets/about-team.jpg";

const focusAreas = [
  "Practical technical skills aligned with current industry demand",
  "Real-world project development and applied learning",
  "Industry-relevant tools, platforms, and workflows",
  "Collaborative problem solving and innovation",
];

const AboutSection = () => {
  const { ref, isInView } = useInView(0.15);

  return (
    <section id="about" ref={ref} className="py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className={`transition-all duration-700 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img
                src={aboutCollab}
                alt="Students collaborating on campus"
                className="rounded-xl h-48 w-full object-cover hover:scale-[1.03] transition-transform duration-500"
              />
              <div className="bg-primary/10 rounded-xl p-4 text-center">
                <p className="text-2xl font-heading font-bold text-primary">5+</p>
                <p className="text-xs text-muted-foreground">Years of Excellence</p>
              </div>
            </div>
            <div className="pt-8 space-y-4">
              <div className="bg-primary/10 rounded-xl p-4 text-center">
                <p className="text-2xl font-heading font-bold text-primary">500+</p>
                <p className="text-xs text-muted-foreground">Students Trained</p>
              </div>
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80"
                alt="Team working together"
                className="rounded-xl h-48 w-full object-cover hover:scale-[1.03] transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        <div className={`transition-all duration-700 delay-200 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-2">About Us</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-foreground">
            Bridging the Gap Between <span className="text-primary">Education & Industry</span>
          </h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            Many students graduate with strong theoretical knowledge but limited exposure to industry practices, modern tools, and applied problem solving. Impexus addresses this gap by introducing structured L&D programs on campus.
          </p>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Our approach enables students to transition from academic learning to industry readiness through hands-on technical training, modern technology exposure, and professional development.
          </p>
          <ul className="space-y-3">
            {focusAreas.map((area, i) => (
              <li
                key={area}
                className={`flex items-start gap-3 transition-all duration-500 ${
                  isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-5"
                }`}
                style={{ transitionDelay: isInView ? `${400 + i * 100}ms` : "0ms" }}
              >
                <CheckCircle size={18} className="text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-muted-foreground">{area}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

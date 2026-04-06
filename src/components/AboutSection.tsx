import { useInView } from "@/hooks/useInView";
import { CheckCircle } from "lucide-react";

const focusAreas = [
  "Practical technical skills aligned with current industry demand",
  "Real-world project development and applied learning",
  "Industry-relevant tools, platforms, and workflows",
  "Collaborative problem solving and innovation",
];

const AboutSection = () => {
  const { ref, isInView } = useInView(0.15);

  return (
    <section id="about" ref={ref} className="py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className={`transition-all duration-700 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=600&q=80"
              alt="Indian students collaborating in a coding workshop"
              className="rounded-xl h-48 w-full object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80"
              alt="Students working together on tech projects"
              className="rounded-xl h-48 w-full object-cover mt-8"
            />
          </div>
        </div>

        <div className={`transition-all duration-700 delay-200 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-2">About Us</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-foreground">
            Bridging the Gap Between <span className="text-primary">Education & Industry</span>
          </h2>
          <p className="text-muted-foreground mb-4">
            Many students graduate with strong theoretical knowledge but limited exposure to industry practices, modern tools, and applied problem solving. Impexus addresses this gap by introducing structured L&D programs on campus.
          </p>
          <p className="text-muted-foreground mb-6">
            Our approach enables students to transition from academic learning to industry readiness through hands-on technical training, modern technology exposure, and professional development.
          </p>
          <ul className="space-y-3">
            {focusAreas.map((area) => (
              <li key={area} className="flex items-start gap-3">
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

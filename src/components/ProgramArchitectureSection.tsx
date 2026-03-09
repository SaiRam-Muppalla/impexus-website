import { useInView } from "@/hooks/useInView";

const layers = [
  {
    title: "Career Readiness Layer",
    items: "Competitive Coding · Placement Preparation · Mock Interviews · Resume Building",
    color: "from-primary to-primary/80",
  },
  {
    title: "Advanced Technology Layer",
    items: "AI / ML · Data Science · Cybersecurity · Cloud Computing · Emerging Technologies",
    color: "from-primary/80 to-primary/60",
  },
  {
    title: "Development Layer",
    items: "Full Stack Development · DevOps · Databases · Mobile Development · Software Tools",
    color: "from-primary/60 to-primary/40",
  },
  {
    title: "Foundation Layer",
    items: "Programming Languages · Data Structures · Algorithms · Problem Solving · OOP",
    color: "from-primary/40 to-primary/20",
  },
];

const formats = [
  "Intensive Technical Bootcamps",
  "Semester-Long Skill Development Programs",
  "Workshop Series",
  "Hackathon-Based Learning Initiatives",
  "Placement Preparation Programs",
  "Certification-Oriented Programs",
];

const ProgramArchitectureSection = () => {
  const { ref, isInView } = useInView(0.1);

  return (
    <section ref={ref} className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className={`text-center mb-12 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-2">Learning Architecture</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Program <span className="text-primary">Architecture</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A layered learning architecture designed to take students from foundational skills to career readiness.
          </p>
        </div>

        <div className="space-y-3 mb-16">
          {layers.map((layer, i) => (
            <div
              key={layer.title}
              className={`rounded-xl bg-gradient-to-r ${layer.color} p-5 text-primary-foreground transition-all duration-700 ${
                isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
              style={{ transitionDelay: isInView ? `${i * 150}ms` : "0ms" }}
            >
              <h3 className="font-heading font-bold text-sm md:text-base uppercase tracking-wide mb-1">{layer.title}</h3>
              <p className="text-xs md:text-sm opacity-90">{layer.items}</p>
            </div>
          ))}
        </div>

        <div className={`transition-all duration-700 delay-500 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h3 className="text-xl font-heading font-bold text-foreground text-center mb-6">
            Program <span className="text-primary">Formats</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {formats.map((f) => (
              <div key={f} className="flex items-center gap-3 rounded-lg border border-border bg-card p-4">
                <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                <span className="text-sm text-foreground">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramArchitectureSection;

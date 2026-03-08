import { useInView } from "@/hooks/useInView";
import { Layers } from "lucide-react";

const layers = [
  {
    title: "Career Readiness",
    items: "Competitive Coding · Placement Prep · Mock Interviews · Resume Building",
    level: "Level 4",
  },
  {
    title: "Advanced Technology",
    items: "AI / ML · Data Science · Cybersecurity · Cloud · Emerging Tech",
    level: "Level 3",
  },
  {
    title: "Development",
    items: "Full Stack · DevOps · Databases · Mobile · Software Tools",
    level: "Level 2",
  },
  {
    title: "Foundation",
    items: "Programming Languages · DSA · Algorithms · Problem Solving · OOP",
    level: "Level 1",
  },
];

const formats = [
  "Intensive Bootcamps",
  "Semester Programs",
  "Workshop Series",
  "Hackathon Learning",
  "Placement Prep",
  "Certification Programs",
];

const ProgramArchitectureSection = () => {
  const { ref, isInView } = useInView(0.1);

  return (
    <section ref={ref} className="py-24 px-6 relative">
      <div className="absolute inset-0 dot-pattern opacity-30" />
      <div className="relative max-w-5xl mx-auto">
        <div className={`text-center mb-14 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-xs mb-3">Learning Architecture</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground tracking-tight">
            Program <span className="gradient-text">Architecture</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A layered learning architecture taking students from foundations to career readiness.
          </p>
        </div>

        {/* Layered pyramid */}
        <div className="max-w-3xl mx-auto space-y-3 mb-16">
          {layers.map((layer, i) => {
            const widthPercent = 60 + i * 13;
            return (
              <div
                key={layer.title}
                className={`mx-auto rounded-2xl border border-border bg-card p-5 transition-all duration-700 card-elevated ${
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{
                  width: `${widthPercent}%`,
                  transitionDelay: isInView ? `${i * 150}ms` : "0ms",
                }}
              >
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <Layers size={16} className="text-primary" />
                    <h3 className="font-heading font-bold text-sm text-foreground">{layer.title}</h3>
                  </div>
                  <span className="text-[10px] font-medium text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                    {layer.level}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">{layer.items}</p>
              </div>
            );
          })}
        </div>

        <div className={`transition-all duration-700 delay-500 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h3 className="text-xl font-heading font-bold text-foreground text-center mb-8">
            Program <span className="gradient-text">Formats</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {formats.map((f) => (
              <div key={f} className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 card-elevated">
                <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
                <span className="text-sm font-medium text-foreground">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramArchitectureSection;

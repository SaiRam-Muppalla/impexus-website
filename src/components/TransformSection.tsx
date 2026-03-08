import { useInView } from "@/hooks/useInView";
import { BookOpen, Wrench, Layers, Building, Target } from "lucide-react";

const reasons = [
  { icon: BookOpen, title: "Industry-Aligned Curriculum", desc: "Programs designed around technologies and practices currently used by employers." },
  { icon: Wrench, title: "Hands-On Learning", desc: "Every program emphasizes practical implementation over passive instruction." },
  { icon: Layers, title: "Complete L&D Ecosystem", desc: "From coding foundations to placement preparation, all under one platform." },
  { icon: Building, title: "Campus-Centric Delivery", desc: "Programs delivered within institutions, integrated with academic schedules." },
  { icon: Target, title: "Student Outcomes Focus", desc: "Every initiative is designed to improve student employability and technical confidence." },
];

const TransformSection = () => {
  const { ref, isInView } = useInView(0.15);

  return (
    <section id="programs" ref={ref} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-14 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-xs mb-3">Partnership</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground tracking-tight">
            Why Colleges <span className="gradient-text">Partner With Impexus</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {reasons.map((card, i) => (
            <div
              key={card.title}
              className={`rounded-2xl border border-border bg-card p-6 text-center card-elevated transition-all duration-700 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: isInView ? `${i * 100}ms` : "0ms" }}
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/8 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/15 transition-colors">
                <card.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2 text-sm">{card.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransformSection;

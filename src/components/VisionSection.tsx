import { useInView } from "@/hooks/useInView";
import { Sparkles } from "lucide-react";

const VisionSection = () => {
  const { ref, isInView } = useInView(0.15);

  return (
    <section ref={ref} className="relative py-28 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-primary/5" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className={`transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            <Sparkles size={16} />
            Our Vision
          </div>
        </div>

        <h2
          className={`text-3xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-8 transition-all duration-700 delay-150 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Building a Strong{" "}
          <span className="text-primary">Campus Technology Learning Ecosystem</span>
        </h2>

        <p
          className={`text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 transition-all duration-700 delay-300 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Where every student develops the practical technical and professional skills
          required to succeed in modern technology careers — transforming campuses into
          launchpads for the next generation of tech leaders.
        </p>

        <div
          className={`flex justify-center gap-8 md:gap-16 transition-all duration-700 delay-[450ms] ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {[
            { label: "Skill First", sub: "Practical over theoretical" },
            { label: "Industry Ready", sub: "Aligned with real demand" },
            { label: "Campus Driven", sub: "Delivered where students learn" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <p className="font-heading font-bold text-foreground text-lg">{item.label}</p>
              <p className="text-xs text-muted-foreground mt-1">{item.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionSection;

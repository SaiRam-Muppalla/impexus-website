import { useInView } from "@/hooks/useInView";
import { Sparkles } from "lucide-react";

const VisionSection = () => {
  const { ref, isInView } = useInView(0.15);

  return (
    <section ref={ref} className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/3 blur-[150px]" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className={`transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="inline-flex items-center gap-2 bg-primary/8 text-primary px-5 py-2 rounded-full text-sm font-medium mb-8 border border-primary/15">
            <Sparkles size={16} />
            Our Vision
          </div>
        </div>

        <h2
          className={`text-3xl md:text-5xl lg:text-6xl font-heading font-bold leading-[1.1] mb-8 tracking-tight transition-all duration-700 delay-150 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Building a Strong{" "}
          <span className="gradient-text">Campus Technology Learning Ecosystem</span>
        </h2>

        <p
          className={`text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-14 leading-relaxed transition-all duration-700 delay-300 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Where every student develops the practical technical and professional skills
          required to succeed in modern technology careers — transforming campuses into
          launchpads for the next generation of tech leaders.
        </p>

        <div
          className={`flex justify-center gap-6 md:gap-12 transition-all duration-700 delay-[450ms] ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {[
            { label: "Skill First", sub: "Practical over theoretical" },
            { label: "Industry Ready", sub: "Aligned with real demand" },
            { label: "Campus Driven", sub: "Delivered where students learn" },
          ].map((item, i) => (
            <div key={item.label} className="text-center">
              <div className={`w-12 h-12 rounded-2xl mx-auto mb-3 flex items-center justify-center ${
                i === 0 ? "bg-primary/10" : i === 1 ? "bg-accent/10" : "bg-primary/10"
              }`}>
                <span className={`text-lg font-heading font-bold ${
                  i === 0 ? "text-primary" : i === 1 ? "text-accent" : "text-primary"
                }`}>
                  {i + 1}
                </span>
              </div>
              <p className="font-heading font-bold text-foreground text-base">{item.label}</p>
              <p className="text-xs text-muted-foreground mt-1">{item.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionSection;

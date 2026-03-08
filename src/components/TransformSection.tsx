import { useInView } from "@/hooks/useInView";
import { Target, Rocket, Award, Zap } from "lucide-react";

const cards = [
  { icon: Target, title: "Expert Mentorship", desc: "Learn directly from seasoned professionals with years of industry experience." },
  { icon: Rocket, title: "Project-Based Learning", desc: "Build real-world applications that strengthen your portfolio and confidence." },
  { icon: Award, title: "Industry Certification", desc: "Earn recognized certifications that validate your skills to employers." },
  { icon: Zap, title: "Career Support", desc: "Get dedicated placement assistance, resume reviews, and interview prep." },
];

const TransformSection = () => {
  const { ref, isInView } = useInView(0.15);

  return (
    <section id="programs" ref={ref} className="py-20 px-6 section-light">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-12 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-2">Why Choose Us</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Transform Your <span className="text-primary">Career</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, i) => (
            <div
              key={card.title}
              className={`rounded-xl border border-border bg-card p-6 text-center hover:shadow-md transition-all duration-700 hover:-translate-y-1 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: isInView ? `${i * 100}ms` : "0ms" }}
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <card.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">{card.title}</h3>
              <p className="text-sm text-muted-foreground">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransformSection;

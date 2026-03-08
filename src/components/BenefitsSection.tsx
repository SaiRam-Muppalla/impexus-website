import { useInView } from "@/hooks/useInView";
import { CheckCircle } from "lucide-react";

const studentBenefits = [
  "Practical, hands-on technical skills",
  "Exposure to industry-standard tools and platforms",
  "Strong coding and problem-solving abilities",
  "Placement preparation and interview readiness",
  "Innovation and project development experience",
  "Professional communication and soft skills",
];

const partnerInitiatives = [
  "Technical training programs",
  "Placement preparation programs",
  "Hackathons and innovation challenges",
  "Project mentoring",
  "Technology workshops",
];

const BenefitsSection = () => {
  const { ref, isInView } = useInView(0.1);

  return (
    <section ref={ref} className="py-24 px-6 section-alt">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
        <div className={`transition-all duration-700 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-xs mb-3">For Students</p>
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6 tracking-tight">
            Benefits for <span className="gradient-text">Students</span>
          </h3>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Students participating in Impexus programs build confidence and capability before entering the workforce.
          </p>
          <ul className="space-y-4">
            {studentBenefits.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 shrink-0">
                  <CheckCircle size={14} className="text-primary" />
                </div>
                <span className="text-sm text-foreground/80">{b}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={`transition-all duration-700 delay-200 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
          <p className="text-accent font-medium tracking-[0.2em] uppercase text-xs mb-3">For Institutions</p>
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6 tracking-tight">
            Institutional <span className="gradient-text">Collaboration</span>
          </h3>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Impexus collaborates with colleges and universities to build strong campus skill development ecosystems.
          </p>
          <ul className="space-y-4">
            {partnerInitiatives.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center mt-0.5 shrink-0">
                  <CheckCircle size={14} className="text-accent" />
                </div>
                <span className="text-sm text-foreground/80">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;

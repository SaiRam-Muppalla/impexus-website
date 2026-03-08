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
    <section ref={ref} className="py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        <div className={`transition-all duration-700 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-2">For Students</p>
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">
            Benefits for <span className="text-primary">Students</span>
          </h3>
          <p className="text-muted-foreground mb-6">
            Students participating in Impexus programs build confidence and capability before entering the workforce.
          </p>
          <ul className="space-y-3">
            {studentBenefits.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <CheckCircle size={18} className="text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-muted-foreground">{b}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={`transition-all duration-700 delay-200 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-2">For Institutions</p>
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">
            Institutional <span className="text-primary">Collaboration</span>
          </h3>
          <p className="text-muted-foreground mb-6">
            Impexus collaborates with colleges and universities to build strong campus skill development ecosystems.
          </p>
          <ul className="space-y-3">
            {partnerInitiatives.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <CheckCircle size={18} className="text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-muted-foreground">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;

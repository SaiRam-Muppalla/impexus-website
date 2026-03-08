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
    <section ref={ref} className="py-24 px-6 section-light">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-12 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-2">Benefits</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Who <span className="text-primary">Benefits</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div
            className={`rounded-2xl border border-border bg-card p-8 transition-all duration-700 hover:shadow-md ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-2">For Students</p>
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
              Benefits for <span className="text-primary">Students</span>
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Students participating in Impexus programs build confidence and capability before entering the workforce.
            </p>
            <ul className="space-y-3">
              {studentBenefits.map((b, i) => (
                <li
                  key={b}
                  className={`flex items-start gap-3 transition-all duration-500 ${
                    isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                  }`}
                  style={{ transitionDelay: isInView ? `${200 + i * 80}ms` : "0ms" }}
                >
                  <CheckCircle size={18} className="text-primary mt-0.5 shrink-0" />
                  <span className="text-sm text-muted-foreground">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            className={`rounded-2xl border border-border bg-card p-8 transition-all duration-700 delay-200 hover:shadow-md ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-2">For Institutions</p>
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
              Institutional <span className="text-primary">Collaboration</span>
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Impexus collaborates with colleges and universities to build strong campus skill development ecosystems.
            </p>
            <ul className="space-y-3">
              {partnerInitiatives.map((p, i) => (
                <li
                  key={p}
                  className={`flex items-start gap-3 transition-all duration-500 ${
                    isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                  }`}
                  style={{ transitionDelay: isInView ? `${400 + i * 80}ms` : "0ms" }}
                >
                  <CheckCircle size={18} className="text-primary mt-0.5 shrink-0" />
                  <span className="text-sm text-muted-foreground">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;

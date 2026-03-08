import { useInView } from "@/hooks/useInView";

const stack = [
  { domain: "Languages", tech: ["C", "C++", "Java", "Python", "JavaScript", "Go"] },
  { domain: "Frontend", tech: ["React.js", "Next.js", "Angular", "Tailwind CSS", "Bootstrap"] },
  { domain: "Backend", tech: ["Node.js", "Express.js", "Spring Boot", "Django", "Flask", "GraphQL"] },
  { domain: "Databases", tech: ["MySQL", "PostgreSQL", "MongoDB", "Redis"] },
  { domain: "Cloud", tech: ["AWS", "Azure", "Google Cloud Platform"] },
  { domain: "DevOps", tech: ["Git", "GitHub Actions", "Jenkins", "Docker", "Kubernetes", "Terraform"] },
  { domain: "AI / ML", tech: ["Scikit-learn", "TensorFlow", "PyTorch", "Pandas", "NumPy"] },
  { domain: "Data & Analytics", tech: ["SQL", "Apache Spark", "Power BI", "Tableau"] },
  { domain: "Cybersecurity", tech: ["Kali Linux", "Wireshark", "Security Tools"] },
  { domain: "Mobile", tech: ["Android (Java/Kotlin)", "Flutter", "React Native"] },
  { domain: "Emerging Tech", tech: ["Generative AI", "Prompt Engineering", "Blockchain", "IoT", "Web3"] },
];

const TechStackSection = () => {
  const { ref, isInView } = useInView(0.1);

  return (
    <section ref={ref} className="py-24 px-6 section-light">
      <div className="max-w-5xl mx-auto">
        <div className={`text-center mb-12 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-2">Technologies</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Technology <span className="text-primary">Stack Overview</span>
          </h2>
        </div>

        <div className="space-y-6">
          {stack.map((row, i) => (
            <div
              key={row.domain}
              className={`flex flex-col sm:flex-row items-start gap-4 transition-all duration-500 ${
                isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
              style={{ transitionDelay: isInView ? `${i * 60}ms` : "0ms" }}
            >
              <span className="text-sm font-heading font-semibold text-primary w-36 shrink-0 pt-1">{row.domain}</span>
              <div className="flex flex-wrap gap-2">
                {row.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1.5 rounded-full border border-border bg-card text-foreground hover:border-primary hover:text-primary transition-colors duration-200 cursor-default"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;

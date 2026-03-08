import { useInView } from "@/hooks/useInView";

const stack = [
  { domain: "Languages", techs: ["C", "C++", "Java", "Python", "JavaScript", "Go"] },
  { domain: "Frontend", techs: ["React.js", "Next.js", "Angular", "Tailwind CSS", "Bootstrap"] },
  { domain: "Backend", techs: ["Node.js", "Express.js", "Spring Boot", "Django", "Flask", "GraphQL"] },
  { domain: "Databases", techs: ["MySQL", "PostgreSQL", "MongoDB", "Redis"] },
  { domain: "Cloud", techs: ["AWS", "Azure", "Google Cloud Platform"] },
  { domain: "DevOps", techs: ["Git", "GitHub Actions", "Jenkins", "Docker", "Kubernetes", "Terraform"] },
  { domain: "AI / ML", techs: ["Scikit-learn", "TensorFlow", "PyTorch", "Pandas", "NumPy"] },
  { domain: "Data & Analytics", techs: ["SQL", "Apache Spark", "Power BI", "Tableau"] },
  { domain: "Cybersecurity", techs: ["Kali Linux", "Wireshark", "Security Testing Tools"] },
  { domain: "Mobile", techs: ["Android (Kotlin)", "Flutter", "React Native"] },
  { domain: "Emerging Tech", techs: ["Generative AI", "Prompt Engineering", "Blockchain", "IoT", "Web3"] },
];

const TechStackSection = () => {
  const { ref, isInView } = useInView(0.1);

  return (
    <section ref={ref} className="py-24 px-6 section-alt">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-14 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-xs mb-3">Technologies</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground tracking-tight">
            Technology <span className="gradient-text">Stack</span>
          </h2>
        </div>

        <div className="space-y-6">
          {stack.map((row, i) => (
            <div
              key={row.domain}
              className={`flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 transition-all duration-500 ${
                isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
              style={{ transitionDelay: isInView ? `${i * 50}ms` : "0ms" }}
            >
              <span className="text-sm font-heading font-semibold text-foreground w-36 shrink-0">
                {row.domain}
              </span>
              <div className="flex flex-wrap gap-2">
                {row.techs.map((tech) => (
                  <span
                    key={tech}
                    className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-card border border-border text-foreground/80 hover:border-primary/40 hover:text-primary transition-colors cursor-default"
                  >
                    {tech}
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

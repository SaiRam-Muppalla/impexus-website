import { useInView } from "@/hooks/useInView";

const stack = [
  { domain: "Languages", tech: "C, C++, Java, Python, JavaScript, Go" },
  { domain: "Frontend", tech: "React.js, Next.js, Angular, Tailwind CSS, Bootstrap" },
  { domain: "Backend", tech: "Node.js, Express.js, Spring Boot, Django, Flask, GraphQL" },
  { domain: "Databases", tech: "MySQL, PostgreSQL, MongoDB, Redis" },
  { domain: "Cloud", tech: "AWS, Azure, Google Cloud Platform" },
  { domain: "DevOps", tech: "Git, GitHub Actions, Jenkins, Docker, Kubernetes, Terraform" },
  { domain: "AI / ML", tech: "Scikit-learn, TensorFlow, PyTorch, Pandas, NumPy" },
  { domain: "Data & Analytics", tech: "SQL, Apache Spark, Power BI, Tableau" },
  { domain: "Cybersecurity", tech: "Kali Linux, Wireshark, Security Testing Tools" },
  { domain: "Mobile", tech: "Android (Java/Kotlin), Flutter, React Native" },
  { domain: "Emerging Tech", tech: "Generative AI, Prompt Engineering, Blockchain, IoT, Web3" },
];

const TechStackSection = () => {
  const { ref, isInView } = useInView(0.1);

  return (
    <section ref={ref} className="py-20 px-6 section-light">
      <div className="max-w-5xl mx-auto">
        <div className={`text-center mb-12 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-2">Technologies</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Technology <span className="text-primary">Stack Overview</span>
          </h2>
        </div>

        <div className={`rounded-xl border border-border overflow-hidden bg-card transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="text-left py-3 px-5 font-heading font-semibold w-40">Domain</th>
                  <th className="text-left py-3 px-5 font-heading font-semibold">Technologies</th>
                </tr>
              </thead>
              <tbody>
                {stack.map((row, i) => (
                  <tr
                    key={row.domain}
                    className={`border-t border-border transition-all duration-500 ${
                      isInView ? "opacity-100" : "opacity-0"
                    } ${i % 2 === 0 ? "" : "bg-muted/30"}`}
                    style={{ transitionDelay: isInView ? `${i * 50}ms` : "0ms" }}
                  >
                    <td className="py-3 px-5 font-heading font-semibold text-foreground">{row.domain}</td>
                    <td className="py-3 px-5 text-muted-foreground">{row.tech}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;

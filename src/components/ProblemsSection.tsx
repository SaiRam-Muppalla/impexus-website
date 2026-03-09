import { useInView } from "@/hooks/useInView";
import { BookX, UserX, Settings2, TrendingDown, AlertTriangle, Unplug } from "lucide-react";

const problems = [
  {
    icon: BookX,
    title: "Outdated Curriculum",
    desc: "Academic syllabi lag behind industry trends, leaving students unprepared for modern technology roles and real-world demands.",
    color: "from-red-500 to-rose-500",
  },
  {
    icon: UserX,
    title: "Lack of Skilled Faculty",
    desc: "Many institutions lack faculty with hands-on industry experience in emerging technologies like AI, Cloud, and DevOps.",
    color: "from-orange-500 to-amber-500",
  },
  {
    icon: Settings2,
    title: "Ineffective Teaching Methods",
    desc: "Traditional lecture-based teaching fails to develop practical problem-solving and coding skills essential for tech careers.",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: TrendingDown,
    title: "Low Employability Rates",
    desc: "Studies show only 20-30% of engineering graduates are considered employable by the IT industry without additional training.",
    color: "from-pink-500 to-red-500",
  },
  {
    icon: AlertTriangle,
    title: "No Placement Readiness",
    desc: "Students lack structured preparation for aptitude tests, coding rounds, technical interviews, and resume building.",
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: Unplug,
    title: "Industry-Academia Disconnect",
    desc: "Minimal collaboration between colleges and employers means students graduate without exposure to real-world workflows and tools.",
    color: "from-blue-500 to-indigo-500",
  },
];

const ProblemsSection = () => {
  const { ref, isInView } = useInView(0.1);

  return (
    <section ref={ref} className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-14 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-2">The Challenge</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Problems We <span className="text-primary">Address</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-3xl mx-auto">
            Indian engineering education faces critical gaps that prevent students from becoming industry-ready. Impexus tackles these challenges head-on with structured, campus-integrated solutions.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((p, i) => (
            <div
              key={p.title}
              className={`group relative rounded-xl border border-border bg-card p-6 hover:shadow-lg transition-all duration-600 hover:-translate-y-1 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: isInView ? `${i * 80}ms` : "0ms" }}
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${p.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <p.icon size={24} className="text-white" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className={`mt-14 rounded-2xl border border-primary/20 bg-primary/5 p-8 md:p-10 text-center transition-all duration-700 delay-500 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground mb-3">
            Impexus bridges these gaps with <span className="text-primary">structured, campus-integrated L&D programs</span>
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Our proven model transforms the learning experience from passive instruction to active, industry-aligned skill development — directly on campus.
          </p>
          <a
            href="#services"
            onClick={(e) => { e.preventDefault(); document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" }); }}
            className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Explore Our Solutions
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;

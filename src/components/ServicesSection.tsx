import { useInView } from "@/hooks/useInView";
import { useState } from "react";
import {
  Code, Globe, Cloud, Brain, Shield, Smartphone, Cpu, Wrench,
  GraduationCap, Users, Trophy, FolderKanban, ChevronRight
} from "lucide-react";

const categories = [
  { key: "all", label: "All Programs" },
  { key: "tech", label: "Technical" },
  { key: "career", label: "Career Prep" },
  { key: "innovation", label: "Innovation" },
];

const services = [
  {
    icon: Code, title: "Programming & CS Foundations", cat: "tech",
    desc: "Build strong coding fundamentals with C, C++, Java, Python, JavaScript, Go — plus DSA, OOP, and algorithm design.",
  },
  {
    icon: Globe, title: "Full Stack Web Development", cat: "tech",
    desc: "Master modern web development with React, Next.js, Node.js, databases, REST APIs, and production-ready architecture.",
  },
  {
    icon: Cloud, title: "Cloud Computing & DevOps", cat: "tech",
    desc: "AWS, Azure, GCP, Docker, Kubernetes, CI/CD pipelines — learn modern cloud infrastructure and deployment.",
  },
  {
    icon: Brain, title: "AI, ML & Data Science", cat: "tech",
    desc: "Machine Learning, Deep Learning, NLP, Computer Vision using TensorFlow, PyTorch, Pandas, and NumPy.",
  },
  {
    icon: Shield, title: "Cybersecurity & Ethical Hacking", cat: "tech",
    desc: "Network security, ethical hacking, vulnerability assessment using Kali Linux, Wireshark, and security tools.",
  },
  {
    icon: Smartphone, title: "Mobile App Development", cat: "tech",
    desc: "Build Android and cross-platform apps with Kotlin, Flutter, and React Native.",
  },
  {
    icon: Cpu, title: "Emerging Technologies", cat: "innovation",
    desc: "Generative AI, prompt engineering, blockchain, Web3, IoT, and edge computing exploration.",
  },
  {
    icon: Wrench, title: "Software Development Tools", cat: "tech",
    desc: "Git, GitHub, VS Code, Postman, Docker Desktop, CI/CD tools, and agile practices.",
  },
  {
    icon: GraduationCap, title: "Placement Preparation", cat: "career",
    desc: "Aptitude training, competitive coding, system design, mock interviews, and resume building.",
  },
  {
    icon: Users, title: "Soft Skills & Professional Dev", cat: "career",
    desc: "Communication, public speaking, leadership, teamwork, time management, and interview readiness.",
  },
  {
    icon: Trophy, title: "Hackathons & Innovation", cat: "innovation",
    desc: "Campus hackathons, real-world problem solving, prototype development, and applied learning.",
  },
  {
    icon: FolderKanban, title: "Project-Based Learning", cat: "innovation",
    desc: "Mini projects, industry-style implementation, final year mentoring, and technology bootcamps.",
  },
];

const ServiceCard = ({ service, index, isInView }: { service: typeof services[0]; index: number; isInView: boolean }) => (
  <div
    className={`group rounded-2xl border border-border bg-card p-6 card-elevated transition-all duration-500 ${
      isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
    }`}
    style={{ transitionDelay: isInView ? `${index * 60}ms` : "0ms" }}
  >
    <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
      <service.icon size={22} className="text-primary" />
    </div>
    <h3 className="font-heading font-semibold text-base text-foreground mb-2">{service.title}</h3>
    <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
    <div className="mt-4 flex items-center gap-1 text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
      Learn more <ChevronRight size={14} />
    </div>
  </div>
);

const ServicesSection = () => {
  const { ref, isInView } = useInView(0.05);
  const [filter, setFilter] = useState("all");

  const filtered = filter === "all" ? services : services.filter((s) => s.cat === filter);

  return (
    <section id="services" ref={ref} className="py-24 px-6 section-alt">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-6 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-xs mb-3">Our Services</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground tracking-tight">
            Comprehensive <span className="gradient-text">L&D Programs</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-base">
            Industry-aligned programs designed to enhance student employability and technical capability.
          </p>
        </div>

        {/* Category tabs */}
        <div className={`flex flex-wrap justify-center gap-2 mb-12 transition-all duration-700 delay-100 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setFilter(cat.key)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === cat.key
                  ? "bg-primary text-primary-foreground shadow-[0_2px_16px_-4px_hsl(var(--primary)/0.4)]"
                  : "bg-card text-muted-foreground border border-border hover:text-foreground hover:border-primary/30"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

import { useInView } from "@/hooks/useInView";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Code, Globe, Cloud, Brain, Shield, Smartphone, Cpu, Wrench,
  GraduationCap, Users, Trophy, FolderKanban, ChevronDown, ArrowRight
} from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Programming & CS Foundations",
    color: "from-blue-500 to-cyan-500",
    slug: "programming-cs-foundations",
    items: ["C, C++, Java, Python, JavaScript, Go", "Data Structures & Algorithms", "Object-Oriented Programming", "Problem Solving & Algorithm Design"],
  },
  {
    icon: Globe,
    title: "Full Stack Web Development",
    color: "from-green-500 to-emerald-500",
    slug: "full-stack-web-development",
    items: ["React.js, Next.js, Angular, Tailwind CSS", "Node.js, Express.js, Spring Boot, Django", "MySQL, PostgreSQL, MongoDB, Redis", "REST APIs, GraphQL, Database Design"],
  },
  {
    icon: Cloud,
    title: "Cloud Computing & DevOps",
    color: "from-purple-500 to-violet-500",
    slug: "cloud-computing-devops",
    items: ["AWS, Azure, Google Cloud Platform", "Docker, Kubernetes, Terraform", "Git, GitHub Actions, Jenkins, CI/CD", "Linux Administration, Monitoring"],
  },
  {
    icon: Brain,
    title: "AI, ML & Data Science",
    color: "from-pink-500 to-rose-500",
    slug: "ai-ml-data-science",
    items: ["Machine Learning & Deep Learning", "NLP, Computer Vision", "Pandas, NumPy, Scikit-learn, TensorFlow, PyTorch", "Data Analysis & Visualization"],
  },
  {
    icon: Shield,
    title: "Cybersecurity & Ethical Hacking",
    color: "from-red-500 to-orange-500",
    slug: "cybersecurity-ethical-hacking",
    items: ["Cybersecurity Fundamentals & Network Security", "Ethical Hacking & Web Security", "Vulnerability Assessment", "Kali Linux, Wireshark, Security Tools"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    color: "from-indigo-500 to-blue-500",
    slug: "mobile-app-development",
    items: ["Android (Java/Kotlin)", "Flutter", "React Native", "Cross-platform Development"],
  },
  {
    icon: Cpu,
    title: "Emerging Technologies",
    color: "from-amber-500 to-yellow-500",
    slug: "emerging-technologies",
    items: ["Generative AI & Prompt Engineering", "AI Tools for Development", "Blockchain & Web3 Basics", "IoT & Edge Computing"],
  },
  {
    icon: Wrench,
    title: "Software Development Tools",
    color: "from-teal-500 to-cyan-500",
    slug: "software-development-tools",
    items: ["Git & GitHub, VS Code, Postman", "Docker Desktop, CI/CD Tools", "Agile Development Practices", "Industry-standard Workflows"],
  },
  {
    icon: GraduationCap,
    title: "Placement Preparation",
    color: "from-blue-600 to-indigo-600",
    slug: "placement-preparation",
    items: ["Aptitude & Logical Reasoning", "Competitive Coding & DSA Practice", "System Design & Technical Interviews", "Mock Interviews & Resume Building"],
  },
  {
    icon: Users,
    title: "Soft Skills & Professional Dev",
    color: "from-emerald-500 to-green-500",
    slug: "soft-skills-professional-dev",
    items: ["Communication & Public Speaking", "Professional Etiquette & Leadership", "Team Collaboration & Time Management", "Interview Readiness & Workplace Behavior"],
  },
  {
    icon: Trophy,
    title: "Hackathons & Innovation",
    color: "from-orange-500 to-red-500",
    slug: "hackathons-innovation",
    items: ["Campus Technology Hackathons", "Real-world Problem Solving", "Working Prototype Development", "Creativity & Applied Learning"],
  },
  {
    icon: FolderKanban,
    title: "Project-Based Learning",
    color: "from-violet-500 to-purple-500",
    slug: "project-based-learning",
    items: ["Mini & Industry-Style Projects", "Final Year Project Mentoring", "Technology Project Bootcamps", "Real Development Workflows"],
  },
];

const ServiceCard = ({ service, index, isInView }: { service: typeof services[0]; index: number; isInView: boolean }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`group rounded-xl border border-border bg-card p-6 hover:shadow-lg transition-all duration-500 hover:-translate-y-1 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: isInView ? `${index * 60}ms` : "0ms" }}
    >
      <Link to={`/topic/${service.slug}`} aria-label={`Learn more about ${service.title}`} className="block">
        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
          <service.icon size={24} className="text-white" />
        </div>
        <h3 className="font-heading font-semibold text-lg text-foreground mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
      </Link>
      <ul className={`space-y-2 overflow-hidden transition-all duration-300 ${expanded ? "max-h-40" : "max-h-[4.5rem]"}`}>
        {service.items.map((item) => (
          <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
            {item}
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-between mt-3 gap-2">
        {service.items.length > 2 ? (
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-1 text-xs font-medium text-primary hover:underline"
          >
            {expanded ? "Show less" : "Show more"}
            <ChevronDown size={14} className={`transition-transform ${expanded ? "rotate-180" : ""}`} />
          </button>
        ) : <span />}
        <Link
          to={`/topic/${service.slug}`}
          className="flex items-center gap-1 text-xs font-medium text-primary hover:underline"
        >
          Learn more
          <ArrowRight size={12} />
        </Link>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const { ref, isInView } = useInView(0.05);

  return (
    <section id="services" ref={ref} className="py-20 px-6 section-light">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-12 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-2">Our Services</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Comprehensive <span className="text-primary">L&D Programs</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-3xl mx-auto">
            Industry-aligned programs designed to enhance student employability and technical capability — from programming foundations to career readiness.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

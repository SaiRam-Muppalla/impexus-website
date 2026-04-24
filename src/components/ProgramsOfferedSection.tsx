import { useInView } from "@/hooks/useInView";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Heart, Presentation, Dumbbell, GraduationCap, Briefcase, Lightbulb,
  Calendar, Clock, Award, ChevronRight
} from "lucide-react";

// Map each category id to its detailed subpage slug.
const categorySlugMap: Record<string, string> = {
  csr: "csr-initiatives",
  workshops: "workshops",
  trainings: "training-programs",
  campus: "campus-programs",
  corporate: "corporate-hiring",
};

const programCategories = [
  {
    id: "csr",
    label: "CSR Initiatives",
    icon: Heart,
    color: "from-rose-500 to-pink-500",
    description: "Corporate Social Responsibility programs designed to uplift underprivileged students and create equal access to quality tech education.",
    programs: [
      { title: "Rural Campus Tech Literacy", desc: "Bringing foundational coding and digital skills to Tier-3 and rural engineering colleges." },
      { title: "Women in Tech Bootcamps", desc: "Dedicated training programs to empower women students in STEM with modern tech skills." },
      { title: "Scholarship-based Skill Programs", desc: "Fully sponsored programs for economically weaker students in partnership with CSR-funded colleges." },
      { title: "Community Coding Drives", desc: "Open-access coding marathons and tech awareness camps conducted across campuses." },
    ],
  },
  {
    id: "workshops",
    label: "Workshops",
    icon: Presentation,
    color: "from-blue-500 to-cyan-500",
    description: "Intensive, focused workshops on trending technologies — designed for quick skill acquisition and hands-on experience.",
    programs: [
      { title: "AI & Generative AI Workshop", desc: "Hands-on sessions on ChatGPT, Prompt Engineering, LLMs, and building AI-powered applications." },
      { title: "Cloud & DevOps Bootcamp", desc: "Intensive 2-3 day workshops on AWS, Docker, Kubernetes, and CI/CD pipelines." },
      { title: "Full Stack Development Sprint", desc: "Build a complete web app in a weekend using React, Node.js, and MongoDB." },
      { title: "Cybersecurity Awareness Workshop", desc: "Learn ethical hacking basics, network security, and vulnerability assessment in a hands-on setting." },
      { title: "Data Science & Visualization", desc: "Explore data analysis with Python, Pandas, and build interactive dashboards." },
    ],
  },
  {
    id: "trainings",
    label: "Training Programs",
    icon: Dumbbell,
    color: "from-green-500 to-emerald-500",
    description: "Semester-long and intensive training programs integrated into the academic calendar for deep, sustained learning.",
    programs: [
      { title: "Semester-Long Skill Development", desc: "30-60 hour programs running alongside the academic semester covering core tech stacks." },
      { title: "Placement Preparation Training", desc: "Structured aptitude, coding, and interview preparation for upcoming placement seasons." },
      { title: "Faculty Development Programs", desc: "Upskilling college faculty on modern technologies and teaching methodologies." },
      { title: "Certification-Oriented Courses", desc: "Industry-recognized certification prep for AWS, Azure, Google Cloud, and more." },
      { title: "Summer/Winter Tech Bootcamps", desc: "Intensive vacation programs for accelerated learning in trending technology domains." },
    ],
  },
  {
    id: "campus",
    label: "Campus Programs",
    icon: GraduationCap,
    color: "from-purple-500 to-violet-500",
    description: "End-to-end campus transformation programs that build a complete tech learning ecosystem within institutions.",
    programs: [
      { title: "Campus Technology Lab Setup", desc: "Help institutions set up modern tech labs with cloud infrastructure and dev tools." },
      { title: "Hackathon & Innovation Challenges", desc: "Organize campus-wide hackathons with real-world problem statements and mentorship." },
      { title: "Industry Connect Sessions", desc: "Bridge students with industry professionals through guest lectures and mentoring sessions." },
      { title: "Project-Based Learning Tracks", desc: "Guided mini and capstone projects following real development workflows." },
    ],
  },
  {
    id: "corporate",
    label: "Corporate Hiring",
    icon: Briefcase,
    color: "from-amber-500 to-orange-500",
    description: "Connect trained, pre-assessed, job-ready graduates with hiring companies looking for campus talent.",
    programs: [
      { title: "Industry-Ready Talent Pipeline", desc: "Pre-assessed and skilled students ready for direct hiring by technology companies." },
      { title: "Hiring Partner Network", desc: "Connect companies with trained campus talent through structured hiring drives." },
      { title: "Custom Skill Tracks for Employers", desc: "Tailor training programs based on specific employer technology requirements." },
    ],
  },
];

const ProgramsOfferedSection = () => {
  const { ref, isInView } = useInView(0.05);
  const [activeTab, setActiveTab] = useState("csr");

  const activeCategory = programCategories.find((c) => c.id === activeTab)!;

  return (
    <section id="programs" ref={ref} className="py-20 px-6 section-light">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-12 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-2">What We Offer</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Programs & <span className="text-primary">Initiatives</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-3xl mx-auto">
            From CSR-driven social impact to corporate hiring pipelines — Impexus delivers a complete spectrum of campus skill development programs.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className={`flex flex-wrap justify-center gap-3 mb-10 transition-all duration-700 delay-200 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {programCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === cat.id
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/30"
              }`}
            >
              <cat.icon size={16} />
              {cat.label}
            </button>
          ))}
        </div>

        {/* Active Category Content */}
        <div className={`transition-all duration-500 ${isInView ? "opacity-100" : "opacity-0"}`}>
          <div className="mb-8 text-center">
            <div className={`inline-flex w-14 h-14 rounded-xl bg-gradient-to-br ${activeCategory.color} items-center justify-center mb-4`}>
              <activeCategory.icon size={28} className="text-white" />
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">{activeCategory.description}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {activeCategory.programs.map((prog, i) => (
              <Link
                to={`/topic/${categorySlugMap[activeCategory.id]}`}
                key={prog.title}
                className="group rounded-xl border border-border bg-card p-5 hover:shadow-md hover:border-primary/20 transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="flex items-start gap-3">
                  <ChevronRight size={18} className="text-primary mt-0.5 shrink-0 group-hover:translate-x-0.5 transition-transform" />
                  <div>
                    <h4 className="font-heading font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">{prog.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{prog.desc}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Stats bar */}
        <div className={`mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 transition-all duration-700 delay-300 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {[
            { icon: Calendar, value: "50+", label: "Programs Delivered" },
            { icon: Clock, value: "10,000+", label: "Training Hours" },
            { icon: GraduationCap, value: "5,000+", label: "Students Impacted" },
            { icon: Award, value: "10+", label: "Campus Partners" },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-4 rounded-xl border border-border bg-card">
              <stat.icon size={24} className="text-primary mx-auto mb-2" />
              <p className="text-2xl font-heading font-bold text-foreground">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsOfferedSection;

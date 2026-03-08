import { useInView } from "@/hooks/useInView";
import { ExternalLink } from "lucide-react";
import projectEcommerce from "@/assets/project-ecommerce.jpg";
import projectLms from "@/assets/project-lms.jpg";
import projectHealth from "@/assets/project-health.jpg";
import projectChatbot from "@/assets/project-chatbot.jpg";

const projects = [
  { title: "E-Commerce Platform", category: "Full Stack", img: projectEcommerce },
  { title: "Learning Management System", category: "Web App", img: projectLms },
  { title: "Health Tracker App", category: "Mobile", img: projectHealth },
  { title: "AI Chatbot", category: "AI / ML", img: projectChatbot },
];

const ProjectsSection = () => {
  const { ref, isInView } = useInView(0.1);

  return (
    <section ref={ref} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-12 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-2">Portfolio</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Student <span className="text-primary">Projects</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className={`group rounded-xl overflow-hidden border border-border transition-all duration-700 hover:shadow-xl hover:-translate-y-1 ${
                isInView ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
              style={{ transitionDelay: isInView ? `${i * 100}ms` : "0ms" }}
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/60 transition-all duration-500 flex items-center justify-center">
                  <ExternalLink size={28} className="text-background opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
              <div className="p-4 bg-card">
                <span className="text-[10px] uppercase tracking-widest text-primary font-medium">{p.category}</span>
                <h3 className="font-heading font-semibold text-foreground text-sm mt-1">{p.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

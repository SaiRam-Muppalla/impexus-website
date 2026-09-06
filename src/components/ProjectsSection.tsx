import { useInView } from "@/hooks/useInView";
import { ArrowUpRight } from "lucide-react";

const projects = [
  { title: "E-Commerce Platform", img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=600&q=80" },
  { title: "Learning Management System", img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80" },
  { title: "AI-Powered Chatbot", img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=600&q=80" },
  { title: "Cloud Dashboard", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80" },
];

const ProjectsSection = () => {
  const { ref, isInView } = useInView(0.1);

  return (
    <section ref={ref} className="py-20 px-6">
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
              className={`group rounded-xl overflow-hidden border border-border transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl ${
                isInView ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
              style={{ transitionDelay: isInView ? `${i * 100}ms` : "0ms" }}
            >
              <div className={`relative overflow-hidden media-frame ${isInView ? "is-visible" : ""}`}>
                <img
                  src={p.img}
                  alt={p.title}
                  className="media-zoom w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/15 transition-colors duration-300" />
              </div>
              <div className="p-4 bg-card flex items-center justify-between gap-2">
                <h3 className="font-heading font-semibold text-foreground text-sm transition-transform duration-300 group-hover:-translate-y-0.5">
                  {p.title}
                </h3>
                <ArrowUpRight
                  size={16}
                  aria-hidden="true"
                  className="text-primary opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

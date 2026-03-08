import { useInView } from "@/hooks/useInView";

const projects = [
  { title: "E-Commerce Platform", tag: "Full Stack", img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80" },
  { title: "Learning Management System", tag: "Web App", img: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=600&q=80" },
  { title: "Health Tracker App", tag: "Mobile", img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80" },
  { title: "AI Chatbot", tag: "AI / ML", img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=600&q=80" },
];

const ProjectsSection = () => {
  const { ref, isInView } = useInView(0.1);

  return (
    <section ref={ref} className="py-24 px-6 section-alt">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-14 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-xs mb-3">Portfolio</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground tracking-tight">
            Student <span className="gradient-text">Projects</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className={`group rounded-2xl overflow-hidden border border-border bg-card card-elevated transition-all duration-700 ${
                isInView ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
              style={{ transitionDelay: isInView ? `${i * 100}ms` : "0ms" }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="absolute top-3 right-3 px-3 py-1 rounded-full text-[10px] font-medium bg-card/90 backdrop-blur-sm text-foreground border border-border">
                  {p.tag}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-heading font-semibold text-foreground text-sm">{p.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

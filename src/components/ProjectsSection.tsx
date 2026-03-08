const ProjectsSection = () => {
  const projects = [
    {
      title: "Project Showcase",
      desc: "Experience immersive learning through collaborative project development.",
      img: "https://images.unsplash.com/photo-1525034405510-833d4c7444a8?auto=format&fit=crop&w=500&h=360",
    },
    {
      title: "Explore",
      desc: "Hands-on coding projects to build real-world skills.",
      img: "https://images.unsplash.com/photo-1696834137451-f52f471a58bc?auto=format&fit=crop&w=500&h=360",
    },
    {
      title: "Future Leaders",
      desc: "Join us in creating impactful solutions through teamwork.",
      img: "https://images.unsplash.com/photo-1504384118609-1b1bd5e1ff15?auto=format&fit=crop&w=500&h=360",
    },
    {
      title: "Innovation",
      desc: "Developing tomorrow's technology leaders today.",
      img: "https://images.unsplash.com/photo-1581726690015-c9861fa5057f?auto=format&fit=crop&w=500&h=360",
    },
  ];

  return (
    <section id="programs" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Innovative Projects
          </h2>
          <p className="text-muted-foreground">
            Explore hands-on projects that foster real-world programming skills.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {projects.map((p) => (
            <div key={p.title} className="rounded-xl overflow-hidden bg-card border border-border group hover:shadow-lg transition-all">
              <div className="overflow-hidden">
                <img src={p.img} alt={p.title} className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-4">
                <h3 className="font-heading font-semibold text-foreground mb-1">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a href="#contact" className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors">
            Join
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

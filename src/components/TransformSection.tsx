const TransformSection = () => {
  return (
    <section className="section-light py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Transforming Education, Shaping Leaders
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Impexus Technologies is moving forward with a mission to create critical thinkers and problem solvers through industry-driven curriculum, expert mentorship, and hands-on experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Expert Mentorship Provided",
              desc: "Guiding students with industry insights and personalized support for their career growth.",
              img: "https://images.unsplash.com/photo-1697136660379-868f1019c5bc?auto=format&fit=crop&w=500&h=350",
            },
            {
              title: "Project-Based Learning",
              desc: "Engaging students in real-world projects to develop critical thinking and problem-solving skills.",
              img: "https://images.unsplash.com/photo-1701701046353-89f1a671c24b?auto=format&fit=crop&w=500&h=350",
            },
            {
              title: "Innovative Curriculum Design",
              desc: "Tailored programs that foster creativity and leadership in technology and programming.",
              img: "https://images.unsplash.com/photo-1582110331670-c5878f53bd3c?auto=format&fit=crop&w=500&h=350",
            },
          ].map((item) => (
            <div key={item.title} className="bg-card rounded-xl overflow-hidden shadow-sm border border-border group hover:shadow-md transition-shadow">
              <img src={item.img} alt={item.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="p-5">
                <h3 className="font-heading font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransformSection;

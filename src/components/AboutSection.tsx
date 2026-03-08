const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
            Empowering Future Innovators Together
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            At Impexus Technologies, we equip students with real-world programming skills through immersive learning, shaping future-ready professionals who lead innovation and solve problems.
          </p>
          <a
            href="#contact"
            className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
          >
            Join
          </a>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://images.unsplash.com/photo-1624388611710-bdf95023d1c2?auto=format&fit=crop&w=500&h=400"
            alt="Online learning platform"
            className="rounded-lg w-full h-48 object-cover col-span-2"
          />
          <img
            src="https://images.unsplash.com/photo-1650278795309-26295c74cf2b?auto=format&fit=crop&w=400&h=300"
            alt="Coding in lecture hall"
            className="rounded-lg w-full h-40 object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1562893492-afd14ae24913?auto=format&fit=crop&w=400&h=300"
            alt="Computer lab"
            className="rounded-lg w-full h-40 object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

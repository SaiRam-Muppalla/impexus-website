const logos = [
  { src: "https://assets.zyrosite.com/m5Kn7DBylbiyM0eW/interioo-AR03qLLQoKix22M7.jpg", alt: "Interioo" },
  { src: "https://assets.zyrosite.com/m5Kn7DBylbiyM0eW/deep-design-m7Vbo34MMqsQvo9o.jpg", alt: "Deep Design" },
  { src: "https://assets.zyrosite.com/m5Kn7DBylbiyM0eW/e-revive-m5Kn7MqRlBHKE0VE.png", alt: "E-Revive" },
  { src: "https://assets.zyrosite.com/m5Kn7DBylbiyM0eW/msme-YNq28B0qklS6GrO6.png", alt: "MSME" },
  { src: "https://assets.zyrosite.com/m5Kn7DBylbiyM0eW/mlew-mnlJBJBkolTE3kkB.webp", alt: "MLEW" },
  { src: "https://assets.zyrosite.com/m5Kn7DBylbiyM0eW/diet-YanJj1LM39t1l3DQ.jpg", alt: "DIET" },
  { src: "https://assets.zyrosite.com/m5Kn7DBylbiyM0eW/sviet-mnlJBJlLpnhZzaeX.jpg", alt: "SVIET" },
];

const ClientsSection = () => {
  return (
    <section className="section-light py-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <p className="text-primary font-medium tracking-widest uppercase text-sm mb-2 text-center">Trusted By</p>
        <h2 className="text-3xl font-heading font-bold text-foreground text-center mb-10">
          Our Clients & <span className="text-primary">Brand Partners</span>
        </h2>
        <div className="relative overflow-hidden group">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[hsl(var(--section-dark))] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[hsl(var(--section-dark))] to-transparent z-10" />
          <div className="flex animate-scroll-left group-hover:[animation-play-state:paused] w-max gap-16 items-center py-4">
            {[...logos, ...logos].map((logo, i) => (
              <img
                key={i}
                src={logo.src}
                alt={logo.alt}
                className="h-16 w-auto object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 flex-shrink-0"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;

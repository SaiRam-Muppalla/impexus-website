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
    <section className="py-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <p className="text-primary font-medium tracking-[0.2em] uppercase text-xs mb-3 text-center">Trusted By</p>
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground text-center mb-12 tracking-tight">
          Our Clients & <span className="gradient-text">Partners</span>
        </h2>
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
          <div className="flex animate-scroll-left w-max gap-16 items-center py-4">
            {[...logos, ...logos].map((logo, i) => (
              <img
                key={i}
                src={logo.src}
                alt={logo.alt}
                className="h-14 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 flex-shrink-0"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;

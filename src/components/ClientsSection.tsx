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
    <section className="section-light py-16 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-heading font-bold text-foreground text-center mb-10">
          Our Clients & Brand Partners
        </h2>
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll-left w-max gap-12 items-center">
            {[...logos, ...logos].map((logo, i) => (
              <img
                key={i}
                src={logo.src}
                alt={logo.alt}
                className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all flex-shrink-0"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;

const logos = [
  { src: "/logos/msme.jpg", alt: "MSME", className: "max-h-16 max-w-[160px]" },
  { src: "/logos/aicte2.png", alt: "AICTE", className: "max-h-14 max-w-[140px]" },
  { src: "/logos/microsoft.svg", alt: "Microsoft", className: "max-h-10 max-w-[120px]" },
  { src: "/logos/google.svg", alt: "Google", className: "max-h-10 max-w-[120px]" },
  { src: "/logos/anthropic.svg", alt: "Anthropic", className: "max-h-10 max-w-[120px]" },
  { src: "/logos/task.jpg", alt: "TASK", className: "max-h-16 max-w-[160px]" },
];

const ClientsSection = () => {
  return (
    <section className="py-20 px-6 section-light overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-2">Trusted By</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Our Partners & <span className="text-primary">Collaborators</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            We work with leading government bodies, skill councils, and global technology companies to deliver impactful programs.
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[hsl(var(--section-dark))] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[hsl(var(--section-dark))] to-transparent z-10" />

          <div className="flex animate-scroll-left w-max items-center gap-16 md:gap-24">
            {[...logos, ...logos, ...logos].map((logo, i) => (
              <div key={i} className="flex-shrink-0 flex items-center justify-center h-16 w-40">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className={`${logo.className || "max-h-12 max-w-[120px]"} w-auto object-contain hover:grayscale transition-all duration-300`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;

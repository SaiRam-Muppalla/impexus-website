const logos = [
  { src: "/logos/aicte.png", alt: "AICTE" },
  { src: "/logos/apssdc.png", alt: "APSSDC" },
  { src: "/logos/task.jpg", alt: "TASK" },
  { src: "/logos/microsoft.svg", alt: "Microsoft" },
  { src: "/logos/google.svg", alt: "Google" },
  { src: "/logos/anthropic.svg", alt: "Anthropic" },
];

const textLogos = [
  { name: "MSME", subtitle: "Govt. of India" },
  { name: "APSCHE", subtitle: "Andhra Pradesh" },
  { name: "NSDC", subtitle: "Skill India" },
  { name: "Lovable", subtitle: "AI Platform" },
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

        {/* Scrolling logo strip */}
        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[hsl(var(--section-dark))] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[hsl(var(--section-dark))] to-transparent z-10" />

          <div className="flex animate-scroll-left w-max gap-10 items-center py-4">
            {[...logos, ...textLogos.map(t => t), ...logos, ...textLogos.map(t => t)].map((item, i) => (
              "src" in item ? (
                <div
                  key={`img-${i}`}
                  className="flex-shrink-0 h-16 w-28 md:h-20 md:w-36 rounded-xl border border-border bg-card flex items-center justify-center p-3 hover:shadow-md hover:border-primary/20 transition-all"
                >
                  <img
                    src={(item as any).src}
                    alt={(item as any).alt}
                    className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                    loading="lazy"
                  />
                </div>
              ) : (
                <div
                  key={`text-${i}`}
                  className="flex-shrink-0 h-16 w-28 md:h-20 md:w-36 rounded-xl border border-border bg-card flex flex-col items-center justify-center p-3 hover:shadow-md hover:border-primary/20 transition-all"
                >
                  <span className="font-heading font-bold text-foreground text-sm md:text-base">{(item as any).name}</span>
                  <span className="text-[10px] text-muted-foreground">{(item as any).subtitle}</span>
                </div>
              )
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;

import { useInView } from "@/hooks/useInView";

const partners = [
  {
    category: "Government & Skill Bodies",
    logos: [
      { name: "MSME", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Emblem_of_India.svg/200px-Emblem_of_India.svg.png" },
      { name: "AICTE", url: "https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/All_India_Council_for_Technical_Education_logo.png/220px-All_India_Council_for_Technical_Education_logo.png" },
      { name: "APSCHE", url: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3a/Emblem_of_Andhra_Pradesh.svg/150px-Emblem_of_Andhra_Pradesh.svg.png" },
      { name: "APSDC", url: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3a/Emblem_of_Andhra_Pradesh.svg/150px-Emblem_of_Andhra_Pradesh.svg.png" },
      { name: "NSDC", url: "https://upload.wikimedia.org/wikipedia/en/thumb/5/57/National_Skill_Development_Corporation_%28logo%29.png/220px-National_Skill_Development_Corporation_%28logo%29.png" },
      { name: "TASK", url: "https://upload.wikimedia.org/wikipedia/en/thumb/9/95/Emblem_of_Telangana.svg/150px-Emblem_of_Telangana.svg.png" },
    ],
  },
  {
    category: "Technology Partners",
    logos: [
      { name: "Microsoft", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/320px-Microsoft_logo_%282012%29.svg.png" },
      { name: "Google", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/320px-Google_2015_logo.svg.png" },
      { name: "Anthropic", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Anthropic_logo.svg/320px-Anthropic_logo.svg.png" },
      { name: "Lovable", url: "https://lovable.dev/lovable-logo.png" },
    ],
  },
];

const ClientsSection = () => {
  const { ref, isInView } = useInView(0.1);

  return (
    <section ref={ref} className="py-20 px-6 section-light">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-14 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-2">Trusted By</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Our Partners & <span className="text-primary">Collaborators</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            We work with leading government bodies, skill councils, and global technology companies to deliver impactful programs.
          </p>
        </div>

        {partners.map((group, gi) => (
          <div
            key={group.category}
            className={`mb-12 last:mb-0 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ transitionDelay: isInView ? `${gi * 200}ms` : "0ms" }}
          >
            <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-widest text-center mb-8">
              {group.category}
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {group.logos.map((logo, i) => (
                <div
                  key={logo.name}
                  className="group flex flex-col items-center gap-3 transition-all duration-500"
                  style={{ transitionDelay: isInView ? `${(gi * 200) + (i * 80)}ms` : "0ms" }}
                >
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl border border-border bg-card flex items-center justify-center p-3 group-hover:shadow-md group-hover:border-primary/20 transition-all">
                    <img
                      src={logo.url}
                      alt={logo.name}
                      className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                      loading="lazy"
                    />
                  </div>
                  <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                    {logo.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientsSection;

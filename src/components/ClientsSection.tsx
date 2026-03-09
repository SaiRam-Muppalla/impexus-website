import { useInView } from "@/hooks/useInView";

const logos = [
  { src: "/logos/msme.png", alt: "MSME" },
  { src: "/logos/aicte2.png", alt: "AICTE" },
  { src: "/logos/microsoft.svg", alt: "Microsoft" },
  { src: "/logos/google.svg", alt: "Google" },
  { src: "/logos/anthropic.svg", alt: "Anthropic" },
  { src: "/logos/task.jpg", alt: "TASK" },
];

const ClientsSection = () => {
  const { ref, isInView } = useInView(0.1);

  return (
    <section ref={ref} className="py-20 px-6 section-light overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-2">Trusted By</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Our Partners & <span className="text-primary">Collaborators</span>
          </h2>
        </div>

        <div className={`grid grid-cols-3 md:grid-cols-6 gap-8 md:gap-10 items-center justify-items-center transition-all duration-700 delay-200 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {logos.map((logo, i) => (
            <div
              key={logo.alt}
              className="w-full flex items-center justify-center py-4 px-2 rounded-lg hover:bg-card hover:shadow-sm transition-all duration-300"
              style={{ transitionDelay: isInView ? `${i * 100}ms` : "0ms" }}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-10 md:h-12 w-auto max-w-[100px] object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <p className={`text-center text-sm text-muted-foreground mt-10 transition-all duration-700 delay-500 ${isInView ? "opacity-100" : "opacity-0"}`}>
          Government bodies, skill councils & global technology companies
        </p>
      </div>
    </section>
  );
};

export default ClientsSection;

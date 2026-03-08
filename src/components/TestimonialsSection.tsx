import { Star, Quote } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const testimonials = [
  {
    name: "Raj Sharma",
    role: "Computer Science Student",
    text: "Impexus transformed my skills, making me a confident programmer ready for real-world challenges. The hands-on projects were invaluable.",
    img: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=375,fit=crop/m5Kn7DBylbiyM0eW/person-1-Y4LvaOkBzzcnN3bq.jpg",
  },
  {
    name: "Parnitha Singh",
    role: "IT Engineering Student",
    text: "The hands-on approach at Impexus equipped me with essential skills for my career in tech. I landed my dream job right after the program.",
    img: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=375,fit=crop/m5Kn7DBylbiyM0eW/person-2-m5Kn7lJoj6Ijay35.webp",
  },
];

const TestimonialsSection = () => {
  const { ref, isInView } = useInView(0.15);

  return (
    <section ref={ref} className="py-24 px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/5 blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-accent/5 blur-[80px]" />

      <div className="relative max-w-4xl mx-auto">
        <div className={`text-center mb-14 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-xs mb-3">Testimonials</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground tracking-tight">
            What Our <span className="gradient-text">Students</span> Say
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`relative rounded-2xl p-8 bg-card border border-border card-elevated transition-all duration-700 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: isInView ? `${i * 150}ms` : "0ms" }}
            >
              <Quote size={32} className="text-primary/10 absolute top-6 right-6" />
              <div className="flex items-center gap-4 mb-6">
                <img src={t.img} alt={t.name} className="w-14 h-14 rounded-2xl object-cover" loading="lazy" />
                <div>
                  <p className="font-heading font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
              <div className="flex gap-0.5 mb-4">
                {Array(5).fill(0).map((_, j) => (
                  <Star key={j} size={14} className="text-accent fill-accent" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">"{t.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

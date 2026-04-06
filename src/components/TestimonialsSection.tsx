import { Star } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const testimonials = [
  {
    name: "Karthik Reddy",
    college: "B.Tech, JNTU Hyderabad",
    text: "Before Impexus, I was only doing theory in college. After the full stack program, I built a complete project and got placed in my dream company during campus placements. Really grateful for this opportunity.",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=375&h=375&q=80",
  },
  {
    name: "Priya Lakshmi",
    college: "B.Tech CSE, VIT Vellore",
    text: "The trainers at Impexus are very patient and knowledgeable. They taught us not just coding but how to think like a developer. The placement preparation sessions were extremely helpful.",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=375&h=375&q=80",
  },
  {
    name: "Venkat Subramaniam",
    college: "MCA, Osmania University",
    text: "I was worried about getting a job after MCA. Impexus AI & ML program gave me hands-on experience with real datasets. Now I am working as a data analyst in a top MNC. Thank you Impexus team!",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=375&h=375&q=80",
  },
  {
    name: "Divya Nair",
    college: "B.E, RV College Bangalore",
    text: "What I liked most about Impexus is the practical approach. No boring lectures — everything was project-based. The mentors helped us understand industry standards and best practices.",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=375&h=375&q=80",
  },
];

const TestimonialsSection = () => {
  const { ref, isInView } = useInView(0.15);

  return (
    <section ref={ref} className="py-20 px-6 relative">
      <img
        src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1920&q=60"
        alt="Indian college campus"
        className="absolute inset-0 w-full h-full object-cover opacity-10"
        loading="lazy"
      />
      <div className="relative max-w-5xl mx-auto">
        <div className={`text-center mb-12 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-2">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            What Our <span className="text-primary">Students</span> Say
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`testimonial-card rounded-xl p-8 text-center shadow-sm border border-border transition-all duration-700 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: isInView ? `${i * 150}ms` : "0ms" }}
            >
              <div className="flex justify-center mb-4">
                {Array(5).fill(0).map((_, j) => (
                  <Star key={j} size={18} className="text-primary fill-primary" />
                ))}
              </div>
              <p className="text-muted-foreground italic mb-6">"{t.text}"</p>
              <img src={t.img} alt={t.name} className="w-16 h-16 rounded-full mx-auto mb-3 object-cover" loading="lazy" />
              <p className="font-heading font-semibold text-foreground">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.college}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
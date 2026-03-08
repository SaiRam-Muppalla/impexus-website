import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Raj Sharma",
    text: "Impexus transformed my skills, making me a confident programmer ready for real-world challenges.",
    img: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=375,fit=crop/m5Kn7DBylbiyM0eW/person-1-Y4LvaOkBzzcnN3bq.jpg",
  },
  {
    name: "Parnitha Singh",
    text: "The hands-on approach at Impexus equipped me with essential skills for my career in tech.",
    img: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=375,fit=crop/m5Kn7DBylbiyM0eW/person-2-m5Kn7lJoj6Ijay35.webp",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 px-6 relative">
      <img
        src="https://images.unsplash.com/photo-1634836023845-eddbfe9937da?auto=format&fit=crop&w=1920&q=60"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-10"
      />
      <div className="relative max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="testimonial-card rounded-xl p-8 text-center shadow-sm border border-border">
              <div className="flex justify-center mb-4">
                {Array(5).fill(0).map((_, i) => (
                  <Star key={i} size={18} className="text-primary fill-primary" />
                ))}
              </div>
              <p className="text-muted-foreground italic mb-6">"{t.text}"</p>
              <img src={t.img} alt={t.name} className="w-16 h-16 rounded-full mx-auto mb-3 object-cover" />
              <p className="font-heading font-semibold text-foreground">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

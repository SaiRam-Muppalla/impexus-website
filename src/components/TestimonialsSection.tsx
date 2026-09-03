import { useEffect, useState } from "react";
import { Quote, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useInView } from "@/hooks/useInView";

const testimonials = [
  {
    name: "Arjun Mehta",
    initials: "AM",
    role: "Frontend Developer · Web Development",
    text: "I joined Impexus with zero coding knowledge. Three months later I shipped a full-stack app and landed a job at a Hyderabad startup. The mentors don't just teach — they build alongside you.",
  },
  {
    name: "Sravani Reddy",
    initials: "SR",
    role: "React Developer · Full Stack",
    text: "The curriculum is insanely up to date. We used the same tools my current company uses — Next.js, Prisma, CI/CD. Day one at my job felt like Day 100 because of Impexus.",
  },
  {
    name: "Karthik Nair",
    initials: "KN",
    role: "Mobile Engineer · Mobile App Dev",
    text: "Three deployed apps on the Play Store. That's what I left with. Not a certificate — actual products people use. Impexus pushes you to build things that matter.",
  },
  {
    name: "Divya Lakshmi",
    initials: "DL",
    role: "Data Analyst · Data Science & AI",
    text: "I was a commerce grad terrified of Python. Now I'm running ML models at a fintech firm. The 1-on-1 mentorship sessions changed everything for me — no question was too basic.",
  },
  {
    name: "Rohit Patel",
    initials: "RP",
    role: "Backend Engineer · Full Stack",
    text: "Real standups. Real code reviews. Real deadlines. Impexus runs exactly like a product team. I didn't need to adjust to my job — I was already living it.",
  },
  {
    name: "Anjali Verma",
    initials: "AV",
    role: "UI/UX + Dev · Web Development",
    text: "My portfolio went from empty to 5 live projects in 90 days. Recruiters actually reached out to me — I never had to cold-apply. Impexus built my confidence as much as my skills.",
  },
  {
    name: "Tarun Srinivas",
    initials: "TS",
    role: "SDE-1 · Full Stack",
    text: "The peer learning environment here is unreal. My batchmates pushed me harder than any instructor could. We still help each other debug at 2am — that's the Impexus community.",
  },
  {
    name: "Nandini Rao",
    initials: "NR",
    role: "React Native Dev · Mobile App Dev",
    text: "I compared 6 institutes before choosing Impexus. Best decision of my life. The difference? They actually care whether you get placed, not just whether you finish the course.",
  },
];

const stats = [
  { value: "5,000+", label: "Students Trained" },
  { value: "10+", label: "College Collaborations" },
  { value: "Hands-On", label: "Industry Learning" },
];

const TestimonialCard = ({ testimonial }: { testimonial: (typeof testimonials)[number] }) => (
  <article className="testimonial-card flex h-[18rem] w-[20rem] shrink-0 flex-col rounded-lg border border-border p-6 md:w-[23rem]">
    <div className="mb-4 flex items-center justify-between">
      <div className="flex" aria-label="5 out of 5 stars">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} size={16} className="fill-primary text-primary" aria-hidden="true" />
        ))}
      </div>
      <Quote size={22} className="text-primary/20" aria-hidden="true" />
    </div>
    <blockquote className="flex-1 text-sm leading-6 text-muted-foreground">“{testimonial.text}”</blockquote>
    <div className="mt-5 flex items-center gap-3 border-t border-border pt-4">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
        {testimonial.initials}
      </span>
      <div className="min-w-0">
        <p className="font-heading text-sm font-semibold text-foreground">{testimonial.name}</p>
        <p className="truncate text-xs text-muted-foreground">{testimonial.role}</p>
      </div>
    </div>
  </article>
);

const TestimonialsSection = () => {
  const { ref, isInView } = useInView(0.15);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActive((current) => (current + 1) % testimonials.length);
    }, 5000);
    return () => window.clearInterval(interval);
  }, []);

  const featured = testimonials[active];

  return (
    <section ref={ref} className="section-light overflow-hidden py-20" aria-labelledby="testimonials-heading">
      <div className="mx-auto max-w-6xl px-6">
        <div className={`mb-10 text-center transition-all duration-700 ${isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">Student Stories</p>
          <h2 id="testimonials-heading" className="font-heading text-3xl font-bold text-foreground md:text-4xl">What Our Students Say</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">5,000+ students trained. Real outcomes. Here’s what they built — and where they went.</p>
        </div>

        <div className="relative mx-auto min-h-[20rem] max-w-4xl text-center" aria-live="polite">
          <Quote className="absolute left-0 top-0 h-24 w-24 text-primary/10 md:left-12" aria-hidden="true" />
          <div key={featured.name} className="animate-testimonial-in relative flex flex-col items-center px-2 py-8 md:px-20">
            <blockquote className="font-heading text-xl font-semibold leading-relaxed text-foreground md:text-2xl">“{featured.text}”</blockquote>
            <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:text-left">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">{featured.initials}</span>
              <div>
                <p className="font-heading font-semibold text-foreground">{featured.name}</p>
                <p className="text-xs text-muted-foreground">{featured.role}</p>
              </div>
              <div className="flex" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, index) => <Star key={index} size={17} className="fill-primary text-primary" aria-hidden="true" />)}
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-1.5" aria-label="Choose a student story">
            {testimonials.map((testimonial, index) => (
              <Button
                key={testimonial.name}
                type="button"
                variant="ghost"
                size="icon"
                onClick={() => setActive(index)}
                className="h-7 w-7 rounded-full p-0"
                aria-label={`Show ${testimonial.name}'s story`}
                aria-current={index === active ? "true" : undefined}
              >
                <span className={`block h-2 rounded-full transition-all ${index === active ? "w-5 bg-primary" : "w-2 bg-border"}`} />
              </Button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12 space-y-4" aria-label="More student stories">
        {[testimonials, [...testimonials].reverse()].map((row, rowIndex) => (
          <div key={rowIndex} className="testimonial-marquee overflow-hidden py-1">
            <div className={`flex w-max gap-4 ${rowIndex === 0 ? "animate-testimonial-left" : "animate-testimonial-right"}`}>
              {[...row, ...row].map((testimonial, index) => (
                <TestimonialCard key={`${rowIndex}-${testimonial.name}-${index}`} testimonial={testimonial} />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-4 px-6 sm:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-lg border border-border bg-card px-5 py-4 text-center">
            <p className="font-heading text-2xl font-bold text-primary">{stat.value}</p>
            <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
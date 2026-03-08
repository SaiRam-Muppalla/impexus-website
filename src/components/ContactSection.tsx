import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useInView } from "@/hooks/useInView";
import { toast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send, MapPin, Phone, Mail, ArrowRight } from "lucide-react";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().min(10, "Phone number must be at least 10 digits").max(15).regex(/^[+\d\s-]+$/, "Invalid phone number"),
  institution: z.string().trim().min(1, "Institution name is required").max(200),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

type ContactForm = z.infer<typeof contactSchema>;

const contactInfo = [
  { icon: Phone, label: "Phone", value: "+91 7013547471" },
  { icon: Mail, label: "Email", value: "info@impexuss.com" },
  { icon: MapPin, label: "Location", value: "Hyderabad, India" },
];

const ContactSection = () => {
  const { ref, isInView } = useInView(0.1);
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactForm) => {
    toast({ title: "Message sent!", description: `Thanks ${data.name}, we'll get back to you soon.` });
    reset();
  };

  return (
    <section id="contact" ref={ref} className="py-24 px-6 relative">
      <div className="absolute inset-0 dot-pattern opacity-30" />
      <div className="relative max-w-6xl mx-auto">
        <div className={`text-center mb-14 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-xs mb-3">Get In Touch</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground tracking-tight">
            Partner With <span className="gradient-text">Impexus</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Colleges and institutions interested in introducing industry-focused technology learning programs can collaborate with us.
          </p>
        </div>

        <div className={`grid md:grid-cols-5 gap-12 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="md:col-span-2 space-y-8">
            {contactInfo.map((item) => (
              <div key={item.label} className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-primary/8 flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-colors">
                  <item.icon size={20} className="text-primary" />
                </div>
                <div>
                  <p className="font-heading font-semibold text-foreground text-sm">{item.label}</p>
                  <p className="text-sm text-muted-foreground mt-0.5">{item.value}</p>
                </div>
              </div>
            ))}

            <div className="rounded-2xl border border-border bg-card p-6 card-elevated">
              <p className="font-heading font-semibold text-foreground text-sm mb-2">Ready to get started?</p>
              <p className="text-xs text-muted-foreground mb-4">Fill out the form and our team will reach out within 24 hours.</p>
              <a href="#" className="inline-flex items-center gap-1 text-xs font-medium text-primary">
                Learn about partnerships <ArrowRight size={12} />
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="md:col-span-3 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Input placeholder="Your Name" className="rounded-xl h-12" {...register("name")} />
                {errors.name && <p className="text-xs text-destructive mt-1.5">{errors.name.message}</p>}
              </div>
              <div>
                <Input placeholder="Your Email" className="rounded-xl h-12" {...register("email")} />
                {errors.email && <p className="text-xs text-destructive mt-1.5">{errors.email.message}</p>}
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Input placeholder="Phone Number" className="rounded-xl h-12" {...register("phone")} />
                {errors.phone && <p className="text-xs text-destructive mt-1.5">{errors.phone.message}</p>}
              </div>
              <div>
                <Input placeholder="Institution / College Name" className="rounded-xl h-12" {...register("institution")} />
                {errors.institution && <p className="text-xs text-destructive mt-1.5">{errors.institution.message}</p>}
              </div>
            </div>
            <div>
              <Textarea placeholder="Tell us about your requirements..." rows={5} className="rounded-xl resize-none" {...register("message")} />
              {errors.message && <p className="text-xs text-destructive mt-1.5">{errors.message.message}</p>}
            </div>
            <Button type="submit" disabled={isSubmitting} size="lg" className="w-full sm:w-auto gap-2 rounded-xl px-8 shadow-[0_2px_16px_-4px_hsl(var(--primary)/0.4)]">
              <Send size={16} /> Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

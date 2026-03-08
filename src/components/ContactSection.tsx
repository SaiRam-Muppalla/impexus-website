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
    <section id="contact" ref={ref} className="py-24 px-6 section-light">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-12 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-2">Get In Touch</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Partner With <span className="text-primary">Impexus</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Colleges and institutions interested in introducing industry-focused technology learning programs can collaborate with us to create impactful student skill development initiatives.
          </p>
        </div>

        <div className={`grid md:grid-cols-5 gap-10 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="md:col-span-2 space-y-4">
            {contactInfo.map((item, i) => (
              <div
                key={item.label}
                className={`flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition-all duration-500 hover:border-primary/30 hover:shadow-sm ${
                  isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                }`}
                style={{ transitionDelay: isInView ? `${200 + i * 100}ms` : "0ms" }}
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon size={18} className="text-primary" />
                </div>
                <div>
                  <p className="font-heading font-semibold text-foreground text-sm">{item.label}</p>
                  <p className="text-sm text-muted-foreground">{item.value}</p>
                </div>
              </div>
            ))}
            <div className="rounded-xl border border-border bg-card p-5">
              <p className="font-heading font-semibold text-foreground text-sm mb-2">Follow Us</p>
              <div className="flex gap-3">
                {["Instagram", "LinkedIn", "Facebook", "Twitter"].map((s) => (
                  <a key={s} href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">{s}</a>
                ))}
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="md:col-span-3 space-y-4 rounded-2xl border border-border bg-card p-6 md:p-8">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-medium text-foreground mb-1.5 block">Your Name</label>
                <Input placeholder="John Doe" {...register("name")} />
                {errors.name && <p className="text-xs text-destructive mt-1">{errors.name.message}</p>}
              </div>
              <div>
                <label className="text-xs font-medium text-foreground mb-1.5 block">Email Address</label>
                <Input placeholder="john@example.com" {...register("email")} />
                {errors.email && <p className="text-xs text-destructive mt-1">{errors.email.message}</p>}
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-medium text-foreground mb-1.5 block">Phone Number</label>
                <Input placeholder="+91 XXXXXXXXXX" {...register("phone")} />
                {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone.message}</p>}
              </div>
              <div>
                <label className="text-xs font-medium text-foreground mb-1.5 block">Institution / College</label>
                <Input placeholder="Your college name" {...register("institution")} />
                {errors.institution && <p className="text-xs text-destructive mt-1">{errors.institution.message}</p>}
              </div>
            </div>
            <div>
              <label className="text-xs font-medium text-foreground mb-1.5 block">Message</label>
              <Textarea placeholder="Tell us about your requirements..." rows={5} {...register("message")} />
              {errors.message && <p className="text-xs text-destructive mt-1">{errors.message.message}</p>}
            </div>
            <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto gap-2 group">
              <Send size={16} /> Send Message
              <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

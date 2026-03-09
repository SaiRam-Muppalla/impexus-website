import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useInView } from "@/hooks/useInView";
import { toast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send, MapPin, Phone, Mail } from "lucide-react";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().min(10, "Phone number must be at least 10 digits").max(15).regex(/^[+\d\s-]+$/, "Invalid phone number"),
  institution: z.string().trim().min(1, "Institution name is required").max(200),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

type ContactForm = z.infer<typeof contactSchema>;

const ContactSection = () => {
  const { ref, isInView } = useInView(0.15);
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactForm) => {
    toast({ title: "Message sent!", description: `Thanks ${data.name}, we'll get back to you soon.` });
    reset();
  };

  return (
    <section id="contact" ref={ref} className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4 text-foreground">
          Partner With <span className="text-primary">Impexus</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Colleges and institutions interested in introducing industry-focused technology learning programs can collaborate with us to create impactful student skill development initiatives.
        </p>

        <div className={`grid md:grid-cols-5 gap-10 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Phone size={18} className="text-primary" />
              </div>
              <div>
                <p className="font-heading font-semibold text-foreground">Phone</p>
                <p className="text-sm text-muted-foreground">+91 7013547471</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Mail size={18} className="text-primary" />
              </div>
              <div>
                <p className="font-heading font-semibold text-foreground">Email</p>
                <p className="text-sm text-muted-foreground">info@impexuss.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin size={18} className="text-primary" />
              </div>
              <div>
                <p className="font-heading font-semibold text-foreground">Location</p>
                <p className="text-sm text-muted-foreground">Hyderabad, India</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="md:col-span-3 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Input placeholder="Your Name" {...register("name")} />
                {errors.name && <p className="text-xs text-destructive mt-1">{errors.name.message}</p>}
              </div>
              <div>
                <Input placeholder="Your Email" {...register("email")} />
                {errors.email && <p className="text-xs text-destructive mt-1">{errors.email.message}</p>}
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Input placeholder="Phone Number" {...register("phone")} />
                {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone.message}</p>}
              </div>
              <div>
                <Input placeholder="Institution / College Name" {...register("institution")} />
                {errors.institution && <p className="text-xs text-destructive mt-1">{errors.institution.message}</p>}
              </div>
            </div>
            <div>
              <Textarea placeholder="Tell us about your requirements..." rows={5} {...register("message")} />
              {errors.message && <p className="text-xs text-destructive mt-1">{errors.message.message}</p>}
            </div>
            <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto gap-2">
              <Send size={16} /> Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

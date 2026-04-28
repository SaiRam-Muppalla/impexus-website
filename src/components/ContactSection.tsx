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
  name:        z.string().trim().min(1, "Name is required").max(100),
  email:       z.string().trim().email("Invalid email address").max(255),
  phone:       z.string().trim().min(10, "At least 10 digits").max(15).regex(/^[+\d\s-]+$/, "Invalid phone number"),
  institution: z.string().trim().min(1, "Institution name is required").max(200),
  message:     z.string().trim().min(10, "Message must be at least 10 characters").max(1000),
  // honeypot — must be empty; bots fill it, humans don't see it
  _hp:         z.string().max(0, "").optional(),
});

type ContactForm = z.infer<typeof contactSchema>;

const ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT as string | undefined;

const ContactSection = () => {
  const { ref, isInView } = useInView(0.15);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactForm>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (data: ContactForm) => {
    // Honeypot check (belt-and-suspenders on top of Zod)
    if (data._hp) return;

    if (!ENDPOINT) {
      toast({
        title: "Configuration error",
        description: "Form endpoint is not configured. Please contact us directly.",
        variant: "destructive",
      });
      return;
    }

    try {
      // Apps Script requires Content-Type: text/plain to skip CORS preflight.
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify({
          name:        data.name,
          email:       data.email,
          phone:       data.phone,
          institution: data.institution,
          message:     data.message,
        }),
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      toast({
        title: "Message sent!",
        description: `Thanks ${data.name}, we'll get back to you within 24 hours.`,
      });
      reset();
    } catch (err) {
      console.error("[contact] submission error:", err);
      toast({
        title: "Submission failed",
        description: "Please try again or email us at info@impexus.co.in.",
        variant: "destructive",
      });
    }
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
          {/* Contact details */}
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Phone size={18} className="text-primary" aria-hidden="true" />
              </div>
              <div>
                <p className="font-heading font-semibold text-foreground">Phone</p>
                <a href="tel:+917013547471" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  +91 7013547471
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Mail size={18} className="text-primary" aria-hidden="true" />
              </div>
              <div>
                <p className="font-heading font-semibold text-foreground">Email</p>
                <a href="mailto:info@impexus.co.in" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  info@impexus.co.in
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin size={18} className="text-primary" aria-hidden="true" />
              </div>
              <div>
                <p className="font-heading font-semibold text-foreground">Location</p>
                <p className="text-sm text-muted-foreground">Hyderabad, India</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="md:col-span-3 space-y-4"
            aria-label="Partner enquiry form"
            noValidate
          >
            {/* Honeypot — visually hidden, must stay empty */}
            <div aria-hidden="true" className="hidden">
              <label htmlFor="hp-field">Leave this blank</label>
              <input id="hp-field" tabIndex={-1} autoComplete="off" {...register("_hp")} />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="contact-name" className="block text-sm font-medium text-foreground mb-1">
                  Full Name <span className="text-destructive" aria-hidden="true">*</span>
                </label>
                <Input
                  id="contact-name"
                  placeholder="e.g. Arjun Sharma"
                  autoComplete="name"
                  aria-required="true"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "err-name" : undefined}
                  {...register("name")}
                />
                {errors.name && (
                  <p id="err-name" role="alert" className="text-xs text-destructive mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-foreground mb-1">
                  Email Address <span className="text-destructive" aria-hidden="true">*</span>
                </label>
                <Input
                  id="contact-email"
                  type="email"
                  placeholder="e.g. principal@college.edu.in"
                  autoComplete="email"
                  aria-required="true"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "err-email" : undefined}
                  {...register("email")}
                />
                {errors.email && (
                  <p id="err-email" role="alert" className="text-xs text-destructive mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="contact-phone" className="block text-sm font-medium text-foreground mb-1">
                  Phone Number <span className="text-destructive" aria-hidden="true">*</span>
                </label>
                <Input
                  id="contact-phone"
                  type="tel"
                  placeholder="e.g. +91 98765 43210"
                  autoComplete="tel"
                  aria-required="true"
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? "err-phone" : undefined}
                  {...register("phone")}
                />
                {errors.phone && (
                  <p id="err-phone" role="alert" className="text-xs text-destructive mt-1">
                    {errors.phone.message}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="contact-institution" className="block text-sm font-medium text-foreground mb-1">
                  Institution / College <span className="text-destructive" aria-hidden="true">*</span>
                </label>
                <Input
                  id="contact-institution"
                  placeholder="e.g. JNTU Hyderabad"
                  autoComplete="organization"
                  aria-required="true"
                  aria-invalid={!!errors.institution}
                  aria-describedby={errors.institution ? "err-institution" : undefined}
                  {...register("institution")}
                />
                {errors.institution && (
                  <p id="err-institution" role="alert" className="text-xs text-destructive mt-1">
                    {errors.institution.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="contact-message" className="block text-sm font-medium text-foreground mb-1">
                Message <span className="text-destructive" aria-hidden="true">*</span>
              </label>
              <Textarea
                id="contact-message"
                placeholder="Tell us about your requirements — program type, student batch size, preferred timeline…"
                rows={5}
                aria-required="true"
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "err-message" : undefined}
                {...register("message")}
              />
              {errors.message && (
                <p id="err-message" role="alert" className="text-xs text-destructive mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto gap-2 min-w-[10rem]">
              {isSubmitting ? (
                <>
                  <span
                    className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
                    aria-hidden="true"
                  />
                  Sending…
                </>
              ) : (
                <>
                  <Send size={16} aria-hidden="true" />
                  Send Message
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useInView } from "@/hooks/useInView";
import { toast } from "@/components/ui/sonner";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
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
  const form = useForm<ContactForm>({ resolver: zodResolver(contactSchema) });
  const { isSubmitting } = form.formState;

  const onSubmit = async (data: ContactForm) => {
    if (data._hp) return;

    if (!ENDPOINT) {
      toast.error("Configuration error", {
        description: "Form endpoint is not configured. Please contact us directly.",
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

      toast.success("Message sent!", {
        description: `Thanks ${data.name}, we'll get back to you within 24 hours.`,
      });
      form.reset();
    } catch (err) {
      console.error("[contact] submission error:", err);
      toast.error("Submission failed", {
        description: "Please try again or email us at info@impexus.co.in.",
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
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="md:col-span-3 space-y-4"
              aria-label="Partner enquiry form"
              noValidate
            >
              {/* Honeypot — visually hidden, must stay empty */}
              <div aria-hidden="true" className="hidden">
                <label htmlFor="hp-field">Leave this blank</label>
                <input id="hp-field" tabIndex={-1} autoComplete="off" {...form.register("_hp")} />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name <span className="text-destructive" aria-hidden="true">*</span></FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. Arjun Sharma" autoComplete="name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address <span className="text-destructive" aria-hidden="true">*</span></FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="e.g. principal@college.edu.in" autoComplete="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number <span className="text-destructive" aria-hidden="true">*</span></FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="e.g. +91 98765 43210" autoComplete="tel" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="institution"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Institution / College <span className="text-destructive" aria-hidden="true">*</span></FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. JNTU Hyderabad" autoComplete="organization" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message <span className="text-destructive" aria-hidden="true">*</span></FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us about your requirements — program type, student batch size, preferred timeline…"
                        rows={5}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

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
          </Form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

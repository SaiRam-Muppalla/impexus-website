import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useInView } from "@/hooks/useInView";
import { toast } from "@/components/ui/sonner";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send, MapPin, Phone, Clock, ExternalLink } from "lucide-react";

const contactSchema = z.object({
  name:        z.string().trim().min(1, "Name is required").max(100),
  email:       z.string().trim().email("Invalid email address").max(255),
  phone:       z.string().trim().min(10, "At least 10 digits").max(15).regex(/^[+\d\s-]+$/, "Invalid phone number"),
  program:     z.enum(["Web Development", "Mobile App Development", "Data Science & AI", "Programming Fundamentals"], {
    required_error: "Please select a program",
  }),
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
      // No form backend configured — hand the enquiry to the visitor's mail
      // client with everything pre-filled so nothing is silently dropped.
      const subject = `Program enquiry — ${data.program}`;
      const body = [
        `Name: ${data.name}`,
        `Email: ${data.email}`,
        `Phone: ${data.phone}`,
        `Program interest: ${data.program}`,
        "",
        data.message,
      ].join("\n");
      window.location.href = `mailto:info@impexus.co.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      toast.success("Opening your email app", {
        description: `Thanks ${data.name} — send the pre-filled email and we'll reply within 24 hours.`,
      });
      form.reset();
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
          program:     data.program,
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
    <section id="contact" ref={ref} className="py-20 px-6" aria-labelledby="contact-heading">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">Inquire About Our Programs and Start Your Journey</p>
          <h2 id="contact-heading" className="text-3xl md:text-4xl font-heading font-bold text-foreground">Connect With Us</h2>
          <p className="text-center text-muted-foreground mt-4 max-w-2xl mx-auto">Connect with Impexus Technologies to empower your future. We are dedicated to shaping innovators through hands-on learning and expert mentorship.</p>
        </div>

        <div className={`grid items-start gap-8 lg:grid-cols-[1.35fr_0.85fr] transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-5 rounded-lg border border-border bg-card p-6 md:p-8"
              aria-label="Program enquiry form"
              noValidate
            >
              {/* Honeypot — visually hidden, must stay empty */}
              <div aria-hidden="true" className="hidden">
                <label htmlFor="hp-field">Leave this blank</label>
                <input id="hp-field" tabIndex={-1} autoComplete="off" {...form.register("_hp")} />
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name <span className="text-destructive" aria-hidden="true">*</span></FormLabel>
                      <FormControl>
                        <Input placeholder="Your full name" autoComplete="name" {...field} />
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
                        <Input type="email" placeholder="your@email.com" autoComplete="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number <span className="text-destructive" aria-hidden="true">*</span></FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="+91 7013547471" autoComplete="tel" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="program"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Program Interest <span className="text-destructive" aria-hidden="true">*</span></FormLabel>
                      <FormControl>
                        <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" {...field}>
                          <option value="">Select a program</option>
                          <option>Web Development</option>
                          <option>Mobile App Development</option>
                          <option>Data Science &amp; AI</option>
                          <option>Programming Fundamentals</option>
                        </select>
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
                        placeholder="Tell us about your goals..."
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
                    Send Inquiry
                  </>
                )}
              </Button>
            </form>
          </Form>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
            <article className="rounded-lg border border-border bg-card p-5">
              <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground"><Phone size={18} aria-hidden="true" /></span>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Phone</p>
              <a href="tel:+917013547471" className="mt-1 block font-heading text-sm font-semibold text-foreground hover:text-primary">+91 70135 47471</a>
            </article>
            <article className="rounded-lg border border-border bg-card p-5">
              <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary"><Clock size={18} aria-hidden="true" /></span>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Hours</p>
              <p className="mt-1 font-heading text-sm font-semibold text-foreground">9 AM – 5 PM</p>
              <p className="text-xs text-muted-foreground">Mon – Sat</p>
            </article>

            <article className="overflow-hidden rounded-lg border border-border bg-card sm:col-span-2">
              <div className="contact-map-grid flex h-36 items-center justify-center border-b border-border">
                <MapPin size={32} className="text-primary" aria-hidden="true" />
              </div>
              <div className="p-5">
                <div className="flex items-start gap-3">
                  <MapPin size={17} className="mt-0.5 shrink-0 text-primary" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Location</p>
                    <address className="mt-1 text-sm not-italic leading-6 text-foreground">IMPEXUS Technologies, AU North Campus,<br />Andhra University, Visakhapatnam,<br />Andhra Pradesh 530003</address>
                    <a href="https://www.google.com/maps/search/?api=1&query=Andhra+University+North+Campus+Visakhapatnam" target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">Get directions <ExternalLink size={13} aria-hidden="true" /></a>
                  </div>
                </div>
              </div>
            </article>

            <article className="rounded-lg border border-border bg-card p-5 sm:col-span-2">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Email</p>
              <a href="mailto:info@impexus.co.in" className="mt-1 block text-sm font-medium text-foreground hover:text-primary">info@impexus.co.in</a>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

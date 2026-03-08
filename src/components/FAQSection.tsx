import { useInView } from "@/hooks/useInView";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What types of programs does Impexus offer?",
    a: "Impexus offers technical skill development programs (Full Stack, Cloud, AI/ML, Cybersecurity, Mobile), placement preparation, soft skills training, hackathons, and project-based learning — all delivered on campus.",
  },
  {
    q: "How are programs delivered within colleges?",
    a: "Programs are delivered on-campus and integrated with academic schedules. Formats include intensive bootcamps, semester-long courses, workshop series, hackathons, and certification-oriented programs.",
  },
  {
    q: "Who can enroll in Impexus programs?",
    a: "Any student enrolled at a partner institution can participate. Programs are designed for students across all years, from foundational skill building to advanced career readiness.",
  },
  {
    q: "How can our college partner with Impexus?",
    a: "Institutions can reach out through our contact form or email. We work closely with college leadership to design programs that align with curriculum goals and student needs.",
  },
  {
    q: "Are certifications provided upon program completion?",
    a: "Yes, students receive certificates upon successful completion of each program, which can be used to demonstrate skills to potential employers.",
  },
  {
    q: "What technologies are covered in the programs?",
    a: "Our stack spans C, Java, Python, JavaScript, React, Node.js, AWS, Docker, Kubernetes, TensorFlow, and more — all aligned with current industry demand.",
  },
  {
    q: "Does Impexus help with student placements?",
    a: "Yes. Our placement preparation programs include aptitude training, competitive coding practice, mock interviews, resume building, and technical interview preparation.",
  },
  {
    q: "What is the duration of a typical program?",
    a: "It varies by format — bootcamps run 1–4 weeks, semester programs span 3–6 months, and workshops can be single or multi-day events. We customize based on institutional needs.",
  },
];

const FAQSection = () => {
  const { ref, isInView } = useInView(0.1);

  return (
    <section ref={ref} className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-2">
            FAQ
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
        </div>

        <div
          className={`transition-all duration-700 delay-150 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border border-border rounded-xl px-5 data-[state=open]:bg-primary/5"
              >
                <AccordionTrigger className="text-left text-sm font-medium text-foreground hover:text-primary hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

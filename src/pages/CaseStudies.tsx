import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, ChevronRight, Home, Users, Building2, Clock, CheckCircle2, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import WhatsAppButton from "@/components/WhatsAppButton";

const SITE_URL = import.meta.env.VITE_SITE_URL ?? "https://impexus.co.in";

/**
 * Verified programme figures only. Every number below is one Impexus already
 * publishes on the home page — no placement percentages are shown until real
 * institution-wise data is supplied.
 */
const metrics = [
  { icon: Users, value: "5,000+", label: "Students trained", detail: "Across campus cohorts in Andhra Pradesh & Telangana" },
  { icon: Building2, value: "10+", label: "College collaborations", detail: "Engineering and degree institutions partnered to date" },
  { icon: Clock, value: "Hands-on", label: "Industry learning", detail: "Project-first delivery in every programme we run" },
];

type CaseStudy = {
  slug: string;
  program: string;
  context: string;
  challenge: string;
  approach: string[];
  outcomes: string[];
  topic: string;
};

const caseStudies: CaseStudy[] = [
  {
    slug: "foundations-cohort",
    program: "Programming & CS Foundations Cohort",
    context: "Second-year engineering students with syllabus-level theory but little coding practice.",
    challenge:
      "Students could describe data structures but froze in timed coding rounds, and faculty had no consistent way to measure practical progress.",
    approach: [
      "Baseline diagnostic to place students into paced tracks",
      "Daily problem-solving drills in C, C++, Java and Python",
      "Weekly mentor reviews on code quality, not just correctness",
      "Mock assessments mirroring campus placement patterns",
    ],
    outcomes: [
      "Students move from syllabus theory to independent problem solving",
      "Faculty receive cohort-level progress visibility every week",
      "A shared coding standard carries into later project work",
    ],
    topic: "programming-cs-foundations",
  },
  {
    slug: "full-stack-capstone",
    program: "Full-Stack Web Development Capstone",
    context: "Pre-final year students preparing portfolios ahead of placement season.",
    challenge:
      "Resumes listed tutorials rather than working software, so students had nothing substantial to demonstrate in interviews.",
    approach: [
      "Teams scoped and shipped a real, deployed application",
      "Git-based workflow with reviews, issues and release checkpoints",
      "Deployment, environment configuration and monitoring covered end to end",
      "Demo day with structured technical questioning",
    ],
    outcomes: [
      "Every participant leaves with a deployed project and public repository",
      "Students can defend architecture decisions in interviews",
      "Departments gain reusable capstone project templates",
    ],
    topic: "full-stack-web-development",
  },
  {
    slug: "ai-agentic-track",
    program: "AI, ML & Agentic Systems Track",
    context: "Mixed CSE and AI&DS cohort exploring applied artificial intelligence.",
    challenge:
      "Coursework stopped at model theory; students had not built anything that used models inside a working product.",
    approach: [
      "Applied ML fundamentals with real datasets",
      "Retrieval-augmented generation and vector database labs",
      "Agentic workflows: tool calling, orchestration and evaluation",
      "Responsible-AI and evaluation practices built into every lab",
    ],
    outcomes: [
      "Students ship AI-assisted applications rather than notebooks alone",
      "Exposure to the tooling teams actually hire for today",
      "Clear bridge from campus coursework to frontier technology roles",
    ],
    topic: "agentic-ai-development",
  },
  {
    slug: "csr-skilling-drive",
    program: "CSR-Funded Skilling Drive",
    context: "Corporate CSR partnership delivering skills training to students from underserved backgrounds.",
    challenge:
      "Access to quality technical training was limited by cost and location for many eligible students.",
    approach: [
      "Fully sponsored seats allocated with the partner institution",
      "On-campus delivery to remove travel and access barriers",
      "Foundational plus employability modules in a single track",
      "Reporting pack for the CSR sponsor at every milestone",
    ],
    outcomes: [
      "Training delivered at no cost to participating students",
      "Measurable, auditable outcomes reported back to the sponsor",
      "A repeatable model for further CSR-funded cohorts",
    ],
    topic: "csr-initiatives",
  },
  {
    slug: "placement-readiness",
    program: "Placement Readiness Bootcamp",
    context: "Final-year students entering campus recruitment season.",
    challenge:
      "Aptitude, technical rounds and communication were prepared separately, leaving gaps in the actual interview funnel.",
    approach: [
      "Aptitude and reasoning practice mapped to recruiter patterns",
      "Technical mock interviews with written feedback",
      "Resume and portfolio clinics",
      "Group discussion and HR round simulations",
    ],
    outcomes: [
      "Students arrive at drives with rehearsed, feedback-corrected answers",
      "Placement cells get a structured readiness picture per student",
      "Communication and technical prep run as one connected track",
    ],
    topic: "placement-preparation",
  },
];

const CaseStudies = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const canonical = `${SITE_URL}/case-studies`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Case Studies", item: canonical },
    ],
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Impexus campus programme case studies",
    itemListElement: caseStudies.map((cs, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: cs.program,
      description: cs.challenge,
      url: `${canonical}#${cs.slug}`,
    })),
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Case Studies — Campus Programme Outcomes | Impexus</title>
        <meta
          name="description"
          content="How Impexus campus learning and development programmes run in practice: the challenge, the delivery approach and the outcomes for students and colleges across South India."
        />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content="Case Studies — Campus Programme Outcomes | Impexus" />
        <meta
          property="og:description"
          content="Real delivery stories from Impexus campus programmes: foundations, full-stack, AI and agentic systems, CSR skilling and placement readiness."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonical} />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(itemListSchema)}</script>
      </Helmet>

      <Navbar />

      <main id="main-content" className="flex-1">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="px-6 pt-28 pb-2">
          <ol className="max-w-5xl mx-auto flex items-center gap-2 text-sm text-muted-foreground">
            <li>
              <Link to="/" className="inline-flex items-center gap-1 hover:text-primary">
                <Home size={14} aria-hidden="true" /> Home
              </Link>
            </li>
            <li aria-hidden="true"><ChevronRight size={14} /></li>
            <li className="text-foreground font-medium" aria-current="page">Case Studies</li>
          </ol>
        </nav>

        {/* Hero */}
        <header className="px-6 pt-6 pb-12">
          <div className="max-w-5xl mx-auto">
            <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
              Programme Outcomes
            </span>
            <h1 className="mt-4 font-heading text-3xl md:text-5xl font-bold text-foreground">
              Case Studies
            </h1>
            <p className="mt-4 max-w-3xl text-muted-foreground md:text-lg">
              How our campus learning and development programmes are actually delivered — the problem each
              cohort started with, the way we structured the engagement, and what students and institutions
              walked away with.
            </p>
          </div>
        </header>

        {/* Verified metrics */}
        <section aria-labelledby="metrics-heading" className="px-6 pb-14">
          <div className="max-w-5xl mx-auto">
            <h2 id="metrics-heading" className="sr-only">Programme figures</h2>
            <div className="grid gap-5 sm:grid-cols-3">
              {metrics.map((m) => (
                <article key={m.label} className="rounded-lg border border-border bg-card p-6">
                  <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <m.icon size={18} aria-hidden="true" />
                  </span>
                  <p className="font-heading text-3xl font-bold text-foreground">{m.value}</p>
                  <p className="mt-1 text-sm font-semibold text-foreground">{m.label}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{m.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Case studies */}
        <section aria-labelledby="studies-heading" className="px-6 pb-16">
          <div className="max-w-5xl mx-auto">
            <h2 id="studies-heading" className="font-heading text-2xl md:text-3xl font-bold text-foreground">
              Programme stories
            </h2>

            <div className="mt-8 space-y-8">
              {caseStudies.map((cs) => (
                <article
                  key={cs.slug}
                  id={cs.slug}
                  className="scroll-mt-28 rounded-lg border border-border bg-card p-6 md:p-8"
                >
                  <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground">{cs.program}</h3>
                  <p className="mt-2 text-sm text-primary">{cs.context}</p>

                  <div className="mt-6 grid gap-6 md:grid-cols-2">
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">The challenge</h4>
                      <p className="mt-2 text-muted-foreground">{cs.challenge}</p>

                      <h4 className="mt-6 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Our approach</h4>
                      <ul className="mt-2 space-y-2">
                        {cs.approach.map((a) => (
                          <li key={a} className="flex gap-2 text-muted-foreground">
                            <ChevronRight size={16} className="mt-1 shrink-0 text-primary" aria-hidden="true" />
                            <span>{a}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-lg border border-border bg-background/40 p-5">
                      <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Outcomes</h4>
                      <ul className="mt-3 space-y-3">
                        {cs.outcomes.map((o) => (
                          <li key={o} className="flex gap-2 text-foreground">
                            <CheckCircle2 size={16} className="mt-1 shrink-0 text-primary" aria-hidden="true" />
                            <span>{o}</span>
                          </li>
                        ))}
                      </ul>
                      <Link
                        to={`/topic/${cs.topic}`}
                        className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                      >
                        Explore this programme
                        <ArrowRight size={14} aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 pb-20">
          <div className="max-w-5xl mx-auto rounded-lg border border-border bg-card p-8 text-center">
            <h2 className="font-heading text-2xl font-bold text-foreground">Planning a cohort at your campus?</h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              Tell us your department, batch size and timeline — we'll map a programme structure and share
              the outcome metrics we track throughout the engagement.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/#contact"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 font-medium text-primary-foreground hover:opacity-90"
              >
                Talk to our team
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary">
                <ArrowLeft size={14} aria-hidden="true" /> Back to home
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <BackToTop />
      <WhatsAppButton />
    </div>
  );
};

export default CaseStudies;

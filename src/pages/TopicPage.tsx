import { useEffect } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, ChevronRight, CheckCircle2, Clock, Users, ArrowRight, Home } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import WhatsAppButton from "@/components/WhatsAppButton";
import { getTopic, getRelatedTopics } from "@/data/topics";

const SITE_URL = "https://impexus.co.in";

const TopicPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const topic = slug ? getTopic(slug) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!topic) return <Navigate to="/404" replace />;

  const related = getRelatedTopics(topic.related);
  const canonical = `${SITE_URL}/topic/${topic.slug}`;

  // JSON-LD: Course + BreadcrumbList for richer SERP and AI extraction
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: topic.title,
    description: topic.metaDescription,
    provider: {
      "@type": "EducationalOrganization",
      name: "Impexus Technologies",
      sameAs: SITE_URL,
    },
    educationalLevel: topic.audience,
    timeRequired: topic.duration,
    keywords: topic.keywords.join(", "),
    url: canonical,
    teaches: topic.outcomes,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: topic.category, item: `${SITE_URL}/#${topic.categorySlug}` },
      { "@type": "ListItem", position: 3, name: topic.title, item: canonical },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>{topic.title} | Impexus Technologies</title>
        <meta name="description" content={topic.metaDescription} />
        <meta name="keywords" content={topic.keywords.join(", ")} />
        <link rel="canonical" href={canonical} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={`${topic.title} | Impexus Technologies`} />
        <meta property="og:description" content={topic.metaDescription} />
        <meta property="og:url" content={canonical} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${topic.title} | Impexus Technologies`} />
        <meta name="twitter:description" content={topic.metaDescription} />
        <script type="application/ld+json">{JSON.stringify(courseSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <Navbar />

      <main className="flex-1 pt-24 pb-16">
        <div className="max-w-5xl mx-auto px-6">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center flex-wrap gap-1.5 text-sm text-muted-foreground">
              <li>
                <Link to="/" className="hover:text-primary transition-colors flex items-center gap-1">
                  <Home size={14} /> Home
                </Link>
              </li>
              <li><ChevronRight size={14} /></li>
              <li>
                <Link to={`/#${topic.categorySlug}`} className="hover:text-primary transition-colors">
                  {topic.category}s
                </Link>
              </li>
              <li><ChevronRight size={14} /></li>
              <li className="text-foreground font-medium" aria-current="page">{topic.title}</li>
            </ol>
          </nav>

          {/* Back link */}
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline mb-8">
            <ArrowLeft size={16} /> Back to home
          </Link>

          {/* Hero */}
          <header className="mb-10 pb-10 border-b border-border">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary bg-primary/10 px-3 py-1 rounded-full mb-4">
              {topic.heroBadge}
            </span>
            <h1 className="text-3xl md:text-5xl font-heading font-bold text-foreground leading-tight mb-4">
              {topic.title}
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl">{topic.tagline}</p>

            {(topic.duration || topic.audience) && (
              <div className="flex flex-wrap gap-6 mt-6 text-sm">
                {topic.duration && (
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock size={16} className="text-primary" />
                    <span><strong className="text-foreground">Duration:</strong> {topic.duration}</span>
                  </div>
                )}
                {topic.audience && (
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users size={16} className="text-primary" />
                    <span><strong className="text-foreground">For:</strong> {topic.audience}</span>
                  </div>
                )}
              </div>
            )}
          </header>

          {/* Overview */}
          <section className="mb-12" aria-labelledby="overview-heading">
            <h2 id="overview-heading" className="text-2xl font-heading font-bold text-foreground mb-4">Overview</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">{topic.overview}</p>
          </section>

          {/* Detailed sections */}
          <div className="space-y-10 mb-14">
            {topic.sections.map((sec) => (
              <section key={sec.heading} className="rounded-xl border border-border bg-card p-6 md:p-8">
                <h2 className="text-xl md:text-2xl font-heading font-semibold text-foreground mb-3">
                  {sec.heading}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">{sec.body}</p>
                {sec.bullets && (
                  <ul className="space-y-2 mt-4">
                    {sec.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          {/* Outcomes */}
          <section className="mb-14 rounded-xl bg-primary/5 border border-primary/20 p-6 md:p-8" aria-labelledby="outcomes-heading">
            <h2 id="outcomes-heading" className="text-2xl font-heading font-bold text-foreground mb-5">
              Key Outcomes
            </h2>
            <ul className="grid sm:grid-cols-2 gap-3">
              {topic.outcomes.map((o) => (
                <li key={o} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-primary mt-0.5 shrink-0" />
                  <span className="text-foreground">{o}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* CTA */}
          <section className="mb-14 text-center rounded-xl border border-border bg-card p-8">
            <h2 className="text-2xl font-heading font-bold text-foreground mb-3">
              Bring this to your campus
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Talk to the Impexus team about delivering {topic.title} as a workshop, semester program, or full campus track.
            </p>
            <Link
              to="/#contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Get in touch <ArrowRight size={16} />
            </Link>
          </section>

          {/* Related */}
          {related.length > 0 && (
            <section aria-labelledby="related-heading">
              <h2 id="related-heading" className="text-2xl font-heading font-bold text-foreground mb-6">
                Related Topics
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    to={`/topic/${r.slug}`}
                    className="group rounded-xl border border-border bg-card p-5 hover:shadow-md hover:border-primary/30 transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-2">{r.category}</p>
                    <h3 className="font-heading font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {r.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{r.tagline}</p>
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-primary mt-3">
                      Learn more <ChevronRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>

      <Footer />
      <BackToTop />
      <WhatsAppButton />
    </div>
  );
};

export default TopicPage;

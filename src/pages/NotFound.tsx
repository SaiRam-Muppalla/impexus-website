import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6">
      <Helmet>
        <title>Page not found | Impexus Technologies</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <div className="max-w-md text-center">
        <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">404</p>
        <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-3">
          We couldn&apos;t find that page
        </h1>
        <p className="text-muted-foreground mb-8 break-words">
          The page <span className="text-foreground">{location.pathname}</span> doesn&apos;t exist
          or has moved. Explore our campus programs instead.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            <Home size={16} /> Go home
          </Link>
          <Link
            to="/#services"
            className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-lg font-medium text-foreground hover:bg-muted transition-colors"
          >
            <ArrowLeft size={16} /> Browse programs
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

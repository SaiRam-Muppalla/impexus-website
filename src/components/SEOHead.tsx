import { Helmet } from "react-helmet-async";

const SEOHead = () => (
  <Helmet>
    {/* Additional dynamic meta for SPA */}
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
    <meta name="googlebot" content="index, follow" />
    <meta name="bingbot" content="index, follow" />
    <meta name="theme-color" content="#2563eb" />
    <meta name="mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="default" />
    <meta name="apple-mobile-web-app-title" content="Impexus" />
    <meta name="application-name" content="Impexus Technologies" />
    <meta name="geo.region" content="IN-TG" />
    <meta name="geo.placename" content="Hyderabad" />
    <meta name="geo.position" content="17.385;78.4867" />
    <meta name="ICBM" content="17.385, 78.4867" />
    <link rel="apple-touch-icon" href="/favicon.png" />
  </Helmet>
);

export default SEOHead;
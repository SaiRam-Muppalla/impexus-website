import { lazy, Suspense } from "react";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import SEOHead from "@/components/SEOHead";
import ErrorBoundary from "@/components/ErrorBoundary";

const Index     = lazy(() => import("./pages/Index"));
const TopicPage = lazy(() => import("./pages/TopicPage"));
const NotFound  = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <SEOHead />
        <Sonner />
        <BrowserRouter>
          <ErrorBoundary>
            <Suspense fallback={<div className="min-h-screen" aria-busy="true" />}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/topic/:slug" element={<TopicPage />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </ErrorBoundary>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;

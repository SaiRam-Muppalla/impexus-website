import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import StatsSection from "@/components/StatsSection";
import TransformSection from "@/components/TransformSection";
import CoursesSection from "@/components/CoursesSection";
import ProjectsSection from "@/components/ProjectsSection";
import ClientsSection from "@/components/ClientsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <TransformSection />
      <CoursesSection />
      <ProjectsSection />
      <ClientsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <BackToTop />
      <WhatsAppButton />
    </div>
  );
};

export default Index;

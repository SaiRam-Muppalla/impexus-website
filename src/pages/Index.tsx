import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import ProgramArchitectureSection from "@/components/ProgramArchitectureSection";
import TechStackSection from "@/components/TechStackSection";
import TransformSection from "@/components/TransformSection";
import BenefitsSection from "@/components/BenefitsSection";
import VisionSection from "@/components/VisionSection";
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
      <ServicesSection />
      <ProgramArchitectureSection />
      <TechStackSection />
      <TransformSection />
      <BenefitsSection />
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

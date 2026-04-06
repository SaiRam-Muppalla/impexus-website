import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProblemsSection from "@/components/ProblemsSection";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import ProgramsOfferedSection from "@/components/ProgramsOfferedSection";
import ProgramArchitectureSection from "@/components/ProgramArchitectureSection";
import TechStackSection from "@/components/TechStackSection";
import TransformSection from "@/components/TransformSection";
import BenefitsSection from "@/components/BenefitsSection";
import VisionSection from "@/components/VisionSection";
import ProjectsSection from "@/components/ProjectsSection";
import ClientsSection from "@/components/ClientsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProblemsSection />
      <StatsSection />
      <ServicesSection />
      <ProgramsOfferedSection />
      <ProgramArchitectureSection />
      <TechStackSection />
      <TransformSection />
      <BenefitsSection />
      <VisionSection />
      <ProjectsSection />
      <ClientsSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
      <BackToTop />
      <WhatsAppButton />
    </main>
  );
};

export default Index;

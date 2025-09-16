import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import WhyBhoomathaSection from "@/components/WhyBhoomathaSection";
import FullWidthImageSection from "@/components/FullWidthImageSection";
import Footer from "@/components/Footer";
import NewProjectsSection from "@/components/NewProjectsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <NewProjectsSection />
        <ProjectsSection />
        <ServicesSection />
        <FullWidthImageSection />
        <WhyBhoomathaSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

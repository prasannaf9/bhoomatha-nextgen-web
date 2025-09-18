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
import ChairmanMessage from "@/components/ChairmanMessage";
import TeamsSection from "@/components/TeamsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <NewProjectsSection />
        <AboutSection />
  
        <ProjectsSection />
        <ServicesSection />
        {/* <ChairmanMessage />
        <TeamsSection /> */}
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

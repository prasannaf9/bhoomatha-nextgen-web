import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-building.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Bhoomatha Group Premium Development"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <div className="animate-fade-in">
            <span className="inline-block px-4 py-2 mb-6 text-sm font-semibold text-primary-foreground bg-accent/20 backdrop-blur-sm rounded-full">
              Excellence in Real Estate Development
            </span>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-heading leading-tight">
              Building Dreams,
              <span className="block text-accent">Creating Legacies</span>
            </h1>
            
            <p className="text-xl text-white/90 mb-8 font-body">
              Transform your vision into reality with Bhoomatha Group's premier real estate
              solutions. From luxury residences to commercial landmarks, we craft spaces
              that inspire and endure.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="btn-hero group">
                Explore Our Projects
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Overview
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16">
            {[
              { value: "500+", label: "Projects Delivered" },
              { value: "15+", label: "Years of Excellence" },
              { value: "10K+", label: "Happy Families" },
            ].map((stat) => (
              <div key={stat.label} className="text-white">
                <div className="text-3xl md:text-4xl font-bold font-heading">{stat.value}</div>
                <div className="text-sm text-white/80 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
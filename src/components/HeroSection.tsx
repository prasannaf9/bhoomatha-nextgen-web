import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroVideo from "@/assets/here-video.mp4";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/20 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-8xl">
          <div className="animate-fade-in">
            <span className="inline-block px-4 py-2 mb-6 text-5xl font-semibold text-primary-foreground rounded-full font-cursive italic tracking-wider">
              Andhra Pradesh
            </span>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-heading leading-tight">
        The Bhoomatha Growth Story

              <span className="block text-secondary">Legacy of Trust And Future of Scale                
              </span>
            </h1>
            
            <p className="text-xl text-white/90 mb-8 font-body">
            Bhoomatha stands as a symbol of vision and reliability in Andhra’s real estate landscape. With a legacy of trust and a future shaped by bold townships and transformative communities, we are redefining growth corridors and creating enduring value for investors, partners, and generations to come.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="https://www.bhoomathagroup.com/projects" className="btn-hero bg-secondary group text-dark h-11 rounded-md px-8 inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0" target="_blank">
                Explore Our Projects
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
              
              <a href="https://www.bhoomathagroup.com/about-us" className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20 h-11 rounded-md px-8 inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0" target="_blank">
                <Play className="mr-2 h-5 w-5" />
                Watch Overview
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-8 gap-4 md:gap-6 mt-12 md:mt-16">
            {[

{ value: "3+", label: "Resorts" },
{ value: "10+", label: "Commercial Apartments" },
{ value: "26+", label: "Years of Experience" },
{ value: "30+", label: "Townships" },
{ value: "40+", label: "Residential Apartments" },
{ value: "200+", label: "Duplex Villas" },

              { value: "6000+", label: "Satisfied Customers" },
           
           
          
           
           
          
              { value: "100%", label: "Customer Satisfaction" },

              // { value: "10000+", label: "Our Ventures" },
              // { value: "40+", label: "Residential Apartments" },
              // { value: "10+", label: "Commercial Apartments" },
              // { value: "50+", label: "Duplex Villas" },
              // { value: "50+", label: "Duplex Villas" },
              // { value: "10+", label: "Commercial Apartments" },
              // { value: "50+", label: "Duplex Villas" },
              // { value: "50+", label: "Duplex Villas" },


              
            ].map((stat) => (
              <div key={stat.label} className="text-white">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading">{stat.value}</div>
                <div className="text-xs sm:text-sm text-white/80 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div> */}
    </section>
  );
};

export default HeroSection;
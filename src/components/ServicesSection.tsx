import { Home, Building2, Briefcase, Building, Landmark, Factory, Home as HomeOutline, Building2 as Building2Outline, Briefcase as BriefcaseOutline, Building as BuildingOutline, Factory as FactoryOutline, Handshake, Play } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { VideoModal } from "./VideoModal";
import videoThumbnail from "@/assets/video-image.png";
import whyImage from "@/assets/why.webp";
import { Button } from "./ui/button";

const ServicesSection = () => {
  const categories = [
    {
      icon: HomeOutline,
      title: "Residential",
      description: "Luxury Apartments"
    },
    {
      icon: Building2Outline,
      title: "Commercial",
      description: "Office & Retail"
    },
    {
      icon: Handshake,
      title: "Ventures",
      description: "Joint Developments"
    },
    {
      icon: BuildingOutline,
      title: "Townships",
      description: "Planned Communities"
    },
    {
      icon: FactoryOutline,
      title: "Industrial",
      description: "Estates & Parks"
    }
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };

  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const videoId = "wJYAwJKd9yE"; // YouTube video ID from the URL

  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Property Types
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find your perfect property type from our diverse portfolio
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              className="group relative bg-white p-6 rounded-2xl border-2 border-gray-100 hover:border-primary/50 transition-all duration-300 flex flex-col items-center text-center"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={itemVariants}
              whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
            >
              <div className="mb-5">
                <category.icon className="w-16 h-16 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">{category.title}</h3>
              <p className="text-gray-600 text-sm">{category.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Video Section */}
        <div className="mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Bhoomatha Journey
              </h2>
            
              
              <div 
                className="relative group cursor-pointer rounded-xl overflow-hidden shadow-xl"
                onClick={() => setIsVideoOpen(true)}
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={videoThumbnail}
                    alt="Property Video Thumbnail"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center transition-all duration-300 group-hover:bg-black/40">
                  <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center group-hover:bg-white transition-all duration-300">
                    <Play className="h-10 w-10 text-primary ml-1" fill="currentColor" />
                  </div>
                </div>
              </div>
              
              <p className="text-lg text-gray-600 mb-8 mt-5">
              Bhoomatha's journey is built on a foundation of trust, innovation, and excellence. With each milestone, we continue to transform visions into reality, creating impactful projects that inspire growth and long-term success.
              </p>
            </div>
          </div>
        </div>

        {/* What Makes Bhoomatha Unique Section */}
        <div className="mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Image Section */}
              <div className="h-full">
                <img
                  src={whyImage}
                  alt="What Makes Bhoomatha Unique"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Content Section */}
              <div className="p-8 md:p-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  What Makes Bhoomatha Unique
                </h2>
                
                <p className="text-lg text-gray-600 mb-6">
                  At Bhoomatha Group, we don't just build properties—we create investment opportunities that promise high appreciation, secure ownership, and long-term value. Our commitment to trust, transparency, and excellence has made us a leading real estate developer in South India.
                </p>
                
                <p className="text-lg text-gray-600 mb-8">
                  With thousands of happy customers and investors, we take pride in being one of the most trusted real estate brands, delivering high-quality, affordable, and future-ready projects.
                </p>
                
                <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg">
                  Explore Our Projects
                </Button>
              </div>
            </div>
          </div>


          <div className="grid md:grid-cols-2 gap-8 mt-16">
          <div className="bg-gradient-primary text-primary-foreground p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4 font-heading">Our Mission</h3>
            <p className="text-primary-foreground/90">
            Our mission is to develop legally approved, strategically located properties that deliver high value and sustainable communities, combining quality, transparency, and long-term growth for homeowners and investors.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-green-600 to-green-800 text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4 font-heading">Our Vision</h3>
            <p className="text-white/90">
            To lead in real estate by delivering high-value, sustainable, and legally secure properties. We create investment opportunities with premium infrastructure, long-term appreciation, and trusted, transparent business practices.
            </p>
          </div>
        </div>





        </div>

        <VideoModal 
          isOpen={isVideoOpen} 
          onClose={() => setIsVideoOpen(false)} 
          videoId={videoId} 
        />
      </div>
    </section>
  );
};

export default ServicesSection;

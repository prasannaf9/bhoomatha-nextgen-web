import { useState } from "react";
import { MapPin, ArrowRight, Ruler, Home, Building2, LandPlot, Hotel, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Swapnalok from "@/assets/swapnalok.webp";
import PurnaSai from "@/assets/purnasai.webp";
import Sugandha from "@/assets/sugandha.webp";
import Sindhu from "@/assets/sindhu.webp";

const NewProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Bhoomatha's SVN Swapnlok",
      category: "residential",
      location: "Anadapuram",
      image: Swapnalok,
      status: "Under Construction",
      acres: 200,
      description: "Luxury apartments with world-class amenities",
      highlights: [
        "Premium gated community",
        "Modern architecture",
        "24/7 security"
      ]
    },
    {
      id: 2,
      title: "Anadapuram Venture",
      category: "residential",
      location: "Anadapuram",
      image: Swapnalok,
      status: "Under Construction",
      acres: 130,
      description: "Luxury apartments with world-class amenities",
      highlights: [
        "Premium gated community",
        "Modern architecture",
        "24/7 security"
      ]
    },
    {
      id: 3,
      title: "Boyapalem Construction",
      category: "commercial",
      location: "Boyapalem",
      image: PurnaSai,
      status: "Under Construction",
      acres: 65,
      description: "Premium office spaces for global enterprises",
      highlights: [
        "Prime commercial location",
        "Modern infrastructure",
        "Ample parking"
      ]
    },
    {
      id: 4,
      title: "Housing Project",
      category: "mixed",
      location: "Kadiri",
      image: Sugandha,
      status: "Under Construction",
      acres: 30,
      description: "Integrated township with retail and residential spaces",
      highlights: [
        "Mixed-use development",
        "Green spaces",
        "Retail outlets"
      ]
    },
   
  ];

 

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="new-projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
         
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Upcoming Developments
          </h2>
          <p className="text-xl text-muted-foreground max-w-1xl mx-auto">
            Explore our upcoming projects with premium amenities and strategic locations
          </p>
        </div>

        {/* Category Filter */}

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Acres Header */}
              <div className="relative px-5 py-14 bg-primary overflow-hidden">
                <div className="absolute inset-0" style={{
                  backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)`,
                  opacity: 0.2
                }} />
            
                  <div className="text-7xl md:text-9xl font-bold text-white leading-none text-center">{project.acres}</div>
                
          
<p className="text-2xl font-bold text-white ml-1 text-center">ACRES</p>

              </div>

              {/* Content Section */}
              <div className="p-4 flex flex-col h-[200px] text-center">
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-1 font-heading group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-1 mb-2 text-muted-foreground justify-content-center text-center">
                    <MapPin className="h-3 w-3 flex-shrink-0" />
                    <span className="text-xs">{project.location}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {project.description}
                  </p>
                </div>
                <Button variant="outline" className="w-full h-10 mt-auto group-hover:bg-primary group-hover:text-primary-foreground transition-colors flex items-center justify-center">
                  <span className="truncate">View Project Details</span>
                  <ArrowRight className="ml-2 h-4 w-4 flex-shrink-0 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button size="lg" className="btn-primary">
            View All Projects
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewProjectsSection;

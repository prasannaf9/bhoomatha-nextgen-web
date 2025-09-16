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
      id: 2,
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
      id: 3,
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
          <span className="inline-block px-3 py-1 mb-4 text-sm font-semibold text-primary-foreground bg-primary/60 rounded-full">
            New Launches
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Upcoming Developments
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our upcoming projects with premium amenities and strategic locations
          </p>
        </div>

        {/* Category Filter */}

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Acres Header */}
              <div className="relative bg-primary p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-center">
                    <span className="text-5xl font-bold text-white">{project.acres}</span>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-white/90 uppercase tracking-wider">Total Area</p>
                    <p className="text-white/80">Acres</p>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 font-heading group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2 mb-4 text-muted-foreground">
                  <MapPin className="h-4 w-4 flex-shrink-0" />
                  <span className="truncate">{project.location}</span>
                </div>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="space-y-2 mb-6">
                  {project.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <Check className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                      <span className="text-sm">{highlight}</span>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  View Project Details
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
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

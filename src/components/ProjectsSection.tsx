import { useState } from "react";
import { MapPin, Home, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import residentialImg from "@/assets/project-residential.jpg";
import commercialImg from "@/assets/project-commercial.jpg";
import mixedImg from "@/assets/project-mixed.jpg";
import villaImg from "@/assets/project-villa.jpg";

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Purna Sai Township",
      category: "residential",
      location: "Maddi Village",
      image: residentialImg,
      units: "320 Units",
      status: "Ready to Move",
      description: "Luxury apartments with world-class amenities",
    },
    {
      id: 2,
      title: "Sindhu Avenues",
      category: "commercial",
      location: "Dakamarri",
      image: commercialImg,
      units: "2.5M sq.ft",
      status: "Under Construction",
      description: "Premium office spaces for global enterprises",
    },
    {
      id: 3,
      title: "Sugandha Meadows",
      category: "mixed",
      location: "Bobbili",
      image: mixedImg,
      units: "Mixed Use",
      status: "Launching Soon",
      description: "Retail, office, and residential complex",
    },
    {
      id: 4,
      title: "Villa Paradise",
      category: "villa",
      location: "Sarjapur Road, Bangalore",
      image: villaImg,
      units: "48 Villas",
      status: "Selling Fast",
      description: "Ultra-luxury villas with private gardens",
    },
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "residential", label: "Residential" },
    { id: "commercial", label: "Commercial" },
    { id: "mixed", label: "Mixed Use" },
    { id: "villa", label: "Villas" },
  ];

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">

        <span className="inline-block px-3 py-1 mb-4 text-sm font-semibold text-primary-foreground bg-primary/60 rounded-full">
        Our Projects
            </span>

          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Featured Developments
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our portfolio of exceptional properties designed for modern living
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className={activeCategory === category.id ? "btn-primary" : ""}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Status Badge */}
                <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
                  {project.status}
                </Badge>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 font-heading group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <div className="flex items-center gap-4 mb-3 text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {project.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Home className="h-4 w-4" />
                    {project.units}
                  </span>
                </div>
                
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                
                <Button variant="link" className="p-0 h-auto font-semibold text-primary group">
                  View Details
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

export default ProjectsSection;
import { useState } from "react";
import { MapPin, Home, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Swapnalok from "@/assets/swapnalok.webp";
import PurnaSai from "@/assets/purnasai.webp";
import Sugandha from "@/assets/sugandha.webp";
import Sindhu from "@/assets/sindhu.webp";


const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Bhoomatha's SVN Swapnalok",
      category: "residential",
      location: "Thatipudu",
      image: Swapnalok,
      status: "Under Construction",
      description: "Luxury apartments with world-class amenities",
    },
    {
      id: 2,
      title: "Purna Sai Township",
      category: "commercial",
      location: "Maddi Village",
      image: PurnaSai,
      status: "Under Construction",
      description: "Premium office spaces for global enterprises",
    },
    {
      id: 3,
      title: "Sugandha Meadows",
      category: "mixed",
      location: "Bobbili",
      image: Sugandha,
      status: "Under Construction",
      description: "Retail, office, and residential complex",
    },
    {
      id: 4,
      title: "Sindhu Avenues",
      category: "villa",
      location: "Dakamarri",
      image: Sindhu,
      status: "Under Construction",
      description: "Ultra-luxury villas with private gardens",
    },
  ];

  const getProjectUrl = (id) => {
    if (id === 1) return "https://www.bhoomathagroup.com/project-details/bhoomatha-svn-swapnlok";
    if (id === 2) return "https://www.bhoomathagroup.com/project-details/purna-sai-township";
    if (id === 3) return "https://www.bhoomathagroup.com/project-details/sugandha-meadows";
    if (id === 4) return "https://www.bhoomathagroup.com/project-details/sindhu-avenues";
    return "https://www.bhoomathagroup.com/projects";
  };

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

        <span className="inline-block px-4 py-2 mb-6 text-xl font-semibold text-primary-foreground bg-primary/60 backdrop-blur-sm rounded-full font-cursive italic tracking-wider">
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
              className={activeCategory === category.id ? "btn-primary" : ""}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-4 lg:grid-cols-4 gap-8">
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
                </div>
                
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                
<a href={getProjectUrl(project.id)} target="_blank" className="p-0 h-auto font-semibold text-primary group inline-flex items-center gap-2 whitespace-nowrap text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 underline-offset-4 hover:underline">
                  View Details
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
<a href="https://www.bhoomathagroup.com/projects" target="_blank" className="btn-primary h-11 rounded-md px-8 inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0">
            View All Projects
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
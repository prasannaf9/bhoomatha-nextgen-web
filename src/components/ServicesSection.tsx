import { Home, Building, Briefcase, Palette, TreePine, Shield } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Home,
      title: "Residential Development",
      description: "Creating modern homes with premium amenities and sustainable design for contemporary families.",
    },
    {
      icon: Building,
      title: "Commercial Spaces",
      description: "Developing state-of-the-art office complexes and retail spaces for businesses to thrive.",
    },
    {
      icon: Briefcase,
      title: "Property Management",
      description: "Professional management services ensuring your investment remains valuable and well-maintained.",
    },
    {
      icon: Palette,
      title: "Interior Design",
      description: "Transforming spaces with innovative design solutions that reflect your style and needs.",
    },
    {
      icon: TreePine,
      title: "Sustainable Development",
      description: "Eco-friendly construction practices and green building certifications for a better tomorrow.",
    },
    {
      icon: Shield,
      title: "Investment Advisory",
      description: "Expert guidance on real estate investments to maximize returns and minimize risks.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 mb-4 text-sm font-semibold text-accent bg-accent/10 rounded-full">
            What We Do
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive real estate solutions tailored to meet your unique requirements
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-border/50 hover:border-primary/20 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              
              <h3 className="text-xl font-bold mb-3 font-heading group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
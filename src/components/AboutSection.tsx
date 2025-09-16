import { Award, Users, Target, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  const features = [
    {
      icon: Award,
      title: "Excellence",
      description: "Award-winning designs and quality construction",
    },
    {
      icon: Users,
      title: "Trust",
      description: "Building lasting relationships with our clients",
    },
    {
      icon: Target,
      title: "Innovation",
      description: "Pioneering sustainable development solutions",
    },
    {
      icon: TrendingUp,
      title: "Growth",
      description: "Consistent delivery and expanding horizons",
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <span className="inline-block px-3 py-1 mb-4 text-sm font-semibold text-accent bg-accent/10 rounded-full">
              About Bhoomatha Group
            </span>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
              Transforming Spaces,
              <span className="text-gradient block">Enriching Lives</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              For over 15 years, Bhoomatha Group has been at the forefront of real estate
              development, creating landmarks that define modern living. Our commitment to
              quality, innovation, and customer satisfaction has made us a trusted name in
              the industry.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We believe in creating not just buildings, but communities where dreams flourish
              and futures are built. Every project reflects our dedication to excellence and
              our vision for sustainable urban development.
            </p>

            <Button size="lg" className="btn-primary">
              Learn More About Us
            </Button>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="glass-effect p-6 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-gradient-gold rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 font-heading">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          <div className="bg-gradient-primary text-primary-foreground p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4 font-heading">Our Mission</h3>
            <p className="text-primary-foreground/90">
              To create exceptional living and working spaces that enhance quality of life
              while contributing to sustainable urban development and community growth.
            </p>
          </div>
          
          <div className="bg-gradient-gold text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4 font-heading">Our Vision</h3>
            <p className="text-white/90">
              To be the most trusted and innovative real estate developer, setting new
              benchmarks in design, quality, and customer satisfaction across the nation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
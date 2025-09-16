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
            <span className="inline-block px-3 py-1 mb-4 text-sm font-semibold text-primary-foreground bg-primary/60 rounded-full">
              About Bhoomatha Group
            </span>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
            Trusted Expertise, 
              <span className="text-primary block">Sustainable Growth</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            Bhoomatha Real Estates 
 Established in 1999 and incorporated as a Private Limited company in 2010 with ₹6 Crores authorized capital, Bhoomatha is a leading real estate developer in Andhra Pradesh and Telangana.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Leveraging over 25 years of expertise, we specialize in premium apartments, independent homes, and villas across Visakhapatnam, Vizianagaram, Srikakulam, Vijayawada, and Khammam. Our projects combine modern design, timely delivery, and sustainability, featuring eco-friendly Sandalwood and Teakwood plantations.
Renowned for reliability, innovation, and creating green communities, Bhoomatha delivers enduring value for generations.

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
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 font-heading text-primary">{feature.title}</h3>
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
    </section>
  );
};

export default AboutSection;
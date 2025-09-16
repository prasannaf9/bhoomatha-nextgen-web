import { Star, Quote } from "lucide-react";
import { Card } from "@/components/ui/card";
import credaiLogo from "@/assets/credai.png";
import reraLogo from "@/assets/rera.jpg";
import naredcoLogo from "@/assets/naredco.png";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      role: "Homeowner, Bhoomatha Heights",
      content: "The quality of construction and attention to detail exceeded our expectations. The team was professional throughout the entire process.",
      rating: 5,
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Business Owner",
      content: "Our office space at Corporate Plaza has transformed how we work. The amenities and location are perfect for our growing team.",
      rating: 5,
    },
    {
      id: 3,
      name: "Amit Patel",
      role: "Villa Owner",
      content: "Living in Villa Paradise has been a dream come true. The luxury finishes and private garden make it feel like a resort.",
      rating: 5,
    },
  ];

  const partners = [
    { 
      name: "CREDAI", 
      logo: credaiLogo,
      alt: "CREDAI - Confederation of Real Estate Developers' Associations of India"
    },
    { 
      name: "RERA", 
      logo: reraLogo,
      alt: "RERA - Real Estate Regulatory Authority"
    },
    { 
      name: "NAREDCO", 
      logo: naredcoLogo,
      alt: "NAREDCO - National Real Estate Development Council"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Testimonials */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 mb-6 text-xl font-semibold text-primary-foreground bg-primary/60 backdrop-blur-sm rounded-full font-cursive italic tracking-wider">
              Client Stories
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real experiences from satisfied customers who've made Bhoomatha their choice
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={testimonial.id}
                className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Quote className="h-8 w-8 text-accent mb-4" />
                
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                
                <p className="text-muted-foreground text-lg mb-6 italic">
                  "{testimonial.content}"
                </p>
                
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Partners */}
        <div className="border-t pt-16">
          <div className="text-center mb-12">
            <h3 className="text-5xl font-bold mb-4 font-heading">Trusted By Leading Associations</h3>
            <p className="text-xl text-muted-foreground">
              Partnering with industry leaders to deliver excellence
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-4 bg-white rounded-xl hover:shadow-md transition-all h-24 w-48"
              >
                <img 
                  src={partner.logo} 
                  alt={partner.alt}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
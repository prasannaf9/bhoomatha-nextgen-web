import { ArrowRight, Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)`,
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-foreground font-heading">
            Ready to Find Your Dream Property?
          </h2>
          
          <p className="text-xl text-primary-foreground/90 mb-8">
            Connect with our expert team today and take the first step towards your
            ideal home or investment opportunity.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+917799753333">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <Phone className="mr-2 h-5 w-5" />
                Get in Touch
              </Button>
            </a>
            
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm text-primary-foreground border-primary-foreground/30 hover:bg-white/20"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Schedule Consultation
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-primary-foreground/20">
            {[
              { label: "Response Time", value: "< 2 Hours" },
              { label: "Customer Satisfaction", value: "98%" },
              { label: "Properties Available", value: "150+" },
            ].map((stat) => (
              <div key={stat.label} className="text-primary-foreground">
                <div className="text-2xl font-bold font-heading">{stat.value}</div>
                <div className="text-sm text-primary-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
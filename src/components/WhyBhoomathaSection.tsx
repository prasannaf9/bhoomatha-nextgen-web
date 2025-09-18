import { Check, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBuilding from "@/assets/hero-building.jpg";

const reasons: { title: string; highlight?: string }[] = [
  { title: "High ROI opportunities", highlight: "7-8%+" },
  { title: "0% Capital Gains on select categories" },
  { title: "Appreciation potential", highlight: "up to 10%" },
  { title: "Unmatched quality & on-time delivery" },
  { title: "Trusted developer with decades of experience" },
  { title: "Transparent processes and compliance" },
  { title: "Prime, fast-growing locations" },
  { title: "Dedicated customer support" },
];

const WhyBhoomathaSection = () => {
  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-background to-muted/30 px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center font-heading mb-10 md:mb-14">
          Why Choose <span className="text-primary">Bhoomatha</span>?
        </h2>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 items-stretch">
          {/* Left: Image - Full height on large screens */}
          <div className="lg:w-1/3 h-[500px] lg:h-auto">
            <img 
              src={heroBuilding} 
              alt="Bhoomatha Properties" 
              className="w-full h-full object-cover rounded-2xl shadow-lg"
            />
          </div>
          
          {/* Right: Reasons - Scrollable container */}
          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
              {reasons.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-xl border bg-card/60 backdrop-blur-sm p-4 hover:shadow-md transition-all h-full"
                >
                  <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-4 w-4" />
                  </div>
                  <p className="text-sm sm:text-base text-foreground">
                    {item.title}
                    {item.highlight && (
                      <>
                        {" "}
                        <span className="text-primary font-semibold">{item.highlight}</span>
                      </>
                    )}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="https://www.bhoomathagroup.com/contact-us" target="_blank" className="btn-primary h-11 rounded-md px-8 inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0">Enquire Now</a>
              <a href="tel:91-77997-53333" target="_blank" className="border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 rounded-md px-8 inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0">Call Back</a>
              <a href="watsup:91-77997-53333" target="_blank" className="border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 rounded-md px-8 inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0">WhatsApp</a>
            </div>
          </div>

          {/* Right: Image */}
          <div className="lg:col-span-4 xl:col-span-4 relative min-h-[320px] md:min-h-[460px] rounded-2xl overflow-hidden border">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${heroBuilding})` }}
            />
            
            {/* Floating CTAs */}
            
          </div>
        </div>
    </section>
  );
};

export default WhyBhoomathaSection;

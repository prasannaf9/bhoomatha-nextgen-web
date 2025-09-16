import { Check } from "lucide-react";
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
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-background to-muted/30 overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-center md:text-left font-heading mb-10 md:mb-14">
          Why Choose <span className="text-primary">Bhoomatha</span>?
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Reasons */}
          <div className="lg:col-span-6 xl:col-span-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {reasons.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-xl border bg-card/60 backdrop-blur-sm p-4 hover:shadow-md transition-all"
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
              <Button size="lg" className="btn-primary">Enquire Now</Button>
              <Button variant="outline" size="lg">Call Back</Button>
              <Button variant="outline" size="lg">WhatsApp</Button>
            </div>
          </div>

          {/* Right: Image */}
          <div className="lg:col-span-6 xl:col-span-7 relative min-h-[320px] md:min-h-[460px] rounded-2xl overflow-hidden border">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${heroBuilding})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-l from-background/60 via-background/20 to-transparent" />
            {/* Optional bottom info bar */}
            <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2 justify-end">
              <div className="rounded-full bg-background/80 backdrop-blur px-4 py-2 text-sm border">
                Premium Locations
              </div>
              <div className="rounded-full bg-background/80 backdrop-blur px-4 py-2 text-sm border">
                Quality Construction
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyBhoomathaSection;

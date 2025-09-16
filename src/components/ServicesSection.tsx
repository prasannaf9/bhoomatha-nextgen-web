import { Building, Building2, LandPlot, Hotel, Home as HomeIcon, Briefcase, Home, BuildingIcon, Factory } from "lucide-react";
import { motion } from "framer-motion";

const ServicesSection = () => {
  const categories = [
    {
      icon: Home,
      title: "Residential",
      description: "Luxury Apartments"
    },
    {
      icon: BuildingIcon,
      title: "Townships",
      description: "Planned Communities"
    },
    {
      icon: Briefcase,
      title: "Ventures",
      description: "Joint Developments"
    },
    {
      icon: Building2,
      title: "Commercial",
      description: "Office & Retail"
    },
    {
      icon: Factory,
      title: "Industrial",
      description: "Estate & Parks"
    }
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 font-heading text-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="block">Find Your Perfect</span>
            <span className="text-primary">Property Type</span>
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Thousands of luxury home enthusiasts just like you have found their dream home
          </motion.p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 px-4">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              className="group relative bg-card p-4 rounded-xl border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col items-center"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10 text-center flex flex-col items-center">
                <div className="w-24 h-24 flex items-center justify-center mb-4 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <category.icon className="w-12 h-12" />
                </div>
                <h3 className="text-lg font-bold text-foreground">{category.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{category.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

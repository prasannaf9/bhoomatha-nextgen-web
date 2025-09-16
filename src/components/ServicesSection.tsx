import { Home, Building2, Briefcase, Building, Landmark, Factory, Home as HomeOutline, Building2 as Building2Outline, Briefcase as BriefcaseOutline, Building as BuildingOutline, Factory as FactoryOutline, Handshake } from "lucide-react";
import { motion } from "framer-motion";

const ServicesSection = () => {
  const categories = [
    {
      icon: HomeOutline,
      title: "Residential",
      description: "Luxury Apartments"
    },
    {
      icon: Building2Outline,
      title: "Commercial",
      description: "Office & Retail"
    },
    {
      icon: Handshake,
      title: "Ventures",
      description: "Joint Developments"
    },
    {
      icon: BuildingOutline,
      title: "Townships",
      description: "Planned Communities"
    },
    {
      icon: FactoryOutline,
      title: "Industrial",
      description: "Estates & Parks"
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
    <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Property Types
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find your perfect property type from our diverse portfolio
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              className="group relative bg-white p-6 rounded-2xl border-2 border-gray-100 hover:border-primary/50 transition-all duration-300 flex flex-col items-center text-center"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={itemVariants}
              whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
            >
              <div className="mb-5">
                <category.icon className="w-16 h-16 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">{category.title}</h3>
              <p className="text-gray-600 text-sm">{category.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

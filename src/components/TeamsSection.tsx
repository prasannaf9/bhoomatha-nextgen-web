import { motion } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import placeholder from "@/assets/team.jpg";

const TeamsSection = () => {
  const teamMembers = [
    { id: 1, name: "T. Purna Chandra Rao", designation: "Chairman & Managing Director", image: placeholder },
    { id: 2, name: "S. Venkateswara Rao", designation: "Executive Director", image: placeholder },
    { id: 3, name: "K. Suresh Kumar", designation: "Chief Operating Officer", image: placeholder },
    { id: 4, name: "M. Ramesh Babu", designation: "Chief Financial Officer", image: placeholder },
    { id: 5, name: "P. Lakshmi Narayana", designation: "General Manager", image: placeholder },
    { id: 6, name: "R. Srinivasa Rao", designation: "Project Manager", image: placeholder },
    { id: 7, name: "K. Satya Prakash", designation: "Sales Manager", image: placeholder },
    { id: 8, name: "M. Vijay Kumar", designation: "Marketing Manager", image: placeholder },
    { id: 9, name: "P. Anil Kumar", designation: "Site Engineer", image: placeholder },
    { id: 10, name: "S. Rajesh Kumar", designation: "Architect", image: placeholder },
    { id: 11, name: "K. Prasad Rao", designation: "Legal Advisor", image: placeholder },
    { id: 12, name: "M. Srinivas", designation: "HR Manager", image: placeholder },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const membersPerSlide = 4;
  const totalSlides = Math.ceil(teamMembers.length / membersPerSlide);

  // Simplified getCurrentMembers with modulo for wrap-around
  const getCurrentMembers = () => {
    const startIndex = currentIndex * membersPerSlide;
    return teamMembers.slice(startIndex, startIndex + membersPerSlide);
  };
  
  

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const [isPaused, setIsPaused] = useState(false);

//   useEffect(() => {
//     if (!isPaused) {
//       const interval = setInterval(() => {
//         nextSlide();
//       }, 3000);
//       return () => clearInterval(interval);
//     }
//   }, [isPaused, nextSlide]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="teams" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Team
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Meet the experienced professionals who drive Bhoomatha Group's success and innovation
          </motion.p>
        </div>

        {/* Teams Slider */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-primary hover:text-white"
            aria-label="Previous team members"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-primary hover:text-white"
            aria-label="Next team members"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Slider Container */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {getCurrentMembers().map((member) => (
              <motion.div
                key={member.id}
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-6 text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-600">{member.designation}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalSlides }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-primary" : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamsSection;
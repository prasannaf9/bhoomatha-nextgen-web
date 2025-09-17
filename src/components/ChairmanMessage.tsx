import { motion } from "framer-motion";
import { useState } from "react";
import placeholder from "../assets/chairman.webp";

const ChairmanMessage = () => {
  return (
    <section id="chairman-message">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 items-center">


          <div>
              <motion.div 
                className="my-auto"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <img
                  src={placeholder}
                  alt="Chairman"
                  className="w-full h-full object-cover my-auto rounded-2xl"
                />
              </motion.div>
            </div>
            {/* Left Side - Content - 10 divs */}
            <div className="p-8 md:p-12">
              <div>
                <div>
                  <div>
                    <div>
                      <div>
                        <motion.h2 
                          className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6 }}
                          viewport={{ once: true }}
                        >
                          Chairman's Message
                        </motion.h2>
                        
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                          viewport={{ once: true }}
                        >
                          <div>
                            <div>
                              <div>
                                <div>
                                  <div>
                                    <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                                      Welcome to Bhoomatha Group, where vision meets excellence in real estate development. 
                                      Our journey has been built on the foundation of trust, innovation, and unwavering 
                                      commitment to delivering exceptional value to our customers and stakeholders.
                                    </p>
                                    
                                    <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                                      At Bhoomatha, we believe in creating more than just structures; we build communities 
                                      that foster growth, prosperity, and sustainable living. Each project we undertake 
                                      reflects our dedication to quality, transparency, and customer satisfaction.
                                    </p>
                                    
                                    
                                    <div className="border-t-2 border-gray-200 pt-4">
                                      <p className="text-xl font-semibold text-gray-900">
                                        With Warm Regards,
                                      </p>
                                      <p className="text-lg text-primary font-medium">
                                        Chairman and Managing Director
                                      </p>
                                      <p className="text-gray-600">
                                        T.Purna Chadra Rao
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Side - Image - 2 divs */}
         
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChairmanMessage;

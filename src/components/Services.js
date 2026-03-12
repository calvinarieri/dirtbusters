import React from "react";
import Card from "./Card";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import RequestForm from "./RequestForm";
import { supabase } from "../utilities/supabase";
import { OrderContext } from "../contexts/OrderContext";

// Fallback data in case Supabase is not available
const fallbackServices = [
  {
    id: 1,
    name: "Wash & Fold",
    amount: 200,
    unit: "kg",
    code: "WF001",
    description: "Professional washing and folding service"
  },
  {
    id: 2,
    name: "Dry Cleaning",
    amount: 150,
    unit: "piece",
    code: "DC001",
    description: "Premium dry cleaning for delicate items"
  },
  {
    id: 3,
    name: "Ironing Service",
    amount: 100,
    unit: "piece",
    code: "IR001",
    description: "Professional ironing and pressing"
  },
  {
    id: 4,
    name: "Bed Linen Cleaning",
    amount: 300,
    unit: "set",
    code: "BL001",
    description: "Complete bed linen washing and sanitizing"
  },
  {
    id: 5,
    name: "Shoe Cleaning",
    amount: 250,
    unit: "pair",
    code: "SC001",
    description: "Professional shoe cleaning and polishing"
  }
];

export default function Services() {
  const [showAll, setShowAll] = React.useState(false);
  const [services, setServices] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [selectedService, setSelectedService] = React.useState({});
  const [usingFallback, setUsingFallback] = React.useState(false);

  React.useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const { data, error } = await supabase.from("service").select("*");
        if (error) {
          console.error("Error fetching data:", error);
          console.log("Using fallback services data");
          setUsingFallback(true);
          // Use fallback data if Supabase fails
          setServices(fallbackServices);
        } else {
          console.log("Services data received from Supabase:", data);
          // Use Supabase data if available, otherwise use fallback
          if (data && data.length > 0) {
            setServices(data);
            setUsingFallback(false);
          } else {
            console.log("No services data from Supabase, using fallback data");
            setServices(fallbackServices);
            setUsingFallback(true);
          }
        }
      } catch (error) {
        console.error("Failed to fetch services:", error);
        console.log("Using fallback services data due to network error");
        setUsingFallback(true);
        // Use fallback data in case of network error
        setServices(fallbackServices);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  // Decide which services to show
  const visibleServices = showAll ? services : services.slice(0, 3);

  return (
    <OrderContext.Provider value={{ selectedService, setSelectedService }}>
      <div
        id="services"
        className="bg-gradient-to-br from-gray-50 to-blue-50 py-16 md:py-24 font-DMSans"
      >
        <div className="container mx-auto px-4 lg:px-8">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              Our <span className="text-blue-600">Services</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-4"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional laundry services designed to make your life easier with exceptional quality and convenience.
            </p>
            {/* Debug indicator (remove in production) */}
            {process.env.NODE_ENV === 'development' && usingFallback && (
              <div className="mt-4 text-sm text-yellow-600 bg-yellow-50 px-3 py-1 rounded-full inline-block">
                Using demo data
              </div>
            )}
          </motion.div>

          {/* Services Grid */}
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600"></div>
            </div>
          ) : (
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {visibleServices.map((item, index) => (
                <motion.div
                  key={item.id || index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Card data={item} />
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Show More/Less Button */}
          {!loading && services.length > 3 && (
            <motion.div
              className="text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.button
                onClick={() => setShowAll(!showAll)}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-4 mx-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>
                  {showAll ? "Show Less Services" : "Explore All Services"}
                </span>
                <motion.span
                  className={`transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`}
                  animate={{ rotate: showAll ? 180 : 0 }}
                >
                  <FaArrowRight />
                </motion.span>
              </motion.button>
            </motion.div>
          )}
        </div>

        <RequestForm />
      </div>
    </OrderContext.Provider>
  );
}

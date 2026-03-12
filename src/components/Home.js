import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <motion.div
        id="home"
        className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex flex-col md:flex-row items-center justify-center font-DMSans relative overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-4000"></div>

        <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
            {/* Left Content */}
            <motion.div
              className="flex-1 text-center md:text-left pt-20 md:pt-0"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <motion.h1 
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-800 leading-tight mb-6"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <span className="text-blue-600">Dirt</span>
                <span className="text-gray-700">Busters</span>
                <div className="text-2xl md:text-4xl lg:text-5xl font-normal text-gray-600 mt-2">
                  Laundry & Dry Cleaners
                </div>
              </motion.h1>

              <motion.p 
                className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                Transform your laundry experience with our premium same-day services. 
                <span className="text-blue-600 font-semibold"> Free pickup & delivery</span>, 
                professional washing, ironing, and folding — all at your doorstep.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
              >
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Book Now
                </button>
                <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                  Learn More
                </button>
              </motion.div>

              {/* Features */}
              <motion.div
                className="flex flex-wrap justify-center md:justify-start gap-4 mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1, duration: 0.8 }}
              >
                {[
                  { icon: "🚚", text: "Free Pickup & Delivery" },
                  { icon: "⏰", text: "Same Day Service" },
                  { icon: "✨", text: "Professional Quality" }
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-gray-600">
                    <span className="text-2xl">{feature.icon}</span>
                    <span className="text-sm md:text-base">{feature.text}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              className="flex-1 flex justify-center items-center"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img 
                  src="assets/laundry.png" 
                  alt="Professional laundry service" 
                  className="rounded-3xl shadow-2xl max-w-full h-auto w-96 md:w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-3xl"></div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Stats Section */}
      <motion.div
        className="bg-white py-16 border-t border-gray-100"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "2", label: "Locations", suffix: "" },
              { number: "5", label: "Services", suffix: "+" },
              { number: "100", label: "Happy Clients", suffix: "+" },
              { number: "24", label: "Hour Turnaround", suffix: "hr" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}{stat.suffix}
                </div>
                <div className="text-gray-600 text-sm md:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}



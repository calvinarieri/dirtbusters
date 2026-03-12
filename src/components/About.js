import { motion } from "framer-motion";

export default function About() {
    return (
        <div className="bg-white py-16 md:py-24 font-DMSans" id="about">
            <div className="container mx-auto px-4 lg:px-8">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >uccessfully
                    <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
                        About <span className="text-blue-600">Us</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
                </motion.div>

                {/* Main Content */}
                <motion.div
                    className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    {/* Image */}
                    <motion.div
                        className="relative order-2 lg:order-1"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-3xl transform rotate-3"></div>
                        <img
                            src="assets/foldedClothes.png"
                            alt="Professionally folded clothes"
                            className="relative z-10 w-full h-auto rounded-3xl shadow-2xl"
                        />
                    </motion.div>

                    {/* Text Content */}
                    <div className="order-1 lg:order-2">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                                Your Trusted Laundry Partner
                            </h3>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Dirtbusters Laundry is your reliable laundry solution, dedicated to providing 
                                exceptional service and convenience. We offer a comprehensive range of services, 
                                including washing, drying, ironing, folding, and professional stain removal.
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Experience the Dirtbusters difference: quality, convenience, and affordability. 
                                With branches in Witeithie, Kibute, and Juja, Gate C Katerina, we're easily 
                                accessible to serve clients in surrounding areas.
                            </p>

                            {/* Features */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    { icon: "🚚", title: "Free Pickup & Delivery", desc: "We come to you" },
                                    { icon: "⏰", title: "Same Day Service", desc: "Quick turnaround" },
                                    { icon: "🧽", title: "Professional Cleaning", desc: "Expert care" },
                                    { icon: "💰", title: "Affordable Prices", desc: "Great value" }
                                ].map((feature, index) => (
                                    <motion.div
                                        key={index}
                                        className="flex items-start space-x-3 p-4 bg-gray-50 rounded-xl"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1, duration: 0.5 }}
                                        viewport={{ once: true }}
                                    >
                                        <span className="text-2xl">{feature.icon}</span>
                                        <div>
                                            <h4 className="font-semibold text-gray-800">{feature.title}</h4>
                                            <p className="text-sm text-gray-600">{feature.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Stats Section */}
                <motion.div
                    className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl py-12 px-8"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center text-white">
                        {[
                            { number: "2", label: "Locations" },
                            { number: "5+", label: "Services" },
                            { number: "100+", label: "Happy Clients" },
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                className="flex flex-col items-center"
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <div className="text-3xl md:text-5xl font-bold mb-2">{stat.number}</div>
                                <div className="text-sm md:text-lg font-medium opacity-90">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

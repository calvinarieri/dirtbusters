import { motion } from "framer-motion";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white" id="contact">
            <div className="container mx-auto px-4 lg:px-8 py-16">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-DMSans">
                        Contact <span className="text-blue-400">Us</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-4"></div>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        Ready to experience the best laundry service? Get in touch with us today!
                    </p>
                </motion.div>

                {/* Contact Information */}
                <motion.div
                    className="grid md:grid-cols-2 gap-8 md:gap-12 mb-16"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    {/* Branch 1 */}
                    <motion.div
                        className="bg-gray-800 rounded-3xl p-8 border border-gray-700 hover:border-blue-500 transition-colors duration-300"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <div className="flex items-center mb-6">
                            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mr-4">
                                <span className="text-2xl">📍</span>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white">Gate C, Juja</h3>
                                <p className="text-gray-400">Main Branch</p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <span className="text-blue-400 mr-3">📞</span>
                                <div>
                                    <p className="text-gray-300">Primary:</p>
                                    <a href="tel:0759926911" className="text-blue-400 hover:text-blue-300 transition-colors duration-300 text-lg font-semibold">
                                        +254 759 926 911
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <span className="text-blue-400 mr-3">📞</span>
                                <div>
                                    <p className="text-gray-300">Secondary:</p>
                                    <a href="tel:0742761211" className="text-blue-400 hover:text-blue-300 transition-colors duration-300 text-lg font-semibold">
                                        +254 742 761 211
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Branch 2 */}
                    <motion.div
                        className="bg-gray-800 rounded-3xl p-8 border border-gray-700 hover:border-blue-500 transition-colors duration-300"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <div className="flex items-center mb-6">
                            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mr-4">
                                <span className="text-2xl">📍</span>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white">Witeithie, Kibute</h3>
                                <p className="text-gray-400">Branch Location</p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <span className="text-blue-400 mr-3">📞</span>
                                <div>
                                    <p className="text-gray-300">Contact:</p>
                                    <a href="tel:0752262271" className="text-blue-400 hover:text-blue-300 transition-colors duration-300 text-lg font-semibold">
                                        +254 752 262 271
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Company Info */}
                <motion.div
                    className="text-center border-t border-gray-700 pt-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-4 md:mb-0">
                            <h3 className="text-2xl font-bold text-white mb-2">
                                <span className="text-blue-400">Dirt</span>Busters
                            </h3>
                            <p className="text-gray-400">Professional Laundry & Dry Cleaning Services</p>
                        </div>
                        <div className="flex space-x-6">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-blue-400">2</div>
                                <div className="text-sm text-gray-400">Locations</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-blue-400">24h</div>
                                <div className="text-sm text-gray-400">Service</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-blue-400">100+</div>
                                <div className="text-sm text-gray-400">Happy Clients</div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Copyright */}
                <motion.div
                    className="text-center mt-8 pt-8 border-t border-gray-700"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <p className="text-gray-400">
                        © {currentYear} DirtBusters. All rights reserved. | 
                        <span className="text-blue-400 ml-1">Quality Service, Every Time</span>
                    </p>
                </motion.div>
            </div>
        </div>
    );
}
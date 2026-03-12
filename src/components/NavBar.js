import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";

export default function NavBar(){
    const [open, setOpen] = useState(false);
    const navigationOptions = ["home", "about", "services", "testimonials", "contact"];

    return(
        <motion.nav 
            className="fixed z-50 top-0 w-full bg-white/90 backdrop-blur-lg border-b border-gray-100 shadow-sm"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    {/* Logo */}
                    <motion.div 
                        className="text-2xl md:text-3xl font-bold cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400 }}
                    >
                        <span className="text-blue-600">Dirt</span>
                        <span className="text-gray-700">Busters</span>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navigationOptions.map((option, index) => (
                            <motion.a
                                key={index}
                                href={`#${option.toLowerCase()}`}
                                className="text-gray-700 hover:text-blue-600 font-medium capitalize transition-colors duration-200 relative group"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 400 }}
                            >
                                {option}
                                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                            </motion.a>
                        ))}
                    </div>

                    {/* CTA Button for Desktop */}
                    <motion.button
                        className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Book Now
                    </motion.button>

                    {/* Mobile Menu Button */}
                    <motion.button
                        className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                        onClick={() => setOpen(!open)}
                        whileTap={{ scale: 0.95 }}
                    >
                        {!open ? (
                            <IoMenu className="text-2xl text-gray-700" />
                        ) : (
                            <IoMdClose className="text-2xl text-gray-700" />
                        )}
                    </motion.button>
                </div>

                {/* Mobile Navigation */}
                <motion.div
                    className={`md:hidden overflow-hidden ${open ? 'max-h-96' : 'max-h-0'}`}
                    initial={false}
                    animate={{ 
                        height: open ? "auto" : 0,
                        opacity: open ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="py-4 space-y-4 border-t border-gray-100">
                        {navigationOptions.map((option, index) => (
                            <motion.a
                                key={index}
                                href={`#${option.toLowerCase()}`}
                                className="block py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-medium capitalize transition-all duration-200 rounded-lg"
                                onClick={() => setOpen(false)}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                {option}
                            </motion.a>
                        ))}
                        <motion.button
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 mt-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                        >
                            Book Now
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </motion.nav>
    );
}
import { OrderContext } from "../contexts/OrderContext";
import { motion } from "framer-motion";
import React from "react";

export default function Card({ data }) {
    const { setSelectedService } = React.useContext(OrderContext);
    
    function handleRequestForm() {
        document.getElementById('serviceform').showModal();
    }

    return (
        <motion.div 
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-6 border border-gray-100 group relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            {/* Background gradient effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative z-10">
                {/* Service Name */}
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 text-center border-b-2 border-gray-100 pb-4 group-hover:border-blue-200 transition-colors duration-300">
                    {data.name}
                </h3>

                {/* Pricing */}
                <div className="text-center mb-8">
                    <div className="flex items-baseline justify-center gap-2 mb-2">
                        <span className="text-3xl md:text-4xl font-bold text-blue-600">
                            {data.amount}
                        </span>
                        <span className="text-lg font-medium text-gray-500">
                            KES
                        </span>
                    </div>
                    <div className="text-gray-600 font-medium">
                        per {data.unit}
                    </div>
                </div>

                {/* Service Features (if available) */}
                <div className="mb-8">
                    <div className="flex flex-wrap justify-center gap-2">
                        {/* You can add service features here based on your data structure */}
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">
                            Professional
                        </span>
                        <span className="bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full">
                            Same Day
                        </span>
                    </div>
                </div>

                {/* Order Button */}
                <motion.button
                    onClick={() => {
                        handleRequestForm();
                        setSelectedService(data.code);
                    }}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Order Now
                </motion.button>
            </div>
        </motion.div>
    );
}
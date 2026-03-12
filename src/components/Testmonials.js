import Slider from "react-slick";
import { motion } from "framer-motion";

export default function Testimonials() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        loop: true,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        dotsClass: "slick-dots custom-dots",
        arrows: false,
        fade: true,
        cssEase: 'linear'
    };

    return (
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 py-16 md:py-24" id="testimonials">
            <div className="container mx-auto px-4 lg:px-8">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 font-DMSans">
                        What Our <span className="text-blue-600">Clients</span> Say
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-4"></div>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Don't just take our word for it. Here's what our satisfied customers have to say about our services.
                    </p>
                </motion.div>

                {/* Testimonials Slider */}
                <motion.div
                    className="max-w-4xl mx-auto"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <Slider {...settings}>
                        <TestimonialsCard 
                            message="Amazing service and super affordable prices! Thank you so much for the fantastic job, keep it up. The quality exceeded my expectations and the pickup was so convenient." 
                            clientName="Calvin" 
                            branch="Gate C, Juja"
                            rating={5}
                        />
                        <TestimonialsCard 
                            message="I love how fast they respond to pick-ups, and they delivered my laundry just a few hours later. Thank you so much for the fantastic job. Professional service at its best!" 
                            clientName="Lilian" 
                            branch="Witeithie, Kibute"
                            rating={5}
                        />
                        <TestimonialsCard 
                            message="They did a fantastic job with my laundry. Everything was neatly folded and perfectly ironed. The attention to detail is impressive. Keep it up!" 
                            clientName="James" 
                            branch="Witeithie, Kibute"
                            rating={5}
                        />
                    </Slider>
                </motion.div>
            </div>
        </div>
    );
}

function TestimonialsCard({ message, clientName, branch, rating = 5 }) {
    return (
        <motion.div className="px-4">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mx-auto max-w-3xl relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full transform translate-x-16 -translate-y-16"></div>
                
                {/* Quote icon */}
                <div className="absolute top-6 left-6 text-4xl text-blue-200">
                    "
                </div>
                
                <div className="relative z-10">
                    {/* Rating */}
                    <div className="flex justify-center mb-6">
                        {[...Array(rating)].map((_, index) => (
                            <span key={index} className="text-yellow-400 text-2xl">★</span>
                        ))}
                    </div>

                    {/* Message */}
                    <blockquote className="text-center mb-8">
                        <p className="text-lg md:text-xl text-gray-700 leading-relaxed italic">
                            {message}
                        </p>
                    </blockquote>

                    {/* Client info */}
                    <div className="flex items-center justify-center">
                        <div className="relative">
                            <img 
                                className="w-16 h-16 rounded-full border-4 border-blue-100 shadow-lg" 
                                src="assets/noPhoto.png" 
                                alt={`${clientName} profile`} 
                            />
                            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
                        </div>
                        <div className="ml-4 text-center">
                            <h4 className="text-xl font-bold text-gray-800">{clientName}</h4>
                            <p className="text-gray-600">{branch}</p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
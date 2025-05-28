import Card from "./Card"
import { FaArrowRight } from "react-icons/fa";
import RequestForm from "./RequestForm";


export default function Services(){

    const services = ["1", "2", "3"]
    return(
        <div id="services" className="flex flex-col md:justify-center items-center md:my-28 font-DMSans bg-gray-50 py-8">
            <h1 className="font-bold md:text-6xl text-blue-400 mt-4 border-b-2 pb-4 text-4xl border-blue-500 px-9">Our services</h1>

            <div className="flex flex-col px-8 md:justify-center md:flex-row gap-4 md:gap-8 mt-10 md:mt-20 w-full">
                {services.map((service , index)=><Card />)}
            </div>

            <button className="text-2xl tracking-widest bg-blue-500 rounded-full text-white px-8 py-4 mt-20 flex items-center gap-4 hover:gap-6 transition-all">
                <span className="hidden md:inline-block">Explore more services</span> 
                <FaArrowRight />
            </button>

            <RequestForm />
        </div>
    )
}
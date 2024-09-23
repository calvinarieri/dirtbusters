import Card from "./Card"

export default function Services(){

    const services = ["1", "2", "3"]
    return(
        <div id="services" className="flex flex-col md:justify-center items-center md:my-28 font-DMSans">
            <h1 className="font-bold md:text-6xl text-blue-400 mt-4 border-b-2 pb-4 text-4xl border-blue-500 px-9">Our services</h1>
            <div className="flex flex-col px-2 md:justify-center md:flex-row gap-4 md:gap-8 mt-10 md:mt-20 w-full">
                {services.map((service , index)=><Card />)}
            </div>
        </div>
    )
}
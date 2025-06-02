

export default function About(){    
    return(
        <div className="flex flex-col md:justify-center items-center md:my-28 font-DMSans" id="about">
            <h1 className="font-bold md:text-6xl text-blue-400 mt-4 border-b-2 pb-4 text-4xl border-blue-500 px-9" > About us</h1>
            <div className="flex p-4 flex-col-reverse md:flex-row justify-center items-center gap-4 md:px-20 py-8">
                <img src="assets/foldedClothes.png" alt="iron box" className="ml-8 mt-4 md:ml-0 md:mt-0"  />
                <p className="md:p-0 w-full md:my-20  md:w-7/12  md:text-lg font-light font-DMSans text-center md:text-right">
                    Dirtbusters Laundry is your reliable laundry solution. 
                    We offer a comprehensive range of services, including washing, drying, ironing, folding, and professional stain removal. 
                    Enjoy the convenience of free pick-up and delivery, and experience the Dirtbusters difference: quality, convenience, and affordability. 
                    With branches in Witeithie, Kibute, and Juja, Gate C Katerina, we're easily accessible to serve clients in surrounding areas.
            </p>
            </div>
        </div>
    )
}
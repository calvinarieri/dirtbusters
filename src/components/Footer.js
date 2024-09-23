export default function Footer(){
    return(
        <div className="mt-40 bg-gray-50">
            <footer className="flex justify-center flex-col items-center ">
                    <h1 className="text-DMSans text-blue-700 border-b-2 pb-4 px-4 border-blue-400 text-4xl md:text-6xl mt-8">Contact us:</h1>

                    <div className="flex w-full flex-col px-10 gap-8 md:flex-row justify-around mt-16">
                        <div>
                            <h1 className="font-bold md:text-xl border-b-2 pb-2 border-gray-300">Gate C, Juja</h1>
                            <div className="flex flex-col gap-4 my-2 md:text-lg" >
                                <span className="light">Call: <a href="tel:0759926911"  className="text-blue-700">+254 7599 26911, </a></span>
                                <span>Call: <a href="tel:0742761211"  className="text-blue-700">+254 74276 1211</a></span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 my-2 text-lg" >
                            <h1 className="font-bold md:text-xl border-b-2 pb-2 border-gray-300" >Witeithie, Kibute</h1>
                            <div>                              
                                <span>Call: <a href="tel:0752262271" className="text-blue-700">+254 75226 2271</a></span>
                            </div>
                        </div>
                    </div>
            </footer>

            <div className="flex justify-center font-poppins text-sm md:text-md py-4 bg-gray-100 mt-8">
                <span className="text-gray-700">
                    Developed and maintained by 
                    <a href="https://calvinarieri.site/" className="text-blue-600 hover:text-blue-300 transition-colors duration-300 ml-1 font-semibold">
                    Arieri's World
                    </a>
                </span>
            </div>

        </div>
    )
}
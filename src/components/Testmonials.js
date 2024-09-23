export default function Testimonials (){
    return(
        <div className="flex justify-center flex-col items-center">
            <h1 className="font-bold md:text-6xl text-blue-400 mt-4 border-b-2 pb-4 font-DMSans text-4xl border-blue-500 px-9">Testimonials</h1>
            <div className="mt-24 px-4 flex flex-col gap-4 md:flex-row md:gap-8">
                <TestimonialsCard/>
                <TestimonialsCard/>
                <TestimonialsCard/>
            </div>

        </div>
    )
}

function TestimonialsCard(){
    return(
        <div className="border-2 w-full md:w-96 p-4 flex flex-col justify-center items-center text-center rounded-2xl">
            <p className=" text-sm md:text-lg font-DMSans">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.                 
            </p>
            <span className="mt-4 DMSans">~ <em className="font-bold">client name</em> ~</span>
        </div>
    )
}
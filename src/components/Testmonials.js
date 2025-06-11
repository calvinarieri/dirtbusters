import Slider from "react-slick";

export default function Testimonials (){
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        loop:true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,  
    };
    return(
        <div className="flex justify-center flex-col items-center">
            <h1 className="font-bold md:text-6xl text-blue-400 mt-4 border-b-2 pb-4 font-DMSans text-xl md:text-4xl border-blue-500 px-9">What Our Clients Say</h1>
            <div className="w-screen md:w-8/12 md:py-18">
                <Slider {...settings}>
                    <TestimonialsCard message="Amazing service and super affordable prices Thank you so much for the fantastic job, keep it up" clientName="Calvin" branch="Gate C, Juja"/>
                    <TestimonialsCard message="I love how fast they respond to pick-ups, and they delivered my laundry just a few hours later. Thank you so much for the fantastic job." clientName="Lilian" branch="Witeithie, Kibute"/>
                    <TestimonialsCard message="They did a fantastic job with my laundry Everything was neatly folded and perfectly ironed.keep it up" clientName="James" branch="Witeithie, Kibute"/>              
                </Slider>
            </div>
        </div>
    )
}

function TestimonialsCard({message, clientName, branch}){
    return(
    <figure class="flex flex-col items-center justify-center p-8 text-center bg-white rounded-t-lg md:rounded-t-none md:rounded-lg shadow-2xl shadow-blue-100 dark:border-gray-700 ">
        <blockquote class="max-w-2xl mx-auto mb-4  lg:mb-8">          
            <p class="my-4">{message}</p>
        </blockquote>
        <figcaption class="flex items-center justify-center ">
            <img class="rounded-full w-9 h-9" src="assets/noPhoto.png" alt="profile" />
            <div class="space-y-0.5 font-medium  text-left rtl:text-right ms-3">
                <div>{clientName}</div>
                <div class="text-sm text-gray-500">{branch}</div>
            </div>
        </figcaption>    
    </figure>
    )
}
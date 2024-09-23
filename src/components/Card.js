export default function Card(){
    return(
        <div className="border-2 w-full sm:w-3/12 p-4 flex flex-col justify-center items-center tracking-widest font-DMSans rounded">
            <h1 className="border-b-2 pb-4 text-xl w-full text-center">Service title</h1>
            <div className="flex gap-2 items-end my-8">
                <h2 className="text-4xl text-gray-600 tracking-wide">40KES</h2>
                <span className="text-2xl font-bold text-gray-500">/kg</span>
            </div>
            <button className="bg-blue-400 w-full text-white px-4 py-2 font-bold text-lg tracking-wide rounded">Order</button>
        </div>
    )
}
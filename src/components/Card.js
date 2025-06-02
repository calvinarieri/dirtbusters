export default function Card(){
    function handleRequestForm(){
        document.getElementById('serviceform').showModal()
    }
    return(
        <div className="border-2 border-gray-300 w-full sm:w-96 p-4 flex flex-col justify-center items-center tracking-widest font-DMSans rounded">
            <h1 className="border-b-2 md:pb-4 pb-2 font-bold md:text-2xl w-full text-center">Service title</h1>
            <div className="flex gap-2 items-end my-4 md:my-8">
                <h2 className="md:text-4xl text-2xl text-gray-600 tracking-wide">40KES</h2>
                <span className="text-xl font-bold text-gray-500">/kg</span>
            </div>
            <button onClick={handleRequestForm} className="bg-blue-500 hover:bg-blue-400 w-full text-white px-4 py-2 font-bold text-lg tracking-widest md:mb-4 rounded">Order now</button>
        </div>
    )
}
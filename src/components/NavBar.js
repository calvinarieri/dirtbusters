import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

export default function NavBar(){

    const [open , setOpen]  = useState(false)
    const navigationOptions  = ["Home", "Services", "About" , "Testimonials"]

    return(
        <nav className="flex relative  justify-around md:justify-between tracking-wide font-DMSans  px-4 py-4 font-bold text-xl items-center" >
            <div className="text-lg md:text-2xl">
                <span className="text-blue-600">Dirt</span><span className="text-gray-600 ">Busters</span>
            </div>
            <div>
                <ol className={`${open ? " absolute z-30 top-14  left-0 px-4 py-8 h-screen bg-white w-full" :  'hidden ' }  md:flex gap-4`}>
                    {navigationOptions.map((option,  index)=><li 
                    className ={"hover:text-blue-400 "  + open &&"mt-4 border-b-2 w-full p-2"} 
                    onClick={()=>open&&setOpen(!open)}
                     key = {index}>
                        <a href={`#${option.toLowerCase()}`} className="active:text-blue-400 focus:text-blue-400">{option}</a>
                    </li>)}
                </ol>
            </div>
            <div className="text-md md:hidden " >                
                {!open ? <IoMenu className="text-lg"  onClick={()=>setOpen(!open)} /> : <IoMdClose onClick={()=>setOpen(!open)}  />}
            </div>
        </nav>
    )
}